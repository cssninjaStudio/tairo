<script setup lang="ts">
definePageMeta({
  title: 'Placeload',
  preview: {
    title: 'Placeload 2',
    description: 'For loading states',
    categories: ['layouts'],
    src: '/img/screens/layouts-placeload-2.png',
    srcDark: '/img/screens/layouts-placeload-2-dark.png',
    order: 54,
  },
})
const fake = ref('')
const fakePerPage = ref('')
const fakeAll = ref(true)
const fakeItems = ref([])
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
        <BaseSelect
          v-model="fakePerPage"
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
                    v-model="fakeAll"
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
                    v-model="fakeItems"
                    :name="`placeload-item-checkbox-${index}`"
                    shape="full"
                    class="text-primary-500"
                  />
                </div>
              </TairoTableCell>
              <TairoTableCell light spaced>
                <BasePlaceload class="h-[46px] w-[46px] shrink-0 rounded-xl" />
              </TairoTableCell>
              <TairoTableCell spaced>
                <BasePlaceload class="h-3 w-24 rounded-lg" />
              </TairoTableCell>
              <TairoTableCell light spaced>
                <BasePlaceload class="h-3 w-12 rounded-lg" />
              </TairoTableCell>
              <TairoTableCell light spaced>
                <BasePlaceload class="h-3 w-12 rounded-lg" />
              </TairoTableCell>
              <TairoTableCell spaced>
                <div class="flex items-center gap-2">
                  <BasePlaceload class="h-8 w-8 shrink-0 rounded-full" />
                  <div class="space-y-1">
                    <BasePlaceload class="h-2 w-[70px] rounded-lg" />
                    <BasePlaceload class="h-2 w-[50px] rounded-lg" />
                  </div>
                </div>
              </TairoTableCell>
              <TairoTableCell spaced>
                <BasePlaceload class="h-8 w-16 rounded-lg" />
              </TairoTableCell>
            </TairoTableRow>
          </TairoTable>
        </div>
      </div>
    </TairoContentWrapper>
  </div>
</template>
