<script setup lang="ts">
export type BallSwitchColor =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
export interface BallSwitchEmits {
  (e: 'update:modelValue', value: any): void
}
export interface BallSwitchProps {
  id: string
  modelValue?: any
  label?: string
  sublabel?: string
  color?: BallSwitchColor
}

const emit = defineEmits<BallSwitchEmits>()
const props = withDefaults(defineProps<BallSwitchProps>(), {
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
  <label :for="props.id" class="flex cursor-pointer items-center">
    <span class="relative block">
      <input
        :id="props.id"
        :checked="props.modelValue"
        type="checkbox"
        class="peer absolute z-0 h-full w-full cursor-pointer opacity-0"
        @change="emit('update:modelValue', !props.modelValue)"
      />
      <span
        class="absolute left-0.5 top-1/2 z-10 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border border-muted-300 bg-white shadow transition focus:w-6 peer-checked:-translate-y-1/2 peer-checked:translate-x-full dark:border-muted-600 dark:bg-muted-700"
      ></span>
      <span
        class="block h-6 w-11 rounded-full bg-muted-300 shadow-inner outline-1 outline-transparent transition-all duration-300 peer-focus:outline-dashed peer-focus:outline-offset-2 peer-focus:outline-muted-300 peer-focus:ring-0 dark:bg-muted-600 dark:peer-focus:outline-muted-600"
        :class="[
          props.color === 'primary' && 'peer-checked:bg-primary-400',
          props.color === 'info' && 'peer-checked:bg-info-400',
          props.color === 'success' && 'peer-checked:bg-success-400',
          props.color === 'warning' && 'peer-checked:bg-warning-400',
          props.color === 'danger' && 'peer-checked:bg-danger-400',
        ]"
      ></span>
      <IconCheck
        class="pointer-events-none absolute top-1/2 left-2 z-10 h-2.5 w-2.5 translate-y-0 fill-current text-white opacity-0 transition duration-300 peer-checked:-translate-y-1/2 peer-checked:opacity-100"
      />
    </span>
    <span
      v-if="!props.sublabel"
      class="relative ml-3 cursor-pointer select-none font-sans text-sm text-muted-400"
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
