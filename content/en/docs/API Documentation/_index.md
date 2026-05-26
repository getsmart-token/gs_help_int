---
title: "API Documentation"
linkTitle: "API Documentation"
description: "REST API reference for the GetSmart Token platform."
weight: 8
date: 2026-05-26T00:00:00.000Z
categories:
  - API Documentation
tags:
  - api
  - developer
  - rest
---

# API Documentation

The GetSmart Token REST API allows developers to integrate badge issuance, $GETS token management, and learner data into external applications.

---

## Base URL

```
https://api.getstoken.org/v1
```

All requests must use **HTTPS**.

---

## Authentication

Include your API key in the `Authorization` header:

```
Authorization: Bearer YOUR_API_KEY
```

To obtain an API key, contact [hello@getstoken.org](mailto:hello@getstoken.org).

---

## Rate Limiting

| Limit | Value |
|---|---|
| Per hour | 1,000 requests per API key |
| Per second | 10 requests per API key |

Exceeded limits return `429 Too Many Requests`.

---

## Common Endpoints

| Resource | Operations |
|---|---|
| **Users** | Create, retrieve, update learner profiles |
| **Badges** | Issue, verify, list badges |
| **Tokens** | Check $GETS balances, view token history |
| **Achievements** | Track mission progress and completion status |

Full endpoint reference available at [api.getstoken.org/v1/docs](https://api.getstoken.org/v1/docs).

---

## Response Format

All responses are JSON:

```json
{
  "status": "success",
  "data": { }
}
```

Errors:

```json
{
  "status": "error",
  "error": {
    "code": "ERROR_CODE",
    "message": "Description of the error"
  }
}
```

---

## Platform Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15 (App Router) on Cloudflare Pages |
| AI Agent | Google Gemma 4 via Gemini API + on-device LiteRT/WebGPU |
| Chatbot | Cloudflare Worker |
| Blockchain | Base network (Coinbase) |
| Auth | Coinbase OAuth |
| Database | MongoDB Atlas |

---

## Repositories

| Repo | Description |
|---|---|
| [getsmart-web](https://github.com/getsmart-token/getsmart-web) | Next.js 15 main site |
| [gemma_airgap](https://github.com/getsmart-token/gemma_airgap) | Gemma AirGap Agent (standalone) |
| [gs_help_int](https://github.com/getsmart-token/gs_help_int) | This help documentation |

---

## Support

For API access, integration questions, or to report issues:

- Email: [hello@getstoken.org](mailto:hello@getstoken.org)
- GitHub Issues: [github.com/getsmart-token](https://github.com/getsmart-token)
