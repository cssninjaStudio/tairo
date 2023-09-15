import fs from 'fs'

export default defineNuxtConfig({
  ssr: false,
  extends: [
    /**
     * This extends the base Tairo layer.
     *
     * Alternatively you can use the following:
     * 'github:cssninjaStudio/tairo/layers/xxx#v1.0.0'
     *
     * And set GIGET_AUTH=<github_token> in your .env file
     *
     * This would allows you to create an empty git repository
     * with only your source code and no demo.
     */
    /* '../layers/dashboard', */
    /**
     * Uncomment the following line to add the Tairo Layout Sidebar layer
     */
    /* '../layers/tairo-layout-sidebar', */
    /**
     * This is an additional layer that adds SEO features.
     *
     * Can be used either to prevent indexing,
     * or to add custom meta tags to improve referencing.
     * @see https://github.com/harlan-zw/nuxt-seo-kit
     */
    /* 'nuxt-seo-kit', */
  ],

  css: ['vue-final-modal/style.css'],

  modules: [
    //...
    '@nuxt/content',
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
    navigation: {
      fields: `'author', 'publishedAt', 'tags', 'categories', 'id', 'cover', 'title', 'description'`,
    },
  },
  gtag: {
    initialConsent: false,
  },
})
