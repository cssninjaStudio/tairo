<script lang="ts" setup>
const phone = ref('+1 555 555 5555')
</script>

<template>
  <div class="max-w-md">
    <BaseField label="Phone number">
      <LazyAddonInputPhone
        v-model="phone"
        disabled
      />
    </BaseField>
  </div>
</template>
