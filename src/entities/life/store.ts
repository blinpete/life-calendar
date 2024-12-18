import { makePersisted } from '@solid-primitives/storage'
import { createStore } from 'solid-js/store'
import type { LifeStore } from '~/shared/types'

export const [
  lifeStore,
  setLifeStore,
  initLifeStore,
] = makePersisted(createStore<LifeStore>({
  showSettings: false,
  showLayers: true,
  weekStartsOn: 1,
  birthday: '',
  activeLayerIndex: 0,
  layers: [
    {
      name: 'Life calendar',
      events: [],
    },
  ],
}), {
  name: 'lifecal',
  // serialize(data) {},
  // deserialize(data) {},
})
