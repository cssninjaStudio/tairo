<script lang="ts" setup>
const phone = ref('+1 555 555 5555')
const country = ref('US')
</script>

<template>
  <div class="max-w-md">
    <BaseField label="Phone number">
      <LazyAddonInputPhone
        v-model="phone"
        v-model:country="country"
      />
    </BaseField>
  </div>
</template>
