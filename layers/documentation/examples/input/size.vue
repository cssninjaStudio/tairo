<template>
  <div class="flex max-w-3xl flex-wrap items-end gap-3">
    <div class="flex-1">
      <BaseInput
        v-model="fields.first"
        size="sm"
        rounded="md"
        label="Size: sm"
        placeholder="Ex: username"
      />
    </div>

    <div class="flex-1">
      <BaseInput
        v-model="fields.second"
        size="md"
        rounded="md"
        label="Size: md"
        placeholder="Ex: username"
      />
    </div>

    <div class="flex-1">
      <BaseInput
        v-model="fields.third"
        size="lg"
        rounded="md"
        label="Size: lg"
        placeholder="Ex: username"
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
