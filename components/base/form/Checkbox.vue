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
      class="group relative overflow-hidden w-5 h-5 flex shrink-0 justify-center items-center tairo-focus cursor-pointer"
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
        class="peer cursor-pointer opacity-0 absolute h-5 w-5 z-20"
        type="checkbox"
      />
      <div
        class="absolute top-0 left-0 h-full w-full bg-white dark:bg-slate-700 dark:border-slate-700 border-2 border-slate-400 z-0 peer-checked:border-current peer-checked:dark:border-current"
        :class="[
          props.shape === 'rounded' && 'rounded',
          props.shape === 'curved' && 'rounded-md',
          props.shape === 'circle' && 'rounded-full',
        ]"
      ></div>
      <IconCheck
        class="relative fill-current opacity-0 w-2.5 h-2.5 pointer-events-none transition duration-300 translate-y-6 peer-checked:opacity-100 peer-checked:translate-y-0 z-10"
      />
    </div>
    <label
      v-if="!props.label"
      :for="`checkbox-${props.name}`"
      class="cursor-pointer select-none text-slate-400 font-text text-sm ml-1"
    >
      {{ props.label }}
    </label>
  </div>
</template>
