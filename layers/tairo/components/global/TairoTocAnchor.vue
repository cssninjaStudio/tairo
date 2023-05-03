<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label: string
    id?: string
    level?: number | string
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
      'opacity-0 group-hover/toc:opacity-100 group-focus/toc:opacity-100 group-visible/toc:opacity-100 leading-6 text-primary-300 absolute -start-5 top-0',
    suffix: '',
    suffixClasses:
      'opacity-0 group-hover/toc:opacity-100 group-focus/toc:opacity-100 group-visible/toc:opacity-100 leading-6 text-primary-300 absolute -end-5 -top-1',
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
    class="tairo-toc-anchor nui-focus group/toc relative"
    :style="{ scrollMarginTop: '1.5rem' }"
  >
    <span
      v-if="props.prefix || 'prefix' in $slots"
      :class="props.prefixClasses"
    >
      <slot name="prefix">{{ props.prefix }}</slot>
    </span>
    <span>{{ props.label }}</span>
    <span
      v-if="props.suffix || 'suffix' in $slots"
      :class="props.suffixClasses"
    >
      <slot name="suffix">{{ props.suffix }}</slot>
    </span>
  </NuxtLink>
</template>
