<p align="center">
  <img alt="<PROJECT NAME> logo" width="300px" src="./public/favicon.ico">
</p>

<h1 align="center">Template - Frontend Web Application</h1>

<p align="center">
  Template is a feature-rich frontend application built using modern technologies like React, TypeScript, and Vite. It offers a fast and scalable platform for developers to collaborate and share coding knowledge.
</p>

<p align="center">
  <strong>Live demo:</strong> <a target="_blank" href="https://">Visit Template</a>
</p>

<p align="center">
  <strong>Design files:</strong> <a target="_blank" href="https://www.figma.com/">Figma</a>
</p>

## Table of Contents

- [Features](#features)
- [Tech-Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Running Tests](#running-tests)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Fast and Scalable**: Built using Vite and React for optimal performance.
- **Type-Safe**: Uses TypeScript for catching errors at compile time.
- **Rich Routing**: Implements client-side routing with React Router.
- **Form Management**: Handles form validation with React Hook Form.
- **Code Quality**: Ensures consistent styling with ESLint, Prettier, and Stylelint.
- **End-to-End Testing**: E2E tests using Playwright.

## Tech-Stack

- **React**: JavaScript library for building user interfaces
- **TypeScript**: Typed superset of JavaScript for better maintainability
- **Vite**: Fast build tool for modern web projects
- **SCSS**: CSS preprocessor for enhanced styling capabilities
- **React Router**: Client-side routing
- **Axios**: Promise-based HTTP client for data fetching

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (>=18.x).
- **pnpm**: Use `pnpm` as the package manager for consistency.

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/
cd Template
pnpm install
```

### Running Locally

Start the development server:

```bash
pnpm dev
```

### Running Tests

For end-to-end testing with Playwright:

```bash
pnpm test:e2e
```

### Linting and Formatting

To ensure code quality:

```bash
pnpm lint
pnpm format
```

## Folder Structure

This project uses the Feature-Sliced Design (FSD) architecture:

```bash
src/
  ├── app/          # App-level settings, providers, and configuration
  ├── entities/     # Business entities (e.g., User, Post)
  ├── features/     # Application features (e.g., Auth, Profile)
  ├── shared/       # Shared components, utils, styles, etc.
  ├── pages/        # Top-level routes and layout components
  ├── widgets/      # UI widgets for composition
```

## Contributing

We welcome contributions! Follow these steps to get started:

1. Fork the repository
2. Create a new branch (git checkout -b feature/your-feature)
3. Commit your changes (git commit -m 'Add your feature')
4. Push the branch (git push origin feature/your-feature)
5. Open a pull request

## License

This project is licensed under the MIT License. See the LICENSE file for details.
