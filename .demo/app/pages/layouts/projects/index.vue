<script setup lang="ts">
definePageMeta({
  title: 'Project List',
  preview: {
    title: 'Project list 1',
    description: 'For displaying a list of projects',
    categories: ['layouts', 'projects'],
    src: '/img/screens/layouts-projects-1.png',
    srcDark: '/img/screens/layouts-projects-1-dark.png',
    order: 68,
  },
})

const route = useRoute()
const router = useRouter()
const page = computed(() => Number.parseInt((route.query.page as string) ?? '1', 10))

const filter = ref('')
const perPage = ref(25)

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
  '/api/company/projects',
  {
    query,
  },
)
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20 dark:[--color-input-default-bg:var(--color-muted-950)]">
    <TairoContentWrapper>
      <template #left>
        <TairoInput
          v-model="filter"
          icon="lucide:search"
          rounded="sm"
          placeholder="Filter projects..."
        />
      </template>
      <template #right>
        <BaseButton
          variant="primary"
          class="w-full sm:w-32"
          rounded="sm"
        >
          <Icon name="lucide:plus" class="size-4" />
          <span>New</span>
        </BaseButton>
      </template>
      <div class="space-y-10">
        <div>
          <div v-if="!pending && data?.recent.length === 0">
            <div class="bg-muted-200 dark:bg-muted-800/60 rounded-lg p-6">
              <BaseHeading
                tag="h4"
                size="lg"
                weight="medium"
              >
                Empty history
              </BaseHeading>
              <BaseParagraph size="sm" class="text-muted-400">
                Looks like you haven't viewed any projects yet.
              </BaseParagraph>
            </div>
          </div>
          <div v-else>
            <div>
              <h4
                class="text-muted-400 mb-4 font-sans text-xs font-semibold uppercase"
              >
                Recently Viewed
              </h4>
            </div>
            <div
              class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
            >
              <TransitionGroup
                enter-active-class="transform-gpu"
                enter-from-class="opacity-0 -translate-x-full"
                enter-to-class="opacity-100 translate-x-0"
                leave-active-class="absolute transform-gpu"
                leave-from-class="opacity-100 translate-x-0"
                leave-to-class="opacity-0 -translate-x-full"
              >
                <NuxtLink
                  v-for="(item, r) in data?.recent.slice(0, 4)"
                  :key="r"
                  class="group block"
                  :to="`/layouts/projects/details/${item.slug}`"
                >
                  <BaseCard
                    rounded="sm"
                    elevated-hover
                    class="group-hover:border-primary-500! p-5"
                  >
                    <div class="mb-6 flex gap-2">
                      <BaseTooltip :content="item.name">
                        <BaseAvatar
                          :src="item.customer.logo"
                          size="sm"
                          class="bg-muted-100 dark:bg-muted-700"
                        />
                      </BaseTooltip>
                      <div>
                        <BaseHeading
                          tag="h5"
                          size="sm"
                          weight="medium"
                          class="line-clamp-1"
                        >
                          {{ item.name }}
                        </BaseHeading>
                        <BaseParagraph size="xs" class="text-muted-400">
                          {{ item.customer.name }} | {{ item.customer.text }}
                        </BaseParagraph>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <BaseTooltip
                          v-for="stack in item.stacks"
                          :key="stack.name"
                          :content="stack.name"
                        >
                          <BaseAvatar
                            :src="stack.icon"
                            size="xxs"
                            class="bg-muted-100 dark:bg-muted-700"
                          />
                        </BaseTooltip>
                      </div>
                      <div class="text-muted-400 flex items-center gap-4">
                        <div class="flex items-center gap-1 text-sm">
                          <Icon name="solar:paperclip-linear" class="size-4" />
                          <span class="font-sans">
                            {{ item.files.length }}
                          </span>
                        </div>
                        <div class="flex items-center gap-1 text-sm">
                          <Icon name="solar:users-group-rounded-linear" class="size-4" />
                          <span class="font-sans">{{ item.team.length }}</span>
                        </div>
                      </div>
                    </div>
                  </BaseCard>
                </NuxtLink>
              </TransitionGroup>
            </div>
          </div>
        </div>
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
                >
                <img
                  class="hidden dark:block"
                  src="/img/illustrations/placeholders/flat/placeholder-search-4-dark.svg"
                  alt="Placeholder image"
                >
              </template>
            </BasePlaceholderPage>
          </div>
          <div v-else>
            <div>
              <h4
                class="text-muted-400 mb-4 font-sans text-xs font-semibold uppercase"
              >
                All Projects
              </h4>
            </div>
            <div
              class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
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
                  rounded="sm"
                  elevated-hover
                  class="hover:border-primary-500!"
                >
                  <NuxtLink
                    class="group"
                    :to="`/layouts/projects/details/${item.slug}`"
                  >
                    <div class="p-5">
                      <div class="relative mb-4">
                        <img
                          :src="item.image"
                          :alt="item.name"
                          class="rounded-md"
                        >
                      </div>
                      <div class="mb-6 flex gap-2">
                        <BaseTooltip :content="item.name">
                          <BaseAvatar
                            :src="item.customer.logo"
                            size="sm"
                            class="bg-muted-100 dark:bg-muted-700"
                          />
                        </BaseTooltip>
                        <div>
                          <BaseHeading
                            tag="h5"
                            size="sm"
                            weight="medium"
                            class="line-clamp-1"
                          >
                            {{ item.name }}
                          </BaseHeading>
                          <BaseParagraph size="xs" class="text-muted-400">
                            {{ item.customer.name }} |
                            {{ item.customer.text }}
                          </BaseParagraph>
                        </div>
                      </div>
                      <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                          <BaseTooltip
                            v-for="stack in item.stacks"
                            :key="stack.name"
                            :content="stack.name"
                          >
                            <BaseAvatar
                              :src="stack.icon"
                              size="xxs"
                              class="bg-muted-100 dark:bg-muted-700"
                            />
                          </BaseTooltip>
                        </div>
                        <div class="text-muted-400 flex items-center gap-4">
                          <div class="flex items-center gap-1 text-sm">
                            <Icon name="solar:paperclip-linear" class="size-4" />
                            <span class="font-sans">
                              {{ item.files.length }}
                            </span>
                          </div>
                          <div class="flex items-center gap-1 text-sm">
                            <Icon name="solar:users-group-rounded-linear" class="size-4" />
                            <span class="font-sans">
                              {{ item.team.length }}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="border-muted-200 dark:border-muted-800 bg-muted-50 dark:bg-muted-900/50 flex items-center justify-between rounded-b-lg border-t px-5 py-3"
                    >
                      <div>
                        <p class="text-muted-400 font-sans text-sm">
                          {{ item.tasks.length }} tasks remaining
                        </p>
                      </div>
                      <div>
                        <BaseAvatarGroup
                          :avatars="item.team"
                          size="xs"
                          :limit="3"
                        />
                      </div>
                    </div>
                  </NuxtLink>
                </BaseCard>
              </TransitionGroup>
            </div>
          </div>
        </div>
      </div>
    </TairoContentWrapper>
  </div>
</template>
