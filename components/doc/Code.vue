<script lang="ts">
import 'prismjs'
import 'prism-theme-vars/base.css'
</script>

<script setup lang="ts">
import Prism from 'vue-prism-component'

export interface DocCodeProps {
  code: string
  language?: string
}

const props = withDefaults(defineProps<DocCodeProps>(), {
  language: 'javascript',
})
</script>

<template>
  <div
    class="w-full transition-colors ease-linear rounded-xl border border-gray-200 bg-white dark:bg-slate-800 dark:border-slate-700"
  >
    <div
      class="w-full h-12 rounded-t-lg flex justify-start items-center space-x-1.5 px-4"
    >
      <span
        class="w-3 h-3 border-2 border-transparent dark:border-red-400 rounded-full bg-red-400 dark:bg-transparent"
      ></span>
      <span
        class="w-3 h-3 border-2 border-transparent dark:border-yellow-400 rounded-full bg-yellow-400 dark:bg-transparent"
      ></span>
      <span
        class="w-3 h-3 border-2 border-transparent dark:border-green-400 rounded-full bg-green-400 dark:bg-transparent"
      ></span>
    </div>
    <div class="border-t-0 w-full rounded-b-lg -mt-6">
      <Prism :language="props.language">{{ props.code }}</Prism>
    </div>
  </div>
</template>

<style scoped>
:deep(pre[class*='language-']) {
  background: none !important;
}

:deep(code[class*='language-']) {
  background: none !important;
}

:deep(pre.language-javascript) {
  color: #7eb6f6 !important;
}
</style>
