const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      screens: {
        xs: { max: '639px' },
        sm: '640px',
        md: '768px',
        lg: '1025px',
        xl: '1280px',
        xxl: '1536px',
        ptablet: {
          raw: '(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)',
        },
        ltablet: {
          raw: '(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)',
        },
      },
      colors: {
        muted: colors?.slate,
        primary: colors?.purple,
        info: colors?.sky,
        success: colors?.teal,
        warning: colors?.amber,
        danger: colors?.rose,
      },
      fontFamily: {
        sans: ['Roboto Flex', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        alt: ['Karla', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),

    plugin(({ addComponents }) => {
      addComponents({
        '.ninja-focus': {
          '@apply outline-1 outline-dashed outline-offset-2': {},
          '@apply outline-transparent': {},
          '&:focus-within': {
            '@apply outline-muted-300 dark:outline-muted-600': {},
            '@apply outline-dashed ring-0': {},
          },
          '&:focus-visible': {
            '@apply outline-2': {},
          },
        },
      })
    }),
    function ({ addBase, theme }) {
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
    },
  ],
}
