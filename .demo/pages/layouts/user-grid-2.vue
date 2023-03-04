<script setup lang="ts">
definePageMeta({
  title: 'Users',
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
  '/api/company/candidates',
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
          shape="curved"
          placeholder="Filter users..."
          :classes="{
            wrapper: 'w-full sm:w-auto',
          }"
        />
      </template>
      <template #right>
        <BaseButton class="w-full sm:w-32" shape="curved">Manage</BaseButton>
        <BaseButton color="primary" class="w-full sm:w-32" shape="curved">
          <Icon name="lucide:plus" class="w-4 h-4" />
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
              <NuxtImg
                class="block dark:hidden"
                src="/img/illustrations/placeholders/flat/placeholder-search-2.svg"
                alt="Placeholder image"
              />
              <NuxtImg
                class="hidden dark:block"
                src="/img/illustrations/placeholders/flat/placeholder-search-2-dark.svg"
                alt="Placeholder image"
              />
            </template>
          </BasePlaceholderPage>
        </div>
        <div
          v-else
          class="grid sm:grid-cols-2 ltablet:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4"
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
              elevated-hover
              class="p-6"
            >
              <div class="w-full flex items-center justify-center mb-3">
                <BaseAvatar
                  size="xl"
                  shape="square"
                  :src="item.src"
                  :badge-src="item.badge"
                  :text="item.initials"
                  :class="useRandomColor()"
                />
              </div>
              <div class="text-center">
                <BaseHeading tag="h3" size="md" weight="medium" lead="none">
                  {{ item.username }}
                </BaseHeading>
                <BaseParagraph size="xs" class="text-muted-400">
                  {{ item.position }}
                </BaseParagraph>
              </div>
              <div class="mt-4 mb-6 flex items-center justify-center gap-3">
                <BaseAvatar
                  v-for="relation in item.relations.slice(0, 3)"
                  :key="relation"
                  size="xs"
                  shape="square"
                  :src="relation.src"
                  :text="relation.text"
                  :class="useRandomColor()"
                />
              </div>
              <div class="flex items-center gap-2">
                <BaseButton shape="curved" class="w-full">
                  <Icon name="ph:user-duotone" class="w-4 h-4" />
                  <span>Profile</span>
                </BaseButton>
                <BaseButton shape="curved" class="w-full">
                  <Icon name="ph:chat-circle-duotone" class="w-4 h-4" />
                  <span>Talk</span>
                </BaseButton>
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
    </ContentWrapper>
  </div>
</template>
