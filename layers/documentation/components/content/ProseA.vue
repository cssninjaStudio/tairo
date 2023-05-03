<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
})

const isExternal = computed(() => {
  return props.href.startsWith('http')
})
</script>

<template>
  <span>
    <NuxtLink
      class="inline-flex items-center gap-1"
      :href="href"
      :target="isExternal ? '_blank' : undefined"
      :rel="isExternal ? 'noopener' : undefined"
    >
      <slot />
      <Icon
        v-if="isExternal"
        name="lucide:external-link"
        class="h-3 w-3 opacity-60 dark:opacity-80"
      />
    </NuxtLink>
  </span>
</template>
