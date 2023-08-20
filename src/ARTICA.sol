// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

import {ERC721} from "openzeppelin/token/ERC721/ERC721.sol";
import {DigitalSignature} from "./DigitalSignature.sol";

contract ARTICA is ERC721 {
    string public baseURI;

    mapping(bytes => address) _signed;

    struct Auction {
        uint256 start; // the beginning of the Auction (block.timestamp + start)
        uint256 end; // the deadline of the Auction (block.timestamp + deadline)
        address bidder; // the address from which the highest bid was made, if any
        uint256 bid; // the highest bid
    }
    // solhint-disable-next-line
    Auction auction;

    //auction event
    event Auctioned(
        uint indexed strt,
        uint indexed deadine,
        uint indexed price
    );
    event bided(address bidder, uint price);
    event sign(address owner);
    event settled(address _bidder, address owner, uint amount, uint token);

    constructor(
        bytes memory sig,
        string memory _name,
        string memory _sym,
        string memory _metadata,
        address _minter
    ) ERC721(_name, _sym) {
        baseURI = string(abi.encodePacked("ipfs://", _metadata));
        _safeMint(_minter, 1);
        _signed[sig] = _minter;
        emit sign(_minter);
    }

    function getDomain() external returns (bytes32) {
        return DigitalSignature.DOMAIN_SEPARATOR();
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    // solhint-disable-next-line
    function royalOwner(
        bytes calldata sig
    ) external view returns (address owner, bool status) {
        owner = _signed[sig];
        status = DigitalSignature.splitSignatureAndVerify(
            sig,
            owner,
            name(),
            symbol()
        );
        require(status, "invalid signer");
    }

    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        _requireMinted(tokenId);

        string memory baseURI_ = _baseURI();
        return
            bytes(baseURI_).length > 0
                ? string(abi.encodePacked(baseURI_))
                : "";
    }

    /////Auction Phase/////////

    function auctionNFT(uint startTime, uint deadline, uint _bid) external {
        require(ownerOf(1) == msg.sender, "Permision denied!!");
        auction.end = block.timestamp + startTime + deadline;
        auction.bid = _bid;
        auction.start = block.timestamp + startTime;
        emit Auctioned(startTime, deadline, _bid);
    }

    function bid() external payable {
        uint currentHighBid = auction.bid;
        address _bidder = auction.bidder;
        require(msg.value > currentHighBid, "low bid");
        require(
            block.timestamp < auction.end && block.timestamp >= auction.start,
            "Invalid Auction period!"
        );
        if (_bidder != address(0)) {
            (bool status, ) = payable(_bidder).call{value: currentHighBid}("");
            require(status == true, "transfer filed");
        }
        auction.bid = msg.value;
        auction.bidder = msg.sender;
        emit bided(msg.sender, msg.value);
    }

    function end() external {
        require(block.timestamp >= auction.end, "Auction still Active");
        address owner = ownerOf(1);
        address recipient = auction.bidder == address(0x0)
            ? address(0x0)
            : auction.bidder;
        if (recipient != address(0x0)) {
            (bool status, ) = payable(owner).call{value: auction.bid}("");
            require(status, "transfer failed");
            _transfer(owner, recipient, 1);
            emit settled(auction.bidder, owner, auction.bid, 1);
        }
    }

    function getAuction() external view returns (Auction memory _auction) {
        _auction = auction;
    }

    receive() external payable {}
}
