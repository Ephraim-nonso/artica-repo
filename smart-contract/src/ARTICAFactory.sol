// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;
import {ARTICA} from "./ARTICA.sol";
import {ArticaTicket} from "./ArticaTicket.sol";

import {Ownable} from "openzeppelin/access/Ownable.sol";

contract ARTICAFactory is Ownable {
    address[] _artica;
    address[] _articaTicket;

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

    function DeployArticaTicket(
        string memory _name,
        string memory _symbol
    ) external onlyOwner returns (ArticaTicket _tAddr) {
        _tAddr = new ArticaTicket(_name, _symbol);
        _articaTicket.push(address(_tAddr));
    }

    function getAllArticaNFT()
        external
        view
        returns (address[] memory articaAddr)
    {
        articaAddr = _artica;
    }
}
