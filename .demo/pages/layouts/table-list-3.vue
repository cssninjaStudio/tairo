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
  '/api/company/documents/',
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
          placeholder="Filter files..."
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
                      shape="circle"
                      class="text-primary-500"
                    />
                  </div>
                </BaseTableHeading>
                <BaseTableHeading uppercase spaced>Type</BaseTableHeading>
                <BaseTableHeading uppercase spaced>Name</BaseTableHeading>
                <BaseTableHeading uppercase spaced>Size</BaseTableHeading>
                <BaseTableHeading uppercase spaced>Version</BaseTableHeading>
                <BaseTableHeading uppercase spaced>
                  Last Updated
                </BaseTableHeading>
                <BaseTableHeading uppercase spaced>Action</BaseTableHeading>
              </template>

              <BaseTableRow v-for="item in data?.data" :key="item.id">
                <BaseTableCell spaced>
                  <div class="flex items-center">
                    <BaseCheckbox
                      :name="`item-checkbox-${item.id}`"
                      shape="circle"
                      class="text-primary-500"
                    />
                  </div>
                </BaseTableCell>
                <BaseTableCell light spaced>
                  <NuxtImg
                    :src="item.icon"
                    :alt="item.name"
                    class="max-w-[46px]"
                  />
                </BaseTableCell>
                <BaseTableCell spaced>
                  <span class="font-medium">{{ item.name }}</span>
                </BaseTableCell>
                <BaseTableCell light spaced>
                  {{ item.size }}
                </BaseTableCell>
                <BaseTableCell light spaced>
                  {{ item.version }}
                </BaseTableCell>
                <BaseTableCell spaced>
                  <div class="flex items-center">
                    <BaseAvatar
                      :src="item.author.picture"
                      :text="item.initials"
                      size="xs"
                      class="bg-muted-500/20 text-muted-500"
                    />
                    <div class="ml-3 leading-none">
                      <h4 class="font-sans text-sm font-medium">
                        {{ item.author.name }}
                      </h4>
                      <p class="font-sans text-xs text-muted-400">
                        {{ item.uploaded }}
                      </p>
                    </div>
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
