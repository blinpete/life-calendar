import { defineConfig } from '@solidjs/start/config'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  vite: {
    plugins: [UnoCSS()],
  },
  ssr: true,
  server: {
    // static: true,
    preset: 'github-pages',

    // eslint-disable-next-line node/prefer-global/process
    baseURL: process.env.BASE_PATH,

    // https://docs.solidjs.com/solid-start/building-your-application/route-prerendering
    // https://nitro.build/config#prerender
    prerender: {
      failOnError: true,
      routes: ['/about'],
    },
    compatibilityDate: '2024-11-20',
  },
})
