// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract SigUtils {
    // solhint-disable-next-line
    bytes32 internal DOMAIN_SEPARATOR;

    // solhint-disable-next-line
    constructor(bytes32 _DOMAIN_SEPARATOR) {
        DOMAIN_SEPARATOR = _DOMAIN_SEPARATOR;
    }

    //keccak256("Identity(address wallet)");
    bytes32 public constant IDENTITY_TYPEHASH =
        0x74b7ba77267dfb3985ef1a469e2e577445cc6df22d30844bda1f691627f39f8e;

    struct Identity {
        address wallet;
        string name;
        string symbol;
    }

    // computes the hash of an identity
    // solhint-disable-next-line

    function _getStructHash(
        Identity memory _identity
    ) internal pure returns (bytes32) {
        return
            keccak256(
                abi.encode(
                    IDENTITY_TYPEHASH,
                    _identity.wallet,
                    keccak256(bytes(_identity.name)),
                    keccak256(bytes(_identity.symbol))
                )
            );
    }

    // computes the hash of the fully encoded EIP-712 message for the domain, which can be used to recover the signer
    function getTypedDataHash(
        Identity memory _identity
    ) public view returns (bytes32) {
        return
            keccak256(
                abi.encodePacked(
                    "\x19\x01",
                    DOMAIN_SEPARATOR,
                    _getStructHash(_identity)
                )
            );
    }
}
