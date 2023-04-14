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

      return (
        queryContent()
          .where({
            _path: { $in: paths },
          })
          .without(['body'])
          // .only(['_path', '_dir', 'title'])
          .find() as Promise<any[]>
      )
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
</script>

<template>
  <div>
    <BaseBreadcrumb :items="breadcrumb" />

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
        v-if="!pending && data"
        class="relative hidden lg:me-6 lg:block lg:w-1/4 xl:me-0"
      >
        <TairoToc :key="`toc-${data._path}`" />
      </div>
    </div>
  </div>
</template>
