<script setup lang="ts"></script>

<template>
  <BaseAnimatedCheckbox
    class="text-primary-500"
  />
  <BaseAnimatedCheckbox
    :model-value="true"
    class="text-primary-500"
  />
  <BaseAnimatedCheckbox
    :model-value="true"
    disabled
    class="text-primary-500"
  />
</template>
