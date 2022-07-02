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
  <BaseBreadcrumb :items="demoBreadcrumbOne" separator="slash" />

  <BaseBreadcrumb :items="demoBreadcrumbTwo" separator="slash" />
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
  <BaseBreadcrumb :items="demoBreadcrumbOne" separator="chevron" />

  <BaseBreadcrumb :items="demoBreadcrumbTwo" separator="chevron" />
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
  <BaseBreadcrumb :items="demoBreadcrumbOne" separator="arrow" />

  <BaseBreadcrumb :items="demoBreadcrumbTwo" separator="arrow" />
</template>
`
