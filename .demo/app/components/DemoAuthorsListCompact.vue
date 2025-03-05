<script setup lang="ts">
const authors = [
  {
    id: 0,
    firstName: 'Hermann',
    lastName: 'Mayer',
    image: '/img/avatars/16.svg',
    text: 'HM',
    role: 'Project manager',
    articles: 39,
  },
  {
    id: 1,
    firstName: 'Sara',
    lastName: 'Connor',
    image: '/img/avatars/12.svg',
    text: 'SC',
    role: 'Frontend developer',
    articles: 24,
  },
  {
    id: 2,
    firstName: 'Kendra',
    lastName: 'Wilson',
    image: '/img/avatars/10.svg',
    text: 'KW',
    role: 'HR manager',
    articles: 17,
  },
  {
    id: 3,
    firstName: 'John',
    lastName: 'Baxter',
    image: '/img/avatars/13.svg',
    text: 'NL',
    role: 'Business analyst',
    articles: 11,
  },
]
</script>

<template>
  <div class="mb-2 space-y-5">
    <div
      v-for="author in authors"
      :key="author.id"
      class="flex items-center gap-3"
    >
      <BaseAvatar
        :src="author.image"
        :text="author.text"
        rounded="none"
        mask="blob"
        class="bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
      />
      <div>
        <BaseHeading
          as="h4"
          size="sm"
          weight="medium"
          lead="tight"
          class="text-muted-900 dark:text-white"
        >
          <span>{{ author.firstName }} {{ author.lastName.slice(0, 1) }}.</span>
        </BaseHeading>
        <BaseParagraph size="xs">
          <span class="text-muted-600 dark:text-muted-400">
            {{ author.role }}
          </span>
        </BaseParagraph>
      </div>
      <div class="ms-auto flex items-center gap-1">
        <span class="text-muted-500 dark:text-muted-300 font-sans text-xs">
          {{ author.articles }} articles
        </span>
        <BaseButton
          rounded="lg"
          size="icon-md"
          variant="muted"
          class="scale-75"
        >
          <Icon name="lucide:arrow-right" class="size-4" />
        </BaseButton>
      </div>
    </div>
  </div>
</template>
