<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  expandable?: boolean
}>()

const expanded = ref(false)
const activeTabIndex = ref(0)
provide('code-group-context', true)

// Computed
const slots = useSlots() as any
const slotsContent = computed(() => slots.default?.() || [])
const tabs = computed(() => slotsContent.value?.map?.((slot: any, index: any) => {
  return {
    filename: slot?.props?.filename || `${index}`,
    language: slot?.props?.language,
    code: slot?.props?.code,
    active: slot?.props?.active || false,
    component: slot,
  }
}))
const selectedTab = computed(() => tabs.value.find((_: any, index: any) => index === activeTabIndex.value))
</script>

<template>
  <div class="pb-6 not-prose">
    <div class="relative group/code w-full bg-white dark:bg-muted-950 rounded-md overflow-hidden border !border-muted-300 dark:!border-muted-800">
      <div
        class="flex flex-col"
        :class="{ 'first-tab': activeTabIndex === 0 }"
      >
        <slot name="preview" />

        <CodeGroupHeader
          v-model:active-tab-index="activeTabIndex"
          :tabs
          :has-preview="!!slots.preview"
        />

        <div
          class="relative flex gap-2 bg-muted-50 dark:bg-muted-950 overflow-y-hidden"
          :class="[
            !props.expandable ? 'overflow-x-auto' : '',
            props.expandable && !expanded ? 'max-h-[220px] overflow-x-hidden' : '',
            props.expandable && expanded ? 'max-h-full overflow-x-auto' : '',
          ]"
        >
          <div
            class="text-sm"
            :class="[
              slots.preview ? 'px-4' : 'px-3',
              props.expandable ? 'pt-4 pb-16' : 'py-4',
            ]"
          >
            <component
              :is="selectedTab?.component"
              :key="activeTabIndex"
            />
          </div>
          <div
            class="absolute -bottom-4 start-0 end-0 z-auto w-full h-20 flex items-center justify-center"
            :class="[
              props.expandable ? '' : 'hidden',
            ]"
          >
            <div class="relative z-auto h-full w-full bg-muted-50 dark:bg-muted-950 blur-xl" />
            <button
              type="button"
              class="cursor-pointer absolute bottom-8 start-0 end-0 mx-auto w-32 z-auto py-1 px-4 flex items-center justify-center text-sm text-muted-500 hover:text-muted-800 dark:text-muted-400 dark:hover:text-muted-100 rounded-full border border-muted-300 dark:border-muted-700 hover:border-muted-200 dark:hover:border-muted-600 bg-white dark:bg-muted-800 transition-colors duration-300 whitespace-nowrap"
              @click="expanded = !expanded"
            >
              <span>{{ expanded ? 'Collapse code' : 'Expand code' }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
