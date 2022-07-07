<script setup lang="ts">
export type ThinSwitchBlockColor =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
export interface ThinSwitchBlockEmits {
  (e: 'update:modelValue', value: any): void
}
export interface ThinSwitchBlockProps {
  id: string
  modelValue?: any
  label?: string
  sublabel?: string
  color?: ThinSwitchBlockColor
}

const emit = defineEmits<ThinSwitchBlockEmits>()
const props = withDefaults(defineProps<ThinSwitchBlockProps>(), {
  modelValue: false,
  label: undefined,
  sublabel: undefined,
  color: 'primary',
})

const value = ref(props.modelValue)
const attrs = useAttrs()

watch(value, () => {
  emit('update:modelValue', value.value)
})
watch(
  () => props.modelValue,
  () => {
    value.value = props.modelValue
  }
)
</script>

<template>
  <label :for="props.id" class="flex items-center cursor-pointer">
    <span class="block relative h-4">
      <input
        :id="props.id"
        :checked="props.modelValue"
        type="checkbox"
        class="peer cursor-pointer opacity-0 absolute h-full w-full z-20"
        @change="emit('update:modelValue', !props.modelValue)"
      />
      <span
        class="absolute flex items-center justify-center w-6 h-6 border border-muted-300 bg-white dark:bg-muted-700 dark:border-muted-600 rounded-full shadow -left-1 top-1/2 -translate-y-1/2 transition peer-checked:-translate-y-1/2 peer-checked:translate-x-full"
      ></span>
      <span
        class="block w-10 h-4 bg-muted-300 dark:bg-muted-600 rounded-full shadow-inner peer-focus:ring-0 outline-1 outline-transparent peer-focus:outline-dashed peer-focus:outline-muted-300 dark:peer-focus:outline-muted-600 peer-focus:outline-offset-2 transition-all duration-300"
        :class="[
          props.color === 'primary' && 'peer-checked:bg-primary-400',
          props.color === 'info' && 'peer-checked:bg-info-400',
          props.color === 'success' && 'peer-checked:bg-success-400',
          props.color === 'warning' && 'peer-checked:bg-warning-400',
          props.color === 'danger' && 'peer-checked:bg-danger-400',
        ]"
      ></span>
    </span>
    <span
      v-if="!props.sublabel"
      class="relative cursor-pointer select-none ml-3 text-sm text-muted-400 font-sans"
    >
      {{ props.label }}
    </span>
    <span v-else class="ml-3">
      <span
        class="block font-heading text-sm font-semibold text-muted-800 dark:text-white"
      >
        {{ props.label }}
      </span>
      <span class="block font-sans text-xs text-muted-400">
        {{ props.sublabel }}
      </span>
    </span>
  </label>
</template>
