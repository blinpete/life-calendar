import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'

import { Suspense } from 'solid-js'
import Nav from '~/shared/Nav'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

export default function App() {
  return (
    <Router
      root={props => (
        <>
          <Nav />
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  )
}
