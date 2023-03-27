<script setup lang="ts">
definePageMeta({
  title: 'Project List',
})

const route = useRoute()
const router = useRouter()
const page = computed(() => parseInt((route.query.page as string) ?? '1'))

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
  <div>
    <TairoContentWrapper>
      <template #left>
        <BaseInput
          v-model="filter"
          icon="lucide:search"
          shape="curved"
          placeholder="Filter projects..."
          :classes="{
            wrapper: 'w-full sm:w-auto',
          }"
        />
      </template>
      <template #right>
        <BaseCard shape="curved" class="min-w-[340px]">
          <div class="grid grid-cols-4 p-4">
            <div class="relative flex flex-col text-center">
              <span
                class="font-sans font-bold text-2xl text-muted-800 dark:text-muted-100"
              >
                12
              </span>
              <p class="font-sans text-xs text-muted-400">On Track</p>
              <span
                class="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary-500"
              ></span>
            </div>
            <div class="relative flex flex-col text-center">
              <span
                class="font-sans font-bold text-2xl text-muted-800 dark:text-muted-100"
              >
                4
              </span>
              <p class="font-sans text-xs text-muted-400">Overdue</p>
              <span
                class="absolute top-0 right-0 h-2 w-2 rounded-full bg-amber-500"
              ></span>
            </div>
            <div class="relative flex flex-col text-center">
              <span
                class="font-sans font-bold text-2xl text-muted-800 dark:text-muted-100"
              >
                {{ data?.data.length || '0' }}
              </span>
              <p class="font-sans text-xs text-muted-400">Total</p>
              <span
                class="absolute top-0 right-0 h-2 w-2 rounded-full bg-success-500"
              ></span>
            </div>
            <div class="flex items-center justify-center">
              <BaseButtonIcon muted>
                <Icon name="lucide:plus" />
              </BaseButtonIcon>
            </div>
          </div>
        </BaseCard>
      </template>
      <div class="space-y-10">
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
          <div v-else>
            <div>
              <h4
                class="mb-4 font-sans text-xs font-semibold uppercase text-muted-400"
              >
                All Projects
              </h4>
            </div>
            <div
              class="grid sm:grid-cols-2 ltablet:grid-cols-3 lg:grid-cols-3 gap-4"
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
                  class="hover:!border-primary-500"
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
                          class="w-full rounded-lg"
                        />
                      </div>
                      <div class="flex gap-2 mb-6">
                        <BaseAvatar
                          :src="item.customer.logo"
                          size="sm"
                          :data-tooltip="item.name"
                          class="bg-muted-100 dark:bg-muted-700"
                        />
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
                          <BaseAvatar
                            v-for="stack in item.stacks"
                            :key="stack.name"
                            :src="stack.icon"
                            size="xxs"
                            :data-tooltip="stack.name"
                            class="bg-muted-100 dark:bg-muted-700"
                          />
                        </div>
                        <div class="flex items-center gap-4 text-muted-400">
                          <div class="flex items-center gap-1 text-sm">
                            <Icon name="ph:paperclip-duotone" class="w-4 h-4" />
                            <span class="font-sans">
                              {{ item.files.length }}
                            </span>
                          </div>
                          <div class="flex items-center gap-1 text-sm">
                            <Icon name="ph:users-duotone" class="w-4 h-4" />
                            <span class="font-sans">
                              {{ item.team.length }}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="flex items-center justify-between px-5 py-3 border-t rounded-b-xl border-muted-200 dark:border-muted-700 bg-muted-50 dark:bg-muted-700/50"
                    >
                      <div>
                        <p class="font-sans text-sm text-muted-400">
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
