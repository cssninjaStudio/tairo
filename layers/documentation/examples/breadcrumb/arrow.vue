<template>
  <div class="flex flex-col gap-4">
    <BaseBreadcrumb :items="demoBreadcrumbOne">
      <Icon name="lucide:arrow-right" class="block h-3 w-3" />
    </BaseBreadcrumb>

    <BaseBreadcrumb :items="demoBreadcrumbTwo">
      <Icon name="lucide:arrow-right" class="block h-3 w-3" />
    </BaseBreadcrumb>
  </div>
</template>

<script setup lang="ts">
const demoBreadcrumbOne = [
  {
    label: 'Home',
    hideLabel: false,
    icon: 'ph:house-duotone',
    to: '#',
  },
  {
    label: 'Products',
    hideLabel: false,
    to: '#',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    to: '#',
  },
]

const demoBreadcrumbTwo = [
  {
    label: 'Home',
    hideLabel: false,
    icon: 'ph:house-duotone',
    to: '#',
  },
  {
    label: 'Products',
    hideLabel: false,
    icon: 'ph:grid-four-duotone',
    to: '#',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    icon: 'ph:laptop-duotone',
    to: '#',
  },
]
</script>
