<script lang="ts" setup>
const props = defineProps<{
  hasPreview?: boolean
  // activeTabIndex: number
  tabs: {
    filename?: string
    language?: string
    code?: string
    active?: boolean
    component: any
  }[]
}>()

const activeTabIndex = defineModel<number>('activeTabIndex')

const { copy, copied, isSupported } = useClipboard({
  source: () => activeTab.value?.code ?? '',
})
const activeTab = computed(() => activeTabIndex.value !== undefined ? props.tabs[activeTabIndex.value] : null)
</script>

<template>
  <div class="border-muted-300 dark:border-muted-800 dark:bg-muted-950 flex gap-2 border-b bg-white">
    <button
      v-for="(tab, index) in props.tabs"
      :key="index"
      type="button"
      tabindex="0"
      class="group/button text-sm"
      :class="[
        tabs.length > 1 ? 'border-b-2' : 'cursor-default',
        tabs.length > 1 && index === activeTabIndex ? 'border-muted-800 dark:border-muted-100' : 'border-transparent',
        index === activeTabIndex ? 'text-muted-800 dark:text-muted-100 font-medium' : 'text-muted-400 hover:text-muted-500 dark:hover:text-muted-300',
      ]"
      @click="() => (activeTabIndex = index)"
      @keydown.enter.prevent="() => (activeTabIndex = index)"
    >
      <span
        class="m-1 block rounded-md px-3 py-1"
        :class="[tabs.length > 1 ? 'group-hover/button:bg-muted-100 dark:group-hover/button:bg-muted-900' : '']"
      >
        {{ tab.filename?.replaceAll('(', '[')?.replaceAll(')', ']') || '&nbsp;' }}
      </span>
    </button>

    <div
      v-if="isSupported"
      class="pointer-events-none absolute z-[2] mt-12 opacity-0 transition-opacity duration-300 group-hover/code:pointer-events-auto group-hover/code:opacity-100"
      :class="hasPreview ? 'end-4' : 'end-2'"
    >
      <BaseButtonIcon
        size="sm"
        rounded="md"
        :data-nui-tooltip="copied ? 'Copied!' : 'Copy'"
        data-nui-tooltip-position="start"
        :aria-label="copied ? 'Copied!' : 'Copy'"
        @click="() => copy()"
      >
        <Icon
          v-if="!copied"
          name="lucide:copy"
          class="size-4"
        />
        <Icon
          v-else
          name="lucide:check"
          class="text-success-500 size-4"
        />
      </BaseButtonIcon>
    </div>
    <div class="absolute z-[2] mt-1.5" :class="hasPreview ? 'end-5' : 'end-3'">
      <span v-if="activeTab?.language" class="text-muted-500 text-xs font-medium">
        {{ activeTab.language }}
      </span>
    </div>
  </div>
</template>
