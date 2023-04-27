<script setup lang="ts">
import { Container, Draggable } from 'vue3-smooth-dnd'

definePageMeta({
  title: 'Project Board',
  layout: 'empty',
  preview: {
    title: 'Project board',
    description: 'For displaying a kanban board',
    categories: ['layouts', 'projects'],
    src: '/img/screens/layouts-projects-board.png',
    srcDark: '/img/screens/layouts-projects-board-dark.png',
    order: 74,
  },
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
        columns.new.tasks.push(task)
        break
      case 1:
        columns.inProgress.tasks.push(task)
        break
      case 2:
        columns.blocked.tasks.push(task)
        break
      case 3:
        columns.onHold.tasks.push(task)
        break
      case 4:
        columns.inReview.tasks.push(task)
        break
      case 5:
        columns.done.tasks.push(task)
        break
    }
  }
}

const board = computed(() => Object.values(columns || {}))

const currentTask = ref()

function openTaskPanel(id: number, tasks: any) {
  currentTask.value = tasks.find((task: any) => task.id === id)
  open('task', { task: currentTask })
}

function onDrop(column: ColumnContent, dropResult: any) {
  if (
    typeof dropResult?.addedIndex !== 'number' ||
    typeof dropResult?.removedIndex !== 'number'
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
  <TairoSidebarLayout
    horizontal-scroll
    class="bg-muted-100 dark:bg-muted-900 h-screen w-full"
  >
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
          <BaseHeading as="h2" size="sm" weight="medium">
            {{ data?.project.name }}
          </BaseHeading>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <BaseAvatarGroup :avatars="data?.project.team" size="xs" />
        <BaseButtonIcon
          :to="`/layouts/projects/details/${slug}`"
          shape="curved"
          data-tooltip="Project details"
        >
          <Icon name="lucide:layout-template" class="h-4 w-4" />
        </BaseButtonIcon>
        <BaseButtonIcon shape="full" data-tooltip="New task">
          <Icon name="lucide:plus" class="h-4 w-4" />
        </BaseButtonIcon>
      </div>
    </div>
    <div class="flex h-[calc(100vh_-_133px)] grow space-x-6 overflow-auto pt-2">
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
            class="text-primary-500 dark:text-sunny ms-2 flex h-5 w-5 items-center justify-center text-sm font-semibold"
            >{{ column.tasks.length }}</span
          >
          <!-- Column action -->
          <button
            class="text-primary-500 dark:text-sunny hover:bg-primary-500/20 dark:hover:bg-sunny/20 ms-auto flex h-6 w-6 items-center justify-center rounded-full transition-colors duration-300"
          >
            <Icon name="lucide:plus" class="h-4 w-4" />
          </button>
        </div>
        <!-- Scrollable area -->
        <div class="slimscroll overflow-auto pb-10 pe-2">
          <Container
            tag="div"
            class="flex flex-col gap-y-4"
            orientation="vertical"
            :group-name="column.title"
            drag-class="transform rotate-2 transform-gpu"
            drop-class="opacity-40"
            :drop-placeholder="{
              className:
                'mt-4 border-muted-200 border-dashed dark:border-muted-700 dark:bg-muted-800 group relative flex cursor-pointer flex-col items-start rounded-lg border bg-white/90 p-4 hover:bg-white opacity-60 mb-4',
            }"
            @drop="(dropResult: any) => onDrop(column, dropResult)"
          >
            <!-- Board card -->
            <template v-if="column.tasks.length > 0">
              <Draggable v-for="task in column.tasks" :key="task.id">
                <div
                  class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 group relative flex cursor-pointer flex-col items-start rounded-lg border bg-white/90 p-4 hover:bg-white"
                  draggable="true"
                  @click="() => openTaskPanel(task.id, data?.project.tasks)"
                >
                  <div class="relative mb-2">
                    <div
                      class="mb-2 flex w-full items-center justify-between gap-2"
                    >
                      <BaseTag
                        shape="full"
                        flavor="pastel"
                        color="muted"
                        class="m-0 -ms-1 inline-flex h-6 scale-90 items-center py-0 text-xs font-semibold"
                        >Task #{{ task.id }}</BaseTag
                      >
                      <BaseText size="xs" class="text-muted-400">{{
                        task.created
                      }}</BaseText>
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
                      <BaseText size="xs" class="text-muted-400">{{
                        task.assignee.tooltip
                      }}</BaseText>
                    </div>
                    <div class="text-muted-400 flex items-center gap-3">
                      <div
                        v-if="task.checklist.length > 0"
                        :data-tooltip="`${task.checklist.length} subtask${
                          task.checklist.length > 1 ? 's' : ''
                        } in checklist`"
                        data-tooltip-position="left"
                      >
                        <Icon name="lucide:check-circle" class="h-4 w-4" />
                      </div>
                      <div
                        v-if="task.files.length > 0"
                        :data-tooltip="`${task.files.length} file${
                          task.files.length > 1 ? 's' : ''
                        } uploaded`"
                        data-tooltip-position="left"
                      >
                        <Icon name="lucide:file" class="h-4 w-4" />
                      </div>
                      <div
                        v-if="task.comments.length > 0"
                        :data-tooltip="`${task.comments.length} comment${
                          task.comments.length > 1 ? 's' : ''
                        }`"
                        data-tooltip-position="left"
                      >
                        <Icon name="lucide:message-circle" class="h-4 w-4" />
                      </div>
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
                <Icon name="ph:kanban-thin" class="h-12 w-12" />
              </div>
              <div class="mt-2 text-center">
                <BaseHeading as="h4" size="md" weight="light" class="mb-1">
                  <span>Nothing to show</span>
                </BaseHeading>
                <BaseParagraph
                  size="xs"
                  lead="tight"
                  class="text-muted-500 dark:text-muted-400 mx-auto max-w-[200px] !font-sans"
                >
                  <span
                    >There are no pending tasks to show in here for now.</span
                  >
                </BaseParagraph>
                <button
                  class="text-primary-500 dark:text-sunny mx-auto mt-2 flex items-center justify-center gap-1 font-sans text-xs underline-offset-4 hover:underline"
                >
                  <Icon name="lucide:plus" class="h-3 w-3" />
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
            <Icon name="ph:gear-six-duotone" class="h-4 w-4" />
            <span class="text-sm">Manage columns</span>
          </button>
        </div>
      </div>
      <div class="w-6 shrink-0"></div>
    </div>
  </TairoSidebarLayout>
</template>

<style>
.smooth-dnd-container.vertical > .smooth-dnd-draggable-wrapper {
  overflow: visible;
}
</style>
