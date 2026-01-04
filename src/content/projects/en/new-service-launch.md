---
title: Launch new service
description: Multi-tenant SaaS application on AWS with Clean Architecture
lang: en
techStack: [Go, Laravel, TypeScript, AWS Lambda, AWS ECS, AWS API Gateway, Open Policy Agent, CircleCI, Docker]
role: Lead Engineer
period: Sep 2018 - Apr 2020
order: 5
---

Architect a Multi-tenant SaaS application on AWS. Created a code base with Clean Architecture in mind with a light-weight Domain-Driven Design architecture. Encouraging colleagues to write unit/integration tests and integrated Codecov with GitHub PRs to motivate them by visualizing coverage percentage. Also created the code base on how to write e2e tests with Cypress for the front-end engineers. In addition, created the pipeline for CI/CD with CircleCI in combination with Cloud Formation. The pipeline also creates a Review App on every Pull Request to make the review process as smooth as possible. Finally, developed an authorization service using Open Policy Agent as a Go library which has a feature similar to the AWS IAM and also developed a Lambda Authorizer in order to authorize multi-tenant requests in the API Gateway.
