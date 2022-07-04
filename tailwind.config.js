const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    /**
     * components/** /*.{vue,js}`,
     * layouts/** /*.vue`,
     * pages/** /*.vue`,
     * composables/** /*.{js,ts}`,
     * plugins/** /*.{js,ts}`,
     * App.{js,ts,vue}`,
     * app.{js,ts,vue}`
     */
  ],
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
        primary: colors?.purple,
        info: colors?.sky,
        success: colors?.teal,
        warning: colors?.amber,
        danger: colors?.rose,
      },
      fontFamily: {
        main: ['inter', 'sans-serif'],
        sub: ['karla', 'sans-serif'],
        text: ['Roboto', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),

    plugin(({ addComponents }) => {
      addComponents({
        '.tairo-focus': {
          '@apply outline-1 outline-dashed outline-offset-2': {},
          '@apply outline-transparent': {},
          '&:focus-within': {
            '@apply outline-gray-300 dark:outline-gray-600': {},
            '@apply outline-dashed ring-0': {},
          },
          '&:focus-visible': {
            '@apply outline-2': {},
          },
        },
      })
    }),
  ],
}
