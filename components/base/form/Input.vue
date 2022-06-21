<script setup lang="ts">
export type InputShapes = 'straight' | 'rounded' | 'curved' | 'full'

export interface InputEmits {
  (event: 'update:modelValue', value?: any): void
}

export interface InputProps {
  modelValue?: any
  trueValue?: boolean
  falseValue?: boolean
  type?: string
  name?: string
  shape?: InputShapes
  label: string
  hideLabel?: boolean
  icon?: string
  colorFocus?: boolean
  placeholder?: string
  loading?: boolean
  disabled?: boolean
  readonly?: boolean
  invalid?: boolean
  errorText?: string
}

const emits = defineEmits<InputEmits>()
const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  trueValue: true,
  falseValue: false,
  type: 'text',
  name: undefined,
  shape: 'rounded',
  icon: undefined,
  placeholder: '',
  errorText: 'Please enter a valid value',
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
  <div class="relative">
    <label v-if="!props.hideLabel" class="font-text text-sm text-gray-400">
      {{ props.label }}
    </label>
    <div class="group relative">
      <input
        v-model="value"
        :type="props.type"
        class="peer py-2 h-10 text-sm leading-5 font-text w-full bg-white text-gray-600 border border-slate-300 focus:border-slate-300 focus:shadow-lg focus:shadow-gray-300/50 dark:focus:shadow-gray-800/50 placeholder:text-gray-300 dark:placeholder:text-gray-500 dark:bg-slate-900/75 dark:text-gray-200 dark:border-slate-700 dark:focus:border-slate-700 focus:ring-0 outline-transparent focus:outline-dashed focus:outline-gray-300 dark:focus:outline-gray-600 focus:outline-offset-2 disabled:opacity-75 disabled:cursor-not-allowed transition-all duration-300"
        :class="[
          props.shape === 'rounded' && 'rounded',
          props.shape === 'curved' && 'rounded-xl',
          props.shape === 'full' && 'rounded-full',
          props.colorFocus && '!focus:border-primary-500',
          props.icon !== undefined ? 'pl-9 pr-4' : 'px-3',
          props.loading && '!text-transparent placeholder:!text-transparent',
          props.invalid && !props.loading && '!border-danger-500',
        ]"
        :name="props.name"
        :placeholder="props.placeholder"
        :readonly="props.readonly"
        :disabled="props.disabled"
      />
      <div
        v-if="props.loading"
        class="absolute top-0 left-0 flex items-center h-10 w-full px-4"
      >
        <BasePlaceload class="h-3 w-full max-w-[75%] rounded" />
      </div>
      <div
        v-if="props.icon"
        class="absolute top-0 left-0 h-10 w-10 flex justify-center items-center text-gray-400 group-focus-within:text-violet-500 peer-disabled:opacity-75 peer-disabled:cursor-not-allowed transition-colors duration-300"
        :class="[
          props.loading && 'opacity-0',
          props.invalid && !props.loading && '!text-danger-500',
        ]"
      >
        <slot name="icon">
          <i class="w-[1.15rem] h-[1.15rem]" :class="props.icon"></i>
        </slot>
      </div>
      <div
        v-if="props.invalid"
        class="absolute top-0 right-0 h-10 w-10 flex justify-center items-center transition-colors duration-300"
      >
        <slot name="error-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4 h-4 text-danger-500"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </slot>
      </div>
      <span
        v-if="props.invalid"
        class="inline-block font-text text-[.8rem] text-pink-600"
      >
        {{ props.errorText }}
      </span>
    </div>
  </div>
</template>
