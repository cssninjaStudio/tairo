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
    name: 'Nuxt 3',
    count: 94,
    icon: 'logos:nuxt-icon',
  },
  {
    id: 4,
    name: 'Tailwind CSS',
    count: 82,
    icon: 'logos:tailwindcss-icon',
  },
]
</script>

<template>
  <div class="space-y-5 mb-2">
    <div v-for="skill in skills" :key="skill.id" class="flex items-center gap-3">
      <div class="h-10 w-10 flex items-center justify-center rounded-full border border-muted-200">
        <Icon :name="skill.icon" class="w-5 h-5" />
      </div>
      <div>
        <BaseHeading
          as="h4"
          size="sm"
          weight="light"
          lead="tight"
          class="text-muted-800 dark:text-white"
        >
          <span>{{ skill.name }}</span>
        </BaseHeading>
        <BaseParagraph size="xs">
          <span class="text-muted-400">
            Used by {{  skill.count  }} candidates
          </span>
        </BaseParagraph>
      </div>
      <div class="flex items-center ml-auto">
        <BaseButtonIcon shape="curved" muted class="scale-75">
          <Icon name="lucide:arrow-right" class="w-5 h-5" />
        </BaseButtonIcon>
      </div>
    </div>
  </div>
</template>