<script setup lang="ts">
definePageMeta({
  title: 'Project List',
  preview: {
    title: 'Project details hub',
    description: 'For displaying recent projects',
    categories: ['layouts', 'projects'],
    src: '/img/screens/layouts-projects-details-hub.png',
    srcDark: '/img/screens/layouts-projects-details-hub-dark.png',
    order: 71,
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
  <div class="mx-auto max-w-2xl">
    <div v-if="!pending && data?.recent.length === 0">
      <div class="bg-muted-200 dark:bg-muted-800/60 rounded-xl p-6">
        <BaseHeading tag="h4" size="lg" weight="medium">
          No projects
        </BaseHeading>
        <BaseParagraph size="sm" class="text-muted-400">
          You've recently viewed these projects.
        </BaseParagraph>
      </div>
    </div>
    <div v-else>
      <div class="my-6 text-center">
        <Icon
          name="ph:square-half-duotone"
          class="text-primary-500 mx-auto mb-2 h-10 w-10"
        />
        <BaseHeading tag="h4" size="2xl" weight="medium">
          Your recent projects
        </BaseHeading>
        <BaseParagraph size="sm" class="text-muted-400">
          Here are your recently viewed projects.
        </BaseParagraph>
        <div class="mx-auto mt-6 flex max-w-xs justify-center">
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
                :to="`/layouts/projects/details/${item.slug}`"
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
      <div class="grid gap-4 sm:grid-cols-2">
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
              shape="curved"
              elevated-hover
              class="group-hover:!border-primary-500 p-5"
            >
              <div class="mb-6 flex gap-2">
                <BaseAvatar
                  :src="item.customer.logo"
                  size="sm"
                  shape="full"
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
                    shape="full"
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
