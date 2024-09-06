---
title: "API Documentation"
linkTitle: "API Documentation"
description: "Overview of the Get Smart Token API"
weight: 8
---

# API Documentation

Welcome to the Get Smart Token API documentation. Our API allows developers to integrate our token and badge system into their applications, enabling seamless interaction with our blockchain-based achievement platform.
Welcome to the Get Smart Token API documentation. Our API enables developers to integrate our token and badge system into their applications, facilitating seamless interaction with our blockchain-based achievement platform.

## API Overview

The Get Smart Token API is a RESTful API that uses standard HTTP methods and returns responses in JSON format. It provides access to various functionalities of our platform, including user management, token operations, and badge interactions.
The Get Smart Token API is a RESTful API that utilizes standard HTTP methods and returns responses in JSON format. It provides access to various functionalities of our platform, including user management, token operations, and badge interactions.

## Base URL

All API requests should be made to:

https://api.getstoken.org/v1


Please note that all requests must use HTTPS.

## Authentication

API requests require authentication using an API key. Include your API key in the header of each request:

Authorization: Bearer YOUR_API_KEY


To obtain an API key, please contact our developer support team.

## Rate Limiting

To ensure fair usage and maintain system stability, our API implements rate limiting. Current limits are:

- 1000 requests per hour per API key
- 10 requests per second per API key

## Common Endpoints

While specific endpoint documentation is available in our detailed API reference, common operations include:

- User Management (creation, retrieval, updating)
- Token Operations (minting, transferring, balance checking)
- Badge Interactions (issuing, verifying, listing)
- Achievement Tracking (progress updates, completion status)

## Response Formats

All API responses are returned in JSON format. A typical response structure includes:

```json
{
  "status": "success",
  "data": {
    // Response data here
  },
  "message": "Operation completed successfully"
}
Error Handling
In case of an error, the API will return an appropriate HTTP status code along with a JSON response containing error details:

{
  "status": "error",
  "error": {
    "code": "ERROR_CODE",
    "message": "A description of the error"
  }
}
```
Versioning
The API version is included in the URL path. We recommend specifying the API version in your requests to ensure compatibility.

SDK and Libraries
We offer SDKs for popular programming languages to facilitate easier integration:

JavaScript
Python
Java
Ruby
Webhooks
Our API supports webhooks for real-time event notifications. Configure webhooks in your developer dashboard to receive updates on specific events.

Testing
A sandbox environment is available for testing your integrations without affecting live data. Use the following base URL for sandbox requests:

https://sandbox-api.getstoken.org/v1
