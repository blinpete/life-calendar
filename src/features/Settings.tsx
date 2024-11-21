import type { Day } from 'date-fns'
import { setDefaultOptions } from 'date-fns'
import { createEffect } from 'solid-js'
import { lifeStore, setLifeStore } from '~/entities/life/store'

export function Settings() {
  createEffect(() => {
    setDefaultOptions({
      weekStartsOn: lifeStore.weekStartsOn,
    })
  })

  return (
    <div class="flex flex-col gap-2 text-subtle">
      <div class="flex flex-col gap-1.5 items-start">
        <label>Birthday</label>
        <input
          type="text"
          value={lifeStore.birthday}
          onChange={(e) => {
            setLifeStore('birthday', e.target.value)
          }}
          class="bg-main text-subtle focus:(text-main bg-subtle) flex-1 border-(1 main solid) rounded-sm px-1 outline-none"
        />
      </div>

      <div class="flex flex-col gap-1.5 items-start">
        <label>Week starts on</label>
        <input
          type="text"
          value={+lifeStore.weekStartsOn}
          onChange={(e) => {
            setLifeStore('weekStartsOn', Number.parseInt(e.target.value) as Day)
          }}
          placeholder="0 = Sun, 1 = Mon"
          class="bg-main text-subtle focus:(text-main bg-subtle) flex-1 border-(1 main solid) rounded-sm px-1 outline-none"
        />
      </div>
    </div>
  )
}
