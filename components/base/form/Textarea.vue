<script setup lang="ts">
export type TextareaShapes = 'straight' | 'rounded' | 'curved'

export interface TextareaEmits {
  (event: 'update:modelValue', value?: any): void
}

export interface TextareaProps {
  modelValue?: any
  name?: string
  shape?: TextareaShapes
  label: string
  hideLabel?: boolean
  colorFocus?: boolean
  placeholder?: string
  loading?: boolean
  disabled?: boolean
  readonly?: boolean
  invalid?: boolean
  addon?: boolean
  rows?: number
  resize?: boolean
}

const emits = defineEmits<TextareaEmits>()
const props = withDefaults(defineProps<TextareaProps>(), {
  modelValue: '',
  name: undefined,
  shape: 'rounded',
  placeholder: '',
  rows: 4,
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
    <div class="group relative flex flex-col">
      <textarea
        v-model="value"
        class="peer font-text w-full border border-slate-300 bg-white placeholder:text-slate-300 focus:border-slate-300 focus:shadow-lg focus:shadow-slate-300/50 dark:focus:shadow-slate-800/50 dark:placeholder:text-slate-500 dark:bg-slate-900/75 dark:text-slate-200 dark:border-slate-700 dark:focus:border-slate-700 focus:ring-0 outline-transparent focus:outline-dashed focus:outline-slate-300 dark:focus:outline-slate-600 focus:outline-offset-2 disabled:opacity-75 disabled:cursor-not-allowed transition-all duration-300"
        :class="[
          props.shape === 'rounded' && 'rounded',
          props.shape === 'curved' && 'rounded-xl',
          props.colorFocus && '!focus:border-primary-500',
          props.loading && '!text-transparent placeholder:!text-transparent',
          props.invalid && !props.loading && '!border-danger-500',
          !props.resize && 'resize-none',
          props.addon ? 'px-3 pt-3 pb-14' : 'p-3',
        ]"
        :name="props.name"
        :placeholder="props.placeholder"
        :readonly="props.readonly"
        :disabled="props.disabled"
        :rows="props.rows"
      ></textarea>
      <div
        v-if="props.loading"
        class="absolute top-4 left-0 flex flex-col space-y-2 h-full w-full px-3"
      >
        <BasePlaceload class="h-3 w-full max-w-[85%] rounded" />
        <BasePlaceload class="h-3 w-full max-w-[65%] rounded" />
        <BasePlaceload class="h-3 w-full max-w-[35%] rounded" />
      </div>
      <div
        v-if="props.addon"
        class="absolute bottom-0 left-0 w-full flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 peer-disabled:opacity-75 peer-disabled:cursor-not-allowed"
        :class="[
          props.shape === 'rounded' && 'rounded-b',
          props.shape === 'curved' && 'rounded-b-xl',
        ]"
      >
        <slot name="addon"></slot>
      </div>
      <span
        v-if="props.invalid"
        class="inline-block font-text text-[.8rem] text-danger-500"
      >
        Minimum of 50 characters
      </span>
    </div>
  </div>
</template>
