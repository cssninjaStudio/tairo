<template>
  <div class="md:max-w-lg">
    <BaseTreeSelect
      :children="getAsyncTree"
      treeline
      :icons="{
        open: 'lucide:chevron-up',
        closed: 'lucide:chevron-down',
        pending: 'svg-spinners:270-ring-with-bg',
      }"
    />
  </div>
</template>

<script setup lang="ts">
const getAsyncTree = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return [
    {
      item: 'Item 1',
      open: true,
      children: async () => {
        await new Promise((resolve) => setTimeout(resolve, 8000))

        return Array.from(
          {
            length: 100,
          },
          (x, i) => ({
            item: `Item 1.${i}`,
            children: async () => {
              await new Promise((resolve) => setTimeout(resolve, 2000))

              return Array.from(
                {
                  length: 10,
                },
                (x, j) => ({
                  item: `Item 1.${i}.${j}`,
                }),
              )
            },
          }),
        )
      },
    },
    {
      item: 'Item 2',
      children: async () => {
        await new Promise((resolve) => setTimeout(resolve, 8000))

        return Array.from(
          {
            length: 100,
          },
          (x, i) => ({
            item: `Item 2.${i}`,
            children: async () => {
              await new Promise((resolve) => setTimeout(resolve, 2000))

              return Array.from(
                {
                  length: 10,
                },
                (x, j) => ({
                  item: `Item 2.${i}.${j}`,
                }),
              )
            },
          }),
        )
      },
    },
  ]
}
</script>
