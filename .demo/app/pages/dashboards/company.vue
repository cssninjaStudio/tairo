<script setup lang="ts">
definePageMeta({
  title: 'Company',
  preview: {
    title: 'Company dashboard',
    description: 'For corporate business',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-company.png',
    srcDark: '/img/screens/dashboards-company-dark.png',
    order: 11,
  },
})

const team = shallowRef([
  {
    id: '0',
    src: '/img/avatars/22.svg',
    name: 'Anna Vrinkof',
    role: 'UI/UX designer',
    expertise: 'UX Design',
    rate: 49,
    status: 'Available',
  },
  {
    id: '1',
    src: '/img/avatars/3.svg',
    name: 'John Cambell',
    role: 'Sales manager',
    expertise: 'Management',
    rate: 74,
    status: 'Hired',
  },
  {
    id: '2',
    src: '/img/avatars/9.svg',
    name: 'Beth Delanoe',
    role: 'Product designer',
    expertise: 'Product',
    rate: 43,
    status: 'Available',
  },
  {
    id: '3',
    src: '/img/avatars/14.svg',
    name: 'Andrew Higgs',
    role: 'Project manager',
    expertise: 'Project',
    rate: 69,
    status: 'New',
  },
  {
    id: '4',
    src: '/img/avatars/15.svg',
    name: 'Linda Fox',
    role: 'Frontend developer',
    expertise: 'Development',
    rate: 56,
    status: 'Hired',
  },
  {
    id: '5',
    src: '/img/avatars/16.svg',
    name: 'Derek Stone',
    role: 'Backend developer',
    expertise: 'Development',
    rate: 52,
    status: 'Available',
  },
  {
    id: '6',
    src: '/img/avatars/17.svg',
    name: 'Sara Smith',
    role: 'Marketing manager',
    expertise: 'Marketing',
    rate: 47,
    status: 'New',
  },
])

const selected = ref<string[]>([])

const isAllVisibleSelected = computed(() => {
  return selected.value.length === team.value?.length
})

function toggleAllVisibleSelection() {
  if (isAllVisibleSelected.value) {
    selected.value = []
  }
  else {
    selected.value = team.value?.map(item => item.id) ?? []
  }
}

// Datepicker
const date = ref(new Date())
</script>

<template>
  <div class="relative overflow-hidden px-4 md:px-6 lg:px-8 pb-20">
    <div class="flex flex-col gap-4">
      <!-- Header -->
      <BaseCard rounded="md" class="p-4 md:p-6">
        <div
          class="divide-muted-200 dark:divide-muted-800 flex flex-wrap sm:flex-nowrap w-full items-center sm:divide-x"
        >
          <!-- Item -->
          <div class="w-1/2 sm:w-auto sm:flex-1">
            <div class="flex flex-col p-4 text-center sm:py-0">
              <Icon
                name="solar:users-group-rounded-bold-duotone"
                class="text-primary-500 mx-auto size-8 mb-1"
              />
              <h4
                class="text-muted-900 dark:text-muted-100 font-sans text-xl font-semibold"
              >
                162
              </h4>
              <p class="text-muted-600 dark:text-muted-400 font-sans text-xs">
                New users
              </p>
            </div>
          </div>
          <!-- Item -->
          <div class="w-1/2 sm:w-auto sm:flex-1">
            <div class="flex flex-col p-4 text-center sm:py-0">
              <Icon
                name="solar:card-send-bold-duotone"
                class="text-primary-500 mx-auto size-8 mb-1"
              />
              <h4
                class="text-muted-900 dark:text-muted-100 font-sans text-xl font-semibold"
              >
                $8,579
              </h4>
              <p class="text-muted-600 dark:text-muted-400 font-sans text-xs">
                Daily income
              </p>
            </div>
          </div>
          <!-- Item -->
          <div class="w-1/2 sm:w-auto sm:flex-1">
            <div class="flex flex-col p-4 text-center sm:py-0">
              <Icon
                name="solar:case-bold-duotone"
                class="text-primary-500 mx-auto size-8 mb-1"
              />
              <h4
                class="text-muted-900 dark:text-muted-100 font-sans text-xl font-semibold"
              >
                192
              </h4>
              <p class="text-muted-600 dark:text-muted-400 font-sans text-xs">
                Completed projects
              </p>
            </div>
          </div>
          <!-- Item -->
          <div class="w-1/2 sm:w-auto sm:flex-1">
            <div class="flex flex-col p-4 text-center sm:py-0">
              <Icon
                name="solar:ticker-star-bold-duotone"
                class="text-primary-500 mx-auto size-8 mb-1"
              />
              <h4
                class="text-muted-900 dark:text-muted-100 font-sans text-xl font-semibold"
              >
                32
              </h4>
              <p class="text-muted-600 dark:text-muted-400 font-sans text-xs">
                Active tickets
              </p>
            </div>
          </div>
        </div>
      </BaseCard>
      <!-- Grid -->
      <div class="grid grid-cols-12 gap-4">
        <!-- Widget -->
        <div class="lg:portrait:col-span-6 col-span-12 sm:landscape:col-span-4">
          <BaseCard rounded="md" class="h-full p-4 md:p-6">
            <DemoCompanyOverview />
          </BaseCard>
        </div>
        <!-- Widget -->
        <div class="lg:portrait:col-span-6 col-span-12 sm:landscape:col-span-4">
          <BaseCard rounded="md" class="relative h-full">
            <DemoChartAreaStats class="**:[.apexcharts-svg]:rounded-b-md" />
          </BaseCard>
        </div>
        <!-- Widget -->
        <div class="lg:portrait:col-span-12 col-span-12 sm:landscape:col-span-4">
          <BaseCard rounded="md" class="relative h-full">
            <DemoChartBarSocialChannels />
          </BaseCard>
        </div>
        <!-- Widget -->
        <div class="col-span-12">
          <TairoTable rounded="md">
            <template #header>
              <TairoTableHeading uppercase class="p-4">
                <div class="flex items-center">
                  <BaseCheckbox
                    :model-value="selected.length > 0 && !isAllVisibleSelected ? 'indeterminate' : isAllVisibleSelected"
                    name="table-1-main"
                    rounded="sm"
                    @click="toggleAllVisibleSelection"
                  />
                </div>
              </TairoTableHeading>
              <TairoTableHeading uppercase class="p-4">
                Collaborator
              </TairoTableHeading>
              <TairoTableHeading uppercase class="p-4">
                Expertise
              </TairoTableHeading>
              <TairoTableHeading uppercase class="p-4">
                Rate
              </TairoTableHeading>
              <TairoTableHeading uppercase class="p-4">
                Status
              </TairoTableHeading>
              <TairoTableHeading uppercase class="p-4">
                <span class="sr-only">View</span>
              </TairoTableHeading>
            </template>

            <BaseCheckboxGroup v-model="selected" as-child>
              <TairoTableRow v-for="member in team" :key="member.id">
                <TairoTableCell class="p-4">
                  <div class="flex items-center">
                    <BaseCheckbox :value="member.id" />
                  </div>
                </TairoTableCell>
                <TairoTableCell class="p-4">
                  <div class="flex items-center">
                    <BaseAvatar :src="member.src" size="xs" />
                    <div class="ms-3 leading-none">
                      <h4 class="font-heading text-sm font-semibold">
                        {{ member.name }}
                      </h4>
                      <p class="text-muted-600 dark:text-muted-400 font-sans text-xs">
                        {{ member.role }}
                      </p>
                    </div>
                  </div>
                </TairoTableCell>
                <TairoTableCell light class="p-4">
                  {{ member.expertise }}
                </TairoTableCell>
                <TairoTableCell>${{ member.rate }}/hour</TairoTableCell>
                <TairoTableCell class="p-4">
                  <BaseTag
                    v-if="member.status === 'Available'"
                    rounded="full"
                    variant="none"
                    class="font-medium bg-green-500/10 text-green-500"
                  >
                    {{ member.status }}
                  </BaseTag>
                  <BaseTag
                    v-else-if="member.status === 'New'"
                    rounded="full"
                    variant="none"
                    class="font-medium bg-blue-500/10 text-blue-500"
                  >
                    {{ member.status }}
                  </BaseTag>
                  <BaseTag
                    v-else-if="member.status === 'Hired'"
                    rounded="full"
                    class="font-medium"
                  >
                    {{ member.status }}
                  </BaseTag>
                </TairoTableCell>
                <TairoTableCell class="flex justify-end p-4">
                  <BaseButton size="sm" rounded="md">
                    View
                  </BaseButton>
                </TairoTableCell>
              </TairoTableRow>
            </BaseCheckboxGroup>
          </TairoTable>
        </div>
        <!-- Widget -->
        <div class="lg:portrait:col-span-12 col-span-12 sm:landscape:col-span-3">
          <BaseCard rounded="md" class="flex h-full flex-col p-4 md:p-6">
            <div class="mb-6 flex items-center justify-between">
              <BaseHeading
                as="h3"
                size="md"
                weight="medium"
                lead="tight"
                class="text-muted-900 dark:text-white"
              >
                <span>Personal Score</span>
              </BaseHeading>
            </div>
            <div class="py-16">
              <DemoChartRadialGaugeAlt class="-mt-14" />
            </div>
            <div class="mt-auto text-center">
              <BaseParagraph size="sm">
                <span class="text-muted-500 dark:text-muted-400">
                  Your score has been calculated based on the latest metrics
                </span>
              </BaseParagraph>
            </div>
          </BaseCard>
        </div>
        <!-- Chart -->
        <div class="lg:portrait:col-span-12 col-span-12 sm:landscape:col-span-5 2xl:landscape:col-span-6">
          <BaseCard rounded="md" class="relative p-4 md:p-6">
            <div class="mb-6">
              <BaseHeading
                as="h3"
                size="md"
                weight="medium"
                lead="tight"
                class="text-muted-900 dark:text-white"
              >
                <span>Profit</span>
              </BaseHeading>
            </div>
            <DemoChartBarSalesProfit />
          </BaseCard>
        </div>
        <!-- Widget -->
        <div class="lg:portrait:col-span-12 col-span-12 sm:landscape:col-span-4 2xl:landscape:col-span-3">
          <BaseCard class="flex h-full flex-col p-2">
            <LazyAddonDatepicker v-model="date" locale="en" label="Start date" />
          </BaseCard>
        </div>
        <!-- Widget -->
        <div class="col-span-12">
          <BaseCard rounded="md" class="p-4 md:p-6">
            <!-- Title -->
            <div class="mb-6 flex items-center justify-between">
              <BaseHeading
                as="h3"
                size="md"
                weight="medium"
                lead="tight"
                class="text-muted-900 dark:text-white"
              >
                <span>Pending tickets</span>
              </BaseHeading>
              <DemoLinkArrow to="#" label="View all" class="me-1" />
            </div>
            <DemoPendingTickets />
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>
