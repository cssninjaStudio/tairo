<script lang="ts" setup>
const phone = ref('+33612345678')
const country = ref('FR')
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2">
    <AddonInputPhone
      v-model="phone"
      v-model:country="country"
      rounded="none"
    />

    <AddonInputPhone
      v-model="phone"
      v-model:country="country"
      rounded="sm"
    />

    <AddonInputPhone
      v-model="phone"
      v-model:country="country"
      rounded="md"
    />

    <AddonInputPhone
      v-model="phone"
      v-model:country="country"
      rounded="lg"
    />

    <AddonInputPhone
      v-model="phone"
      v-model:country="country"
      rounded="full"
    />
  </div>
</template>
