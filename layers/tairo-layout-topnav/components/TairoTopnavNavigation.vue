<script setup lang="ts">
import { useTopnav } from '../composables/topnav'

const props = withDefaults(
  defineProps<{
    display:
      | 'condensed'
      | 'horizontal-scroll'
      | 'expanded-sm'
      | 'expanded-md'
      | 'expanded-lg'
      | 'expanded-xl'
    position: 'fixed' | 'absolute'
  }>(),
  {
    display: 'expanded-md',
    position: 'absolute',
  },
)
const { menuItems, isMobileOpen } = useTopnav()
const app = useAppConfig()
</script>

<template>
  <div
    class="dark:bg-muted-800 border-muted-200 dark:border-muted-700 left-0 top-0 z-40 w-full border-b bg-white transition-all duration-300"
    :class="[
      props.position === 'fixed' && 'fixed',
      props.position === 'absolute' && 'absolute',
    ]"
  >
    <nav
      class="relative"
      :class="[
        props.display === 'condensed' && 'w-full',
        props.display === 'horizontal-scroll' && 'mx-auto w-full pe-4',
        props.display === 'expanded-sm' &&
          'mx-auto w-full max-w-5xl px-4 lg:px-0',
        props.display === 'expanded-md' &&
          'mx-auto w-full max-w-6xl px-4 lg:px-0',
        props.display === 'expanded-lg' &&
          'mx-auto w-full max-w-7xl px-4 lg:px-0',
        props.display === 'expanded-xl' && 'mx-auto w-full px-4 lg:px-0',
      ]"
    >
      <div
        class="flex w-full flex-col items-center justify-between md:h-16 md:flex-row"
      >
        <div class="w-full grow md:w-auto">
          <slot />
        </div>
        <div
          class="dark:bg-muted-800 fixed start-0 top-0 z-20 w-full grow items-center bg-white p-3 md:static md:z-0 md:block md:w-auto md:bg-transparent md:p-0"
          :class="isMobileOpen ? 'flex' : 'hidden'"
        >
          <div class="me-auto block md:hidden">
            <BaseButtonClose
              color="muted"
              rounded="full"
              @click="isMobileOpen = false"
            />
          </div>
          <slot name="toolbar">
            <BaseButton to="#" color="primary">
              Get Started
            </BaseButton>
          </slot>
        </div>
      </div>
    </nav>
    <div
      class="flex items-center"
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
      <div class="flex overflow-x-auto lg:overflow-x-hidden">
        <NuxtLink
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.to"
          class="text-muted-400 hover:text-muted-500 dark:text-muted-500 dark:hover:text-muted-400 flex items-center justify-center border-b-2 border-transparent p-3 text-center transition-colors duration-300"
          exact-active-class="!border-primary-500 !text-muted-800 dark:!text-muted-100"
        >
          <BaseText size="sm">
            {{ item.name }}
          </BaseText>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
