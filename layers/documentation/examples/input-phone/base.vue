<template>
  <div class="max-w-md">
    <AddonInputPhone
      v-model="phone"
      label="Phone number"
      placeholder="Ex: +1 555 555 5555"
    />
  </div>
</template>

<script lang="ts" setup>
const phone = ref('')
</script>
