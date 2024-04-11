<script setup lang="ts">
import { useIconnav } from '../composables/iconnav'

const props = withDefaults(
  defineProps<{
    topnav?: boolean
    toolbar?: boolean
    circularMenu?: boolean
    display?:
      | 'condensed'
      | 'horizontal-scroll'
      | 'expanded-sm'
      | 'expanded-md'
      | 'expanded-lg'
      | 'expanded-xl'
  }>(),
  {
    topnav: true,
    toolbar: true,
    circularMenu: true,
    display: 'expanded-lg',
  },
)

const route = useRoute()
const app = useAppConfig()
const config = useAppConfig().tairo.iconnav
const { selectedMenuItem } = useIconnav()

const iconnavEnabled = computed(() => {
  return config?.navigation?.enabled !== false
})
const toolbarEnabled = computed(() => {
  return (
    app.tairo.collapse?.toolbar?.enabled !== false && props.toolbar !== false
  )
})
const circularMenuEnabled = computed(() => {
  return config?.circularMenu?.enabled !== false && props.circularMenu !== false
})

const mainClass = computed(() => {
  if (props.display === 'condensed') {
    return 'bg-muted-50 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden'
  }

  if (!iconnavEnabled.value) {
    return 'bg-muted-50 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10'
  }

  const list = [
    'bg-muted-50 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10',
  ]

  if (props.display === 'horizontal-scroll') {
    list.push('!pe-0 xl:!pe-0')
  }

  return list
})
</script>

<template>
  <div>
    <div class="dark:bg-muted-900 bg-muted-50 pb-20">
      <slot name="navigation">
        <TairoIconnavNavigation
          v-if="iconnavEnabled"
          :display="props.display"
          position="fixed"
        >
          <div
            v-if="config?.navigation?.logo?.component"
            class="flex h-16 w-full items-center gap-x-4"
          >
            <NuxtLink to="/" class="flex items-center justify-center">
              <component
                :is="
                  resolveComponentOrNative(config?.navigation.logo.component)
                "
                v-bind="config?.navigation.logo.props"
              />
            </NuxtLink>
            <BaseHeading
              v-if="config?.toolbar?.showTitle"
              as="h1"
              size="lg"
              weight="light"
              class="text-muted-800 hidden md:block dark:text-white"
            >
              <slot name="title">
                {{ route.meta.title }}
              </slot>
            </BaseHeading>
          </div>
          <template #toolbar>
            <div v-if="toolbarEnabled">
              <div class="flex items-center justify-end gap-2">
                <template v-for="tool of config?.toolbar?.tools">
                  <component
                    :is="resolveComponentOrNative(tool.component)"
                    v-if="tool.component"
                    :key="tool.component"
                    v-bind="tool.props"
                  />
                </template>
              </div>
            </div>
          </template>
        </TairoIconnavNavigation>
      </slot>

      <div :class="mainClass">
        <div
          :class="[
            props.display === 'condensed' && 'w-full',
            props.display === 'horizontal-scroll' &&
              'mx-auto w-full overflow-x-auto',
            props.display === 'expanded-sm' && 'mx-auto w-full max-w-5xl',
            props.display === 'expanded-md' && 'mx-auto w-full max-w-6xl',
            props.display === 'expanded-lg' && 'mx-auto w-full max-w-7xl',
            props.display === 'expanded-xl' && 'mx-auto w-full',
            selectedMenuItem?.children
              ? 'ltablet:pt-36 pt-60 lg:pt-44'
              : 'pt-24',
          ]"
        >
          <slot />
        </div>
      </div>

      <TairoPanels />

      <TairoIconnavCircularMenu v-if="circularMenuEnabled" />
    </div>

    <TairoIconnavFooter
      v-if="config?.footer?.enabled"
      :display="props.display"
    />
  </div>
</template>
