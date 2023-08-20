// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

import {Script, console2} from "forge-std/Script.sol";
import {ARTICAFactory} from "../src/ARTICAFactory.sol";
import {ARTICA} from "../src/ARTICA.sol";
import {ArticaTicket} from "../src/ArticaTicket.sol";

contract ArticaScript is Script {
    ARTICAFactory ARTICAlord;
    ARTICA artica;
    ArticaTicket ticket;

    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        ARTICAlord = new ARTICAFactory();
        artica = new ARTICA(
            bytes("signature"),
            "test",
            "TST",
            "cid",
            msg.sender
        );
        ticket = new ArticaTicket("TicketTest", "TTs");

        vm.stopBroadcast();
    }
}
//84531

// v0.8.13+commit.abaa5c0e

// Un-Check to sho
