<script setup lang="ts">
import { useVModel } from '~/utils/bundle/vueuse'

const props = defineProps<{
  defaultValue?: string
  modelValue?: string
}>()
const emits = defineEmits<{
  'update:modelValue': [value: string]
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue,
  passive: (props.modelValue === undefined) as false,
})

const { isMobileOpen, toggleMobileNav } = createLayoutSidebarContext({
  modelValue,
  defaultSubsidebarId: props.defaultValue,
})
</script>

<template>
  <div class="min-h-screen w-full bg-white dark:bg-muted-900">
    <div>
      <slot v-bind="{ isMobileOpen, toggleMobileNav, modelValue }" />
    </div>
    <TairoSidebarBackdrop />
  </div>
</template>
