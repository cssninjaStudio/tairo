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
    return $fetch('/api/company/candidates/')
  } catch (error: any) {
    // log error and re-throw error
    console.log('An error occured while retreiving candidates info')
    throw error
  }
})

// Simplified useFetch() method as a superset of useAsyncData()
// const { data, pending, error, refresh } = await useFetch('/api/company/candidates/')

const filteredItems = computed(() => {
  if (data.value) {
    if (!filter.value) {
      return data.value
    }
    const filterRe = new RegExp(filter.value, 'i')
    return data.value.filter((item) => {
      return [item.username, item.location, item.position].some((item) =>
        item.match(filterRe),
      )
    })
  }
})

function statusColor(itemStatus: string) {
  switch (itemStatus) {
    case 'online':
      return 'success'
    case 'working':
      return 'info'
    case 'suspended':
      return 'warning'
    default:
      break
  }
}
</script>

<template>
  <div>
    <ContentWrapper>
      <template #left>
        <BaseInput
          v-model="filter"
          icon="lucide:search"
          placeholder="Filter users..."
          :classes="{
            wrapper: 'w-full sm:w-auto',
          }"
        />
      </template>
      <template #right>
        <BaseButton class="w-full sm:w-32">Manage</BaseButton>
        <BaseButton color="primary" class="w-full sm:w-32">
          <Icon name="lucide:plus" class="w-4 h-4" />
          <span>Add User</span>
        </BaseButton>
      </template>
      <div>
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
              spaced
            >
              <template #start>
                <WidgetFlexTableStart
                  label="user"
                  :hideLabel="index > 0"
                  :title="item.username"
                  :subtitle="item.position"
                  :avatar="item.src"
                  :badge="item.badge"
                  :initials="item.initials"
                />
              </template>
              <template #end>
                <WidgetFlexTableCell
                  label="location"
                  :hideLabel="index > 0"
                  class="w-full sm:w-40"
                >
                  <span
                    class="font-sans text-sm text-muted-500 dark:text-muted-400"
                  >
                    {{ item.location }}
                  </span>
                </WidgetFlexTableCell>
                <WidgetFlexTableCell
                  label="industry"
                  :hideLabel="index > 0"
                  class="w-full sm:w-40"
                >
                  <span
                    class="font-sans text-sm text-muted-500 dark:text-muted-400"
                  >
                    {{ item.industry }}
                  </span>
                </WidgetFlexTableCell>
                <WidgetFlexTableCell
                  label="status"
                  :hideLabel="index > 0"
                  class="w-full sm:w-16"
                >
                  <BaseTag
                    :color="statusColor(item.status)"
                    shape="full"
                    flavor="pastel"
                    compact
                    class="capitalize"
                  >
                    {{ item.status }}
                  </BaseTag>
                </WidgetFlexTableCell>
                <WidgetFlexTableCell
                  label="relations"
                  :hideLabel="index > 0"
                  tablet-hidden
                  class="w-full sm:w-[160px]"
                >
                  <BaseAvatarGroup
                    size="xs"
                    :avatars="item.relations"
                    :limit="2"
                  />
                </WidgetFlexTableCell>
                <WidgetFlexTableCell label="action" :hideLabel="index > 0">
                  <BaseButtonAction color="muted">
                    <span>View</span>
                  </BaseButtonAction>
                </WidgetFlexTableCell>
              </template>
            </WidgetFlexTableRow>
          </TransitionGroup>
        </div>
        <div v-if="filteredItems?.length !== 0" class="mt-4">
          <BasePagination
            :total="100"
            :item-per-page="10"
            :total-items="100"
            :current="1"
            :limit="10"
            shape="curved"
          />
        </div>
      </div>
    </ContentWrapper>
  </div>
</template>
