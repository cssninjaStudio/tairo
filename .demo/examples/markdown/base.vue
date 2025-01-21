<script setup lang="ts">
const markdown = ref([
  '# Hello world',
  '',
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  '',
  '```js',
  'const hello = "world"',
  '```',
].join('\n'))
</script>

<template>
  <div class="grid items-center gap-8 md:grid-cols-2">
    <MDC :value="markdown" />

    <BaseTextarea
      v-model="markdown"
      autogrow
    />
  </div>
</template>
