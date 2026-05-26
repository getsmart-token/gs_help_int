---
title: "Security & Privacy"
linkTitle: "Security & Privacy"
description: "Security practices, privacy policy, and responsible disclosure for the GetSmart Token platform."
weight: 7
date: 2026-05-26T00:00:00.000Z
categories:
  - Security & Privacy
tags:
  - security
  - privacy
  - gdpr
---

# Security & Privacy

GetSmart Token is operated by **Digital Financial Aid Corporation**, a 501(c)(3) nonprofit committed to protecting learner data and platform integrity.

---

## Security Measures

### Infrastructure

- **Hosting**: Cloudflare Pages (DDoS protection, WAF, edge network)
- **API**: Edge Worker functions with no persistent server-side processes
- **Database**: MongoDB Atlas with encryption at rest and in transit
- **Auth**: Coinbase OAuth — we never store passwords

### Blockchain

- **Network**: Base (Ethereum L2) — immutable public ledger for badge records
- **Contracts**: Smart contract addresses published and verifiable on [basescan.org](https://basescan.org)
- **No private keys stored**: The platform never holds user wallet keys

### AI Agent

- **Cloud mode**: API key held server-side in Cloudflare Edge Worker — never exposed to the client browser
- **Local / Air-Gap mode (Module 5)**: The Gemma 4 model runs entirely in the user's browser via WebGPU. Zero data leaves the device during local inference.

### Data in Transit

- All traffic served over HTTPS / TLS 1.3
- API calls to Google Gemini API made server-side only

---

## Privacy Policy

### What We Collect

- Name and email address (for course enrollment and badge applications)
- Coinbase Wallet address (to issue NFT badges and $GETS tokens)
- Learning progress (which missions completed, evidence submitted)

### What We Do Not Collect

- Passwords (handled entirely by Coinbase OAuth)
- Payment card information
- Biometrics or sensitive personal data beyond what's listed above

### How We Use Your Data

- To issue NFT badges and $GETS tokens to your wallet
- To send course mission emails
- To review badge applications
- We do **not** sell data to third parties

### User Rights (GDPR)

- Right to access your personal data
- Right to request data deletion (subject to on-chain records, which are immutable)
- Right to data portability
- Requests: [hello@getstoken.org](mailto:hello@getstoken.org)

---

## Responsible Disclosure

If you discover a security vulnerability in the GetSmart platform:

1. **Do not** publish it publicly before notifying us
2. Email [security@getstoken.org](mailto:security@getstoken.org) with details
3. See [getstoken.org/.well-known/security.txt](https://getstoken.org/.well-known/security.txt)

We aim to acknowledge reports within 48 hours and resolve critical issues within 30 days.

---

## Ghost Badge Warning

Third parties ("the Aithority") release fake NFTs that look like official GetSmart badges:

- **Always verify the contract address** on BaseScan before trusting any badge
- **Do not interact with unexpected NFTs** in your wallet from unknown senders
- Real GetSmart badges come only from the official verified contract address — contact [hello@getstoken.org](mailto:hello@getstoken.org) to confirm
