<script setup lang="ts">
import { DemoPanelTask } from '#components'

definePageMeta({
  title: 'Project Details',
  preview: [
    {
      title: 'Project details',
      description: 'For displaying fitness project details',
      categories: ['layouts', 'projects'],
      src: '/img/screens/layouts-projects-details.png',
      srcDark: '/img/screens/layouts-projects-details-dark.png',
      order: 72,
      params: {
        slug: 'health-and-fitness-dashboard',
      },
    },
    {
      title: 'Project details',
      description: 'For displaying banking project details',
      categories: ['layouts', 'projects'],
      src: '/img/screens/layouts-projects-details-2.png',
      srcDark: '/img/screens/layouts-projects-details-2-dark.png',
      order: 72,
      params: {
        slug: 'banking-and-finance-dashboard',
      },
    },
  ],
})

const { open } = usePanels()
const toasts = useNuiToasts()

const route = useRoute()
const slug = computed(() => route.params.slug)

const query = computed(() => {
  return {
    slug: slug.value,
  }
})

const { data, pending, error, refresh } = await useFetch(
  '/api/company/projects',
  {
    query,
  },
)

if (!data.value?.project) {
  await navigateTo('/layouts/projects')
}

const currentTask = ref()

async function openTaskPanel(id: number, tasks: any) {
  currentTask.value = tasks.find((task: any) => task.id === id)

  const [message] = await open(DemoPanelTask, {
    task: currentTask,
  })

  if (message) {
    toasts.add({
      title: 'Comment added',
      description: message.comment,
    })
  }
}
</script>

<template>
  <div class="relative px-4 md:px-6 lg:px-8 pb-20">
    <div v-if="data?.project === undefined">
      <BasePlaceholderPage
        title="Project not found"
        subtitle="We couldn't find a project matching this namespace."
      >
        <template #image>
          <img
            class="block dark:hidden"
            src="/img/illustrations/placeholders/flat/placeholder-projects.svg"
            alt="Placeholder image"
          >
          <img
            class="hidden dark:block"
            src="/img/illustrations/placeholders/flat/placeholder-projects-dark.svg"
            alt="Placeholder image"
          >
        </template>
      </BasePlaceholderPage>
    </div>
    <div v-else class="h-full">
      <BaseTabs
        default-value="overview"
        type="box"
        :tabs="[
          {
            label: 'Overview',
            value: 'overview',
          },
          {
            label: 'Team',
            value: 'team',
          },
          {
            label: 'Tasks',
            value: 'tasks',
          },
        ]"
      >
        <!-- Overview -->
        <BaseTabsContent value="overview">
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 lg:col-span-8">
              <BaseCard rounded="md" class="space-y-12 p-10">
                <div
                  class="border-muted-200 dark:border-muted-800/80 flex flex-col items-center justify-between gap-8 border-b pb-12 sm:flex-row"
                >
                  <div>
                    <BaseHeading
                      tag="h2"
                      size="2xl"
                      weight="medium"
                      class="text-muted-900 dark:text-white"
                    >
                      {{ data?.project.name }}
                    </BaseHeading>
                    <BaseParagraph
                      size="lg"
                      class="text-muted-600 dark:text-muted-400"
                    >
                      {{ data?.project.category }}
                    </BaseParagraph>
                    <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400 py-4">
                      {{ data?.project.description }}
                    </BaseParagraph>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <BaseTooltip :content="`${data?.project.owner.name} owns this project`">
                          <BaseAvatar :src="data?.project.owner.avatar" />
                        </BaseTooltip>
                        <div>
                          <BaseHeading
                            tag="h3"
                            size="sm"
                            weight="medium"
                            class="text-muted-900 dark:text-white"
                          >
                            {{ data?.project.owner.name }}
                          </BaseHeading>
                          <BaseParagraph size="xs" class="text-muted-400">
                            Project owner
                          </BaseParagraph>
                        </div>
                      </div>
                      <BaseAvatarGroup
                        :avatars="data?.project.team"
                        :limit="3"
                      />
                    </div>
                  </div>
                  <div class="w-full shrink-0 sm:w-72">
                    <img
                      :src="data?.project.image"
                      :alt="data?.project.name"
                      class="rounded-lg"
                    >
                  </div>
                </div>
                <div
                  class="border-muted-200 dark:border-muted-800/80 grid gap-4 border-b pb-12 sm:grid-cols-4"
                >
                  <div>
                    <Icon
                      name="solar:widget-4-bold-duotone"
                      class="text-primary-500 mb-2 size-6"
                    />
                    <div>
                      <BaseHeading
                        tag="h3"
                        size="sm"
                        weight="medium"
                        class="text-muted-900 dark:text-white"
                      >
                        UI/UX Design
                      </BaseHeading>
                      <BaseParagraph
                        size="xs"
                        lead="tight"
                        class="text-muted-600 dark:text-muted-400"
                      >
                        Designing a perfect user experience is in the scope of
                        this project.
                      </BaseParagraph>
                    </div>
                  </div>
                  <div>
                    <Icon
                      name="solar:alarm-bold-duotone"
                      class="text-primary-500 mb-2 size-6"
                    />
                    <div>
                      <BaseHeading
                        tag="h3"
                        size="sm"
                        weight="medium"
                        class="text-muted-900 dark:text-white"
                      >
                        1 Week Sprints
                      </BaseHeading>
                      <BaseParagraph
                        size="xs"
                        lead="tight"
                        class="text-muted-600 dark:text-muted-400"
                      >
                        This project development iterations follow a 1 week
                        sprint pattern.
                      </BaseParagraph>
                    </div>
                  </div>
                  <div>
                    <Icon
                      name="solar:calendar-bold-duotone"
                      class="text-primary-500 mb-2 size-6"
                    />
                    <div>
                      <BaseHeading
                        tag="h3"
                        size="sm"
                        weight="medium"
                        class="text-muted-900 dark:text-white"
                      >
                        3 Months
                      </BaseHeading>
                      <BaseParagraph
                        size="xs"
                        lead="tight"
                        class="text-muted-600 dark:text-muted-400"
                      >
                        This project and all related tasks should completed
                        within 3 months.
                      </BaseParagraph>
                    </div>
                  </div>
                  <div>
                    <Icon
                      name="solar:wallet-2-bold-duotone"
                      class="text-primary-500 mb-2 size-6"
                    />
                    <div>
                      <BaseHeading
                        tag="h3"
                        size="sm"
                        weight="medium"
                        class="text-muted-900 dark:text-white"
                      >
                        Fixed
                      </BaseHeading>
                      <BaseParagraph
                        size="xs"
                        lead="tight"
                        class="text-muted-600 dark:text-muted-400"
                      >
                        This project's budget planning is based on an imutable
                        fixed bid.
                      </BaseParagraph>
                    </div>
                  </div>
                </div>
                <div>
                  <h4
                    class="text-muted-600 dark:text-muted-400 mb-6 font-sans text-xs font-medium uppercase"
                  >
                    Recent files
                  </h4>
                  <div class="grid gap-8 pb-6 sm:grid-cols-2">
                    <div
                      v-for="(file, index) in data?.project.files"
                      :key="index"
                      rounded="lg"
                    >
                      <div class="flex w-full items-center gap-2">
                        <img
                          :src="file.icon"
                          :alt="file.name"
                          class="max-w-[46px]"
                        >
                        <div>
                          <BaseHeading
                            tag="h3"
                            size="sm"
                            weight="medium"
                            class="text-muted-900 dark:text-white"
                          >
                            {{ file.name }}
                          </BaseHeading>
                          <BaseParagraph size="xs" class="text-muted-600 dark:text-muted-400">
                            <span>{{ file.size }}</span>
                            <span class="px-1 text-base leading-tight">
                              &middot;
                            </span>
                            <span>v{{ file.version }}</span>
                          </BaseParagraph>
                        </div>
                        <div class="ms-auto">
                          <BaseTooltip content="Download file">
                            <BaseButton
                              rounded="full"
                              size="icon-sm"
                            >
                              <Icon name="lucide:arrow-down" />
                            </BaseButton>
                          </BaseTooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-4">
              <div class="space-y-4">
                <!-- Actions -->
                <div class="flex items-center justify-end gap-3">
                  <BaseButton
                    rounded="md"
                    :to="`/layouts/projects/board/${slug}`"
                  >
                    <Icon name="solar:widget-4-linear" class="size-4" />
                    <span>Open Board</span>
                  </BaseButton>
                  <BaseDropdown
                    label="Manage"
                    placement="bottom-end"
                    size="md"
                    class="z-20"
                    rounded="md"
                  >
                    <BaseDropdownItem
                      :to="`/layouts/projects/board/${slug}`"
                      title="Board view"
                      text="Swicth to board view"
                      class="sm:hidden"
                    >
                      <template #start>
                        <Icon name="solar:widget-4-linear" class="me-2 block size-5" />
                      </template>
                    </BaseDropdownItem>
                    <BaseDropdownSeparator class="sm:hidden" />
                    <BaseDropdownItem
                      to="#"
                      title="Edit"
                      text="Edit this project"
                    >
                      <template #start>
                        <Icon name="solar:pen-2-linear" class="me-2 block size-5" />
                      </template>
                    </BaseDropdownItem>
                    <BaseDropdownSeparator />
                    <BaseDropdownItem
                      to="#"
                      title="Permissions"
                      text="Manage permissions"
                    >
                      <template #start>
                        <Icon name="solar:lock-keyhole-linear" class="me-2 block size-5" />
                      </template>
                    </BaseDropdownItem>
                    <BaseDropdownItem
                      to="#"
                      title="Files"
                      text="Manage files"
                    >
                      <template #start>
                        <Icon name="solar:file-check-linear" class="me-2 block size-5" />
                      </template>
                    </BaseDropdownItem>
                    <BaseDropdownSeparator />
                    <BaseDropdownItem
                      to="#"
                      title="Delete"
                      text="Delete this project"
                    >
                      <template #start>
                        <Icon name="solar:trash-bin-minimalistic-linear" class="me-2 block size-5" />
                      </template>
                    </BaseDropdownItem>
                  </BaseDropdown>
                </div>
                <!-- Customer -->
                <BaseCard rounded="md" class="p-4 md:p-6">
                  <h4
                    class="text-muted-600 dark:text-muted-400 mb-6 font-sans text-xs font-medium uppercase"
                  >
                    Customer
                  </h4>

                  <div class="mb-4 flex items-center gap-2">
                    <BaseTooltip :content="data?.project.customer.name">
                      <BaseAvatar
                        :src="data?.project.customer.logo"
                        size="md"
                        class="bg-muted-100 dark:bg-muted-700"
                      />
                    </BaseTooltip>
                    <div>
                      <BaseHeading
                        tag="h5"
                        size="lg"
                        weight="medium"
                        lead="none"
                        class="line-clamp-1 text-muted-900 dark:text-white"
                      >
                        {{ data?.project.customer.name }}
                      </BaseHeading>
                      <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400">
                        {{ data?.project.customer.text }}
                      </BaseParagraph>
                    </div>
                  </div>
                  <div class="w-full space-y-1">
                    <div class="flex items-center justify-between">
                      <h4
                        class="text-muted-700 dark:text-muted-100 font-sans text-sm font-medium"
                      >
                        Progress
                      </h4>
                      <div>
                        <span class="text-muted-400 font-sans text-sm">
                          {{ data?.project.completed }}%
                        </span>
                      </div>
                    </div>
                    <BaseProgress
                      size="xs"
                      variant="primary"
                      :model-value="data?.project.completed"
                    />
                  </div>
                </BaseCard>
                <!-- Tools -->
                <BaseCard rounded="md" class="p-4 md:p-6">
                  <h4
                    class="text-muted-600 dark:text-muted-400 mb-6 font-sans text-xs font-medium uppercase"
                  >
                    Project Tools
                  </h4>
                  <div class="space-y-8">
                    <div
                      v-for="tool in data?.project.tools"
                      :key="tool.name"
                      class="flex items-center gap-2"
                    >
                      <BaseTooltip :content="tool.name">
                        <BaseAvatar
                          :src="tool.icon"
                          size="xs"
                          class="bg-muted-100 dark:bg-muted-700"
                        />
                      </BaseTooltip>
                      <div>
                        <BaseHeading
                          tag="h5"
                          size="sm"
                          weight="medium"
                          lead="none"
                          class="line-clamp-1 text-muted-900 dark:text-white"
                        >
                          {{ tool.name }}
                        </BaseHeading>
                        <BaseParagraph size="xs" class="text-muted-600 dark:text-muted-400">
                          {{ tool.description }}
                        </BaseParagraph>
                      </div>
                    </div>
                  </div>
                </BaseCard>
                <!-- Stacks -->
                <BaseCard rounded="md" class="p-4 md:p-6">
                  <h4
                    class="text-muted-600 dark:text-muted-400 mb-6 font-sans text-xs font-medium uppercase"
                  >
                    Project Stacks
                  </h4>
                  <div class="space-y-8">
                    <div
                      v-for="stack in data?.project.stacks"
                      :key="stack.name"
                      class="flex items-center gap-2"
                    >
                      <BaseTooltip :content="stack.name">
                        <BaseAvatar
                          :src="stack.icon"
                          size="xs"
                          class="bg-muted-100 dark:bg-muted-700"
                        />
                      </BaseTooltip>
                      <div>
                        <BaseHeading
                          tag="h5"
                          size="sm"
                          weight="medium"
                          lead="none"
                          class="line-clamp-1 text-muted-900 dark:text-white"
                        >
                          {{ stack.name }}
                        </BaseHeading>
                        <BaseParagraph size="xs" class="text-muted-600 dark:text-muted-400">
                          {{ stack.description }}
                        </BaseParagraph>
                      </div>
                    </div>
                  </div>
                </BaseCard>
              </div>
            </div>
          </div>
        </BaseTabsContent>
        <!-- Team -->
        <BaseTabsContent value="team">
          <div class="grid gap-4 sm:grid-cols-3">
            <BaseCard
              rounded="md"
              class="hover:border-primary-500! relative"
            >
              <NuxtLink to="#">
                <Icon
                  name="uiw:star-on"
                  class="text-primary-500 absolute end-6 top-6"
                />
                <div class="flex flex-col items-center p-4 sm:flex-row">
                  <div class="flex gap-3">
                    <BaseAvatar
                      :src="data?.project.owner.avatar"
                      :badge-src="data?.project.owner.badge"
                      :text="data?.project.owner.name"
                      size="md"
                      class="bg-muted-500/20 text-muted-500"
                    />
                    <div class="leading-none">
                      <h4
                        class="text-muted-900 dark:text-muted-100 font-sans text-base font-medium"
                      >
                        {{ data?.project.owner.name }}
                      </h4>
                      <p class="text-muted-600 dark:text-muted-400 mb-2 font-sans text-xs">
                        Project owner
                      </p>
                      <p
                        class="text-muted-500 dark:text-muted-400 font-sans text-xs"
                      >
                        {{ data?.project.owner.bio }}
                      </p>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </BaseCard>
            <BaseCard
              v-for="item in data?.project.team"
              :key="item.id"
              rounded="md"
              class="hover:border-primary-500!"
            >
              <NuxtLink to="#">
                <div class="flex flex-col items-center p-4 sm:flex-row">
                  <div class="flex gap-3">
                    <BaseAvatar
                      :src="item.src"
                      :badge-src="item.badge"
                      :text="item.text"
                      size="md"
                      class="bg-muted-500/20 text-muted-500"
                    />
                    <div class="leading-none">
                      <h4
                        class="text-muted-900 dark:text-muted-100 font-sans text-base font-medium"
                      >
                        {{ item.tooltip }}
                      </h4>
                      <p class="text-muted-600 dark:text-muted-400 mb-2 font-sans text-xs">
                        {{ item.role }}
                      </p>
                      <p
                        class="text-muted-500 dark:text-muted-400 font-sans text-xs"
                      >
                        {{ item.bio }}
                      </p>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </BaseCard>
            <!-- Invite -->
            <div>
              <button
                type="button"
                class="border-muted-300 dark:border-muted-800 hover:border-primary-500 dark:hover:border-primary-500 group flex size-full items-center justify-center gap-2 rounded-lg border-2 border-dashed px-6 py-8 transition-colors duration-300"
              >
                <span class="block text-center font-sans">
                  <span
                    class="text-muted-800 dark:text-muted-100 group-hover:text-primary-500 dark:group-hover:text-primary-500 block transition-colors duration-300"
                  >
                    Invite a new member
                  </span>
                  <span class="text-muted-400 block text-sm">
                    Send an invitation to join your project team
                  </span>
                </span>
              </button>
            </div>
          </div>
        </BaseTabsContent>
        <!-- Tasks -->
        <BaseTabsContent value="tasks">
          <div class="grid gap-4 sm:grid-cols-3">
            <BaseCard
              v-for="item in data?.project.tasks"
              :key="item.id"
              rounded="md"
              class="hover:border-primary-500! flex cursor-pointer flex-col"
              @click="openTaskPanel(item.id, data?.project?.tasks)"
            >
              <div class="flex flex-col items-center p-5 sm:flex-row text-start">
                <div class="flex flex-col gap-3 sm:flex-row">
                  <Icon
                    v-if="item.status === 0"
                    name="solar:add-circle-bold-duotone"
                    class="text-muted-400 size-6 shrink-0"
                  />
                  <Icon
                    v-else-if="item.status === 5"
                    name="solar:check-circle-bold-duotone"
                    class="text-muted-400 size-6 shrink-0"
                  />
                  <Icon
                    v-else-if="item.status === 1"
                    name="solar:stopwatch-bold-duotone"
                    class="text-muted-400 size-6 shrink-0"
                  />
                  <Icon
                    v-else-if="item.status === 2 || item.status === 3"
                    name="solar:shield-warning-bold-duotone"
                    class="text-muted-400 size-6 shrink-0"
                  />
                  <div class="leading-none">
                    <h4
                      class="text-muted-800 dark:text-muted-100 mb-2 font-sans text-base font-medium leading-tight"
                    >
                      {{ item.name }}
                    </h4>
                    <p class="text-muted-400 line-clamp-2 font-sans text-xs">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="bg-muted-50 dark:bg-muted-900/50 mt-auto flex items-center justify-between rounded-b-lg px-5 py-3"
              >
                <div class="flex max-w-[180px] grow items-center gap-2">
                  <BaseTooltip :content="item.assignee.tooltip">
                    <BaseAvatar
                      size="xxs"
                      :src="item.assignee.src"
                    />
                  </BaseTooltip>
                  <BaseProgress
                    :model-value="item.completion"
                    size="xs"
                    variant="primary"
                  />
                </div>
                <div class="text-muted-400 flex items-center gap-4">
                  <div class="flex items-center gap-1 text-sm">
                    <Icon name="solar:paperclip-linear" class="size-4" />
                    <span class="font-sans">
                      {{ item.files.length }}
                    </span>
                  </div>
                  <div class="flex items-center gap-1 text-sm">
                    <Icon name="solar:chat-square-call-linear" class="size-4" />
                    <span class="font-sans">
                      {{ item.comments.length }}
                    </span>
                  </div>
                </div>
              </div>
            </BaseCard>
            <!-- Invite -->
            <div>
              <button
                type="button"
                class="border-muted-300 dark:border-muted-800 hover:border-primary-500 dark:hover:border-primary-500 group flex size-full items-center justify-center gap-2 rounded-lg border-2 border-dashed p-6 transition-colors duration-300"
              >
                <span class="block text-center font-sans">
                  <span
                    class="font-medium text-muted-900 dark:text-muted-100 group-hover:text-primary-500 dark:group-hover:text-primary-500 block transition-colors duration-300"
                  >
                    Create a new task
                  </span>
                  <span class="text-muted-400 block text-sm">
                    Add a new task to your project
                  </span>
                </span>
              </button>
            </div>
          </div>
        </BaseTabsContent>
      </BaseTabs>
    </div>
  </div>
</template>
