<script setup lang="ts">
definePageMeta({
  title: 'Search Results',
  preview: {
    title: 'Search results',
    description: 'For displaying search results',
    categories: ['layouts'],
    src: '/img/screens/layouts-subpages-search-results.png',
    srcDark: '/img/screens/layouts-subpages-search-results-dark.png',
    order: 82,
  },
})

const { data, pending, error, refresh } = await useFetch('/api/search')

const searchTerms = ref('internal projects')
const results = ref()
const filters = reactive({
  publication: {
    new: false,
    updated: false,
    upvoted: false,
  },
  topics: {
    engineering: false,
    software: false,
    business: false,
    management: false,
    hr: false,
  },
  type: {
    members: false,
    projects: false,
    files: false,
  },
})

if (data.value) {
  results.value = data.value
}

const activeFilter = ref('all')
const filteredResults = computed(() => {
  if (activeFilter.value === 'all') {
    return results.value
  }
  return results.value.filter(
    (result: any) => result.type === activeFilter.value,
  )
})
</script>

<template>
  <div class="w-full px-4 md:px-6 lg:px-8 pb-20 dark:[--color-input-default-bg:var(--color-muted-950)]">
    <div class="my-6 flex w-full items-center gap-3">
      <TairoInput
        v-model="searchTerms"
        icon="lucide:search"
        placeholder="Search..."
        rounded="full"
      />
      <div>
        <BaseText
          size="sm"
          class="text-muted-400"
        >
          78 results found
        </BaseText>
      </div>
    </div>
    <div v-if="results === null">
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
      <div
        class="border-muted-200 dark:border-muted-800 flex items-center gap-4 border-b font-sans"
      >
        <button
          type="button"
          class="cursor-pointer border-b-2 p-3 text-sm"
          :class="
            activeFilter === 'all'
              ? 'text-muted-700 dark:text-muted-100 border-primary-500'
              : 'border-transparent text-muted-400 hover:text-muted-700 dark:hover:text-muted-100'
          "
          @click="activeFilter = 'all'"
        >
          All
        </button>
        <button
          type="button"
          class="cursor-pointer border-b-2 p-3 text-sm"
          :class="
            activeFilter === 'people'
              ? 'text-muted-700 dark:text-muted-100 border-primary-500'
              : 'border-transparent text-muted-400 hover:text-muted-700 dark:hover:text-muted-100'
          "
          @click="activeFilter = 'people'"
        >
          People
        </button>
        <button
          type="button"
          class="cursor-pointer border-b-2 p-3 text-sm"
          :class="
            activeFilter === 'project'
              ? 'text-muted-700 dark:text-muted-100 border-primary-500'
              : 'border-transparent text-muted-400 hover:text-muted-700 dark:hover:text-muted-100'
          "
          @click="activeFilter = 'project'"
        >
          Projects
        </button>
        <button
          type="button"
          class="cursor-pointer border-b-2 p-3 text-sm"
          :class="
            activeFilter === 'file'
              ? 'text-muted-700 dark:text-muted-100 border-primary-500'
              : 'border-transparent text-muted-400 hover:text-muted-700 dark:hover:text-muted-100'
          "
          @click="activeFilter = 'file'"
        >
          Files
        </button>
      </div>
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 lg:col-span-4 xl:col-span-3">
          <div class="flex flex-col gap-4 mt-4">
            <BaseCard rounded="md" class="p-4">
              <BaseHeading
                as="h3"
                weight="medium"
                size="md"
                class="mb-4 text-muted-900 dark:text-muted-100"
              >
                Publication
              </BaseHeading>
              <ul class="space-y-4">
                <li class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="filters.publication.new"
                    variant="default"
                    label="Newly added"
                    :classes="{
                      label: 'text-xs',
                    }"
                  />
                  <BaseTag rounded="full" size="sm">
                    24
                  </BaseTag>
                </li>
                <li class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="filters.publication.updated"
                    variant="default"
                    label="Recently updated"
                    :classes="{
                      label: 'text-xs',
                    }"
                  />
                  <BaseTag rounded="full" size="sm">
                    39
                  </BaseTag>
                </li>
                <li class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="filters.publication.upvoted"
                    variant="default"
                    label="Upvoted"
                    :classes="{
                      label: 'text-xs',
                    }"
                  />
                  <BaseTag rounded="full" size="sm">
                    17
                  </BaseTag>
                </li>
              </ul>
            </BaseCard>
            <BaseCard rounded="md" class="p-4">
              <BaseHeading
                as="h3"
                weight="medium"
                size="md"
                class="mb-4 text-muted-900 dark:text-muted-100"
              >
                Topics
              </BaseHeading>
              <ul class="space-y-4">
                <li class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="filters.topics.engineering"
                    variant="default"
                    label="Engineering"
                    :classes="{
                      label: 'text-xs',
                    }"
                  />
                  <BaseTag rounded="full" size="sm">
                    62
                  </BaseTag>
                </li>
                <li class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="filters.topics.software"
                    variant="default"
                    label="Software"
                    :classes="{
                      label: 'text-xs',
                    }"
                  />
                  <BaseTag rounded="full" size="sm">
                    148
                  </BaseTag>
                </li>
                <li class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="filters.topics.business"
                    variant="default"
                    label="Business"
                    :classes="{
                      label: 'text-xs',
                    }"
                  />
                  <BaseTag rounded="full" size="sm">
                    23
                  </BaseTag>
                </li>
                <li class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="filters.topics.management"
                    variant="default"
                    label="Management"
                    :classes="{
                      label: 'text-xs',
                    }"
                  />
                  <BaseTag rounded="full" size="sm">
                    8
                  </BaseTag>
                </li>
                <li class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="filters.topics.hr"
                    variant="default"
                    label="Human Resources"
                    :classes="{
                      label: 'text-xs',
                    }"
                  />
                  <BaseTag rounded="full" size="sm">
                    43
                  </BaseTag>
                </li>
              </ul>
            </BaseCard>
            <BaseCard rounded="md" class="p-4">
              <BaseHeading
                as="h3"
                weight="medium"
                size="md"
                class="mb-4 text-muted-900 dark:text-muted-100"
              >
                Result type
              </BaseHeading>
              <ul class="space-y-4">
                <li class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="filters.type.members"
                    variant="default"
                    label="Members"
                    :classes="{
                      label: 'text-xs',
                    }"
                  />
                  <BaseTag rounded="full" size="sm">
                    12
                  </BaseTag>
                </li>
                <li class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="filters.type.projects"
                    variant="default"
                    label="Projects"
                    :classes="{
                      label: 'text-xs',
                    }"
                  />
                  <BaseTag rounded="full" size="sm">
                    54
                  </BaseTag>
                </li>
                <li class="flex items-center justify-between">
                  <BaseCheckbox
                    v-model="filters.type.files"
                    variant="default"
                    label="Files"
                    :classes="{
                      label: 'text-xs',
                    }"
                  />
                  <BaseTag rounded="full" size="sm">
                    31
                  </BaseTag>
                </li>
              </ul>
            </BaseCard>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-8 xl:col-span-9">
          <div>
            <div v-if="results.length === 0" />
            <div v-else class="space-y-4 py-4">
              <BaseCard
                v-for="result in filteredResults"
                :key="result.name"
                rounded="md"
                class="p-4"
              >
                <div class="flex w-full items-center gap-4">
                  <BaseAvatar v-if="result.type === 'people'" :src="result.src" />
                  <img
                    v-else-if="result.type === 'project'"
                    class="size-10 shrink-0 rounded-full object-cover object-center"
                    :src="result.src"
                    :alt="result.name"
                  >
                  <img
                    v-else-if="result.type === 'file'"
                    class="size-10 shrink-0"
                    :src="result.src"
                    :alt="result.name"
                  >
                  <div>
                    <BaseHeading
                      as="h3"
                      weight="medium"
                      size="sm"
                      class="text-muted-900 dark:text-muted-100"
                      lead="tight"
                    >
                      {{ result.name }}
                    </BaseHeading>
                    <BaseText size="xs" class="text-muted-600 dark:text-muted-400">
                      {{ result.subtext }}
                    </BaseText>
                  </div>
                  <div class="ms-auto">
                    <BaseTooltip v-if="result.type === 'people'" content="View profile">
                      <BaseButton
                        :to="result.url"
                        rounded="full"
                        size="icon-sm"
                      >
                        <Icon name="lucide:arrow-right" />
                      </BaseButton>
                    </BaseTooltip>
                    <BaseTooltip v-else-if="result.type === 'project'" content="View project">
                      <BaseButton
                        :to="result.url"
                        rounded="full"
                        size="icon-sm"
                      >
                        <Icon name="lucide:arrow-right" />
                      </BaseButton>
                    </BaseTooltip>
                    <BaseTooltip v-else-if="result.type === 'file'" content="Download file">
                      <BaseButton
                        :to="result.url"
                        rounded="full"
                        size="icon-sm"
                      >
                        <Icon name="lucide:arrow-down" />
                      </BaseButton>
                    </BaseTooltip>
                  </div>
                </div>
              </BaseCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
