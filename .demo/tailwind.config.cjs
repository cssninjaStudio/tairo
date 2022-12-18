const { cssninjaConfig } = require('@cssninja/nuxt-ui/tailwind')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

/**
 * This is the Tailwind config file for the demo.
 * It extends the default config from @cssninja/nuxt-ui/tailwind
 *
 * You can add/override your own customizations here.
 */
module.exports = cssninjaConfig({
  theme: {
    extend: {
      colors: {
        muted: colors?.slate,
        primary: colors?.purple,
        // info: colors?.sky,
        // success: colors?.teal,
        // warning: colors?.amber,
        // danger: colors?.rose,
      },
    },
  },
  plugins: [
    // This plugin extracts all colors from the theme and adds them as CSS variables
    // to the :root selector. This allows you to use them in your CSS.
    plugin(({ addBase, theme }) => {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey]

          const newVars =
            typeof value === 'string'
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`)

          return { ...vars, ...newVars }
        }, {})
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      })
    }),
  ],
})
