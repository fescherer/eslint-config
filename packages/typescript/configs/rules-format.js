module.exports = Object.freeze({
  extends: ["@fescherer/eslint-config-base:format"],
  rules: Object.freeze({
  // '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }]
  '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }]
  })
})
