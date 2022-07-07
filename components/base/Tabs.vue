<script setup lang="ts">
export type TabsType = 'tabs' | 'box'
export type TabsAlign = 'start' | 'center' | 'end'
export interface TabsItem {
  label: string
  value: string
  icon?: string
}
export interface TabsProps {
  tabs: TabsItem[]
  selected?: string
  type?: TabsType
  justify?: TabsAlign
  boxed?: boolean
  hideLabel?: boolean
}

const emit = defineEmits<{
  (e: 'update:selected', value: string): void
}>()
const props = withDefaults(defineProps<TabsProps>(), {
  selected: undefined,
  type: 'tabs',
  justify: undefined,
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
      <a
        v-for="(tab, key) in tabs"
        :key="key"
        class="cursor-pointer text-base transition-all duration-300"
        :class="[
          activeValue === tab.value && props.type === 'tabs'
            ? 'border-violet-500 text-muted-800 dark:text-muted-100'
            : 'border-transparent text-muted-400',
          activeValue === tab.value && props.type === 'box'
            ? 'bg-violet-500 !text-white shadow-lg shadow-primary-500/50'
            : 'text-muted-400',
          tab.icon && 'flex items-center',
          props.type === 'tabs' && 'px-4 py-3 border-b-2',
          props.type === 'box' && 'flex flex-col text-center px-5 rounded-xl',
          props.type === 'box' && tab.icon && 'py-3',
          props.type === 'box' && !tab.icon && 'py-2',
        ]"
        tabindex="0"
        @click="toggle(tab.value)"
      >
        <BaseIcon v-if="tab.icon" :name="tab.icon" class="mr-1 block h-5 w-5" />
        <span :class="props.type === 'box' && tab.icon && 'text-[.85rem]'">
          {{ tab.label }}
        </span>
      </a>
    </div>

    <div class="relative block">
      <slot name="tab" :active-value="activeValue"></slot>
    </div>
  </div>
</template>
