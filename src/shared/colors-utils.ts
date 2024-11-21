import type { ColorMode } from "@kobalte/core/color-mode";
import { colord } from "colord";

export function getThemedColor(color: string, colorMode: ColorMode) {
  const _color = colord(color).toHsl()

  if (colorMode === 'light' && _color.l < 50) {
    _color.s = 1.5 * _color.s
    // _color.l = 1.05 * (100 - _color.l)
    // _color.l = 1.4 * _color.l +  0.4 * (100 - _color.l)
    _color.l = 70 +  0.3 * (20 - _color.l)
  }

  if (colorMode === 'dark' && _color.l > 50) {
    _color.s = 0.4 * (100 - _color.s)
    _color.l = 0.8 * (100 - _color.l)
  }

  return colord(_color).toHslString()
}