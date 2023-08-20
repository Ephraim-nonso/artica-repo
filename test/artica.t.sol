// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {ARTICAFactory} from "../src/ARTICAFactory.sol";
import {DigitalSignature} from "../src/DigitalSignature.sol";
import {ARTICA} from "../src/ARTICA.sol";
import {SigUtils} from "./sigutils.sol";

contract ArticaTest is Test {
    ARTICA _artica1;
    ARTICA _artica2;

    ARTICAFactory _factory;
    SigUtils _utils;

    uint256 internal _ownerPrivateKey;

    address internal _owner;
    // solhint-disable-next-line
    bytes signature;

    function setUp() public {
        _factory = new ARTICAFactory();
        _artica2 = new ARTICA(
            bytes("0xerf245"),
            "test",
            "tet",
            "meta",
            msg.sender
        );
        _utils = new SigUtils(_artica2.getDomain());

        _ownerPrivateKey = 0xb47c0bcc14aa16bda3be52f08eb103d156d5ba3c61aec4623b76bafa30a51229;
        _owner = vm.addr(_ownerPrivateKey);

        //trial
        SigUtils.Identity memory _identity = SigUtils.Identity({
            wallet: _owner,
            name: "Africa",
            symbol: "ACA"
        });

        bytes32 digest = _utils.getTypedDataHash(_identity);
        // console.logBytes(digest);

        (uint8 v, bytes32 r, bytes32 s) = vm.sign(_ownerPrivateKey, digest);

        signature = combineSignature(v, r, s);

        console.logBytes(signature);
        // _dig.verify(_identity.wallet, "Africa", "ACA", v, r, s);
        // _dig.splitSignatureAndVerify(signature, _owner, "Africa", "ACA");
    }

    // solhint-disable-next-line
    function test_Identity() public {
        vm.startPrank(_owner);
        //create an nft with the factory
        _artica1 = _factory.createNFT("Africa", "ACA", "rta77", signature);
        //check the metadata return for the only nft
        _artica1.tokenURI(1);
        // _artica1.royalOwner(signature);
        _artica1.getDomain();

        //test for Auction stage
        _artica1.auctionNFT(3 days, 7 days, 1 ether);

        vm.stopPrank();
        address bidder = makeAddr("bidder");
        vm.deal(bidder, 3 ether);
        vm.startPrank(bidder);
        //test for failed bid before startTime
        vm.expectRevert("Invalid Auction period!");
        _artica1.bid{value: 3 ether}();
        //test for a valid bid ina valid period
        vm.warp(block.timestamp + 3 days);
        _artica1.bid{value: 3 ether}();

        vm.stopPrank();
        // test for failed bid with lower fee
        address bidder2 = makeAddr("bidder1");
        vm.deal(bidder2, 3.5 ether);
        vm.startPrank(bidder2);
        vm.expectRevert("low bid");
        _artica1.bid{value: 2 ether}();
        _artica1.bid{value: 3.5 ether}();
        vm.stopPrank();
        console.log(
            bidder.balance,
            bidder2.balance,
            _owner.balance,
            address(_artica1).balance
        );
        //end Auction
        vm.warp(block.timestamp + 7 days);
        _artica1.end();

        //check all state are correct
        assert(_artica1.ownerOf(1) == bidder2 && bidder2.balance == 0);
        assert(_owner.balance == 3.5 ether && _artica1.ownerOf(1) != _owner);
    }

    function combineSignature(
        uint8 v,
        bytes32 r,
        bytes32 s
    ) public pure returns (bytes memory) {
        return abi.encodePacked(r, s, v);
    }
}
// 9 500 000 000 000 000 000
