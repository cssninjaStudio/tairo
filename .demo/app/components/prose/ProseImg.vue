<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'
import { joinURL, withLeadingSlash, withTrailingSlash } from 'ufo'

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
})

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
    const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL))
    if (_base !== '/' && !props.src.startsWith(_base)) {
      return joinURL(_base, props.src)
    }
  }
  return props.src
})
</script>

<template>
  <div class="py-6">
    <NuxtImg
      loading="lazy"
      decoding="async"
      :src="refinedSrc"
      :alt="alt"
      :width="width"
      :height="height"
      class="w-full rounded-2xl border border-muted-300 shadow-xl shadow-muted-300/30 dark:border-muted-800 dark:shadow-muted-800/20"
    />
  </div>
</template>
