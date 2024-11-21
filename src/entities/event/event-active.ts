import { createMemo, createSignal } from 'solid-js'
import type { LifeEvent } from '~/shared/types'
import { lifeStore, setLifeStore } from '../life/store'
import { newEvent, setNewEvent } from './event-new'

export const [activeEventIndex, setActiveEventIndex] = createSignal<number | null>(null)

export interface ActiveEvent {
  event: LifeEvent
  setEvent: (e: Partial<LifeEvent>) => void
}

export function useActiveEvent() {
  return createMemo<ActiveEvent>(() => {
    if (activeEventIndex() !== null) {
      return {
        event: lifeStore.layers[lifeStore.activeLayerIndex].events[activeEventIndex()!],
        setEvent: event => setLifeStore(
          'layers',
          lifeStore.activeLayerIndex,
          'events',
          activeEventIndex()!,
          event,
        ),
      }
    }
    else {
      return {
        event: newEvent,
        setEvent: event => setNewEvent(event),
      }
    }
  })
}
