<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'

export interface DocComponentProps {
  label?: string
}

const props = withDefaults(defineProps<DocComponentProps>(), {
  label: undefined,
})

const activeTab = ref('demo')
</script>

<template>
  <div
    class="bg-white dark:bg-muted-800 border border-muted-200 dark:border-muted-700 rounded-lg px-6 pt-6 pb-10 mb-4"
  >
    <div class="flex items-center mb-10 whitespace-nowrap">
      <BaseParagraph
        size="md"
        lead="tight"
        class="text-muted-500 dark:text-muted-400 hidden md:block"
      >
        {{ props.label }}
      </BaseParagraph>

      <div class="flex-none flex items-center ml-auto pl-4 sm:pl-6">
        <FocusLoop class="flex items-end">
          <BaseButtonAction
            shape="rounded"
            class="focus:z-10 rounded-r-none border-r-0"
            :muted="activeTab !== 'demo'"
            @click="activeTab = 'demo'"
          >
            <BaseIcon name="cil:applications" class="mr-1.5 h-4 w-4" />
            <span>Demo</span>
          </BaseButtonAction>
          <BaseButtonAction
            shape="rounded"
            class="focus:z-10 rounded-l-none border-l-0"
            :muted="activeTab !== 'code'"
            @click="activeTab = 'code'"
          >
            <BaseIcon name="iconoir:terminal-outline" class="mr-1.5 h-4 w-4" />
            <span>Code</span>
          </BaseButtonAction>
        </FocusLoop>
      </div>
    </div>

    <div>
      <div v-if="activeTab === 'demo'">
        <slot name="demo"></slot>
      </div>

      <div v-else-if="activeTab === 'code'">
        <slot name="code"></slot>
      </div>
    </div>
  </div>
</template>
