<script setup lang="ts">
definePageMeta({
  title: 'Tiles',
  preview: {
    title: 'Tile grid 1',
    description: 'For item grids and collections',
    categories: ['layouts'],
    src: '/img/screens/layouts-tile-grid-1.png',
    srcDark: '/img/screens/layouts-tile-grid-1-dark.png',
    order: 61,
  },
})

const route = useRoute()
const router = useRouter()
const page = computed(() => parseInt((route.query.page as string) ?? '1'))

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
  '/api/company/members',
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
          shape="full"
          placeholder="Filter users..."
          :classes="{
            wrapper: 'w-full sm:w-auto',
          }"
        />
      </template>
      <template #right>
        <BaseButton class="w-full sm:w-32" shape="full">Manage</BaseButton>
        <BaseButton color="primary" class="w-full sm:w-32" shape="full">
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
                src="/img/illustrations/placeholders/flat/placeholder-search-5.svg"
                alt="Placeholder image"
              />
              <img
                class="hidden dark:block"
                src="/img/illustrations/placeholders/flat/placeholder-search-5-dark.svg"
                alt="Placeholder image"
              />
            </template>
          </BasePlaceholderPage>
        </div>
        <div
          v-else
          class="ltablet:grid-cols-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
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
              shape="curved"
              class="p-3"
            >
              <div class="flex w-full items-center gap-2">
                <BaseAvatar
                  size="md"
                  :src="item.picture"
                  :badge-src="item.badge"
                  :text="item.initials"
                  class="bg-success-100 text-success-400"
                />
                <div>
                  <BaseHeading tag="h3" size="sm" weight="medium">
                    {{ item.username }}
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    {{ item.position }}
                  </BaseParagraph>
                </div>
                <div class="ms-auto">
                  <BaseDropdown
                    flavor="context"
                    label="Dropdown"
                    orientation="end"
                    condensed
                    class="z-20"
                    shape="curved"
                  >
                    <BaseDropdownItem
                      to="#"
                      title="Permissions"
                      text="Manage permissions"
                    >
                      <template #start>
                        <Icon
                          name="ph:lock-duotone"
                          class="me-2 block h-5 w-5"
                        />
                      </template>
                    </BaseDropdownItem>
                    <BaseDropdownItem
                      to="#"
                      title="Message"
                      text="Send a message"
                    >
                      <template #start>
                        <Icon
                          name="ph:chat-circle-duotone"
                          class="me-2 block h-5 w-5"
                        />
                      </template>
                    </BaseDropdownItem>
                    <BaseDropdownItem
                      to="#"
                      title="Share"
                      text="Share this profile"
                    >
                      <template #start>
                        <Icon
                          name="ph:share-duotone"
                          class="me-2 block h-5 w-5"
                        />
                      </template>
                    </BaseDropdownItem>
                    <BaseDropdownDivide />
                    <BaseDropdownItem
                      to="#"
                      title="Remove"
                      text="Remove from list"
                    >
                      <template #start>
                        <Icon
                          name="ph:trash-duotone"
                          class="me-2 block h-5 w-5"
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
            :total-items="data?.total ?? 0"
            :item-per-page="perPage"
            :current-page="page"
            shape="curved"
          />
        </div>
      </div>
    </TairoContentWrapper>
  </div>
</template>
