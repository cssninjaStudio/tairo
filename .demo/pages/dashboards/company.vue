<script setup lang="ts">
definePageMeta({
  title: 'Company',
  layout: 'sidebar',
})

const team = [
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
]
</script>

<template>
  <div class="relative overflow-hidden">
    <div class="flex flex-col gap-6">
      <!-- Header -->
      <BaseCard class="p-6">
        <div
          class="w-full flex flex-col sm:flex-row items-center xs:divide-y sm:divide-x divide-muted-200 dark:divide-muted-700"
        >
          <!-- Item -->
          <div class="flex-1">
            <div class="flex flex-col py-4 sm:py-0 px-4 text-center">
              <Icon
                name="ph:users-duotone"
                class="w-8 h-8 mx-auto text-primary-500"
              />
              <h4
                class="font-sans font-semibold text-xl text-muted-800 dark:text-muted-100"
              >
                162
              </h4>
              <p class="font-sans text-sm text-muted-400">New Users</p>
            </div>
          </div>
          <!-- Item -->
          <div class="flex-1">
            <div class="flex flex-col py-4 sm:py-0 px-4 text-center">
              <Icon
                name="ph:coins-duotone"
                class="w-8 h-8 mx-auto text-primary-500"
              />
              <h4
                class="font-sans font-semibold text-xl text-muted-800 dark:text-muted-100"
              >
                $8,579
              </h4>
              <p class="font-sans text-sm text-muted-400">Daily Income</p>
            </div>
          </div>
          <!-- Item -->
          <div class="flex-1">
            <div class="flex flex-col py-4 sm:py-0 px-4 text-center">
              <Icon
                name="ph:briefcase-duotone"
                class="w-8 h-8 mx-auto text-primary-500"
              />
              <h4
                class="font-sans font-semibold text-xl text-muted-800 dark:text-muted-100"
              >
                192
              </h4>
              <p class="font-sans text-sm text-muted-400">Completed Projects</p>
            </div>
          </div>
          <!-- Item -->
          <div class="flex-1">
            <div class="flex flex-col py-4 sm:py-0 px-4 text-center">
              <Icon
                name="ph:ticket-duotone"
                class="w-8 h-8 mx-auto text-primary-500"
              />
              <h4
                class="font-sans font-semibold text-xl text-muted-800 dark:text-muted-100"
              >
                32
              </h4>
              <p class="font-sans text-sm text-muted-400">Active Tickets</p>
            </div>
          </div>
        </div>
      </BaseCard>
      <!-- Grid -->
      <div class="grid grid-cols-12 gap-6">
        <!-- Widget -->
        <div class="col-span-12 sm:col-span-4 ptablet:col-span-6">
          <BaseCard class="p-6 h-full">
            <WidgetCompanyOverview />
          </BaseCard>
        </div>
        <!-- Widget -->
        <div class="col-span-12 sm:col-span-4 ptablet:col-span-6">
          <BaseCard class="relative h-full">
            <WidgetChartAreaStats />
          </BaseCard>
        </div>
        <!-- Widget -->
        <div class="col-span-12 sm:col-span-4 ptablet:col-span-12">
          <BaseCard class="relative h-full">
            <WidgetChartBarSocialChannels />
          </BaseCard>
        </div>
        <!-- Widget -->
        <div class="col-span-12">
          <BaseTable shape="rounded">
            <template #header>
              <BaseTableHeading uppercase class="px-4 py-6">
                <div class="flex items-center">
                  <BaseCheckbox
                    name="table-1-main"
                    shape="rounded"
                    class="text-primary-500"
                  />
                </div>
              </BaseTableHeading>
              <BaseTableHeading uppercase>Collaborator</BaseTableHeading>
              <BaseTableHeading uppercase>Expertise</BaseTableHeading>
              <BaseTableHeading uppercase>Rate</BaseTableHeading>
              <BaseTableHeading uppercase>Status</BaseTableHeading>
              <BaseTableHeading uppercase class="px-4 py-6">
                <span class="sr-only">View</span>
              </BaseTableHeading>
            </template>

            <BaseTableRow v-for="member in team" :key="member.id">
              <BaseTableCell class="p-4">
                <div class="flex items-center">
                  <BaseCheckbox
                    :name="member.id"
                    shape="rounded"
                    class="text-primary-500"
                  />
                </div>
              </BaseTableCell>
              <BaseTableCell>
                <div class="flex items-center">
                  <BaseAvatar :src="member.src" size="sm" />
                  <div class="ml-3 leading-none">
                    <h4 class="font-heading text-sm font-semibold">
                      {{ member.name }}
                    </h4>
                    <p class="font-sans text-xs text-muted-400">
                      {{ member.role }}
                    </p>
                  </div>
                </div>
              </BaseTableCell>
              <BaseTableCell light>
                {{ member.expertise }}
              </BaseTableCell>
              <BaseTableCell>${{ member.rate }}/hour</BaseTableCell>
              <BaseTableCell>
                <BaseTag
                  v-if="member.status === 'Available'"
                  color="success"
                  flavor="pastel"
                  shape="full"
                  class="font-medium"
                >
                  {{ member.status }}
                </BaseTag>
                <BaseTag
                  v-else-if="member.status === 'New'"
                  color="info"
                  flavor="pastel"
                  shape="full"
                  class="font-medium"
                >
                  {{ member.status }}
                </BaseTag>
                <BaseTag
                  v-else-if="member.status === 'Hired'"
                  color="warning"
                  flavor="pastel"
                  shape="full"
                  class="font-medium"
                >
                  {{ member.status }}
                </BaseTag>
              </BaseTableCell>
              <BaseTableCell>
                <a
                  href="#"
                  class="text-violet-500 dark:text-violet-400 hover:opacity-75 transition-opacity duration-300"
                >
                  View
                </a>
              </BaseTableCell>
            </BaseTableRow>
          </BaseTable>
        </div>
        <!-- Widget -->
        <div class="col-span-12 sm:col-span-3 ptablet:col-span-6">
          <BaseCard class="h-full flex flex-col p-6">
            <div class="flex items-center justify-between mb-6">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Personal Score</span>
              </BaseHeading>
            </div>
            <div class="py-16">
              <ExampleApexchartGaugePersonal />
            </div>
            <div class="text-center mt-auto">
              <BaseParagraph size="sm">
                <span class="text-muted-400">
                  Your score has been calculated based on the latest metrics
                </span>
              </BaseParagraph>
            </div>
          </BaseCard>
        </div>
        <!-- Chart -->
        <div class="col-span-12 sm:col-span-6 ptablet:col-span-6">
          <BaseCard class="relative p-6">
            <div class="mb-6">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Profit</span>
              </BaseHeading>
            </div>
            <ExampleApexchartBarSalesProfit />
          </BaseCard>
        </div>
        <!-- Widget -->
        <div class="col-span-12 sm:col-span-3 ptablet:hidden">
          <BaseCard class="h-full flex flex-col p-6">
            <WidgetDatepicker />
          </BaseCard>
        </div>
        <!-- Widget -->
        <div class="col-span-12">
          <BaseCard class="p-6">
            <!-- Title -->
            <div class="flex items-center justify-between mb-10">
              <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>Pending tickets</span>
              </BaseHeading>
              <NuxtLink
                to="#/"
                class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
              >
                View All
              </NuxtLink>
            </div>
            <WidgetPendingTickets />
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>
