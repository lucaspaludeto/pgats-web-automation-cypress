# Web Automation Testing with Cypress

## Project Description

This repository contains an end-to-end testing suite built with Cypress for automated web application testing. The project implements comprehensive test scenarios covering various features including:

- User Authentication (Login/Register)
- Product Management
- Order Processing
- Contact Form Submissions
- Newsletter Subscriptions

## Prerequisites

- Node.js (v25.1.0)
- npm (v10.8.1)
- Git

## Installation

1. Clone this repository:
```bash
git clone https://github.com/lucaspaludeto/pgats-web-automation-cypress.git
```

2. Navigate to the project directory:
```bash
cd pgats-web-automation-cypress
```

3. Install dependencies:
```bash
npm install
```

## Running Tests

### Locally

You can run tests in different modes:

```bash
# Open Cypress Test Runner (Interactive Mode)
npx cypress open

# Run tests in headless mode
npx cypress run
```

### GitHub Actions

Tests are automatically executed through GitHub Actions workflow on:
- Push to main branch
- Pull request to main branch

To view test results:
1. Go to the Actions tab in GitHub repository
2. Select the latest workflow run
3. Download artifacts to view the HTML report

## Project Structure

```
cypress/
├── e2e/                    # Test specifications
│   ├── auth/              # Authentication tests
│   │   ├── login.cy.js
│   │   └── register.cy.js
│   ├── common/            # Common features
│   │   └── subscription.cy.js
│   ├── contact/           # Contact form tests
│   │   └── contactUs.cy.js
│   ├── order/            # Order processing tests
│   │   └── place-order.cy.js
│   └── products/         # Product management tests
│       └── products.cy.js
├── fixtures/              # Test data
│   ├── validUser.json
│   └── invalidUser.json
├── modules/               # Reusable modules
│   └── menu/
├── reports/              # Test execution reports
│   └── html/
└── support/              # Support files
    ├── commands.js       # Custom commands
    ├── e2e.js           # Global configuration
    └── helpers.js       # Helper functions
```

## Reports

After test execution, HTML reports are generated in:
```
cypress/reports/html/index.html
```

