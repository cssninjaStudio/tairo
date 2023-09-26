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
  blog: {
    header: {
      title: 'Blog default title',
      titleColored: 'Blog defualt Title colored',
      paragraph: 'Blog default base paragraph',
      image: '',
    },
    pages: {
      authors: {
        components: {
            BlogAuthor: {},
        }
      },
    },
    sidebars: {
      main: {
        components: {
          BlogTagsForSidebar: {
            props: { class: 'mb-4' },
          },
          BlogCategoriesForSidebar: {
            props: { class: 'mb-4' },
          },
        },
      },
      posts: {},
      categories: {},
      tags: {
        components: {
          BlogCategoriesForSidebar: {
            props: { class: 'mb-4' },
          },
        },
      },
    },
    route: '/blog',
  },
})
