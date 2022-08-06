<script setup lang="ts">
export interface RadioEmits {
  (e: 'update:modelValue', value: any): void
}
export interface RadioProps {
  id?: string
  value: any
  modelValue?: any
  name?: string
  label?: string
  hideLabel?: boolean
}

const emit = defineEmits<RadioEmits>()
const props = withDefaults(defineProps<RadioProps>(), {
  id: undefined,
  modelValue: undefined,
  label: undefined,
  name: undefined,
})

const value = ref(props.modelValue)

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
  <div class="relative inline-flex items-center">
    <div
      class="group ninja-focus relative flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full"
    >
      <input
        :id="props.id"
        v-model="value"
        type="radio"
        :value="props.value"
        :name="props.name"
        class="peer absolute z-20 h-5 w-5 cursor-pointer opacity-0"
      />
      <div
        class="absolute top-0 left-0 z-0 h-full w-full rounded-full border-2 border-muted-400 bg-white peer-checked:border-current dark:border-muted-600 dark:bg-muted-700"
      ></div>
      <div
        class="pointer-events-none z-10 block h-1 w-1 scale-0 rounded-full bg-current transition duration-300 peer-checked:scale-100"
      ></div>
    </div>
    <label
      v-if="!props.hideLabel"
      :for="props.id"
      class="ml-1 cursor-pointer select-none font-sans text-sm text-muted-400"
    >
      {{ props.label }}
    </label>
  </div>
</template>
