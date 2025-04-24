# Contributing to Video Player Application

Thank you for your interest in contributing to the Video Player Application! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Development Workflow](#development-workflow)
3. [Code Style](#code-style)
4. [Adding New Features](#adding-new-features)
5. [Fixing Bugs](#fixing-bugs)
6. [Submitting Pull Requests](#submitting-pull-requests)

## Getting Started

1. Fork the repository
2. Clone your fork to your local machine
   ```
   git clone https://github.com/your-username/video-player.git
   ```
3. Install dependencies
   ```
   npm install
   ```
4. Start the development server
   ```
   npm run dev
   ```

## Development Workflow

1. Create a new branch for your feature or bug fix
   ```
   git checkout -b feature/your-feature-name
   ```
2. Make your changes
3. Test your changes
4. Commit your changes with a descriptive commit message
   ```
   git commit -m "Add feature: your feature description"
   ```
5. Push your changes to your fork
   ```
   git push origin feature/your-feature-name
   ```
6. Create a pull request from your fork to the main repository

## Code Style

The project uses ESLint and Prettier for code formatting. Please ensure your code follows the project's style guidelines:

- Use functional components with hooks
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused on a single responsibility
- Use Tailwind CSS for styling

## Adding New Features

When adding new features, please follow these guidelines:

1. Update the data structure in `src/data/db.js` if needed
2. Create new components in the appropriate directory
3. Update the routing configuration in `src/routes/routes.jsx` if needed
4. Add tests for your new features
5. Update the documentation in `README.md` and `DOCUMENTATION.md`

### Example: Adding a New Video Type

1. Update the `videos` array in `src/data/db.js` to include your new video
2. Update the `getFormatBadgeColor` function in `VideoControl.jsx` to handle the new video type
3. Test the new video type in the application

## Fixing Bugs

When fixing bugs, please follow these guidelines:

1. Reproduce the bug in your local environment
2. Identify the root cause of the bug
3. Fix the bug
4. Add tests to prevent the bug from occurring again
5. Update the documentation if needed

## Submitting Pull Requests

When submitting a pull request, please include:

1. A clear description of the changes
2. Screenshots or videos demonstrating the changes (if applicable)
3. Any relevant issue numbers
4. Tests for your changes

The pull request will be reviewed by the maintainers, who may request changes before merging.
