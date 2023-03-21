<script setup lang="ts">
// @ts-expect-error
import { Container, Draggable } from 'vue3-smooth-dnd'

definePageMeta({
  title: 'Project Board',
  layout: 'empty',
})

interface ColumnContent {
  title: string
  tasks: any[]
}

interface Column {
  [key: string]: ColumnContent
}

const columns: Column = {
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
}

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

const tasks = ref(data.value?.project.tasks)

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

const board = Object.values(columns)

const currentTask = ref()

function openTaskPanel(id: number, tasks: any) {
  currentTask.value = tasks.find((task: any) => task.id === id)
  open('task', { task: currentTask })
}
</script>

<template>
  <TairoLayout
    horizontal-scroll
    class="bg-muted-100 dark:bg-muted-900 h-screen w-full"
  >
    <div
      v-if="data?.project !== undefined"
      class="h-12 flex items-center justify-between pr-4 xl:pr-10"
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
          tooltip="Project details"
        >
          <Icon name="lucide:layout-template" class="w-4 h-4" />
        </BaseButtonIcon>
        <BaseButtonIcon color="primary" shape="curved" tooltip="New task">
          <Icon name="lucide:plus" class="w-4 h-4" />
        </BaseButtonIcon>
      </div>
    </div>
    <div
      class="h-[calc(100vh_-_133px)] pt-2 flex flex-grow space-x-6 overflow-auto"
    >
      <!-- Column -->
      <div
        v-for="(column, index) in board"
        :key="column.title"
        class="flex flex-col flex-shrink-0 h-full w-72"
      >
        <!-- Column header -->
        <div class="flex items-center flex-shrink-0 h-14 px-2">
          <!-- Column title -->
          <span class="font-sans block text-sm font-semibold">{{
            column.title
          }}</span>
          <!-- Column count -->
          <span
            class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-primary-500 dark:text-sunny"
            >{{ column.tasks.length }}</span
          >
          <!-- Column action -->
          <button
            class="flex items-center justify-center w-6 h-6 ml-auto text-primary-500 dark:text-sunny rounded-full hover:bg-primary-500/20 dark:hover:bg-sunny/20 transition-colors duration-300"
          >
            <Icon name="lucide:plus" class="w-4 h-4" />
          </button>
        </div>
        <!-- Scrollable area -->
        <Container
          tag="div"
          orientation="vertical"
          :group-name="column.title"
          drag-class="transform rotate-2 transform-gpu"
          drop-class="opacity-40"
          :drop-placeholder="{
            className:
              'mt-4 border-muted-200 border-dashed dark:border-muted-700 dark:bg-muted-800 group relative flex cursor-pointer flex-col items-start rounded-lg border bg-white/90 p-4 hover:bg-white opacity-60 mb-4',
          }"
          class="flex flex-col gap-y-4 pb-10 pr-2 overflow-auto slimscroll"
        >
          <!-- Board card -->
          <template v-if="column.tasks.length > 0">
            <Draggable
              v-for="task in column.tasks"
              :key="task.id"
              class="!overflow-visible"
            >
              <div
                class="relative flex flex-col items-start p-4 border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800 rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                draggable="true"
                @click="() => openTaskPanel(task.id, data?.project.tasks)"
              >
                <div class="relative mb-2">
                  <div
                    class="w-full flex items-center justify-between gap-2 mb-2"
                  >
                    <BaseTag
                      shape="full"
                      flavor="pastel"
                      color="muted"
                      class="py-0 h-6 font-semibold inline-flex items-center text-xs m-0 scale-90 -ml-1"
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
                  class="flex items-center justify-between w-full mt-2 text-xs font-medium text-muted-500 dark:text-muted-200"
                >
                  <div class="flex items-center gap-2">
                    <BaseAvatar
                      :src="task.assignee.src"
                      size="xxs"
                      class="flex-shrink-0"
                    />
                    <BaseText size="xs" class="text-muted-400">{{
                      task.assignee.tooltip
                    }}</BaseText>
                  </div>
                  <div class="flex items-center gap-3 text-muted-400">
                    <div
                      v-if="task.checklist.length > 0"
                      :tooltip="`${task.checklist.length} subtask${
                        task.checklist.length > 1 ? 's' : ''
                      } in checklist`"
                      flow="left"
                    >
                      <Icon name="lucide:check-circle" class="w-4 h-4" />
                    </div>
                    <div
                      v-if="task.files.length > 0"
                      :tooltip="`${task.files.length} file${
                        task.files.length > 1 ? 's' : ''
                      } uploaded`"
                      flow="left"
                    >
                      <Icon name="lucide:file" class="w-4 h-4" />
                    </div>
                    <div
                      v-if="task.comments.length > 0"
                      :tooltip="`${task.comments.length} comment${
                        task.comments.length > 1 ? 's' : ''
                      }`"
                      flow="left"
                    >
                      <Icon name="lucide:message-circle" class="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Draggable>
          </template>
          <!-- Placeholder -->
          <div v-else>
            <div class="flex items-center justify-center mt-10 text-muted-400">
              <Icon name="ph:kanban-thin" class="w-12 h-12" />
            </div>
            <div class="text-center mt-2">
              <BaseHeading as="h4" size="md" weight="light" class="mb-1">
                <span>Nothing to show</span>
              </BaseHeading>
              <BaseParagraph
                size="xs"
                lead="tight"
                class="!font-sans max-w-[200px] mx-auto text-muted-500 dark:text-muted-400"
              >
                <span>There are no pending tasks to show in here for now.</span>
              </BaseParagraph>
              <button
                class="font-sans flex items-center justify-center gap-1 mx-auto mt-2 text-xs underline-offset-4 text-primary-500 dark:text-sunny hover:underline"
              >
                <Icon name="lucide:plus" class="w-3 h-3" />
                <span>New Task</span>
              </button>
            </div>
          </div>
        </Container>
      </div>
      <!-- Add Column -->
      <div class="flex flex-col flex-shrink-0 w-72">
        <!-- Column header -->
        <div class="flex items-center flex-shrink-0 h-14 px-2">
          <!-- Column title -->
          <span class="font-sans block text-sm font-semibold">Customize</span>
        </div>
        <!-- Add button -->
        <div class="w-full">
          <button
            class="font-sans w-full h-12 flex items-center justify-center gap-x-2 px-6 rounded-xl text-muted-500 dark:text-muted-400 hover:text-primary-500 dark:hover:text-sunny border-2 border-dashed border-muted-300 dark:border-muted-600 hover:border-solid hover:border-primary-500 dark:hover:border-sunny transition-colors duration-300"
          >
            <Icon name="ph:gear-six-duotone" class="w-4 h-4" />
            <span class="text-sm">Manage columns</span>
          </button>
        </div>
      </div>
      <div class="flex-shrink-0 w-6"></div>
    </div>
  </TairoLayout>
</template>

<style>
.smooth-dnd-container.vertical > .smooth-dnd-draggable-wrapper {
  overflow: visible;
}
</style>
