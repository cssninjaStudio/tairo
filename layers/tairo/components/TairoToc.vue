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
const nuxtApp = useNuxtApp()

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
  const stopPage = nuxtApp.hook('page:finish', (e) => {
    loadTocItemFromDom()
  })
  const stopTransition = nuxtApp.hook('page:transition:finish', (e) => {
    loadTocItemFromDom()
  })

  onBeforeUnmount(() => {
    stopPage()
    stopTransition()
  })
}

function getTocItemClass(item: any) {
  const classes = []

  if (item.level > 2) {
    classes.push('ms-3 text-xs')
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
  await nextTick()

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
  <div class="fixed flex flex-col justify-between pb-20 pe-1 ps-20 pt-2">
    <div class="w-52" v-if="toc.length">
      <div
        class="font-heading text-muted-800 mb-6 text-xs font-semibold uppercase leading-tight dark:text-white"
      >
        <span>On this page</span>
      </div>

      <nav
        class="slimscroll slimscroll-opaque relative max-h-[calc(100vh_-_220px)] overflow-y-auto overflow-x-hidden pb-10 font-sans text-[0.8rem] font-medium"
      >
        <ul>
          <li v-for="item in toc" :key="item.id">
            <NuxtLink
              :to="`#${item.id}`"
              class="block border-e-2 py-1"
              :class="getTocItemClass(item)"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
        <div
          class="dark:from-muted-900 from-muted-100 pointer-events-none fixed bottom-10 z-10 h-10 w-[212px] bg-gradient-to-t to-transparent"
        ></div>
      </nav>
    </div>
  </div>
</template>
