---
title: "Deployment"
linkTitle: "Deployment"
weight: 8
date: 2026-05-26T00:00:00.000Z
description: "Deployment architecture and CI/CD procedures for the GetSmart Token platform."
categories:
  - Deployment
tags:
  - deployment
  - cloudflare
  - ci-cd
---

# Deployment

The GetSmart Token platform runs on **Cloudflare Pages** with Edge Workers for serverless functions. Deployments are automated from the `main` branch on GitHub.

---

## Architecture

| Component | Platform | Repo |
|---|---|---|
| Main site (Next.js 15) | Cloudflare Pages | [getsmart-web](https://github.com/getsmart-token/getsmart-web) |
| Chatbot worker | Cloudflare Workers | Cloudflare dashboard |
| AI Agent (standalone) | — | [gemma_airgap](https://github.com/getsmart-token/gemma_airgap) |
| Help docs (Hugo) | Netlify | [gs_help_int](https://github.com/getsmart-token/gs_help_int) |
| Database | MongoDB Atlas | — |

---

## Main Site — Cloudflare Pages

The main site (`getstoken.org`) is a **Next.js 15** app compiled for Cloudflare Pages using `@cloudflare/next-on-pages`.

### Build Command

```bash
npx @cloudflare/next-on-pages
```

### Environment Variables (Cloudflare Dashboard)

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GEMINI_API_KEY_1` | Google AI Studio API key (Gemma 4 cloud inference) |
| `NEXT_PUBLIC_APP_URL` | Public site URL |
| `NEXT_PUBLIC_CHATBOT_URL` | Cloudflare chatbot worker URL |
| `COINBASE_CLIENT_ID` | Coinbase OAuth app ID |
| `COINBASE_CLIENT_SECRET` | Coinbase OAuth secret |
| `MONGODB_URI` | MongoDB Atlas connection string |

### Deployment Flow

1. Push to `main` on GitHub
2. Cloudflare Pages automatically builds (`next build` + `next-on-pages`)
3. Deployment to production completes in ~2 minutes
4. Edge Workers are updated globally via Cloudflare's network

### Important Notes

- `NEXT_PUBLIC_*` variables must be set in Cloudflare Pages **before** the build runs — they are inlined at build time
- Edge API routes (e.g. `/api/chat`) must use `getRequestContext()` from `@cloudflare/next-on-pages` to access Cloudflare env bindings at runtime
- The `export const runtime = 'edge'` declaration is required on all API routes

---

## Help Docs — Netlify

This documentation site is built with **Hugo Extended** and hosted on **Netlify**.

### Build Command

```bash
npm run build   # runs hugo
```

### Local Development

```bash
npm install     # installs hugo-extended
npm run serve   # http://localhost:1313
```

Or with Docker:

```bash
docker-compose up
```

---

## Chatbot Worker

The GetSmart Assistant chatbot runs as a **Cloudflare Worker** at:

```
https://getsmart-chatbot.multipleintelligencesuk.workers.dev
```

It is embedded on the main site via a `<script>` tag in the layout.

---

## CI/CD

- **Cloudflare Pages**: automatic deploy on push to `main` (getsmart-web)
- **Netlify**: automatic deploy on push to `main` (gs_help_int)
- **Dependabot**: weekly dependency updates via PR

---

## Rollback

To roll back Cloudflare Pages to a previous deployment:

1. Go to the Cloudflare Pages dashboard
2. Select the project → **Deployments**
3. Find the previous successful deployment and click **Rollback to this deployment**

---

## Submitting Documentation Issues

[Submit a new issue](https://github.com/getsmart-token/gs_help_int/issues/new?title=Deployment) to the gs_help_int repo for documentation corrections or improvements.
