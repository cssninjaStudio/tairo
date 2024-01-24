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
  <div>
    <TairoContentWrapper>
      <template #left>
        <BaseInput
          v-model="input"
          icon="lucide:search"
          placeholder="Filter users..."
          :classes="{
            wrapper: 'w-full sm:w-auto',
          }"
          disabled
        />
      </template>
      <template #right>
        <BaseButton class="w-full sm:w-32" disabled>
          Manage
        </BaseButton>
        <BaseButton
          color="primary"
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
