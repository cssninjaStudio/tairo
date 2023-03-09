<script setup lang="ts">
definePageMeta({
  title: 'Card Grid',
})

const route = useRoute()
const router = useRouter()
const page = computed(() => parseInt((route.query.page as string) ?? '1'))

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

const { data, pending, error, refresh } = await useFetch('/api/posts/', {
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
          shape="curved"
          placeholder="Filter posts..."
          :classes="{
            wrapper: 'w-full sm:w-auto',
          }"
        />
      </template>
      <template #right>
        <BaseButton shape="curved" class="w-full sm:w-28">Home</BaseButton>
        <BaseButton shape="curved" color="primary" class="w-full sm:w-28">
          <Icon name="lucide:plus" class="w-4 h-4" />
          <span>New</span>
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
          <div
            class="w-full grid sm:grid-cols-3 ltablet:grid-cols-4 lg:grid-cols-4 gap-4"
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
                shape="curved"
                class="group p-3"
              >
                <div class="relative">
                  <img
                    :src="item.image"
                    class="w-full h-40 rounded-lg object-cover"
                  />
                  <BaseTag
                    shape="full"
                    color="primary"
                    flavor="pastel"
                    condensed
                    class="absolute top-3 left-3 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    {{ item.category }}
                  </BaseTag>
                </div>
                <div>
                  <div class="mb-6 mt-3">
                    <BaseHeading
                      tag="h3"
                      size="md"
                      weight="medium"
                      lead="snug"
                      class="line-clamp-2 text-gray-800 dark:text-gray-100"
                    >
                      {{ item.title }}
                    </BaseHeading>
                  </div>

                  <div class="flex items-center gap-2 mt-auto">
                    <BaseAvatar
                      :src="item.author.avatar"
                      :text="item.author.initials"
                      size="xs"
                      class="bg-muted-500/20 text-muted-500"
                    />
                    <div class="leading-none">
                      <h4
                        class="font-sans text-sm font-medium leading-tight text-muted-800 dark:text-muted-100"
                      >
                        {{ item.author.name }}
                      </h4>
                      <p class="font-sans text-xs text-muted-400">
                        {{ item.published }}
                      </p>
                    </div>
                    <div class="ml-auto">
                      <BaseButtonAction to="/" shape="rounded">
                        <Icon name="lucide:edit-3" />
                        <span>Edit</span>
                      </BaseButtonAction>
                    </div>
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
    </TairoContentWrapper>
  </div>
</template>
