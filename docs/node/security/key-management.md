---
title: Key management
id: key-management
---

The Cudos Network uses **ECDSA (Elliptic Curve Digital Signature Algorithm)** public key cryptography. This is a cryptographically secure digital signature scheme, based on elliptic-curve cryptography (ECC). 

In public key cryptography, each person has a pair of keys, a public key and a private key. The private key is derived from the public key using hashing algorithms in a way that cannot be reverse engineered.

Anyone with a public key can verify a signature was created using the private key and the appropriate signature validation algorithm. A digital signature is a powerful tool because it allows you to publicly vouch for any message.

`Ed25519` signatures are elliptic-curve signatures, carefully engineered at several levels of design and implementation to achieve very high speeds without compromising security.

**Public keys** are used for identity and **Private keys** for signing transactions. 

## Validator node security

Validators must consider whether they want to be fully responsible for Key Management or if they want to leverage third-party infrastructure to do so. 

The Cudos Network leverages the **Tendermint Key Management System** in order to ensure high availability access to signing keys as part of the Cudos Network’s block processing workflows.

## Tendermint Key Management System (KMS) (Beta)

Validators can research the Key Management System intended for Cosmos Validators. 
[Check it out](https://github.com/iqlusioninc/tmkms).

It provides isolated, optionally HSM-backed signing key management for transaction signing. Designed to be deployed on separate physical hosts. It provides the following:

1. High-availability access to validator signing keys
2. Double-signing prevention even in the event the validator process is compromised
3. Hardware security module storage for validator keys which can survive host compromise

## Hardware Security Modules

:::caution
Solutions for cloud-based infrastructure are still evolving. Check out discussions on [**Cosmos Hub Forum**](https://forum.cosmos.network/t/running-a-validator-in-a-cloud-environment/587) and in [**Validator Chat in Discord**](https://discord.com/channels/593796681103966208/849951329174421504).
:::

It is crucial that an attacker cannot steal a validator's key. 

Key compromise puts the entire stake delegated to the compromised validator at risk. Hardware security modules are an important strategy for mitigating this risk.

HSM modules must support `ed25519` signatures. The YubiHSM2 supports `ed25519`. 
The following [Yubikey library is available](https://github.com/iqlusioninc/yubihsm.rs)

The **YubiKey** is a hardware authentication device manufactured by Yubico to protect access to computers, networks, and online services. It supports one-time passwords (OTP), public-key cryptography, and authentication. It allows users to securely log into their accounts by emitting one-time passwords or using a FIDO-based public/private key pair generated by the device. 
