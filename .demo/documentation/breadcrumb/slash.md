```vue
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
    /
  </BaseBreadcrumb>

  <BaseBreadcrumb :items="demoBreadcrumbTwo">
    /
  </BaseBreadcrumb>
</template>
```
