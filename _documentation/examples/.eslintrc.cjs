module.exports = {
  rules: {
    // demo
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style'],
      },
    ],
    'vue/html-comment-content-newline': 'error',
    'vue/html-comment-content-spacing': 'error',
    'vue/html-comment-indent': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/padding-line-between-tags': ['error', [{ blankLine: 'always', next: '*', prev: '*' }]],
  },
}
