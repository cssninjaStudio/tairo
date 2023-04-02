<script setup lang="ts">
definePageMeta({
  title: 'Placeload',
})
</script>

<template>
  <div>
    <TairoContentWrapper>
      <template #left>
        <BaseInput
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
          <Icon name="lucide:plus" class="w-4 h-4" />
          <span>Add User</span>
        </BaseButton>
      </template>
      <div>
        <div class="space-y-4">
          <BaseCard
            v-for="index in 10"
            :key="index"
            shape="curved"
            class="flex flex-col sm:flex-row sm:items-center p-5"
          >
            <div
              class="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 text-center sm:text-left"
            >
              <BasePlaceload class="w-16 h-16 rounded-full shrink-0" />
              <div class="space-y-2">
                <BasePlaceload
                  class="w-[100px] h-3 rounded-lg mx-auto sm:mx-0"
                />
                <BasePlaceload
                  class="w-[75px] h-3 rounded-lg mx-auto sm:mx-0"
                />
              </div>
            </div>
            <div
              class="sm:ms-auto flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4 pt-4 sm:pt-0"
            >
              <div
                class="flex items-center justify-center sm:justify-end w-full sm:w-[160px]"
              >
                <BasePlaceload class="w-24 h-6 rounded-full" />
              </div>
              <div
                class="flex ptablet:hidden items-center justify-center divide-x divide-muted-200 dark:divide-muted-700"
              >
                <div class="flex flex-col gap-1 px-4 text-center">
                  <BasePlaceload class="w-16 h-3 rounded-lg" />
                </div>
                <div class="flex flex-col gap-1 px-4 text-center">
                  <BasePlaceload class="w-16 h-3 rounded-lg" />
                </div>
                <div class="flex flex-col gap-1 px-4 text-center">
                  <BasePlaceload class="w-16 h-3 rounded-lg" />
                </div>
              </div>
              <div
                class="flex ptablet:hidden items-center justify-center sm:justify-end gap-1 w-full sm:w-[160px] py-3 sm:py-0"
              >
                <BasePlaceload class="w-8 h-8 rounded-full shrink-0" />
                <BasePlaceload class="w-8 h-8 rounded-full shrink-0" />
                <BasePlaceload class="w-12 h-3 rounded-full hidden sm:block" />
              </div>
              <div class="sm:ms-6">
                <BasePlaceload
                  class="w-40 sm:w-20 h-8 rounded-lg mx-auto sm:mx-0"
                />
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
    </TairoContentWrapper>
  </div>
</template>
