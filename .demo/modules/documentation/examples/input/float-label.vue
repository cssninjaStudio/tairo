<template>
  <div class="grid md:grid-cols-2 md:max-w-lg gap-6 mt-6">
    <BaseInput
      v-model="fields.first"
      shape="straight"
      label="Search"
      type="search"
      placeholder="Enter search terms..."
      icon="lucide:search"
      label-float
    />
    <BaseInput
      v-model="fields.second"
      shape="rounded"
      label="Email Address"
      type="email"
      placeholder="Your email..."
      icon="lucide:mail"
      label-float
    />
    <BaseInput
      v-model="fields.third"
      shape="curved"
      label="Username"
      placeholder="Your username..."
      label-float
    />
    <BaseInput
      v-model="fields.fourth"
      type="password"
      shape="full"
      label="Password"
      placeholder="Enter password..."
      label-float
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
