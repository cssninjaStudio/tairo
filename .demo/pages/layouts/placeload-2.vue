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
          <TairoTable shape="rounded">
            <template #header>
              <TairoTableHeading uppercase spaced class="p-4">
                <div class="flex items-center">
                  <BaseCheckbox
                    name="table-1-main"
                    shape="full"
                    class="text-primary-500"
                  />
                </div>
              </TairoTableHeading>
              <TairoTableHeading uppercase spaced>Type</TairoTableHeading>
              <TairoTableHeading uppercase spaced>Name</TairoTableHeading>
              <TairoTableHeading uppercase spaced>Size</TairoTableHeading>
              <TairoTableHeading uppercase spaced>Version</TairoTableHeading>
              <TairoTableHeading uppercase spaced>
                Last Updated
              </TairoTableHeading>
              <TairoTableHeading uppercase spaced>Action</TairoTableHeading>
            </template>

            <TairoTableRow v-for="index in 10" :key="index">
              <TairoTableCell spaced>
                <div class="flex items-center">
                  <BaseCheckbox
                    :name="`placeload-item-checkbox-${index}`"
                    shape="full"
                    class="text-primary-500"
                  />
                </div>
              </TairoTableCell>
              <TairoTableCell light spaced>
                <BasePlaceload class="w-[46px] h-[46px] rounded-xl shrink-0" />
              </TairoTableCell>
              <TairoTableCell spaced>
                <BasePlaceload class="w-24 h-3 rounded-lg" />
              </TairoTableCell>
              <TairoTableCell light spaced>
                <BasePlaceload class="w-12 h-3 rounded-lg" />
              </TairoTableCell>
              <TairoTableCell light spaced>
                <BasePlaceload class="w-12 h-3 rounded-lg" />
              </TairoTableCell>
              <TairoTableCell spaced>
                <div class="flex items-center gap-2">
                  <BasePlaceload class="w-8 h-8 rounded-full shrink-0" />
                  <div class="space-y-1">
                    <BasePlaceload class="w-[70px] h-2 rounded-lg" />
                    <BasePlaceload class="w-[50px] h-2 rounded-lg" />
                  </div>
                </div>
              </TairoTableCell>
              <TairoTableCell spaced>
                <BasePlaceload class="w-16 h-8 rounded-lg" />
              </TairoTableCell>
            </TairoTableRow>
          </TairoTable>
        </div>
      </div>
    </TairoContentWrapper>
  </div>
</template>
