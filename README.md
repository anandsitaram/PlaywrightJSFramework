# Playwright Automation Framework Using JavaScript

## Overview
This is an automation framework designed for testing an sample e-commerce application developed using magento using Playwright. The framework follows the Page Object Model (POM) design pattern to enhance code reusability and maintainability.

## Technologies Used
- **Node.js**: JavaScript runtime environment.
- **Playwright**: Automation library for browser testing.
- **DotEnv**: Handling multiple environment


## Folder Structure
<img width="351" alt="image" src="https://github.com/user-attachments/assets/239188af-f90c-4d59-bf69-ccbe571ba658">

.
fixtures        # Contains Playwright fixtures for test setup.
pageobjects     # Contains page object classes for the application.
utils           # Utility functions and helpers.
testdata        # JSON files containing test data.
tests           # Test scripts utilizing the page objects and fixtures.
.env            # Environment variables configuration.

## Setup and Installation

1. **Install dependencies**:
 ```bash
npm install
```

2. **Configuration**:
 ```bash
Test Data: The test data is stored in the data/testData.json file. Update this file with the necessary data for your tests.
Running Tests
```
3. **Running Tests**:
 ```bash
npx playwright test
```


