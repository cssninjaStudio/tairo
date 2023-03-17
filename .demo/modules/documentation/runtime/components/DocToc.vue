<script setup lang="ts">
const { toc } = useToc()
const route = useRoute()
const activeAnchor = ref('')
const ids = toc.value.map(({ id }: any) => `#${id}`)
const { activeIds } = useNinjaScrollspy(
  {
    rootMargin: '0px 0px -90% 0px',
  },
  ids,
)

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
  },
)

function getTocItemClass(item: any) {
  const classes = []

  if (item.level > 2) {
    classes.push('ml-3 text-xs')
  }

  if (activeAnchor.value === item.id) {
    classes.push('border-primary-500 text-primary-500')
  } else if (activeIds.value.includes(item.id)) {
    classes.push(
      'border-primary-400 dark:border-primary-600 text-muted-500 dark:text-muted-400 hover:text-muted-400',
    )
  } else {
    classes.push(
      'border-muted-200 dark:border-muted-800 text-muted-500 dark:text-muted-400 hover:text-muted-400',
    )
  }

  // [
  //   item.level > 2 ? 'ml-3 text-xs' : '',
  //   activeAnchor === item.id &&
  //     'border-primary-500 text-primary-500',
  //   activeAnchor !== item.id
  //   activeIds.includes(item.id) ? 'border-primary-400' : '',
  //     'border-muted-200  dark:border-muted-800 text-muted-500 dark:text-muted-400 hover:text-muted-400',
  // ]
  return classes
}
</script>

<template>
  <div
    class="slimscroll fixed flex max-h-[calc(100vh_-_180px)] flex-col justify-between overflow-y-auto pt-10 pb-20 pl-20 pr-1"
  >
    <div class="mb-8 w-52">
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
              :class="getTocItemClass(item)"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
