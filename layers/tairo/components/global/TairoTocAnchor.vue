<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label: string
    id?: string
    level?: number
    prefix?: string
    prefixClasses?: string
    suffix?: string
    suffixClasses?: string
  }>(),
  {
    id: undefined,
    level: undefined,
    label: undefined,
    prefix: '#',
    prefixClasses:
      'hidden group-hover:inline-block group-focus:inline-block group-visible:inline-block leading-6 text-primary-300 absolute -start-5 top-0',
    suffix: '',
    suffixClasses:
      'hidden group-hover:inline-block group-focus:inline-block group-visible:inline-block leading-6 text-primary-300 absolute -end-5 -top-1',
  },
)

const slug = computed(() =>
  props.label
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, ''),
)

const anchor = computed(() => props.id || slug.value)
</script>

<template>
  <NuxtLink
    :id="anchor"
    :to="`#${anchor}`"
    :data-toc-level="props.level"
    :data-toc-label="props.label"
    class="tairo-toc-anchor nui-focus group relative"
    :style="{ scrollMarginTop: '1.5rem' }"
  >
    <span v-if="props.prefix" :class="props.prefixClasses">
      {{ props.prefix }}
    </span>
    <span>{{ props.label }}</span>
    <span v-if="props.suffix" :class="props.suffixClasses">
      {{ props.suffix }}
    </span>
  </NuxtLink>
</template>
