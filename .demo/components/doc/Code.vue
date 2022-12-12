<script lang="ts">
import 'prismjs'
import 'prism-theme-vars/base.css'
import '~/assets/css/modules/prism.css'
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
