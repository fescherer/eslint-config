const process = require('node:process')

const tsconfig = process.env.ESLINT_TSCONFIG


module.exports = {
  files: ['*.tsx', '*.jsx'],
  parserOptions: {
    tsconfigRootDir: process.cwd(),
    project: [tsconfig]
  },

  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  configs: {
    all: require("./configs/rules-all"),
    format: require("./configs/rules-format"),
    lint: require("./configs/rules-lint")
  }
};
