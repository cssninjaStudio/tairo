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
    class="w-full rounded-xl border border-muted-200 bg-white transition-colors ease-linear dark:border-muted-700 dark:bg-muted-800"
  >
    <div
      class="flex h-12 w-full items-center justify-start space-x-1.5 rounded-t-lg px-4"
    >
      <span
        class="h-3 w-3 rounded-full border-2 border-transparent bg-red-400 dark:border-red-400 dark:bg-transparent"
      ></span>
      <span
        class="h-3 w-3 rounded-full border-2 border-transparent bg-yellow-400 dark:border-yellow-400 dark:bg-transparent"
      ></span>
      <span
        class="h-3 w-3 rounded-full border-2 border-transparent bg-green-400 dark:border-green-400 dark:bg-transparent"
      ></span>
    </div>
    <div class="-mt-6 w-full rounded-b-lg border-t-0">
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
