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

  extends: ['./configs/format']

};
