<script setup lang="ts">
definePageMeta({
  title: 'Table List',
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

// Simplified useFetch() method as a superset of useAsyncData()
// const { data, pending, error, refresh } = await useFetch('/api/company/members/')
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
                src="/img/illustrations/placeholders/flat/placeholder-search-4.svg"
                alt="Placeholder image"
              />
              <NuxtImg
                class="hidden dark:block"
                src="/img/illustrations/placeholders/flat/placeholder-search-4-dark.svg"
                alt="Placeholder image"
              />
            </template>
          </BasePlaceholderPage>
        </div>
        <div v-else>
          <div class="w-full">
            <BaseTable shape="rounded">
              <template #header>
                <BaseTableHeading uppercase spaced class="p-4">
                  <div class="flex items-center">
                    <BaseCheckbox
                      name="table-1-main"
                      shape="rounded"
                      class="text-primary-500"
                    />
                  </div>
                </BaseTableHeading>
                <BaseTableHeading uppercase spaced>
                  Collaborator
                </BaseTableHeading>
                <BaseTableHeading uppercase spaced>Location</BaseTableHeading>
                <BaseTableHeading uppercase spaced>Status</BaseTableHeading>
                <BaseTableHeading uppercase spaced>Completed</BaseTableHeading>
                <BaseTableHeading uppercase spaced>Action</BaseTableHeading>
              </template>

              <BaseTableRow v-for="item in data?.data" :key="item.id">
                <BaseTableCell spaced>
                  <div class="flex items-center">
                    <BaseCheckbox
                      :name="`item-checkbox-${item.id}`"
                      shape="rounded"
                      class="text-primary-500"
                    />
                  </div>
                </BaseTableCell>
                <BaseTableCell spaced>
                  <div class="flex items-center">
                    <BaseAvatar
                      :src="item.picture"
                      :text="item.initials"
                      class="bg-muted-500/20 text-muted-500"
                    />
                    <div class="ml-3 leading-none">
                      <h4 class="font-sans text-sm font-medium">
                        {{ item.username }}
                      </h4>
                      <p class="font-sans text-xs text-muted-400">
                        {{ item.position }}
                      </p>
                    </div>
                  </div>
                </BaseTableCell>
                <BaseTableCell light spaced>
                  {{ item.location }}
                </BaseTableCell>
                <BaseTableCell spaced class="capitalize">
                  <BaseTag
                    v-if="item.status === 'available'"
                    color="success"
                    flavor="pastel"
                    shape="full"
                    compact
                    class="font-medium"
                  >
                    {{ item.status }}
                  </BaseTag>
                  <BaseTag
                    v-else-if="item.status === 'new'"
                    color="info"
                    flavor="pastel"
                    shape="full"
                    compact
                    class="font-medium"
                  >
                    {{ item.status }}
                  </BaseTag>
                  <BaseTag
                    v-else-if="item.status === 'busy'"
                    color="warning"
                    flavor="pastel"
                    shape="full"
                    compact
                    class="font-medium"
                  >
                    {{ item.status }}
                  </BaseTag>
                  <BaseTag
                    v-else-if="item.status === 'offline'"
                    color="muted"
                    flavor="pastel"
                    shape="full"
                    compact
                    class="font-medium"
                  >
                    {{ item.status }}
                  </BaseTag>
                </BaseTableCell>
                <BaseTableCell spaced>
                  <div class="flex items-center">
                    <div class="relative">
                      <BaseProgressCircle
                        :value="item.completed"
                        :thickness="1"
                        :size="50"
                        class="text-success-500"
                      />
                      <span
                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 ml-0.5 font-sans text-[0.65rem] font-semibold"
                      >
                        {{ item.completed }}%
                      </span>
                    </div>
                    <span class="font-sans text-xs text-muted-400">
                      Tasks completed
                    </span>
                  </div>
                </BaseTableCell>
                <BaseTableCell spaced>
                  <BaseButtonAction muted>Manage</BaseButtonAction>
                </BaseTableCell>
              </BaseTableRow>
            </BaseTable>
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
