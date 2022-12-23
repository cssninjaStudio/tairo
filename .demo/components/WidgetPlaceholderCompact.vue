<script setup lang="ts">

</script>

<template>
  <div>
    <!-- Content -->
    <slot name="image"></slot>
    <div class="text-center mt-4">
      <slot></slot>
      <div class="mt-4">
        <slot name="action"></slot>
      </div>
    </div>
  </div>
</template>