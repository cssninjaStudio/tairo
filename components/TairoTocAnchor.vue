<script setup lang="ts">
// import type { VNode } from 'vue'
// import { Text } from 'vue'

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
      'hidden group-hover:inline-block group-focus:inline-block group-visible:inline-block leading-6 text-primary-300 absolute -left-5 top-0',
    suffix: '',
    suffixClasses:
      'hidden group-hover:inline-block group-focus:inline-block group-visible:inline-block leading-6 text-primary-300 absolute -right-5 -top-1',
  },
)

// const innerText = texts.join('').trim()
const slug = computed(() =>
  props.label
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, ''),
)

const anchor = computed(() => props.id || slug.value)
// const id = props.id ?? ''
// const label = props.label ?? innerText
// const level = props.level ?? 1
// function visit(vnode: VNode | VNode[], fn: (vnode: VNode) => void): void {
//   if (Array.isArray(vnode)) {
//     return vnode.forEach((node) => visit(node, fn))
//   }

//   fn(vnode)

//   if (Array.isArray(vnode.children)) {
//     vnode.children.forEach((child) => {
//       if (child && typeof child === 'object' && !Array.isArray(child)) {
//         visit(child, fn)
//       }
//     })
//   }
// }

// register({ id, label, level })
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
