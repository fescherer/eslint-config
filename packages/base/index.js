module.exports = {
  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  
  env: {
    es2021: true,
    node: true
  },
  
  rules: {
    'no-multi-str': 'error',
    'no-unreachable': 'warn',
  }
}
  