import plugin from 'tailwindcss/plugin'

/**
 * This plugin expose all colors from the tailwind config and adds them as CSS variables
 * to the :root selector.
 *
 * This allows you to use them in your CSS/JS. (see layers/tairo/composables/tailwind.ts)
 */
export default plugin(({ addBase, theme }: any) => {
  addBase({
    ':root': extractColors(theme('colors')),
  })
})

function extractColors(colors: any, prefix = '') {
  let cssVariables: any = {}

  for (const shade in colors) {
    const value = colors[shade]

    if (typeof value === 'string') {
      cssVariables[`--color${prefix}-${shade}`] = value
    } else {
      cssVariables = {
        ...cssVariables,
        ...extractColors(value, `-${shade}`),
      }
    }
  }

  return cssVariables
}
