export const straight = `
const value = ref(20)
</script>

<template>
  <Slider v-model="value" class="straight-tooltip" />
</template>
`

export const rounded = `
<script setup lang="ts">
const value = ref(20)
</script>

<template>
  <Slider v-model="value" class="rounded-tooltip" />
</template>
`

export const curved = `
<script setup lang="ts">
const value = ref(20)
</script>

<template>
  <Slider v-model="value" class="curved-tooltip" />
</template>
`

export const circle = `
<script setup lang="ts">
const value = ref(20)
</script>

<template>
  <Slider v-model="value" class="circle-tooltip" />
</template>
`

export const colors = `
<script setup lang="ts">
const value = ref(20)
</script>

<template>
  <Slider v-model="value" class="slider-info circle-tooltip" />
  <Slider v-model="value" class="slider-success circle-tooltip" />
  <Slider v-model="value" class="slider-warning circle-tooltip" />
  <Slider v-model="value" class="slider-danger circle-tooltip" />
</template>
`

export const multipleHandle = `
<script setup lang="ts">
const multiple = ref([16, 84])
</script>

<template>
  <Slider v-model="multiple" class="circle-tooltip" />
</template>
`

export const formatTooltip = `
<script setup lang="ts">
const value = ref(20)
const format = (value: any) => {
  return \${value}%
}
</script>

<template>
  <Slider
    v-model="value"
    :format="format"
    class="rounded-tooltip"
  />
</template>
`

export const mergeTooltip = `
<script setup lang="ts">
const mergeValue = ref([20, 50, 80])
const merge = ref(10)
</script>

<template>
<Slider
  v-model="mergeValue"
    :merge="merge"
    class="rounded-tooltip"
  />
</template>
`
