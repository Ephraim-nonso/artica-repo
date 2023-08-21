// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;
import {ERC721} from "openzeppelin/token/ERC721/ERC721.sol";
import {Ownable} from "openzeppelin/access/Ownable.sol";

contract ArticaTicket is ERC721, Ownable {
    string baseURI;
    uint256 public TokenIdCounter;
    bool Mintable;
    uint price;

    mapping(address => bool) hasMinted;

    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {}

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function _setBaseURI(string memory _metadata) external onlyOwner {
        baseURI = string(abi.encodePacked("ipfs://", _metadata));
    }

    function mint() external payable {
        assert(msg.value > price);
        require(
            bytes(_baseURI()).length != 0 && Mintable,
            "not minting period"
        );
        TokenIdCounter = TokenIdCounter + 1;
        require(hasMinted[msg.sender], "Minted already");
        _safeMint(msg.sender, TokenIdCounter);
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

    function toggleMint() external onlyOwner {
        Mintable = !Mintable;
    }

    function setPrice(uint _amount) external onlyOwner {
        price = _amount;
    }
}
