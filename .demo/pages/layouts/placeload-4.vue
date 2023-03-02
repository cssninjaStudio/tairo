<script setup lang="ts">
definePageMeta({
  title: 'Placeload',
})
</script>

<template>
  <div>
    <ContentWrapper>
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
        <div class="grid sm:grid-cols-3 lg:grid-cols-3 gap-4">
          <BaseCard
            v-for="index in 21"
            :key="index"
            shape="curved"
            class="flex items-center gap-3 p-4"
          >
            <BasePlaceload class="w-12 h-12 rounded-full shrink-0" />
            <div class="grow space-y-2">
              <BasePlaceload class="w-4/5 h-3 rounded-lg" />
              <BasePlaceload class="w-3/5 h-3 rounded-lg" />
            </div>
          </BaseCard>
        </div>
      </div>
    </ContentWrapper>
  </div>
</template>
