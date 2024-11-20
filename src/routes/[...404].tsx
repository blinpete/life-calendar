import { A } from '@solidjs/router'

export default function NotFound() {
  return (
    <main class="mx-auto p-4 text-center text-gray-700">
      <h1 class="max-6-xs my-16 text-6xl text-sky-700 font-thin uppercase">
        Not Found
      </h1>
      <p>
        Oops, there is no such page..
      </p>
      <p class="my-4">
        <A href="/" class="text-sky-600 hover:underline">
          Home
        </A>
      </p>
    </main>
  )
}
