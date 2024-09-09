---
title: GetSmart Token API README draft
description: Version 1.0 api README
date: 2024-08-27
---
```markdown
# GetSmart Token Project

## Overview
GetSmart Token is a revolutionary blockchain-based educational incentive system. It aims to transform education funding, alleviate student debt, and recognize academic achievements through tokenization.

## Key Features
- Tokenized educational achievements
- Merit-based scholarships and rewards
- Student debt reduction via collective bargaining
- Decentralized credentialing system
- Integration with existing educational platforms

## Technology Stack
- Blockchain: <a href="https://polygon.technology/" target="_blank">Polygon</a>
- Smart Contracts: 
  - ERC-20 tokens (GETS)
  - ERC-721 non-fungible tokens (GETS Badges)
- Blockchain Integration: <a href="https://metakeep.xyz/" target="_blank">MetaKeep</a>
- Backend: <a href="https://nodejs.org/" target="_blank">Node.js</a> with <a href="https://expressjs.com/" target="_blank">Express.js</a>
- Frontend: <a href="https://reactjs.org/" target="_blank">React</a>
- Database: <a href="https://www.mongodb.com/" target="_blank">MongoDB</a> with <a href="https://mongoosejs.com/" target="_blank">Mongoose ODM</a>
- Testing: <a href="https://jestjs.io/" target="_blank">Jest</a>
- Linting: <a href="https://eslint.org/" target="_blank">ESLint</a>
- Git Hooks: <a href="https://typicode.github.io/husky/" target="_blank">Husky</a>
- Custom Middleware
- Build Script: [`build.sh`](./build.sh)

## Architecture
This project follows the MERN (<a href="https://www.mongodb.com/" target="_blank">MongoDB</a>, <a href="https://expressjs.com/" target="_blank">Express</a>, <a href="https://reactjs.org/" target="_blank">React</a>, <a href="https://nodejs.org/" target="_blank">Node.js</a>) stack architecture, integrated with blockchain technology:

1. Model: <a href="https://www.mongodb.com/" target="_blank">MongoDB</a> database with <a href="https://mongoosejs.com/" target="_blank">Mongoose ODM</a>
   - Handles data storage and retrieval
   - Defines data schemas and models

2. View: <a href="https://reactjs.org/" target="_blank">React</a> frontend
   - Component-based architecture
   - Client-side rendering

3. Controller: <a href="https://expressjs.com/" target="_blank">Express.js</a> routes and middleware
   - Handles HTTP requests
   - Processes data between the Model and View

4. Blockchain Layer:
   - <a href="https://metakeep.xyz/" target="_blank">MetaKeep</a> for wallet management and blockchain interactions
   - Manages GETS tokens (ERC-20) and GETS Badges (ERC-721) on the <a href="https://polygon.technology/" target="_blank">Polygon</a> network

5. Additional Components:
   - Server-side views in the [`views/`](./views) directory (potentially for error pages or non-SPA routes)
   - API endpoints for communication between frontend and backend

This architecture provides a full-stack JavaScript environment with blockchain integration, allowing for efficient development and seamless management of educational achievements and tokens.

## Blockchain Integration
<a href="https://metakeep.xyz/" target="_blank">MetaKeep</a> is used to handle blockchain wallet management and interactions. It provides:
- Secure wallet creation and management for users
- Simplified interaction with the <a href="https://polygon.technology/" target="_blank">Polygon</a> network
- APIs for token (GETS) and badge (GETS Badges) operations
- Potential for gasless transactions, improving user experience

Developers working on blockchain-related features should familiarize themselves with <a href="https://metakeep.xyz/" target="_blank">MetaKeep</a>'s documentation and APIs.

## Project Structure
- [`.husky/`](./.husky): Git hooks configuration
- [`bin/`](./bin): Binary files and scripts
- [`config/`](./config): Configuration files
- [`middleware/`](./middleware): Custom server-side logic
- [`models/`](./models): <a href="https://mongoosejs.com/" target="_blank">Mongoose</a> schemas and models (if not present, these might be in [`src/`](./src))
- [`public/stylesheets/`](./public/stylesheets): CSS files
- [`routes/`](./routes): <a href="https://expressjs.com/" target="_blank">Express</a> route definitions (if not present, these might be in [`src/`](./src))
- [`src/`](./src): Source code files (likely contains <a href="https://reactjs.org/" target="_blank">React</a> components and app logic)
- [`views/`](./views): Server-side view templates
- [`app.js`](./app.js): Main <a href="https://expressjs.com/" target="_blank">Express</a> application file
- [`build.sh`](./build.sh): Build script
- [`jest.config.js`](./jest.config.js): <a href="https://jestjs.io/" target="_blank">Jest</a> configuration
- [`.eslintrc.json`](./.eslintrc.json) & [`.eslintignore`](./.eslintignore): <a href="https://eslint.org/" target="_blank">ESLint</a> configuration

## Deployment

The project is deployed on <a href="https://www.digitalocean.com/products/app-platform" target="_blank">DigitalOcean's App Platform</a>.

- Live API: https://gs-api-bmp65.ondigitalocean.app/

### For Developers

As a developer, you are not directly responsible for the deployment process. However, understanding the workflow and your role in it is crucial:

1. Code Changes and Pull Requests:
   - Make your changes in a feature branch.
   - Submit a pull request to the `main` branch.
   - Ensure all tests pass and the code meets the project's standards.

2. Environment Variables:
   - Never hardcode sensitive information (API keys, credentials, etc.) in your code.
   - Use environment variables for all configuration that might change between environments.
   - Document any new environment variables you introduce in the [`.env.example`](./.env.example) file.

3. Dependencies:
   - If you add new dependencies, make sure they are properly listed in [`package.json`](./package.json).
   - Update `README.md` if there are significant changes to the project setup process.

4. Database Migrations:
   - If you make changes to the database schema, create the necessary migration scripts.
   - Document the migration process in the [`migrations/`](./migrations) directory (if applicable).

5. API Changes:
   - If you modify API endpoints, update the API documentation accordingly.

6. Deployment Triggers:
   - Merging to `main` will typically trigger the CI/CD pipeline.
   - The DevOps team manages the specific deployment configurations and processes.

7. Monitoring:
   - After your changes are deployed, monitor the application for any issues.
   - Report any post-deployment problems to the DevOps team immediately.

### DevOps Workflow (For Reference)

The actual deployment is handled by the DevOps team:

1. CI/CD Pipeline:
   - Automated tests and builds are triggered on push to `main`.
   - Successful builds on `main` trigger deployment to staging.
   - Deployment to production requires manual approval.

2. Configuration Management:
   - Environment-specific configurations are managed through <a href="https://www.digitalocean.com/products/app-platform" target="_blank">DigitalOcean's App Platform</a>.
   - Sensitive data is stored securely and injected at runtime.

3. Deployment Strategy:
   - Blue-Green deployment is used to minimize downtime.
   - Rollback procedures are in place in case of deployment issues.

4. Monitoring and Logging:
   - Application performance is monitored using [Specific Tool].
   - Logs are centralized and accessible through [Logging System].

### Deployment Troubleshooting

If you encounter issues that seem deployment-related:

1. Check the #deployments <a href="https://slack.com/" target="_blank">Slack</a> channel for any ongoing issues or maintenance.
2. Review the application logs through the provided logging system.
3. If the issue persists, contact the DevOps team through the #devops-support <a href="https://slack.com/" target="_blank">Slack</a> channel.

For more detailed information about the deployment process, refer to the internal DevOps documentation on [Internal Wiki Link].

## Token Economics
- Maximum Supply: 1 trillion GETS tokens
- Initial Supply: 20 million GETS tokens
- Minting: 1000 GETS tokens per badge claimed

## Users
- Students
- Educational Institutions (Verified Sponsors)
- Lenders and Borrowers
- Investors
- Employers

## Benefits
- Incentivizes educational achievement
- Provides transparent, immutable credential records
- Offers a potential solution to the student debt crisis
- Empowers educators to define and reward valuable skills

## Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (refer to [`.env.example`](./.env.example) if available)
   - Ensure <a href="https://metakeep.xyz/" target="_blank">MetaKeep</a> API keys and configuration are properly set
4. Ensure <a href="https://www.mongodb.com/" target="_blank">MongoDB</a> is installed and running
5. Run tests: `npm test`
6. Start the development server: `npm start`

## Contributing
This project is open for commentary and contributions. Please refer to [CONTRIBUTING.md](./CONTRIBUTING.md) (if available) for guidelines on how to contribute.

## Author
Matthew Stevens

## Copyright and Legal Information
© 2024 Digital Financial Aid Corporation. All rights reserved.

Digital Financial Aid Corporation is a non-profit organization registered in St. Petersburg, Florida. It is the sole owner of the trademark "GetSmart Token".

## License
This project is proprietary. All rights reserved.

## Disclaimer
GetSmart is a utility token. Cryptocurrencies are highly volatile. This project is experimental and carries significant risks. Do not invest more than you can afford to lose. This is not financial advice.

## Contact
For more information, visit <a href="https://www.getstoken.org" target="_blank">https://www.getstoken.org</a>

Digital Financial Aid Corporation
7901 4TH ST N STE 5593
Saint Petersburg, Florida
United States 33702

---

Note: This README reflects the current state of the project and may be subject to change. Always refer to the most recent official documentation for up-to-date information.
```