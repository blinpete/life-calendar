import type { ColorMode } from '@kobalte/core/color-mode'
import type { JSX } from 'solid-js'

type DayStyles = Record<'past' | 'today' | 'future', JSX.CSSProperties>
type DayStylesByTheme = Record<ColorMode, DayStyles>

export const dayStylesByTheme: DayStylesByTheme = {
  dark: {
    past: {
      'background-color': '#2c2c2e',
    },
    today: {
      outline: '2px dimgrey solid',
    },
    future: {
      border: '1px solid #444',
    },
  },

  light: {
    past: {
      'background-color': '#dededa',
    },
    today: {
      outline: '2px #b0adae solid',
    },
    future: {
      border: '1px solid #babaa4',
    },
  },
}
