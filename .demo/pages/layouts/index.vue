<script setup lang="ts">
definePageMeta({
  title: 'List View',
})

const filter = ref('')

const { data, pending, error, refresh } = await useAsyncData(async () => {
  try {
    // Create an artificial delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // after the delay is over
    return $fetch('/api/freelancers/')
  } catch (error: any) {
    // log error and re-throw error
    console.log('An error occured while retreiving freelancers info')
    throw error
  }
})
// Simplified useFetch() method as a superset of useAsyncData()
// const { data, pending, error, refresh } = await useFetch('/api/freelancers/')

const filteredItems = computed(() => {
  if (data.value) {
    if (!filter.value) {
      return data.value
    }
    const filterRe = new RegExp(filter.value, 'i')
    return data.value.filter((item) => {
      return [item.name, item.location, item.role].some((item) =>
        item.match(filterRe),
      )
    })
  }
})
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
        <BaseButton class="w-full sm:w-32">Manage</BaseButton>
        <BaseButton color="primary" class="w-full sm:w-32">
          <Icon name="lucide:plus" class="w-4 h-4" />
          <span>Add User</span>
        </BaseButton>
      </template>
      <div>
        <div v-if="filteredItems?.length === 0">
          <BasePlaceholderPage
            title="No matching results"
            subtitle="Looks like we couldn't find any matching results for your search terms. Try other search terms."
          >
            <template #image>
              <NuxtImg
                class="block dark:hidden"
                src="/img/illustrations/placeholders/flat/placeholder-search-1.svg"
                alt="Placeholder image"
              />
              <NuxtImg
                class="hidden dark:block"
                src="/img/illustrations/placeholders/flat/placeholder-search-1-dark.svg"
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
              v-for="item in filteredItems"
              :key="item.id"
              shape="curved"
              class="flex flex-col sm:flex-row sm:items-center p-5"
            >
              <div
                class="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 text-center sm:text-left"
              >
                <BaseAvatar
                  size="lg"
                  :src="item.medias.avatar"
                  :badge-src="item.medias.flag"
                />
                <div>
                  <BaseHeading
                    tag="h3"
                    size="sm"
                    weight="medium"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    {{ item.name }}
                  </BaseHeading>
                  <BaseParagraph
                    size="xs"
                    lead="none"
                    class="flex items-end text-sm text-muted-400"
                  >
                    <Icon name="lucide:map-pin" class="w-4 h-4" />
                    <span>{{ item.location }}</span>
                  </BaseParagraph>
                </div>
              </div>
              <div
                class="sm:ml-auto flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4 pt-4 sm:pt-0"
              >
                <div
                  class="flex items-center justify-center sm:justify-end w-full sm:w-[160px]"
                >
                  <BaseTag compact color="primary" flavor="pastel" shape="full">
                    {{ item.role }}
                  </BaseTag>
                </div>
                <div
                  class="flex items-center justify-center divide-x divide-muted-200 dark:divide-muted-700"
                >
                  <div class="flex flex-col gap-1 px-4 text-center">
                    <BaseHeading
                      tag="h3"
                      size="md"
                      weight="semibold"
                      class="text-muted-800 dark:text-muted-100"
                    >
                      <span>{{ item.stats.projects }}</span>
                    </BaseHeading>
                    <BaseParagraph
                      lead="none"
                      weight="semibold"
                      class="!text-[0.65rem] text-muted-400 uppercase"
                    >
                      <span>Projects</span>
                    </BaseParagraph>
                  </div>
                  <div class="flex flex-col gap-1 px-4 text-center">
                    <BaseHeading
                      tag="h3"
                      size="md"
                      weight="semibold"
                      class="text-muted-800 dark:text-muted-100"
                    >
                      <span>{{ item.stats.replies }}</span>
                    </BaseHeading>
                    <BaseParagraph
                      lead="none"
                      weight="semibold"
                      class="!text-[0.65rem] text-muted-400 uppercase"
                    >
                      <span>Replies</span>
                    </BaseParagraph>
                  </div>
                  <div class="flex flex-col gap-1 px-4 text-center">
                    <BaseHeading
                      tag="h3"
                      size="md"
                      weight="semibold"
                      class="text-muted-800 dark:text-muted-100"
                    >
                      <span>{{ item.stats.posts }}</span>
                    </BaseHeading>
                    <BaseParagraph
                      lead="none"
                      weight="semibold"
                      class="!text-[0.65rem] text-muted-400 uppercase"
                    >
                      <span>Posts</span>
                    </BaseParagraph>
                  </div>
                </div>
                <div
                  class="flex ptablet:hidden items-center justify-center sm:justify-end gap-1 w-full sm:w-[160px] py-3 sm:py-0"
                >
                  <BaseAvatarGroup size="xs" :avatars="item.teams" :limit="3" />
                  <p class="font-sans text-xs text-muted-400">In Team</p>
                </div>
                <div class="sm:ml-6">
                  <BaseButtonAction class="w-full sm:w-auto">
                    View
                  </BaseButtonAction>
                </div>
              </div>
            </BaseCard>
          </TransitionGroup>

          <div>
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
    </ContentWrapper>
  </div>
</template>
