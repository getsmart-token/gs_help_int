---
title: "Internet Architecture"
linkTitle: "Internet Architecture"
weight: 20
date: 2026-05-26T00:00:00.000Z
description: >
  Current internet architecture and URL structure of the GetSmart Token platform.
categories:
  - Deployment
tags:
  - deployment
  - architecture
---

## GetSmart Token Platform Architecture

```mermaid
graph TD
    A[getstoken.org]
    A --> B[getstoken.org<br>Main site — Next.js 15<br>Cloudflare Pages]
    A --> C[getstoken.org/agent<br>Gemma AirGap Agent<br>Edge Worker]
    A --> D[getstoken.org/course<br>Course enrollment]
    A --> E[api.getstoken.org/v1<br>REST API]
    A --> F[github.com/getsmart-token/gs_help_int<br>Help documentation — Hugo on Netlify]
```

```mermaid
graph TD
    User -->|HTTPS| CF[Cloudflare Pages<br>getstoken.org]
    CF -->|Edge Worker| API[Next.js API Routes<br>/api/chat · /api/auth · /api/user]
    API -->|Server-side| Gemini[Google Gemini API<br>gemma-4-26b-a4b-it]
    API -->|Auth| CB[Coinbase OAuth]
    API -->|Data| MDB[MongoDB Atlas]
    API -->|Tokens/Badges| Base[Base Network<br>Ethereum L2]

    User -->|Air-gap mode| Local[Local Browser<br>Gemma 4 E2B via WebGPU<br>Zero data leaves device]

    subgraph Cloudflare
        CF
        API
        CW[Chatbot Worker<br>getsmart-chatbot.workers.dev]
    end

    subgraph Google
        Gemini
    end

    subgraph Blockchain
        Base
    end
```

## Active URLs

| URL | Description | Host |
|---|---|---|
| [getstoken.org](https://getstoken.org) | Main site | Cloudflare Pages |
| [getstoken.org/agent](https://getstoken.org/agent) | Gemma AirGap Agent terminal | Cloudflare Pages |
| [getstoken.org/course](https://getstoken.org/course) | Course enrollment | Cloudflare Pages |
| [api.getstoken.org/v1](https://api.getstoken.org/v1) | REST API | Cloudflare Workers |
| [github.com/getsmart-token/gs_help_int](https://github.com/getsmart-token/gs_help_int) | Help documentation | GitHub / Netlify |

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15 (App Router) |
| Hosting | Cloudflare Pages |
| Serverless | Cloudflare Edge Workers |
| AI (cloud) | Google Gemma 4 via Gemini API |
| AI (local) | LiteRT / MediaPipe / WebGPU in-browser |
| Auth | Coinbase OAuth |
| Database | MongoDB Atlas |
| Blockchain | Base network (Ethereum L2) |
| Chatbot | Cloudflare Workers |
| Docs | Hugo + Docsy on Netlify |
