import type { ColorMode } from '@kobalte/core/color-mode'
import type { Accessor, JSX } from 'solid-js'
import { isSameDay, startOfDay, startOfWeek, startOfWeekYear } from 'date-fns'
import type { ActiveEvent } from '~/entities/event/event-active'
import { lifeStore } from '~/entities/life/store'
import { getThemedColor } from '~/shared/colors-utils'
import { dayStylesByTheme } from '~/shared/default-colors'
import type { LifeEvent } from '~/shared/types'

export const now = new Date()

export type WeekToEventsMap = WeakMap<Date, Set<LifeEvent>>

export function getWeekStyle(
  week: Date,
  activeEvent: Accessor<ActiveEvent>,
  colorMode: ColorMode,
  weekToEventsMap: WeekToEventsMap,
): JSX.CSSProperties {
  const css: JSX.CSSProperties = {}

  // past
  if (week < now) {
    Object.assign(css, dayStylesByTheme[colorMode].past)
  }

  // before birth
  if (week < startOfWeek(lifeStore.birthday)) {
    Object.assign(css, dayStylesByTheme[colorMode].future)
    css['background-color'] = 'transparent'
  }

  // first week
  if (isSameDay(week, startOfWeekYear(week))) {
    css['grid-column'] = '1'
  }

  // start/end of active event
  if (isSameDay(week, activeEvent().event.start) || isSameDay(week, activeEvent().event.end)) {
    css.outline = '2px #aaa solid'
  }

  // if (isSameDay(week, activeEvent().event.start)) {
  //   css["border-color"] = '#aaa'
  //   css["border-style"] = 'solid'
  //   css['border-width'] = '2px 0 2px 2px'
  //   css.transform = 'scale(1.25)'
  // }

  const eventsSet = weekToEventsMap.get(week)
  eventsSet?.clear()
  lifeStore.layers[lifeStore.activeLayerIndex].events.forEach((e) => {
    if (week >= startOfWeek(e.start) && week <= startOfWeek(e.end)) {
      if (e.style['background-color']) {
        const color = getThemedColor(e.style['background-color'], colorMode)
        Object.assign(css, { 'background-color': color })
      }
      else {
        Object.assign(css, e.style)
      }

      eventsSet?.add(e)
    }
  })

  if (week >= startOfDay(activeEvent().event.start) && week <= startOfDay(activeEvent().event.end)) {
    if (activeEvent().event.style['background-color']) {
      const color = getThemedColor(activeEvent().event.style['background-color']!, colorMode)
      Object.assign(css, { 'background-color': color })
    }
    else {
      Object.assign(css, activeEvent().event.style)
    }
  }

  const birthday = new Date(week.getFullYear(), 3, 4)
  if (isSameDay(startOfWeek(birthday), week)) {
    // css['border'] = '1.5px solid #905050'
    // css['border'] = '1.2px solid dimgrey'
  }

  return css
}
