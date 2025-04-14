<script setup lang="ts">
definePageMeta({
  title: 'Placeload',
  preview: {
    title: 'Placeload 4',
    description: 'For loading states',
    categories: ['layouts'],
    src: '/img/screens/layouts-placeload-4.png',
    srcDark: '/img/screens/layouts-placeload-4-dark.png',
    order: 56,
  },
})
const input = ref('')
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20 dark:[--color-input-default-bg:var(--color-muted-950)]">
    <TairoContentWrapper>
      <template #left>
        <TairoInput
          v-model="input"
          icon="lucide:search"
          placeholder="Filter users..."
        />
      </template>
      <template #right>
        <BaseButton class="w-full sm:w-32" disabled>
          Manage
        </BaseButton>
        <BaseButton
          variant="primary"
          class="w-full sm:w-32"
          disabled
        >
          <Icon name="lucide:plus" class="size-4" />
          <span>Add User</span>
        </BaseButton>
      </template>
      <div>
        <div class="grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
          <BaseCard
            v-for="index in 21"
            :key="index"
            rounded="lg"
            class="flex items-center gap-3 p-4"
          >
            <BasePlaceload class="size-12 shrink-0 rounded-full" />
            <div class="grow space-y-2">
              <BasePlaceload class="h-3 w-4/5 rounded-lg" />
              <BasePlaceload class="h-3 w-3/5 rounded-lg" />
            </div>
          </BaseCard>
        </div>
      </div>
    </TairoContentWrapper>
  </div>
</template>
