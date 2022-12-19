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
    <Icon
      name="lucide:arrow-right"
      class="block w-3 h-3"
    />
  </BaseBreadcrumb>

  <BaseBreadcrumb :items="demoBreadcrumbTwo">
    <Icon
      name="lucide:arrow-right"
      class="block w-3 h-3"
    />
  </BaseBreadcrumb>
</template>
```
