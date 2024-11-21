import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    solid: true,
    typescript: true,
  },
  {
    rules: {
      'jsonc/sort-keys': 'off',
      'unocss/order': 'off',
      'no-console': 'off',
    },
  },
)
