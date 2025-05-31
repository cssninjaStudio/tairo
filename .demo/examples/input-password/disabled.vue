<script lang="ts" setup>
const password = ref('F4k3P4ssw0rd')
</script>

<template>
  <div class="max-w-md">
    <BaseField label="Password">
      <LazyAddonInputPassword
        v-model="password"
        disabled
      />
    </BaseField>
  </div>
</template>
