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
  <label :for="props.id" class="flex items-center cursor-pointer">
    <span class="block relative">
      <input
        :id="props.id"
        :checked="props.modelValue"
        type="checkbox"
        class="peer cursor-pointer opacity-0 absolute h-full w-full z-0"
        @change="emit('update:modelValue', !props.modelValue)"
      />
      <span
        class="absolute z-10 flex items-center justify-center w-5 h-5 focus:w-6 border border-slate-300 bg-white dark:bg-slate-700 dark:border-slate-600 rounded-full shadow left-0.5 top-1/2 -translate-y-1/2 transition peer-checked:-translate-y-1/2 peer-checked:translate-x-full"
      ></span>
      <span
        class="block w-11 h-6 bg-slate-300 dark:bg-slate-600 rounded-full shadow-inner peer-focus:ring-0 outline-1 outline-transparent peer-focus:outline-dashed peer-focus:outline-slate-300 dark:peer-focus:outline-slate-600 peer-focus:outline-offset-2 transition-all duration-300"
        :class="[
          props.color === 'primary' && 'peer-checked:bg-primary-400',
          props.color === 'info' && 'peer-checked:bg-info-400',
          props.color === 'success' && 'peer-checked:bg-success-400',
          props.color === 'warning' && 'peer-checked:bg-warning-400',
          props.color === 'danger' && 'peer-checked:bg-danger-400',
        ]"
      ></span>
      <svg
        class="absolute top-1/2 left-2 text-white fill-current opacity-0 w-2.5 h-2.5 pointer-events-none transition duration-300 translate-y-0 peer-checked:opacity-100 peer-checked:-translate-y-1/2 z-10"
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
    </span>
    <span
      v-if="!props.sublabel"
      class="relative cursor-pointer select-none ml-3 text-sm text-slate-400 font-text"
    >
      {{ props.label }}
    </span>
    <span v-else class="ml-3">
      <span
        class="block font-main text-sm font-semibold text-slate-800 dark:text-white"
      >
        {{ props.label }}
      </span>
      <span class="block font-text text-xs text-slate-400">
        {{ props.sublabel }}
      </span>
    </span>
  </label>
</template>
