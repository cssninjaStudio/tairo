<script setup lang="ts">
const props = defineProps<{
  to?: any
  icon?: string
  active?: boolean
}>()

const isActive = computed(() => {
  return props.active
})
</script>

<template>
  <NuxtLink
    :to="props.to"
    class="flex h-14 w-full items-center justify-center duration-300 cursor-pointer rounded-lg outline-none"
    exact-active-class="[&>div]:bg-primary-500/20 [&>div]:text-primary-heavy dark:[&>div]:text-primary-light dark:[&>div]:bg-primary-500/10"
  >
    <div
      class="text-muted-400 flex size-10 items-center justify-center rounded-[inherit] hover:text-primary-heavy dark:hover:text-primary-light in-focus-visible:nui-focus transition-colors duration-300"
      :class="[
        isActive ? 'bg-primary-500/20 text-primary-heavy dark:text-primary-light dark:bg-primary-500/10' : '',
      ]"
    >
      <slot>
        <Icon :name="props.icon" class="size-5" />
      </slot>
    </div>
  </NuxtLink>
</template>
