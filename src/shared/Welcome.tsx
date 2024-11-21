import { createSignal } from 'solid-js'
import { setLifeStore } from '~/entities/life/store'

export function Welcome() {
  const [val, setVal] = createSignal('')

  return (
    <div class="flex flex-col items-center pt-[25dvh]">
      <h1 class="font-thin uppercase text-main flex flex-col items-end">
        <span class="text-xl text-subtle">Welcome to</span>
        <span class="text-5xl">Life Calendar</span>
      </h1>

      <div class="flex gap-2 items-baseline mt-2 justify-start w-full">
        <p class="-ml-5 mb-2 text-subtle font-200 uppercase text-sm">Type your birthday to start</p>

        <div class="pos-relative">
          <input
            type="text"
            value={val()}
            placeholder="YYYY-MM-DD"
            onChange={(e) => {
              setVal(e.target.value)
            }}
            class="
              w-30 rounded-sm px-2.5 py-0.5 font-mono
              border-(1 main solid) outline-none
              text-subtle focus:text-main placeholder
            "
          />
          <button
            class="btn-icon pos-absolute -right-7 top-50% -translate-y-50%"
            onClick={() => {
              setLifeStore('birthday', val())
            }}
          >
            <span class="
              i-ph-play-circle-duotone h-6 w-6
              text-subtle hover:text-main
              "
            />
          </button>
        </div>
      </div>
    </div>
  )
}
