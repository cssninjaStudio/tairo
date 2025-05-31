<script setup lang="ts">
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

const rookies = [
  {
    name: 'Clarissa Miller',
    role: 'UI/UX designer',
    avatar: '/img/avatars/5.svg',
    stack: '/img/stacks/js.svg',
  },
  {
    name: 'Joshua Stevens',
    role: 'Fullstack developer',
    avatar: '/img/avatars/16.svg',
    stack: '/img/stacks/vuejs.svg',
  },
  {
    name: 'Margot Reinier',
    role: 'Web developer',
    avatar: '/img/avatars/12.svg',
    stack: '/img/stacks/reactjs.svg',
  },
]

// Datepicker
const date = ref(new Date())
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20">
    <!-- Grid -->
    <div class="grid grid-cols-12 gap-4">
      <!-- Column -->
      <div class="lg:landscape:col-span-8 col-span-12 2xl:landscape:col-span-9">
        <!-- Column -->
        <div class="flex flex-col gap-4">
          <!-- Header -->
          <div class="bg-primary-800 rounded-2xl px-6 py-12">
            <div class="flex w-full flex-col items-center gap-y-4 sm:flex-row">
              <div class="flex flex-1 flex-col gap-y-2 px-4">
                <BaseAvatar
                  src="/img/avatars/10.svg"
                  size="lg"
                  class="border-primary-200/50 ring-primary-200/50 ring-offset-primary-600 mb-3 border ring-2 ring-offset-4"
                />
                <BaseHeading
                  as="h2"
                  size="2xl"
                  weight="semibold"
                  lead="none"
                  class="text-white"
                >
                  <span>Welcome back, Kendra.</span>
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
                <BaseParagraph
                  size="xs"
                  lead="tight"
                  class="mb-3"
                >
                  <span class="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praeclarae mortes.
                  </span>
                </BaseParagraph>
                <div class="mt-auto flex gap-2">
                  <BaseAvatar
                    size="sm"
                    rounded="none"
                    src="/img/avatars/3.svg"
                    class="nui-mask nui-mask-blob"
                  />
                  <BaseAvatar
                    size="sm"
                    rounded="none"
                    src="/img/avatars/9.svg"
                    class="nui-mask nui-mask-blob"
                  />
                  <BaseAvatar
                    size="sm"
                    rounded="none"
                    src="/img/avatars/5.svg"
                    class="nui-mask nui-mask-blob"
                  />
                  <BaseButton size="icon-md" rounded="lg">
                    <Icon name="lucide:plus" class="size-4" />
                  </BaseButton>
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
                <BaseParagraph
                  size="xs"
                  lead="tight"
                  class="mb-3"
                >
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
            class="flex flex-col items-center justify-between gap-6 sm:flex-row mb-6"
          >
            <div>
              <BaseHeading
                as="h3"
                size="lg"
                weight="medium"
                lead="tight"
                class="text-muted-900 dark:text-muted-100 mb-1"
              >
                <span>Feed settings</span>
              </BaseHeading>
            </div>
            <div class="flex gap-2 sm:justify-end">
              <BaseButton
                rounded="md"
                size="sm"
                :variant="activeSetting === 'all' ? 'primary' : 'default'"
                @click="activeSetting = 'all'"
              >
                All
              </BaseButton>
              <BaseButton
                rounded="md"
                size="sm"
                :variant="activeSetting === 'candidates' ? 'primary' : 'default'"
                @click="activeSetting = 'candidates'"
              >
                Candidates
              </BaseButton>
              <BaseButton
                rounded="md"
                size="sm"
                :variant="activeSetting === 'companies' ? 'primary' : 'default'"
                @click="activeSetting = 'companies'"
              >
                Companies
              </BaseButton>
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
                    Perge porro; Oratio me istius philosophi non offendit.
                  </span>
                </BaseParagraph>
                <NuxtLink
                  to="#"
                  class="text-primary-600 dark:text-primary-400 font-sans font-medium text-xs underline underline-offset-4"
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
                  rounded="sm"
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
                        :variant="item.status === 'new' ? 'primary' : 'muted'"
                        rounded="full"
                        size="sm"
                      >
                        {{ item.status }}
                      </BaseTag>
                    </DemoFlexTableCell>
                    <DemoFlexTableCell label="action" :hide-label="index > 0">
                      <a href="#" class="text-primary-500 font-sans font-medium hover:underline underline-offset-4 text-xs sm:pe-2">
                        Action
                      </a>
                    </DemoFlexTableCell>
                  </template>
                </DemoFlexTableRow>
              </div>
            </div>
          </div>
          <!-- Rookies -->
          <div class="mt-6 flex items-center justify-between gap-6 sm:mt-4">
            <div>
              <BaseHeading
                as="h3"
                size="lg"
                weight="medium"
                lead="tight"
                class="text-muted-900 dark:text-muted-100 mb-1"
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
            <div v-for="rookie in rookies" :key="rookie.name" class="relative">
              <BaseCard class="p-6" rounded="lg">
                <div class="flex flex-col">
                  <div class="mx-auto mb-4 flex items-center justify-center">
                    <BaseAvatar
                      size="lg"
                      :src="rookie.avatar"
                      :badge-src="rookie.stack"
                      :alt="rookie.name"
                    />
                  </div>
                  <div class="text-center">
                    <BaseHeading
                      as="h4"
                      size="md"
                      weight="medium"
                      lead="tight"
                      class="text-muted-800 dark:text-muted-100"
                    >
                      <span>
                        {{ rookie.name }}
                      </span>
                    </BaseHeading>
                    <BaseParagraph size="xs">
                      <span class="text-muted-400">
                        {{ rookie.role }}
                      </span>
                    </BaseParagraph>
                    <div class="mt-3">
                      <BaseButton
                        rounded="lg"
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
      <div class="lg:landscape:col-span-4 col-span-12 2xl:landscape:col-span-3">
        <div class="flex flex-col gap-4">
          <!-- Widget -->
          <BaseCard rounded="lg" class="p-4 md:p-6">
            <div class="flex w-full items-center justify-between">
              <DemoSearchCompact rounded="lg" />
            </div>
          </BaseCard>
          <!-- Widget -->
          <BaseCard rounded="lg" class="p-4 md:p-6">
            <DemoDaysSquare rounded="lg" />
          </BaseCard>
          <!-- Widget -->
          <BaseCard rounded="lg" class="p-4">
            <LazyAddonDatepicker v-model="date" locale="en" label="Start date" />
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>
