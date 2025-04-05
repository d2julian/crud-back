/* eslint-env node */

module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-console': 'warn',
    'no-process-exit': 'off',
    'no-unused-vars': 'warn',
    'prefer-const': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-magic-numbers': 'off',
  },
};
