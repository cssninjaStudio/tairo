<script setup lang="ts">
const { toc } = useToc()
const route = useRoute()
const activeAnchor = ref('')

onMounted(() => {
  if (route.hash) {
    activeAnchor.value = route.hash.slice(1)
  }
})

watch(
  () => route.fullPath,
  () => {
    if (route.hash) {
      activeAnchor.value = route.hash.slice(1)
    }
  }
)
</script>

<template>
  <div
    class="slimscroll sticky top-12 flex max-h-screen flex-col justify-between overflow-y-auto pt-10 pb-6 pl-20 pr-1"
  >
    <div class="mb-8">
      <div
        class="mb-6 font-heading text-xs font-semibold uppercase leading-tight text-muted-800 dark:text-white"
      >
        <span>On this page</span>
      </div>

      <nav class="font-sans text-sm">
        <ul>
          <li v-for="item in toc" :key="item.id">
            <NuxtLink
              :to="{ name: route.name!, hash: `#${item.id}` }"
              class="block border-r-2 py-2"
              :class="[
                item.level > 2 ? 'ml-3 text-xs' : '',
                activeAnchor === item.id
                  ? ' border-primary-500 text-primary-500'
                  : 'border-muted-200  dark:border-muted-800 text-muted-500 dark:text-muted-400 hover:text-muted-400',
              ]"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
