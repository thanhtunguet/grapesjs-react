module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: false,
    jest: true,
  },
  extends: [
    "react-app",
  ],
  rules: {
    semi: [
      'error',
      'always',
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
  }
}
