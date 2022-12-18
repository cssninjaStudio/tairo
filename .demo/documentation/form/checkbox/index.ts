export const straight = `
<script setup lang="ts">
const inputRounded = ref('')
</script>

<template>
  <BaseCheckbox
    v-model="demoOne"
    name="demo-1"
    label="Straight checkbox"
    shape="straight"
    class="text-gray-500"
  />
</template>
`

export const rounded = `
<script setup lang="ts">
const inputRounded = ref('')
</script>

<template>
  <BaseCheckbox
    v-model="demoTwo"
    name="demo-2"
    label="Rounded checkbox"
    shape="rounded"
    class="text-gray-500"
  /> 
</template>
`

export const curved = `
<script setup lang="ts">
const inputRounded = ref('')
</script>

<template>
  <BaseCheckbox
    v-model="demoThree"
    name="demo-3"
    label="Curved checkbox"
    shape="curved"
    class="text-gray-500"
  />
</template>
`

export const circle = `
<script setup lang="ts">
const inputRounded = ref('')
</script>

<template>
  <BaseCheckbox
    v-model="demoFour"
    name="demo-4"
    label="Circle checkbox"
    shape="circle"
    class="text-gray-500"
  />
</template>
`

export const colors = `
<template>
  <!-- Emerald color -->
  <BaseCheckbox
    v-model="demoStraight"
    name="demo-6"
    label="Straight"
    shape="straight"
    class="text-emerald-500"
  />

  <!-- Yellow color -->
  <BaseCheckbox
    v-model="demoStraight"
    name="demo-7"
    label="Rounded"
    shape="rounded"
    class="text-yellow-500"
  />

  <!-- Pink color -->
  <BaseCheckbox
    v-model="demoStraight"
    name="demo-8"
    label="Rounded"
    shape="rounded"
    class="text-pink-500"
  />
</template>
`
