<script setup lang="ts">
const skills = [
  {
    id: 0,
    name: 'Vue JS',
    count: 149,
    icon: 'logos:vue',
  },
  {
    id: 1,
    name: 'React JS',
    count: 117,
    icon: 'logos:react',
  },
  {
    id: 2,
    name: 'Nuxt',
    count: 94,
    icon: 'logos:nuxt-icon',
  },
  {
    id: 4,
    name: 'Tailwind CSS',
    count: 82,
    icon: 'logos:tailwindcss-icon',
  },
  {
    id: 5,
    name: 'Angular',
    count: 41,
    icon: 'logos:angular-icon',
  },
]
</script>

<template>
  <div class="mb-2 space-y-5">
    <div
      v-for="skill in skills"
      :key="skill.id"
      class="flex items-center gap-3"
    >
      <div
        class="border-muted-200 dark:border-muted-700 flex size-10 items-center justify-center rounded-full border"
      >
        <Icon :name="skill.icon" class="size-5" />
      </div>
      <div>
        <BaseHeading
          as="h4"
          size="sm"
          weight="medium"
          lead="tight"
          class="text-muted-900 dark:text-white"
        >
          <span>{{ skill.name }}</span>
        </BaseHeading>
        <BaseParagraph size="xs">
          <span class="text-muted-600 dark:text-muted-400">
            Used by {{ skill.count }} candidates
          </span>
        </BaseParagraph>
      </div>
      <div class="ms-auto flex items-center">
        <BaseButton
          rounded="lg"
          variant="muted"
          size="icon-md"
          class="scale-75"
        >
          <Icon name="lucide:arrow-right" class="size-5" />
        </BaseButton>
      </div>
    </div>
  </div>
</template>
