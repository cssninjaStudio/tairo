<script setup lang="ts">
definePageMeta({
  pageTransition: false,
  layoutTransition: false,
})

const route = useRoute()
const router = useRouter()

const contentPath = computed(() => {
  const slug = route.params?.slug as string[]
  if (!slug || slug.length === 0) {
    return '/documentation'
  }
  return `/documentation/${slug.join('/')}`
})

const [{ data, pending }, { data: tree }] = await Promise.all([
  useAsyncData(
    'page-data',
    () =>
      queryContent()
        .where({
          _path: contentPath.value,
        })
        .findOne(),
    {
      watch: [contentPath],
    },
  ),
  useAsyncData(
    'page-tree',
    () => {
      const path = contentPath.value.split('/')
      path.shift() // remove /documentation
      path.pop() // remove current page

      // build all parent paths
      const paths = []

      for (let i = 0; i < path.length; i++) {
        const parentPath = `/${path.slice(0, i + 1).join('/')}`
        paths.push(parentPath)
        paths.push(`${parentPath}/_dir`)
      }

      paths.push(`${contentPath.value}/_dir`)

      return queryContent()
        .where({
          _path: { $in: paths },
        })
        .without(['body'])
        .find() as Promise<any[]>
    },
    {
      watch: [contentPath],
    },
  ),
])

watchEffect(() => {
  const title = data.value?.title
  if (pending.value) return

  // setting the title in the route meta will update the page title
  route.meta.title = title || 'Page not found'
})

useContentHead(data as any)

const breadcrumb = computed(() => {
  const items: any[] = []
  const indexRoute = router.resolve('/')

  if (indexRoute.meta.breadcrumb === false) {
    // skip breadcrumb item
  } else if (indexRoute.meta.breadcrumb) {
    const breadcrumbItem = indexRoute.meta.breadcrumb
    items.push({
      to: indexRoute.path,
      ...breadcrumbItem,
    })
  } else if (indexRoute.meta.title) {
    items.push({
      label: indexRoute.meta.title as string,
      to: indexRoute.path,
    })
  }

  for (const item of tree.value || []) {
    if (items.find((i) => i.to === item._path)) {
      continue
    }
    items.push({
      label: item.title,
      to: item._path.endsWith('_dir')
        ? item._path.replace('/_dir', '')
        : item._path,
    })
  }

  if (data.value?.title) {
    items.push({
      label: data.value?.title,
    })
  }
  return items
})

const isSearchOpen = useState('search-open', () => false)
const metaKey = useMetaKey()
</script>

<template>
  <div>
    <div class="flex items-center justify-between">
      <BaseBreadcrumb :items="breadcrumb" />
      <button
        type="button"
        class="dark:bg-muted-800 border-muted-200 dark:border-muted-800 text-muted-400 dark:text-muted-500 hover:text-primary-500 dark:hover:text-primary-500 group mb-6 flex items-center gap-2 rounded-xl border bg-white py-1 pe-1 ps-3"
        @click="isSearchOpen = true"
      >
        <Icon
          name="lucide:search"
          class="h-4 w-4 transition-colors duration-300"
        />
        <span
          class="dark:bg-muted-800 border-muted-200 dark:border-muted-700 group-hover:text-muted-600 dark:group-hover:text-muted-100 rounded-lg border bg-white px-2 py-0.5 shadow transition-colors duration-300"
        >
          <kbd class="font-sans text-sm tracking-wide">{{ metaKey }} + k</kbd>
        </span>
      </button>
    </div>

    <div class="flex">
      <div class="w-full lg:w-3/4">
        <ContentRenderer :value="(data as any)">
          <template #empty>
            <DocComponentDemo>
              <div>
                <p>The page you are looking for does not exist.</p>
                <div class="flex flex-row gap-6">
                  <BaseButton to="/documentation">Back to Hub</BaseButton>
                  <BaseButton color="none" to="/">Back to Home</BaseButton>
                </div>
              </div>
            </DocComponentDemo>
          </template>
        </ContentRenderer>
      </div>
      <div
        v-if="!pending && data && data.toc !== false"
        class="relative hidden lg:me-6 lg:block lg:w-1/4 xl:me-0"
      >
        <TairoToc :key="`toc-${data._path}`" />
      </div>
    </div>
  </div>
</template>
