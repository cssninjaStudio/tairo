# Branching Strategy and Workflow

Our project uses a structured branching strategy to manage development, ensure code stability, and facilitate feature integration. This strategy involves different types of branches: `feature`, `fix`, and `hotfix`. Below are the guidelines for when and how to use these branches.

## 1. Feature Branches

**When to Use**: For developing new features or enhancements.

**Branch From**: `develop`

**Merge Into**: `develop`

**Naming Convention**: `feature/<feature-name>`

**Purpose**: Allows for isolated development of new features without affecting the stable codebase. Each new feature should have its own branch.

### Workflow:

1. Create a new `feature` branch from `develop` for each new feature.
2. Once development is complete and tested, submit a pull request to merge the `feature` branch back into `develop`.
3. Review and merge the pull request. Delete the feature branch after merging.

## 2. Fix Branches

**When to Use**: For bug fixes or minor improvements not urgent enough to be considered a hotfix.

**Branch From**: `develop`

**Merge Into**: `develop`

**Naming Convention**: `fix/<fix-name>`

**Purpose**: To address bugs or make small improvements in a way that keeps the work organized and separate from feature development.

### Workflow:

1. Create a new `fix` branch from `develop` for each bug fix or minor improvement.
2. Once the fix is complete and tested, submit a pull request to merge the `fix` branch back into `develop`.
3. Review and merge the pull request. Delete the fix branch after merging.

## 3. Hotfix Branches

**When to Use**: For urgent fixes that need to be applied directly to the production environment.

**Branch From**: `main`

**Merge Into**: Both `main` and `develop`

**Naming Convention**: `hotfix/<hotfix-name>`

**Purpose**: Provides a quick path to patch production issues while ensuring that the same fix is applied to ongoing development work.

### Workflow:

1. Create a new `hotfix` branch from `main` for each urgent fix.
2. Complete the fix and perform thorough testing directly on the `hotfix` branch.
3. Submit a pull request to merge the `hotfix` branch back into `main` and another to merge into `develop`.
4. After merging, deploy the changes to production from `main` and ensure the `develop` branch also receives the update.
5. Delete the hotfix branch after merging.

## General Guidelines

- **Pull Requests**: All merges should be done through pull requests to facilitate code review and maintain a high-quality codebase.
- **Testing**: Ensure that all changes are thoroughly tested before merging into `develop` or `main`.
- **Deletion of Branches**: After merging, always delete the feature, fix, or hotfix branches to keep the repository clean.


# Tairo Nuxt - Multipurpose Admin and Webapp Tailwind Template

[![cssninja-discord](https://img.shields.io/discord/785473098069311510?label=join%20us%20on%20discord&color=6944EC)](https://go.cssninja.io/discord)

## ▶️ Getting started

First of all, Thank you so much for purchasing this template and for being our loyal customer. You are awesome! You are entitled to get free lifetime updates to this product and support from the cssninjaStudio team directly. **Tairo** is a product built by [cssninjaStudio](https://cssninja.io/) and [Digisquad](https://digisquad.io/).

### Prerequisites

1. A recent web browser (Chrome, Edge, Firefox, ...)
2. [Node.js LTS](https://nodejs.org/en/) _(LTS or Current version)_ installed
3. Knowledge with [Typescript](https://github.com/microsoft/typescript) _(should not be installed globally)_
4. Knowledge with [Tailwind CSS](https://tailwindcss.com/)
5. (recommended) [VSCode](https://code.visualstudio.com/) with [Volar](https://marketplace.visualstudio.com/items?itemName=vue.volar)

#### Install Node.js

1. Check if you already have Node.js installed. Run this command in your terminal:

```bash
node -v
```

If node is not installed on your machine, you can go to the official nodejs.org website, and choose the version depending on your operating system:

- <a href="https://nodejs.org/en/download/" target="_blank">Install Node.js and npm on Windows, Linux or Mac OSX</a>
- <a href="https://github.com/nvm-sh/nvm" target="_blank">Or, install Node Version Manager to quickly install and use different versions of Node.js</a>

2. Enable pnpm with corepack

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

> _corepack is installed with node from **v16.13.x**, if your version is below, install it with: `npm install -g corepack`_

To setup the template and start installing project dependencies, run:

```bash
pnpm install
```

> **Note:** This will install depenencies form all packages that matches with `pnpm-workspace.yaml`. If you need to clear all `node_modules`, you can use `pnpm clear:all` command.

## 🔃 Run a development server

To start the development server, run:

```bash
pnpm dev
```

This will run the `dev` script from the `package.json` file.

> Access the Tairo frontend in your browser at [http://localhost:3000/](http://localhost:3000/)

## 💡 What to do next ?

Our online documentation is a great place to learn how to use Tairo.
We try to keep it mostly up to date, so you can always find the latest information.

- [Access Online Documentation](https://tairo.cssninja.io/documentation)
- [Access Shuriken UI Documentation](https://shurikenui.com)

> We also have a great [discord community](https://go.cssninja.io/discord) where you can ask questions and show your work.
