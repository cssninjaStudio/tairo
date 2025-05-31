<script setup lang="ts">
definePageMeta({
  title: 'Card Grid',
  preview: {
    title: 'Card grid 2',
    description: 'For item grids and collections',
    categories: ['layouts'],
    src: '/img/screens/layouts-card-grid-2.png',
    srcDark: '/img/screens/layouts-card-grid-2-dark.png',
    order: 58,
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
  <div class="px-4 md:px-6 lg:px-8 pb-20 dark:[--color-input-default-bg:var(--color-muted-950)]">
    <TairoContentWrapper>
      <template #left>
        <TairoInput
          v-model="filter"
          icon="lucide:search"
          rounded="full"
          placeholder="Filter projects..."
        />
      </template>
      <template #right>
        <BaseButton rounded="lg" class="w-full sm:w-32">
          Settings
        </BaseButton>
        <BaseButton
          rounded="lg"
          variant="primary"
          class="w-full sm:w-32"
        >
          <Icon name="lucide:plus" class="size-4" />
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
              >
              <img
                class="hidden dark:block"
                src="/img/illustrations/placeholders/flat/placeholder-search-7-dark.svg"
                alt="Placeholder image"
              >
            </template>
          </BasePlaceholderPage>
        </div>
        <div v-else>
          <div
            class="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3"
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
                rounded="lg"
                class="p-4"
              >
                <div class="mb-3 flex items-center gap-3">
                  <BaseAvatar
                    :src="item.owner.avatar"
                    :text="item.owner.text"
                    size="xs"
                    class="bg-muted-500/20 text-muted-500"
                  />
                  <div class="leading-none">
                    <h4
                      class="text-muted-900 dark:text-muted-100 font-sans text-sm font-medium"
                    >
                      {{ item.owner.name }}
                    </h4>
                    <p class="text-muted-600 dark:text-muted-400 font-sans text-xs">
                      Updated {{ item.updated }}
                    </p>
                  </div>
                  <div class="ms-auto">
                    <BaseDropdown
                      label="Manage"
                      placement="bottom-end"
                      size="md"
                      class="z-20"
                      rounded="lg"
                    >
                      <BaseDropdownItem
                        to="#"
                        title="Edit"
                        text="Edit this project"
                      >
                        <template #start>
                          <Icon
                            name="solar:pen-2-linear"
                            class="me-2 block size-5"
                          />
                        </template>
                      </BaseDropdownItem>
                      <BaseDropdownSeparator />
                      <BaseDropdownItem
                        to="#"
                        title="Permissions"
                        text="Manage permissions"
                      >
                        <template #start>
                          <Icon
                            name="solar:lock-keyhole-linear"
                            class="me-2 block size-5"
                          />
                        </template>
                      </BaseDropdownItem>
                      <BaseDropdownItem
                        to="#"
                        title="Share"
                        text="Share this project"
                      >
                        <template #start>
                          <Icon
                            name="solar:square-share-line-linear"
                            class="me-2 block size-5"
                          />
                        </template>
                      </BaseDropdownItem>
                      <BaseDropdownSeparator />
                      <BaseDropdownItem
                        to="#"
                        title="Delete"
                        text="Delete this project"
                      >
                        <template #start>
                          <Icon
                            name="solar:trash-bin-trash-linear"
                            class="me-2 block size-5"
                          />
                        </template>
                      </BaseDropdownItem>
                    </BaseDropdown>
                  </div>
                </div>
                <div>
                  <img
                    :src="item.image"
                    :alt="item.name"
                    class="rounded-lg"
                  >
                </div>
                <div class="my-4 flex items-center justify-between">
                  <div>
                    <h4
                      class="text-muted-900 dark:text-muted-100 font-sans text-base font-medium"
                    >
                      {{ item.name }}
                    </h4>
                    <div class="text-muted-400 flex items-center gap-1">
                      <Icon name="solar:calendar-minimalistic-linear" class="size-4" />
                      <p class="font-sans text-xs">
                        {{ item.dueDate }}
                      </p>
                    </div>
                  </div>
                  <div>
                    <BaseAvatarGroup
                      size="xs"
                      :limit="2"
                      :avatars="item.team"
                    />
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <BaseButton rounded="lg" class="w-full">
                    Tasks
                  </BaseButton>
                  <BaseButton rounded="lg" class="w-full">
                    Activity
                  </BaseButton>
                </div>
              </BaseCard>
            </TransitionGroup>
          </div>
          <div class="mt-6">
            <BasePagination
              v-model:page="page"
              :total="data?.total ?? 0"
              :items-per-page="perPage"
              rounded="lg"
              class="w-full"
            />
          </div>
        </div>
      </div>
    </TairoContentWrapper>
  </div>
</template>
