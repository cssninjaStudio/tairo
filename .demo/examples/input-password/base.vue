<script lang="ts" setup>
const password = ref('')
</script>

<template>
  <div class="max-w-md">
    <BaseField label="Password">
      <LazyAddonInputPassword v-model="password" />
    </BaseField>
  </div>
</template>
