<script setup lang="ts">
definePageMeta({
  title: 'List View',
  preview: {
    title: 'List view 1',
    description: 'For list views and collections',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-list-view-1.png',
    srcDark: '/img/screens/layouts-list-view-1-dark.png',
    order: 37,
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

const { data, pending, error, refresh } = await useFetch('/api/freelancers', {
  query,
})
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
        <BaseButton class="w-full sm:w-32">Manage</BaseButton>
        <BaseButton color="primary" class="w-full sm:w-32">
          <Icon name="lucide:plus" class="h-4 w-4" />
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
                src="/img/illustrations/placeholders/flat/placeholder-search-1.svg"
                alt="Placeholder image"
              />
              <img
                class="hidden dark:block"
                src="/img/illustrations/placeholders/flat/placeholder-search-1-dark.svg"
                alt="Placeholder image"
              />
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
              shape="curved"
              class="flex flex-col p-5 sm:flex-row sm:items-center"
            >
              <div
                class="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-start sm:text-left"
              >
                <BaseAvatar
                  size="lg"
                  :src="item.medias.avatar"
                  :badge-src="item.medias.flag"
                />
                <div>
                  <BaseHeading
                    tag="h3"
                    size="sm"
                    weight="medium"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    {{ item.name }}
                  </BaseHeading>
                  <BaseParagraph
                    size="xs"
                    lead="none"
                    class="text-muted-400 flex items-end text-sm"
                  >
                    <Icon name="lucide:map-pin" class="h-4 w-4" />
                    <span>{{ item.location }}</span>
                  </BaseParagraph>
                </div>
              </div>
              <div
                class="flex flex-col gap-4 pt-4 sm:ms-auto sm:flex-row sm:items-center sm:justify-end sm:pt-0"
              >
                <div
                  class="flex w-full items-center justify-center sm:w-[160px] sm:justify-end"
                >
                  <BaseTag
                    condensed
                    color="primary"
                    flavor="pastel"
                    shape="full"
                  >
                    {{ item.role }}
                  </BaseTag>
                </div>
                <div
                  class="divide-muted-200 dark:divide-muted-700 flex items-center justify-center divide-x"
                >
                  <div class="flex flex-col gap-1 px-4 text-center">
                    <BaseHeading
                      tag="h3"
                      size="md"
                      weight="semibold"
                      class="text-muted-800 dark:text-muted-100"
                    >
                      <span>{{ item.stats.projects }}</span>
                    </BaseHeading>
                    <BaseParagraph
                      lead="none"
                      weight="semibold"
                      class="text-muted-400 !text-[0.65rem] uppercase"
                    >
                      <span>Projects</span>
                    </BaseParagraph>
                  </div>
                  <div class="flex flex-col gap-1 px-4 text-center">
                    <BaseHeading
                      tag="h3"
                      size="md"
                      weight="semibold"
                      class="text-muted-800 dark:text-muted-100"
                    >
                      <span>{{ item.stats.replies }}</span>
                    </BaseHeading>
                    <BaseParagraph
                      lead="none"
                      weight="semibold"
                      class="text-muted-400 !text-[0.65rem] uppercase"
                    >
                      <span>Replies</span>
                    </BaseParagraph>
                  </div>
                  <div class="flex flex-col gap-1 px-4 text-center">
                    <BaseHeading
                      tag="h3"
                      size="md"
                      weight="semibold"
                      class="text-muted-800 dark:text-muted-100"
                    >
                      <span>{{ item.stats.posts }}</span>
                    </BaseHeading>
                    <BaseParagraph
                      lead="none"
                      weight="semibold"
                      class="text-muted-400 !text-[0.65rem] uppercase"
                    >
                      <span>Posts</span>
                    </BaseParagraph>
                  </div>
                </div>
                <div
                  class="ptablet:hidden flex w-full items-center justify-center gap-1 py-3 sm:w-[160px] sm:justify-end sm:py-0"
                >
                  <BaseAvatarGroup size="xs" :avatars="item.teams" :limit="3" />
                  <p class="text-muted-400 font-sans text-xs">In Team</p>
                </div>
                <div class="sm:ms-6">
                  <BaseButtonAction class="w-full sm:w-auto">
                    View
                  </BaseButtonAction>
                </div>
              </div>
            </BaseCard>
          </TransitionGroup>

          <div>
            <BasePagination
              :total-items="data?.total ?? 0"
              :item-per-page="perPage"
              :current-page="page"
              shape="full"
            />
          </div>
        </div>
      </div>
    </TairoContentWrapper>
  </div>
</template>
