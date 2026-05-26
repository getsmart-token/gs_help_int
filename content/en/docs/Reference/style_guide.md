---
title: "Documentation Style Guide"
linkTitle: "Style Guide"
weight: 10
date: 2026-05-26T00:00:00.000Z
description: "Writing and formatting standards for GetSmart Token help documentation."
categories:
  - Reference
tags:
  - reference
  - style
  - guide
---

# Documentation Style Guide

This guide covers writing conventions for the GetSmart Token help documentation.

## Voice and Tone

- **Clear and direct** — write for learners new to blockchain and AI
- **Supportive** — assume good faith; explain why, not just how
- **Concise** — prefer short sentences; avoid jargon where plain language works
- Use **second person** ("you") when addressing the reader
- Use **active voice** wherever possible

## Formatting

### Headings

- Use sentence case: `## Getting started`, not `## Getting Started`
- H1 (`#`) — page title only (matches frontmatter `title`)
- H2 (`##`) — major sections
- H3 (`###`) — sub-sections

### Code

- Inline code: use backticks for file names, commands, and values — e.g. `npm run serve`
- Code blocks: specify the language for syntax highlighting

````md
```bash
npm install
npm run serve
```
````

### Links

- Use descriptive link text: `[Coinbase Wallet setup](/docs/getting-started/)` not `[click here]`
- External links open in the same tab unless the context requires otherwise

### Tables

Use tables for structured comparisons (e.g., network parameters, API fields).

```md
| Field | Value |
|---|---|
| Chain ID | 8453 |
| Network | Base |
```

### Notes and Warnings

Use Hugo/Docsy shortcodes:

```md
{{%/* pageinfo */%}}
Important notice here.
{{%/* /pageinfo */%}}
```

## Frontmatter

Every page requires:

```yaml
---
title: "Page Title"
linkTitle: "Short Title"
weight: 5
date: 2026-05-26T00:00:00.000Z
description: "One-sentence description."
categories:
  - SectionName
tags:
  - tag1
  - tag2
---
```

- `weight` controls sidebar order (lower = higher)
- `date` should be set to the creation or last-updated date

## Terminology

| Use | Avoid |
|---|---|
| Base network | Polygon, Ethereum mainnet |
| Coinbase Wallet | MetaMask, MetaKeep |
| $GETS token | GETS coin, GETS crypto |
| BaseScan | Etherscan, PolygonScan |
| Gemma AirGap Agent | Gemma Edge, Resistance Terminal |
| getstoken.org | getsmarttoken.org, help.getstoken.org |

## File Naming

- Section index: `_index.md`
- Sub-pages: `kebab-case.md` (e.g., `internet_architecture.md`)
- Images: `kebab-case.png` in `static/images/`

## Submitting Changes

1. Fork [github.com/getsmart-token/gs_help_int](https://github.com/getsmart-token/gs_help_int)
2. Create a branch: `docs/your-change`
3. Submit a PR against `main`
4. Preview locally: `npm run serve` → `http://localhost:1313`
