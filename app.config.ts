import { defineConfig } from '@solidjs/start/config'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  vite: {
    plugins: [UnoCSS()],
  },
  ssr: false,
  server: {
    // https://docs.solidjs.com/solid-start/building-your-application/route-prerendering
    // https://nitro.build/config#prerender
    prerender: {
      routes: ['/about'],
    },
    compatibilityDate: '2024-11-20',
  },
})
