# GetSmart Token — Help Documentation

This repository contains the source for the **GetSmart Token Help Center** at [help.getstoken.org](https://help.getstoken.org), built with [Hugo](https://gohugo.io) and the [Docsy](https://www.docsy.dev) theme.

GetSmart is operated by **Digital Financial Aid Corporation**, a 501(c)(3) nonprofit (IRS EIN 88-3868816), providing free independent education and verified skill credentials to workers and learners worldwide.

## Platform

| Component | URL |
|---|---|
| Main site | [getstoken.org](https://getstoken.org) |
| Gemma AirGap Agent | [getstoken.org/agent](https://getstoken.org/agent) |
| Course | [getstoken.org/course](https://getstoken.org/course) |
| Help center | [help.getstoken.org](https://help.getstoken.org) |

## Documentation Sections

- **Getting Started** — wallet setup, enrollment, first mission
- **User Guide** — learners and sponsors
- **Badge System** — NFT badges (ERC-721) and $GETS tokens (ERC-20) on Base network
- **Blockchain Integration** — Base network (Coinbase), Coinbase Wallet, BaseScan
- **API Documentation** — REST API reference (`api.getstoken.org/v1`)
- **Deployment** — Cloudflare Pages, Cloudflare Workers, CI/CD
- **Security & Privacy** — security policy, responsible disclosure
- **Community & Support** — contact, GitHub, Twitter/X, YouTube

## Local Development

```bash
git clone https://github.com/getsmart-token/gs_help_int.git
cd gs_help_int
npm install          # installs hugo-extended
npm run serve        # http://localhost:1313
```

Or with Docker:

```bash
docker-compose up
```

## Contributing

- Content lives in `content/en/docs/`
- Each section is a folder with an `_index.md`
- Frontmatter uses standard Hugo/Docsy fields (`title`, `description`, `weight`, `date`)
- Submit a PR against `main`

## Tech Stack

- **Static site generator**: [Hugo Extended](https://gohugo.io) v0.147+
- **Theme**: [Docsy](https://www.docsy.dev)
- **Hosting**: Netlify (auto-deploy from `main`)
- **Search**: Algolia DocSearch

## Contact

- Email: [hello@getstoken.org](mailto:hello@getstoken.org)
- Legal: [legal@getstoken.org](mailto:legal@getstoken.org)
- GitHub: [github.com/getsmart-token](https://github.com/getsmart-token)
