---
title: "Deployment"
linkTitle: "Deployment"
weight: 9
description: "Deployment processes and infrastructure for Getsmart Token"
---

# Deployment

This document outlines the deployment processes and infrastructure for the Getsmart Token system. We use a combination of DigitalOcean for our API and Vercel for our frontend, with GitHub Actions orchestrating our deployment pipeline.

## Overview

- **API Deployment**: DigitalOcean
- **Frontend Deployment**: Vercel
- **Deployment Automation**: GitHub Actions

## API Deployment (DigitalOcean)

Our API is hosted on DigitalOcean Droplets, providing us with scalable and reliable infrastructure.

### Infrastructure

- **Environment**: Ubuntu 20.04 LTS
- **Web Server**: Nginx
- **Application Server**: Gunicorn (for Python API)
- **Database**: PostgreSQL (managed by DigitalOcean)

### Deployment Process

1. Code is pushed to the `main` branch on GitHub
2. GitHub Actions workflow is triggered
3. Tests are run (unit, integration, E2E)
4. If tests pass, a new Docker image is built
5. The Docker image is pushed to DigitalOcean Container Registry
6. DigitalOcean App Platform pulls the new image and deploys it

### Monitoring and Logging

- Use DigitalOcean Monitoring for server metrics
- Application logs are aggregated using ELK stack

## Frontend Deployment (Vercel)

Our frontend application is deployed on Vercel for optimal performance and ease of use.

### Infrastructure

- **Framework**: Next.js
- **CDN**: Vercel Edge Network

### Deployment Process

1. Code is pushed to the `main` branch on GitHub
2. GitHub Actions workflow is triggered
3. Frontend tests are run
4. If tests pass, Vercel automatically deploys the new version
5. Vercel runs build process and deploys to its global CDN

### Features

- Automatic HTTPS
- Serverless Functions support
- Preview deployments for pull requests

## GitHub Actions Workflow

Our GitHub Actions workflow automates the deployment process:

```yaml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run tests
        run: |
          npm install
          npm test

  deploy-api:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to DigitalOcean
        uses: digitalocean/action-doctl@v2
        with:
          token: ${{ secrets.DIGITALOCEAN_ACCESS_TOKEN }}
      - run: doctl apps create-deployment ${{ secrets.DIGITALOCEAN_APP_ID }}

  deploy-frontend:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '14'
      - run: npm install
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID}}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID}}
          vercel-args: '--prod'
