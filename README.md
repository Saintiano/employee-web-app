
# React + TypeScript + Vite

A react and typescript web application to create company users and upload employees through excel


- React 
- Typescript
- Tailwind

## Table of Contents

- [React + TypeScript + Vite](#React + TypeScript + Vite)
  - [Table of Contents](#table-of-contents)
  - [Manual Installation](#manual-installation)
  - [Getting started](#getting-started)
  - [For development](#for-development)
  - [Set up user](#Set-up-user)


## Manual Installation

steps:

Clone the repo:

```sh
git clone --depth 1 https://github.com/Saintiano/employee-web-app.git  foldername

cd folder name
npx rimraf ./.git
```

Install the dependencies:

```sh
npm install
```

Set the environment variables:

```sh
cp .env.example .env

```
## Getting started

```sh
npm install

npm run build

npm start

```

## For development

```sh
npm install

npm run dev

```








This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
