<script setup lang="ts">
const props = defineProps<{
  alt: string
  src: string
  srcDark?: string
  to?: string
}>()
</script>

<template>
  <div class="w-full">
    <NuxtLink
      :to="props.to"
      :class="[
        props.to && 'group/doc-link-img hover:[&>img]:!border-primary-500',
      ]"
    >
      <img
        class="border-muted-200 block w-full rounded-lg border transition-all duration-300 dark:hidden"
        :class="[
          props.to &&
            'group-hover/doc-link-img:shadow-muted-300/30 group-hover/doc-link-img:shadow-xl',
        ]"
        :src="props.src"
        :alt="props.alt"
      />

      <img
        class="border-muted-700 hidden w-full rounded-lg border transition-all duration-300 dark:block"
        :class="[
          props.to &&
            'group-hover/doc-link-img:shadow-muted-800/30 group-hover/doc-link-img:shadow-xl',
        ]"
        :src="props.srcDark || props.src"
        :alt="props.alt"
      />
    </NuxtLink>
  </div>
</template>
