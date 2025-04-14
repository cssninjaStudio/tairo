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
const fakePerPage = ref<string>()
const fakeAll = ref(false)
const fakeItems = ref([])
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20 dark:[--color-input-default-bg:var(--color-muted-950)]">
    <TairoContentWrapper>
      <template #left>
        <TairoInput
          v-model="fake"
          icon="lucide:search"
          placeholder="Filter items..."
        />
      </template>
      <template #right>
        <BaseSelect
          v-model="fakePerPage"
          placeholder="Items per page"
          disabled
        >
          <BaseSelectItem :value="10">
            10 per page
          </BaseSelectItem>
          <BaseSelectItem :value="25">
            25 per page
          </BaseSelectItem>
          <BaseSelectItem :value="50">
            50 per page
          </BaseSelectItem>
          <BaseSelectItem :value="100">
            100 per page
          </BaseSelectItem>
        </BaseSelect>
      </template>
      <div>
        <div class="w-full">
          <TairoTable rounded="sm">
            <template #header>
              <TairoTableHeading
                uppercase
                spaced
                class="p-4"
              >
                <div class="flex items-center">
                  <BaseCheckbox v-model="fakeAll" />
                </div>
              </TairoTableHeading>
              <TairoTableHeading uppercase spaced>
                Type
              </TairoTableHeading>
              <TairoTableHeading uppercase spaced>
                Name
              </TairoTableHeading>
              <TairoTableHeading uppercase spaced>
                Size
              </TairoTableHeading>
              <TairoTableHeading uppercase spaced>
                Version
              </TairoTableHeading>
              <TairoTableHeading uppercase spaced>
                Last Updated
              </TairoTableHeading>
              <TairoTableHeading uppercase spaced>
                Action
              </TairoTableHeading>
            </template>

            <BaseCheckboxGroup v-model="fakeItems" as-child>
              <TairoTableRow v-for="index in 10" :key="index">
                <TairoTableCell spaced>
                  <div class="flex items-center">
                    <BaseCheckbox :value="index" />
                  </div>
                </TairoTableCell>
                <TairoTableCell light spaced>
                  <BasePlaceload class="size-[46px] shrink-0 rounded-xl" />
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
                    <BasePlaceload class="size-8 shrink-0 rounded-full" />
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
            </BaseCheckboxGroup>
          </TairoTable>
        </div>
      </div>
    </TairoContentWrapper>
  </div>
</template>
