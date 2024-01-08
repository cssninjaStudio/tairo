<template>
  <div class="flex flex-col gap-6 md:flex-row md:items-start">
    <BaseFocusLoop class="flex w-3/5 flex-wrap items-end gap-4">
      <BaseCheckboxAnimated
        v-model="options"
        value="Option 1"
        color="primary"
      />

      <BaseCheckboxAnimated
        v-model="options"
        value="Option 2"
        color="info"
      />

      <BaseCheckboxAnimated
        v-model="options"
        value="Option 3"
        color="success"
      />

      <BaseCheckboxAnimated
        v-model="options"
        value="Option 4"
        color="warning"
      />

      <BaseCheckboxAnimated
        v-model="options"
        value="Option 5"
        color="danger"
      />
    </BaseFocusLoop>
  </div>
</template>

<script setup lang="ts">
const options = ref([
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4',
  'Option 5',
  'Option 6',
  'Option 7',
  'Option 8',
  'Option 9',
  'Option 10',
  'Option 11',
  'Option 12',
  'Option 13',
  'Option 14',
  'Option 15',
  'Option 16',
  'Option 17',
  'Option 18',
  'Option 19',
])
</script>
