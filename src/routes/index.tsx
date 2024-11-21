import { Show } from 'solid-js'
import { Layers } from '~/entities/layer/Layers'
import { lifeStore, setLifeStore } from '~/entities/life/store'
import { Calendar } from '~/features/Calendar'
import { Welcome } from '~/shared/Welcome'

export default function Home() {
  return (
    <main class="pb-36">
      <button
        class="
          pos-fixed top-3 right-3 z-5
          btn-icon text-subtle hover:text-main
          !bg-transparent
        "
        onClick={() => {
          setLifeStore('showSettings', prev => !prev)
        }}
      >
        {/* <span class="i-ph-gear-duotone" /> */}
        <span class="i-ph-user-circle-duotone" />
      </button>

      <Show
        when={lifeStore.showSettings}
      >
        <div class="
          pos-fixed right-2.5 top-9.5 w-80
          max-h-[calc(100dvh-4rem)] overflow-y-auto
          p-3 rounded-md
          bg-main border-(~ main solid)
        "
        >
          <Layers />
        </div>
      </Show>

      <Show
        when={lifeStore.birthday}
        fallback={<Welcome />}
      >
        <Calendar />
      </Show>
    </main>
  )
}
