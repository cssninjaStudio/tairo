<script setup lang="ts">
definePageMeta({
  title: 'List Widgets',
})
</script>

<template>
  <div class="grid sm:grid-cols-3 ptablet:grid-cols-2 gap-6">
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <!-- Title -->
        <div class="flex items-center justify-between mb-8">
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
            to="#/"
            class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
          >
            View All
          </NuxtLink>
        </div>
        <WidgetUserList />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <!-- Title -->
        <div class="flex items-center justify-between mb-8">
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
            to="#/"
            class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
          >
            View All
          </NuxtLink>
        </div>
        <WidgetUserList shape="full" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <WidgetFileListTabbed shape="full" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <!-- Title -->
        <div class="flex items-center justify-between mb-8">
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
            to="#/"
            class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
          >
            View All
          </NuxtLink>
        </div>
        <WidgetTodoListCompact color="lime" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <!-- Title -->
        <div class="flex items-center justify-between mb-8">
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
            to="#/"
            class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
          >
            View All
          </NuxtLink>
        </div>
        <WidgetTodoListCompact color="sky" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard shape="curved" class="p-6">
        <WidgetTodoListTabbed shape="rounded" color="primary" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard class="p-6" shape="curved">
        <!-- Title -->
        <div class="flex items-center justify-between mb-8">
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
            to="#/"
            class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
          >
            View All
          </NuxtLink>
        </div>
        <WidgetCommentListCompact />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard class="p-6" shape="curved">
        <!-- Title -->
        <div class="flex items-center justify-between mb-8">
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
            to="#/"
            class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
          >
            View All
          </NuxtLink>
        </div>
        <WidgetTopicListCompact />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard class="p-6" shape="curved">
        <!-- Title -->
        <div class="flex items-center justify-between mb-8">
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
            to="#/"
            class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
          >
            View All
          </NuxtLink>
        </div>
        <WidgetTopicListCompact shape="circle" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard class="p-6" shape="curved">
        <!-- Title -->
        <div class="flex items-center justify-between mb-8">
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
            to="#/"
            class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
          >
            View All
          </NuxtLink>
        </div>
        <WidgetTimelineCompact shape="rounded" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard class="p-6" shape="curved">
        <!-- Title -->
        <div class="flex items-center justify-between mb-8">
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
            to="#/"
            class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
          >
            View All
          </NuxtLink>
        </div>
        <WidgetTimelineCompact shape="curved" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard class="p-6" shape="curved">
        <!-- Title -->
        <div class="flex items-center justify-between mb-8">
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
            to="#/"
            class="font-sans font-medium text-sm py-2 px-4 rounded-lg bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 underline-offset-4 hover:underline transition-colors duration-300"
          >
            View All
          </NuxtLink>
        </div>
        <WidgetTimelineCompact shape="full" />
      </BaseCard>
    </div>
  </div>
</template>
