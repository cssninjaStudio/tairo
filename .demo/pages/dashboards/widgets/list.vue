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
      <BaseCard rounded="lg" class="p-6">
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
          <BaseButton
            color="primary"
            size="sm"
            variant="pastel"
            rounded="md"
          >
            View all
          </BaseButton>
        </div>
        <DemoUserList />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard rounded="lg" class="p-6">
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
          <BaseButton
            color="primary"
            size="sm"
            variant="pastel"
            rounded="md"
          >
            View all
          </BaseButton>
        </div>
        <DemoUserList rounded="full" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard rounded="lg" class="p-6">
        <DemoFileListTabbed rounded="full" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard rounded="lg" class="p-6">
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
          <BaseButton
            color="primary"
            size="sm"
            variant="pastel"
            rounded="md"
          >
            View all
          </BaseButton>
        </div>
        <DemoTodoListCompact color="lime" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard rounded="lg" class="p-6">
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
          <BaseButton
            color="primary"
            size="sm"
            variant="pastel"
            rounded="md"
          >
            View all
          </BaseButton>
        </div>
        <DemoTodoListCompact color="sky" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard rounded="lg" class="p-6">
        <DemoTodoListTabbed rounded="sm" color="primary" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard class="p-6" rounded="lg">
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
          <BaseButton
            color="primary"
            size="sm"
            variant="pastel"
            rounded="md"
          >
            View all
          </BaseButton>
        </div>
        <DemoCommentListCompact />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard class="p-6" rounded="lg">
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
          <BaseButton
            color="primary"
            size="sm"
            variant="pastel"
            rounded="md"
          >
            View all
          </BaseButton>
        </div>
        <DemoTopicListCompact />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard class="p-6" rounded="lg">
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
          <BaseButton
            color="primary"
            size="sm"
            variant="pastel"
            rounded="md"
          >
            View all
          </BaseButton>
        </div>
        <DemoTopicListCompact rounded="full" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard class="p-6" rounded="lg">
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
          <BaseButton
            color="primary"
            size="sm"
            variant="pastel"
            rounded="md"
          >
            View all
          </BaseButton>
        </div>
        <DemoTimelineCompact rounded="sm" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard class="p-6" rounded="lg">
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
          <BaseButton
            color="primary"
            size="sm"
            variant="pastel"
            rounded="md"
          >
            View all
          </BaseButton>
        </div>
        <DemoTimelineCompact rounded="lg" />
      </BaseCard>
    </div>
    <!-- Column -->
    <div class="relative">
      <!-- Widget -->
      <BaseCard class="p-6" rounded="lg">
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
          <BaseButton
            color="primary"
            size="sm"
            variant="pastel"
            rounded="md"
          >
            View all
          </BaseButton>
        </div>
        <DemoTimelineCompact rounded="full" />
      </BaseCard>
    </div>
  </div>
</template>
