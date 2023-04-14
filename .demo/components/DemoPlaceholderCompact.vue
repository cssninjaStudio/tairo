<template>
  <div>
    <!-- Content -->
    <slot name="image"></slot>
    <div class="mt-4 text-center">
      <slot></slot>
      <div class="mt-4">
        <slot name="action"></slot>
      </div>
    </div>
  </div>
</template>
