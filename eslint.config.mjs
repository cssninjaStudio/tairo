import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'unused-imports/no-unused-vars': 'off',
    'ts/ban-ts-comment': 'off',
  },
  ignores: ['layers/documentation/content/documentation/**'],
})
