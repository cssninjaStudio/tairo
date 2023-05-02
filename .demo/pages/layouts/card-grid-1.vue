<script setup lang="ts">
definePageMeta({
  title: 'Card Grid',
  preview: {
    title: 'Card grid 1',
    description: 'For item grids and collections',
    categories: ['layouts'],
    src: '/img/screens/layouts-card-grid-1.png',
    srcDark: '/img/screens/layouts-card-grid-1-dark.png',
    order: 57,
  },
})

const route = useRoute()
const router = useRouter()
const page = computed(() => parseInt((route.query.page as string) ?? '1'))

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

const { data, pending, error, refresh } = await useFetch(
  '/api/company/members/',
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
          placeholder="Filter users..."
          :classes="{
            wrapper: 'w-full sm:w-auto',
          }"
        />
      </template>
      <template #right>
        <BaseSelect
          v-model="perPage"
          placeholder="Items per page"
          label=""
          :classes="{
            wrapper: 'w-full sm:w-40',
          }"
        >
          <option :value="10">10 per page</option>
          <option :value="25">25 per page</option>
          <option :value="50">50 per page</option>
          <option :value="100">100 per page</option>
        </BaseSelect>
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
                src="/img/illustrations/placeholders/flat/placeholder-search-6.svg"
                alt="Placeholder image"
              />
              <img
                class="hidden dark:block"
                src="/img/illustrations/placeholders/flat/placeholder-search-6-dark.svg"
                alt="Placeholder image"
              />
            </template>
          </BasePlaceholderPage>
        </div>
        <div v-else>
          <div class="ltablet:grid-cols-2 grid w-full gap-4 lg:grid-cols-2">
            <TransitionGroup
              enter-active-class="transform-gpu"
              enter-from-class="opacity-0 -translate-x-full"
              enter-to-class="opacity-100 translate-x-0"
              leave-active-class="absolute transform-gpu"
              leave-from-class="opacity-100 translate-x-0"
              leave-to-class="opacity-0 -translate-x-full"
            >
              <BaseCard v-for="item in data?.data" :key="item.id">
                <div
                  class="border-muted-200 dark:border-muted-700 flex flex-col items-center border-b p-6 sm:flex-row"
                >
                  <div class="flex flex-col items-center gap-3 sm:flex-row">
                    <BaseAvatar
                      :src="item.picture"
                      :badge-src="item.badge"
                      :text="item.initials"
                      size="xl"
                      class="bg-muted-500/20 text-muted-500"
                    />
                    <div class="text-center leading-none sm:text-left">
                      <h4
                        class="text-muted-800 dark:text-muted-100 font-sans text-base font-medium"
                      >
                        {{ item.username }}
                      </h4>
                      <p class="text-muted-400 font-sans text-sm">
                        {{ item.position }}
                      </p>
                    </div>
                  </div>
                  <div class="mt-4 flex items-center gap-3 sm:ms-auto sm:mt-0">
                    <NuxtLink
                      v-for="link in item.socialProfiles"
                      :key="link.name"
                      :to="link.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="border-muted-200 dark:border-muted-700 hover:border-primary-500 dark:hover:border-primary-500 dark:bg-muted-800 text-muted-400 hover:text-primary-500 shadow-muted-300/30 dark:shadow-muted-700/30 flex h-8 w-8 items-center justify-center rounded-full border bg-white shadow-lg transition-all duration-300"
                    >
                      <Icon :name="link.icon" class="h-3 w-3" />
                    </NuxtLink>
                  </div>
                </div>
                <div
                  class="flex flex-col items-center justify-between px-6 py-4 sm:flex-row"
                >
                  <div class="w-full grow space-y-1 sm:w-auto sm:max-w-[260px]">
                    <div class="flex items-center justify-between">
                      <h4
                        class="text-muted-700 dark:text-muted-100 font-sans text-sm font-medium"
                      >
                        Progress
                      </h4>
                      <div>
                        <span class="text-muted-400 font-sans text-sm">
                          {{ item.completed }}%
                        </span>
                      </div>
                    </div>
                    <BaseProgress
                      size="xs"
                      color="primary"
                      :value="item.completed"
                    />
                  </div>
                  <div class="mt-4 w-full sm:mt-0 sm:w-auto">
                    <BaseButton class="w-full sm:w-auto">
                      View profile
                    </BaseButton>
                  </div>
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
