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
  <div class="mx-auto w-full max-w-5xl">
    <div class="mx-auto mt-6 flex w-full max-w-sm items-center justify-center">
      <BaseInput
        v-model="searchTerms"
        icon="lucide:search"
        placeholder="Search..."
        shape="full"
        :classes="{
          wrapper: 'w-full',
          input: 'h-12 !ps-12',
          icon: 'h-12 w-12 [& > svg]:!w-7 [& > svg]:!h-7',
        }"
      />
    </div>
    <div class="mb-12 mt-2 text-center">
      <BaseText size="sm" class="text-muted-400"
        >78 results for "internal projects"</BaseText
      >
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
          />
          <img
            class="hidden dark:block"
            src="/img/illustrations/placeholders/flat/placeholder-search-4-dark.svg"
            alt="Placeholder image"
          />
        </template>
      </BasePlaceholderPage>
    </div>
    <div v-else class="grid grid-cols-12 gap-6">
      <div class="col-span-12 sm:col-span-4">
        <div class="flex flex-col gap-6">
          <BaseCard class="p-6">
            <BaseHeading as="h3" weight="medium" size="md" class="mb-4">
              Publication
            </BaseHeading>
            <ul class="space-y-4">
              <li class="flex items-center justify-between">
                <BaseCheckbox
                  v-model="filters.publication.new"
                  color="primary"
                  shape="full"
                  label="Newly added"
                  :classes="{
                    label: 'text-xs',
                  }"
                />
                <BaseTag shape="full" condensed>24</BaseTag>
              </li>
              <li class="flex items-center justify-between">
                <BaseCheckbox
                  v-model="filters.publication.updated"
                  color="primary"
                  shape="full"
                  label="Recently updated"
                  :classes="{
                    label: 'text-xs',
                  }"
                />
                <BaseTag shape="full" condensed>39</BaseTag>
              </li>
              <li class="flex items-center justify-between">
                <BaseCheckbox
                  v-model="filters.publication.upvoted"
                  color="primary"
                  shape="full"
                  label="Upvoted"
                  :classes="{
                    label: 'text-xs',
                  }"
                />
                <BaseTag shape="full" condensed>17</BaseTag>
              </li>
            </ul>
          </BaseCard>
          <BaseCard class="p-6">
            <BaseHeading as="h3" weight="medium" size="md" class="mb-4">
              Topics
            </BaseHeading>
            <ul class="space-y-4">
              <li class="flex items-center justify-between">
                <BaseCheckbox
                  v-model="filters.topics.engineering"
                  color="primary"
                  shape="full"
                  label="Engineering"
                  :classes="{
                    label: 'text-xs',
                  }"
                />
                <BaseTag shape="full" condensed>62</BaseTag>
              </li>
              <li class="flex items-center justify-between">
                <BaseCheckbox
                  v-model="filters.topics.software"
                  color="primary"
                  shape="full"
                  label="Software"
                  :classes="{
                    label: 'text-xs',
                  }"
                />
                <BaseTag shape="full" condensed>148</BaseTag>
              </li>
              <li class="flex items-center justify-between">
                <BaseCheckbox
                  v-model="filters.topics.business"
                  color="primary"
                  shape="full"
                  label="Business"
                  :classes="{
                    label: 'text-xs',
                  }"
                />
                <BaseTag shape="full" condensed>23</BaseTag>
              </li>
              <li class="flex items-center justify-between">
                <BaseCheckbox
                  v-model="filters.topics.management"
                  color="primary"
                  shape="full"
                  label="Management"
                  :classes="{
                    label: 'text-xs',
                  }"
                />
                <BaseTag shape="full" condensed>8</BaseTag>
              </li>
              <li class="flex items-center justify-between">
                <BaseCheckbox
                  v-model="filters.topics.hr"
                  color="primary"
                  shape="full"
                  label="Human Resources"
                  :classes="{
                    label: 'text-xs',
                  }"
                />
                <BaseTag shape="full" condensed>43</BaseTag>
              </li>
            </ul>
          </BaseCard>
          <BaseCard class="p-6">
            <BaseHeading as="h3" weight="medium" size="md" class="mb-4">
              Result type
            </BaseHeading>
            <ul class="space-y-4">
              <li class="flex items-center justify-between">
                <BaseCheckbox
                  v-model="filters.type.members"
                  color="primary"
                  shape="full"
                  label="Members"
                  :classes="{
                    label: 'text-xs',
                  }"
                />
                <BaseTag shape="full" condensed>12</BaseTag>
              </li>
              <li class="flex items-center justify-between">
                <BaseCheckbox
                  v-model="filters.type.projects"
                  color="primary"
                  shape="full"
                  label="Projects"
                  :classes="{
                    label: 'text-xs',
                  }"
                />
                <BaseTag shape="full" condensed>54</BaseTag>
              </li>
              <li class="flex items-center justify-between">
                <BaseCheckbox
                  v-model="filters.type.files"
                  color="primary"
                  shape="full"
                  label="Files"
                  :classes="{
                    label: 'text-xs',
                  }"
                />
                <BaseTag shape="full" condensed>31</BaseTag>
              </li>
            </ul>
          </BaseCard>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-8">
        <div
          class="border-muted-200 dark:border-muted-800 flex items-center gap-4 border-b font-sans"
        >
          <button
            type="button"
            class="border-b-2 px-3 py-4 text-sm"
            :class="
              activeFilter === 'all'
                ? 'text-muted-700 dark:text-muted-100 border-primary-500'
                : 'border-transparent text-muted-400'
            "
            @click="activeFilter = 'all'"
          >
            All
          </button>
          <button
            type="button"
            class="border-b-2 px-3 py-4 text-sm"
            :class="
              activeFilter === 'people'
                ? 'text-muted-700 dark:text-muted-100 border-primary-500'
                : 'border-transparent text-muted-400'
            "
            @click="activeFilter = 'people'"
          >
            People
          </button>
          <button
            type="button"
            class="border-b-2 px-3 py-4 text-sm"
            :class="
              activeFilter === 'project'
                ? 'text-muted-700 dark:text-muted-100 border-primary-500'
                : 'border-transparent text-muted-400'
            "
            @click="activeFilter = 'project'"
          >
            Projects
          </button>
          <button
            type="button"
            class="border-b-2 px-3 py-4 text-sm"
            :class="
              activeFilter === 'file'
                ? 'text-muted-700 dark:text-muted-100 border-primary-500'
                : 'border-transparent text-muted-400'
            "
            @click="activeFilter = 'file'"
          >
            Files
          </button>
        </div>
        <div>
          <div v-if="results.length === 0"></div>
          <div v-else class="space-y-4 py-4">
            <BaseCard
              v-for="result in filteredResults"
              :key="result.name"
              class="p-5"
            >
              <div class="flex w-full items-center gap-4">
                <BaseAvatar v-if="result.type === 'people'" :src="result.src" />
                <img
                  v-else-if="result.type === 'project'"
                  class="h-10 w-10 shrink-0 rounded-full object-cover object-center"
                  :src="result.src"
                  :alt="result.name"
                />
                <img
                  v-else-if="result.type === 'file'"
                  class="h-10 w-10 shrink-0"
                  :src="result.src"
                  :alt="result.name"
                />
                <div>
                  <BaseHeading as="h3" weight="medium" size="sm">
                    {{ result.name }}
                  </BaseHeading>
                  <BaseText size="xs" class="text-muted-400">
                    {{ result.subtext }}
                  </BaseText>
                </div>
                <div class="ms-auto">
                  <BaseButtonIcon
                    v-if="result.type === 'people'"
                    :to="result.url"
                    shape="full"
                    condensed
                    data-tooltip="View profile"
                  >
                    <Icon name="lucide:arrow-right" />
                  </BaseButtonIcon>
                  <BaseButtonIcon
                    v-else-if="result.type === 'project'"
                    :to="result.url"
                    shape="full"
                    condensed
                    data-tooltip="View project"
                  >
                    <Icon name="lucide:arrow-right" />
                  </BaseButtonIcon>
                  <BaseButtonIcon
                    v-else-if="result.type === 'file'"
                    :to="result.url"
                    shape="full"
                    condensed
                    data-tooltip="Download file"
                  >
                    <Icon name="lucide:arrow-down" />
                  </BaseButtonIcon>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
