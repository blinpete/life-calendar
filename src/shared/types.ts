import { JSX } from "solid-js";

export type LifeEvent = {
  /** ISO string. example `1994-03-28` */
  start: string
  end: string
  name: string
  description?: string
  style: JSX.CSSProperties
}

export type LifeLayer = {
  name: string
  events: LifeEvent[]
}

export type LifeStore = {
  showSettings: boolean
  /** Date of birth in ISO format `yyyy-mm-dd`.*/
  birthday: string
  activeLayerIndex: number
  layers: LifeLayer[]
}