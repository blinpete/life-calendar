import { createMemo, For, Show } from 'solid-js'
import { newEvent } from '~/entities/event/event-new'
import EventList from '~/entities/event/EventList'
import { lifeStore, setLifeStore } from '~/entities/life/store'
import { addLayer, removeLayer } from './crud'

export function Layers() {
  const activeLayer = createMemo(() => lifeStore.layers[lifeStore.activeLayerIndex])

  return (
    <div class="flex flex-col gap-2 text-subtle text-center">
      <div class="flex gap-1.5 items-center flex-wrap">
        <For each={lifeStore.layers}>
          {(layer, i) => (
            <button
              class="link decoration-solid decoration-1.4"
              classList={{ 'text-main': i() === lifeStore.activeLayerIndex }}
              onClick={() => setLifeStore('activeLayerIndex', i())}
              style={i() === lifeStore.activeLayerIndex
                ? {
                    'text-shadow': '0.5px 0px 0 black',
                  }
                : undefined}
            >
              {layer.name}
            </button>
          )}
        </For>

        <button
          class="btn-icon text-subtle hover:text-main mt-0.5 -ml-0.5"
          onClick={() => {
            addLayer()
            setLifeStore('activeLayerIndex', lifeStore.layers.length - 1)
          }}
        >
          <span class="i-ph-plus-circle" />
        </button>
      </div>

      <hr class="border-main w-full" />

      <div class="flex items-center justify-center pos-relative">
        <input
          type="text"
          value={activeLayer().name}
          onInput={(e) => {
            setLifeStore('layers', lifeStore.activeLayerIndex, { name: e.target.value })
          }}
          class="bg-main text-subtle focus:(text-main bg-subtle) border-(1 main solid) rounded-xl pl-2.5 pr-7 outline-none"
        />
        <button
          class="btn-icon -mr-0.5 pos-absolute right-11 !bg-transparent"
          onClick={() => removeLayer(lifeStore.activeLayerIndex)}
        >
          <span class="i-ph-plus-circle rotate-45" />
        </button>
      </div>

      <EventList />

      <Show when={
        !lifeStore.layers[lifeStore.activeLayerIndex].events.length
        && !(newEvent.start || newEvent.end)
      }
      >
        <p>Click on a week to create event.</p>
      </Show>
    </div>
  )
}
