<script setup lang="ts">
definePageMeta({
  title: 'List View',
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

const { data, pending, error, refresh } = await useFetch('/api/jobs', {
  query,
})
</script>

<template>
  <div>
    <TairoContentWrapperTabbed
      :labels="['Active', 'Inactive']"
      shape="full"
      reverse
    >
      <template #left>
        <BaseInput
          v-model="filter"
          icon="lucide:search"
          shape="full"
          placeholder="Filter jobs..."
          :classes="{
            wrapper: 'w-full sm:w-auto',
          }"
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
                />
                <img
                  class="hidden dark:block"
                  src="/img/illustrations/placeholders/flat/placeholder-search-3-dark.svg"
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
                class="flex flex-col sm:flex-row sm:items-center p-5"
              >
                <div
                  class="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-3 text-center sm:text-left"
                >
                  <BaseAvatar
                    :src="item.logo"
                    size="lg"
                    class="bg-muted-100 dark:bg-muted-700/70"
                  />
                  <div class="w-full sm:w-auto">
                    <BaseHeading
                      tag="h3"
                      size="sm"
                      weight="medium"
                      class="text-muted-800 dark:text-muted-100"
                    >
                      {{ item.title }}
                    </BaseHeading>
                    <div
                      class="flex items-center justify-between sm:justify-start"
                    >
                      <div
                        class="flex items-center gap-1 text-sm mt-3 sm:mt-0 text-left text-muted-400"
                      >
                        <Icon name="lucide:map-pin" class="w-3 h-3" />
                        <span>{{ item.location }}</span>
                      </div>
                      <div class="hidden sm:block px-2">
                        <span>&middot;</span>
                      </div>
                      <div
                        class="flex items-center gap-1 text-sm mt-3 sm:mt-0 text-left text-muted-400"
                      >
                        <Icon name="lucide:clock" class="w-3 h-3" />
                        <span>{{ item.duration }}</span>
                      </div>
                      <div class="hidden sm:block px-2">
                        <span>&middot;</span>
                      </div>
                      <div
                        class="flex items-center gap-1 text-sm mt-3 sm:mt-0 text-left text-muted-400"
                      >
                        <Icon name="lucide:check-circle" class="w-3 h-3" />
                        <span>{{ item.requirements }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="sm:ms-auto flex items-center justify-end gap-2 mt-4 sm:mt-0"
                >
                  <BaseButton
                    color="primary"
                    flavor="outline"
                    class="w-full sm:w-28"
                  >
                    <span>Apply Now</span>
                  </BaseButton>
                  <BaseButtonIcon
                    shape="full"
                    small
                    muted
                    data-tooltip="Add to Bookmarks"
                    class="hidden sm:inline-flex"
                  >
                    <Icon name="ph:bookmark-duotone" class="w-4 h-4" />
                  </BaseButtonIcon>
                </div>
              </BaseCard>
            </TransitionGroup>
            <div class="mt-6">
              <BasePagination
                :total="100"
                :item-per-page="10"
                :total-items="100"
                :current="1"
                :limit="10"
                shape="full"
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
            />
            <img
              class="hidden dark:block"
              src="/img/illustrations/placeholders/flat/placeholder-thinking-canvas-dark.svg"
              alt="Placeholder image"
            />
          </template>
        </BasePlaceholderPage>
      </template>
    </TairoContentWrapperTabbed>
  </div>
</template>
