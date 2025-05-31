<script setup lang="ts">
const { isCollapsed } = useLayoutCollapseContext()
</script>

<template>
  <div>
    <button
      type="button"
      class="hidden xl:landscape:flex cursor-pointer z-10 w-full items-center rounded-lg text-muted-500 dark:text-muted-400 hover:bg-muted-100 hover:text-muted-900 dark:hover:text-white dark:hover:bg-muted-900/50 gap-2 text-sm outline-none focus-visible:nui-focus focus-visible:ring-inset"
      @click="isCollapsed = !isCollapsed"
    >
      <div
        class="z-10 flex h-10 w-full items-center text-sm"
        :class="[
          isCollapsed ? 'w-12 justify-center' : 'gap-4 px-4',
        ]"
      >
        <slot>
          <Icon
            name="lucide:arrow-left"
            class="size-5 text-muted-500 dark:text-muted-400 shrink-0 transition-transform duration-200"
            :class="isCollapsed ? 'rotate-180' : ''"
          />
          <span v-if="!isCollapsed" class="whitespace-nowrap">Close menu</span>
        </slot>
      </div>
    </button>
  </div>
</template>
