// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server'

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en" class="min-h-[100dvh]">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.svg" />
          {assets}
        </head>
        <body class="bg-main text-main h-full">
          <div id="app" class="h-full">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
))
