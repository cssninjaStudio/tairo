<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const contentPath = computed(() => {
  const slug = route.params.slug as string[]
  return `/documentation/${slug.join('/')}`
})

const { data } = await useAsyncData(
  'doc-content',
  () => {
    if (!route.params.slug) {
      return Promise.reject(new Error('No slug provided'))
    }
    return queryContent(contentPath.value).findOne()
  },
  {
    watch: [contentPath],
  },
)

if (!data?.value) {
  await navigateTo('/documentation')
}

watchEffect(() => {
  // setting the title in the route meta will update the page title
  route.meta.title = data.value?.title || ''
})

useHead({
  title: data.value?.title || '',
  meta: [
    {
      name: 'description',
      content: data.value?.description || '',
    },
  ],
})

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

  items.push({
    label: 'Documentation Hub',
    to: '/documentation',
  })

  if (data.value?.category && data.value.category !== 'Uncategorized') {
    items.push({
      label: data.value?.category,
    })
  }

  items.push({
    label: data.value?.title,
  })

  return items
})
</script>

<template>
  <div v-if="data">
    <BaseBreadcrumb :items="breadcrumb" />

    <DocLayout>
      <div v-if="data">
        <ContentRenderer :value="data" :key="data._path" />
      </div>

      <template #sidebar>
        <DocLayoutToc />
      </template>
    </DocLayout>
  </div>
</template>
