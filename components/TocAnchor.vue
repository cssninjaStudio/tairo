<script setup lang="ts">
import type { VNode } from 'vue'
import { Text } from 'vue'

export interface TocAnchorProps {
  id?: string
  label?: string
  level?: number
  prefix?: string
  prefixClasses?: string
  suffix?: string
  suffixClasses?: string
}

const props = withDefaults(defineProps<TocAnchorProps>(), {
  prefix: '#',
  prefixClasses:
    'hidden group-hover:inline-block group-focus:inline-block group-visible:inline-block leading-6 text-primary-300 absolute -left-5 top-0',
  suffix: '',
  suffixClasses:
    'hidden group-hover:inline-block group-focus:inline-block group-visible:inline-block leading-6 text-primary-300 absolute -right-5 top-0',
})

const { register } = useToc()
const route = useRoute()
const slots = useSlots()
const defaultSlot = slots?.default?.()

const texts: string[] = []
if (defaultSlot) {
  visit(defaultSlot, (vnode) => {
    if (
      (vnode.type === Text || typeof vnode.type === 'string') &&
      typeof vnode.children === 'string'
    ) {
      texts.push(vnode.children)
    }
  })
}

const innerText = texts.join('').trim()
const slug = innerText
  .toLowerCase()
  .replace(/\s+/g, '-')
  .replace(/[^\w-]+/g, '')
const id = props.id ?? slug
const label = props.label ?? innerText
const level = props.level ?? 1
function visit(vnode: VNode | VNode[], fn: (vnode: VNode) => void): void {
  if (Array.isArray(vnode)) {
    return vnode.forEach((node) => visit(node, fn))
  }

  fn(vnode)

  if (Array.isArray(vnode.children)) {
    vnode.children.forEach((child) => {
      if (child && typeof child === 'object' && !Array.isArray(child)) {
        visit(child, fn)
      }
    })
  }
}

onMounted(() => {
  register({ id, label, level })
})
</script>

<template>
  <NuxtLink
    :id="id"
    :to="{ name: route.name || 'index', hash: `#${id}` }"
    class="group ninja-focus relative"
    :style="{ scrollMarginTop: '1.5rem' }"
  >
    <span v-if="props.prefix" :class="props.prefixClasses">{{
      props.prefix
    }}</span
    ><slot /><span v-if="props.suffix" :class="props.suffixClasses">{{
      props.suffix
    }}</span>
  </NuxtLink>
</template>
