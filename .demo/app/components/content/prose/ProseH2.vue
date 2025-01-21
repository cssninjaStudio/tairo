<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h2)
</script>

<template>
  <BaseHeading
    :id="id"
    as="h2"
    size="2xl"
    weight="medium"
    class="group/heading mb-3 mt-8"
  >
    <a
      v-if="generate"
      :href="`#${id}`"
      class="flex items-center gap-2 underline-offset-4 group-hover/heading:underline"
    >
      <slot />
      <Icon
        name="ph:link-simple"
        class="h-4 w-4 opacity-0 transition-opacity duration-200 group-hover/heading:opacity-100"
      />
    </a>
    <slot v-else />
  </BaseHeading>
</template>
