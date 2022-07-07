<script setup lang="ts">
export type TabSize = 2 | 3
export type TabsShapes = 'rounded' | 'full'
export type TabsAlign = 'start' | 'center' | 'end'
export interface TabsItem {
  label: string
  value: string
}
export interface TabsProps {
  tabs: TabsItem[]
  selected?: string
  justify?: TabsAlign
  size?: TabSize
  shape?: TabsShapes
}

const emit = defineEmits<{
  (e: 'update:selected', value: string): void
}>()
const props = withDefaults(defineProps<TabsProps>(), {
  selected: undefined,
  justify: undefined,
  size: 2,
  shape: 'rounded',
})

const activeValue = ref(props.selected)

function toggle(value: string) {
  activeValue.value = value
}

watch(
  () => props.selected,
  (value) => {
    activeValue.value = value
  }
)

watch(activeValue, (value) => {
  emit('update:selected', value)
})
</script>

<template>
  <div class="relative">
    <div
      class="flex font-alt mb-6"
      :class="[
        props.justify === 'center' && 'justify-center',
        props.justify === 'end' && 'justify-end',
      ]"
    >
      <div
        class="relative flex items-center w-full h-10 bg-muted-100 dark:bg-muted-700 font-sans text-sm"
        :class="[
          props.shape === 'rounded' && 'rounded-lg',
          props.shape === 'full' && 'rounded-full',
          props.size === 2 ? 'max-w-[250px]' : 'max-w-[320px]',
        ]"
      >
        <button
          v-for="(tab, index) in tabs.slice(0, props.size)"
          :key="index"
          type="button"
          class="relative flex items-center justify-center flex-1 h-full z-20"
          :class="[
            activeValue === tab.value ? 'text-white' : 'text-muted-400',
            props.size === 2 ? 'w-1/2' : 'w-1/3',
          ]"
          @keydown.space="toggle(tab.value)"
          @click="toggle(tab.value)"
        >
          <span>{{ tab.label }}</span>
        </button>
        <div
          class="absolute top-0 left-0 h-full bg-primary-600 z-10 transition-all duration-300"
          :class="[
            activeValue === tabs[0].value && 'ml-0',
            activeValue === tabs[1].value && props.size === 2
              ? 'ml-[50%]'
              : 'ml-[33.3%]',
            activeValue === tabs[2].value && 'ml-[66.6%]',
            props.size === 2 ? 'w-1/2' : 'w-1/3',
            props.shape === 'rounded' && 'rounded-lg',
            props.shape === 'full' && 'rounded-full',
          ]"
        ></div>
      </div>
    </div>

    <div class="block relative">
      <slot name="tab" :active-value="activeValue"></slot>
    </div>
  </div>
</template>
