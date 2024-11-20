import { A } from '@solidjs/router'

export default function NotFound() {
  return (
    <main class="text-center">
      <h1 class="mb-2 mt-24 text-6xl font-thin uppercase">
        Not Found
      </h1>
      <p>
        Oops, there is no such page..
      </p>
      <p class="my-12">
        <A href="/" class="link">
          Home
        </A>
      </p>
    </main>
  )
}
