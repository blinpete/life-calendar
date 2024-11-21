import { createStore } from 'solid-js/store'
import type { LifeEvent } from '~/shared/types'

function createNewEvent(): LifeEvent {
  return {
    start: '',
    end: '',
    name: '',
    style: {
      'background-color': '#363f64',
      'border': '',
    },
    description: '',
  }
}

// https://www.solidjs.com/docs/latest/api#updating-stores
export const [newEvent, setNewEvent] = createStore<LifeEvent>(createNewEvent())

export function resetNewEvent() {
  setNewEvent(createNewEvent())
}
