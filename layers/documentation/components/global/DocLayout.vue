<template>
  <div class="flex">
    <div class="w-full xl:w-3/4">
      <slot></slot>
    </div>
    <div v-if="'sidebar' in $slots" class="relative hidden xl:block xl:w-1/4">
      <slot name="sidebar"></slot>
    </div>
  </div>
</template>
