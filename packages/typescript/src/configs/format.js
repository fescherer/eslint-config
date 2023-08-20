module.exports = Object.freeze({
  parser: '@typescript-eslint/parser',

  rules: Object.freeze({
  // '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }]
    '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }]
  })
})
