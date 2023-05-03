<script setup lang="ts">
definePageMeta({
  title: 'Card Grid',
  preview: {
    title: 'Card grid 3',
    description: 'For item grids and collections',
    categories: ['layouts'],
    src: '/img/screens/layouts-card-grid-3.png',
    srcDark: '/img/screens/layouts-card-grid-3-dark.png',
    order: 59,
  },
})

const route = useRoute()
const router = useRouter()
const page = computed(() => parseInt((route.query.page as string) ?? '1'))

const filter = ref('')
const perPage = ref(12)

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
  '/api/company/projects/',
  {
    query,
  },
)
</script>

<template>
  <div>
    <TairoContentWrapper>
      <template #left>
        <BaseInput
          v-model="filter"
          icon="lucide:search"
          shape="curved"
          placeholder="Filter projects..."
          :classes="{
            wrapper: 'w-full sm:w-auto',
          }"
        />
      </template>
      <template #right>
        <BaseButton shape="curved" class="w-full sm:w-32">Settings</BaseButton>
        <BaseButton shape="curved" color="primary" class="w-full sm:w-32">
          <Icon name="lucide:plus" class="h-4 w-4" />
          <span>Create</span>
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
                src="/img/illustrations/placeholders/flat/placeholder-search-7.svg"
                alt="Placeholder image"
              />
              <img
                class="hidden dark:block"
                src="/img/illustrations/placeholders/flat/placeholder-search-7-dark.svg"
                alt="Placeholder image"
              />
            </template>
          </BasePlaceholderPage>
        </div>
        <div v-else>
          <div
            class="ltablet:grid-cols-3 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
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
                v-for="item in data?.data"
                :key="item.id"
                shape="curved"
                class="p-6"
              >
                <div class="mb-3 flex items-center justify-center">
                  <BaseAvatar
                    :src="item.owner.avatar"
                    :badge-src="item.image"
                    shape="curved"
                    size="lg"
                    :data-tooltip="item.owner.name"
                    class="bg-muted-500/20 text-muted-500"
                  />
                </div>
                <div class="my-4 flex flex-col items-center justify-between">
                  <div class="text-center" :data-tooltip="item.name">
                    <h4
                      class="text-muted-800 dark:text-muted-100 line-clamp-1 font-sans text-base font-medium"
                    >
                      {{ item.name }}
                    </h4>
                    <div
                      class="text-muted-400 flex items-center justify-center gap-1"
                    >
                      <Icon name="ph:calendar-blank-duotone" class="h-4 w-4" />
                      <p class="font-sans text-sm">
                        {{ item.dueDate }}
                      </p>
                    </div>
                  </div>
                  <div class="my-4">
                    <BaseAvatarGroup
                      size="xs"
                      :limit="2"
                      :avatars="item.team"
                    />
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <BaseButton shape="curved" class="w-full">Tasks</BaseButton>
                  <BaseButton shape="curved" class="w-full">
                    Activity
                  </BaseButton>
                </div>
              </BaseCard>
            </TransitionGroup>
          </div>
          <div class="mt-6">
            <BasePagination
              :total-items="data?.total ?? 0"
              :item-per-page="perPage"
              :current-page="page"
              shape="curved"
            />
          </div>
        </div>
      </div>
    </TairoContentWrapper>
  </div>
</template>
