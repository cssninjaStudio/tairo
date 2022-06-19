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

<style>
:root {
  --prism-foreground: #393a34;
  --prism-background: #f8f8f8;
  --prism-comment: #758575;
  --prism-namespace: #444;
  --prism-string: #bc8671;
  --prism-punctuation: #80817d;
  --prism-literal: #36acaa;
  --prism-keyword: #248459;
  --prism-function: #849145;
  --prism-deleted: #9a050f;
  --prism-class: #2b91af;
  --prism-builtin: #8b5cf6;
  --prism-property: #d1368b;
  --prism-regex: #ad502b;
  --prism-selector: #4e2196;
}

.dark {
  --prism-foreground: #d4d4d4;
  --prism-background: #090f17;
  --prism-namespace: #aaa;
  --prism-comment: #758575;
  --prism-string: #ce9178;
  --prism-punctuation: #8f9fbf;
  --prism-literal: #36acaa;
  --prism-keyword: #38a776;
  --prism-function: #dcdcaa;
  --prism-deleted: #9a050f;
  --prism-class: #4ec9b0;
  --prism-builtin: #8b5cf6;
  --prism-property: #d1368b;
  --prism-regex: #ad502b;
  --prism-selector: #3a96a1;
}
</style>

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
