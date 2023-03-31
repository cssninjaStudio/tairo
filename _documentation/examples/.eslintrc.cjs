module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:tailwindcss/recommended',
    'prettier',
    'plugin:prettier-vue/recommended',
  ],
  plugins: ['tailwindcss'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    // 'import/default': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style'],
      },
    ],
    'tailwindcss/classnames-order': 'error',
    'prettier-vue/prettier': [
      'error',
      {
        // Override all options of `prettier` here
        // @see https://prettier.io/docs/en/options.html
        printWidth: 100,
        singleQuote: true,
        semi: false,
        trailingComma: 'all',
      },
    ],
  },
}
