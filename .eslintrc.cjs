module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
    'plugin:prettier-vue/recommended',
  ],
  plugins: ['tailwindcss', '@typescript-eslint'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  settings: {
    tailwindcss: {
      config: 'tailwind.config.ts',
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'no-unused-vars': 'off',
    'no-undef': 'off',

    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',

    'vue/script-setup-uses-vars': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/define-macros-order': 'error',

    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': 'error',

    'prettier-vue/prettier': [
      'error',
      {
        // Override all options of `prettier` here
        // @see https://prettier.io/docs/en/options.html
      },
    ],
  },
}
