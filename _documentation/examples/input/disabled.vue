<template>
  <div class="grid md:grid-cols-2 md:max-w-lg gap-6">
    <BaseInput
      v-model="value"
      shape="rounded"
      type="email"
      label="Email Address"
      placeholder="Enter your email..."
      icon="lucide:mail"
      disabled
    />
  </div>
</template>

<script setup lang="ts">
const value = ref('maya@cssninja.io')
</script>
