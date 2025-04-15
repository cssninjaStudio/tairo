<script setup lang="ts">
import { FocusScope } from 'reka-ui'

import { useBodyScrollLock } from '~/utils/bundle/reka-ui'
import { onKeyStroke, usePointerSwipe, useVModel } from '~/utils/bundle/vueuse'

const props = defineProps<{
  defaultValue?: boolean
  modelValue?: boolean
}>()

const emits = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue,
  passive: (props.modelValue === undefined) as false,
})

const locked = useBodyScrollLock()

const translateY = ref('0')
const opacity = ref(0)

const container = useTemplateRef('container')
const handler = useTemplateRef('handler')

const containerHeight = computed(() => container.value?.$el?.clientHeight)

const { isSwiping, distanceY } = usePointerSwipe(handler, {
  threshold: 10,
  onSwipe(e) {
    if (containerHeight.value) {
      if (distanceY.value < 0) {
        const distance = Math.abs(distanceY.value)
        translateY.value = `${distance}px`
        opacity.value = 0.8 - 0.8 * (distance / containerHeight.value)
      }
      else {
        translateY.value = '0'
        opacity.value = 0.8
      }
    }
  },
  onSwipeEnd(e, direction) {
    if (distanceY.value < 0 && containerHeight.value && (Math.abs(distanceY.value) / containerHeight.value) >= 0.4) {
      modelValue.value = false
    }
    else {
      translateY.value = '0'
      opacity.value = 0.8
    }
  },
})

onKeyStroke('Escape', () => {
  if (modelValue.value) {
    modelValue.value = false
  }
})

watch(modelValue, (value) => {
  locked.value = value
  if (value) {
    translateY.value = '0'
    opacity.value = 0.8
  }
  else {
    translateY.value = '100%'
    opacity.value = 0
  }
}, { immediate: true })
</script>

<template>
  <Teleport to="body">
    <div
      role="button"
      class="fixed inset-0 h-full w-full bg-muted-900 z-[98] starting:opacity-0 "
      :class="[
        modelValue ? 'pointer-events-auto' : 'pointer-events-none opacity-0',
        isSwiping ? '' : 'transition-opacity duration-300',
      ]"
      :style="{ opacity }"
      @click="modelValue = false"
    />
    <FocusScope
      ref="container"
      :loop="modelValue"
      :trapped="modelValue"
      class="fixed bottom-0 inset-x-0 max-h-[calc(100dvh_-_calc(var(--spacing)*20))] w-full z-[99] bg-white dark:bg-black rounded-t-2xl   px-8 pb-12 overflow-y-auto nui-slimscroll starting:translate-y-full translate-y-0"
      :class="[
        modelValue ? 'pointer-events-auto' : 'pointer-events-none opacity-0',
        isSwiping ? '' : 'transition-transform duration-300',
      ]"
      :style="{ transform: `translateY(${translateY})` }"
    >
      <div ref="handler" class="py-4">
        <div class="bg-muted-200 dark:bg-muted-800 h-2 w-1/3 mx-auto rounded-full" />
      </div>

      <slot />
    </FocusScope>
  </Teleport>
</template>
