import { Accessor } from 'solid-js'
import './style.css'

type Props = {
  /** color in HEX format */
  value: Accessor<string>
  setValue: (value: string) => void
}

export default function (props: Props) {
  return (
    <input
      type="color"
      // TOOD: support value invertion for theming
      style={{ 'background-color': props.value() }}
      value={props.value()}
      onInput={(e) => {
        props.setValue(e.target.value)
      }}
      class="picker__input pos-relative h3.5 w3.5 cursor-pointer border-[currentColor]"
    />
  )
}
