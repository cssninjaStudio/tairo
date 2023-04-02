<script setup lang="ts">
definePageMeta({
  title: 'Experience',
})

const { data, pending, error, refresh } = await useFetch('/api/profile')
</script>

<template>
  <form class="w-full pb-16">
    <BaseCard>
      <div class="flex items-center justify-between p-4">
        <div>
          <BaseHeading
            tag="h2"
            size="sm"
            weight="medium"
            lead="normal"
            class="uppercase tracking-wider"
          >
            Work Experience
          </BaseHeading>
          <BaseText size="xs" class="text-muted-400">
            Edit your work experience info
          </BaseText>
        </div>
        <div class="flex items-center gap-2">
          <BaseButton class="w-24" to="/layouts/profile">Cancel</BaseButton>
          <BaseButton color="primary" class="w-24">Save</BaseButton>
        </div>
      </div>
      <div class="p-4">
        <div v-if="!data">
          <BasePlaceholderPage
            title="No experiences"
            subtitle="Looks like you didn't add any experience yet. Share your experience to improve your profile."
            class="scale-90"
          >
            <template #image>
              <img
                class="block dark:hidden"
                src="/img/illustrations/placeholders/flat/placeholder-search-2.svg"
                alt="Placeholder image"
              />
              <img
                class="hidden dark:block"
                src="/img/illustrations/placeholders/flat/placeholder-search-2-dark.svg"
                alt="Placeholder image"
              />
            </template>
            <BaseButton class="w-40 mt-4">Add Experience</BaseButton>
          </BasePlaceholderPage>
        </div>
        <div v-else class="max-w-lg mx-auto py-8 space-y-12">
          <TairoFormGroup
            label="Previous Experiences"
            sublabel="This will help others assess your experience"
          >
            <div class="space-y-8">
              <div
                v-for="item in data.personalInfo.experiences"
                :key="item.company"
                class="w-full flex items-center gap-2"
              >
                <img
                  :src="item.logo"
                  :alt="item.company"
                  class="max-w-[50px] rounded-full border border-muted-200 dark:border-muted-600 bg-white dark:bg-muted-700"
                />
                <div>
                  <BaseHeading tag="h3" size="sm" weight="medium">
                    {{ item.company }}
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    <span>{{ item.period }}</span>
                  </BaseParagraph>
                  <BaseParagraph size="xs" class="text-primary-500">
                    <span>{{ item.position }}</span>
                  </BaseParagraph>
                </div>
                <div class="ms-auto">
                  <BaseDropdown
                    flavor="context"
                    label="Dropdown"
                    orientation="end"
                    condensed
                    class="z-20"
                    shape="curved"
                  >
                    <BaseDropdownDivide />
                    <BaseDropdownItem
                      to="#"
                      title="Edit"
                      text="Edit this experience"
                    >
                      <template #start>
                        <Icon
                          name="ph:pencil-duotone"
                          class="w-5 h-5 block me-2"
                        />
                      </template>
                    </BaseDropdownItem>
                    <BaseDropdownItem
                      to="#"
                      title="Delete"
                      text="Delete this experience"
                    >
                      <template #start>
                        <Icon
                          name="ph:trash-duotone"
                          class="w-5 h-5 block me-2"
                        />
                      </template>
                    </BaseDropdownItem>
                  </BaseDropdown>
                </div>
              </div>
            </div>
            <div
              class="w-full flex items-center gap-2 mt-8 pt-8 border-t border-muted-200 dark:border-muted-700"
            >
              <div
                class="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-muted-100 dark:bg-muted-700/60 text-muted-400"
              >
                <Icon name="ph:suitcase-duotone" class="w-5 h-5" />
              </div>
              <div>
                <BaseHeading tag="h3" size="sm" weight="medium">
                  New Experience
                </BaseHeading>
                <BaseParagraph size="xs" class="text-muted-400">
                  <span>Add a new work experience item</span>
                </BaseParagraph>
              </div>
              <div class="ms-auto">
                <BaseButtonIcon shape="full" condensed>
                  <Icon name="lucide:plus" class="w-4 h-4" />
                </BaseButtonIcon>
              </div>
            </div>
          </TairoFormGroup>
        </div>
      </div>
    </BaseCard>
    <TairoFormSave />
  </form>
</template>
