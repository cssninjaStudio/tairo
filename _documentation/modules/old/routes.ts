import type { NuxtPage } from '@nuxt/schema'
import { resolve } from 'path'

export const routes = {
  file: resolve(__dirname, './pages/documentation.vue'),
  path: '/documentation',
  meta: {
    breadcrumb: {
      label: 'Documentation Hub',
    },
  },
  children: [
    {
      file: resolve(__dirname, './pages/documentation/layout.vue'),
      path: '/documentation/layout',
      meta: {
        title: 'Layout Elements',
        breadcrumb: {
          label: 'Layout Elements',
          hideLabel: false,
          icon: 'lucide:activity',
          to: '/documentation#layout-elements',
        },
        documentation: false,
      },
      children: [
        {
          name: 'documentation-content-wrapper',
          path: 'content-wrapper',
          file: resolve(
            __dirname,
            './pages/documentation/layout/content-wrapper.vue',
          ),
          meta: {
            title: 'Content Wrapper',
            documentation: {
              category: 'Layout Elements',
              description:
                'Tairo content wrapper wraps the page content. It provides slots and allows you to control the horizontal flow of the page.',
              icon: {
                src: '/img/illustrations/components/logo-icon.svg',
                srcDark: '/img/illustrations/components/logo-icon.svg',
              },
              components: ['TairoContentWrapper', 'TairoContentWrapperTabbed'],
            },
          },
        },
        {
          name: 'documentation-flex-table',
          path: 'flex-table',
          file: resolve(
            __dirname,
            './pages/documentation/layout/flex-table.vue',
          ),
          meta: {
            title: 'Flex Tables',
            documentation: {
              category: 'Layout Elements',
              description:
                'Flex tables are an alternative way to display tabular data. They behave responsively on smaller screens.',
              icon: {
                src: '/img/illustrations/components/table-icon.svg',
                srcDark: '/img/illustrations/components/table-icon.svg',
              },
              components: [
                'TairoFlexTable',
                'TairoFlexTableHeading',
                'TairoFlexTableRow',
                'TairoFlexTableCell',
              ],
            },
          },
        },
        {
          name: 'documentation-layout',
          path: 'layout',
          file: resolve(__dirname, './pages/documentation/layout/layout.vue'),
          meta: {
            title: 'Layout',
            documentation: {
              category: 'Layout Elements',
              components: ['TairoSidebarLayout', 'TairoLogo'],
              description:
                "Tairo's layout and logo component provide an easy way and to handle layout variations and specific page overrides",
              icon: {
                src: '/img/illustrations/components/logo-icon.svg',
                srcDark: '/img/illustrations/components/logo-icon.svg',
              },
            },
          },
        },
        {
          name: 'documentation-modal',
          path: 'modal',
          file: resolve(__dirname, './pages/documentation/layout/modal.vue'),
          meta: {
            title: 'Modals',
            documentation: {
              category: 'Layout Elements',
              components: ['TairoModal'],
              description:
                'Modals are popups that you can use to force an interaction before the user can continue using the application.',
              icon: {
                src: '/img/illustrations/components/modal-icon.svg',
                srcDark: '/img/illustrations/components/modal-icon.svg',
              },
            },
          },
        },
        {
          name: 'documentation-navigation-circular-menu',
          path: 'navigation-circular-menu',
          file: resolve(
            __dirname,
            './pages/documentation/layout/navigation-circular-menu.vue',
          ),
          meta: {
            title: 'Circular Menu',
            documentation: {
              category: 'Layout Elements',
              components: ['TairoSidebarCircularMenu'],
              description:
                'Tairo circular menu is a flying button that can be expanded to display the toolbar menu, when not visible.',
              icon: {
                src: '/img/illustrations/components/circular-menu-icon.svg',
                srcDark: '/img/illustrations/components/circular-menu-icon.svg',
              },
            },
          },
        },
        {
          name: 'documentation-navigation-sidebar',
          path: 'navigation-sidebar',
          file: resolve(
            __dirname,
            './pages/documentation/layout/navigation-sidebar.vue',
          ),
          meta: {
            title: 'Navigation Sidebar',
            documentation: {
              category: 'Layout Elements',
              description:
                'The icon sidebar is the basic navigation block of the global layout. It displays the logo and the main navigation menu.',
              icon: {
                src: '/img/illustrations/components/sidebar-icon.svg',
                srcDark: '/img/illustrations/components/sidebar-icon.svg',
              },
              components: [
                'TairoSidebarNavigation',
                'TairoSidebarNavigationItem',
              ],
            },
          },
        },
        {
          name: 'documentation-navigation-subsidebar',
          path: 'navigation-subsidebar',
          file: resolve(
            __dirname,
            './pages/documentation/layout/navigation-subsidebar.vue',
          ),
          meta: {
            title: 'Navigation Subsidebar',
            documentation: {
              category: 'Layout Elements',
              components: ['TairoSubsidebar', 'TairoSubsidebarHeader'],
              description:
                'The subsidebar works as a submenu element for the main sidebar. Sidebar items can be single items or expandable items.',
              icon: {
                src: '/img/illustrations/components/sidebar-icon.svg',
                srcDark: '/img/illustrations/components/sidebar-icon.svg',
              },
            },
          },
        },
        {
          name: 'documentation-navigation-toolbar',
          path: 'navigation-toolbar',
          file: resolve(
            __dirname,
            './pages/documentation/layout/navigation-toolbar.vue',
          ),
          meta: {
            title: 'Navigation Toolbar',
            documentation: {
              category: 'Layout Elements',
              components: ['TairoSidebarToolbar', 'TairoSidebarBurger'],
              description:
                'Tairo toolbar and burger provide a smart way to handle menu items that are displayed at the top of the page.',
              icon: {
                src: '/img/illustrations/components/toolbar-icon.svg',
                srcDark: '/img/illustrations/components/toolbar-icon.svg',
              },
            },
          },
        },
        {
          name: 'documentation-popover',
          path: 'popover',
          file: resolve(__dirname, './pages/documentation/layout/popover.vue'),
          meta: {
            title: 'Popover',
            documentation: {
              category: 'Layout Elements',
              components: [
                'TairoPopover',
                'TairoPopoverContentHelp',
                'TairoPopoverContentDual',
                'TairoPopoverContentMedia',
              ],
              description:
                'A flexible popover that you can use to make simple text based popovers or more complex UI interactions.',
              icon: {
                src: '/img/illustrations/components/popover-icon.svg',
                srcDark: '/img/illustrations/components/popover-icon.svg',
              },
            },
          },
        },
        {
          name: 'documentation-table',
          path: 'table',
          file: resolve(__dirname, './pages/documentation/layout/table.vue'),
          meta: {
            title: 'Tables',
            documentation: {
              category: 'Layout Elements',
              components: [
                'TairoTable',
                'TairoTableHeading',
                'TairoTableRow',
                'TairoTableCell',
              ],
              description:
                'Tairo tables are a quick shortcut to render lists and collections using the native HTML5 table element.',
              icon: {
                src: '/img/illustrations/components/table-icon.svg',
                srcDark: '/img/illustrations/components/table-icon.svg',
              },
            },
          },
        },
        {
          name: 'documentation-toc',
          path: 'toc',
          file: resolve(__dirname, './pages/documentation/layout/toc.vue'),
          meta: {
            title: 'Table of Contents',
            documentation: {
              category: 'Layout Elements',
              components: ['TairoTocAnchor'],
              composables: ['useToc'],
              description:
                'Tairo table of contents anchor is an easy and effective way to structure your content heavy pages and documentations.',
              icon: {
                src: '/img/illustrations/components/anchor-icon.svg',
                srcDark: '/img/illustrations/components/anchor-icon.svg',
              },
            },
          },
        },
      ],
    },
    {
      file: resolve(__dirname, './pages/documentation/addons.vue'),
      path: '/documentation/addons',
      meta: {
        title: 'Addons',
        breadcrumb: {
          label: 'Addons',
          hideLabel: false,
          icon: 'lucide:zap',
          to: '/documentation#addons',
        },
        documentation: false,
      },
      children: [
        {
          name: 'documentation-apexcharts',
          path: 'apexcharts',
          file: resolve(
            __dirname,
            './pages/documentation/addons/apexcharts.vue',
          ),
          meta: {
            title: 'Apexcharts',
            documentation: {
              category: 'Addons',
              components: ['AddonApexcharts'],
              description:
                'Tairo ships with the Apexcharts data visualisation library customized for Vue and Nuxt. Use the component to render charts and graphs.',
              icon: {
                src: '/img/illustrations/components/apexcharts-icon.svg',
                srcDark: '/img/illustrations/components/apexcharts-icon.svg',
              },
            },
          },
        },
        {
          name: 'documentation-carousel',
          path: 'carousel',
          file: resolve(__dirname, './pages/documentation/addons/carousel.vue'),
          meta: {
            title: 'Carousel',
            documentation: {
              category: 'Addons',
              components: ['AddonCarouselTeam', 'AddonCarouselIcons'],
              description:
                'Tairo ships with the swiper module for  Nuxt. Use the component to display fancy and highly customizable carousels.',
              icon: {
                src: '/img/illustrations/components/carousel-icon.svg',
                srcDark: '/img/illustrations/components/carousel-icon.svg',
              },
            },
          },
        },
        {
          name: 'documentation-mapbox',
          path: 'mapbox',
          file: resolve(__dirname, './pages/documentation/addons/mapbox.vue'),
          meta: {
            title: 'Mapbox',
            documentation: {
              category: 'Addons',
              components: ['AddonMapboxPanel'],
              description:
                'Tairo ships with a Mapbox integration, allowing you to display maps anywhere you want. Explore the mapbox panel for a concrete example.',
              icon: {
                src: '/img/illustrations/components/map-icon.svg',
                srcDark: '/img/illustrations/components/map-icon.svg',
              },
            },
          },
        },
        {
          name: 'documentation-markdown',
          path: 'markdown',
          file: resolve(__dirname, './pages/documentation/addons/markdown.vue'),
          meta: {
            title: 'Markdown',
            documentation: {
              category: 'Addons',
              components: ['AddonMarkdownRemark'],
              description:
                'Convert markdown to HTML client-side using the unified remak/rehype and shiki. Use the built-in component to render markdown content.',
              icon: {
                src: '/img/illustrations/components/markdown-icon.svg',
                srcDark: '/img/illustrations/components/markdown-icon.svg',
              },
            },
          },
        },
        {
          name: 'documentation-slider',
          path: 'slider',
          file: resolve(__dirname, './pages/documentation/addons/slider.vue'),
          meta: {
            title: 'Sliders',
            documentation: {
              category: 'Addons',
              components: ['Slider'],
              description:
                'Tairo ships with the powerful vueform slider component. Use it to render fancy sliders with or without tooltips and the ability to merge them.',
              icon: {
                src: '/img/illustrations/components/avatar-group-icon.svg',
                srcDark: '/img/illustrations/components/avatar-group-icon.svg',
              },
            },
          },
        },
      ],
    },
  ],
} satisfies NuxtPage
