/**
 * This file is used to configure the app
 *
 * If you have the "Cannot find name 'defineAppConfig'.ts(2304)" error
 * update the root tsconfig.json file to include the following:
 *
 *  "extends": "./.demo/.nuxt/tsconfig.json"
 *
 */

export default defineAppConfig({
  icon: {
    mode: 'svg',
  },
  tairo: {
    title: 'Tairo',
    panels: [
      {
        name: 'language',
        position: 'right',
        component: 'DemoPanelLanguage',
      },
      {
        name: 'activity',
        position: 'right',
        component: 'DemoPanelActivity',
      },
      {
        name: 'search',
        position: 'left',
        component: 'DemoPanelSearch',
      },
      {
        name: 'task',
        position: 'right',
        component: 'DemoPanelTask',
      },
      {
        name: 'account',
        position: 'right',
        component: 'DemoPanelAccount',
        size: 'md',
      },
      {
        name: 'card',
        position: 'right',
        component: 'DemoPanelCard',
      },
      {
        name: 'invest',
        position: 'right',
        component: 'DemoPanelInvest',
        size: 'md',
      },
    ],
    error: {
      logo: {
        component: 'img',
        props: {
          src: '/img/illustrations/system/404-1.svg',
          class: 'relative z-20 w-full max-w-lg mx-auto',
        },
      },
    },
  },
})
