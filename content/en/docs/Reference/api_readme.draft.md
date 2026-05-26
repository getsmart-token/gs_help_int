---
title: "API Reference — GetSmart Token"
linkTitle: "API Reference"
weight: 5
date: 2026-05-26T00:00:00.000Z
description: "REST API reference for the GetSmart Token platform."
categories:
  - Reference
tags:
  - reference
  - api
---

# GetSmart Token API Reference

Base URL: `https://api.getstoken.org/v1`

For full API documentation see [API Documentation](/docs/api-documentation/).

## Overview

The GetSmart Token API provides endpoints for:

- User authentication (Coinbase OAuth)
- Course enrollment and progress
- Badge issuance and verification (ERC-721 on Base network)
- $GETS token rewards (ERC-20 on Base network)
- AI agent chat (`/api/chat`)

## Authentication

All protected endpoints require a valid session token obtained via Coinbase OAuth.

```
Authorization: Bearer <token>
```

## Base Network

Badges and $GETS tokens are issued on the **Base network** (Ethereum L2, Chain ID 8453).

- Explorer: [basescan.org](https://basescan.org)
- Wallet: [Coinbase Wallet](https://www.coinbase.com/wallet)

## Technology Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15 (App Router) on Cloudflare Pages |
| API | Cloudflare Edge Workers |
| AI | Google Gemma 4 via Gemini API |
| Auth | Coinbase OAuth |
| Database | MongoDB Atlas |
| Blockchain | Base network (Ethereum L2) |

## Contact

- API issues: [github.com/getsmart-token/getsmart-web/issues](https://github.com/getsmart-token/getsmart-web/issues)
- General: [hello@getstoken.org](mailto:hello@getstoken.org)

---

**Digital Financial Aid Corporation** · 501(c)(3) · EIN 88-3868816  
$GETS is a non-tradable utility token issued solely to recognise educational achievement.
