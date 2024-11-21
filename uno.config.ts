import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

// @unocss-include
export default defineConfig({
  shortcuts: {
    'border-main': 'border-gray-400 border-opacity-30',
    'border-subtle': 'border-gray-400 border-opacity-10',
    'bg-main': 'bg-white dark:bg-[#121212]',
    'bg-active': 'bg-gray-400/10',
    'bg-subtle': 'bg-gray-400/3',
    'text-main': 'text-[#121212] dark:text-[#ddd]',
    'text-subtle': 'text-[#656565] dark:text-[#909090]',
    'placeholder': 'placeholder-[#656565] dark:placeholder-[#909090]',

    'link': [
      'underline-dashed underline-1.5 underline underline-offset-3',
      'underline-[#959595] dark:underline-[#555]',
      'text-subtle font-400 hover:text-main hover:underline-current',
    ].join(' '),

    'help-item': 'flex items-start',
    'help-btn': 'mr-1.5 mt-1 border border-subtle bg-active',
    'help-desc': 'text-subtle',
    'help-accent': 'text-main dark:font-normal light:font-500',
  },
  presets: [
    presetUno({
      dark: {
        dark: ':root[data-kb-theme="dark"]',
        light: ':root[data-kb-theme="light"]',
      },
    }),
    presetAttributify(),

    // https://unocss.dev/presets/icons
    presetIcons({
      scale: 1.2,
      extraProperties: {
        display: 'block',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
