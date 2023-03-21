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
        <BaseButton color="primary" class="w-full sm:w-32" shape="curved">
          <Icon name="lucide:plus" class="w-4 h-4" />
          <span>New</span>
        </BaseButton>
      </template>
      <div class="space-y-10">
        <div>
          <div v-if="!pending && data?.recent.length === 0">
            <div class="p-6 rounded-xl bg-muted-200 dark:bg-muted-800/60">
              <BaseHeading tag="h4" size="lg" weight="medium">
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
                class="mb-4 font-sans text-xs font-semibold uppercase text-muted-400"
              >
                Recently Viewed
              </h4>
            </div>
            <div
              class="grid sm:grid-cols-2 ltablet:grid-cols-4 lg:grid-cols-4 gap-4"
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
                  class="block group"
                  :to="`/layouts/projects/details/${item.slug}`"
                >
                  <BaseCard
                    shape="curved"
                    elevated-hover
                    class="p-5 group-hover:!border-primary-500"
                  >
                    <div class="flex gap-2 mb-6">
                      <BaseAvatar
                        :src="item.customer.logo"
                        size="sm"
                        shape="straight"
                        mask="blob"
                        :tooltip="item.name"
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
                          {{ item.customer.name }} | {{ item.customer.text }}
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
                          shape="straight"
                          mask="blob"
                          :tooltip="stack.name"
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
                          class="rounded-lg"
                        />
                      </div>
                      <div class="flex gap-2 mb-6">
                        <BaseAvatar
                          :src="item.customer.logo"
                          size="sm"
                          shape="straight"
                          mask="blob"
                          :tooltip="item.name"
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
                            shape="straight"
                            mask="blob"
                            :tooltip="stack.name"
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
