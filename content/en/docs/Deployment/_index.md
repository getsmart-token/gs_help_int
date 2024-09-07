---
title: "Deployment"
linkTitle: "Deployment"
weight: 8
description: >
  Deployment process and considerations for the GetSmart Token API.
---

# Deployment

## Overview

The GetSmart Token API is deployed on [DigitalOcean's App Platform](https://www.digitalocean.com/products/app-platform). This page provides an overview of the deployment process and important considerations for both developers and the DevOps team.

> **Note:** The authoritative source for deployment information is the [README.md](https://github.com/getsmart-token/gs_api/blob/main/README.md) file in the API repository. Always refer to this document for the most up-to-date information.

## Technology Stack

- Backend: [Node.js](https://nodejs.org/) with [Express.js](https://expressjs.com/)
- Database: [MongoDB](https://www.mongodb.com/) with [Mongoose ODM](https://mongoosejs.com/)
- Blockchain Integration: [MetaKeep](https://metakeep.xyz/)
- Testing: [Jest](https://jestjs.io/)
- Linting: [ESLint](https://eslint.org/)
- Git Hooks: [Husky](https://typicode.github.io/husky/)

## Deployment Process

The deployment is managed through a CI/CD pipeline:

1. Code changes are made in feature branches and submitted as pull requests to the `main` branch.
2. Automated tests and builds are triggered on push to `main`.
3. Successful builds on `main` trigger deployment to staging.
4. Deployment to production requires manual approval.

## Developer Responsibilities

As a developer, you should:

1. Ensure all tests pass and code meets project standards before submitting pull requests.
2. Use environment variables for configuration that might change between environments.
3. Document any new environment variables in the `.env.example` file.
4. Properly list new dependencies in `package.json`.
5. Create and document necessary database migration scripts if schema changes are made.
6. Update API documentation for any endpoint modifications.
7. Monitor the application for issues after deployment and report problems immediately.

## Environment Variables

Sensitive information and configuration that varies between environments should be managed through environment variables. The specific variables required are documented in the `.env.example` file in the repository.

## Database Considerations

The API uses MongoDB with Mongoose ODM. When making changes to the database schema:

1. Create necessary migration scripts.
2. Document the migration process in the `migrations/` directory (if applicable).
3. Test thoroughly in a staging environment before deploying to production.

## DevOps Team Responsibilities

The DevOps team is responsible for managing the deployment infrastructure and processes:

1. CI/CD Pipeline Management:
   - Maintain and update the CI/CD pipeline as needed.
   - Ensure automated tests and builds are running correctly.
   - Manage the staging and production deployment processes.

2. Environment Configuration:
   - Manage environment-specific configurations through DigitalOcean's App Platform.
   - Securely store and inject sensitive data at runtime.

3. Deployment Strategy:
   - Implement and maintain a [Blue-Green deployment strategy](https://martinfowler.com/bliki/BlueGreenDeployment.html) to minimize downtime.
   - Establish and document rollback procedures for deployment issues.

4. Monitoring and Logging:
   - Set up and maintain application performance monitoring tools.
   - Manage the centralized logging system and ensure log accessibility.

5. Security:
   - Implement and maintain security best practices for the deployment infrastructure.
   - Regularly audit and update security measures.

6. Scalability:
   - Monitor application performance and scale resources as needed.
   - Implement and maintain database scaling strategies.

7. Disaster Recovery:
   - Develop and maintain a disaster recovery plan.
   - Regularly test and update backup and restore procedures.

8. Documentation:
   - Maintain up-to-date documentation via issue submission to the github documentation repo (via this site) on the deployment infrastructure and processes.
   - [Click here to submit a new documentation
    issue](https://github.com/getsmart-token/gs_help_int/issues/new?title=Deployment)
   - Provide clear guidelines for developers on deployment-related matters.

9. Communication:
   - Manage the "Deployments" and "Development" categories in the getsmart-token GitHub Discussions (https://github.com/orgs/getsmart-token/discussions).
   - Coordinate with development teams on deployment schedules and issues using GitHub Discussions, Issues, and Projects within the getsmart-token organization.

## Monitoring and Troubleshooting

- Application performance is monitored using specific tools (refer to the README for details).
- Logs are centralized and accessible through the Digital Ocean monitoring tool.
- For deployment-related issues, check the "Deployments" category in GitHub Discussions and review application logs.
- Contact the DevOps team through the "DevOps Support" category in GitHub Discussions for persistent issues.

## Live API

The live API is accessible at: https://gs-api-bmp65.ondigitalocean.app/

## Further Information

For more detailed information about the deployment process, architecture, and development workflow, please refer to the [README.md](https://github.com/getsmart-token/gs_api/blob/main/README.md) file in the API repository.
