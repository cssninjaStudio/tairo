<template>
  <div class="grid gap-4 sm:grid-cols-2">
    <AddonInputPhone
      v-model="phone"
      v-model:country="country"
      rounded="none"
      label="Straight"
    />

    <AddonInputPhone
      v-model="phone"
      v-model:country="country"
      rounded="sm"
      label="Rounded"
    />

    <AddonInputPhone
      v-model="phone"
      v-model:country="country"
      rounded="md"
      label="Smooth"
    />

    <AddonInputPhone
      v-model="phone"
      v-model:country="country"
      rounded="lg"
      label="Curved"
    />

    <AddonInputPhone
      v-model="phone"
      v-model:country="country"
      rounded="full"
      label="Full"
    />
  </div>
</template>

<script lang="ts" setup>
const phone = ref('+33612345678')
const country = ref('FR')
</script>
