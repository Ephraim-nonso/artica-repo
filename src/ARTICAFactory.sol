// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import {ARTICA} from "./NFTsMADEbyARTICA.sol";

contract ARTICAFactory {
    address[] _artica;

    event Creation(address indexed _addr);

    function createNFT(
        string memory _name,
        string memory _sym,
        string memory _metadata,
        bytes memory signature
    ) external returns (ARTICA _addr) {
        _addr = new ARTICA(signature, _name, _sym, _metadata, msg.sender);
        _artica.push(address(_addr));
        emit Creation(address(_addr));
        // _addr.init(signature, msg.sender);
    }

    function getAllArticaNFT()
        external
        view
        returns (address[] memory articaAddr)
    {
        articaAddr = _artica;
    }
}
