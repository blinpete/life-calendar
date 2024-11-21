import { For, Show } from 'solid-js'
import { lifeStore, setLifeStore } from '../life/store'
import Event from './Event'
import { activeEventIndex, setActiveEventIndex, useActiveEvent } from './event-active'
import { newEvent, resetNewEvent, setNewEvent } from './event-new'

export default function () {
  const activeEvent = useActiveEvent()

  return (
    <>
      <div class="flex flex-col gap-1">
        <For each={lifeStore.layers[lifeStore.activeLayerIndex].events}>
          {(e, i) => (
            <Event
              event={e}
              onUpdate={e => setLifeStore(
                'layers',
                lifeStore.activeLayerIndex,
                'events',
                i(),
                e,
              )}
              onSave={() => setActiveEventIndex(null)}
              onDelete={() => setLifeStore(
                'layers',
                lifeStore.activeLayerIndex,
                'events',
                lifeStore.layers[lifeStore.activeLayerIndex].events.filter(x => x !== e),
              )}
              onActivate={() => setActiveEventIndex(i())}
            />
          )}
        </For>
      </div>
    </>
  )
}
