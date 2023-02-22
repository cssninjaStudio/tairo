<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    shape?: 'straight' | 'rounded' | 'curved'
    name?: string
    picture?: string
    title?: string
    text?: string
    time?: string
  }>(),
  {
    shape: 'rounded',
    name: undefined,
    picture: undefined,
    title: undefined,
    text: undefined,
    time: undefined,
  },
)
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <BaseHeading
        as="h3"
        size="md"
        weight="semibold"
        lead="tight"
        class="text-muted-800 dark:text-white"
      >
        <span>Inbox</span>
      </BaseHeading>
      <div class="relative">
        <Icon name="lucide:mail" class="w-4 h-4 text-muted-400" />
        <div class="absolute top-0.5 -right-1">
          <span class="relative flex h-2 w-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"
            ></span>
            <span
              class="relative inline-flex rounded-full h-2 w-2 bg-primary-500"
            ></span>
          </span>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-2 mb-4">
      <BaseAvatar v-if="props.picture" :src="props.picture" :alt="props.name" />
      <div
        v-else
        class="h-10 w-10 flex items-center justify-center shrink-0 rounded-full bg-muted-100 dark:bg-muted-700/80"
      >
        <Icon name="ph:user-duotone" class="w-4 h-4 text-muted-400" />
      </div>
      <span class="font-sans text-sm text-muted-500 dark:text-muted-400">
        Sent by
        <span class="text-muted-800 dark:text-muted-100">{{ props.name }}</span>
      </span>
    </div>
    <div
      class="p-3 border border-muted-200 dark:border-muted-700"
      :class="[
        props.shape === 'rounded' ? 'rounded' : '',
        props.shape === 'curved' ? 'rounded-lg' : '',
      ]"
    >
      <div class="flex items-center gap-2 mb-4">
        <div class="h-2 w-2 shrink-0 rounded-full bg-success-500"></div>
        <h3 class="font-sans text-sm text-muted-800 dark:text-muted-100">
          {{ props.title }}
        </h3>
      </div>
      <div class="mb-2">
        <p class="font-sans text-xs text-muted-500 dark:text-muted-400">
          {{ props.text }}
        </p>
      </div>
      <p class="font-sans text-xs text-muted-400">{{ props.time }} ago</p>
    </div>
  </div>
</template>
