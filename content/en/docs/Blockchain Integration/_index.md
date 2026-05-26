---
title: "Blockchain Integration"
linkTitle: "Blockchain Integration"
description: "Technical details of the Base network integration — wallet, tokens, explorer, and smart contracts."
weight: 4
date: 2026-05-26T00:00:00.000Z
categories:
  - Blockchain
tags:
  - base-network
  - coinbase-wallet
  - basescan
  - erc-20
  - erc-721
---

# Blockchain Integration

GetSmart Token runs entirely on the **Base network** — Coinbase's Ethereum Layer 2 chain. Base provides fast, low-cost transactions while inheriting Ethereum's security.

> **Migrated from Polygon:** The platform moved from Polygon (MATIC) to Base in 2024. If you have a Polygon-era account, contact [hello@getstoken.org](mailto:hello@getstoken.org) to migrate.

---

## Network Details

| Property | Value |
|---|---|
| **Network** | Base (Ethereum L2) |
| **Chain ID** | 8453 |
| **Native gas token** | ETH |
| **Explorer** | [basescan.org](https://basescan.org) |
| **RPC** | `https://mainnet.base.org` |
| **Bridge** | [bridge.base.org](https://bridge.base.org) |

---

## Wallet

GetSmart uses **Coinbase Wallet** — not MetaMask, not a Polygon wallet.

1. Download at [coinbase.com/wallet](https://www.coinbase.com/wallet)
2. Create a new wallet and save your recovery phrase securely
3. Your wallet generates a Base address starting with `0x`
4. Connect it to your GetSmart Dashboard at [getstoken.org](https://getstoken.org)

---

## $GETS Token (ERC-20)

| Property | Value |
|---|---|
| **Standard** | ERC-20 |
| **Network** | Base |
| **Type** | Non-tradable utility token |
| **Purpose** | Record educational achievement on-chain |
| **Exchange listed?** | No — cannot be bought or sold |

$GETS tokens are earned by completing verified learning challenges. They cannot be traded on any exchange. Their sole purpose is to record and verify educational achievement within the GetSmart platform.

---

## Badge NFTs (ERC-721)

| Property | Value |
|---|---|
| **Standard** | ERC-721 (NFT) |
| **Network** | Base |
| **Verification** | Public on [basescan.org](https://basescan.org) |
| **Format** | Image (PNG) + on-chain metadata |

Each completed module issues an NFT badge to the learner's Coinbase Wallet. Badges are publicly verifiable on BaseScan using the transaction hash or contract address — no account needed.

---

## Verifying a Badge

1. Locate the transaction hash from your GetSmart Dashboard or badge email
2. Go to [basescan.org](https://basescan.org)
3. Paste the transaction hash into the search bar
4. The badge contract, recipient address, and timestamp are all publicly visible

Alternatively, scan the QR code embedded in your badge image — it links directly to the BaseScan record.

---

## Ghost Badge Warning

The Aithority releases fake NFTs designed to look like real GetSmart badges:

- **Verify the contract address** — real badges come from the official GetSmart verified contract only
- **Do not interact with unexpected NFTs** — if an NFT appears in your wallet from an unknown sender, do not click or interact with it

---

## Developer Reference

Contact [hello@getstoken.org](mailto:hello@getstoken.org) for verified contract addresses.

### Useful Links

- Base network docs: [docs.base.org](https://docs.base.org)
- BaseScan explorer: [basescan.org](https://basescan.org)
- Base bridge: [bridge.base.org](https://bridge.base.org)
- Coinbase Wallet: [coinbase.com/wallet](https://www.coinbase.com/wallet)
