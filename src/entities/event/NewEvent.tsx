import { Show } from 'solid-js'
import { lifeStore, setLifeStore } from '../life/store'
import Event from './Event'
import { activeEventIndex, setActiveEventIndex, useActiveEvent } from './event-active'
import { newEvent, resetNewEvent, setNewEvent } from './event-new'

export default function () {
  const activeEvent = useActiveEvent()

  return (
    <Show when={
      (activeEvent().event.start || activeEvent().event.end)
      && (activeEventIndex() === null)
    }
    >
      <div class="
          pos-fixed top-5 left-50% -translate-x-50%
          p-3 rounded-md
          bg-main border-(~ main solid)
        "
      >
        <Event
          event={newEvent}
          onUpdate={e => setNewEvent(e)}
          onSave={() => {
            setLifeStore(
              'layers',
              lifeStore.activeLayerIndex,
              'events',
              lifeStore.layers[lifeStore.activeLayerIndex].events.length,
              { ...newEvent },
            )
            resetNewEvent()
          }}
          onDelete={() => resetNewEvent()}
          onActivate={() => setActiveEventIndex(null)}
        />
      </div>
    </Show>
  )
}
