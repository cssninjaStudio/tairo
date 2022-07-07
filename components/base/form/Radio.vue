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
      class="group relative overflow-hidden w-5 h-5 flex shrink-0 justify-center items-center ninja-focus cursor-pointer rounded-full"
    >
      <input
        :id="props.id"
        v-model="value"
        type="radio"
        :value="props.value"
        :name="props.name"
        class="peer cursor-pointer opacity-0 absolute h-5 w-5 z-20"
      />
      <div
        class="absolute top-0 left-0 h-full w-full bg-white dark:bg-muted-700 dark:border-muted-600 border-2 border-muted-400 z-0 peer-checked:border-current rounded-full"
      ></div>
      <div
        class="block bg-current w-1 h-1 rounded-full pointer-events-none transition duration-300 scale-0 peer-checked:scale-100 z-10"
      ></div>
    </div>
    <label
      v-if="!props.hideLabel"
      :for="props.id"
      class="cursor-pointer select-none text-muted-400 font-sans text-sm ml-1"
    >
      {{ props.label }}
    </label>
  </div>
</template>
