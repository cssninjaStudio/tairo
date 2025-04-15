<script lang="ts" setup>
const phone = ref('')
</script>

<template>
  <div class="max-w-md">
    <BaseField label="Phone number">
      <LazyAddonInputPhone
        v-model="phone"
        placeholder="Ex: +1 555 555 5555"
      />
    </BaseField>
  </div>
</template>
