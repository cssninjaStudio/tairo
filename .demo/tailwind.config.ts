import { withShurikenUI } from '@shuriken-ui/tailwind'
import { join } from 'pathe'
import plugin from 'tailwindcss/plugin'

/**
 * This is the Tailwind config file for the demo.
 * It extends the default config from @shuriken-ui/tailwind
 *
 * You can add/override your own customizations here.
 */
export default withShurikenUI({
  content: [join(__dirname, `/utils/**/*.ts`)], // Parse the utils folder for demo
  theme: {
    // Custom fonts
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      heading: ['Inter', 'sans-serif'],
      alt: ['Karla', 'sans-serif'],
      mono: [
        'Fira Code',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    extend: {
      // Custom colors
      colors: {
        // primary: colors.red,
        // muted: colors.stone,
        // info: colors.sky,
        // success: colors.teal,
        // warning: colors.amber,
        // danger: colors.rose,
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-fast': 'spin 0.65s linear infinite',
      },
    },
  },
  plugins: [
    // This plugin extracts all colors from the theme and adds them as CSS variables
    // to the :root selector. This allows you to use them in your CSS.
    plugin(({ addBase, theme }: any) => {
      addBase({
        ':root': extractColorVars(theme('colors')),
      })
    }),
  ],
})

function extractColorVars(colorObj: any, colorGroup = '') {
  return Object.keys(colorObj).reduce((vars, colorKey) => {
    const value = colorObj[colorKey]

    const newVars: any =
      typeof value === 'string'
        ? { [`--color${colorGroup}-${colorKey}`]: value }
        : extractColorVars(value, `-${colorKey}`)

    return { ...vars, ...newVars }
  }, {})
}
