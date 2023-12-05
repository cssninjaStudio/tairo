<template>
  <div class="relative">
    <div class="hidden justify-between md:flex md:items-center">
      <slot name="header" />
    </div>

    <div class="flex flex-col gap-y-4">
      <slot />
    </div>
  </div>
</template>
