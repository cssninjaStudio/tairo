<script setup lang="ts">
definePageMeta({
  title: 'Placeload',
  preview: {
    title: 'Placeload 3',
    description: 'For loading states',
    categories: ['layouts'],
    src: '/img/screens/layouts-placeload-3.png',
    srcDark: '/img/screens/layouts-placeload-3-dark.png',
    order: 55,
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
        <BaseButton class="w-full sm:w-32" disabled>Manage</BaseButton>
        <BaseButton color="primary" class="w-full sm:w-32" disabled>
          <Icon name="lucide:plus" class="h-4 w-4" />
          <span>Add User</span>
        </BaseButton>
      </template>
      <div>
        <div
          class="ltablet:grid-cols-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <BaseCard v-for="index in 12" :key="index" class="flex flex-col p-6">
            <BasePlaceload class="mx-auto h-20 w-20 shrink-0 rounded-full" />
            <div class="mb-6 mt-4 space-y-2">
              <BasePlaceload class="mx-auto h-3 w-40 rounded-lg" />
              <BasePlaceload class="mx-auto h-3 w-32 rounded-lg" />
            </div>
            <div class="mb-6 flex items-center justify-center gap-3">
              <BasePlaceload class="h-8 w-8 shrink-0 rounded-full" />
              <BasePlaceload class="h-8 w-8 shrink-0 rounded-full" />
              <BasePlaceload class="h-8 w-8 shrink-0 rounded-full" />
            </div>
            <div class="flex items-center justify-center gap-2">
              <BaseButton loading class="w-full">View</BaseButton>
              <BaseButton loading class="w-full">Edit</BaseButton>
            </div>
          </BaseCard>
        </div>
      </div>
    </TairoContentWrapper>
  </div>
</template>
