<script setup lang="ts">
definePageMeta({
  title: 'Flex List',
  preview: {
    title: 'Flex list 3',
    description: 'For list views and collections',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-list-flex-3.png',
    srcDark: '/img/screens/layouts-list-flex-3-dark.png',
    order: 43,
  },
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

const { data, pending, error, refresh } = await useFetch('/api/courses', {
  query,
})

function difficultyLabel(itemDifficulty: number) {
  switch (itemDifficulty) {
    case 1:
      return 'Very easy'
    case 2:
      return 'Easy'
    case 3:
      return 'Normal'
    case 4:
      return 'Hard'
    case 5:
      return 'Expert'
    default:
      break
  }
}
</script>

<template>
  <div>
    <TairoContentWrapperTabbed
      :labels="['All', 'Saved']"
      reverse
      shape="curved"
    >
      <template #left>
        <BaseInput
          v-model="filter"
          shape="curved"
          icon="lucide:search"
          placeholder="Filter courses..."
          :classes="{
            wrapper: 'w-full sm:w-auto',
          }"
        />
      </template>
      <template #tab-1>
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
        <div v-else class="space-y-2 pt-6">
          <TransitionGroup
            enter-active-class="transform-gpu"
            enter-from-class="opacity-0 -translate-x-full"
            enter-to-class="opacity-100 translate-x-0"
            leave-active-class="absolute transform-gpu"
            leave-from-class="opacity-100 translate-x-0"
            leave-to-class="opacity-0 -translate-x-full"
          >
            <DemoFlexTableRow
              v-for="(item, index) in data?.data"
              :key="index"
              shape="rounded"
            >
              <template #start>
                <DemoFlexTableStart
                  label="user"
                  :hide-label="index > 0"
                  :title="item.name"
                  :subtitle="item.category"
                  :picture="item.picture"
                />
              </template>
              <template #end>
                <DemoFlexTableCell
                  label="category"
                  :hide-label="index > 0"
                  tablet-hidden
                  class="w-full sm:w-36"
                >
                  <span
                    class="text-muted-500 dark:text-muted-400 font-sans text-sm"
                  >
                    {{ item.category }}
                  </span>
                </DemoFlexTableCell>
                <DemoFlexTableCell
                  label="main skill"
                  :hide-label="index > 0"
                  class="w-full sm:w-32"
                >
                  <div
                    class="flex w-full items-center justify-end gap-1 sm:justify-center"
                  >
                    <Icon
                      :name="item.skill.icon"
                      class="text-primary-500 h-5 w-5"
                    />
                    <span
                      class="text-muted-500 dark:text-muted-400 font-sans text-sm"
                    >
                      {{ item.skill.name }}
                    </span>
                  </div>
                </DemoFlexTableCell>
                <DemoFlexTableCell
                  label="difficulty"
                  :hide-label="index > 0"
                  class="w-full sm:w-36"
                >
                  <div
                    class="flex w-full justify-end gap-1 sm:justify-center"
                    :data-tooltip="difficultyLabel(item.difficulty)"
                  >
                    <span
                      class="block h-2 w-2 rounded-full"
                      :class="
                        item.difficulty >= 1
                          ? 'bg-primary-500'
                          : 'bg-muted-200 dark:bg-muted-700'
                      "
                    ></span>
                    <span
                      class="block h-2 w-2 rounded-full"
                      :class="
                        item.difficulty >= 2
                          ? 'bg-primary-500'
                          : 'bg-muted-200 dark:bg-muted-700'
                      "
                    ></span>
                    <span
                      class="block h-2 w-2 rounded-full"
                      :class="
                        item.difficulty >= 3
                          ? 'bg-primary-500'
                          : 'bg-muted-200 dark:bg-muted-700'
                      "
                    ></span>
                    <span
                      class="block h-2 w-2 rounded-full"
                      :class="
                        item.difficulty >= 4
                          ? 'bg-primary-500'
                          : 'bg-muted-200 dark:bg-muted-700'
                      "
                    ></span>
                    <span
                      class="block h-2 w-2 rounded-full"
                      :class="
                        item.difficulty === 5
                          ? 'bg-primary-500'
                          : 'bg-muted-200 dark:bg-muted-700'
                      "
                    ></span>
                  </div>
                </DemoFlexTableCell>
                <DemoFlexTableCell label="action" :hide-label="index > 0">
                  <BaseButtonAction color="muted">
                    <span>View</span>
                  </BaseButtonAction>
                </DemoFlexTableCell>
              </template>
            </DemoFlexTableRow>
          </TransitionGroup>

          <div v-if="!pending && data?.data.length !== 0" class="pt-6">
            <BasePagination
              :total-items="data?.total ?? 0"
              :item-per-page="perPage"
              :current-page="page"
              shape="full"
            />
          </div>
        </div>
      </template>
      <template #tab-2>
        <BasePlaceholderPage
          title="No saved courses"
          subtitle="Looks like you don't have any saved courses for the moment. Come back when you have some."
        >
          <template #image>
            <img
              class="block dark:hidden"
              src="/img/illustrations/placeholders/flat/placeholder-courses.svg"
              alt="Placeholder image"
            />
            <img
              class="hidden dark:block"
              src="/img/illustrations/placeholders/flat/placeholder-courses-dark.svg"
              alt="Placeholder image"
            />
          </template>
        </BasePlaceholderPage>
      </template>
    </TairoContentWrapperTabbed>
  </div>
</template>
