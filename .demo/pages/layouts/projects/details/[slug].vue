<script setup lang="ts">
definePageMeta({
  title: 'Project Details',
})

const { open } = usePanels()

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

const currentTask = ref()

function openTaskPanel(id: number, project: any) {
  currentTask.value = project.tasks.find((task: any) => task.id === id)
  open('task')
  console.log('TASK: ', currentTask.value)
}
</script>

<template>
  <div class="relative">
    <div class="absolute top-2 right-0 z-20">
      <BaseDropdown
        flavor="context"
        label="Dropdown"
        orientation="end"
        condensed
        class="z-20"
        shape="curved"
      >
        <BaseDropdownItem to="#" title="Edit" text="Edit this project">
          <template #start>
            <Icon name="ph:pencil-duotone" class="w-5 h-5 block mr-2" />
          </template>
        </BaseDropdownItem>
        <BaseDropdownDivide />
        <BaseDropdownItem to="#" title="Permissions" text="Manage permissions">
          <template #start>
            <Icon name="ph:lock-duotone" class="w-5 h-5 block mr-2" />
          </template>
        </BaseDropdownItem>
        <BaseDropdownItem to="#" title="Files" text="Manage files">
          <template #start>
            <Icon name="ph:file-duotone" class="w-5 h-5 block mr-2" />
          </template>
        </BaseDropdownItem>
        <BaseDropdownDivide />
        <BaseDropdownItem to="#" title="Delete" text="Delete this project">
          <template #start>
            <Icon name="ph:trash-duotone" class="w-5 h-5 block mr-2" />
          </template>
        </BaseDropdownItem>
      </BaseDropdown>
    </div>
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
          />
          <img
            class="hidden dark:block"
            src="/img/illustrations/placeholders/flat/placeholder-projects-dark.svg"
            alt="Placeholder image"
          />
        </template>
      </BasePlaceholderPage>
    </div>
    <div v-else class="h-full">
      <BaseTabs
        selected="overview"
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
        <template #tab="{ activeValue }">
          <!-- Overview -->
          <div v-if="activeValue === 'overview'">
            <div class="grid grid-cols-12 gap-6">
              <div class="col-span-12 sm:col-span-8">
                <BaseCard class="p-10 space-y-12">
                  <div
                    class="flex items-center justify-between gap-8 pb-12 border-b border-muted-200 dark:border-muted-700"
                  >
                    <div>
                      <BaseHeading tag="h2" size="2xl" weight="medium">
                        {{ data?.project.name }}
                      </BaseHeading>
                      <BaseParagraph size="lg" class="text-muted-600">
                        {{ data?.project.category }}
                      </BaseParagraph>
                      <BaseParagraph size="sm" class="text-muted-400 py-4">
                        {{ data?.project.description }}
                      </BaseParagraph>
                      <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                          <BaseAvatar
                            :src="data?.project.owner.avatar"
                            :tooltip="`${data?.project.owner.name} owns this project`"
                          />
                          <div>
                            <BaseHeading tag="h3" size="sm" weight="medium">
                              {{ data?.project.owner.name }}
                            </BaseHeading>
                            <BaseParagraph size="xs" class="text-muted-400">
                              Project owner
                            </BaseParagraph>
                          </div>
                        </div>
                        <BaseAvatarGroup :avatars="data?.project.team" />
                      </div>
                    </div>
                    <div class="w-72 shrink-0">
                      <img
                        :src="data?.project.image"
                        :alt="data?.project.name"
                        class="rounded-lg"
                      />
                    </div>
                  </div>
                  <div
                    class="grid sm:grid-cols-4 gap-4 pb-12 border-b border-muted-200 dark:border-muted-700"
                  >
                    <div>
                      <Icon
                        name="ph:pen-nib-duotone"
                        class="w-6 h-6 mb-2 text-primary-500"
                      />
                      <div>
                        <BaseHeading tag="h3" size="sm" weight="medium">
                          UI/UX Design
                        </BaseHeading>
                        <BaseParagraph
                          size="xs"
                          lead="tight"
                          class="text-muted-400"
                        >
                          Designing a perfect user experience is in the scope of
                          this project.
                        </BaseParagraph>
                      </div>
                    </div>
                    <div>
                      <Icon
                        name="ph:timer-duotone"
                        class="w-6 h-6 mb-2 text-primary-500"
                      />
                      <div>
                        <BaseHeading tag="h3" size="sm" weight="medium">
                          1 Week Sprints
                        </BaseHeading>
                        <BaseParagraph
                          size="xs"
                          lead="tight"
                          class="text-muted-400"
                        >
                          This project development iterations follow a 1 week
                          sprint pattern.
                        </BaseParagraph>
                      </div>
                    </div>
                    <div>
                      <Icon
                        name="ph:calendar-blank-duotone"
                        class="w-6 h-6 mb-2 text-primary-500"
                      />
                      <div>
                        <BaseHeading tag="h3" size="sm" weight="medium">
                          3 Months
                        </BaseHeading>
                        <BaseParagraph
                          size="xs"
                          lead="tight"
                          class="text-muted-400"
                        >
                          This project and all related tasks should completed
                          within 3 months.
                        </BaseParagraph>
                      </div>
                    </div>
                    <div>
                      <Icon
                        name="ph:sketch-logo-duotone"
                        class="w-6 h-6 mb-2 text-primary-500"
                      />
                      <div>
                        <BaseHeading tag="h3" size="sm" weight="medium">
                          Fixed
                        </BaseHeading>
                        <BaseParagraph
                          size="xs"
                          lead="tight"
                          class="text-muted-400"
                        >
                          This project's budget planning is based on an imutable
                          fixed bid.
                        </BaseParagraph>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4
                      class="mb-6 font-sans text-xs font-semibold uppercase text-muted-400"
                    >
                      Recent files
                    </h4>
                    <div class="grid sm:grid-cols-2 gap-8 pb-6">
                      <div
                        v-for="(file, index) in data?.project.files"
                        :key="index"
                        shape="curved"
                      >
                        <div class="w-full flex items-center gap-2">
                          <img
                            :src="file.icon"
                            :alt="file.name"
                            class="max-w-[46px]"
                          />
                          <div>
                            <BaseHeading tag="h3" size="sm" weight="medium">
                              {{ file.name }}
                            </BaseHeading>
                            <BaseParagraph size="xs" class="text-muted-400">
                              <span>{{ file.size }}</span>
                              <span class="text-base px-1 leading-tight">
                                &middot;
                              </span>
                              <span>v{{ file.version }}</span>
                            </BaseParagraph>
                          </div>
                          <div class="ml-auto">
                            <BaseButtonIcon
                              shape="full"
                              tooltip="Download file"
                              small
                            >
                              <Icon name="lucide:arrow-down" />
                            </BaseButtonIcon>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </BaseCard>
              </div>
              <div class="col-span-12 sm:col-span-4">
                <div class="space-y-6">
                  <!-- Customer -->
                  <BaseCard class="p-8">
                    <h4
                      class="mb-6 font-sans text-xs font-semibold uppercase text-muted-400"
                    >
                      Customer
                    </h4>

                    <div class="flex items-center gap-2 mb-4">
                      <BaseAvatar
                        :src="data?.project.customer.logo"
                        size="md"
                        :tooltip="data?.project.customer.name"
                        class="bg-muted-100 dark:bg-muted-700"
                      />
                      <div>
                        <BaseHeading
                          tag="h5"
                          size="lg"
                          weight="medium"
                          lead="none"
                          class="line-clamp-1"
                        >
                          {{ data?.project.customer.name }}
                        </BaseHeading>
                        <BaseParagraph size="sm" class="text-muted-400">
                          {{ data?.project.customer.text }}
                        </BaseParagraph>
                      </div>
                    </div>
                    <div class="w-full space-y-1">
                      <div class="flex items-center justify-between">
                        <h4
                          class="font-sans text-sm font-medium text-muted-700 dark:text-muted-100"
                        >
                          Progress
                        </h4>
                        <div>
                          <span class="font-sans text-sm text-muted-400">
                            {{ data?.project.completed }}%
                          </span>
                        </div>
                      </div>
                      <BaseProgress
                        size="xs"
                        color="primary"
                        :value="data?.project.completed"
                      />
                    </div>
                  </BaseCard>
                  <!-- Tools -->
                  <BaseCard class="p-8">
                    <h4
                      class="mb-6 font-sans text-xs font-semibold uppercase text-muted-400"
                    >
                      Project Tools
                    </h4>
                    <div class="space-y-8">
                      <div
                        v-for="tool in data?.project.tools"
                        :key="tool.name"
                        class="flex items-center gap-2"
                      >
                        <BaseAvatar
                          :src="tool.icon"
                          size="xs"
                          :tooltip="tool.name"
                          class="bg-muted-100 dark:bg-muted-700"
                        />
                        <div>
                          <BaseHeading
                            tag="h5"
                            size="sm"
                            weight="medium"
                            lead="none"
                            class="line-clamp-1"
                          >
                            {{ tool.name }}
                          </BaseHeading>
                          <BaseParagraph size="xs" class="text-muted-400">
                            {{ tool.description }}
                          </BaseParagraph>
                        </div>
                      </div>
                    </div>
                  </BaseCard>
                  <!-- Stacks -->
                  <BaseCard class="p-8">
                    <h4
                      class="mb-6 font-sans text-xs font-semibold uppercase text-muted-400"
                    >
                      Project Stacks
                    </h4>
                    <div class="space-y-8">
                      <div
                        v-for="stack in data?.project.stacks"
                        :key="stack.name"
                        class="flex items-center gap-2"
                      >
                        <BaseAvatar
                          :src="stack.icon"
                          size="xs"
                          :tooltip="stack.name"
                          class="bg-muted-100 dark:bg-muted-700"
                        />
                        <div>
                          <BaseHeading
                            tag="h5"
                            size="sm"
                            weight="medium"
                            lead="none"
                            class="line-clamp-1"
                          >
                            {{ stack.name }}
                          </BaseHeading>
                          <BaseParagraph size="xs" class="text-muted-400">
                            {{ stack.description }}
                          </BaseParagraph>
                        </div>
                      </div>
                    </div>
                  </BaseCard>
                </div>
              </div>
            </div>
          </div>
          <!-- Team -->
          <div v-else-if="activeValue === 'team'">
            <div class="grid sm:grid-cols-3 gap-6">
              <BaseCard
                elevated-hover
                class="relative hover:!border-primary-500"
              >
                <NuxtLink to="/">
                  <Icon
                    name="uiw:star-on"
                    class="absolute top-6 right-6 text-primary-500"
                  />
                  <div class="p-5 flex flex-col sm:flex-row items-center">
                    <div class="flex flex-col sm:flex-row gap-3">
                      <BaseAvatar
                        :src="data?.project.owner.avatar"
                        :badge-src="data?.project.owner.badge"
                        :text="data?.project.owner.name"
                        size="lg"
                        class="bg-muted-500/20 text-muted-500"
                      />
                      <div class="leading-none text-center sm:text-left">
                        <h4
                          class="font-sans text-base font-medium text-muted-800 dark:text-muted-100"
                        >
                          {{ data?.project.owner.name }}
                        </h4>
                        <p class="mb-2 font-sans text-xs text-muted-400">
                          Project owner
                        </p>
                        <p
                          class="font-sans text-xs text-muted-500 dark:text-muted-400"
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
                elevated-hover
                class="hover:!border-primary-500"
              >
                <NuxtLink to="/">
                  <div class="p-5 flex flex-col sm:flex-row items-center">
                    <div class="flex flex-col sm:flex-row gap-3">
                      <BaseAvatar
                        :src="item.src"
                        :badge-src="item.badge"
                        :text="item.text"
                        size="lg"
                        class="bg-muted-500/20 text-muted-500"
                      />
                      <div class="leading-none text-center sm:text-left">
                        <h4
                          class="font-sans text-base font-medium text-muted-800 dark:text-muted-100"
                        >
                          {{ item.tooltip }}
                        </h4>
                        <p class="mb-2 font-sans text-xs text-muted-400">
                          {{ item.role }}
                        </p>
                        <p
                          class="font-sans text-xs text-muted-500 dark:text-muted-400"
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
                  class="group flex items-center justify-center gap-2 h-full w-full p-6 rounded-lg border-2 border-dashed border-muted-300 dark:border-muted-800 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"
                >
                  <span class="block text-center font-sans">
                    <span
                      class="block text-muted-800 dark:text-muted-100 group-hover:text-primary-500 dark:group-hover:text-primary-500 transition-colors duration-300"
                    >
                      Invite a new member
                    </span>
                    <span class="block text-sm text-muted-400">
                      Send an invitation to join your project team
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <!-- Tasks -->
          <div v-else-if="activeValue === 'tasks'">
            <div class="grid sm:grid-cols-3 gap-6">
              <BaseCard
                v-for="item in data?.project.tasks"
                :key="item.id"
                elevated-hover
                class="flex flex-col hover:!border-primary-500"
                @click="openTaskPanel(item.id, data?.project)"
              >
                <div class="p-5 flex flex-col sm:flex-row items-center">
                  <div class="flex flex-col sm:flex-row gap-3">
                    <Icon
                      name="ph:check-circle-duotone"
                      class="shrink-0 w-6 h-6 text-muted-400"
                    />
                    <div class="leading-none text-center sm:text-left">
                      <h4
                        class="mb-2 font-sans text-base font-medium leading-tight text-muted-800 dark:text-muted-100"
                      >
                        {{ item.name }}
                      </h4>
                      <p class="font-sans text-xs text-muted-400">
                        {{ item.description }}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="mt-auto px-5 py-3 flex items-center justify-between rounded-b-lg bg-muted-50 dark:bg-muted-700/50"
                >
                  <div class="grow max-w-[180px]">
                    <BaseProgress :value="item.completion" size="xs" />
                  </div>
                  <div class="flex items-center gap-4 text-muted-400">
                    <div class="flex items-center gap-1 text-sm">
                      <Icon name="ph:paperclip-duotone" class="w-4 h-4" />
                      <span class="font-sans">
                        {{ item.files.length }}
                      </span>
                    </div>
                    <div class="flex items-center gap-1 text-sm">
                      <Icon name="ph:chat-circle-duotone" class="w-4 h-4" />
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
                  class="group flex items-center justify-center gap-2 h-full w-full p-6 rounded-lg border-2 border-dashed border-muted-300 dark:border-muted-800 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"
                >
                  <span class="block text-center font-sans">
                    <span
                      class="block text-muted-800 dark:text-muted-100 group-hover:text-primary-500 dark:group-hover:text-primary-500 transition-colors duration-300"
                    >
                      Create a new task
                    </span>
                    <span class="block text-sm text-muted-400">
                      Add a new task to your project
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </template>
      </BaseTabs>
    </div>
  </div>
</template>
