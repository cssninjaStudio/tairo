<script setup lang="ts">
definePageMeta({
  title: 'Users',
  preview: {
    title: 'User grid 1',
    description: 'For item grids and collections',
    categories: ['layouts'],
    src: '/img/screens/layouts-user-grid-1.png',
    srcDark: '/img/screens/layouts-user-grid-1-dark.png',
    order: 64,
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
const perPage = ref(18)

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

const { data, pending, error, refresh } = await useFetch(
  '/api/company/candidates',
  {
    query,
  },
)
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20 dark:[--color-input-default-bg:var(--color-muted-950)]">
    <TairoContentWrapper>
      <template #left>
        <TairoInput
          v-model="filter"
          icon="lucide:search"
          rounded="full"
          placeholder="Filter users..."
        />
      </template>
      <template #right>
        <BaseButton class="w-full sm:w-32" rounded="full">
          Manage
        </BaseButton>
        <BaseButton
          variant="primary"
          class="w-full sm:w-32"
          rounded="full"
        >
          <Icon name="lucide:plus" class="size-4" />
          <span>Add User</span>
        </BaseButton>
      </template>
      <div>
        <div v-if="!pending && data?.data.length === 0">
          <BasePlaceholderPage
            title="No matching results"
            subtitle="Looks like we couldn't find any matching results for your search terms. Try other search terms."
          >
            <template #image>
              <img
                class="block dark:hidden"
                src="/img/illustrations/placeholders/flat/placeholder-search-2.svg"
                alt="Placeholder image"
              >
              <img
                class="hidden dark:block"
                src="/img/illustrations/placeholders/flat/placeholder-search-2-dark.svg"
                alt="Placeholder image"
              >
            </template>
          </BasePlaceholderPage>
        </div>
        <div
          v-else
          class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <TransitionGroup
            enter-active-class="transform-gpu"
            enter-from-class="opacity-0 -translate-x-full"
            enter-to-class="opacity-100 translate-x-0"
            leave-active-class="absolute transform-gpu"
            leave-from-class="opacity-100 translate-x-0"
            leave-to-class="opacity-0 -translate-x-full"
          >
            <BaseCard
              v-for="(item, index) in data?.data"
              :key="index"
              rounded="md"
              elevated-hover
              class="p-4 md:p-6"
            >
              <div class="mb-3 flex w-full items-center justify-center">
                <BaseAvatar
                  size="lg"
                  :src="item.src"
                  :badge-src="item.badge"
                  :text="item.initials"
                  :class="getRandomColor()"
                />
              </div>
              <div class="text-center">
                <BaseHeading
                  tag="h3"
                  size="md"
                  weight="medium"
                  lead="none"
                  class="text-muted-900 dar:text-white"
                >
                  {{ item.username }}
                </BaseHeading>
                <BaseParagraph size="xs" class="text-muted-600 dark:text-muted-400">
                  {{ item.position }}
                </BaseParagraph>
              </div>
              <div class="mb-6 mt-4 flex items-center justify-center gap-3">
                <BaseAvatar
                  v-for="relation in item.relations.slice(0, 3)"
                  :key="relation.id"
                  size="xs"
                  :src="relation.src"
                  :text="relation.text"
                  :class="getRandomColor()"
                />
              </div>
              <div class="flex items-center gap-2">
                <BaseButton rounded="sm" class="w-full">
                  <Icon name="solar:user-rounded-linear" class="size-4" />
                  <span>Profile</span>
                </BaseButton>
                <BaseButton rounded="sm" class="w-full">
                  <Icon name="solar:chat-dots-linear" class="size-4" />
                  <span>Talk</span>
                </BaseButton>
              </div>
            </BaseCard>
          </TransitionGroup>
        </div>
        <div v-if="!pending && data?.data.length !== 0" class="mt-4">
          <BasePagination
            v-model:page="page"
            :total="data?.total ?? 0"
            :items-per-page="perPage"
            rounded="lg"
            class="w-full"
          />
        </div>
      </div>
    </TairoContentWrapper>
  </div>
</template>
