<script setup lang="ts"></script>

<template>
  <BaseAnimatedCheckbox
    :classes="{ label: 'text-primary-500' }"
  />
  <BaseAnimatedCheckbox
    :model-value="true"
    :classes="{ label: 'text-primary-500' }"
  />
  <BaseAnimatedCheckbox
    :model-value="true"
    disabled
    :classes="{ label: 'text-primary-500' }"
  />
</template>
