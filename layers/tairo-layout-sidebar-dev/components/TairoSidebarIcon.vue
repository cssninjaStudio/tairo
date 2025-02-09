<script setup lang="ts">
import { useLayoutSidebarContext } from '../composables/sidebar'

const { icon, menu, title, to } = defineProps<{
  icon?: string
  menu?: string
  title: string
  to?: string
}>()

const { currentMenu, currentMenuName } = useLayoutSidebarContext()

function handleClick(menuId: string, menuName: string) {
  if (menu) {
    currentMenu.value = menuId
    currentMenuName.value = menuName
  }
}
</script>

<template>
  <div class="flex h-14 w-full items-center justify-center">
    <button
      v-if="menu && icon"
      type="button"
      class="flex size-10 items-center justify-center rounded-lg transition-colors duration-300 cursor-pointer"
      :class="
        currentMenu === menu
          ? 'bg-primary-500/20 text-primary-500 dark:bg-primary-500/10'
          : 'text-muted-400'
      "
      @click="handleClick(menu, title)"
    >
      <Icon :name="icon" class="size-5" />
    </button>

    <NuxtLink
      v-else-if="to && icon"
      :to="to"
      class="text-muted-400 flex size-10 items-center justify-center rounded-lg hover:text-primary-heavy dark:hover:text-primary-light transition-colors duration-300"
      exact-active-class="bg-primary-500/20 text-primary-heavy dark:text-primary-light dark:bg-primary-500/10"
    >
      <Icon :name="icon" class="size-5" />
    </NuxtLink>

    <button
      v-else-if="icon"
      type="button"
      class="flex size-10 items-center justify-center rounded-lg text-muted-400 hover:text-primary-heavy dark:hover:text-primary-light transition-colors duration-300 cursor-pointer"
    >
      <Icon :name="icon" class="size-5" />
    </button>

    <button
      v-else
      type="button"
      class="flex size-10 items-center justify-center rounded-lg transition-colors duration-300"
    >
      <slot />
    </button>
  </div>
</template>
