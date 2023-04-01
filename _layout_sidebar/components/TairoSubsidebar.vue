<template>
  <div class="flex h-screen flex-col">
    <slot name="header"></slot>

    <!-- Body -->
    <div class="slimscroll relative h-full w-full overflow-y-auto">
      <div class="px-6 pb-8">
        <slot></slot>
      </div>

      <div
        class="dark:from-muted-800 pointer-events-none fixed bottom-0 z-10 h-10 w-[212px] bg-gradient-to-t from-white to-transparent"
      ></div>
    </div>
  </div>
</template>
