# Nuxt Base Template - Multipurpose Admin and Webapp Tailwind Template

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
    - [Install Node.js](#install-nodejs)
- [Layers](#layers)
  - [Blog](#blog-layer)



# Getting started

First of all, Thank you so much for purchasing this template and for being our loyal customer. You are awesome! You are entitled to get free lifetime updates to this product and support from the cssninjaStudio team directly. **Tairo** is a product built by [cssninjaStudio](https://cssninja.io/) and [Digisquad](https://digisquad.io/).

### Prerequisites

1. A recent web browser (Chrome, Edge, Firefox, ...)
2. [Node.js LTS](https://nodejs.org/en/) _(> 16.x with pnpm > 7)_ installed
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

> We also have a great [discord community](https://go.cssninja.io/discord) where you can ask questions and show your work.



------------------------------------------------------------------------------------------------------------------------------
# Layers
Here will be explained how to use the layers and how to modify them

## Blog Layer

- To activate blog layer add into `app/nuxt.config.ts` file the following
        extends:['../layers/blog']

- To modify the Blog header add the following to your `app/app.config.ts` file
    export default defineAppConfig({
        header: {
            title: 'Blog title',
            titleColored: 'Blog Title colored',
            paragraph: 'Blog base paragraph',
            image: '',
        }
    })

- Create a new article in the fold `app/content/blog` Check an example: `/layers/blog/content`

- To create a new component in the fold `/components/global/blog`

- To modify a base component create a new one in the /app/components directory and name it with the same name as the base component

- Content Documentation: https://content.nuxt.com/
