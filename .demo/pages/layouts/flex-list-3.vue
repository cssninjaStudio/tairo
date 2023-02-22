<script setup lang="ts">
definePageMeta({
  title: 'Flex List',
})

const filter = ref('')

const { data, pending, error, refresh } = await useAsyncData(async () => {
  try {
    // Create an artificial delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // after the delay is over
    return $fetch('/api/courses/')
  } catch (error: any) {
    // log error and re-throw error
    console.log('An error occured while retreiving courses info')
    throw error
  }
})

// Simplified useFetch() method as a superset of useAsyncData()
// const { data, pending, error, refresh } = await useFetch('/api/courses/')

const filteredItems = computed(() => {
  if (data.value) {
    if (!filter.value) {
      return data.value
    }
    const filterRe = new RegExp(filter.value, 'i')
    return data.value.filter((item) => {
      return [item.name, item.category].some((item) => item.match(filterRe))
    })
  }
})

const difficultyLabel = (itemDifficulty: number) => {
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
    <ContentWrapperTabbed :labels="['All', 'Saved']" reverse shape="curved">
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
        <div v-if="filteredItems?.length === 0">
          <BasePlaceholderPage
            title="No matching results"
            subtitle="Looks like we couldn't find any matching results for your search terms. Try other search terms."
          >
            <template #image>
              <NuxtImg
                class="block dark:hidden"
                src="/img/illustrations/placeholders/flat/placeholder-search-4.svg"
                alt="Placeholder image"
              />
              <NuxtImg
                class="hidden dark:block"
                src="/img/illustrations/placeholders/flat/placeholder-search-4-dark.svg"
                alt="Placeholder image"
              />
            </template>
          </BasePlaceholderPage>
        </div>
        <div v-else class="pt-6 space-y-2">
          <TransitionGroup
            enter-active-class="transform-gpu"
            enter-from-class="opacity-0 -translate-x-full"
            enter-to-class="opacity-100 translate-x-0"
            leave-active-class="absolute transform-gpu"
            leave-from-class="opacity-100 translate-x-0"
            leave-to-class="opacity-0 -translate-x-full"
          >
            <WidgetFlexTableRow
              v-for="(item, index) in filteredItems"
              :key="index"
              shape="rounded"
            >
              <template #start>
                <WidgetFlexTableStart
                  label="user"
                  :hideLabel="index > 0"
                  :title="item.name"
                  :subtitle="item.category"
                  :picture="item.picture"
                />
              </template>
              <template #end>
                <WidgetFlexTableCell
                  label="category"
                  :hideLabel="index > 0"
                  tablet-hidden
                  class="w-full sm:w-36"
                >
                  <span
                    class="font-sans text-sm text-muted-500 dark:text-muted-400"
                  >
                    {{ item.category }}
                  </span>
                </WidgetFlexTableCell>
                <WidgetFlexTableCell
                  label="main skill"
                  :hideLabel="index > 0"
                  class="w-full sm:w-32"
                >
                  <div
                    class="w-full flex items-center justify-end sm:justify-center gap-1"
                  >
                    <Icon
                      :name="item.skill.icon"
                      class="w-5 h-5 text-primary-500"
                    />
                    <span
                      class="font-sans text-sm text-muted-500 dark:text-muted-400"
                    >
                      {{ item.skill.name }}
                    </span>
                  </div>
                </WidgetFlexTableCell>
                <WidgetFlexTableCell
                  label="difficulty"
                  :hideLabel="index > 0"
                  class="w-full sm:w-36"
                >
                  <div
                    class="w-full flex justify-end sm:justify-center gap-1"
                    :tooltip="difficultyLabel(item.difficulty)"
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
                </WidgetFlexTableCell>
                <WidgetFlexTableCell label="action" :hideLabel="index > 0">
                  <BaseButtonAction color="muted">
                    <span>View</span>
                  </BaseButtonAction>
                </WidgetFlexTableCell>
              </template>
            </WidgetFlexTableRow>
          </TransitionGroup>

          <div v-if="filteredItems?.length !== 0" class="pt-6">
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
      </template>
      <template #tab-2>
        <BasePlaceholderPage
          title="No saved courses"
          subtitle="Looks like you don't have any saved courses for the moment. Come back when you have some."
        >
          <template #image>
            <NuxtImg
              class="block dark:hidden"
              src="/img/illustrations/placeholders/flat/placeholder-courses.svg"
              alt="Placeholder image"
            />
            <NuxtImg
              class="hidden dark:block"
              src="/img/illustrations/placeholders/flat/placeholder-courses-dark.svg"
              alt="Placeholder image"
            />
          </template>
        </BasePlaceholderPage>
      </template>
    </ContentWrapperTabbed>
  </div>
</template>
