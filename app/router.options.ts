import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior: (to, _, savedPosition) => {
    // Scroll to heading on click
    if (to.hash) {
      if (to.hash === '#') {
        return {
          top: 0,
          // behavior: 'smooth',
        }
      }

      const el = document.querySelector(to.hash)

      // vue-router does not incorporate scroll-margin-top on its own.
      if (el) {
        const top = parseFloat(getComputedStyle(el).scrollMarginTop)
        if (el instanceof HTMLElement) {
          el.focus()
        }

        return {
          el: to.hash,
          // behavior: 'smooth',
          top,
        }
      }

      return {
        el: to.hash,
        // behavior: 'smooth',
      }
    }

    // Scroll to top of window
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
}
