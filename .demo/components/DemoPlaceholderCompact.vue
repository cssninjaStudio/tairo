<template>
  <div>
    <!-- Content -->
    <slot name="image" />
    <div class="mt-4 text-center">
      <slot />
      <div class="mt-4">
        <slot name="action" />
      </div>
    </div>
  </div>
</template>
