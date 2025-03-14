<script setup lang="ts">
definePageMeta({
  title: 'Tiles',
  preview: {
    title: 'Tile grid 2',
    description: 'For item grids and collections',
    categories: ['layouts'],
    src: '/img/screens/layouts-tile-grid-2.png',
    srcDark: '/img/screens/layouts-tile-grid-2-dark.png',
    order: 62,
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
const perPage = ref(25)

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
  '/api/company/documents',
  {
    query,
  },
)
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20 dark:[--color-input-default-bg:var(--color-muted-950)]">
    <TairoContentWrapper>
      <template #left>
        <tairoInput
          v-model="filter"
          icon="lucide:search"
          rounded="lg"
          placeholder="Filter files..."
        />
      </template>
      <template #right>
        <BaseButton class="w-full sm:w-32" rounded="lg">
          Manage
        </BaseButton>
        <BaseButton
          variant="primary"
          class="w-full sm:w-32"
          rounded="lg"
        >
          <Icon name="lucide:plus" class="size-4" />
          <span>Upload</span>
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
                src="/img/illustrations/placeholders/flat/placeholder-search-5.svg"
                alt="Placeholder image"
              >
              <img
                class="hidden dark:block"
                src="/img/illustrations/placeholders/flat/placeholder-search-5-dark.svg"
                alt="Placeholder image"
              >
            </template>
          </BasePlaceholderPage>
        </div>
        <div
          v-else
          class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
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
              rounded="lg"
              class="p-3"
            >
              <div class="flex w-full items-center gap-2">
                <img
                  :src="item.icon"
                  :alt="item.name"
                  class="max-w-[46px]"
                >
                <div>
                  <BaseHeading
                    tag="h3"
                    size="sm"
                    weight="medium"
                  >
                    {{ item.name }}
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-600 dark:text-muted-400">
                    <span>{{ item.size }}</span>
                    <span class="px-1 text-base leading-tight">&middot;</span>
                    <span>v{{ item.version }}</span>
                  </BaseParagraph>
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
                      title="Upload"
                      text="Upload a new version"
                    >
                      <template #start>
                        <Icon
                          name="solar:upload-linear"
                          class="me-2 block size-5"
                        />
                      </template>
                    </BaseDropdownItem>
                    <BaseDropdownItem
                      to="#"
                      title="Download"
                      text="Download this file"
                    >
                      <template #start>
                        <Icon
                          name="solar:download-linear"
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
                      text="Share this file"
                    >
                      <template #start>
                        <Icon
                          name="solar:share-linear"
                          class="me-2 block size-5"
                        />
                      </template>
                    </BaseDropdownItem>
                    <BaseDropdownSeparator />
                    <BaseDropdownItem
                      to="#"
                      title="Delete"
                      text="Delete this file"
                    >
                      <template #start>
                        <Icon
                          name="solar:trash-bin-minimalistic-linear"
                          class="me-2 block size-5"
                        />
                      </template>
                    </BaseDropdownItem>
                  </BaseDropdown>
                </div>
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
