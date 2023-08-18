// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract DigitalSignature {
    mapping(bytes => address) _signed;

    struct Identity {
        address wallet;
        string name;
        string symbol;
    }
    bytes32 private constant _IDENTITY_TYPEHASH =
        keccak256("Identity(address wallet,string name,string symbol)");

    bytes32 private constant _EIP712_DOMAIN_TYPEHASH =
        keccak256(
            "EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"
        );

    // solhint-disable-next-line
    function DOMAIN_SEPARATOR() public view returns (bytes32) {
        return
            keccak256(
                abi.encode(
                    _EIP712_DOMAIN_TYPEHASH,
                    keccak256(bytes("ARTICA dApp")),
                    keccak256(bytes("1")),
                    block.chainid,
                    address(this)
                )
            );
    }

    // solhint-disable-next-line
    function hashIdentity(
        Identity memory identity
    ) private pure returns (bytes32) {
        return
            keccak256(
                abi.encode(
                    _IDENTITY_TYPEHASH,
                    identity.wallet,
                    keccak256(bytes(identity.name)),
                    keccak256(bytes(identity.symbol))
                )
            );
    }

    function splitSignatureAndVerify(
        bytes memory signature,
        address owner,
        string memory name,
        string memory symbol
    ) public view returns (bool status) {
        require(signature.length == 65, "Invalid signature length");
        uint8 v;
        bytes32 r;
        bytes32 s;

        if (signature.length == 65) {
            // ecrecover takes the signature parameters,
            // and the only way to get them currently is to use assembly.
            /// @solidity memory-safe-assembly
            assembly {
                r := mload(add(signature, 0x20))
                s := mload(add(signature, 0x40))
                v := byte(0, mload(add(signature, 0x60)))
            }
        } else {
            revert();
        }
        (, status) = verify(owner, name, symbol, v, r, s);
    }

    // solhint-disable-next-line
    function verify(
        address owner,
        string memory name,
        string memory symbol,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) public view virtual returns (address recoveredAddress, bool status) {
        recoveredAddress = ecrecover(
            keccak256(
                abi.encodePacked(
                    "\x19\x01",
                    DOMAIN_SEPARATOR(),
                    keccak256(
                        abi.encode(
                            _IDENTITY_TYPEHASH,
                            owner,
                            keccak256(bytes(name)),
                            keccak256(bytes(symbol))
                        )
                    )
                )
            ),
            v,
            r,
            s
        );

        if (recoveredAddress == owner) {
            status = true;
        } else {
            status = false;
        }
    }
}

// 0xeb0aeec3056a1841b991e5a1b915d206374200ddddee44f412ec52aac4b464f765e080ff2f5eedc14b513c16a199f4d4462c1e6d2332ffccee13b264536b14171b

// 0xeb0aeec3056a1841b991e5a1b915d206374200ddddee44f412ec52aac4b464f765e080ff2f5eedc14b513c16a199f4d4462c1e6d2332ffccee13b264536b14171b

//0xa9bc7d47333bb8525e81ca837cbd4503e894e889d17e1e74ea657e9cc76decac

// 0x55612d56c4e15a5719052e1bf7ed876de43baf3e1eac9aea40716edeacb7fe92
