<template>
  <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
    <BaseInput
      v-model="fields.first"
      shape="straight"
      type="search"
      label="Search"
      placeholder="Enter search terms..."
      icon="lucide:search"
    />

    <BaseInput
      v-model="fields.second"
      shape="rounded"
      type="email"
      label="Email Address"
      placeholder="Your email..."
      icon="lucide:mail"
    />

    <BaseInput
      v-model="fields.third"
      shape="curved"
      label="Username"
      placeholder="Your username..."
      icon="lucide:user"
    />

    <BaseInput
      v-model="fields.fourth"
      type="password"
      shape="full"
      label="Password"
      placeholder="Enter password..."
      icon="lucide:lock"
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
