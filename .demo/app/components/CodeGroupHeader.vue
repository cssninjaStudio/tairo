<script lang="ts" setup>
const props = defineProps<{
  hasPreview?: boolean
  tabs: {
    filename?: string
    language?: string
    code?: string
    active?: boolean
    component: any
  }[]
}>()

const activeTabIndex = defineModel<number>('activeTabIndex', {
  default: 0,
})
const activeTab = computed(() => props.tabs[activeTabIndex.value])
const { copy, copied, isSupported } = useClipboard({
  source: () => activeTab.value?.code ?? '',
})
</script>

<template>
  <div
    class="flex gap-2 border-b border-muted-300 bg-white dark:border-muted-800"
    :class="hasPreview ? 'dark:bg-muted-950' : 'dark:bg-muted-800'"
  >
    <div class="flex gap-2 max-w-[90%] overflow-x-auto nui-slimscroll">
      <button
        v-for="(tab, index) in props.tabs"
        :key="index"
        type="button"
        tabindex="0"

        class="group/button text-sm"
        :class="[
          tabs.length > 1 ? 'border-b-2' : 'cursor-default',
          tabs.length > 1 && index === activeTabIndex ? 'border-muted-800 dark:border-muted-100' : 'border-transparent',
          index === activeTabIndex ? 'font-medium text-muted-800 dark:text-muted-100' : 'text-muted-400 hover:text-muted-500 dark:hover:text-muted-300',
        ]"
        @click="(event) => {
          activeTabIndex = index
          ;(event.target as HTMLElement)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        }"
        @keydown.enter.prevent="() => (activeTabIndex = index)"
      >
        <span
          v-if="tab.filename"
          class="m-1 block rounded-md px-3 py-1"
          :class="[tabs.length > 1 ? 'group-hover/button:bg-muted-100 dark:group-hover/button:bg-muted-900' : '']"
        >
          {{ tab.filename }}
        </span>
      </button>
    </div>

    <ClientOnly>
      <div
        v-if="isSupported"
        class="pointer-events-none absolute z-1 mt-12 opacity-0 transition-opacity duration-300 group-hover/code:pointer-events-auto group-hover/code:opacity-100"
        :class="hasPreview ? 'end-4' : 'end-2'"
      >
        <BaseTooltip disable-closing-trigger :content="copied ? 'Copied!' : 'Copy'" :bindings="{ portal: { disabled: true } }">
          <BaseButton
            size="icon-sm"
            rounded="md"
            class="cursor-pointer"
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
              class="size-4 text-success-500"
            />
          </BaseButton>
        </BaseTooltip>
      </div>
    </ClientOnly>
    <div
      class="absolute z-auto mt-1.5"
      :class="hasPreview ? 'end-5' : 'end-3'"
    >
      <span
        v-if="activeTab?.language"
        class="text-xs font-medium text-muted-500"
      >
        {{ activeTab?.language }}
      </span>
    </div>
  </div>
</template>
