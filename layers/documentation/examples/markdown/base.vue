<template>
  <div class="grid items-center gap-8 md:grid-cols-2">
    <AddonMarkdownRemark :source="markdown" />

    <BaseTextarea
      v-model="markdown"
      autogrow
    />
  </div>
</template>

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
