<script setup lang="ts">
export type CheckboxShapes = 'straight' | 'rounded' | 'curved' | 'circle'
export interface CheckboxEmits {
  (e: 'update:modelValue', value: string | number | boolean): void
}
export interface CheckboxProps {
  raw?: boolean
  label?: string
  hideLabel?: boolean
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
      class="group relative overflow-hidden w-5 h-5 flex shrink-0 justify-center items-center outline-1 focus-within:ring-0 outline-transparent focus-within:outline-dashed focus-within:outline-slate-300 dark:focus-within:outline-slate-600 focus-within:outline-offset-2 cursor-pointer transition-all duration-300"
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
      <svg
        class="relative fill-current opacity-0 w-2.5 h-2.5 pointer-events-none transition duration-300 translate-y-6 peer-checked:opacity-100 peer-checked:translate-y-0 z-10"
        version="1.1"
        viewBox="0 0 17 12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <g
            transform="translate(-9 -11)"
            fill="currentColor"
            fill-rule="nonzero"
          >
            <path
              d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"
            />
          </g>
        </g>
      </svg>
    </div>
    <label
      v-if="!props.hideLabel"
      :for="`checkbox-${props.name}`"
      class="cursor-pointer select-none text-slate-400 font-text text-sm ml-1"
    >
      {{ props.label }}
    </label>
  </div>
</template>
