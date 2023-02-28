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
  content: ['documentation/**/*.{vue, ts, js}'],
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
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.mask': {
          'mask-size': 'contain',
          'mask-repeat': 'no-repeat',
          'mask-position': 'center',
        },
        '.mask-hexed': {
          'mask-image':
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgyIiBoZWlnaHQ9IjIwMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNLjMgNjUuNDg2YzAtOS4xOTYgNi42ODctMjAuMDYzIDE0LjIxMS0yNS4wNzhsNjEuODYtMzUuOTQ2YzguMzYtNS4wMTYgMjAuODk5LTUuMDE2IDI5LjI1OCAwbDYxLjg2IDM1Ljk0NmM4LjM2IDUuMDE1IDE0LjIxMSAxNS44ODIgMTQuMjExIDI1LjA3OHY3MS4wNTVjMCA5LjE5Ni02LjY4NyAyMC4wNjMtMTQuMjExIDI1LjA3OWwtNjEuODYgMzUuOTQ1Yy04LjM2IDQuMTgtMjAuODk5IDQuMTgtMjkuMjU4IDBsLTYxLjg2LTM1Ljk0NUM2LjE1MSAxNTcuNDQuMyAxNDUuNzM3LjMgMTM2LjU0VjY1LjQ4NnoiLz48L3N2Zz4=')",
        },
      })
    }),
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
