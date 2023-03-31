<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const contentPath = computed(() => {
  const slug = route.params.slug as string[]
  return `/documentation/${slug.join('/')}`
})

const { data, pending } = await useAsyncData(
  'page-data',
  () => queryContent(contentPath.value).findOne(),
  {
    watch: [contentPath],
  },
)

watchEffect(() => {
  // setting the title in the route meta will update the page title
  route.meta.title = data.value?.title || 'Page not found'
})

useHead({
  title: data.value?.title || 'Page not found',
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

  if (data.value) {
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
      <div class="w-full xl:w-3/4">
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
      <div class="relative hidden xl:block xl:w-1/4">
        <DocLayoutToc v-if="!pending" :key="data?._path" />
      </div>
    </div>
  </div>
</template>
