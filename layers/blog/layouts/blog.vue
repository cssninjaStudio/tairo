<script setup>
const loading = ref(true)
const { y } = useNinjaWindowScroll()

onMounted(async () => {
  loading.value = false
})
</script>

<template>
  <div class="group/landing" :class="y > 60 ? 'scrolled' : ''">
    <div class="dark:bg-muted-900 bg-white pt-16">
      <div class="mx-auto max-w-7xl p-4">
        <div class="relative min-h-screen">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
