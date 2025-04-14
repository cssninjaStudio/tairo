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
    <div class="mb-6 flex items-center justify-between">
      <BaseHeading
        as="h3"
        size="md"
        weight="medium"
        lead="tight"
        class="text-muted-900 dark:text-white"
      >
        <span>Inbox</span>
      </BaseHeading>
      <div class="relative">
        <Icon name="solar:letter-linear" class="text-muted-400 size-4" />
        <div class="absolute -end-0.5 -top-0.5">
          <span class="relative flex size-2">
            <span
              class="bg-primary-400 absolute inline-flex size-full animate-ping rounded-full opacity-75"
            />
            <span
              class="bg-primary-500 relative inline-flex size-2 rounded-full"
            />
          </span>
        </div>
      </div>
    </div>
    <div class="mb-4 flex items-center gap-2">
      <BaseAvatar
        v-if="props.picture"
        :src="props.picture"
        :alt="props.name"
      />
      <div
        v-else
        class="bg-muted-100 dark:bg-muted-700/80 flex size-10 shrink-0 items-center justify-center rounded-full"
      >
        <Icon name="ph:user-duotone" class="text-muted-400 size-4" />
      </div>
      <span class="text-muted-500 dark:text-muted-400 font-sans text-sm">
        Sent by
        <span class="text-muted-900 dark:text-muted-100">{{ props.name }}</span>
      </span>
    </div>
    <div
      class="border-muted-200 dark:border-muted-700 border p-3"
      :class="[
        props.shape === 'rounded' ? 'rounded' : '',
        props.shape === 'curved' ? 'rounded-lg' : '',
      ]"
    >
      <div class="mb-4 flex items-center gap-2">
        <div class="bg-success-500 size-2 shrink-0 rounded-full" />
        <h3 class="text-muted-900 dark:text-muted-100 font-sans text-sm">
          {{ props.title }}
        </h3>
      </div>
      <div class="mb-2">
        <p class="text-muted-600 dark:text-muted-400 font-sans text-xs">
          {{ props.text }}
        </p>
      </div>
      <p class="text-muted-400 font-sans text-xs">
        {{ props.time }} ago
      </p>
    </div>
  </div>
</template>
