// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import {ERC721} from "openzeppelin/token/ERC721/ERC721.sol";

contract AticaTicket is ERC721 {
    constructor(
        address owner,
        string memory name,
        string memory symbol
    ) ERC721(name, symbol) {}
}
