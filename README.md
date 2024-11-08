# React + TypeScript + Vite

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
### Prettier configuration

- Install as dev dependency: `yarn add --dev --exact prettier`

- Create Prettier configuration file `.prettierrc.cjs`

```js
module.exports = {
  singleQuote: true,
  bracketSameLine: true,
  endOfLine: 'auto',
};
```
- Add Prettier command

```js
{
  "scripts": {
    "prettier:write": "prettier --config .prettierrc --write .",
    "prettier:check": "prettier --config .prettierrc --check .",
  }
}
```
- Add Prettier Ignore File: `.prettierignore`

node_modules
package-lock.json
dist
lint-*

- Add Prettier ESLint Rule:

These 2 packages are required for adding Prettier rule to ESLint:

`ESLint Config Prettier`: Personally recommended as it keeps linting and formatting as separate responsibilities.

`ESLint Plugin Prettier`: Runs Prettier within ESLint so you get feedback on violations from prettier itself.

```js
yarn add --dev eslint-config-prettier

yarn add --dev eslint-plugin-prettier
```

- Add Prettier rules to .eslintrc.cjs:

```js
module.exports = {
  extends: [
    ...
    'plugin:prettier/recommended'
  ],
};
```