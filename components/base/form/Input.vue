<script setup lang="ts">
export type InputShapes = 'straight' | 'rounded' | 'curved' | 'full'

export interface InputEmits {
  (event: 'update:modelValue', value?: any): void
}

export interface InputProps {
  modelValue?: any
  type?: string
  shape?: InputShapes
  label?: string
  icon?: string
  colorFocus?: boolean
  loading?: boolean
  invalid?: boolean
  errorText?: string
}

const emits = defineEmits<InputEmits>()
const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  type: 'text',
  name: undefined,
  shape: 'rounded',
  icon: undefined,
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
    <label v-if="!props.label" class="font-text text-sm text-slate-400">
      {{ props.label }}
    </label>
    <div class="group relative">
      <input
        v-model="value"
        :type="props.type"
        v-bind="$attrs"
        class="peer py-2 h-10 text-sm leading-5 font-text w-full bg-white text-slate-600 border border-slate-300 placeholder:text-slate-300 dark:placeholder:text-slate-500 dark:bg-slate-900/75 dark:text-slate-200 dark:border-slate-700 dark:focus:border-slate-700 tairo-focus disabled:opacity-75 disabled:cursor-not-allowed transition-all duration-300"
        :class="[
          props.shape === 'rounded' && 'rounded',
          props.shape === 'curved' && 'rounded-xl',
          props.shape === 'full' && 'rounded-full',
          props.colorFocus && 'focus:border-primary-500',
          props.icon !== undefined ? 'pl-9 pr-4' : 'px-3',
          props.loading && 'text-transparent placeholder:text-transparent',
          props.invalid && !props.loading && '!border-danger-500',
        ]"
      />
      <div
        v-if="props.loading"
        class="absolute top-0 left-0 flex items-center h-10 w-full px-4"
      >
        <BasePlaceload class="h-3 w-full max-w-[75%] rounded" />
      </div>
      <div
        v-if="props.icon"
        class="absolute top-0 left-0 h-10 w-10 flex justify-center items-center text-slate-400 group-focus-within:text-violet-500 peer-disabled:opacity-75 peer-disabled:cursor-not-allowed transition-colors duration-300"
        :class="[
          props.loading && 'opacity-0',
          props.invalid && !props.loading && '!text-danger-500',
        ]"
      >
        <slot name="icon">
          <BaseIcon :name="props.icon" class="w-[1.15rem] h-[1.15rem]" />
        </slot>
      </div>
      <div
        v-if="props.invalid"
        class="absolute top-0 right-0 h-10 w-10 flex justify-center items-center transition-colors duration-300"
      >
        <slot name="error-icon">
          <IconClose class="w-4 h-4 text-danger-500" />
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
