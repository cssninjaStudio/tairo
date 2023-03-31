import { withShurikenUI } from '@cssninja/nuxt-ui/tailwind'
import colors from 'tailwindcss/colors'

/**
 * This is the Tailwind config file for the demo.
 * It extends the default config from @cssninja/nuxt-ui/tailwind
 *
 * You can add/override your own customizations here.
 */
export default withShurikenUI({
  content: [],
  theme: {
    // Custom fonts (defaults values are commented out)
    // fontFamily: {
    //   sans: ['Roboto Flex', 'sans-serif'],
    //   heading: ['Inter', 'sans-serif'],
    //   alt: ['Karla', 'sans-serif'],
    // },
    extend: {
      // Custom colors
      colors: {
        primary: colors.red,
        muted: colors.stone,
        // info: colors.sky,
        // success: colors.teal,
        // warning: colors.amber,
        // danger: colors.rose,
      },
    },
  },
  plugins: [],
})
