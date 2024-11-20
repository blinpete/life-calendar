import { defineConfig } from '@solidjs/start/config'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  vite: {
    plugins: [UnoCSS()],
  },
  server: {
    compatibilityDate: '2024-11-20',
  },
})
