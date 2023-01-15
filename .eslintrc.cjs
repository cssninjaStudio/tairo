module.exports = {
  // root: true,
  // env: {
  //   browser: true,
  //   node: true,
  // },
  // parserOptions: {
  //   parser: '@typescript-eslint/parser',
  // },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-strongly-recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:tailwindcss/recommended',
    'prettier',
    'plugin:prettier-vue/recommended',
  ],
  plugins: ['tailwindcss'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    '@typescript-eslint/no-var-requires': 'off',

    'no-unused-vars': 'off',
    'no-undef': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/script-setup-uses-vars': 'error',
    'vue/multi-word-component-names': 'off',

    'import/default': 'off',
    //   'vue/script-setup-uses-vars': 'error',
    //   'vue/define-macros-order': 'off',
    'tailwindcss/no-custom-classname': 'off',
    //   // 'tailwindcss/classnames-order': 'off',
    'prettier-vue/prettier': [
      'error',
      {
        // Override all options of `prettier` here
        // @see https://prettier.io/docs/en/options.html
      },
    ],
  },
}
