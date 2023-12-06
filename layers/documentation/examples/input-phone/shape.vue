<template>
  <div class="grid gap-4 sm:grid-cols-2">
    <AddonInputPhone
      v-model="phone"
      v-model:country="country"
      shape="straight"
      label="Straight"
    />

    <AddonInputPhone
      v-model="phone"
      v-model:country="country"
      shape="rounded"
      label="Rounded"
    />

    <AddonInputPhone
      v-model="phone"
      v-model:country="country"
      shape="smooth"
      label="Smooth"
    />

    <AddonInputPhone
      v-model="phone"
      v-model:country="country"
      shape="curved"
      label="Curved"
    />

    <AddonInputPhone
      v-model="phone"
      v-model:country="country"
      shape="full"
      label="Full"
    />
  </div>
</template>

<script lang="ts" setup>
const phone = ref('+33612345678')
const country = ref('FR')
</script>
