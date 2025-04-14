import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  vue: true,
  stylistic: true,
  formatters: {
    css: true,
    html: true,
  },
  rules: {
    'unused-imports/no-unused-vars': 'off',
    'ts/ban-ts-comment': 'off',
  },
})
