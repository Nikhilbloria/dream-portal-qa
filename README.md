@'
# Dream Portal – Automated QA Testing

## Project Overview

This project contains an automated QA test suite for the Dream Portal website:

https://arjitnigam.github.io/myDreams/

The tests are built using Playwright with JavaScript and follow a Page Object Model (POM) structure.

## Technology Stack

- Playwright
- JavaScript
- Node.js
- npm
- Git & GitHub
- Playwright HTML Report

## Test Coverage

### 1. Home Page

- Verifies the loading animation/message appears.
- Verifies the loading message disappears after the page loads.
- Verifies the main "My Dreams" content is visible.
- Verifies clicking "My Dreams" opens the Dream Diary and Dream Summary pages.

### 2. Dream Diary

- Verifies exactly 10 dream entries exist.
- Verifies every row contains 3 columns:
  - Dream Name
  - Days Ago
  - Dream Type
- Verifies Dream Name is not empty.
- Verifies Days Ago is not empty.
- Verifies Dream Type is either `Good` or `Bad`.
- Identifies recurring dreams from the diary data.
- Verifies the two recurring dreams:
  - Flying over mountains
  - Lost in maze

### 3. Dream Summary

- Verifies Good Dreams = 6.
- Verifies Bad Dreams = 4.
- Verifies Total Dreams = 10.
- Verifies Recurring Dreams = 2.

## Project Structure

```text
dream-portal-qa/
│
├── pages/
│   ├── HomePage.js
│   ├── DiaryPage.js
│   └── SummaryPage.js
│
├── tests/
│   ├── home.spec.js
│   ├── diary.spec.js
│   └── summary.spec.js
│
├── screenshots/
│   ├── 00_website_check.png
│   ├── 01_loading.png
│   ├── 02_home.png
│   ├── 03_dream_tabs.png
│   ├── 04_diary.png
│   ├── 05_diary_validation.png
│   ├── 06_summary.png
│   ├── 07_recurring.png
│   └── 08_test_report.png
│
├── playwright.config.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore