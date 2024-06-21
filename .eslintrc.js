module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  plugins: [
    "simple-import-sort",
    "@typescript-eslint",
    "prettier",
    "jest-extended",
  ],
  rules: {
    "prettier/prettier": "error",
    "no-var": "error",
    "prefer-const": "error",
    "no-multiple-empty-lines": "error",
  },
};
