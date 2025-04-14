<script setup lang="ts">
const props = defineProps<{
  value: string
  icon?: string
}>()

const { currentSubsidebarId } = useLayoutSidebarContext()

function handleClick(menuId?: string) {
  if (!menuId) {
    return
  }

  currentSubsidebarId.value = menuId
}
</script>

<template>
  <NuxtLink
    role="button"
    tabindex="0"
    class="flex h-14 w-full items-center justify-center duration-300 cursor-pointer rounded-lg outline-none shrink-0"
    @click="handleClick(props.value)"
  >
    <div
      class="flex size-10 items-center justify-center rounded-[inherit] transition-colors in-focus-visible:nui-focus"
      :class="
        currentSubsidebarId === props.value
          ? 'bg-primary-500/20 text-primary-500 dark:bg-primary-500/10'
          : 'text-muted-400'
      "
    >
      <slot>
        <Icon v-if="props.icon" :name="props.icon" class="size-5" />
      </slot>
    </div>
  </NuxtLink>
</template>
