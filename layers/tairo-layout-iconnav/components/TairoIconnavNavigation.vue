<script setup lang="ts">
import { useIconnav } from '../composables/iconnav'

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
    display: 'expanded-lg',
    position: 'absolute',
  },
)
const isSearchOpen = useState('search-open', () => false)
const metaKey = useMetaKey()
const { menuItems, selectedMenuItem } = useIconnav()
const app = useAppConfig()

const router = useRouter()
</script>

<template>
  <div
    class="dark:bg-muted-950 border-muted-200 dark:border-muted-800 left-0 top-0 z-40 w-full border-b bg-white transition-all duration-300"
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
          'mx-auto w-full max-w-5xl px-4 xl:px-0',
        props.display === 'expanded-md' &&
          'mx-auto w-full max-w-6xl px-4 xl:px-0',
        props.display === 'expanded-lg' &&
          'mx-auto w-full max-w-7xl px-4 xl:px-0',
        props.display === 'expanded-xl' && 'mx-auto w-full px-4 xl:px-0',
      ]"
    >
      <!-- Flex container -->
      <div class="flex h-20 w-full items-center justify-between">
        <!-- Logo -->
        <div class="w-1/5 md:w-1/4">
          <slot />
        </div>
        <!-- Menu Items -->
        <div class="ltablet:flex hidden grow justify-center gap-x-6 lg:flex">
          <div
            v-for="(item, index) in menuItems"
            :key="index"
            class="text-center"
          >
            <button
              v-if="item.children"
              type="button"
              class="group flex flex-col"
              :class="
                selectedMenuItem?.activePath === item.activePath &&
                  '[&>div]:!bg-primary-500/10 [&>div]:!text-primary-500 dark:[&>div]:!bg-primary-500/20 [&>p]:!text-primary-500'
              "
              @click="
                () => {
                  selectedMenuItem = item,
                  router.push(item.children?.[0]?.to)
                }
              "
            >
              <div
                class="text-muted-400 group-hover:bg-muted-100 group-hover:text-muted-600 dark:group-hover:bg-muted-800 dark:group-hover:text-muted-300 relative mx-auto flex size-11 items-center justify-center rounded-xl transition-colors duration-300"
              >
                <Icon :name="item.icon.name" :class="item.icon.class" />
              </div>
              <p class="text-muted-400 w-full text-center font-sans text-xs">
                {{ item.name }}
              </p>
            </button>
            <NuxtLink
              v-else-if="item.to"
              class="group flex flex-col"
              :to="item.to"
              exact-active-class="[&>div]:!bg-primary-500/10 dark:[&>div]:!bg-primary-500/20 [&>div]:!text-primary-500 [&>p]:!text-primary-500"
            >
              <div
                class="text-muted-400 group-hover:bg-muted-100 group-hover:text-muted-600 dark:group-hover:bg-muted-800 dark:group-hover:text-muted-300 relative mx-auto flex size-11 items-center justify-center rounded-xl transition-colors duration-300"
              >
                <Icon :name="item.icon.name" :class="item.icon.class" />
              </div>
              <p class="text-muted-400 w-full text-center font-sans text-xs">
                {{ item.name }}
              </p>
            </NuxtLink>
            <button
              v-else
              type="button"
              class="group flex flex-col"
              @click="item.click"
            >
              <div
                class="text-muted-400 group-hover:bg-muted-100 group-hover:text-muted-600 dark:group-hover:bg-muted-800 dark:group-hover:text-muted-300 relative mx-auto flex size-11 items-center justify-center rounded-xl transition-colors duration-300"
              >
                <Icon :name="item.icon.name" :class="item.icon.class" />
              </div>
              <p class="text-muted-400 w-full text-center font-sans text-xs">
                {{ item.name }}
              </p>
            </button>
          </div>
        </div>
        <!-- Button -->
        <div class="w-4/5 md:w-1/4">
          <slot name="toolbar">
            <BaseButton to="#" color="primary">
              Get Started
            </BaseButton>
          </slot>
        </div>
      </div>
    </nav>
    <div class="ltablet:hidden flex grow justify-center gap-x-6 pb-4 lg:hidden">
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        class="text-center"
      >
        <button
          v-if="item.children"
          type="button"
          class="group flex flex-col"
          :class="
            selectedMenuItem?.activePath === item.activePath &&
              '[&>div]:!bg-primary-500/10 [&>div]:!text-primary-500 [&>p]:!text-primary-500'
          "
          @click="
            () => {
              selectedMenuItem = item
            }
          "
        >
          <div
            class="text-muted-400 group-hover:bg-muted-100 group-hover:text-muted-600 dark:group-hover:bg-muted-700 dark:group-hover:text-muted-300 relative mx-auto flex size-12 items-center justify-center rounded-xl transition-colors duration-300"
          >
            <Icon :name="item.icon.name" :class="item.icon.class" />
          </div>
        </button>
        <NuxtLink
          v-else-if="item.to"
          class="group flex flex-col"
          :to="item.to"
          exact-active-class="[&>div]:!bg-primary-500/10 [&>div]:!text-primary-500 [&>p]:!text-primary-500"
        >
          <div
            class="text-muted-400 group-hover:bg-muted-100 group-hover:text-muted-600 dark:group-hover:bg-muted-700 dark:group-hover:text-muted-300 relative mx-auto flex size-12 items-center justify-center rounded-xl transition-colors duration-300"
          >
            <Icon :name="item.icon.name" :class="item.icon.class" />
          </div>
        </NuxtLink>
        <button
          v-else
          type="button"
          class="group flex flex-col"
          @click="item.click"
        >
          <div
            class="text-muted-400 group-hover:bg-muted-100 group-hover:text-muted-600 dark:group-hover:bg-muted-700 dark:group-hover:text-muted-300 relative mx-auto flex size-12 items-center justify-center rounded-xl transition-colors duration-300"
          >
            <Icon :name="item.icon.name" :class="item.icon.class" />
          </div>
        </button>
      </div>
    </div>
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
          v-for="(item, index) in selectedMenuItem?.children"
          :key="index"
          :to="item.to"
          class="text-muted-400 hover:text-muted-500 dark:text-muted-600 dark:hover:text-muted-400 ltablet:pt-5 flex items-center justify-center border-b-2 border-transparent p-3 text-center transition-colors duration-300 lg:pt-5"
          exact-active-class="!border-primary-500 !text-muted-800 dark:!text-muted-100"
        >
          <BaseText size="sm">
            {{ item.name }}
          </BaseText>
        </NuxtLink>
      </div>
      <div
        v-if="selectedMenuItem?.children"
        class="ltablet:block ms-auto hidden pe-4 lg:block xl:pe-0"
      >
        <button
          type="button"
          class="bg-muted-100 dark:bg-muted-900 border-muted-100 dark:border-muted-800 text-muted-400 dark:text-muted-500 hover:text-primary-500 dark:hover:text-primary-500 group flex items-center gap-2 rounded-xl border py-1 pe-1 ps-3"
          aria-label="Open search"
          @click="isSearchOpen = true"
        >
          <Icon
            name="lucide:search"
            class="size-4 motion-safe:transition-colors motion-safe:duration-300"
          />
          <span
            class="dark:bg-muted-800 border-muted-200 dark:border-muted-700 group-hover:text-muted-600 dark:group-hover:text-muted-100 rounded-lg border bg-white px-2 py-0.5 shadow motion-safe:transition-colors motion-safe:duration-300"
          >
            <kbd class="font-sans text-sm tracking-wide">
              {{ metaKey }} + k
            </kbd>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
