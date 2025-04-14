<script setup lang="ts">
definePageMeta({
  title: 'List View',
  preview: {
    title: 'List view 2',
    description: 'For list views and collections',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-list-view-2.png',
    srcDark: '/img/screens/layouts-list-view-2-dark.png',
    order: 38,
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

const { data, pending, error, refresh } = await useFetch('/api/rentals', {
  query,
})
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20 dark:[--color-input-default-bg:var(--color-muted-950)]">
    <TairoContentWrapperTabbed :labels="['Active', 'Inactive']">
      <template #left>
        <TairoInput
          v-model="filter"
          icon="lucide:search"
          placeholder="Filter properties..."
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
                  src="/img/illustrations/placeholders/flat/placeholder-search-2.svg"
                  alt="Placeholder image"
                >
                <img
                  class="hidden dark:block"
                  src="/img/illustrations/placeholders/flat/placeholder-search-2-dark.svg"
                  alt="Placeholder image"
                >
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
                rounded="lg"
                class="flex flex-col p-4 sm:flex-row sm:items-center"
              >
                <div
                  class="flex flex-col justify-center gap-3 text-center sm:flex-row sm:justify-start sm:text-start"
                >
                  <img
                    class="bg-muted-100 dark:bg-muted-700/60 w-full rounded-lg sm:max-w-[130px]"
                    :src="item.picture"
                    :alt="item.name"
                    :height="190"
                    :width="130"
                  >
                  <div>
                    <div
                      class="flex flex-col gap-2 text-start sm:flex-row sm:items-center mb-1"
                    >
                      <BaseHeading
                        tag="h3"
                        size="sm"
                        weight="medium"
                        class="text-muted-900 dark:text-muted-100"
                      >
                        {{ item.name }}
                      </BaseHeading>
                      <div class="flex items-center gap-2">
                        <Icon
                          name="uiw:star-on"
                          class="size-3"
                          :class="
                            item.rating > 0
                              ? 'text-yellow-400'
                              : 'text-muted-400'
                          "
                        />
                        <Icon
                          name="uiw:star-on"
                          class="size-3"
                          :class="
                            item.rating >= 2
                              ? 'text-yellow-400'
                              : 'text-muted-400'
                          "
                        />
                        <Icon
                          name="uiw:star-on"
                          class="size-3"
                          :class="
                            item.rating >= 3
                              ? 'text-yellow-400'
                              : 'text-muted-400'
                          "
                        />
                        <Icon
                          name="uiw:star-on"
                          class="size-3"
                          :class="
                            item.rating >= 4
                              ? 'text-yellow-400'
                              : 'text-muted-400'
                          "
                        />
                        <Icon
                          name="uiw:star-on"
                          class="size-3"
                          :class="
                            item.rating === 5
                              ? 'text-yellow-400'
                              : 'text-muted-400'
                          "
                        />
                      </div>
                    </div>
                    <BaseParagraph
                      size="xs"
                      lead="none"
                      class="text-muted-400 flex gap-1 text-start text-sm sm:mt-0 sm:items-end"
                    >
                      <span>{{ item.location }}</span>
                    </BaseParagraph>
                    <div class="text-muted-900 dark:text-white font-medium my-2 flex items-center gap-2">
                      <span class="font-sans text-xs">
                        {{ item.details.rooms }} rooms
                      </span>
                      <span class="text-muted-400">&middot;</span>
                      <span class="font-sans text-xs">
                        {{ item.details.beds }} beds
                      </span>
                      <span class="text-muted-400">&middot;</span>
                      <span class="font-sans text-xs">
                        {{ item.details.bathrooms }} bathrooms
                      </span>
                    </div>
                    <div class="text-muted-400 mt-auto flex items-center gap-6">
                      <div
                        v-if="item.amenities.parking"
                        class="flex items-center gap-1"
                      >
                        <Icon name="ph:car-duotone" class="size-4" />
                        <span class="font-sans text-xs">Parking</span>
                      </div>
                      <div
                        v-if="item.amenities.wifi"
                        class="flex items-center gap-1"
                      >
                        <Icon name="ph:broadcast-duotone" class="size-4" />
                        <span class="font-sans text-xs">Wifi</span>
                      </div>
                      <div
                        v-if="item.amenities.heater"
                        class="flex items-center gap-1"
                      >
                        <Icon name="ph:thermometer-duotone" class="size-4" />
                        <span class="font-sans text-xs">Heater</span>
                      </div>
                      <div
                        v-if="item.amenities.cleaning"
                        class="flex items-center gap-1"
                      >
                        <Icon name="ph:waves-duotone" class="size-4" />
                        <span class="font-sans text-xs">Cleaning</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="mt-4 flex items-center justify-end gap-2 sm:ms-auto sm:mt-4"
                >
                  <BaseButton size="sm" rounded="md" variant="ghost" class="w-full sm:w-24">
                    More Info
                  </BaseButton>
                  <BaseButton size="sm" rounded="md" variant="default" class="w-full sm:w-24">
                    <span>Book Now</span>
                  </BaseButton>
                </div>
              </BaseCard>
            </TransitionGroup>
            <div class="mt-6">
              <BasePagination
                :page="1"
                :total="100"
                :items-per-page="10"
                rounded="lg"
                class="w-full"
              />
            </div>
          </div>
        </div>
      </template>
      <template #tab-2>
        <BasePlaceholderPage
          title="There are no inactive properties."
          subtitle="Looks like there are no inactive properties to display. Please check your property settings."
        >
          <template #image>
            <img
              class="block dark:hidden"
              src="/img/illustrations/placeholders/flat/placeholder-having-coffee.svg"
              alt="Placeholder image"
            >
            <img
              class="hidden dark:block"
              src="/img/illustrations/placeholders/flat/placeholder-having-coffee-dark.svg"
              alt="Placeholder image"
            >
          </template>
        </BasePlaceholderPage>
      </template>
    </TairoContentWrapperTabbed>
  </div>
</template>
