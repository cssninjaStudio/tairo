<script setup lang="ts">
const props = defineProps<{
  tag?: string
  title?: string
}>()

const layerTree = [
  {
    item: {
      name: '.app/',
      tooltip: 'Your app root folder',
    },
    open: true,
    children: [
      {
        item: {
          name: 'components/',
          tooltip: 'Your app components',
        },
        open: true,
        children: [
          {
            item: {
              name: 'AppSearch.vue',
              tooltip: 'Your app search component',
              icon: 'vscode-icons:file-type-vue',
            },
          },
          {
            item: {
              name: 'BaseInput.vue',
              tooltip: 'Override @shuriken-ui/nuxt BaseInput',
              icon: 'vscode-icons:file-type-vue',
            },
          },
        ],
      },
      {
        item: {
          name: 'layouts/',
          tooltip: 'Your layouts',
        },
        open: true,
        children: [
          {
            item: {
              name: 'default.vue',
              tooltip: 'Define your default layout',
              icon: 'vscode-icons:file-type-vue',
            },
          },
        ],
      },
      {
        item: {
          name: 'pages/',
          tooltip: 'Your pages',
        },
        open: true,
        children: [
          {
            item: {
              name: 'index.vue',
              tooltip: 'Your home page',
              icon: 'vscode-icons:file-type-vue',
            },
          },
        ],
      },
      {
        item: {
          name: 'app.config.ts',
          tooltip: 'Your app config; depends on layers',
          icon: 'vscode-icons:file-type-typescript',
        },
      },
      {
        item: {
          name: 'nuxt.config.ts',
          tooltip: 'Extends layers and module config',
          icon: 'vscode-icons:file-type-typescript',
        },
      },
    ],
  },
  {
    item: {
      name: 'layers/',
      tooltip: 'List of extended layers in nuxt.config.ts',
    },
    open: true,
    children: [
      {
        item: {
          name: 'tairo/',
          color: 'bg-amber-500',
          tooltip: 'Shared base layer',
        },
        children: [
          {
            item: {
              name: 'components/',
            },
            children: [
              {
                item: {
                  name: 'TairoModal.vue',
                  icon: 'vscode-icons:file-type-vue',
                },
              },
              {
                item: {
                  name: 'TairoError.vue',
                  icon: 'vscode-icons:file-type-vue',
                },
              },
              {
                item: {
                  name: 'Tairo...',
                  icon: 'vscode-icons:file-type-vue',
                },
              },
            ],
          },
          {
            item: {
              name: 'composables/',
            },
            children: [
              {
                item: {
                  name: 'panels.ts',
                  icon: 'vscode-icons:file-type-typescript',
                },
              },
              {
                item: {
                  name: 'toaster.ts',
                  icon: 'vscode-icons:file-type-typescript',
                },
              },
            ],
          },
          {
            item: {
              name: 'layouts/',
            },
            children: [
              {
                item: {
                  name: 'empty.vue',
                  icon: 'vscode-icons:file-type-vue',
                },
              },
            ],
          },
          {
            item: {
              name: 'app.vue',
              tooltip: 'Default app wrapper component',
              icon: 'vscode-icons:file-type-vue',
            },
          },
          {
            item: {
              name: 'app.config.ts',
              tooltip: 'Default app config for tairo',
              icon: 'vscode-icons:file-type-typescript',
            },
          },
          {
            item: {
              name: 'nuxt.schema.ts',
              tooltip: 'Default nuxt schema for tairo',
              icon: 'vscode-icons:file-type-typescript',
            },
          },
          {
            item: {
              name: 'nuxt.config.ts',
              tooltip: 'Default nuxt config for tairo',
              icon: 'vscode-icons:file-type-typescript',
            },
          },
        ],
      },
      {
        item: {
          name: 'tairo-layout-sidebar/',
          color: 'bg-lime-500',
          tooltip: 'Layout layer with sidebar navigation',
        },
        children: [
          {
            item: {
              name: 'components/',
            },
            children: [
              {
                item: {
                  name: 'TairoSidebarLayout.vue',
                  icon: 'vscode-icons:file-type-vue',
                },
              },
              {
                item: {
                  name: 'TairoSidebarNavigation.vue',
                  icon: 'vscode-icons:file-type-vue',
                },
              },
              {
                item: {
                  name: 'TairoSidebar...',
                  icon: 'vscode-icons:file-type-vue',
                },
              },
            ],
          },
          {
            item: {
              name: 'composables/',
            },
            children: [
              {
                item: {
                  name: 'sidebar.ts',
                  icon: 'vscode-icons:file-type-typescript',
                },
              },
            ],
          },
          {
            item: {
              name: 'layouts/',
            },
            children: [
              {
                item: {
                  name: 'sidebar.vue',
                  icon: 'vscode-icons:file-type-vue',
                },
              },
            ],
          },
          {
            item: {
              name: 'error.vue',
              tooltip: 'Register error component using layout-sidebar',
              icon: 'vscode-icons:file-type-vue',
            },
          },
          {
            item: {
              name: 'app.config.ts',
              tooltip: 'Default config for layout-sidebar',
              icon: 'vscode-icons:file-type-typescript',
            },
          },
          {
            item: {
              name: 'nuxt.schema.ts',
              tooltip: 'Nuxt schema for layout-sidebar',
              icon: 'vscode-icons:file-type-typescript',
            },
          },
          {
            item: {
              name: 'nuxt.config.ts',
              tooltip: 'Extra nuxt config for layout-sidebar',
              icon: 'vscode-icons:file-type-typescript',
            },
          },
        ],
      },
      {
        item: {
          name: 'tairo-layout-collapse/',
          color: 'bg-pink-500',
          tooltip: 'Layout layer with collapsable navigation',
        },
        children: [
          {
            item: {
              name: 'components/',
            },
            children: [
              {
                item: {
                  name: 'TairCollapseLayout.vue',
                  icon: 'vscode-icons:file-type-vue',
                },
              },
              {
                item: {
                  name: 'TairCollapseNavigation.vue',
                  icon: 'vscode-icons:file-type-vue',
                },
              },
              {
                item: {
                  name: 'TairCollapse...',
                  icon: 'vscode-icons:file-type-vue',
                },
              },
            ],
          },
          {
            item: {
              name: 'composables/',
            },
            children: [
              {
                item: {
                  name: 'collapse.ts',
                  icon: 'vscode-icons:file-type-typescript',
                },
              },
            ],
          },
          {
            item: {
              name: 'layouts/',
            },
            children: [
              {
                item: {
                  name: 'collapse.vue',
                  icon: 'vscode-icons:file-type-vue',
                },
              },
            ],
          },
          {
            item: {
              name: 'error.vue',
              tooltip: 'Register error component using layout-collapse',
              icon: 'vscode-icons:file-type-vue',
            },
          },
          {
            item: {
              name: 'app.config.ts',
              tooltip: 'Specific config for layout-collapse',
              icon: 'vscode-icons:file-type-typescript',
            },
          },
          {
            item: {
              name: 'nuxt.schema.ts',
              tooltip: 'Specific nuxt schema for layout-collapse',
              icon: 'vscode-icons:file-type-typescript',
            },
          },
          {
            item: {
              name: 'nuxt.config.ts',
              tooltip: 'Extra nuxt config for layout-collapse',
              icon: 'vscode-icons:file-type-typescript',
            },
          },
        ],
      },
      {
        item: {
          name: '@shuriken-ui/nuxt',
          color: 'bg-purple-500',
          tooltip: 'Open-source shuriken-ui layer',
        },
        children: [
          {
            item: {
              name: 'components/',
            },
            children: [
              {
                item: {
                  name: 'BaseInput.vue',
                  icon: 'vscode-icons:file-type-vue',
                },
              },
              {
                item: {
                  name: 'BaseButton.vue',
                  icon: 'vscode-icons:file-type-vue',
                },
              },
              {
                item: {
                  name: 'Base...',
                  icon: 'vscode-icons:file-type-vue',
                },
              },
            ],
          },
          {
            item: {
              name: 'composables/',
            },
            children: [
              {
                item: {
                  name: 'file-preview.ts',
                  icon: 'vscode-icons:file-type-typescript',
                },
              },
              {
                item: {
                  name: 'scrollspy.ts',
                  icon: 'vscode-icons:file-type-typescript',
                },
              },
            ],
          },
          {
            item: {
              name: 'app.config.ts',
              tooltip: 'Default config for shuriken-ui',
              icon: 'vscode-icons:file-type-typescript',
            },
          },
          {
            item: {
              name: 'nuxt.schema.ts',
              tooltip: 'Nuxt schema for shuriken-ui',
              icon: 'vscode-icons:file-type-typescript',
            },
          },
          {
            item: {
              name: 'nuxt.config.ts',
              tooltip: 'Extra nuxt config for shuriken-ui',
              icon: 'vscode-icons:file-type-typescript',
            },
          },
        ],
      },
    ],
  },
]
const mergedTree = [
  {
    item: {
      name: 'components/',
    },
    open: true,
    children: [
      {
        item: {
          name: 'AppSearch.vue',
          tooltip: 'from your app layer',
          icon: 'vscode-icons:file-type-vue',
        },
      },
      {
        item: {
          name: 'BaseButton.vue',
          icon: 'vscode-icons:file-type-vue',
          color: 'bg-purple-500',
          tooltip: 'from @shuriken-ui/nuxt layer',
        },
      },
      {
        item: {
          name: 'BaseInput.vue',
          tooltip: 'from your app layer',
          icon: 'vscode-icons:file-type-vue',
        },
      },
      {
        item: {
          name: 'TairoModal.vue',
          icon: 'vscode-icons:file-type-vue',
          color: 'bg-amber-500',
          tooltip: 'from tairo layer',
        },
      },
      {
        item: {
          name: 'TairoError.vue',
          icon: 'vscode-icons:file-type-vue',
          color: 'bg-amber-500',
          tooltip: 'from tairo layer',
        },
      },
      {
        item: {
          name: 'TairoSidebarLayout.vue',
          icon: 'vscode-icons:file-type-vue',
          color: 'bg-lime-500',
          tooltip: 'from tairo-layout-sidebar layer',
        },
      },
      {
        item: {
          name: 'TairoSidebarNavigation.vue',
          icon: 'vscode-icons:file-type-vue',
          color: 'bg-lime-500',
          tooltip: 'from tairo-layout-sidebar layer',
        },
      },
      {
        item: {
          name: 'TairCollapseLayout.vue',
          icon: 'vscode-icons:file-type-vue',
          color: 'bg-pink-500',
          tooltip: 'from tairo-layout-collapse layer',
        },
      },
      {
        item: {
          name: 'TairCollapseNavigation.vue',
          icon: 'vscode-icons:file-type-vue',
          color: 'bg-pink-500',
          tooltip: 'from tairo-layout-collapse layer',
        },
      },
    ],
  },
  {
    item: {
      name: 'layouts/',
    },
    children: [
      {
        item: {
          name: 'empty.vue',
          tooltip: 'from tairo layer',
          icon: 'vscode-icons:file-type-vue',
          color: 'bg-amber-500',
        },
      },
      {
        item: {
          name: 'sidebar.vue',
          tooltip: 'from tairo-layout-sidebar layer',
          icon: 'vscode-icons:file-type-vue',
          color: 'bg-lime-500',
        },
      },
      {
        item: {
          name: 'collapse.vue',
          tooltip: 'from tairo-layout-collapse layer',
          icon: 'vscode-icons:file-type-vue',
          color: 'bg-pink-500',
        },
      },
      {
        item: {
          name: 'default.vue',
          tooltip: 'from your app layer',
          icon: 'vscode-icons:file-type-vue',
        },
      },
    ],
  },
  {
    item: {
      name: 'composables/',
    },
    children: [
      {
        item: {
          name: 'panels.ts',
          tooltip: 'from tairo layer',
          icon: 'vscode-icons:file-type-typescript',
          color: 'bg-amber-500',
        },
      },
      {
        item: {
          name: 'toaster.ts',
          tooltip: 'from tairo layer',
          icon: 'vscode-icons:file-type-typescript',
          color: 'bg-amber-500',
        },
      },
      {
        item: {
          name: 'sidebar.ts',
          tooltip: 'from tairo-layout-sidebar layer',
          icon: 'vscode-icons:file-type-typescript',
          color: 'bg-lime-500',
        },
      },
      {
        item: {
          name: 'collapse.ts',
          tooltip: 'from tairo-layout-collapse layer',
          icon: 'vscode-icons:file-type-typescript',
          color: 'bg-pink-500',
        },
      },
      {
        item: {
          name: 'file-preview.ts',
          tooltip: 'from @shuriken-ui/nuxt layer',
          icon: 'vscode-icons:file-type-typescript',
          color: 'bg-purple-500',
        },
      },
      {
        item: {
          name: 'scrollspy.ts',
          tooltip: 'from @shuriken-ui/nuxt layer',
          icon: 'vscode-icons:file-type-typescript',
          color: 'bg-purple-500',
        },
      },
    ],
  },
  {
    item: {
      name: 'pages/',
    },
    open: true,
    children: [
      {
        item: {
          name: 'index.vue',
          tooltip: 'from your app layer',
          icon: 'vscode-icons:file-type-vue',
        },
      },
    ],
  },
  {
    item: {
      name: 'app.vue',
      tooltip: 'from tairo layer',
      icon: 'vscode-icons:file-type-vue',
    },
  },
  {
    item: {
      name: 'error.vue',
      tooltip: 'depends on extends order in nuxt.config.ts',
      icon: 'vscode-icons:file-type-vue',
    },
  },
  {
    item: {
      name: 'app.config.ts',
      tooltip: 'merged from all layers',
      icon: 'vscode-icons:file-type-typescript',
    },
  },
  {
    item: {
      name: 'nuxt.config.ts',
      tooltip: 'merged from all layers',
      icon: 'vscode-icons:file-type-typescript',
    },
  },
]
</script>

<template>
  <DocLayoutSection :title="props.title" :tag="props.tag">
    <BaseCard
      class="divide-muted-200 dark:divide-muted-700 grid divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0"
    >
      <div>
        <div class="border-muted-200 dark:border-muted-700 border-b px-8 py-6">
          <span>Your project ...</span>
        </div>
        <div class="px-8 py-6">
          <BaseTreeSelect
            :children="layerTree"
            treeline
            :icons="{
              open: 'clarity:folder-open-line',
              closed: 'clarity:folder-line',
              item: 'clarity:file-line',
              empty: 'clarity:alert-line',
            }"
            :classes="{
              treeline: 'border-muted-300 dark:border-muted-700',
            }"
          >
            <template #item-icon="{ child }">
              <span
                class="text-muted-400 me-1 flex h-5 w-5 items-center justify-center"
              >
                <Icon :name="child?.item?.icon" class="h-4 w-4" />
              </span>
            </template>
            <template #item-label="{ child, toggle }">
              <span class="inline-flex items-center gap-2">
                <span
                  v-if="child?.item?.color"
                  class="inline-block h-2 w-2 rounded-sm"
                  :class="child?.item?.color"
                ></span>
                <span
                  :data-tooltip="child?.item?.tooltip"
                  data-tooltip-position="right"
                  :class="[
                    child?.children ? 'cursor-pointer' : 'cursor-default',
                    child?.item?.tooltip
                      ? 'cursor-help pe-2'
                      : 'cursor-default',
                  ]"
                  @click="toggle"
                >
                  {{ child?.item?.name }}
                </span>
              </span>
            </template>
          </BaseTreeSelect>
        </div>
      </div>
      <div>
        <div class="border-muted-200 dark:border-muted-700 border-b px-8 py-6">
          <span>... is merged into a unique app!</span>
        </div>
        <div class="px-8 py-6">
          <BaseTreeSelect
            :children="mergedTree"
            treeline
            :icons="{
              open: 'clarity:folder-open-line',
              closed: 'clarity:folder-line',
              item: 'clarity:file-line',
              empty: 'clarity:alert-line',
            }"
            :classes="{
              treeline: 'border-muted-300 dark:border-muted-700',
            }"
          >
            <template #item-icon="{ child }">
              <span
                class="text-muted-400 me-1 flex h-5 w-5 items-center justify-center"
              >
                <Icon :name="child?.item?.icon" class="h-4 w-4" />
              </span>
            </template>
            <template #item-label="{ child, toggle }">
              <span class="inline-flex items-center gap-2">
                <span
                  v-if="child?.item?.color"
                  class="inline-block h-2 w-2 rounded-sm"
                  :class="child?.item?.color"
                ></span>
                <span
                  :data-tooltip="child?.item?.tooltip"
                  data-tooltip-position="right"
                  :class="[
                    child?.children ? 'cursor-pointer' : 'cursor-default',
                    child?.item?.tooltip
                      ? 'cursor-help pe-2'
                      : 'cursor-default',
                  ]"
                  @click="toggle"
                >
                  {{ child?.item?.name }}
                </span>
              </span>
            </template>
          </BaseTreeSelect>
        </div>
      </div>
    </BaseCard>
  </DocLayoutSection>
</template>
