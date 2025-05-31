<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?:
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'destructive'
      | 'muted'
      | 'light'
      | 'dark'
      | 'black'
      | 'custom'
  }>(),
  {
    variant: 'success',
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
  <BaseCheckboxGroup v-model="tasks" class="mb-2 space-y-6">
    <label
      v-for="task in todos"
      :key="task.id"
      class="text-muted-300 flex cursor-pointer items-center gap-3"
    >
      <TairoCheckboxAnimated
        :variant="props.variant"
        :value="`Option ${task.id}`"
      />
      <div>
        <BaseHeading
          as="h4"
          size="sm"
          weight="medium"
          lead="tight"
          class="text-muted-900 dark:text-white"
        >
          <span>{{ task.title }}</span>
        </BaseHeading>
        <BaseParagraph size="xs">
          <span class="text-muted-600 dark:text-muted-400">
            {{ task.description }}
          </span>
        </BaseParagraph>
      </div>
    </label>
  </BaseCheckboxGroup>
</template>
