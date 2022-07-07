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
      class="mb-6 flex font-alt"
      :class="[
        props.justify === 'center' && 'justify-center',
        props.justify === 'end' && 'justify-end',
      ]"
    >
      <div
        class="relative flex h-10 w-full items-center bg-muted-100 font-sans text-sm dark:bg-muted-700"
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
          class="relative z-20 flex h-full flex-1 items-center justify-center"
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
          class="absolute top-0 left-0 z-10 h-full bg-primary-600 transition-all duration-300"
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

    <div class="relative block">
      <slot name="tab" :active-value="activeValue"></slot>
    </div>
  </div>
</template>
