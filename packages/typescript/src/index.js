module.exports = {

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },

  plugins: ['@typescript-eslint'],
  extends: ['@fescherer/eslint-config-base', './configs/lint', './configs/format']

};
