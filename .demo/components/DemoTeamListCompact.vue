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
  <div class="mb-2 space-y-5">
    <div
      v-for="member in members"
      :key="member.id"
      class="flex items-center gap-3"
    >
      <BaseAvatar
        :src="member.image"
        :text="member.text"
        class="bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
      />
      <div>
        <BaseHeading
          as="h4"
          size="sm"
          weight="light"
          lead="tight"
          class="text-muted-800 dark:text-white"
        >
          <span>{{ member.firstName }} {{ member.lastName.slice(0, 1) }}.</span>
        </BaseHeading>
        <BaseParagraph size="xs">
          <span class="text-muted-400">
            {{ member.role }}
          </span>
        </BaseParagraph>
      </div>
      <div v-if="props.actions" class="ms-auto flex items-center">
        <BaseButtonIcon shape="curved" muted class="scale-75">
          <Icon name="ph:phone-duotone" class="h-5 w-5" />
        </BaseButtonIcon>
        <BaseButtonIcon shape="curved" muted class="scale-75">
          <Icon name="ph:video-camera-duotone" class="h-5 w-5" />
        </BaseButtonIcon>
      </div>
    </div>
  </div>
</template>
