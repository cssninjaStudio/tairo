<script setup lang="ts">
const members = [
  {
    id: 0,
    firstName: 'Clarke',
    lastName: 'Smith',
    image: '/img/avatars/3.svg',
    text: 'EC',
    role: 'UI/UX designer',
  },
  {
    id: 1,
    firstName: 'Sara',
    lastName: 'Connor',
    image: undefined,
    text: 'SC',
    role: 'Frontend developer',
  },
  {
    id: 2,
    firstName: 'Tara',
    lastName: 'Svenson',
    image: '/img/avatars/4.svg',
    text: 'TS',
    role: 'Software architect',
  },
  {
    id: 3,
    firstName: 'Naomi',
    lastName: 'Liversky',
    image: undefined,
    text: 'NL',
    role: 'UI/UX designer',
  },
]
</script>

<template>
  <BaseCard class="p-6">
    <!-- Title -->
    <div class="flex items-center justify-between mb-8">
      <BaseHeading
        as="h3"
        size="md"
        weight="semibold"
        lead="tight"
        class="text-muted-800 dark:text-white"
      >
        <span>My Team</span>
      </BaseHeading>
      <RouterLink to="/" class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300">View All</RouterLink>
    </div>
    <!-- Content -->
    <div class="space-y-5 mb-2">
      <div v-for="member in members" :key="member.id" class="flex items-center gap-3">
        <BaseAvatar :src="member.image" :text="member.text" class="flex-shrink-0 bg-primary-100 dark:bg-primary-500/20 text-primary-500" />
        <div>
          <BaseHeading
            as="h4"
            size="sm"
            weight="light"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>{{ member.firstName }} {{  member.lastName.slice(0, 1) }}.</span>
          </BaseHeading>
          <BaseParagraph size="xs">
            <span class="text-muted-400">
              {{  member.role  }}
            </span>
          </BaseParagraph>
        </div>
        <div class="flex items-center ml-auto">
          <BaseButtonIcon shape="curved" muted class="scale-75">
            <Icon name="ph:phone-duotone" class="w-5 h-5" />
          </BaseButtonIcon>
          <BaseButtonIcon shape="curved" muted class="scale-75">
            <Icon name="ph:video-camera-duotone" class="w-5 h-5" />
          </BaseButtonIcon>
        </div>
      </div>
    </div>
  </BaseCard>
</template>