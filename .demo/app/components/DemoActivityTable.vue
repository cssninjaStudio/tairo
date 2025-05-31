<script setup lang="ts">
const activities = ref([
  {
    icon: 'solar:card-transfer-bold-duotone',
    title: 'Victoria\'s Corner',
    description: 'Outgoing payment',
    amount: -938.39,
    date: 'Jun 12, 2024',
  },
  {
    icon: 'solar:buildings-bold-duotone',
    title: 'John Rowland',
    description: 'Outgoing payment',
    amount: -1234.15,
    date: 'Jun 11, 2024',
  },
  {
    icon: 'solar:card-transfer-bold-duotone',
    title: 'Kali Burger',
    description: 'Outgoing payment',
    amount: -23.69,
    date: 'Jun 9, 2024',
  },
  {
    icon: 'solar:buildings-bold-duotone',
    title: 'Railway Inc',
    description: 'Ingoing payment',
    amount: 2399.99,
    date: 'Jun 8, 2024',
  },
  {
    icon: 'solar:card-transfer-bold-duotone',
    title: 'Mobihouse',
    description: 'Outgoing payment',
    amount: -49.99,
    date: 'Jun 6, 2024',
  },
])
</script>

<template>
  <div class="mb-6 pt-6 px-6 flex items-center justify-between">
    <BaseHeading
      weight="medium"
      class="text-muted-900 dark:text-muted-100"
    >
      Recent Activity
    </BaseHeading>
    <DemoLinkArrow to="/layouts" label="View all" />
  </div>
  <div class="space-y-2 pb-3">
    <!-- Item -->
    <div
      v-for="(activity, index) in activities"
      :key="index"
      class="mx-3 px-3 py-3 flex items-center gap-3 rounded-lg hover:bg-muted-200/50 dark:hover:bg-muted-900/50 transition-colors duration-100"
    >
      <div
        class="dark:bg-muted-900 border-muted-200 dark:border-muted-800 flex size-12 shrink-0 items-center justify-center rounded-xl border bg-white"
      >
        <Icon
          :name="activity.icon"
          class="text-muted-800 dark:text-muted-100 size-6"
        />
      </div>
      <div class="w-2/5">
        <BaseHeading
          weight="medium"
          size="sm"
          class="text-muted-900 dark:text-muted-100"
        >
          {{ activity.title }}
        </BaseHeading>
        <BaseParagraph
          size="xs"
          class="text-muted-600 dark:text-muted-400"
        >
          {{ activity.description }}
        </BaseParagraph>
      </div>
      <div class="hidden px-8 sm:block">
        <BaseText
          size="sm"
          weight="medium"
          lead="none"
          class="text-muted-600 dark:text-muted-400"
        >
          {{ activity.date }}
        </BaseText>
      </div>
      <div class="ms-auto">
        <BaseText
          size="sm"
          weight="semibold"
          lead="none"
          class="text-muted-900 dark:text-muted-100"
        >
          {{ formatPrice(activity.amount) }}
        </BaseText>
      </div>
    </div>
  </div>
</template>
