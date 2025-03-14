<script setup lang="ts">
import { DemoPanelTask } from '#components'
import { Container, Draggable } from 'vue3-smooth-dnd'

definePageMeta({
  title: 'Project Board',
  // layout: 'empty',
  preview: [
    {
      title: 'Project board',
      description: 'For a fitness project kanban board',
      categories: ['layouts', 'projects', 'kanban'],
      src: '/img/screens/layouts-projects-board.png',
      srcDark: '/img/screens/layouts-projects-board-dark.png',
      order: 74,
      params: {
        slug: 'health-and-fitness-dashboard',
      },
    },
    {
      title: 'Project board',
      description: 'For a banking project kanban board',
      categories: ['layouts', 'projects', 'kanban'],
      src: '/img/screens/layouts-projects-board-2.png',
      srcDark: '/img/screens/layouts-projects-board-2-dark.png',
      order: 74,
      params: {
        slug: 'banking-and-finance-dashboard',
      },
    },
  ],
})

interface ColumnContent {
  title: string
  tasks: any[]
}

interface Column {
  [key: string]: ColumnContent
}

const columns = reactive<Column>({
  new: {
    title: 'New',
    tasks: [],
  },
  inProgress: {
    title: 'In Progress',
    tasks: [],
  },
  blocked: {
    title: 'Blocked',
    tasks: [],
  },
  onHold: {
    title: 'On Hold',
    tasks: [],
  },
  inReview: {
    title: 'In Review',
    tasks: [],
  },
  done: {
    title: 'Done',
    tasks: [],
  },
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

const tasks = ref(data.value?.project?.tasks)

if (tasks.value) {
  for (const task of tasks.value) {
    switch (task.status) {
      case 0:
        columns.new?.tasks.push(task)
        break
      case 1:
        columns.inProgress?.tasks.push(task)
        break
      case 2:
        columns.blocked?.tasks.push(task)
        break
      case 3:
        columns.onHold?.tasks.push(task)
        break
      case 4:
        columns.inReview?.tasks.push(task)
        break
      case 5:
        columns.done?.tasks.push(task)
        break
    }
  }
}

const board = computed(() => Object.values(columns || {}))

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

function onDrop(column: ColumnContent, dropResult: any) {
  if (
    typeof dropResult?.addedIndex !== 'number'
    || typeof dropResult?.removedIndex !== 'number'
  ) {
    return
  }
  if (dropResult.addedIndex === dropResult.removedIndex) {
    return
  }

  let itemToAdd

  if (dropResult.removedIndex !== null) {
    itemToAdd = column.tasks.splice(dropResult.removedIndex, 1)[0]
  }
  if (dropResult.addedIndex !== null) {
    column.tasks.splice(dropResult.addedIndex, 0, itemToAdd)
  }
}
</script>

<template>
  <div class="ps-4 md:ps-6 lg:ps-8">
    <div
      v-if="data?.project !== undefined"
      class="flex h-12 items-center justify-between pe-4 xl:pe-10"
    >
      <div class="flex items-center gap-2">
        <BaseAvatar :src="data?.project.customer.logo" size="xs" />
        <div>
          <BaseParagraph size="xs" class="text-muted-400">
            {{ data?.project.customer.name }}
          </BaseParagraph>
          <BaseHeading
            as="h2"
            size="sm"
            weight="medium"
          >
            {{ data?.project.name }}
          </BaseHeading>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <BaseAvatarGroup :avatars="data?.project.team" size="xs" />
        <BaseTooltip content="Project details">
          <BaseButton
            :to="`/layouts/projects/details/${slug}`"
            size="icon-sm"
            rounded="full"
          >
            <Icon name="solar:widget-4-linear" class="size-4" />
          </BaseButton>
        </BaseTooltip>
        <BaseTooltip content="New Task">
          <BaseButton size="icon-sm" rounded="full" variant="primary">
            <Icon name="lucide:plus" class="size-4" />
          </BaseButton>
        </BaseTooltip>
      </div>
    </div>
    <div class="flex h-[calc(100vh_-_128px)] grow space-x-6 overflow-auto pt-2">
      <!-- Column -->
      <div
        v-for="column in board"
        :key="column.title"
        class="flex h-full w-72 shrink-0 flex-col"
      >
        <!-- Column header -->
        <div class="flex h-14 shrink-0 items-center px-2">
          <!-- Column title -->
          <span class="block font-sans text-sm font-semibold">{{
            column.title
          }}</span>
          <!-- Column count -->
          <span
            class="text-primary-500 dark:text-sunny ms-2 flex size-5 items-center justify-center text-sm font-semibold"
          >{{ column.tasks.length }}</span>
          <!-- Column action -->
          <button
            class="text-primary-500 dark:text-sunny hover:bg-primary-500/20 dark:hover:bg-sunny/20 ms-auto flex size-6 items-center justify-center rounded-full transition-colors duration-300"
          >
            <Icon name="lucide:plus" class="size-4" />
          </button>
        </div>
        <!-- Scrollable area -->
        <div class="nui-slimscroll overflow-auto pb-10 pe-2">
          <Container
            tag="div"
            class="flex flex-col gap-y-4"
            orientation="vertical"
            :group-name="column.title"
            drag-class="transform rotate-2 transform-gpu"
            drop-class="opacity-40"
            :drop-placeholder="{
              className:
                'mt-4 border-muted-200 border-dashed dark:border-muted-700 dark:bg-muted-800/60 group relative flex cursor-pointer flex-col items-start rounded-lg border bg-white/90 p-4 hover:bg-white opacity-60 mb-4',
            }"
            @drop="(dropResult: any) => onDrop(column, dropResult)"
          >
            <!-- Board card -->
            <template v-if="column.tasks.length > 0">
              <Draggable v-for="task in column.tasks" :key="task.id">
                <div
                  role="button"
                  tabindex="0"
                  class="border-muted-200 dark:border-muted-800 dark:bg-muted-950 group relative flex cursor-pointer flex-col items-start rounded-lg border bg-white/90 p-4 hover:bg-white dark:hover:bg-muted-950/80"
                  draggable="true"
                  @click="() => openTaskPanel(task.id, data?.project?.tasks)"
                >
                  <div class="relative mb-2">
                    <div
                      class="mb-2 flex w-full items-center justify-between gap-2"
                    >
                      <BaseTag
                        rounded="full"
                        variant="muted"
                        class="m-0 -ms-1 inline-flex h-6 scale-90 items-center py-0 text-xs font-semibold"
                      >
                        Task #{{ task.id }}
                      </BaseTag>
                      <BaseText size="xs" class="text-muted-400">
                        {{
                          task.created
                        }}
                      </BaseText>
                    </div>
                    <BaseHeading
                      as="h4"
                      size="sm"
                      weight="medium"
                      class="line-clamp-2"
                    >
                      <span>{{ task.name }}</span>
                    </BaseHeading>
                  </div>
                  <div
                    class="text-muted-500 dark:text-muted-200 mt-2 flex w-full items-center justify-between text-xs font-medium"
                  >
                    <div class="flex items-center gap-2">
                      <BaseAvatar
                        :src="task.assignee.src"
                        size="xxs"
                        class="shrink-0"
                      />
                      <BaseText size="xs" class="text-muted-600 dark:text-muted-400">
                        {{
                          task.assignee.tooltip
                        }}
                      </BaseText>
                    </div>
                    <div class="text-muted-400 flex items-center gap-3">
                      <BaseTooltip
                        v-if="task.checklist.length > 0"
                        :content="`${task.checklist.length} subtask${
                          task.checklist.length > 1 ? 's' : ''
                        } in checklist`"
                      >
                        <Icon name="solar:check-square-linear" class="size-4" />
                      </BaseTooltip>
                      <BaseTooltip
                        v-if="task.files.length > 0"
                        :content="`${task.files.length} file${
                          task.files.length > 1 ? 's' : ''
                        } uploaded`"
                      >
                        <Icon name="solar:file-linear" class="size-4" />
                      </BaseTooltip>
                      <BaseTooltip
                        v-if="task.comments.length > 0"
                        :content="`${task.comments.length} comment${
                          task.comments.length > 1 ? 's' : ''
                        }`"
                      >
                        <Icon name="solar:chat-dots-linear" class="size-4" />
                      </BaseTooltip>
                    </div>
                  </div>
                </div>
              </Draggable>
            </template>
            <!-- Placeholder -->
            <div v-else>
              <div
                class="text-muted-400 mt-10 flex items-center justify-center"
              >
                <Icon name="solar:widget-6-linear" class="size-8" />
              </div>
              <div class="mt-2 text-center">
                <BaseHeading
                  as="h4"
                  size="md"
                  weight="medium"
                  class="mb-1 text-muted-900 dark:text-muted-100"
                >
                  <span>Nothing to show</span>
                </BaseHeading>
                <BaseParagraph
                  size="xs"
                  lead="tight"
                  class="text-muted-500 dark:text-muted-400 mx-auto max-w-[230px] font-sans!"
                >
                  <span>There are no pending tasks to show in here for now.</span>
                </BaseParagraph>
                <button
                  class="text-primary-500 dark:text-sunny mx-auto mt-2 flex items-center justify-center gap-1 font-sans text-xs underline-offset-4 hover:underline"
                >
                  <Icon name="lucide:plus" class="size-3" />
                  <span>New Task</span>
                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <!-- Add Column -->
      <div class="flex w-72 shrink-0 flex-col">
        <!-- Column header -->
        <div class="flex h-14 shrink-0 items-center px-2">
          <!-- Column title -->
          <span class="block font-sans text-sm font-semibold">Customize</span>
        </div>
        <!-- Add button -->
        <div class="w-full">
          <button
            class="text-muted-500 dark:text-muted-400 hover:text-primary-500 dark:hover:text-sunny border-muted-300 dark:border-muted-600 hover:border-primary-500 dark:hover:border-sunny flex h-12 w-full items-center justify-center gap-x-2 rounded-xl border-2 border-dashed px-6 font-sans transition-colors duration-300 hover:border-solid"
          >
            <Icon name="ph:gear-six-duotone" class="size-4" />
            <span class="text-sm">Manage columns</span>
          </button>
        </div>
      </div>
      <div class="w-6 shrink-0" />
    </div>
  </div>
</template>

<style>
.smooth-dnd-container.vertical > .smooth-dnd-draggable-wrapper {
  overflow: visible;
}
</style>
