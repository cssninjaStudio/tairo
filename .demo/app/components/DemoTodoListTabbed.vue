<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
    color?:
      | 'success'
      | 'info'
      | 'warning'
      | 'danger'
      | 'primary'
      | 'lime'
      | 'sky'
  }>(),
  {
    rounded: 'sm',
    color: 'success',
  },
)

const todos = [
  {
    id: 0,
    title: 'Call Mr. Markstrom',
    description: 'Review the project initial wireframes',
    completed: true,
  },
  {
    id: 1,
    title: 'Finish wireframes',
    description: 'Make all requested changes and publish',
    completed: false,
  },
  {
    id: 2,
    title: 'Update timesheets',
    description: 'Update all the team timesheets',
    completed: false,
  },
  {
    id: 3,
    title: 'Request payout',
    description: 'Send project invoice to client',
    completed: false,
  },
  {
    id: 4,
    title: 'Approve components',
    description: 'Review complete design system',
    completed: true,
  },
]

const tasks = ref<string[]>(['Option 0', 'Option 1', 'Option 2'])
</script>

<template>
  <div>
    <DemoTabbedContent
      title="Tasks"
      :labels="['All', 'Mine']"
      :rounded="props.rounded"
    >
      <template #tab-1>
        <BaseCheckboxGroup v-model="tasks" class="mb-2 space-y-6">
          <label
            v-for="task in todos"
            :key="task.id"
            class="text-muted-300 flex cursor-pointer items-center gap-3"
          >
            <TairoCheckboxAnimated
              :value="`Option ${task.id}`"
              variant="success"
            />
            <div>
              <BaseHeading
                as="h4"
                size="sm"
                weight="light"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>{{ task.title }}</span>
              </BaseHeading>
              <BaseParagraph size="xs">
                <span class="text-muted-400">
                  {{ task.description }}
                </span>
              </BaseParagraph>
            </div>
          </label>
        </BaseCheckboxGroup>
      </template>
      <template #tab-2>
        <BaseCheckboxGroup v-model="tasks" class="mb-2 space-y-6">
          <label
            v-for="task in todos"
            :key="task.id"
            class="text-muted-300 flex cursor-pointer items-center gap-3"
          >
            <TairoCheckboxAnimated
              :value="`Option ${task.id}`"
              variant="custom"
              :class="[
                props.color === 'success' && 'text-success-500',
                props.color === 'info' && 'text-info-500',
                props.color === 'warning' && 'text-warning-500',
                props.color === 'danger' && 'text-destructive-500',
                props.color === 'primary' && 'text-primary-500',
                props.color === 'lime' && 'text-lime-500',
                props.color === 'sky' && 'text-sky-500',
              ]"
            />
            <div>
              <BaseHeading
                as="h4"
                size="sm"
                weight="light"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                <span>{{ task.title }}</span>
              </BaseHeading>
              <BaseParagraph size="xs">
                <span class="text-muted-400">
                  {{ task.description }}
                </span>
              </BaseParagraph>
            </div>
          </label>
        </BaseCheckboxGroup>
      </template>
    </DemoTabbedContent>
  </div>
</template>
