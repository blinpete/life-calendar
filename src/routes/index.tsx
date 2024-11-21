import { Show } from 'solid-js'
import NewEvent from '~/entities/event/NewEvent'
import { Layers } from '~/entities/layer/Layers'
import { lifeStore, setLifeStore } from '~/entities/life/store'
import { Calendar } from '~/features/Calendar'
import { handleKeyboard } from '~/features/handleKeyboard'
import { Settings } from '~/features/Settings'
import { Welcome } from '~/shared/Welcome'

export default function Home() {
  handleKeyboard()

  return (
    <main class="pb-36">
      <button
        class="
          pos-fixed top-9.5 right-3 z-5
          btn-icon text-subtle hover:text-main
          !bg-transparent
        "
        onClick={() => {
          setLifeStore('showSettings', prev => !prev)
          setLifeStore('showLayers', false)
        }}
      >
        {/* <span class="i-ph-gear-duotone" /> */}
        <span class="i-ph-user-circle-duotone" />
      </button>

      <Show
        when={lifeStore.showSettings}
      >
        <div class="
          pos-fixed right-2.2 top-9 w-80
          max-h-[calc(100dvh-4rem)] overflow-y-auto
          p-3 rounded-md
          bg-main border-(~ main solid)
        "
        >
          <Settings />
        </div>
      </Show>

      <button
        class="
          pos-fixed top-16 right-3 z-5
          btn-icon text-subtle hover:text-main
          !bg-transparent
        "
        onClick={() => {
          setLifeStore('showLayers', prev => !prev)
          setLifeStore('showSettings', false)
        }}
      >
        <span class="i-ph-stack-simple-duotone" />
      </button>

      <Show
        when={lifeStore.showLayers}
      >
        <div class="
          pos-fixed right-2.2 top-9 w-80
          max-h-[calc(100dvh-4rem)] overflow-y-auto
          p-3 rounded-md
          bg-main border-(~ main solid)
        "
        >
          <Layers />
        </div>
      </Show>

      <NewEvent />

      <Show
        when={lifeStore.birthday}
        fallback={<Welcome />}
      >
        <Calendar />
      </Show>
    </main>
  )
}
