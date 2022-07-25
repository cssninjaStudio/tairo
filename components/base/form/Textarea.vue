<script setup lang="ts">
export type TextareaShapes = 'straight' | 'rounded' | 'curved'

export interface TextareaEmits {
  (event: 'update:modelValue', value?: any): void
}

export interface TextareaProps {
  modelValue?: any
  /**
   * Name used to identify the textarea.
   */
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
    <label v-if="!props.hideLabel" class="font-sans text-sm text-muted-400">
      {{ props.label }}
    </label>
    <div class="group relative flex flex-col">
      <textarea
        v-model="value"
        class="peer ninja-focus w-full border border-muted-300 bg-white font-sans placeholder:text-muted-300 focus:border-muted-300 focus:shadow-lg focus:shadow-muted-300/50 disabled:cursor-not-allowed disabled:opacity-75 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 dark:focus:shadow-muted-800/50"
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
        class="absolute top-4 left-0 flex h-full w-full flex-col space-y-2 px-3"
      >
        <BasePlaceload class="h-3 w-full max-w-[85%] rounded" />
        <BasePlaceload class="h-3 w-full max-w-[65%] rounded" />
        <BasePlaceload class="h-3 w-full max-w-[35%] rounded" />
      </div>
      <div
        v-if="props.addon"
        class="absolute bottom-0 left-0 flex w-full items-center justify-between border border-muted-300 bg-muted-50 p-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-75 dark:border-muted-700 dark:bg-muted-900/50"
        :class="[
          props.shape === 'rounded' && 'rounded-b',
          props.shape === 'curved' && 'rounded-b-xl',
        ]"
      >
        <slot name="addon"></slot>
      </div>
      <span
        v-if="props.invalid"
        class="inline-block font-sans text-[.8rem] text-danger-500"
      >
        Minimum of 50 characters
      </span>
    </div>
  </div>
</template>
