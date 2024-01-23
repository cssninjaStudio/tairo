<script setup lang="ts">
const { isOpen, isMobileOpen } = useCollapse()

const isSearchOpen = useState('search-open', () => false)
</script>

<template>
  <div class="flex h-16 w-full items-center justify-between px-6">
    <div class="flex size-16 items-center justify-center">
      <slot name="logo">
        <NuxtLink to="/" class="flex items-center justify-center">
          <TairoLogo class="text-primary-500 size-10" />
        </NuxtLink>
      </slot>
    </div>

    <!--Action button-->
    <button
      type="button"
      class="nui-mask nui-mask-blob hover:bg-muted-200 dark:hover:bg-muted-700/60 text-muted-500 dark:text-muted-400 hidden size-10 cursor-pointer items-center justify-center transition-colors duration-300"
      :class="!isOpen ? 'hidden' : 'lg:flex'"
      @click="isSearchOpen = true"
    >
      <Icon name="lucide:search" class="size-4" />
    </button>

    <!--Mobile button-->
    <button
      type="button"
      class="nui-mask nui-mask-blob hover:bg-muted-200 dark:hover:bg-muted-800 text-muted-700 dark:text-muted-400 flex size-10 cursor-pointer items-center justify-center transition-colors duration-300 lg:hidden"
      @click="isMobileOpen = false"
    >
      <Icon name="lucide:arrow-left" class="size-5" />
    </button>
  </div>
</template>
