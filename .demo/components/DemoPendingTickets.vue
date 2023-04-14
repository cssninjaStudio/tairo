<script setup lang="ts">
const tickets = [
  {
    id: 45651,
    title: 'Cannot save changes to user profile',
    content:
      'Iam not able to save changes I make to my user profile. When I click on the save button, it simply says failed.',
    updated: '5 hours ago',
    user: {
      name: 'Anna Vrinkof',
      src: '/img/avatars/22.svg',
    },
  },
  {
    id: 45783,
    title: 'Cannot create a new opportunity',
    content:
      'when I try to create a new opportunity, Iam redirected to a 404 page after clicking the action button.',
    updated: '2 hours ago',
    user: {
      name: 'John Cambell',
      src: '/img/avatars/3.svg',
    },
  },
  {
    id: 45723,
    title: 'Payment fails when using PayPal',
    content:
      'When I try to use PayPal as a payment method, it spins forever and I get an error message after that.',
    updated: '30 minutes ago',
    user: {
      name: 'Howard Wries',
      src: '/img/avatars/16.svg',
    },
  },
  {
    id: 45862,
    title: 'Cannot find the assets in the theme folder',
    content:
      'I followed the documentation but Iam not able to locate the assets in the main folder. Can I get some help?',
    updated: '6 hours ago',
    user: {
      name: 'Charles Hines',
      src: '/img/avatars/8.svg',
    },
  },
]
</script>

<template>
  <div class="divide-muted-200 dark:divide-muted-700 space-y-6 divide-y">
    <div
      v-for="(ticket, index) in tickets"
      :key="ticket.id"
      class="flex flex-col gap-4 sm:flex-row"
      :class="index > 0 ? 'pt-6' : ''"
    >
      <BaseAvatar
        size="lg"
        :src="ticket.user.src"
        :text="ticket.user.name"
        :data-tooltip="ticket.user.name"
      />
      <div class="max-w-md">
        <BaseHeading
          as="h3"
          size="md"
          weight="medium"
          class="text-muted-800 dark:text-muted-100 mb-1"
        >
          <span>[#{{ ticket.id }}] {{ ticket.title }}</span>
        </BaseHeading>
        <BaseParagraph
          size="sm"
          class="text-muted-500 dark:text-muted-400 mb-1"
        >
          <span>{{ ticket.content }}</span>
        </BaseParagraph>
        <BaseParagraph size="xs" class="text-muted-400">
          <span>Updated {{ ticket.updated }}</span>
        </BaseParagraph>
      </div>
      <div class="w-full sm:ms-auto sm:w-auto">
        <BaseButton color="default" class="w-full sm:w-auto">
          <span>Manage</span>
        </BaseButton>
      </div>
    </div>
  </div>
</template>
