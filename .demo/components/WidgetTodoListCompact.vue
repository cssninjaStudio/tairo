<script setup lang="ts">
const tasks = [
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
]
</script>

<template>
  <div class="space-y-5 mb-2">
    <div v-for="task in tasks" :key="task.id" class="flex items-center gap-3">
      <BaseAnimatedCheckbox
        v-model="tasks"
        :value="`Option ${task.id}`"
        class="text-success-500"
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
