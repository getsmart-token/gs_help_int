---
title: "GetSmart Token Help"
linkTitle: "Help"
weight: 20
description: "Central documentation hub for the GetSmart Token platform"
date: 2026-05-26T00:00:00.000Z
categories:
  - Docs
tags:
  - docs
  - overview
---

{{% pageinfo %}}
Public site: [https://getstoken.org](https://getstoken.org)  
Help center: [https://help.getstoken.org](https://help.getstoken.org)  
Contact: [hello@getstoken.org](mailto:hello@getstoken.org)
{{% /pageinfo %}}

# GetSmart Token Help Center

Welcome to the GetSmart Token documentation hub. GetSmart is operated by **Digital Financial Aid Corporation**, a 501(c)(3) nonprofit (IRS EIN 88-3868816), providing free independent education, verified skill credentials, and scholarship rewards to workers and learners worldwide.

## Platform Overview

| Component | Details |
|---|---|
| **Frontend** | [getstoken.org](https://getstoken.org) — Next.js 15 on Cloudflare Pages |
| **AI Agent** | [getstoken.org/agent](https://getstoken.org/agent) — Gemma AirGap Terminal (Google Gemma 4) |
| **Course** | [getstoken.org/course](https://getstoken.org/course) — Agents & Assets: From Resistance to Renaissance |
| **Chatbot** | Cloudflare Worker at `getsmart-chatbot.multipleintelligencesuk.workers.dev` |
| **Blockchain** | Base network (Coinbase) |
| **Token** | $GETS — non-tradable utility token, issued on Base |
| **Wallet** | Coinbase Wallet (no MetaMask / Polygon required) |

## Key Resources

### 1. User Guide

Step-by-step guide for learners and sponsors using the GetSmart platform.

- [User Guide](/docs/user-guide/)
- Enroll in the Agents & Assets course: [getstoken.org/course](https://getstoken.org/course)
- Wallet setup: Coinbase Wallet on the Base network
- Badge applications and $GETS token claiming

### 2. Badge System

How credential badges and $GETS tokens work.

- [Badge System](/docs/badge-system/)
- Badges are NFTs (ERC-721) on the Base network
- $GETS is ERC-20, non-tradable, used as a learning reward
- Badge verification is on-chain via BaseScan

### 3. Blockchain Integration

Technical details about the Base network integration.

- [Blockchain Integration](/docs/blockchain-integration/)
- Network: **Base** (not Polygon — the platform migrated from Polygon in 2024)
- Explorer: [basescan.org](https://basescan.org)
- Wallet: Coinbase Wallet

### 4. API Documentation

- [API Documentation](/docs/api-documentation/)
- Base URL: `https://api.getstoken.org/v1`
- Authentication, rate limiting, and endpoint reference

### 5. Deployment

The platform runs on Cloudflare Pages with Cloudflare Workers for serverless functions.

- [Deployment Procedures](/docs/deployment/)
- Frontend: Cloudflare Pages (automatic deployments from GitHub `main`)
- Chatbot: Cloudflare Worker
- Build: Next.js 15 + `@cloudflare/next-on-pages`

### 6. Community & Support

- [Community & Support](/docs/community--support/)
- Email: [hello@getstoken.org](mailto:hello@getstoken.org)
- GitHub: [github.com/getsmart-token](https://github.com/getsmart-token)
- Twitter/X: [@GetsToken](https://x.com/GetsToken)
- YouTube: [@GetSmartToken](https://www.youtube.com/@GetSmartToken)

## Quick Links

- [Getting Started](/docs/getting-started/)
- [User Guide](/docs/user-guide/)
- [Badge System](/docs/badge-system/)
- [API Reference](/docs/api-documentation/)
- [Security & Privacy](/docs/security--privacy/)
- [GitHub Repositories](https://github.com/getsmart-token/)
- [Contact Support](mailto:hello@getstoken.org)

## About the Organization

**Digital Financial Aid Corporation**  
501(c)(3) Tax-Exempt Nonprofit · IRS EIN 88-3868816  
7901 4th St. N., Saint Petersburg, FL 33702  
+1 (786) 860-9864 · [hello@getstoken.org](mailto:hello@getstoken.org)

$GETS is a non-tradable utility token issued solely to recognise educational achievement. It is not listed on any exchange and does not constitute an investment or financial instrument.
