<script setup lang="ts">
import { Calendar } from 'v-calendar'

import 'v-calendar/dist/style.css'
import '~/assets/css/vcalendar.css'

definePageMeta({
  title: 'Human Resources',
  preview: {
    title: 'HR dashboard',
    description: 'For HR management',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-human-resources.png',
    srcDark: '/img/screens/dashboards-human-resources-dark.png',
    order: 12,
  },
})

const activeSetting = ref('candidates')

const items = [
  {
    title: 'Messages',
    subtitle: 'Inbox messages',
    icon: 'ph:envelope-duotone',
    count: 5,
    status: 'new',
  },
  {
    title: 'Tasks',
    subtitle: 'Pending tasks',
    icon: 'ph:check-circle-duotone',
    count: 2,
    status: 'pending',
  },
]
</script>

<template>
  <div>
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-6">
      <!-- Column -->
      <div class="ltablet:col-span-8 col-span-12 lg:col-span-8">
        <!-- Column -->
        <div class="flex flex-col gap-6">
          <!-- Header -->
          <div class="bg-primary-700 rounded-xl px-6 py-12">
            <div class="flex w-full flex-col items-center gap-y-4 sm:flex-row">
              <div class="flex flex-1 flex-col px-4">
                <BaseAvatar
                  src="/img/avatars/2.svg"
                  size="lg"
                  class="border-primary-200/50 ring-primary-200/50 ring-offset-primary-600 mb-3 border ring-2 ring-offset-4"
                />
                <BaseHeading
                  as="h2"
                  size="3xl"
                  weight="bold"
                  lead="none"
                  class="ltablet:!text-2xl text-white"
                >
                  <span>Welcome back, Maya.</span>
                </BaseHeading>
              </div>
              <div class="flex h-full flex-1 flex-col px-4 sm:px-6">
                <BaseHeading
                  as="h2"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="mb-1 text-white"
                >
                  <span>New Rookies</span>
                </BaseHeading>
                <BaseParagraph size="xs" lead="tight" class="mb-3">
                  <span class="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praeclarae mortes.
                  </span>
                </BaseParagraph>
                <div class="mt-auto flex gap-2">
                  <BaseAvatar
                    size="sm"
                    shape="straight"
                    src="/img/avatars/3.svg"
                    class="nui-mask nui-mask-blob"
                  />
                  <BaseAvatar
                    size="sm"
                    shape="straight"
                    src="/img/avatars/9.svg"
                    class="nui-mask nui-mask-blob"
                  />
                  <BaseAvatar
                    size="sm"
                    shape="straight"
                    src="/img/avatars/5.svg"
                    class="nui-mask nui-mask-blob"
                  />
                  <BaseButtonIcon>
                    <Icon name="lucide:plus" class="h-4 w-4" />
                  </BaseButtonIcon>
                </div>
              </div>
              <div
                class="border-primary-300/60 flex h-full flex-1 flex-col px-4 sm:border-l sm:px-6"
              >
                <BaseHeading
                  as="h2"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="mb-1 text-white"
                >
                  <span>Job Feed</span>
                </BaseHeading>
                <BaseParagraph size="xs" lead="tight" class="mb-3">
                  <span class="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praeclarae mortes.
                  </span>
                </BaseParagraph>
                <div class="mt-auto">
                  <BaseButton class="w-full">
                    <span>Manage Jobs</span>
                  </BaseButton>
                </div>
              </div>
            </div>
          </div>
          <!-- Feed settings -->
          <div
            class="flex flex-col items-center justify-between gap-6 sm:flex-row"
          >
            <div>
              <BaseHeading
                as="h3"
                size="lg"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-muted-100 mb-1"
              >
                <span>Feed settings</span>
              </BaseHeading>
            </div>
            <div class="flex gap-2 sm:justify-end">
              <BaseButtonAction
                shape="curved"
                :color="activeSetting === 'all' ? 'primary' : 'default'"
                @click="activeSetting = 'all'"
              >
                All
              </BaseButtonAction>
              <BaseButtonAction
                shape="curved"
                :color="activeSetting === 'candidates' ? 'primary' : 'default'"
                @click="activeSetting = 'candidates'"
              >
                Candidates
              </BaseButtonAction>
              <BaseButtonAction
                shape="curved"
                :color="activeSetting === 'companies' ? 'primary' : 'default'"
                @click="activeSetting = 'companies'"
              >
                Companies
              </BaseButtonAction>
            </div>
          </div>
          <!-- Details -->
          <div class="mt-6 grid grid-cols-12 gap-x-6 gap-y-12">
            <!-- Text -->
            <div class="col-span-12 sm:col-span-5">
              <div
                class="flex h-full max-w-[240px] flex-col justify-center gap-2"
              >
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="medium"
                  lead="tight"
                  class="text-muted-800 dark:text-muted-100 mb-1"
                >
                  <span>Notifications</span>
                </BaseHeading>
                <BaseParagraph size="xs" lead="tight">
                  <span class="text-muted-500 dark:text-muted-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Perge porro; Oratio me istius philosophi non offendit; Duo
                    Reges: constructio interrete.
                  </span>
                </BaseParagraph>
                <NuxtLink
                  to="#"
                  class="text-primary-500 font-sans text-xs underline underline-offset-4"
                >
                  <span>Learn More</span>
                </NuxtLink>
              </div>
            </div>
            <!-- Text -->
            <div class="col-span-12 sm:col-span-7">
              <div class="space-y-2">
                <DemoFlexTableRow
                  v-for="(item, index) in items"
                  :key="index"
                  shape="rounded"
                >
                  <template #start>
                    <DemoFlexTableStart
                      label="type"
                      :hide-label="index > 0"
                      :title="item.title"
                      :subtitle="item.subtitle"
                      :icon="item.icon"
                    />
                  </template>
                  <template #end>
                    <DemoFlexTableCell
                      label="count"
                      :hide-label="index > 0"
                      class="w-full sm:w-10"
                    >
                      <span
                        class="text-muted-500 dark:text-muted-400 font-sans text-sm"
                      >
                        {{ item.count }}
                      </span>
                    </DemoFlexTableCell>
                    <DemoFlexTableCell
                      label="status"
                      :hide-label="index > 0"
                      class="w-full sm:w-16"
                    >
                      <BaseTag
                        :color="item.status === 'new' ? 'success' : 'muted'"
                        shape="full"
                        flavor="pastel"
                        condensed
                      >
                        {{ item.status }}
                      </BaseTag>
                    </DemoFlexTableCell>
                    <DemoFlexTableCell label="action" :hide-label="index > 0">
                      <span class="text-primary-500 font-sans text-xs sm:pe-2">
                        Action
                      </span>
                    </DemoFlexTableCell>
                  </template>
                </DemoFlexTableRow>
              </div>
            </div>
          </div>
          <!-- Rookies -->
          <div class="mt-6 flex items-center justify-between gap-6 sm:mt-0">
            <div>
              <BaseHeading
                as="h3"
                size="lg"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-muted-100 mb-1"
              >
                <span>New rookies</span>
              </BaseHeading>
            </div>
            <div class="flex gap-2 sm:justify-end">
              <NuxtLink
                to="#"
                class="hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg bg-white px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
              >
                View All
              </NuxtLink>
            </div>
          </div>
          <!-- Grid -->
          <div class="grid gap-6 sm:grid-cols-3">
            <!-- Item -->
            <div class="relative">
              <BaseCard class="p-6" shape="curved">
                <div class="flex flex-col">
                  <BaseAvatar
                    size="xl"
                    src="/img/avatars/5.svg"
                    badge-src="/img/stacks/js.svg"
                    alt="Avatar"
                    class="mx-auto mb-4"
                  />
                  <div class="text-center">
                    <BaseHeading
                      as="h4"
                      size="md"
                      weight="medium"
                      lead="tight"
                      class="text-muted-800 dark:text-muted-100"
                    >
                      <span>Clarissa Miller</span>
                    </BaseHeading>
                    <BaseParagraph size="xs">
                      <span class="text-muted-400">UI/UX designer</span>
                    </BaseParagraph>
                    <div class="mt-3">
                      <BaseButton
                        href="/"
                        shape="curved"
                        color="default"
                        class="w-full"
                      >
                        <span>View Profile</span>
                      </BaseButton>
                    </div>
                  </div>
                </div>
              </BaseCard>
            </div>
            <!-- Item -->
            <div class="relative">
              <BaseCard class="p-6" shape="curved">
                <div class="flex flex-col">
                  <BaseAvatar
                    size="xl"
                    src="/img/avatars/16.svg"
                    badge-src="/img/stacks/vuejs.svg"
                    alt="Avatar"
                    class="mx-auto mb-4"
                  />
                  <div class="text-center">
                    <BaseHeading
                      as="h4"
                      size="md"
                      weight="medium"
                      lead="tight"
                      class="text-muted-800 dark:text-muted-100"
                    >
                      <span>Joshua Stevens</span>
                    </BaseHeading>
                    <BaseParagraph size="xs">
                      <span class="text-muted-400">Fullstack developer</span>
                    </BaseParagraph>
                    <div class="mt-3">
                      <BaseButton
                        href="/"
                        shape="curved"
                        color="default"
                        class="w-full"
                      >
                        <span>View Profile</span>
                      </BaseButton>
                    </div>
                  </div>
                </div>
              </BaseCard>
            </div>
            <!-- Item -->
            <div class="relative">
              <BaseCard class="p-6" shape="curved">
                <div class="flex flex-col">
                  <BaseAvatar
                    size="xl"
                    src="/img/avatars/12.svg"
                    badge-src="/img/stacks/reactjs.svg"
                    alt="Avatar"
                    class="mx-auto mb-4"
                  />
                  <div class="text-center">
                    <BaseHeading
                      as="h4"
                      size="md"
                      weight="medium"
                      lead="tight"
                      class="text-muted-800 dark:text-muted-100"
                    >
                      <span>Margot Reinier</span>
                    </BaseHeading>
                    <BaseParagraph size="xs">
                      <span class="text-muted-400">Web developer</span>
                    </BaseParagraph>
                    <div class="mt-3">
                      <BaseButton
                        href="/"
                        shape="curved"
                        color="default"
                        class="w-full"
                      >
                        <span>View Profile</span>
                      </BaseButton>
                    </div>
                  </div>
                </div>
              </BaseCard>
            </div>
          </div>
        </div>
      </div>
      <!-- Column -->
      <div class="ltablet:col-span-4 col-span-12 lg:col-span-4">
        <div class="flex flex-col gap-6">
          <!-- Widget -->
          <BaseCard shape="curved" class="p-6">
            <div class="flex w-full items-center justify-between">
              <DemoSearchCompact shape="curved" />
            </div>
          </BaseCard>
          <!-- Widget -->
          <BaseCard shape="curved" class="p-6">
            <BaseTabSlider
              condensed
              selected="team"
              :tabs="[
                { label: 'Team', value: 'team' },
                { label: 'Tasks', value: 'tasks' },
                { label: 'Project', value: 'projects' },
              ]"
            >
              <template #tab="{ activeValue }">
                <div v-if="activeValue === 'team'">
                  <DemoTeamListCompact actions />
                </div>
                <div v-else-if="activeValue === 'tasks'">
                  <DemoTodoListCompact />
                </div>
              </template>
            </BaseTabSlider>
          </BaseCard>
          <!-- Widget -->
          <BaseCard shape="curved" class="p-4">
            <Calendar
              :attributes="[
                {
                  key: 'today',
                  dot: true,
                  dates: new Date(),
                },
              ]"
              title-position="left"
              expanded
              borderless
              transparent
              trim-weeks
              class="max-w-full rounded-xl"
            />
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>
