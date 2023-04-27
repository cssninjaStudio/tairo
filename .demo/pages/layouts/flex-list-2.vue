<script setup lang="ts">
definePageMeta({
  title: 'Flex List',
  preview: {
    title: 'Flex list 2',
    description: 'For list views and collections',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-list-flex-2.png',
    srcDark: '/img/screens/layouts-list-flex-2-dark.png',
    order: 42,
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
  '/api/company/candidates',
  {
    query,
  },
)

function statusColor(itemStatus: string) {
  switch (itemStatus) {
    case 'online':
      return 'success'
    case 'working':
      return 'info'
    case 'suspended':
      return 'warning'
    default:
      break
  }
}
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
        <BaseButton color="primary" shape="full" class="w-full sm:w-32">
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
                src="/img/illustrations/placeholders/flat/placeholder-search-4.svg"
                alt="Placeholder image"
              />
              <img
                class="hidden dark:block"
                src="/img/illustrations/placeholders/flat/placeholder-search-4-dark.svg"
                alt="Placeholder image"
              />
            </template>
          </BasePlaceholderPage>
        </div>
        <div v-else class="pt-6">
          <TransitionGroup
            enter-active-class="transform-gpu"
            enter-from-class="opacity-0 -translate-x-full"
            enter-to-class="opacity-100 translate-x-0"
            leave-active-class="absolute transform-gpu"
            leave-from-class="opacity-100 translate-x-0"
            leave-to-class="opacity-0 -translate-x-full"
          >
            <DemoFlexTableRow
              v-for="(item, index) in data?.data"
              :key="index"
              shape="straight"
              condensed
              spaced
            >
              <template #start>
                <DemoFlexTableStart
                  label="user"
                  :hide-label="index > 0"
                  :title="item.username"
                  :subtitle="item.position"
                  :avatar="item.src"
                  :badge="item.badge"
                  :initials="item.initials"
                />
              </template>
              <template #end>
                <DemoFlexTableCell
                  label="location"
                  :hide-label="index > 0"
                  class="w-full sm:w-40"
                >
                  <span
                    class="text-muted-500 dark:text-muted-400 font-sans text-sm"
                  >
                    {{ item.location }}
                  </span>
                </DemoFlexTableCell>
                <DemoFlexTableCell
                  label="industry"
                  :hide-label="index > 0"
                  class="w-full sm:w-40"
                >
                  <span
                    class="text-muted-500 dark:text-muted-400 font-sans text-sm"
                  >
                    {{ item.industry }}
                  </span>
                </DemoFlexTableCell>
                <DemoFlexTableCell
                  label="status"
                  :hide-label="index > 0"
                  class="w-full sm:w-16"
                >
                  <BaseTag
                    :color="statusColor(item.status)"
                    shape="full"
                    flavor="pastel"
                    condensed
                    class="capitalize"
                  >
                    {{ item.status }}
                  </BaseTag>
                </DemoFlexTableCell>
                <DemoFlexTableCell
                  label="relations"
                  :hide-label="index > 0"
                  tablet-hidden
                  class="w-full sm:w-[160px]"
                >
                  <BaseAvatarGroup
                    size="xs"
                    :avatars="item.relations"
                    :limit="2"
                  />
                </DemoFlexTableCell>
                <DemoFlexTableCell label="action" :hide-label="index > 0">
                  <BaseButtonAction color="muted">
                    <span>View</span>
                  </BaseButtonAction>
                </DemoFlexTableCell>
              </template>
            </DemoFlexTableRow>
          </TransitionGroup>
        </div>
        <div v-if="!pending && data?.data.length !== 0" class="mt-4">
          <BasePagination
            :total-items="data?.total ?? 0"
            :item-per-page="perPage"
            :current-page="page"
            shape="full"
          />
        </div>
      </div>
    </TairoContentWrapper>
  </div>
</template>
