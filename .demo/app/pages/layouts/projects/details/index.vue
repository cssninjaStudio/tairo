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
const selectedProject = ref<NonNullable<typeof data.value>['data'][0]>()
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20 dark:[--color-input-default-bg:var(--color-muted-950)]">
    <div class="mx-auto max-w-2xl">
      <div v-if="!pending && data?.recent.length === 0">
        <div class="bg-muted-200 dark:bg-muted-800/60 rounded-xl p-6">
          <BaseHeading
            tag="h4"
            size="lg"
            weight="medium"
          >
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
            name="solar:widget-2-linear"
            class="text-primary-500 mx-auto mb-2 size-10"
          />
          <BaseHeading
            tag="h4"
            size="2xl"
            weight="medium"
          >
            Your recent projects
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400">
            Here are your recently viewed projects.
          </BaseParagraph>
          <div class="mx-auto mt-6 flex max-w-xs justify-center">
            <BaseField
              v-if="data?.data"
              label="Search projects"
            >
              <BaseAutocomplete
                :display-value="(v: any) => v?.name"
                by="name"
                rounded="lg"
                icon="lucide:search"
                placeholder="Search..."
                @update:model-value="(v: any) => $router.push(`/layouts/projects/details/${v?.slug}`)"
              >
                <BaseAutocompleteItem v-for="item in data.data" :key="item.id" :value="item">
                  <span class="flex items-start gap-2 py-2">
                    <BaseAvatar :src="item.customer.logo" size="xs" class="bg-muted-100 dark:bg-muted-800" />
                    <span class="flex flex-col items-start gap-1">
                      <span class="text-xs font-semibold leading-none">{{ item.name }}</span>
                      <span class="font-sans text-xs text-muted-500 dark:text-muted-400">
                        {{ `${item.customer?.name} | ${item.customer.text}` }}
                      </span>
                    </span>
                  </span>
                </BaseAutocompleteItem>
              </BaseAutocomplete>
            </BaseField>
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
                rounded="lg"
                elevated-hover
                class="group-hover:border-primary-500! p-5"
              >
                <div class="mb-6 flex gap-2">
                  <BaseTooltip>
                    <BaseAvatar
                      :src="item.customer.logo"
                      size="sm"
                      rounded="full"
                      :content="item?.name"
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
                      {{ item?.name }}
                    </BaseHeading>
                    <BaseParagraph size="xs" class="text-muted-600 dark:text-muted-400">
                      {{ item.customer?.name }} | {{ item.customer.text }}
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
                        rounded="full"
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
  </div>
</template>
