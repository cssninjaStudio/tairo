<script setup lang="ts">
const props = defineProps<{
  hide?: 'scroll-down' | 'scroll'
}>()

const { y } = useNuiWindowScroll()

let lastScroll = 0
const isScrollingDown = ref(false)

watch(y, (value) => {
  if (props.hide === 'scroll-down') {
    isScrollingDown.value = value > lastScroll
    lastScroll = value
  }
})
</script>

<template>
  <div
    class="relative bg-white dark:bg-muted-950 flex w-full items-center h-14 transition-transform duration-300 pointer-events-auto"
    :class="[
      props.hide === 'scroll-down' && isScrollingDown ? '-translate-y-14' : '',
      props.hide === 'scroll' && y > 0 ? '-translate-y-14' : '',
    ]"
  >
    <slot />
  </div>
</template>
