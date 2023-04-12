<script setup lang="ts">
const { x, y } = useWindowScroll()
</script>

<template>
  <div
    class="fixed inset-x-0 top-0 z-50 mx-auto max-w-7xl transition-all duration-200"
    :class="y > 60 ? 'mt-2' : 'mt-4'"
  >
    <div
      class="flex items-center justify-between rounded-2xl border p-4 transition-all duration-200"
      :class="
        y > 60
          ? 'bg-white/95 dark:bg-muted-950/95 border-muted-200 dark:border-muted-700 shadow-xl shadow-muted-300/30 dark:shadow-muted-800/20'
          : 'border-transparent'
      "
    >
      <div class="flex w-1/5 items-center gap-2">
        <NuxtLink to="/" class="ms-2 inline-flex">
          <TairoLogoText
            class="text-primary-500 transition-all duration-200"
            :class="y > 60 ? 'h-6' : 'h-8'"
          />
        </NuxtLink>
      </div>
      <div class="flex items-center justify-center">
        <NuxtLink to="/" class="inline-flex items-center justify-center px-6">
          Prebuilt pages
        </NuxtLink>
        <NuxtLink to="/" class="inline-flex items-center justify-center px-6">
          Components
        </NuxtLink>
        <NuxtLink to="/" class="inline-flex items-center justify-center px-6">
          Documentation
        </NuxtLink>
      </div>
      <div class="flex w-1/5 items-center justify-end gap-2">
        <BaseThemeToggle />
        <BaseButton shape="curved" color="primary" to="/">
          Buy Tairo
        </BaseButton>
      </div>
    </div>
  </div>
</template>
