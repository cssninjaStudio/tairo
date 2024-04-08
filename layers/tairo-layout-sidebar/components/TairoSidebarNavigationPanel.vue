<script setup lang="ts">
import { useSidebar } from '../composables/sidebar'

const props = withDefaults(
  defineProps<{
    subsidebar?: boolean
  }>(),
  {
    subsidebar: true,
  },
)

const { isOpen, current } = useSidebar()

const subsidebarEnabled = computed(() => {
  return Boolean(
    props.subsidebar !== false && current.value?.subsidebar?.component,
  )
})
</script>

<template>
  <div
    v-if="subsidebarEnabled"
    class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 pointer-events-auto relative z-10 h-full w-[220px] border-r bg-white transition-all duration-300"
    :class="
      isOpen
        ? ''
        : 'rtl:translate-x-[calc(100%_+_80px)] translate-x-[calc(-100%_-_80px)]'
    "
  >
    <slot>
      <KeepAlive>
        <component
          :is="resolveComponentOrNative(current.subsidebar?.component)"
          v-if="current?.subsidebar?.component"
          :key="current?.subsidebar?.component"
        />
      </KeepAlive>
    </slot>
  </div>
</template>
