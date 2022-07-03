export const straight = `
<script setup lang="ts">
const inputStraight = ref('')
</script>

<template>
  <BaseFormInput
    v-model="inputStraight"
    shape="straight"
    label="Short description"
    placeholder="Enter a few words..."
  />
</template>
`

export const rounded = `
<script setup lang="ts">
const inputRounded = ref('')
</script>

<template>
  <BaseFormInput
    v-model="inputRounded"
    shape="rounded"
    label="Short description"
    placeholder="Enter a few words..."
  />
</template>
`

export const curved = `
<script setup lang="ts">
const inputCurved = ref('')
</script>

<template>
  <BaseFormInput
    v-model="inputCurved"
    shape="curved"
    label="Short description"
    placeholder="Enter a few words..."
  />
</template>
`

export const full = `
<script setup lang="ts">
const inputFull = ref('')
</script>

<template>
  <BaseFormInput
    v-model="inputFull"
    shape="full"
    label="Short description"
    placeholder="Enter a few words..."
  />
</template>
`

export const icon = `
<template>
  <BaseFormInput
    shape="straight"
    label="Search"
    placeholder="Enter search terms..."
    icon="lucide:search"
  />
</template>
`

export const focus = `
<template>
  <BaseFormInput
    v-model="inputRounded"
    shape="rounded"
    label="Email Address"
    placeholder="Enter your email..."
    icon="lucide:mail"
    color-focus
  />
</template>
`

export const loading = `
<template>
  <BaseFormInput
    shape="rounded"
    label="Email Address"
    placeholder="Enter your email..."
    icon="lucide:mail"
    loading
  />
</template>
`

export const disabled = `
<template>
  <BaseFormInput
    shape="rounded"
    label="Email Address"
    placeholder="Enter your email..."
    icon="lucide:mail"
    disabled
  />
</template>
`

export const invalid = `
<template>
<BaseFormInput
  shape="rounded"
  label="Email Address"
  placeholder="Enter your email..."
  icon="lucide:mail"
  invalid
/>
</template>
`
