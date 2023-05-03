<script setup lang="ts">
definePageMeta({
  title: 'Placeload',
  preview: {
    title: 'Placeload 1',
    description: 'For loading states',
    categories: ['layouts'],
    src: '/img/screens/layouts-placeload-1.png',
    srcDark: '/img/screens/layouts-placeload-1-dark.png',
    order: 53,
  },
})

const fake = ref('')
</script>

<template>
  <div>
    <TairoContentWrapper>
      <template #left>
        <BaseInput
          v-model="fake"
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
        <div class="space-y-4">
          <BaseCard
            v-for="index in 10"
            :key="index"
            shape="curved"
            class="flex flex-col p-5 sm:flex-row sm:items-center"
          >
            <div
              class="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-start sm:text-left"
            >
              <BasePlaceload class="h-16 w-16 shrink-0 rounded-full" />
              <div class="space-y-2">
                <BasePlaceload
                  class="mx-auto h-3 w-[100px] rounded-lg sm:mx-0"
                />
                <BasePlaceload
                  class="mx-auto h-3 w-[75px] rounded-lg sm:mx-0"
                />
              </div>
            </div>
            <div
              class="flex flex-col gap-4 pt-4 sm:ms-auto sm:flex-row sm:items-center sm:justify-end sm:pt-0"
            >
              <div
                class="flex w-full items-center justify-center sm:w-[160px] sm:justify-end"
              >
                <BasePlaceload class="h-6 w-24 rounded-full" />
              </div>
              <div
                class="ptablet:hidden divide-muted-200 dark:divide-muted-700 flex items-center justify-center divide-x"
              >
                <div class="flex flex-col gap-1 px-4 text-center">
                  <BasePlaceload class="h-3 w-16 rounded-lg" />
                </div>
                <div class="flex flex-col gap-1 px-4 text-center">
                  <BasePlaceload class="h-3 w-16 rounded-lg" />
                </div>
                <div class="flex flex-col gap-1 px-4 text-center">
                  <BasePlaceload class="h-3 w-16 rounded-lg" />
                </div>
              </div>
              <div
                class="ptablet:hidden flex w-full items-center justify-center gap-1 py-3 sm:w-[160px] sm:justify-end sm:py-0"
              >
                <BasePlaceload class="h-8 w-8 shrink-0 rounded-full" />
                <BasePlaceload class="h-8 w-8 shrink-0 rounded-full" />
                <BasePlaceload class="hidden h-3 w-12 rounded-full sm:block" />
              </div>
              <div class="sm:ms-6">
                <BasePlaceload
                  class="mx-auto h-8 w-40 rounded-lg sm:mx-0 sm:w-20"
                />
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
    </TairoContentWrapper>
  </div>
</template>
