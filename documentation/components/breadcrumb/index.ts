export const dot = `
<script setup lang="ts">
const demoBreadcrumbOne = [
  {
    label: 'Home',
    hideLabel: false,
    icon: 'lucide:home',
    to: '/',
  },
  {
    label: 'Products',
    hideLabel: false,
    to: '/',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    to: '/',
  },
]

const demoBreadcrumbTwo = [
  {
    label: 'Home',
    hideLabel: false,
    icon: 'lucide:home',
    to: '/',
  },
  {
    label: 'Products',
    hideLabel: false,
    icon: 'lucide:layout-grid',
    to: '/',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    icon: 'lucide:laptop',
    to: '/',
  },
]
</script>

<template>
  <BaseBreadcrumb :items="demoBreadcrumbOne" separator="dot" />

  <BaseBreadcrumb :items="demoBreadcrumbTwo" separator="dot" />
</template>
`

export const slash = `
<script setup lang="ts">
const demoBreadcrumbOne = [
  {
    label: 'Home',
    hideLabel: false,
    icon: 'lucide:home',
    to: '/',
  },
  {
    label: 'Products',
    hideLabel: false,
    to: '/',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    to: '/',
  },
]

const demoBreadcrumbTwo = [
  {
    label: 'Home',
    hideLabel: false,
    icon: 'lucide:home',
    to: '/',
  },
  {
    label: 'Products',
    hideLabel: false,
    icon: 'lucide:layout-grid',
    to: '/',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    icon: 'lucide:laptop',
    to: '/',
  },
]
</script>

<template>
  <BaseBreadcrumb :items="demoBreadcrumbOne">/</BaseBreadcrumb>

  <BaseBreadcrumb :items="demoBreadcrumbTwo">/</BaseBreadcrumb>
</template>
`

export const chevron = `
<script setup lang="ts">
const demoBreadcrumbOne = [
  {
    label: 'Home',
    hideLabel: false,
    icon: 'lucide:home',
    to: '/',
  },
  {
    label: 'Products',
    hideLabel: false,
    to: '/',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    to: '/',
  },
]

const demoBreadcrumbTwo = [
  {
    label: 'Home',
    hideLabel: false,
    icon: 'lucide:home',
    to: '/',
  },
  {
    label: 'Products',
    hideLabel: false,
    icon: 'lucide:layout-grid',
    to: '/',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    icon: 'lucide:laptop',
    to: '/',
  },
]
</script>

<template>
  <BaseBreadcrumb :items="demoBreadcrumbOne">
    <BaseIcon name="lucide:chevron-right" class="block w-3 h-3" />
  </BaseBreadcrumb>

  <BaseBreadcrumb :items="demoBreadcrumbTwo">
    <BaseIcon name="lucide:chevron-right" class="block w-3 h-3" />
  </BaseBreadcrumb>
</template>
`

export const arrow = `
<script setup lang="ts">
const demoBreadcrumbOne = [
  {
    label: 'Home',
    hideLabel: false,
    icon: 'lucide:home',
    to: '/',
  },
  {
    label: 'Products',
    hideLabel: false,
    to: '/',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    to: '/',
  },
]

const demoBreadcrumbTwo = [
  {
    label: 'Home',
    hideLabel: false,
    icon: 'lucide:home',
    to: '/',
  },
  {
    label: 'Products',
    hideLabel: false,
    icon: 'lucide:layout-grid',
    to: '/',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    icon: 'lucide:laptop',
    to: '/',
  },
]
</script>

<template>
  <BaseBreadcrumb :items="demoBreadcrumbOne">
    <BaseIcon name="lucide:arrow-right" class="block w-3 h-3" />
  </BaseBreadcrumb>

  <BaseBreadcrumb :items="demoBreadcrumbTwo">
    <BaseIcon name="lucide:arrow-right" class="block w-3 h-3" />
  </BaseBreadcrumb>
</template>
`
