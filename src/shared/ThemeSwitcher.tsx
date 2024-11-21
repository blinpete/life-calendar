import { useColorMode } from '@kobalte/core/color-mode'
import { JSX } from 'solid-js'

type Props = {
  class?: JSX.HTMLAttributes<HTMLElement>['class']
}
export default function (props: Props) {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <button
      class={`btn-icon ${props.class || ''}`}
      onClick={() => toggleColorMode()}
    >
      {
        colorMode() === 'dark'
          ? <span class="i-ph-moon-stars-duotone" />
          : <span class="i-ph-sun-duotone" />
      }
    </button>
  )
}
