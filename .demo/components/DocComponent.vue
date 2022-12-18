<script setup lang="ts">
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
    class="mb-4 rounded-lg border border-muted-200 bg-white px-6 pt-6 pb-10 dark:border-muted-700 dark:bg-muted-800"
  >
    <div class="mb-10 flex items-center whitespace-nowrap">
      <BaseParagraph
        size="md"
        lead="tight"
        class="hidden text-muted-500 dark:text-muted-400 md:block"
      >
        {{ props.label }}
      </BaseParagraph>

      <div class="ml-auto flex flex-none items-center pl-4 sm:pl-6">
        <BaseFocusLoop class="flex items-end">
          <BaseButtonAction
            shape="rounded"
            class="rounded-r-none border-r-0 focus:z-10"
            :muted="activeTab !== 'demo'"
            @click="activeTab = 'demo'"
          >
            <Icon name="cil:applications" class="mr-1.5 h-4 w-4" />
            <span>Demo</span>
          </BaseButtonAction>
          <BaseButtonAction
            shape="rounded"
            class="rounded-l-none border-l-0 focus:z-10"
            :muted="activeTab !== 'code'"
            @click="activeTab = 'code'"
          >
            <Icon name="iconoir:terminal-outline" class="mr-1.5 h-4 w-4" />
            <span>Code</span>
          </BaseButtonAction>
        </BaseFocusLoop>
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
