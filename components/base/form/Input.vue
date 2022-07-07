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
  condensed?: boolean
  errorText?: string
}

const emits = defineEmits<InputEmits>()
const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  type: 'text',
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
    <BaseLabel
      v-if="'label' in $slots || props.label"
      class="w-full"
      :class="[
        props.condensed && 'text-xs pb-1',
        !props.condensed && 'text-sm pb-2',
      ]"
    >
      <slot name="label">{{ props.label }}</slot>
    </BaseLabel>
    <div class="group relative">
      <input
        v-model="value"
        :type="props.type"
        v-bind="$attrs"
        class="peer ninja-focus w-full border border-muted-300 bg-white font-sans text-muted-600 transition-all duration-300 placeholder:text-muted-300 focus-within:outline-1 disabled:cursor-not-allowed disabled:opacity-75 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700"
        :class="[
          props.condensed && 'text-xs leading-4 py-1 h-8',
          props.condensed && props.icon !== undefined ? 'pl-7 pr-3' : 'px-2',
          !props.condensed && 'text-sm leading-5 py-2 h-10',
          !props.condensed && props.icon !== undefined ? 'pl-9 pr-4' : 'px-3',
          props.shape === 'rounded' && 'rounded',
          props.shape === 'curved' && 'rounded-xl',
          props.shape === 'full' && 'rounded-full',
          props.colorFocus && 'focus:border-primary-500',
          props.loading && 'text-transparent placeholder:text-transparent',
          props.invalid && !props.loading && '!border-danger-500',
        ]"
      />
      <div
        v-if="props.loading"
        class="absolute top-0 left-0 flex h-10 w-full items-center px-4"
      >
        <BasePlaceload class="h-3 w-full max-w-[75%] rounded" />
      </div>
      <div
        v-if="props.icon"
        class="absolute top-0 left-0 flex items-center justify-center text-muted-400 transition-colors duration-300 group-focus-within:text-violet-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-75"
        :class="[
          props.condensed && 'w-8 h-8',
          !props.condensed && 'h-10 w-10',
          props.loading && 'opacity-0',
          props.invalid && !props.loading && '!text-danger-500',
        ]"
      >
        <slot name="icon">
          <BaseIcon
            :name="props.icon"
            :class="[
              props.condensed && 'w-[1rem] h-[1rem]',
              !props.condensed && 'w-[1.15rem] h-[1.15rem]',
            ]"
          />
        </slot>
      </div>
      <div
        v-if="props.invalid"
        class="absolute top-0 right-0 flex h-10 w-10 items-center justify-center transition-colors duration-300"
      >
        <slot name="error-icon">
          <IconClose class="h-4 w-4 text-danger-500" />
        </slot>
      </div>
      <span
        v-if="props.invalid"
        class="inline-block font-sans text-[.8rem] text-pink-600"
      >
        {{ props.errorText }}
      </span>
    </div>
  </div>
</template>
