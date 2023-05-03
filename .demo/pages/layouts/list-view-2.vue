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

const { data, pending, error, refresh } = await useFetch('/api/rentals', {
  query,
})
</script>

<template>
  <div>
    <TairoContentWrapperTabbed :labels="['Active', 'Inactive']">
      <template #left>
        <BaseInput
          v-model="filter"
          icon="lucide:search"
          placeholder="Filter properties..."
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
                  src="/img/illustrations/placeholders/flat/placeholder-search-2.svg"
                  alt="Placeholder image"
                />
                <img
                  class="hidden dark:block"
                  src="/img/illustrations/placeholders/flat/placeholder-search-2-dark.svg"
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
                class="flex flex-col p-5 sm:flex-row sm:items-center"
              >
                <div
                  class="flex flex-col justify-center gap-3 text-center sm:flex-row sm:justify-start sm:text-left"
                >
                  <img
                    class="bg-muted-100 dark:bg-muted-700/60 w-full rounded-lg sm:max-w-[130px]"
                    :src="item.picture"
                    :alt="item.name"
                    :height="190"
                    :width="130"
                  />
                  <div>
                    <div
                      class="flex flex-col gap-2 text-left sm:flex-row sm:items-center"
                    >
                      <BaseHeading
                        tag="h3"
                        size="sm"
                        weight="medium"
                        class="text-muted-800 dark:text-muted-100"
                      >
                        {{ item.name }}
                      </BaseHeading>
                      <div class="flex items-center gap-2">
                        <Icon
                          name="uiw:star-on"
                          class="h-3 w-3"
                          :class="
                            item.rating > 0
                              ? 'text-yellow-400'
                              : 'text-muted-400'
                          "
                        />
                        <Icon
                          name="uiw:star-on"
                          class="h-3 w-3"
                          :class="
                            item.rating >= 2
                              ? 'text-yellow-400'
                              : 'text-muted-400'
                          "
                        />
                        <Icon
                          name="uiw:star-on"
                          class="h-3 w-3"
                          :class="
                            item.rating >= 3
                              ? 'text-yellow-400'
                              : 'text-muted-400'
                          "
                        />
                        <Icon
                          name="uiw:star-on"
                          class="h-3 w-3"
                          :class="
                            item.rating >= 4
                              ? 'text-yellow-400'
                              : 'text-muted-400'
                          "
                        />
                        <Icon
                          name="uiw:star-on"
                          class="h-3 w-3"
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
                      class="text-muted-400 mt-3 flex gap-1 text-left text-sm sm:mt-0 sm:items-end"
                    >
                      <Icon name="lucide:map-pin" class="h-3 w-3" />
                      <span>{{ item.location }}</span>
                    </BaseParagraph>
                    <div class="text-primary-500 my-2 flex items-center gap-2">
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
                        <Icon name="ph:car-duotone" class="h-4 w-4" />
                        <span class="font-sans text-xs">Parking</span>
                      </div>
                      <div
                        v-if="item.amenities.wifi"
                        class="flex items-center gap-1"
                      >
                        <Icon name="ph:broadcast-duotone" class="h-4 w-4" />
                        <span class="font-sans text-xs">Wifi</span>
                      </div>
                      <div
                        v-if="item.amenities.heater"
                        class="flex items-center gap-1"
                      >
                        <Icon name="ph:thermometer-duotone" class="h-4 w-4" />
                        <span class="font-sans text-xs">Heater</span>
                      </div>
                      <div
                        v-if="item.amenities.cleaning"
                        class="flex items-center gap-1"
                      >
                        <Icon name="ph:waves-duotone" class="h-4 w-4" />
                        <span class="font-sans text-xs">Cleaning</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="ptablet:flex-col mt-4 flex items-center justify-end gap-2 sm:ms-auto sm:mt-4"
                >
                  <BaseButton class="w-full sm:w-28">More Info</BaseButton>
                  <BaseButton color="primary" class="w-full sm:w-28">
                    <span>Book Now</span>
                  </BaseButton>
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
          title="There are no inactive properties."
          subtitle="Looks like there are no inactive properties to display. Please check your property settings."
        >
          <template #image>
            <img
              class="block dark:hidden"
              src="/img/illustrations/placeholders/flat/placeholder-having-coffee.svg"
              alt="Placeholder image"
            />
            <img
              class="hidden dark:block"
              src="/img/illustrations/placeholders/flat/placeholder-having-coffee-dark.svg"
              alt="Placeholder image"
            />
          </template>
        </BasePlaceholderPage>
      </template>
    </TairoContentWrapperTabbed>
  </div>
</template>
