<script lang="ts" setup>
const password = ref('')
</script>

<template>
  <div class="max-w-md">
    <BaseField label="Password">
      <AddonInputPassword v-model="password" />
    </BaseField>
  </div>
</template>
