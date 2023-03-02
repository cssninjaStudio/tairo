<script setup lang="ts">
definePageMeta({
  title: 'Card Grid',
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
    <ContentWrapper>
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
              <NuxtImg
                class="block dark:hidden"
                src="/img/illustrations/placeholders/flat/placeholder-search-6.svg"
                alt="Placeholder image"
              />
              <NuxtImg
                class="hidden dark:block"
                src="/img/illustrations/placeholders/flat/placeholder-search-6-dark.svg"
                alt="Placeholder image"
              />
            </template>
          </BasePlaceholderPage>
        </div>
        <div v-else>
          <div class="w-full grid ltablet:grid-cols-2 lg:grid-cols-2 gap-4">
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
                  class="p-6 flex flex-col sm:flex-row items-center border-b border-muted-200 dark:border-muted-700"
                >
                  <div class="flex flex-col sm:flex-row items-center gap-3">
                    <BaseAvatar
                      :src="item.picture"
                      :badge-src="item.badge"
                      :text="item.initials"
                      size="xl"
                      class="bg-muted-500/20 text-muted-500"
                    />
                    <div class="leading-none text-center sm:text-left">
                      <h4
                        class="font-sans text-base font-medium text-muted-800 dark:text-muted-100"
                      >
                        {{ item.username }}
                      </h4>
                      <p class="font-sans text-sm text-muted-400">
                        {{ item.position }}
                      </p>
                    </div>
                  </div>
                  <div class="mt-4 sm:mt-0 sm:ml-auto flex items-center gap-3">
                    <NuxtLink
                      v-for="link in item.socialProfiles"
                      :key="link.name"
                      to="/"
                      class="h-8 w-8 flex items-center justify-center rounded-full border border-muted-200 dark:border-muted-700 hover:border-primary-500 dark:hover:border-primary-500 bg-white dark:bg-muted-800 text-muted-400 hover:text-primary-500 shadow-lg shadow-muted-300/30 dark:shadow-muted-700/30 transition-all duration-300"
                    >
                      <Icon :name="link.icon" class="w-3 h-3" />
                    </NuxtLink>
                  </div>
                </div>
                <div
                  class="p-6 flex flex-col sm:flex-row items-center justify-between"
                >
                  <div class="grow w-full sm:w-auto sm:max-w-[260px] space-y-1">
                    <div class="flex items-center justify-between">
                      <h4
                        class="font-sans text-sm font-medium text-muted-700 dark:text-muted-100"
                      >
                        Progress
                      </h4>
                      <div>
                        <span class="font-sans text-sm text-muted-400">
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
                  <div class="w-full sm:w-auto mt-4 sm:mt-0">
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
    </ContentWrapper>
  </div>
</template>
