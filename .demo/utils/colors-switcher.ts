import chroma from 'chroma-js'

type ColorName = 'primary' | 'muted'
type ColorShade =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '950'

const shades = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '950',
] as const

const EMPTY_COLOR = '0 0 0'

/**
 * Convert color to RGB values, for use with Tailwind CSS variables.
 */
export const colorToRgb = (color: string): string => {
  if (!color) {
    return EMPTY_COLOR
  }

  return chroma(color)
    .rgb()
    .map((v) => {
      if (Number.isNaN(v)) {
        return 0
      }

      return Math.round(v)
    })
    .slice(0, 3) // Remove alpha channel if present
    .join(' ')
}

/**
 * Set a tailwind color complete shade.
 */
export function switchColorShades(
  name: ColorName,
  shades: Record<ColorShade, string>,
) {
  Object.entries(shades).forEach(([shade, color]) => {
    switchColor(name, shade as ColorShade, color)
  })
}

/**
 * Set a single tailwind color shade from a hex value.
 */
export function switchColor(name: ColorName, shade: ColorShade, color: string) {
  const rgb = colorToRgb(color)
  window.document.documentElement.style.setProperty(
    `--color-${name}-${shade}`,
    rgb,
  )
}

/**
 * Reset all shades of a color.
 */
export function resetColor(name: ColorName) {
  for (const shade of shades) {
    window.document.documentElement.style.removeProperty(
      `--color-${name}-${shade}`,
    )
  }
}
