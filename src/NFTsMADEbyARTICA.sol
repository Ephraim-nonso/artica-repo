// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {ERC721} from "openzeppelin/token/ERC721/ERC721.sol";
import {DigitalSignature} from "./DigitalSignature.sol";

contract ARTICA is ERC721, DigitalSignature {
    uint256 public number;
    string public baseURI;

    event sign(address owner);

    constructor(
        string memory _name,
        string memory _sym,
        string memory _metadata,
        address _minter,
        bytes memory sig
    ) ERC721(_name, _sym) {
        baseURI = string(abi.encodePacked("ipfs://", _metadata));
        _safeMint(_minter, 1);
        bool status = splitSignatureAndVerify(sig, _minter, _name, _sym);
        require(status, "Invalid signer");
        _signed[sig] = _minter;
        emit sign(_minter);
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
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
}
