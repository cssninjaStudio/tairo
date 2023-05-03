<script setup lang="ts">
const props = withDefaults(
  defineProps<{
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
  <div class="mb-2 space-y-6">
    <div v-for="task in todos" :key="task.id" class="flex items-center gap-3">
      <BaseCheckboxAnimated
        v-model="tasks"
        color="success"
        :value="`Option ${task.id}`"
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
    </div>
  </div>
</template>
