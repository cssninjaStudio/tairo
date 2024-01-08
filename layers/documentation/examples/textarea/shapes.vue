<template>
  <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
    <BaseTextarea
      v-model="fields.first"
      label="Rounded: none"
      rounded="none"
      placeholder="Write a message..."
      rows="1"
      :classes="{
        textarea: 'resize-none overflow-hidden',
      }"
      autogrow
    />

    <BaseTextarea
      v-model="fields.second"
      label="Rounded: sm"
      rounded="sm"
      placeholder="Write a message..."
      rows="1"
      :classes="{
        textarea: 'resize-none overflow-hidden',
      }"
      autogrow
    />

    <BaseTextarea
      v-model="fields.third"
      label="Rounded: md"
      rounded="md"
      placeholder="Write a message..."
      rows="1"
      :classes="{
        textarea: 'resize-none overflow-hidden',
      }"
      autogrow
    />

    <BaseTextarea
      v-model="fields.fourth"
      label="Rounded: lg"
      rounded="lg"
      placeholder="Write a message..."
      rows="1"
      :classes="{
        textarea: 'resize-none overflow-hidden',
      }"
      autogrow
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
