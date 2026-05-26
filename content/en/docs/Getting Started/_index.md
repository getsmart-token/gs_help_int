---
title: Getting Started
linkTitle: Getting Started
weight: 2
date: 2026-05-26T00:00:00.000Z
categories:
  - Getting Started
tags:
  - getting-started
  - overview
---

# Getting Started with GetSmart Token

Welcome to GetSmart! This guide will get you up and running as a learner, sponsor, or developer on the GetSmart platform — a free, nonprofit education platform built on the **Base network** by **Digital Financial Aid Corporation** (501(c)(3), EIN 88-3868816).

## What is GetSmart Token?

GetSmart is a free independent education platform that awards **$GETS** — a non-tradable utility token — to learners who complete verified skill challenges. Sponsors (employers, NGOs, churches, donors) can fund and award credential badges backed by $GETS tokens.

**$GETS is not a cryptocurrency for trading.** It is a learning reward that records educational achievement on-chain.

---

## For Learners

### Step 1 — Set Up a Coinbase Wallet

GetSmart uses the **Base network** (a fast, low-cost Ethereum Layer 2 blockchain by Coinbase). You'll need a **Coinbase Wallet** to receive badges and $GETS tokens.

1. Download **Coinbase Wallet** from [coinbase.com/wallet](https://www.coinbase.com/wallet)
2. Create a new wallet and save your recovery phrase securely
3. Your wallet generates a **Base network address** starting with `0x` — this is your on-chain identity

> **No MetaMask or Polygon required.** The platform previously used Polygon; it now runs entirely on the Base network.

### Step 2 — Enroll in the Course

The flagship course is **"Agents & Assets: From Resistance to Renaissance"** — a free 10-module email course for ages 11+ covering AI, blockchain, and digital skills.

1. Visit [getstoken.org/course](https://getstoken.org/course)
2. Click **Enroll — Option 1: Earn $GETS Tokens** (requires a GetSmart account)
3. Or try the **Gemma AirGap Agent** live demo at [getstoken.org/agent](https://getstoken.org/agent) — no account needed

### Step 3 — Complete Missions & Earn $GETS

Each of the 10 course modules is a mission guided by an AI **CitiZen** character. Completing a mission and submitting evidence earns you $GETS tokens and an NFT badge:

| Module | CitiZen | Skill | $GETS |
|---|---|---|---|
| 1 | The Tech Shaman | Local AI · Privacy | 50 |
| 2 | The Cypher-Nomad | Sovereign Identity · Base Network | 50 |
| 3 | The Prompt Whisperer | Edge AI Prompting · Cryptography | 75 |
| 4 | The Urban Samurai | On-Chain Transparency · BaseScan | 75 |
| 5 | The Neon Ninja | Air-Gapped AI · Offline Security | 75 |
| 6 | The Solar Monk | AI Hallucinations · Truth Detection | 75 |
| 7 | The Tech-Bazaar Trader | NFTs vs Liquid Tokens | 75 |
| 8 | The Steampunk Scrapper | AI Personas · Math Concepts | 75 |
| 9 | The Street Artist | DeFi Micro-Transactions | 81 |
| 10 | The Prime | AI Agent Creation · Community Impact | 369 |

**Total: 1,000 $GETS** for completing the full course.

---

## For Sponsors

Sponsors are employers, NGOs, churches, donors, or anyone who wants to recognise learning.

1. Visit [getstoken.org/for/employers](https://getstoken.org/for/employers) (or your audience page)
2. Contact [hello@getstoken.org](mailto:hello@getstoken.org) to set up a sponsor account
3. Create custom badges for your learners with $GETS token rewards
4. Review applications and approve badge claims

---

## For Developers

### Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15 (App Router) on Cloudflare Pages |
| AI Agent | Google Gemma 4 via Gemini API + on-device LiteRT/MediaPipe |
| Chatbot | Cloudflare Worker (AI FAQ bot) |
| Blockchain | Base network (Coinbase) |
| Auth | Coinbase OAuth |
| Database | MongoDB Atlas |

### Repositories

- **Main site**: [github.com/getsmart-token/getsmart-web](https://github.com/getsmart-token/getsmart-web)
- **AI agent**: [github.com/getsmart-token/gemma_airgap](https://github.com/getsmart-token/gemma_airgap)
- **Help docs**: [github.com/getsmart-token/gs_help_int](https://github.com/getsmart-token/gs_help_int)

### Local Development

```bash
git clone https://github.com/getsmart-token/getsmart-web.git
cd getsmart-web
npm install
cp .env.example .env.local   # fill in your keys
npm run dev
```

Required environment variables:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_APP_URL` | Public site URL |
| `NEXT_PUBLIC_CHATBOT_URL` | Cloudflare chatbot worker URL |
| `GEMINI_API_KEY` | Google AI Studio API key (server-side) |
| `COINBASE_CLIENT_ID` | Coinbase OAuth app ID |
| `COINBASE_CLIENT_SECRET` | Coinbase OAuth secret |
| `MONGODB_URI` | MongoDB Atlas connection string |

---

## Next Steps

- [User Guide](/docs/user-guide/) — detailed platform walkthrough
- [Badge System](/docs/badge-system/) — how NFT badges and $GETS work
- [Blockchain Integration](/docs/blockchain-integration/) — Base network technical details
- [API Documentation](/docs/api-documentation/) — developer API reference
- [Community & Support](/docs/community--support/) — get help

For questions, email [hello@getstoken.org](mailto:hello@getstoken.org).
