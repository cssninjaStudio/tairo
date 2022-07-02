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
    class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-6 pt-6 pb-10 mb-4"
  >
    <div class="flex items-center mb-10 whitespace-nowrap">
      <BaseParagraph
        size="md"
        lead="tight"
        class="text-slate-500 dark:text-slate-400 hidden md:block"
      >
        {{ props.label }}
      </BaseParagraph>

      <div class="flex-none flex items-center ml-auto pl-4 sm:pl-6">
        <div
          class="font-sub group p-0.5 rounded-xl flex bg-slate-100 dark:bg-slate-900"
        >
          <button
            type="button"
            class="flex focus-visible:ring-2 rounded-lg"
            @click="activeTab = 'demo'"
          >
            <span
              class="py-1.5 pl-4 pr-5 rounded-lg flex items-center text-sm font-medium border"
              :class="
                activeTab === 'demo'
                  ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-slate-100 border-slate-200 dark:border-slate-600'
                  : 'text-slate-600 border-transparent'
              "
            >
              <BaseIcon name="cil:applications" class="mr-1.5 h-4 w-4" />
              <span class="sr-only lg:not-sr-only leading-6">Demo</span>
            </span>
          </button>
          <button
            type="button"
            class="flex focus-visible:ring-2 rounded-lg"
            @click="activeTab = 'code'"
          >
            <span
              class="py-1.5 pl-4 pr-5 rounded-lg flex items-center text-sm font-medium border"
              :class="
                activeTab === 'code'
                  ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-slate-100 border-slate-200 dark:border-slate-600'
                  : 'text-slate-600 border-transparent'
              "
            >
              <BaseIcon name="iconoir:terminal-outline" class="mr-1.5 h-4 w-4" />
              <span class="sr-only lg:not-sr-only leading-6">Code</span>
            </span>
          </button>
        </div>
      </div>
    </div>

    <div>
      <div v-if="activeTab === 'demo'">
        <slot name="demo"></slot>
      </div>

      <div v-if="activeTab === 'code'">
        <slot name="code"></slot>
      </div>
    </div>
  </div>
</template>
