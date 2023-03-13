import { NuxtPage } from '@nuxt/schema'
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
      name: 'documentation',
      path: '/documentation',
      file: resolve(__dirname, './pages/documentation/index.vue'),
      meta: {
        title: 'Documentation Hub',
        breadcrumb: false,
      },
    },
    {
      name: 'documentation-colors',
      path: '/documentation/colors',
      file: resolve(__dirname, './pages/documentation/colors.vue'),
      meta: {
        title: 'Colors',
      },
    },
    {
      name: 'documentation-tooltip',
      path: '/documentation/tooltip',
      file: resolve(__dirname, './pages/documentation/tooltip.vue'),
      meta: {
        title: 'Tooltips',
      },
    },
    {
      name: 'documentation-icons',
      path: '/documentation/icons',
      file: resolve(__dirname, './pages/documentation/icons.vue'),
      meta: {
        title: 'Icons',
        documentation: {
          category: 'Uncategorized',
          components: ['Icon'],
          description:
            'Use icons to enhance the user experience and to make your application more intuitive. Eplore the different icon types and their variations.',
          icon: {
            src: '/img/illustrations/components/icons.svg',
            srcDark: '/img/illustrations/components/icons-dark.svg',
          },
        },
      },
    },
    {
      file: resolve(__dirname, './pages/documentation/ui.vue'),
      path: '/documentation/ui',
      meta: {
        title: 'Base UI Elements',
        breadcrumb: {
          label: 'Base UI Elements',
          hideLabel: false,
          icon: 'lucide:activity',
          to: '/documentation#base-ui-elements',
        },
        documentation: false,
      },
      children: [
        {
          name: 'documentation-accordion',
          path: 'accordion',
          file: resolve(__dirname, './pages/documentation/ui/accordion.vue'),
          meta: {
            title: 'Accordions',
            documentation: {
              category: 'Base UI Elements',
              components: ['BaseAccordion', 'BaseAccordionItem'],
              description:
                'Display content in a collapsible and expandable format.',
              icon: {
                src: '/img/illustrations/components/avatar.svg',
                srcDark: '/img/illustrations/components/avatar-dark.svg',
              },
            },
          },
        },
        {
          name: 'documentation-avatar',
          path: 'avatar',
          file: resolve(__dirname, './pages/documentation/ui/avatar.vue'),
          meta: {
            title: 'Avatars',
            documentation: {
              category: 'Base UI Elements',
              components: ['BaseAvatar'],
              description:
                'Use avatars to represent entities with an image, icon, or initials.',
              icon: {
                src: '/img/illustrations/components/accordion.svg',
                srcDark: '/img/illustrations/components/accordion-dark.svg',
              },
            },
          },
        },
        {
          name: 'documentation-avatar-group',
          path: 'avatar-group',
          file: resolve(__dirname, './pages/documentation/ui/avatar-group.vue'),
          meta: {
            title: 'Avatar group',
            documentation: {
              category: 'Base UI Elements',
              components: ['BaseAvatarGroup'],
            },
          },
        },
        {
          name: 'documentation-breadcrumb',
          path: 'breadcrumb',
          file: resolve(__dirname, './pages/documentation/ui/breadcrumb.vue'),
          meta: {
            title: 'Breadcrumbs',
            documentation: {
              category: 'Base UI Elements',
              components: ['BaseBreadcrumb'],
              description:
                'Automatically generate breadcrumbs based on the current route.',
              icon: {
                src: '/img/illustrations/components/breadcrumb.svg',
                srcDark: '/img/illustrations/components/breadcrumb-dark.svg',
              },
            },
          },
        },
        {
          name: 'documentation-button',
          path: 'button',
          file: resolve(__dirname, './pages/documentation/ui/button.vue'),
          meta: {
            title: 'Buttons',
            documentation: {
              category: 'Base UI Elements',
              components: ['BaseButton'],
              composables: ['useButton'],
              description:
                'Use buttons to trigger actions or to navigate to a new page. Eplore the different button types and their variations.',
              icon: {
                src: '/img/illustrations/components/buttons.svg',
                srcDark: '/img/illustrations/components/buttons-dark.svg',
              },
            },
          },
        },
        {
          name: 'documentation-button-action',
          path: 'button-action',
          file: resolve(
            __dirname,
            './pages/documentation/ui/button-action.vue',
          ),
          meta: {
            title: 'Button Action',
            documentation: {
              category: 'Base UI Elements',
              components: ['BaseButtonAction'],
              composables: ['useButton'],
            },
          },
        },
        {
          name: 'documentation-button-ring',
          path: 'button-ring',
          file: resolve(__dirname, './pages/documentation/ui/button-ring.vue'),
          meta: {
            title: 'Button Close',
            documentation: {
              category: 'Base UI Elements',
              components: ['BaseButtonRing'],
            },
          },
        },
        {
          name: 'documentation-button-close',
          path: 'button-close',
          file: resolve(__dirname, './pages/documentation/ui/button-close.vue'),
          meta: {
            title: 'Button Close',
            documentation: {
              category: 'Base UI Elements',
              components: ['BaseButtonClose'],
            },
          },
        },
        {
          name: 'documentation-button-icon',
          path: 'button-icon',
          file: resolve(__dirname, './pages/documentation/ui/button-icon.vue'),
          meta: {
            title: 'Button Icon',
            documentation: {
              category: 'Base UI Elements',
              components: ['BaseButtonIcon'],
              composables: ['useButton'],
            },
          },
        },
        {
          name: 'documentation-card',
          path: 'card',
          file: resolve(__dirname, './pages/documentation/ui/card.vue'),
          meta: {
            title: 'Cards',
            documentation: {
              category: 'Base UI Elements',
              components: ['BaseCard'],
              description: 'Cards are used to group related content.',
              icon: {
                src: '/img/illustrations/components/cards.svg',
                srcDark: '/img/illustrations/components/cards-dark.svg',
              },
            },
          },
        },
        {
          name: 'documentation-dropdown',
          path: 'dropdown',
          file: resolve(__dirname, './pages/documentation/ui/dropdown.vue'),
          meta: {
            title: 'Dropdowns',
            documentation: {
              category: 'Base UI Elements',
              components: [
                'BaseDropdown',
                'BaseDropdownItem',
                'BaseDropdownDivide',
              ],
              description:
                'Dropdowns are used to display multiple options after a user interaction.',
              icon: {
                src: '/img/illustrations/components/dropdown.svg',
                srcDark: '/img/illustrations/components/dropdown-dark.svg',
              },
            },
          },
        },
        {
          name: 'documentation-focus-loop',
          path: 'focus-loop',
          file: resolve(__dirname, './pages/documentation/ui/focus-loop.vue'),
          meta: {
            title: 'Focus Loop',
            documentation: {
              category: 'Base UI Elements',
              components: ['BaseFocusLoop'],
            },
          },
        },
        {
          name: 'documentation-icon-box',
          path: 'icon-box',
          file: resolve(__dirname, './pages/documentation/ui/icon-box.vue'),
          meta: {
            title: 'Icon Boxes',
            documentation: {
              category: 'Base UI Elements',
              components: ['BaseIconBox'],
              description:
                'Display a box with an icon and a title. Use this to raise attention to a specific feature.',
              icon: {
                src: '/img/illustrations/components/icon-box.svg',
                srcDark: '/img/illustrations/components/icon-box-dark.svg',
              },
            },
          },
        },
        {
          name: 'documentation-message',
          path: 'message',
          file: resolve(__dirname, './pages/documentation/ui/message.vue'),
          meta: {
            title: 'Messages',
            documentation: {
              category: 'Base UI Elements',
              components: ['BaseMessage'],
            },
          },
        },
        {
          name: 'documentation-pagination',
          path: 'pagination',
          file: resolve(__dirname, './pages/documentation/ui/pagination.vue'),
          meta: {
            title: 'Pagination',
            documentation: {
              category: 'Base UI Elements',
              components: ['BasePagination'],
            },
          },
        },
        {
          name: 'documentation-placeholder',
          path: 'placeholder',
          file: resolve(__dirname, './pages/documentation/ui/placeholder.vue'),
          meta: {
            title: 'Placeholders',
            documentation: {
              category: 'Base UI Elements',
              components: ['BasePlaceholderPage'],
            },
          },
        },
        {
          name: 'documentation-placeload',
          path: 'placeload',
          file: resolve(__dirname, './pages/documentation/ui/placeload.vue'),
          meta: {
            title: 'Placeloads',
            documentation: {
              category: 'Base UI Elements',
              components: ['BasePlaceload'],
            },
          },
        },
        {
          name: 'documentation-progress',
          path: 'progress',
          file: resolve(__dirname, './pages/documentation/ui/progress.vue'),
          meta: {
            title: 'Progress',
            documentation: {
              category: 'Base UI Elements',
              components: ['BaseProgress', 'BaseProgressCircle'],
              description:
                'Display the progress of a task in a linear or circular way.',
              icon: {
                src: '/img/illustrations/components/progress.svg',
                srcDark: '/img/illustrations/components/progress-dark.svg',
              },
            },
          },
        },
        {
          name: 'documentation-prose',
          path: 'prose',
          file: resolve(__dirname, './pages/documentation/ui/prose.vue'),
          meta: {
            title: 'Prose',
            documentation: {
              category: 'Base UI Elements',
              components: ['BaseProse'],
            },
          },
        },
        {
          name: 'documentation-snack',
          path: 'snack',
          file: resolve(__dirname, './pages/documentation/ui/snack.vue'),
          meta: {
            title: 'Snacks',
            documentation: {
              category: 'Base UI Elements',
              components: ['BaseSnack'],
              description:
                'Snacks are used to display an interactive message to the user. They are used to display information in a compact way.',
              icon: {
                src: '/img/illustrations/components/snacks.svg',
                srcDark: '/img/illustrations/components/snacks-dark.svg',
              },
            },
          },
        },
        {
          name: 'documentation-tabs-slider',
          path: 'tabs-slider',
          file: resolve(__dirname, './pages/documentation/ui/tabs-slider.vue'),
          meta: {
            title: 'Slider Tabs',
            documentation: {
              category: 'Base UI Elements',
              components: ['BaseTabSlider'],
            },
          },
        },
        {
          name: 'documentation-tabs',
          path: 'tabs',
          file: resolve(__dirname, './pages/documentation/ui/tabs.vue'),
          meta: {
            title: 'Nav Tabs',
            documentation: {
              category: 'Base UI Elements',
              components: ['BaseTabs'],
              description:
                'Use tabs to organize content into different sections.',
              icon: {
                src: '/img/illustrations/components/tabs.svg',
                srcDark: '/img/illustrations/components/tabs-dark.svg',
              },
            },
          },
        },
        {
          name: 'documentation-tag',
          path: 'tag',
          file: resolve(__dirname, './pages/documentation/ui/tag.vue'),
          meta: {
            title: 'Tags',
            documentation: {
              category: 'Base UI Elements',
              description:
                'Tags are used to display information in a compact way.',
              components: ['BaseTag'],
              icon: {
                src: '/img/illustrations/components/tags.svg',
                srcDark: '/img/illustrations/components/tags-dark.svg',
              },
            },
          },
        },
        {
          name: 'documentation-theme-toggle',
          path: 'theme-toggle',
          file: resolve(__dirname, './pages/documentation/ui/theme-toggle.vue'),
          meta: {
            title: 'Theme Toggle',
            documentation: {
              category: 'Base UI Elements',
              components: ['BaseThemeToggle'],
            },
          },
        },
        {
          name: 'documentation-typography',
          path: 'typography',
          file: resolve(__dirname, './pages/documentation/ui/typography.vue'),
          meta: {
            title: 'Typography',
            documentation: {
              category: 'Base UI Elements',
              components: ['BaseHeading', 'BaseParagraph', 'BaseText'],
            },
          },
        },
      ],
    },
    {
      file: resolve(__dirname, './pages/documentation/form.vue'),
      path: '/documentation/form',
      meta: {
        title: 'Base Forms',
        breadcrumb: {
          label: 'Base Forms',
          hideLabel: false,
          icon: 'lucide:text-cursor-input',
          to: '/documentation#base-forms',
        },
        documentation: false,
      },
      children: [
        {
          name: 'documentation-animated-checkbox',
          path: 'animated-checkbox',
          file: resolve(
            __dirname,
            './pages/documentation/form/animated-checkbox.vue',
          ),
          meta: {
            title: 'Checkbox Animated',
            documentation: {
              category: 'Base Forms',
              components: ['BaseAnimatedCheckbox'],
            },
          },
        },
        {
          name: 'documentation-autocomplete',
          path: 'autocomplete',
          file: resolve(
            __dirname,
            './pages/documentation/form/autocomplete.vue',
          ),
          meta: {
            title: 'Autocomplete',
            documentation: {
              category: 'Base Forms',
              components: ['BaseAutocomplete', 'BaseAutocompleteItem'],
            },
          },
        },
        {
          name: 'documentation-checkbox',
          path: 'checkbox',
          file: resolve(__dirname, './pages/documentation/form/checkbox.vue'),
          meta: {
            title: 'Checkbox',
            documentation: {
              category: 'Base Forms',
              components: ['BaseCheckbox', 'BaseCheckboxCustom'],
              description:
                'A checkbox is a form element that allows the user to select one or more options from a predefined set.',
              icon: {
                src: '/img/illustrations/components/checkboxes.svg',
                srcDark: '/img/illustrations/components/checkboxes-dark.svg',
              },
            },
          },
        },
        {
          name: 'documentation-checkbox-custom',
          path: 'checkbox-custom',
          file: resolve(
            __dirname,
            './pages/documentation/form/checkbox-custom.vue',
          ),
          meta: {
            title: 'Checkbox Custom',
            documentation: {
              category: 'Base Forms',
              components: ['BaseCheckboxCustom'],
              description:
                'Create a custom checkbox with the BaseCheckboxCustom component.',
              icon: {
                src: '/img/illustrations/components/checkboxes.svg',
                srcDark: '/img/illustrations/components/checkboxes-dark.svg',
              },
            },
          },
        },
        {
          name: 'documentation-file',
          path: 'file',
          file: resolve(__dirname, './pages/documentation/form/file.vue'),
          meta: {
            title: 'File inputs',
            documentation: {
              category: 'Base Forms',
              components: ['BaseInputFile'],
            },
          },
        },
        {
          name: 'documentation-input',
          path: 'input',
          file: resolve(__dirname, './pages/documentation/form/input.vue'),
          meta: {
            title: 'Inputs',
            documentation: {
              category: 'Base Forms',
              components: ['BaseInput'],
              description:
                'An input is a form element that allows the user to enter text or numeric data from the keyboard.',
              icon: {
                src: '/img/illustrations/components/forms.svg',
                srcDark: '/img/illustrations/components/forms-dark.svg',
              },
            },
          },
        },
        {
          name: 'documentation-listbox',
          path: 'listbox',
          file: resolve(__dirname, './pages/documentation/form/listbox.vue'),
          meta: {
            title: 'Listbox',
            documentation: {
              category: 'Base Forms',
              components: ['BaseListbox'],
            },
          },
        },
        {
          name: 'documentation-radio',
          path: 'radio',
          file: resolve(__dirname, './pages/documentation/form/radio.vue'),
          meta: {
            title: 'Radios',
            documentation: {
              category: 'Base Forms',
              components: ['BaseRadio'],
            },
          },
        },
        {
          name: 'documentation-radio-custom',
          path: 'radio-custom',
          file: resolve(
            __dirname,
            './pages/documentation/form/radio-custom.vue',
          ),
          meta: {
            title: 'Radios Custom',
            documentation: {
              category: 'Base Forms',
              components: ['BaseRadioCustom'],
            },
          },
        },
        {
          name: 'documentation-select',
          path: 'select',
          file: resolve(__dirname, './pages/documentation/form/select.vue'),
          meta: {
            title: 'Selects',
            documentation: {
              category: 'Base Forms',
              components: ['BaseSelect'],
            },
          },
        },
        {
          name: 'documentation-switch',
          path: 'switch',
          file: resolve(__dirname, './pages/documentation/form/switch.vue'),
          meta: {
            title: 'Switches',
            documentation: {
              category: 'Base Forms',
              components: ['BaseSwitchThin', 'BaseSwitchBall'],
              description:
                'A switch is a binary input that can be either on or off. It is used to toggle between two states.',
              icon: {
                src: '/img/illustrations/components/switches.svg',
                srcDark: '/img/illustrations/components/switches-dark.svg',
              },
            },
          },
        },
        {
          name: 'documentation-textarea',
          path: 'textarea',
          file: resolve(__dirname, './pages/documentation/form/textarea.vue'),
          meta: {
            title: 'Textarea',
            documentation: {
              category: 'Base Forms',
              components: ['BaseTextarea'],
            },
          },
        },
      ],
    },
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
                'Flex tables are a flexible way to display tabular data. They can be used to display data instead of a table.',
              icon: {
                src: '/img/illustrations/components/table.svg',
                srcDark: '/img/illustrations/components/table-dark.svg',
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
              components: ['TairoLayout', 'TairoLogo'],
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
                'Modals force the user to interact with them before they can continue using the application.',
              icon: {
                src: '/img/illustrations/components/modal.svg',
                srcDark: '/img/illustrations/components/modal-dark.svg',
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
            title: 'Navigation Toolbar',
            documentation: {
              category: 'Layout Elements',
              components: ['TairoNavigationCircularMenu'],
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
              components: [
                'TairoNavigationSidebar',
                'TairoNavigationSidebarItem',
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
              components: ['TairoNavigationToolbar', 'TairoNavigationBurger'],
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
                'Convert markdown to HTML client-side using the unified remak/rehype and shiki.',
              icon: {
                src: '/img/illustrations/components/forms.svg',
                srcDark: '/img/illustrations/components/forms-dark.svg',
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
            },
          },
        },
      ],
    },
  ],
} satisfies NuxtPage
