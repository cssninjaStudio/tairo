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
  tairo: {
    title: 'Tairo Quickstarter',
    toolbar: {
      enabled: true,
      showTitle: true,
      showNavBurger: false,
      tools: [],
    },
    sidebar: {
      enabled: true,
      logo: {
        component: 'TairoLogo',
        props: { class: 'text-primary-600 h-10' },
      },
      items: [],
    },
    circularMenu: {
      enabled: false,
      tools: [],
    },
    panels: [],
  },

  // nui: {
  //   defaultShapes: {
  //     accordion: 'straight',
  //     autocompleteItem: 'straight',
  //     avatar: 'straight',
  //     button: 'straight',
  //     buttonAction: 'straight',
  //     buttonIcon: 'straight',
  //     card: 'straight',
  //     dropdown: 'straight',
  //     iconBox: 'straight',
  //     input: 'straight',
  //     message: 'straight',
  //     pagination: 'straight',
  //     progess: 'straight',
  //     prose: 'straight',
  //     tabSlider: 'straight',
  //     tag: 'straight',
  //   },
  // },
})
