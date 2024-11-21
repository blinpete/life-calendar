import { ColorModeProvider, ColorModeScript, cookieStorageManagerSSR } from '@kobalte/core'
import { MetaProvider, Title } from '@solidjs/meta'
import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Suspense } from 'solid-js'
import { isServer } from 'solid-js/web'
import { getCookie } from 'vinxi/http'
import Nav from '~/shared/Nav'
import ThemeSwitcher from './shared/ThemeSwitcher'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

function getServerCookies() {
  'use server'
  const colorMode = getCookie('kb-color-mode')
  return colorMode ? `kb-color-mode=${colorMode}` : ''
}

export default function App() {
  const storageManager = cookieStorageManagerSSR(isServer ? getServerCookies() : document.cookie)

  return (
    <Router
      root={props => (
        <>
          <ColorModeScript storageType={storageManager.type} />

          <ColorModeProvider storageManager={storageManager}>
            <MetaProvider>
              <Title>Life calendar</Title>
              <header class="flex justify-between gap-4 px-3 py-2">
                <Nav />

                <ThemeSwitcher />
              </header>
              <main class="flex flex-col items-center px-4">
                <Suspense>{props.children}</Suspense>
              </main>
            </MetaProvider>
          </ColorModeProvider>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  )
}
