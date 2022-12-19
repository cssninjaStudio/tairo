<script setup lang="ts"></script>

<template>
  <div class="flex">
    <div class="w-full xl:w-3/4">
      <slot name="content"></slot>
    </div>
    <div class="hidden xl:block xl:w-1/4">
      <slot name="toc"></slot>
    </div>
  </div>
</template>
