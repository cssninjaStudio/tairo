<template>
  <div class="md:max-w-lg">
    <BaseTreeSelect
      :children="tree"
      treeline
      :icons="{
        open: 'clarity:folder-open-line',
        closed: 'clarity:folder-line',
        item: 'clarity:file-line',
        empty: 'clarity:alert-line',
      }"
      :classes="{
        treeline: 'border-muted-300 dark:border-muted-700',
      }"
    />
  </div>
</template>

<script setup lang="ts">
const tree = [
  {
    item: '.app',
    children: [
      {
        item: 'index.ts',
      },
      {
        item: 'shims.d.ts',
      },
    ],
  },
  {
    item: 'src',
    children: [
      {
        item: 'pages',
        children: [],
      },
      {
        item: 'home',
        children: [
          {
            item: 'index.ts',
          },
          {
            item: 'styles.css',
          },
        ],
      },
      {
        item: 'index.vue',
      },
    ],
  },
  {
    item: 'app.config.ts',
  },
  {
    item: 'tailwind.config.cjs',
  },
]
</script>
