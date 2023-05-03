<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const props = defineProps<{
  link: NavItem
}>()

const route = useRoute()
const isOpen = ref(true)

const { toggle } = useSidebar()
const { xl } = useTailwindBreakpoints()

function onLinkClick() {
  if (xl.value) {
    return
  }

  toggle()
}

const buttonRef = ref<HTMLElement>()
function onDropClick() {
  isOpen.value = !isOpen.value
  if (!isOpen.value) {
    buttonRef.value?.blur()
  }
}
</script>

<template>
  <div class="group">
    <button
      type="button"
      ref="buttonRef"
      class="nui-focus group mb-1 mt-8 flex min-h-[1.5rem] w-full items-center justify-between focus-within:outline-0 focus-visible:outline-1"
      @click.stop.prevent="onDropClick"
    >
      <span
        class="text-muted-500 dark:text-muted-100 mt-1 font-sans text-[.7rem] font-medium uppercase"
      >
        {{ props.link?.title }}
      </span>
      <div
        class="text-muted-400 group-hover:text-primary-400 group-focus-visible:text-primary-400 dark:text-muted-500"
      >
        <Icon v-if="isOpen" name="mdi:minus-box-outline" class="h-4 w-4" />
        <Icon v-else name="mdi:plus-box-outline" class="h-4 w-4" />
      </div>
    </button>
    <ul
      class="transition-all duration-150"
      :class="{
        'max-h-0 overflow-hidden opacity-0 group-focus-within:max-h-max group-focus-within:overflow-visible group-focus-within:opacity-100':
          !isOpen,
        'max-h-max opacity-100': isOpen,
      }"
    >
      <template v-for="child in props.link.children">
        <li
          v-if="!child.children"
          :key="`link-${child._path}`"
          class="mb-1 flex min-h-[1.5rem] w-full items-center"
        >
          <NuxtLink
            :to="child._path"
            :class="[route.path === child._path && 'text-primary-500']"
            exact-active-class="text-primary-500"
            class="nui-focus text-muted-400 hover:text-primary-500 focus-visible:text-primary-500 group flex w-full flex-row items-center transition-colors duration-300 focus-within:outline-0 focus-visible:outline-1"
            @click.passive="onLinkClick"
          >
            <span class="font-sans text-[0.8rem]">{{ child?.title }}</span>
          </NuxtLink>
        </li>
        <li v-else :key="`nested-${child._path}`" class="mt-2">
          <span
            class="text-muted-500 dark:text-muted-100 mb-2 mt-6 block font-sans text-[.6rem] font-semibold uppercase tracking-wider"
          >
            {{ child?.title }}
          </span>

          <ul>
            <li
              v-for="nested in child.children"
              :key="nested._path"
              class="mb-1 flex min-h-[1.5rem] w-full items-center"
            >
              <NuxtLink
                :to="nested._path"
                :class="[route.path === nested._path && 'text-primary-500']"
                exact-active-class="text-primary-500"
                class="nui-focus text-muted-400 hover:text-primary-500 focus-visible:text-primary-500 group flex w-full flex-row items-center transition-colors duration-300 focus-within:outline-0 focus-visible:outline-1"
                @click.passive="onLinkClick"
              >
                <span class="font-sans text-[0.85rem]">{{
                  nested?.title
                }}</span>
              </NuxtLink>
            </li>
          </ul>
        </li>
      </template>
    </ul>
  </div>
</template>
