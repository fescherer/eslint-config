module.exports = Object.freeze({
  rules: Object.freeze({
    'no-trailing-spaces': 'error',
    'indent': ['error', 2],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'comma-dangle': 'error',
    'no-unexpected-multiline': 'error',
    'array-bracket-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'comma-spacing': ['error', { before: false, after: true }],
    'quotes': ['error', 'single'],
    'quote-props': ['error', 'consistent-as-needed'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'no-whitespace-before-property': 'error',
    'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
    'no-multi-spaces': 'error',

    'spaced-comment': ['error', 'always', {
      line: {
        markers: ['/'],
        exceptions: ['/', '#']
      },
      block: {
        markers: ['!'],
        exceptions: ['*'],
        balanced: true
      }
    }]
  })
})
