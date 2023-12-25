<template>
  <div class="flex max-w-3xl flex-wrap items-end gap-3">
    <div class="flex-1">
      <BaseInput
        v-model="fields.first"
        addon="https://"
        size="sm"
        rounded="md"
        label="Size: sm"
        placeholder="Ex: google.com"
      />
    </div>

    <div class="flex-1">
      <BaseInput
        v-model="fields.second"
        addon="https://"
        size="md"
        rounded="md"
        label="Size: md"
        placeholder="Ex: google.com"
      />
    </div>

    <div class="flex-1">
      <BaseInput
        v-model="fields.third"
        addon="https://"
        size="lg"
        rounded="md"
        label="Size: lg"
        placeholder="Ex: google.com"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: '',
  second: '',
  third: '',
})
</script>
