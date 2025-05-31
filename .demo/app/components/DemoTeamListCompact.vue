<script setup lang="ts">
const props = defineProps<{
  actions?: boolean
}>()

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
  {
    id: 4,
    firstName: 'Melany',
    lastName: 'Wright',
    image: '/img/avatars/25.svg',
    text: 'MW',
    role: 'Software architect',
  },
  {
    id: 5,
    firstName: 'Joshua',
    lastName: 'Stevens',
    image: '/img/avatars/14.svg',
    text: 'JS',
    role: 'Product manager',
  },
]
</script>

<template>
  <div class="mb-2 space-y-5">
    <div
      v-for="member in members"
      :key="member.id"
      class="flex items-center gap-3"
    >
      <BaseAvatar
        :src="member.image"
        :text="member.text"
        size="xs"
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
          <span>{{ member.firstName }} {{ member.lastName.slice(0, 1) }}.</span>
        </BaseHeading>
        <BaseParagraph size="xs">
          <span class="text-muted-600 dark:text-muted-400">
            {{ member.role }}
          </span>
        </BaseParagraph>
      </div>
      <div v-if="props.actions" class="ms-auto flex items-center">
        <BaseButton
          rounded="lg"
          variant="muted"
          size="icon-md"
          class="scale-75"
        >
          <Icon name="solar:phone-rounded-linear" class="size-6" />
        </BaseButton>
        <BaseButton
          variant="muted"
          rounded="lg"
          size="icon-md"
          class="scale-75"
        >
          <Icon name="solar:videocamera-record-linear" class="size-6" />
        </BaseButton>
      </div>
    </div>
  </div>
</template>
