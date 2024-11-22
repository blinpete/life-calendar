import { A, useLocation } from '@solidjs/router'
import clsx from 'clsx'

export default function Nav() {
  const location = useLocation()
  const active = (path: string) => path === location.pathname
    ? 'underline-solid !underline-[#777]'
    : ''

  return (
    <nav class="flex gap-1.5">
      <A class={clsx('link', active('/home'))} href="/home">Home</A>
      <A class={clsx('link', active('/'))} href="/">Calendar</A>
      <A class={clsx('link', active('/about'))} href="/about">About</A>
    </nav>
  )
}
