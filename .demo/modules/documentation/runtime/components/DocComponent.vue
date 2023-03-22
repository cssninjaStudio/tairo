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
    class="doc-component mb-4 rounded-lg border border-muted-200 bg-white px-6 pt-6 pb-10 dark:border-muted-700 dark:bg-muted-800"
  >
    <div class="mb-10 flex items-center">
      <slot>
        <BaseParagraph
          size="md"
          lead="tight"
          class="hidden text-muted-500 dark:text-muted-400 md:block"
        >
          {{ props.label }}
        </BaseParagraph>
      </slot>

      <div class="ml-auto flex flex-none items-center pl-4 sm:pl-6">
        <div
          class="flex items-end gap-1 p-1 rounded-lg bg-muted-200 dark:bg-muted-700"
        >
          <BaseRadioHeadless v-model="activeTab" value="demo">
            <BaseButtonAction
              shape="rounded"
              class="h-[2.35rem] pr-3 focus:z-10"
              :class="activeTab === 'demo' && 'dark:!bg-muted-800'"
              :color="activeTab !== 'demo' ? 'muted' : 'default'"
              @click="activeTab = 'demo'"
            >
              <Icon name="ph:circles-four" class="h-4 w-4" />
              <span>Demo</span>
            </BaseButtonAction>
          </BaseRadioHeadless>
          <BaseRadioHeadless v-model="activeTab" value="code">
            <BaseButtonAction
              shape="rounded"
              class="h-[2.35rem] pr-3 focus:z-10"
              :class="activeTab === 'code' && 'dark:!bg-muted-800'"
              :color="activeTab !== 'code' ? 'muted' : 'default'"
              @click="activeTab = 'code'"
            >
              <Icon name="ph:terminal" class="h-4 w-4" />
              <span>Code</span>
            </BaseButtonAction>
          </BaseRadioHeadless>
        </div>
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
