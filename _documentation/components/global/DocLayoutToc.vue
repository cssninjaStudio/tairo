<script setup lang="ts">
const route = useRoute()
const activeAnchor = ref('')
const toc = ref<any[]>([])

const ids = computed(() => toc.value.map(({ id }: any) => `#${id}`))

const { activeIds } = useNinjaScrollspy(
  {
    rootMargin: '0px 0px -90% 0px',
  },
  ids,
)

if (process.client) {
  // active item when hash change
  watch(
    () => route.hash,
    () => {
      if (route.hash) {
        activeAnchor.value = route.hash.slice(1)
      }
    },
    {
      immediate: true,
    },
  )

  // load toc item from dom
  watch(() => route.path, loadTocItemFromDom, {
    immediate: true,
  })
}

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

  return classes
}

async function loadTocItemFromDom() {
  // wait page transition
  await new Promise((resolve) => setTimeout(resolve, 500))

  const elements = document.querySelectorAll('.tairo-toc-anchor')

  toc.value = Array.from(elements).map((el) => {
    return {
      id: el.getAttribute('id'),
      level: ('dataset' in el && (el.dataset as any)?.tocLevel) ?? 2,
      label: 'dataset' in el && (el.dataset as any)?.tocLabel,
    }
  })
}
</script>

<template>
  <div
    class="slimscroll fixed flex max-h-[calc(100vh_-_180px)] flex-col justify-between overflow-y-auto overflow-x-hidden pb-20 pl-20 pr-1 pt-2"
  >
    <div class="mb-8 w-52" v-if="toc.length">
      <div
        class="font-heading text-muted-800 mb-6 text-xs font-semibold uppercase leading-tight dark:text-white"
      >
        <span>On this page</span>
      </div>

      <nav class="font-sans text-sm">
        <ul>
          <li v-for="item in toc" :key="item.id">
            <NuxtLink
              :to="`#${item.id}`"
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
