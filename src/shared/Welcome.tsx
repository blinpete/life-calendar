import { useNavigate } from '@solidjs/router'
import { type Day, isValid } from 'date-fns'
import { createSignal, For, onMount } from 'solid-js'
import { lifeStore, setLifeStore } from '~/entities/life/store'

export function Welcome() {
  const [val, setVal] = createSignal('')
  const navigate = useNavigate()

  onMount(() => {
    setVal(lifeStore.birthday)
  })

  const onSubmitDate = (e: Event) => {
    e.preventDefault()

    setLifeStore('birthday', val())
    if (isValid(new Date(lifeStore.birthday))) {
      navigate('/')
    }
    else {
      console.error('wrong date format:', lifeStore.birthday)
    }
  }

  return (
    <div class="flex flex-col items-center pt-[25dvh] font-thin uppercase text-subtle">
      <h1 class="flex flex-col items-end">
        <span class="text-xl">Welcome to</span>
        <span class="text-5xl text-main">Life Calendar</span>
      </h1>

      <div class="flex gap-2 items-baseline mt-2 justify-start w-full">
        <p class="-ml-5 mb-2 text-subtle font-200 uppercase text-sm">Type your birthday to start</p>

        <div class="pos-relative">
          <form onSubmit={onSubmitDate}>
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
              onClick={onSubmitDate}
            >
              <span class="
                i-ph-play-circle-duotone h-6 w-6
                text-subtle hover:text-main
                "
              />
            </button>
          </form>
        </div>
      </div>

      <div class="mt-20">
        <div class="flex gap-2 items-center font-mono text-sm">
          <For each={['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']}>
            {(day, i) => (
              <button
                class="border-(1 main solid) hover:bg-active w-8 h-7 rounded-sm"
                classList={{ 'text-main': lifeStore.weekStartsOn === i() }}
                onClick={() => setLifeStore('weekStartsOn', i() as Day)}
              >
                {day}
              </button>
            )}
          </For>
        </div>

        <p class="text-xs font-200 text-start my-2">Week starts on</p>
      </div>
    </div>
  )
}
