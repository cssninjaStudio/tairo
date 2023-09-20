/**
 * This file is used to configure the app
 *
 * If you have the "Cannot find name 'defineAppConfig'.ts(2304)" error
 * update the root tsconfig.json file to include the following:
 *
 *  "extends": "./.app/.nuxt/tsconfig.json"
 *
 */

export default defineAppConfig({
  header: {
    title: 'Tairo Quick Starter',
    titleColored: 'Title colored',
    paragraph: 'base paragraph',
    image: '',
  },
  routes: {
    articles: {
      route: '/blog/articles',
      sideBar: true,
      sideBarType: 'posts'
    },
    tags: {
      route: '/blog/tags',
      sideBar: true,
      sideBarType: 'tags'
    },
    categories: {
      route: '/blog/categories',
      sideBar: true,
      sideBarType: 'categories'
    },
  },
  blog: {
    route: '/blog',
  },
})
