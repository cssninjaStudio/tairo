<template>
  <div class="md:max-w-lg">
    <BaseTreeSelect ref="treeSelectRef" v-model="value" :children="tree" treeline />

    <div class="flex gap-2">
      <BaseButton @click="toggleAll">toggle selection</BaseButton>

      <BaseButton @click="selectAll">select all selection</BaseButton>

      <BaseButton @click="unselectAll">unselect all selection</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref<any[]>([])
const treeSelectRef = ref<any>(null)

function toggleAll() {
  treeSelectRef.value?.toggleChildrenSelection()
}
function unselectAll() {
  treeSelectRef.value?.unselectAllChildren()
}
function selectAll() {
  treeSelectRef.value?.selectAllChildren()
}

const tree = ref([
  {
    item: 'Item 1',
    children: [
      {
        item: 'Item 1.1',
      },
      {
        item: 'Item 1.2',
      },
    ],
  },
  {
    item: 'Item 2',
  },
  {
    item: 'Item 3',
    open: true,
    children: [
      {
        item: 'Item 3.0',
      },
      {
        item: 'Item 3.1',
        open: true,
        children: [
          {
            item: 'Item 3.1.1',
          },
          {
            item: 'Item 3.1.2',
            open: true,
            children: [],
          },
          {
            item: 'Item 3.1.3',
          },
        ],
      },
      {
        item: 'Item 3.2',
      },
      {
        item: 'Item 3.3',
        children: [],
      },
    ],
  },
  {
    item: 'Item 4',
  },
])
</script>
