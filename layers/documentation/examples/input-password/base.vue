<script lang="ts" setup>
const password = ref('')
</script>

<template>
  <div class="max-w-md">
    <AddonInputPassword
      v-model="password"
      label="Password"
    />
  </div>
</template>
