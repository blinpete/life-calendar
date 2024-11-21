import type { WeekToEventsMap } from './week-styles'
import { flip, offset, shift } from '@floating-ui/dom'
import { useColorMode } from '@kobalte/core/color-mode'
import { eachWeekOfInterval, endOfISOWeekYear, endOfYear, formatDate, getYear, isSameDay, setDefaultOptions, startOfISOWeekYear, startOfWeekYear, startOfYear } from 'date-fns'
import { useFloating } from 'solid-floating-ui'

import { createSignal, For, Show } from 'solid-js'
import { useActiveEvent } from '~/entities/event/event-active'
import { lifeStore } from '~/entities/life/store'
import { getWeekStyle } from './week-styles'

export function Calendar() {
  const { colorMode } = useColorMode()
  const activeEvent = useActiveEvent()

  setDefaultOptions({
    weekStartsOn: lifeStore.weekStartsOn,
  })

  const start = startOfWeekYear(lifeStore.birthday)
  const end = endOfISOWeekYear(new Date())

  const weeks = eachWeekOfInterval({ start, end })

  const [reference, setReference] = createSignal<HTMLElement>()
  const [floating, setFloating] = createSignal<HTMLElement>()
  const position = useFloating(reference, floating, {
    placement: 'top',
    middleware: [offset(8), flip(), shift()],
  })

  const weekToEventsMap: WeekToEventsMap = new Map()
  weeks.forEach(w => weekToEventsMap.set(w, new Set()))

  const [hoveredWeek, setHoveredWeek] = createSignal<Date | null>(null)

  let prevWeekTimeout: NodeJS.Timeout | undefined

  return (
    <div
      class="mt-8"
      style={{
        'display': 'grid',
        'grid-template-columns': 'repeat(53, 1fr)',
        'grid-template-rows': 'auto',
        'gap': '3px',
      }}
    >
      <div
        ref={setFloating}
        style={{
          position: position.strategy,
          top: `${position.y ?? 0}px`,
          left: `${position.x ?? 0}px`,
          visibility: hoveredWeek() ? 'visible' : 'hidden',
        }}
        class="
          px-3 py-1 bg-main z-10
          rounded-md border-(1 main solid)
          w-max max-w-150 text-center
        "
      >
        <Show when={hoveredWeek()}>
          <h1 class="flex items-center justify-center gap-1.5 text-subtle">
            <span>{formatDate(hoveredWeek()!, 'yyyy-MM-dd')}</span>
            <span class="text-xs">{formatDate(hoveredWeek()!, '#w')}</span>
          </h1>
          <div class="text-main">
            <For each={[...(weekToEventsMap.get(hoveredWeek()!) || [])]}>
              {event => (
                <div>{event.name}</div>
              )}
            </For>
          </div>
        </Show>
      </div>

      <For each={weeks}>
        {week => (
          <div
            style={{
              'min-width': '15px',
              'min-height': '15px',
              ...getWeekStyle(week, activeEvent, colorMode(), weekToEventsMap),
            }}
            class="week"
            onMouseEnter={(e) => {
              clearTimeout(prevWeekTimeout)
              setHoveredWeek(week)
              setReference(e.currentTarget)
            }}
            onMouseLeave={() => {
              prevWeekTimeout = setTimeout(() => setHoveredWeek(null), 100)
            }}
            onDblClick={() => {
              activeEvent().setEvent({
                start: formatDate(week, 'yyyy-MM-dd'),
                end: formatDate(week, 'yyyy-MM-dd'),
              })
            }}
            onClick={() => {
              if (isSameDay(week, activeEvent().event.start)) {
                activeEvent().setEvent({ start: '' })
                return
              }

              if (isSameDay(week, activeEvent().event.end)) {
                activeEvent().setEvent({ end: '' })
                return
              }

              if (activeEvent().event.start) {
                activeEvent().setEvent({ end: formatDate(week, 'yyyy-MM-dd') })
              }
              else {
                activeEvent().setEvent({ start: week.toLocaleDateString('sv') })
              }
            }}
          />
        )}
      </For>
    </div>
  )
}
