<script setup lang="ts">
export type SelectShapes = 'straight' | 'rounded' | 'curved' | 'full'

export interface SelectEmits {
  (event: 'update:modelValue', value?: any): void
}

export interface SelectProps {
  modelValue?: any
  shape?: SelectShapes
  label: string
  hideLabel?: boolean
  icon?: string
  loading?: boolean
  disabled?: boolean
  readonly?: boolean
  invalid?: boolean
  errorText?: string
}

const emits = defineEmits<SelectEmits>()
const props = withDefaults(defineProps<SelectProps>(), {
  modelValue: '',
  shape: 'rounded',
  icon: undefined,
  placeholder: '',
  errorText: 'Please select a value',
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
    <label v-if="!props.hideLabel" class="font-text text-sm text-slate-400">
      {{ props.label }}
    </label>
    <div class="relative group">
      <select
        v-model="value"
        title="select"
        class="appearance-none px-3 py-2 h-10 text-sm leading-5 font-text w-full border border-slate-300 bg-white text-slate-600 placeholder:text-slate-300 focus:border-slate-300 focus:shadow-lg focus:shadow-slate-300/50 dark:focus:shadow-slate-800/50 dark:placeholder:text-slate-600 dark:bg-slate-900/75 dark:text-slate-200 dark:border-slate-700 dark:focus:border-slate-700 tairo-focus"
        :class="[
          props.shape === 'rounded' && 'rounded',
          props.shape === 'curved' && 'rounded-xl',
          props.shape === 'full' && 'rounded-full',
          props.icon !== undefined ? 'pl-9 pr-4' : 'px-3',
          props.loading && '!text-transparent placeholder:!text-transparent',
          props.invalid && !props.loading && '!border-danger-500',
        ]"
      >
        <slot></slot>
      </select>
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
        class="absolute top-0 right-0 h-10 w-10 flex justify-center items-center text-slate-400 transition-transform duration-300 group-focus-within:-rotate-180"
      >
        <IconChevronDown class="h-4 w-4" />
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
