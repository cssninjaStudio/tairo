<script setup lang="ts">
definePageMeta({
  title: 'List View',
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

const { data, pending, error, refresh } = await useFetch('/api/recipes', {
  query,
})
</script>

<template>
  <div>
    <ContentWrapperTabbed :labels="['All', 'Saved']" shape="curved">
      <template #left>
        <BaseInput
          v-model="filter"
          icon="lucide:search"
          shape="curved"
          placeholder="Filter recipes..."
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
                <NuxtImg
                  class="block dark:hidden"
                  src="/img/illustrations/placeholders/flat/placeholder-search-3.svg"
                  alt="Placeholder image"
                />
                <NuxtImg
                  class="hidden dark:block"
                  src="/img/illustrations/placeholders/flat/placeholder-search-3-dark.svg"
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
                class="flex flex-col sm:flex-row sm:items-center p-5"
              >
                <div
                  class="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-3 text-center sm:text-left"
                >
                  <BaseAvatar
                    :src="item.icon"
                    :badge-src="item.author.avatar"
                    :tooltip="`by ${item.author.name}`"
                    size="lg"
                    class="bg-muted-100 dark:bg-muted-700/70"
                  />
                  <div class="w-full sm:w-auto">
                    <BaseHeading
                      tag="h3"
                      size="sm"
                      weight="medium"
                      class="text-muted-800 dark:text-muted-100"
                    >
                      {{ item.name }}
                    </BaseHeading>
                    <div
                      class="flex items-center justify-center gap-6 sm:gap-0 sm:justify-start"
                    >
                      <div
                        class="flex items-center gap-1 text-sm mt-3 sm:mt-0 text-left text-muted-400"
                      >
                        <Icon name="lucide:archive" class="w-3 h-3" />
                        <span>{{ item.category }}</span>
                      </div>
                      <div class="hidden sm:block px-2">
                        <span>&middot;</span>
                      </div>
                      <div
                        class="flex items-center gap-1 text-sm mt-3 sm:mt-0 text-left text-muted-400"
                      >
                        <Icon name="lucide:clock" class="w-3 h-3" />
                        <span>{{ item.duration }}</span>
                      </div>
                      <div class="hidden sm:block px-2">
                        <span>&middot;</span>
                      </div>
                      <div
                        class="flex items-center gap-1 text-sm mt-3 sm:mt-0 text-left text-muted-400"
                      >
                        <Icon name="lucide:paperclip" class="w-3 h-3" />
                        <span>{{ item.attachments }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="sm:ml-auto flex flex-col sm:flex-row items-center justify-end gap-2"
                >
                  <div
                    class="flex ptablet:hidden items-center justify-center sm:justify-end gap-1 w-full sm:w-[160px] py-5 sm:py-0"
                  >
                    <BaseAvatarGroup
                      size="xs"
                      :avatars="item.followers"
                      :limit="3"
                    />
                    <p class="font-sans text-xs text-muted-400">Like this</p>
                  </div>
                  <div class="w-full sm:w-auto flex items-center gap-2">
                    <BaseButton
                      color="primary"
                      flavor="outline"
                      class="w-full sm:w-28"
                    >
                      <span>Apply Now</span>
                    </BaseButton>
                    <BaseButtonIcon
                      shape="full"
                      small
                      muted
                      tooltip="Save recipe"
                      class="hidden sm:inline-flex"
                    >
                      <Icon name="ph:heart-duotone" class="w-4 h-4" />
                    </BaseButtonIcon>
                  </div>
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
                shape="curved"
              />
            </div>
          </div>
        </div>
      </template>
      <template #tab-2>
        <BasePlaceholderPage
          title="No saved recipes"
          subtitle="Looks like you don't have any saved recipes for the moment. Come back when you have some."
        >
          <template #image>
            <NuxtImg
              class="block dark:hidden"
              src="/img/illustrations/placeholders/flat/placeholder-cooking.svg"
              alt="Placeholder image"
            />
            <NuxtImg
              class="hidden dark:block"
              src="/img/illustrations/placeholders/flat/placeholder-cooking-dark.svg"
              alt="Placeholder image"
            />
          </template>
        </BasePlaceholderPage>
      </template>
    </ContentWrapperTabbed>
  </div>
</template>
