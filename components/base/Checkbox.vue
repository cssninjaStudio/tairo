<script setup lang="ts">
export type CheckboxShapes = 'straight' | 'rounded' | 'curved' | 'circle'
export interface CheckboxEmits {
  (e: 'update:modelValue', value: string | number | boolean): void
}
export interface CheckboxProps {
  label?: string
  trueValue?: string | number | boolean
  falseValue?: string | number | boolean
  modelValue?: any
  shape?: CheckboxShapes
  name: string
}

const emits = defineEmits<CheckboxEmits>()
const props = withDefaults(defineProps<CheckboxProps>(), {
  label: undefined,
  trueValue: true,
  falseValue: false,
  modelValue: false,
  shape: 'rounded',
})

const value = ref(props.modelValue)
watch(value, () => {
  emits('update:modelValue', value.value)
})
watch(
  () => props.modelValue,
  () => {
    value.value = props.modelValue
  }
)
</script>

<template>
  <div class="relative inline-flex items-center">
    <div
      class="group ninja-focus relative flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center overflow-hidden"
      :class="[
        props.shape === 'rounded' && 'rounded',
        props.shape === 'curved' && 'rounded-md',
        props.shape === 'circle' && 'rounded-full',
      ]"
    >
      <input
        :id="`checkbox-${props.name}`"
        v-model="value"
        :true-value="props.trueValue"
        :false-value="props.falseValue"
        v-bind="$attrs"
        class="peer absolute z-20 h-5 w-5 cursor-pointer opacity-0"
        type="checkbox"
      />
      <div
        class="absolute top-0 left-0 z-0 h-full w-full border-2 border-muted-400 bg-white peer-checked:border-current dark:border-muted-700 dark:bg-muted-700 peer-checked:dark:border-current"
        :class="[
          props.shape === 'rounded' && 'rounded',
          props.shape === 'curved' && 'rounded-md',
          props.shape === 'circle' && 'rounded-full',
        ]"
      ></div>
      <IconCheck
        class="pointer-events-none relative z-10 h-2.5 w-2.5 translate-y-6 fill-current opacity-0 transition duration-300 peer-checked:translate-y-0 peer-checked:opacity-100"
      />
    </div>
    <label
      v-if="!props.label"
      :for="`checkbox-${props.name}`"
      class="ml-1 cursor-pointer select-none font-sans text-sm text-muted-400"
    >
      {{ props.label }}
    </label>
  </div>
</template>
