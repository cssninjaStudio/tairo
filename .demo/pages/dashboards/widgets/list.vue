<script setup lang="ts">
definePageMeta({
  title: 'List Widgets',
  preview: {
    title: 'List Widgets',
    description: 'For page compositions',
    categories: ['dashboards', 'widgets'],
    src: '/img/screens/dashboards-widgets-lists.png',
    srcDark: '/img/screens/dashboards-widgets-lists-dark.png',
    order: 29,
  },
})
</script>

<template>
  <div class="ptablet:grid-cols-2 grid gap-6 sm:grid-cols-3">
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <!-- Title -->
        <div class="mb-8 flex items-center justify-between">
          <BaseHeading
            as="h3"
            size="md"
            weight="semibold"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>Members</span>
          </BaseHeading>
          <NuxtLink
            to="#"
            class="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
          >
            View All
          </NuxtLink>
        </div>
        <DemoUserList />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <!-- Title -->
        <div class="mb-8 flex items-center justify-between">
          <BaseHeading
            as="h3"
            size="md"
            weight="semibold"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>Members</span>
          </BaseHeading>
          <NuxtLink
            to="#"
            class="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
          >
            View All
          </NuxtLink>
        </div>
        <DemoUserList shape="full" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <DemoFileListTabbed shape="full" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <!-- Title -->
        <div class="mb-8 flex items-center justify-between">
          <BaseHeading
            as="h3"
            size="md"
            weight="semibold"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>My Tasks</span>
          </BaseHeading>
          <NuxtLink
            to="#"
            class="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
          >
            View All
          </NuxtLink>
        </div>
        <DemoTodoListCompact color="lime" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <!-- Title -->
        <div class="mb-8 flex items-center justify-between">
          <BaseHeading
            as="h3"
            size="md"
            weight="semibold"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>My Tasks</span>
          </BaseHeading>
          <NuxtLink
            to="#"
            class="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
          >
            View All
          </NuxtLink>
        </div>
        <DemoTodoListCompact color="sky" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <DemoTodoListTabbed shape="rounded" color="primary" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard class="p-6" shape="curved">
        <!-- Title -->
        <div class="mb-8 flex items-center justify-between">
          <BaseHeading
            as="h3"
            size="md"
            weight="semibold"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>Latest comments</span>
          </BaseHeading>
          <NuxtLink
            to="#"
            class="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
          >
            View All
          </NuxtLink>
        </div>
        <DemoCommentListCompact />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard class="p-6" shape="curved">
        <!-- Title -->
        <div class="mb-8 flex items-center justify-between">
          <BaseHeading
            as="h3"
            size="md"
            weight="semibold"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>Topics</span>
          </BaseHeading>
          <NuxtLink
            to="#"
            class="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
          >
            View All
          </NuxtLink>
        </div>
        <DemoTopicListCompact />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard class="p-6" shape="curved">
        <!-- Title -->
        <div class="mb-8 flex items-center justify-between">
          <BaseHeading
            as="h3"
            size="md"
            weight="semibold"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>Topics</span>
          </BaseHeading>
          <NuxtLink
            to="#"
            class="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
          >
            View All
          </NuxtLink>
        </div>
        <DemoTopicListCompact shape="full" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard class="p-6" shape="curved">
        <!-- Title -->
        <div class="mb-8 flex items-center justify-between">
          <BaseHeading
            as="h3"
            size="md"
            weight="semibold"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>Timeline</span>
          </BaseHeading>
          <NuxtLink
            to="#"
            class="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
          >
            View All
          </NuxtLink>
        </div>
        <DemoTimelineCompact shape="rounded" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard class="p-6" shape="curved">
        <!-- Title -->
        <div class="mb-8 flex items-center justify-between">
          <BaseHeading
            as="h3"
            size="md"
            weight="semibold"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>Timeline</span>
          </BaseHeading>
          <NuxtLink
            to="#"
            class="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
          >
            View All
          </NuxtLink>
        </div>
        <DemoTimelineCompact shape="curved" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard class="p-6" shape="curved">
        <!-- Title -->
        <div class="mb-8 flex items-center justify-between">
          <BaseHeading
            as="h3"
            size="md"
            weight="semibold"
            lead="tight"
            class="text-muted-800 dark:text-white"
          >
            <span>Timeline</span>
          </BaseHeading>
          <NuxtLink
            to="#"
            class="bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
          >
            View All
          </NuxtLink>
        </div>
        <DemoTimelineCompact shape="full" />
      </BaseCard>
    </div>
  </div>
</template>
