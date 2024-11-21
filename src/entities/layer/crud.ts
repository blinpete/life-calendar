import { lifeStore, setLifeStore } from '~/entities/life/store'

export function removeLayer(index: number) {
  if (lifeStore.layers.length === 1) {
    // can't remove the only layer
    return
  }
  setLifeStore('activeLayerIndex', index ? index - 1 : index)
  setLifeStore('layers', prev => prev.filter((_, i) => i !== index))
}

export function addLayer() {
  setLifeStore(
    'layers',
    lifeStore.layers.length,
    {
      name: `Layer ${lifeStore.layers.length + 1}`,
      events: [],
    },
  )
}
