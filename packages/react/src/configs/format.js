module.exports = Object.freeze({
  rules: Object.freeze({
    // 'react/jsx-indent-props': ['error', { tab: 1 }],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always', beforeClosing: 'never' }],

    'jsx-a11y/no-aria-hidden-on-focusable': 'error',
    'jsx-a11y/lang': 'error',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  })
})
