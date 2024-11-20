import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    solid: true,
  },
  {
    rules: {
      'jsonc/sort-keys': 'off',
      'unocss/order-attributify': 'off',
      'no-console': 'off',
    },
  },
)
