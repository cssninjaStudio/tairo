<template>
  <div class="flex">
    <div class="w-full xl:w-3/4">
      <slot name="content"></slot>
    </div>
    <div class="relative hidden xl:block xl:w-1/4">
      <slot name="toc"></slot>
    </div>
  </div>
</template>
