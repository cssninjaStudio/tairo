<template>
  <div class="grid gap-2 md:max-w-lg md:grid-cols-2">
    <BaseInput
      v-model="fields.first"
      type="search"
      shape="straight"
      label="Search"
      placeholder="Enter search terms..."
      condensed
    />

    <BaseInput
      v-model="fields.second"
      type="email"
      shape="rounded"
      label="Email Address"
      placeholder="Your email..."
      condensed
    />

    <BaseInput
      v-model="fields.third"
      shape="curved"
      label="Username"
      type="search"
      placeholder="Search..."
      icon="lucide:search"
      condensed
    />

    <BaseInput
      v-model="fields.fourth"
      type="password"
      shape="full"
      label="Password"
      placeholder="Enter password..."
      icon="lucide:lock"
      condensed
    />
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: '',
  second: '',
  third: '',
  fourth: '',
})
</script>
