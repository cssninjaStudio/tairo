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
        <div
          class="grid sm:grid-cols-2 ltablet:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <BaseCard v-for="index in 12" :key="index" class="flex flex-col p-6">
            <BasePlaceload class="w-20 h-20 rounded-full shrink-0 mx-auto" />
            <div class="space-y-2 mt-4 mb-6">
              <BasePlaceload class="w-40 h-3 rounded-lg mx-auto" />
              <BasePlaceload class="w-32 h-3 rounded-lg mx-auto" />
            </div>
            <div class="flex items-center justify-center gap-3 mb-6">
              <BasePlaceload class="w-8 h-8 rounded-full shrink-0" />
              <BasePlaceload class="w-8 h-8 rounded-full shrink-0" />
              <BasePlaceload class="w-8 h-8 rounded-full shrink-0" />
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
