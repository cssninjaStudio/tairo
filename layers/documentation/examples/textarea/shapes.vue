<template>
  <div class="grid gap-6 md:max-w-xl md:grid-cols-2">
    <BaseTextarea
      v-model="fields.first"
      label="Staight textarea"
      shape="straight"
      placeholder="Write a message..."
      rows="1"
      autogrow
    />

    <BaseTextarea
      v-model="fields.second"
      label="Rounded textarea"
      shape="rounded"
      placeholder="Write a message..."
      rows="1"
      autogrow
    />

    <BaseTextarea
      v-model="fields.third"
      label="Curved textarea"
      shape="curved"
      placeholder="Write a message..."
      rows="1"
      autogrow
    />

    <BaseTextarea
      v-model="fields.fourth"
      label="Full textarea"
      shape="full"
      placeholder="Write a message..."
      rows="1"
    />
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: '',
  second: '',
  third: '',
  fourth: '',
})
</script>
