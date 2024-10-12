<script lang="ts" setup>
const password = ref('F4k3P4ssw0rd')
</script>

<template>
  <div class="max-w-md">
    <AddonInputPassword
      v-model="password"
      label="Password"
      disabled
    />
  </div>
</template>
