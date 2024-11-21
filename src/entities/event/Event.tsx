import { Show } from 'solid-js'
import ColorPicker from '~/shared/ColorPicker'
import type { LifeEvent } from '~/shared/types'
import { useActiveEvent } from './event-active'
import { newEvent } from './event-new'

interface Props {
  event: LifeEvent
  // setEvent: (e: LifeEvent) => void;

  onUpdate: (e: Partial<LifeEvent>) => void
  onSave: () => void
  onDelete: () => void
  onActivate: () => void
}

export default function (props: Props) {
  const activeEvent = useActiveEvent()

  return (
    <div class="flex gap-2 items-center">
      {/* <div>{event.start?.toLocaleDateString('sv')}</div> */}
      {/* <div>{event.start} - {event.end}</div> */}
      <ColorPicker
        value={() => props.event.style['background-color'] as string}
        setValue={(val) => {
          props.onUpdate({
            style: {
              'background-color': val,
            },
          })
        }}
      />
      <input
        type="text"
        value={props.event.name}
        onChange={(e) => {
          props.onUpdate({ name: e.target.value })
        }}
        class="bg-main text-subtle focus:(text-main bg-subtle) flex-1 focus:border-(1 main solid) rounded-sm px-1 outline-none"
        classList={{
          'border-(1 main solid)': props.event === newEvent,
        }}
      />

      <Show
        when={props.event === activeEvent().event}
        fallback={(
          <button
            class="btn-icon"
            onClick={() => {
              // activeEvent().setEvent(event);
              props.onActivate()
            }}
          >
            {/* <span class="i-ph-alarm" /> */}
            <span class="i-ph-calendar-dots-light" />
          </button>
        )}
      >
        <button
          class="btn-icon"
          onClick={() => {
            props.onUpdate(props.event)
            props.onSave()
          }}
        >
          <span class="i-ph-floppy-disk-light" />
        </button>
      </Show>

      <button
        class="btn-icon -mr-0.5"
        onClick={() => props.onDelete()}

      >
        {/* <span class="i-ph-trash" /> */}
        <span class="i-ph-plus-circle-light rotate-45" />
      </button>
    </div>
  )
}
