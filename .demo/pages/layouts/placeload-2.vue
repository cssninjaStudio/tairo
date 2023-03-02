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
        <BaseSelect
          placeholder="Items per page"
          label=""
          :classes="{
            wrapper: 'w-full sm:w-40',
          }"
          disabled
        >
          <option :value="10">10 per page</option>
          <option :value="25">25 per page</option>
          <option :value="50">50 per page</option>
          <option :value="100">100 per page</option>
        </BaseSelect>
      </template>
      <div>
        <div class="w-full">
          <BaseTable shape="rounded">
            <template #header>
              <BaseTableHeading uppercase spaced class="p-4">
                <div class="flex items-center">
                  <BaseCheckbox
                    name="table-1-main"
                    shape="circle"
                    class="text-primary-500"
                  />
                </div>
              </BaseTableHeading>
              <BaseTableHeading uppercase spaced>Type</BaseTableHeading>
              <BaseTableHeading uppercase spaced>Name</BaseTableHeading>
              <BaseTableHeading uppercase spaced>Size</BaseTableHeading>
              <BaseTableHeading uppercase spaced>Version</BaseTableHeading>
              <BaseTableHeading uppercase spaced>Last Updated</BaseTableHeading>
              <BaseTableHeading uppercase spaced>Action</BaseTableHeading>
            </template>

            <BaseTableRow v-for="index in 10" :key="index">
              <BaseTableCell spaced>
                <div class="flex items-center">
                  <BaseCheckbox
                    :name="`placeload-item-checkbox-${index}`"
                    shape="circle"
                    class="text-primary-500"
                  />
                </div>
              </BaseTableCell>
              <BaseTableCell light spaced>
                <BasePlaceload class="w-[46px] h-[46px] rounded-xl shrink-0" />
              </BaseTableCell>
              <BaseTableCell spaced>
                <BasePlaceload class="w-24 h-3 rounded-lg" />
              </BaseTableCell>
              <BaseTableCell light spaced>
                <BasePlaceload class="w-12 h-3 rounded-lg" />
              </BaseTableCell>
              <BaseTableCell light spaced>
                <BasePlaceload class="w-12 h-3 rounded-lg" />
              </BaseTableCell>
              <BaseTableCell spaced>
                <div class="flex items-center gap-2">
                  <BasePlaceload class="w-8 h-8 rounded-full shrink-0" />
                  <div class="space-y-1">
                    <BasePlaceload class="w-[70px] h-2 rounded-lg" />
                    <BasePlaceload class="w-[50px] h-2 rounded-lg" />
                  </div>
                </div>
              </BaseTableCell>
              <BaseTableCell spaced>
                <BasePlaceload class="w-16 h-8 rounded-lg" />
              </BaseTableCell>
            </BaseTableRow>
          </BaseTable>
        </div>
      </div>
    </ContentWrapper>
  </div>
</template>
