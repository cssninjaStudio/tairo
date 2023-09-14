<script setup lang="ts">
import { useTopnav } from '../composables/topnav'

export type LayoutDisplay =
  | 'condensed'
  | 'horizontal-scroll'
  | 'expanded-sm'
  | 'expanded-md'
  | 'expanded-lg'
  | 'expanded-xl'

const props = withDefaults(
  defineProps<{
    topnav?: boolean
    toolbar?: boolean
    circularMenu?: boolean
    display: LayoutDisplay
  }>(),
  {
    topnav: true,
    toolbar: true,
    circularMenu: true,
    display: 'expanded-lg',
  },
)

const year = new Date().getFullYear()
const route = useRoute()
const app = useAppConfig()
const { isMobileOpen } = useTopnav()

const topnavEnabled = computed(() => {
  return (
    app.tairo.topnav?.navigation?.enabled !== false && props.topnav !== false
  )
})
const toolbarEnabled = computed(() => {
  return (
    app.tairo.collapse?.toolbar?.enabled !== false && props.toolbar !== false
  )
})
const circularMenuEnabled = computed(() => {
  return (
    app.tairo.topnav?.circularMenu?.enabled !== false &&
    props.circularMenu !== false
  )
})

const mainClass = computed(() => {
  if (props.display === 'condensed') {
    return 'bg-muted-50 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden'
  }

  if (!topnavEnabled.value) {
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
        <TairoTopnavNavigation
          v-if="topnavEnabled"
          :display="props.display"
          position="fixed"
        >
          <div
            v-if="app.tairo.topnav?.navigation?.logo?.component"
            class="flex h-16 w-full items-center gap-x-4"
          >
            <NuxtLink to="/" class="flex items-center justify-center">
              <component
                :is="
                  resolveComponentOrNative(
                    app.tairo.topnav?.navigation.logo.component,
                  )
                "
                v-bind="app.tairo.topnav?.navigation.logo.props"
              ></component>
            </NuxtLink>
            <BaseHeading
              v-if="app.tairo.topnav?.toolbar?.showTitle"
              as="h1"
              size="lg"
              weight="light"
              class="text-muted-800 hidden dark:text-white md:block"
            >
              <slot name="title">{{ route.meta.title }}</slot>
            </BaseHeading>
            <component
              v-if="app.tairo.topnav?.navigation?.header?.component"
              :is="
                resolveComponentOrNative(
                  app.tairo.topnav?.navigation?.header?.component,
                )
              "
              v-bind="app.tairo.topnav?.navigation?.header?.props"
            ></component>
            <div class="flex items-center justify-center md:hidden">
              <button type="button" @click="isMobileOpen = true">
                <Icon name="lucide:menu" class="text-muted-400 h-6 w-6" />
              </button>
            </div>
          </div>
          <template #toolbar>
            <div v-if="toolbarEnabled">
              <div class="flex items-center justify-end gap-4 md:gap-2">
                <template v-for="tool of app.tairo.topnav?.toolbar?.tools">
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
        </TairoTopnavNavigation>
      </slot>

      <div :class="mainClass">
        <div
          class="pt-40 md:pt-36"
          :class="[
            props.display === 'condensed' && 'w-full',
            props.display === 'horizontal-scroll' &&
              'mx-auto w-full overflow-x-auto',
            props.display === 'expanded-sm' && 'mx-auto w-full max-w-5xl',
            props.display === 'expanded-md' && 'mx-auto w-full max-w-6xl',
            props.display === 'expanded-lg' && 'mx-auto w-full max-w-7xl',
            props.display === 'expanded-xl' && 'mx-auto w-full',
          ]"
        >
          <slot />
        </div>
      </div>

      <TairoPanels />

      <TairoTopnavCircularMenu v-if="circularMenuEnabled" />
    </div>

    <footer
      class="dark:bg-muted-900 border-muted-200 dark:border-muted-700 bg-muted-50 relative border-t"
    >
      <NuxtLink
        to="/"
        class="dark:bg-muted-900 bg-muted-50 absolute inset-x-0 -top-4 mx-auto flex h-9 w-14 items-center justify-center"
      >
        <TairoLogo class="text-primary-500 h-7 w-7" />
      </NuxtLink>
      <div
        class="ltablet:flex-row mx-auto flex flex-col items-center justify-between px-6 py-8 lg:flex-row"
        :class="[
          props.display === 'expanded-sm' && 'mx-auto w-full max-w-5xl',
          props.display === 'expanded-md' && 'mx-auto w-full max-w-6xl',
          props.display === 'expanded-lg' && 'mx-auto w-full max-w-7xl',
          props.display === 'expanded-xl' && 'mx-auto w-full',
        ]"
      >
        <NuxtLink
          to="/"
          aria-label="Go to Tairo homepage"
          class="ltablet:w-1/5 block w-full lg:w-1/5"
        >
          <TairoLogoText
            class="text-muted-300 ltablet:mx-0 mx-auto h-4 transition-all duration-200 lg:mx-0"
          />
        </NuxtLink>
        <div
          class="ltablet:mt-0 ltablet:gap-6 mt-6 flex flex-wrap items-center justify-center gap-4 lg:mt-0 lg:gap-6"
        >
          <NuxtLink
            to="/demos"
            class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
          >
            Demo pages
          </NuxtLink>

          <NuxtLink
            to="/documentation"
            class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
          >
            Documentation
          </NuxtLink>
          <NuxtLink
            to="https://github.com/shuriken-ui"
            target="_blank"
            rel="noopener"
            class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
          >
            Shuriken UI
          </NuxtLink>
          <NuxtLink
            to="https://cssninja.io/faq/support"
            target="_blank"
            rel="noopener"
            class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
          >
            Support
          </NuxtLink>
        </div>
        <div
          class="text-muted-500 dark:text-muted-400 ltablet:w-1/5 ltablet:justify-end ltablet:mt-0 mt-6 flex w-full items-center justify-center text-sm lg:mt-0 lg:w-1/5 lg:justify-end"
        >
          <span>
            ©
            <NuxtLink
              to="https://cssninja.io"
              target="_blank"
              rel="noopener"
              class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
            >
              Css Ninja
            </NuxtLink>
            2018-{{ year }}.
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>
