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
            src: '/img/illustrations/components/tag-icon.svg',
            srcDark: '/img/illustrations/components/tag-icon.svg',
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
                src: '/img/illustrations/components/accordion-icon.svg',
                srcDark: '/img/illustrations/components/accordion-icon.svg',
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
                'Use avatars to represent entities with an image, icon, or initials. Discover multiple variations and options.',
              icon: {
                src: '/img/illustrations/components/avatar-icon.svg',
                srcDark: '/img/illustrations/components/avatar-icon-dark.svg',
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
              description:
                'Use avatars groups to represent groups of persons, technologies, companies or anything else with a logo or an image.',
              icon: {
                src: '/img/illustrations/components/avatar-group-icon.svg',
                srcDark: '/img/illustrations/components/avatar-group-icon.svg',
              },
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
                "Don't let users get lost inside your application. Automatically generate breadcrumbs based on the current route.",
              icon: {
                src: '/img/illustrations/components/breadcrumb-icon.svg',
                srcDark: '/img/illustrations/components/breadcrumb-icon.svg',
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
                'Use buttons to trigger actions or to navigate to a new page. Explore the different button types and their variations.',
              icon: {
                src: '/img/illustrations/components/button-icon.svg',
                srcDark: '/img/illustrations/components/buttons-icon.svg',
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
              description:
                'Use actions to interact within or to navigate to a new page. Explore the different button types and their variations.',
              icon: {
                src: '/img/illustrations/components/button-icon.svg',
                srcDark: '/img/illustrations/components/button-icon.svg',
              },
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
              description:
                'Use close buttons for all your custom elements that need to have a close handle, like for modals, dialogs and alerts.',
              icon: {
                src: '/img/illustrations/components/button-close-icon.svg',
                srcDark: '/img/illustrations/components/button-close-icon.svg',
              },
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
              description:
                'Use icon buttons to interact within or to navigate to a new page. Explore the different button types and their variations.',
              icon: {
                src: '/img/illustrations/components/button-action-icon.svg',
                srcDark: '/img/illustrations/components/button-action-icon.svg',
              },
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
              description:
                'Cards are used to group related content and present it in an elegant and efficient way. Explore the available options.',
              icon: {
                src: '/img/illustrations/components/card-icon.svg',
                srcDark: '/img/illustrations/components/card-icon.svg',
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
                'Dropdowns are used to display multiple options after a user interaction. Customize how they look and feel using the available props.',
              icon: {
                src: '/img/illustrations/components/dropdown-icon.svg',
                srcDark: '/img/illustrations/components/dropdown-icon.svg',
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
              description:
                'Use the focus loop when you want to group several elements inside a same container and make them easily focusable.',
              icon: {
                src: '/img/illustrations/components/focus-loop-icon.svg',
                srcDark: '/img/illustrations/components/focus-loop-icon.svg',
              },
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
                src: '/img/illustrations/components/iconbox-icon.svg',
                srcDark: '/img/illustrations/components/iconbox-icon.svg',
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
              description:
                'Use messages to inform users about important interactions or events that occur inside your application.',
              icon: {
                src: '/img/illustrations/components/message-icon.svg',
                srcDark: '/img/illustrations/components/message-icon.svg',
              },
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
              description:
                'Use pagination in conjunction with your table, flex table, lists and any card grids to paginate the page content.',
              icon: {
                src: '/img/illustrations/components/pagination-icon.svg',
                srcDark: '/img/illustrations/components/pagination-icon.svg',
              },
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
              description:
                'Use placeholders when your pages are empty. It can be because there is no data yet to display or because the user has no access to the content.',
              icon: {
                src: '/img/illustrations/components/placeholder-icon.svg',
                srcDark: '/img/illustrations/components/placeholder-icon.svg',
              },
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
              description:
                'Use placeloads to show a loading state on your page. Placeloads can be customized to mimic the content structure of your page.',
              icon: {
                src: '/img/illustrations/components/placeload-icon.svg',
                srcDark: '/img/illustrations/components/placeload-icon.svg',
              },
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
                'Display the progress of a task in a linear or circular way. Use the different options to customize the look and feel of the progress bars.',
              icon: {
                src: '/img/illustrations/components/progress-icon.svg',
                srcDark: '/img/illustrations/components/progress-icon.svg',
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
              description:
                'Use the prose component, which is an implementation of the Tailwind CSS typography plugin, made ready to use for your content driven pages.',
              icon: {
                src: '/img/illustrations/components/prose-icon.svg',
                srcDark: '/img/illustrations/components/prose-icon.svg',
              },
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
                src: '/img/illustrations/components/snack-icon.svg',
                srcDark: '/img/illustrations/components/snack-icon.svg',
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
              description:
                'Use tab sliders to display fancy sliding tabs that you can use anywhere in your app, components and pages.',
              icon: {
                src: '/img/illustrations/components/tab-slider-icon.svg',
                srcDark: '/img/illustrations/components/tab-slider-icon.svg',
              },
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
                'Use navtabs to organize content into different sections. Explore the different options to customize the look and feel of your tabs.',
              icon: {
                src: '/img/illustrations/components/tabs-icon.svg',
                srcDark: '/img/illustrations/components/tabs-icon.svg',
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
                'Tags are used to display information in a compact and synthetic way. Many color and shape options are available to customize them.',
              components: ['BaseTag'],
              icon: {
                src: '/img/illustrations/components/tag-icon.svg',
                srcDark: '/img/illustrations/components/tag-icon.svg',
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
              description:
                'Tairo ships with a ready to use theme switcher that you can include anywhere to toggle between light and dark mode.',
              icon: {
                src: '/img/illustrations/components/theme-toggle-icon.svg',
                srcDark: '/img/illustrations/components/theme-toggle-icon.svg',
              },
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
              description:
                'Tairo provides ready to use typography components such as heading, paragraphs and text, with many customization options.',
              icon: {
                src: '/img/illustrations/components/typography-icon.svg',
                srcDark: '/img/illustrations/components/typography-icon.svg',
              },
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
          name: 'documentation-checkbox-animated',
          path: 'checkbox-animated',
          file: resolve(
            __dirname,
            './pages/documentation/form/checkbox-animated.vue',
          ),
          meta: {
            title: 'Checkbox Animated',
            documentation: {
              category: 'Base Forms',
              components: ['BaseCheckboxAnimated'],
              description:
                'Use animated checkboxes to display fancy svg circle and check animations, which are ideal to engage your audience.',
              icon: {
                src: '/img/illustrations/components/checkbox-icon.svg',
                srcDark: '/img/illustrations/components/checkbox-icon.svg',
              },
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
              description:
                'Tairo ships with ready to use autocompletes that render different kinds of lists, ranging from text to complex media objects.',
              icon: {
                src: '/img/illustrations/components/autocomplete-icon.svg',
                srcDark: '/img/illustrations/components/autocomplete-icon.svg',
              },
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
              components: ['BaseCheckbox'],
              description:
                'A checkbox is a form element that allows the user to select one or more options from a predefined set of data.',
              icon: {
                src: '/img/illustrations/components/checkbox-icon.svg',
                srcDark: '/img/illustrations/components/checkboxes-icon.svg',
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
              components: ['BaseCheckboxHeadless'],
              description:
                'Create a custom checkbox using the the base checkbox element and designing yourself the exterior look of it.',
              icon: {
                src: '/img/illustrations/components/checkbox-icon.svg',
                srcDark: '/img/illustrations/components/checkboxes-icon.svg',
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
              description:
                'Use file inputs in your form to allow the user to upload files from their computer. Many customization options are available.',
              icon: {
                src: '/img/illustrations/components/input-file-icon.svg',
                srcDark: '/img/illustrations/components/input-file-icon.svg',
              },
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
                'An input is a form element that allows the user to enter text or numeric data from the keyboard. Explore the available options.',
              icon: {
                src: '/img/illustrations/components/input-icon.svg',
                srcDark: '/img/illustrations/components/input-icon.svg',
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
              description:
                'Tairo ships with ready to use listbox select that render different kinds of lists, ranging from text to complex media objects.',
              icon: {
                src: '/img/illustrations/components/listbox-icon.svg',
                srcDark: '/img/illustrations/components/listbox-icon.svg',
              },
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
              description:
                'A radio button is a form element that allows the user to select a single option from a predefined set.',
              icon: {
                src: '/img/illustrations/components/radio-icon.svg',
                srcDark: '/img/illustrations/components/radio-icon.svg',
              },
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
              components: ['BaseRadioHeadless'],
              description:
                'Create a completely custom radio button using the the base radio element and designing yourself the exterior look of it.',
              icon: {
                src: '/img/illustrations/components/radio-icon.svg',
                srcDark: '/img/illustrations/components/radioes-icon.svg',
              },
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
              description:
                'Use the Tairo select form element when you wan to display a mobile friendly selection box. Explore the available customization options.',
              icon: {
                src: '/img/illustrations/components/select-icon.svg',
                srcDark: '/img/illustrations/components/select-icon.svg',
              },
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
                'A switch is a binary input that can be either on or off. It is used to toggle between two states. Check out the thin and the ball versions.',
              icon: {
                src: '/img/illustrations/components/switch-thin-icon.svg',
                srcDark: '/img/illustrations/components/switch-thin-icon.svg',
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
              description:
                'A textarea is a form element that allows the user to enter long text data from the keyboard. Explore the available customization options.',
              icon: {
                src: '/img/illustrations/components/textarea-icon.svg',
                srcDark: '/img/illustrations/components/textarea-icon.svg',
              },
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
              components: ['TairoLayout', 'TairoLogo'],
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
              components: ['TairoNavigationCircularMenu'],
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
              components: ['TairoNavigationToolbar', 'TairoNavigationBurger'],
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
                'Tairo ships with the Apexcharts data visualisation library customized for Vue and Nuxt. Use the compoenent to render charts and graphs.',
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
