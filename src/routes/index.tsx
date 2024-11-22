import { useNavigate } from '@solidjs/router'
import { Show } from 'solid-js'
import NewEvent from '~/entities/event/NewEvent'
import { Layers } from '~/entities/layer/Layers'
import { lifeStore, setLifeStore } from '~/entities/life/store'
import { Calendar } from '~/features/Calendar'
import { handleKeyboard } from '~/features/handleKeyboard'
import { Settings } from '~/features/Settings'

export default function MainPage() {
  handleKeyboard()

  const navigate = useNavigate()

  if (!lifeStore.birthday) {
    navigate('/home', { replace: true })
  }

  return (
    <main class="pb-36">
      <Show when={lifeStore.birthday}>
        <button
          class="
            pos-fixed top-9.5 right-3 z-5
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
      </Show>

      <Show
        when={lifeStore.showLayers && lifeStore.birthday}
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

      <Calendar />
    </main>
  )
}
