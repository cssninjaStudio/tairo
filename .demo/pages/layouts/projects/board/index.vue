<script setup lang="ts">
definePageMeta({
  title: 'Board List',
  preview: {
    title: 'Project board hub',
    description: 'For displaying recent projects',
    categories: ['layouts', 'projects'],
    src: '/img/screens/layouts-projects-board-hub.png',
    srcDark: '/img/screens/layouts-projects-board-hub-dark.png',
    order: 73,
  },
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
const selectedProject = ref('')
</script>

<template>
  <div class="ltablet:mt-20 mx-auto max-w-4xl lg:mt-20">
    <div v-if="!pending && data?.recent.length === 0">
      <div class="bg-muted-200 dark:bg-muted-800/60 rounded-xl p-6">
        <BaseHeading tag="h4" size="lg" weight="medium">
          No projects
        </BaseHeading>
        <BaseParagraph size="sm" class="text-muted-400">
          Looks like you don't have any project to view.
        </BaseParagraph>
      </div>
    </div>
    <div v-else class="grid grid-cols-12 gap-6">
      <div class="ltablet:col-span-5 col-span-12 mb-6 lg:col-span-5">
        <div
          class="ltablet:max-w-sm bg-muted-200 dark:bg-muted-800/60 rounded-xl p-8 lg:max-w-sm"
        >
          <div class="mb-8 max-w-sm">
            <Icon
              name="ph:kanban-duotone"
              class="text-primary-500 mb-2 h-10 w-10"
            />
            <BaseHeading tag="h4" size="xl" weight="medium" class="mb-2">
              Your recent boards
            </BaseHeading>
            <BaseParagraph size="sm" class="text-muted-400">
              Here are the most recent projects that have been viewed in your
              team. Search for more by entering the project name below.
            </BaseParagraph>
          </div>
          <BaseAutocomplete
            v-model="selectedProject"
            :items="data?.data"
            :display-value="(item) => item.name"
            shape="curved"
            icon="lucide:search"
            placeholder="Search..."
            label="Search projects"
            label-float
            clearable
          >
            <template
              #empty="{
                pending: pendingAutocomplete,
                query: queryAutocomplete,
              }"
            >
              <BasePlaceload v-if="pendingAutocomplete" />
              <span
                v-else-if="!queryAutocomplete"
                class="text-muted-700 dark:text-muted-400 cursor-default select-none"
              >
                Ex: Delivery app project...
              </span>
            </template>
            <template #item="{ item, selected }">
              <NuxtLink
                :to="`/layouts/projects/board/${item.slug}`"
                class="block"
              >
                <BaseAutocompleteItem
                  :value="{
                    name: item.name,
                    text: `${item.customer.name} | ${item.customer.text}`,
                    media: item.customer.logo,
                  }"
                  :selected="selected"
                />
              </NuxtLink>
            </template>
          </BaseAutocomplete>
        </div>
      </div>

      <div
        class="ltablet:col-span-7 col-span-12 grid gap-4 sm:grid-cols-2 lg:col-span-7"
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
            v-for="(item, r) in data?.data.slice(0, 6)"
            :key="r"
            class="group block"
            :to="`/layouts/projects/board/${item.slug}`"
          >
            <BaseCard
              shape="curved"
              elevated-hover
              class="group-hover:!border-primary-500 p-5"
            >
              <div class="mb-6 flex gap-2">
                <BaseAvatar
                  :src="item.customer.logo"
                  size="sm"
                  shape="straight"
                  mask="blob"
                  :data-tooltip="item.customer.name"
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
                    :data-tooltip="stack.name"
                    class="bg-muted-100 dark:bg-muted-700"
                  />
                </div>
                <div class="text-muted-400 flex items-center gap-4">
                  <div class="flex items-center gap-1 text-sm">
                    <Icon name="ph:paperclip-duotone" class="h-4 w-4" />
                    <span class="font-sans">
                      {{ item.files.length }}
                    </span>
                  </div>
                  <div class="flex items-center gap-1 text-sm">
                    <Icon name="ph:users-duotone" class="h-4 w-4" />
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
</template>
