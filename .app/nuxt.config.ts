export default defineNuxtConfig({
  compatibilityDate: '2024-11-26',
  future: {
    compatibilityVersion: 4,
  },
  extends: [
    /**
     * This extends the base Tairo layer.
     *
     * Alternatively you can use the following:
     * ["gh:cssninjaStudio/tairo/layers/tairo#v1.4.0", {
     *    install: true,
     *    auth: import.meta.env.GITHUB_TOKEN,
     * }]
     *
     * @see https://github.com/unjs/c12#extending-config-layer-from-remote-sources
     *
     * This would allows you to create an empty git repository
     * with only your source code and no demo.
     */

    /**
     * Uncomment the following line to add the Tairo Layout Sidebar layer
     */
    // '../layers/tairo-layout-sidebar',

    '../layers/tairo',
  ],

  css: [
    /**
     * Load local font with @fontsource packages
     * @see https://fontsource.org/
     */
    '@fontsource-variable/inter/index.css',
    '@fontsource-variable/karla/index.css',
    /**
     * Load Tailwind CSS
     */
    '~/assets/tailwind.css',
  ],
})
