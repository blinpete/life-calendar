import type { Accessor } from 'solid-js'
import { useColorMode } from '@kobalte/core/color-mode'
import { getThemedColor } from '../colors-utils'
import './style.css'

interface Props {
  /** color in HEX format */
  value: Accessor<string>
  setValue: (value: string) => void
}

export default function (props: Props) {
  const { colorMode } = useColorMode()

  return (
    <input
      type="color"
      style={{ 'background-color': getThemedColor(props.value(), colorMode()) }}
      value={props.value()}
      onInput={(e) => {
        props.setValue(e.target.value)
      }}
      class="
        picker__input border-[currentColor]
        h3.5 w3.5
        cursor-pointer pos-relative
      "
    />
  )
}
