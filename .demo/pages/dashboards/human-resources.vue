<script setup lang="ts">
definePageMeta({
  title: 'Human Resources',
  layout: 'sidebar',
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
      <div class="col-span-12 ltablet:col-span-8 lg:col-span-8">
        <!-- Column -->
        <div class="flex flex-col gap-6">
          <!-- Header -->
          <div class="px-6 py-12 bg-primary-700 rounded-xl">
            <div class="w-full flex flex-col sm:flex-row items-center gap-y-4">
              <div class="flex-1 flex flex-col px-4">
                <BaseAvatar
                  src="/img/avatars/2.svg"
                  size="lg"
                  class="mb-3 border border-primary-200/50 ring-2 ring-offset-4 ring-primary-200/50 ring-offset-primary-600"
                />
                <BaseHeading
                  as="h2"
                  size="3xl"
                  weight="bold"
                  lead="none"
                  class="text-white ltablet:!text-2xl"
                >
                  <span>Welcome back, Maya.</span>
                </BaseHeading>
              </div>
              <div class="h-full flex-1 flex flex-col px-4 sm:px-6">
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
                <div class="flex gap-2 mt-auto">
                  <BaseAvatar
                    size="sm"
                    shape="square"
                    src="/img/avatars/3.svg"
                  />
                  <BaseAvatar
                    size="sm"
                    shape="square"
                    src="/img/avatars/9.svg"
                  />
                  <BaseAvatar
                    size="sm"
                    shape="square"
                    src="/img/avatars/5.svg"
                  />
                  <BaseButtonIcon>
                    <Icon name="lucide:plus" class="w-4 h-4" />
                  </BaseButtonIcon>
                </div>
              </div>
              <div
                class="h-full flex-1 flex flex-col px-4 sm:px-6 sm:border-l border-primary-300/60"
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
            class="flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div>
              <BaseHeading
                as="h3"
                size="lg"
                weight="semibold"
                lead="tight"
                class="mb-1 text-muted-800 dark:text-muted-100"
              >
                <span>Feed settings</span>
              </BaseHeading>
            </div>
            <div class="flex sm:justify-end gap-2">
              <BaseButtonAction
                shape="curved"
                :color="activeSetting === 'all' ? 'primary' : 'default'"
                @click="activeSetting = 'all'"
                >All</BaseButtonAction
              >
              <BaseButtonAction
                shape="curved"
                :color="activeSetting === 'candidates' ? 'primary' : 'default'"
                @click="activeSetting = 'candidates'"
                >Candidates</BaseButtonAction
              >
              <BaseButtonAction
                shape="curved"
                :color="activeSetting === 'companies' ? 'primary' : 'default'"
                @click="activeSetting = 'companies'"
                >Companies</BaseButtonAction
              >
            </div>
          </div>
          <!-- Details -->
          <div class="grid grid-cols-12 gap-x-6 gap-y-12 mt-6">
            <!-- Text -->
            <div class="col-span-12 sm:col-span-5">
              <div
                class="h-full flex flex-col justify-center gap-2 max-w-[240px]"
              >
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="medium"
                  lead="tight"
                  class="mb-1 text-muted-800 dark:text-muted-100"
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
                  to="/"
                  class="font-sans text-xs underline underline-offset-4 text-primary-500"
                >
                  <span>Learn More</span>
                </NuxtLink>
              </div>
            </div>
            <!-- Text -->
            <div class="col-span-12 sm:col-span-7">
              <div class="space-y-2">
                <WidgetFlexTableRow
                  v-for="(item, index) in items"
                  :key="index"
                  shape="rounded"
                >
                  <template #start>
                    <WidgetFlexTableStart
                      label="type"
                      :hideLabel="index > 0"
                      :title="item.title"
                      :subtitle="item.subtitle"
                      :icon="item.icon"
                    />
                  </template>
                  <template #end>
                    <WidgetFlexTableCell
                      label="count"
                      :hideLabel="index > 0"
                      class="w-full sm:w-10"
                    >
                      <span
                        class="font-sans text-sm text-muted-500 dark:text-muted-400"
                        >{{ item.count }}</span
                      >
                    </WidgetFlexTableCell>
                    <WidgetFlexTableCell
                      label="status"
                      :hideLabel="index > 0"
                      class="w-full sm:w-16"
                    >
                      <BaseTag
                        :color="item.status === 'new' ? 'success' : 'muted'"
                        shape="full"
                        flavor="pastel"
                        compact
                      >
                        {{ item.status }}
                      </BaseTag>
                    </WidgetFlexTableCell>
                    <WidgetFlexTableCell label="action" :hideLabel="index > 0">
                      <span class="font-sans text-xs sm:pr-2 text-primary-500"
                        >Action</span
                      >
                    </WidgetFlexTableCell>
                  </template>
                </WidgetFlexTableRow>
              </div>
            </div>
          </div>
          <!-- Rookies -->
          <div class="flex items-center justify-between gap-6 mt-6 sm:mt-0">
            <div>
              <BaseHeading
                as="h3"
                size="lg"
                weight="semibold"
                lead="tight"
                class="mb-1 text-muted-800 dark:text-muted-100"
              >
                <span>New rookies</span>
              </BaseHeading>
            </div>
            <div class="flex sm:justify-end gap-2">
              <NuxtLink
                to="/"
                class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-white hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
                >View All</NuxtLink
              >
            </div>
          </div>
          <!-- Grid -->
          <div class="grid sm:grid-cols-3 gap-6">
            <!-- Item -->
            <div class="relative">
              <BaseCard class="p-6" shape="curved">
                <div class="flex flex-col">
                  <BaseAvatar
                    size="xl"
                    src="/img/avatars/5.svg"
                    badgeSrc="/img/stacks/js.svg"
                    alt="Avatar"
                    class="mb-4 mx-auto"
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
                        ><span>View Profile</span>
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
                    badgeSrc="/img/stacks/vuejs.svg"
                    alt="Avatar"
                    class="mb-4 mx-auto"
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
                        ><span>View Profile</span>
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
                    badgeSrc="/img/stacks/reactjs.svg"
                    alt="Avatar"
                    class="mb-4 mx-auto"
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
                        ><span>View Profile</span>
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
      <div class="col-span-12 ltablet:col-span-4 lg:col-span-4">
        <div class="flex flex-col gap-6">
          <!-- Widget -->
          <BaseCard shape="curved" class="p-6">
            <div class="w-full flex items-center justify-between">
              <WidgetSearchCompact shape="curved" />
            </div>
          </BaseCard>
          <!-- Widget -->
          <BaseCard shape="curved" class="p-6">
            <BaseTabSlider
              compact
              selected="team"
              :tabs="[
                { label: 'Team', value: 'team' },
                { label: 'Tasks', value: 'tasks' },
                { label: 'Project', value: 'projects' },
              ]"
            >
              <template #tab="{ activeValue }">
                <div v-if="activeValue === 'team'">
                  <WidgetTeamListCompact />
                </div>
                <div v-else-if="activeValue === 'tasks'">
                  <WidgetTodoListCompact />
                </div>
              </template>
            </BaseTabSlider>
          </BaseCard>
          <!-- Widget -->
          <BaseCard shape="curved" class="p-6">
            <WidgetDatepicker expanded />
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>
