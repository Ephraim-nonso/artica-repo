// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {ARTICAFactory} from "../src/ARTICAFactory.sol";
import {DigitalSignature} from "../src/DigitalSignature.sol";
import {ARTICA} from "../src/NFTsMADEbyARTICA.sol";
import {SigUtils} from "./sigutils.sol";

contract ArticaTest is Test {
    ARTICA _artica1;
    ARTICA _artica2;

    ARTICAFactory _factory;
    SigUtils _utils;
    DigitalSignature _dig;

    uint256 internal _ownerPrivateKey;

    address internal _owner;

    function setUp() public {
        _factory = new ARTICAFactory();
        _dig = new DigitalSignature();
        _utils = new SigUtils(_dig.DOMAIN_SEPARATOR());

        _ownerPrivateKey = 0xA11CE;
        _owner = vm.addr(_ownerPrivateKey);

        //trial
        SigUtils.Identity memory _identity = SigUtils.Identity({
            wallet: _owner,
            name: "Africa",
            symbol: "ACA"
        });

        bytes32 digest = _utils.getTypedDataHash(_identity);

        (uint8 v, bytes32 r, bytes32 s) = vm.sign(_ownerPrivateKey, digest);

        _dig.verify(_identity.wallet, "Africa", "ACA", v, r, s);
        bytes memory signature = combineSignature(v, r, s);
        // console.logBytes(signature);

        _dig.splitSignatureAndVerify(signature, _owner, "Africa", "ACA");

        vm.startPrank(_owner);
        _artica2 = new ARTICA("Africa", "ACA", "rta77", _owner, signature);
        // _artica2.init(signature, _owner);
        vm.stopPrank();
    }

    // solhint-disable-next-line

    function test_Identity() public {
        vm.startPrank(_owner);
        // console.logAddress(_owner);
        // _artica1 = _factory.createNFT(
        //     "Africa",
        //     "ACA",
        //     "rta77",
        //     _owner,
        //     signature
        // );

        console.logAddress(address(_artica2));
    }

    function combineSignature(
        uint8 v,
        bytes32 r,
        bytes32 s
    ) public pure returns (bytes memory) {
        return abi.encodePacked(r, s, v);
    }
}
