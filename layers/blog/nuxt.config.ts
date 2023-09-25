import fs from 'fs'

export default defineNuxtConfig({
  ssr: false,
  extends: [],
  css: ['vue-final-modal/style.css'],
  modules: [
    //...
    '@nuxt/content',
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
    navigation: {
      fields: [
        'author',
        'publishedAt',
        'tags',
        'categories',
        'id',
        'cover',
        'title',
        'description',
      ],
    },
  },
  gtag: {
    initialConsent: false,
  },
})
