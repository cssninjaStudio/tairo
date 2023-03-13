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
    'import/default': 'off',
    //   'vue/script-setup-uses-vars': 'error',
    'vue/multi-word-component-names': 'off',
    //   'vue/define-macros-order': 'off',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': 'off',
    'prettier-vue/prettier': [
      'error',
      {
        // Override all options of `prettier` here
        // @see https://prettier.io/docs/en/options.html
        printWidth: 50,
        singleQuote: true,
        semi: false,
        trailingComma: 'all',
      },
    ],
  },
}
