<script setup lang="ts">
definePageMeta({
  title: 'List View',
  preview: {
    title: 'List view 3',
    description: 'For list views and collections',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-list-view-3.png',
    srcDark: '/img/screens/layouts-list-view-3-dark.png',
    order: 39,
  },
})

const route = useRoute()
const router = useRouter()
const page = computed({
  get: () => Number.parseInt((route.query.page as string) ?? '1', 10),
  set: (value) => {
    router.push({
      query: {
        ...route.query,
        page: value,
      },
    })
  },
})

const filter = ref('')
const perPage = ref(10)

watch([filter, perPage], () => {
  router.push({
    query: {
      page: undefined,
    },
  })
})

const query = computed(() => {
  return {
    filter: filter.value,
    perPage: perPage.value,
    page: page.value,
  }
})

const { data, pending, error, refresh } = await useFetch('/api/jobs', {
  query,
})
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20 dark:[--color-input-default-bg:var(--color-muted-950)]">
    <TairoContentWrapperTabbed
      :labels="['Active', 'Inactive']"
      rounded="full"
      reverse
    >
      <template #left>
        <TairoInput
          v-model="filter"
          icon="lucide:search"
          rounded="full"
          placeholder="Filter jobs..."
        />
      </template>
      <template #tab-1>
        <div>
          <div v-if="!pending && data?.data.length === 0">
            <BasePlaceholderPage
              title="No matching results"
              subtitle="Looks like we couldn't find any matching results for your search terms. Try other search terms."
            >
              <template #image>
                <img
                  class="block dark:hidden"
                  src="/img/illustrations/placeholders/flat/placeholder-search-3.svg"
                  alt="Placeholder image"
                >
                <img
                  class="hidden dark:block"
                  src="/img/illustrations/placeholders/flat/placeholder-search-3-dark.svg"
                  alt="Placeholder image"
                >
              </template>
            </BasePlaceholderPage>
          </div>
          <div v-else class="space-y-4">
            <TransitionGroup
              enter-active-class="transform-gpu"
              enter-from-class="opacity-0 -translate-x-full"
              enter-to-class="opacity-100 translate-x-0"
              leave-active-class="absolute transform-gpu"
              leave-from-class="opacity-100 translate-x-0"
              leave-to-class="opacity-0 -translate-x-full"
            >
              <BaseCard
                v-for="item in data?.data"
                :key="item.id"
                rounded="lg"
                class="flex flex-col p-4 sm:flex-row sm:items-center"
              >
                <div
                  class="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-start sm:text-start"
                >
                  <BaseAvatar
                    :src="item.logo"
                    size="sm"
                    class="bg-muted-100 dark:bg-muted-700/70"
                  />
                  <div class="w-full sm:w-auto">
                    <BaseHeading
                      tag="h3"
                      size="sm"
                      weight="medium"
                      class="text-muted-900 dark:text-muted-100"
                    >
                      {{ item.title }}
                    </BaseHeading>
                    <div
                      class="flex items-center justify-between sm:justify-start"
                    >
                      <div
                        class="text-muted-500 dark:text-muted-400 mt-3 flex items-center gap-1 text-start text-sm sm:mt-0"
                      >
                        <Icon name="solar:map-point-linear" class="size-4" />
                        <span>{{ item.location }}</span>
                      </div>
                      <div class="hidden px-2 sm:block">
                        <span>&middot;</span>
                      </div>
                      <div
                        class="text-muted-500 dark:text-muted-400 mt-3 flex items-center gap-1 text-start text-sm sm:mt-0"
                      >
                        <Icon name="solar:watch-square-minimalistic-linear" class="size-4" />
                        <span>{{ item.duration }}</span>
                      </div>
                      <div class="hidden px-2 sm:block">
                        <span>&middot;</span>
                      </div>
                      <div
                        class="text-muted-500 dark:text-muted-400 mt-3 flex items-center gap-1 text-start text-sm sm:mt-0"
                      >
                        <Icon name="solar:revote-linear" class="size-4" />
                        <span>{{ item.requirements }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="mt-4 flex items-center justify-end gap-2 sm:ms-auto sm:mt-0"
                >
                  <BaseButton
                    class="w-full sm:w-20" size="sm"
                  >
                    <span>Apply</span>
                  </BaseButton>
                  <BaseTooltip content="Add to Bookmarks">
                    <BaseButton
                      rounded="full"
                      size="icon-sm"
                      variant="muted"
                      class="hidden sm:inline-flex"
                    >
                      <Icon name="solar:bookmark-linear" class="size-4" />
                    </BaseButton>
                  </BaseTooltip>
                </div>
              </BaseCard>
            </TransitionGroup>
            <div class="mt-6">
              <BasePagination
                :page="1"
                :total="100"
                :items-per-page="10"
                rounded="full"
                class="w-full"
              />
            </div>
          </div>
        </div>
      </template>
      <template #tab-2>
        <BasePlaceholderPage
          title="No saved jobs."
          subtitle="Looks like you don't have any saved jobs for the moment. It's also possible that some of your saved items expired."
        >
          <template #image>
            <img
              class="block dark:hidden"
              src="/img/illustrations/placeholders/flat/placeholder-thinking-canvas.svg"
              alt="Placeholder image"
            >
            <img
              class="hidden dark:block"
              src="/img/illustrations/placeholders/flat/placeholder-thinking-canvas-dark.svg"
              alt="Placeholder image"
            >
          </template>
        </BasePlaceholderPage>
      </template>
    </TairoContentWrapperTabbed>
  </div>
</template>
