<template>
  <div class="max-w-md">
    <AddonInputPhone
      v-model="phone"
      label="Phone number"
      disabled
    />
  </div>
</template>

<script lang="ts" setup>
const phone = ref('+1 555 555 5555')
</script>
