import { onCleanup, onMount } from 'solid-js'
import { activeEventIndex, setActiveEventIndex } from '~/entities/event/event-active'
import { resetNewEvent } from '~/entities/event/event-new'

function handler(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    if (activeEventIndex() !== null) {
      setActiveEventIndex(null)
    }
    else {
      resetNewEvent()
    }
  }
}

export function handleKeyboard(eventName: 'keydown' | 'keyup' = 'keydown') {
  onMount(() => {
    window.addEventListener(eventName, handler)
    onCleanup(() => window.removeEventListener(eventName, handler))
  })
}
