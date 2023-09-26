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
    sidebars: {
      tags: {
        components: {
          NewOne: { props: { class: 'mb-20' } },
        },
      },
    },
    // header: {
    //   title: 'Blog title',
    //   titleColored: 'Blog Title colored',
    //   paragraph: 'Blog base paragraph',
    //   image: '',
    // },
  },
})
