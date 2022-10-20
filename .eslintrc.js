module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  extends: ['plugin:@typescript-eslint/recommended', 'next', 'next/core-web-vitals', 'plugin:prettier/recommended', 'plugin:storybook/recommended']
};