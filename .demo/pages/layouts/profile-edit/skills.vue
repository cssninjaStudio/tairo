<script setup lang="ts">
definePageMeta({
  title: 'Skills',
})
const { data, pending, error, refresh } = await useFetch('/api/profile/')
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
            Skills & Tools
          </BaseHeading>
          <BaseText size="xs" class="text-muted-400">
            Edit your skills and related tools
          </BaseText>
        </div>
        <div class="flex items-center gap-2">
          <BaseButton class="w-24" to="/layouts/profile">Cancel</BaseButton>
          <BaseButton color="primary" class="w-24">Save</BaseButton>
        </div>
      </div>
      <div class="p-4 space-y-8">
        <div v-if="!data">
          <BasePlaceholderPage
            title="No data to show"
            subtitle="There is currently no data to show. Take the time to go through your profile to fill required information."
            class="scale-90"
          >
            <template #image>
              <img
                class="block dark:hidden"
                src="/img/illustrations/placeholders/flat/placeholder-search-6.svg"
                alt="Placeholder image"
              />
              <img
                class="hidden dark:block"
                src="/img/illustrations/placeholders/flat/placeholder-search-6-dark.svg"
                alt="Placeholder image"
              />
            </template>
          </BasePlaceholderPage>
        </div>
        <div v-else class="max-w-lg mx-auto py-8 space-y-20">
          <TairoFormGroup
            label="Languages"
            sublabel="How many languages do you speak?"
          >
            <div v-if="data.personalInfo.languages.length === 0">
              <BasePlaceholderPage
                title="No languages"
                subtitle="Looks like you didn't add any language yet. Share your skills to improve your profile."
                class="scale-90"
              >
                <template #image>
                  <img
                    class="block dark:hidden"
                    src="/img/illustrations/placeholders/flat/placeholder-search-3.svg"
                    alt="Placeholder image"
                  />
                  <img
                    class="hidden dark:block"
                    src="/img/illustrations/placeholders/flat/placeholder-search-3-dark.svg"
                    alt="Placeholder image"
                  />
                </template>
                <BaseButton class="w-40 mt-4">Add Language</BaseButton>
              </BasePlaceholderPage>
            </div>
            <div v-else class="space-y-8">
              <div
                v-for="item in data.personalInfo.languages"
                :key="item.name"
                class="w-full flex items-center gap-2"
              >
                <div
                  class="relative flex items-center justify-center h-[50px] w-[50px] shrink-0 rounded-full border border-muted-200 dark:border-muted-600 bg-white dark:bg-muted-700"
                >
                  <img
                    :src="item.icon"
                    :alt="item.name"
                    class="h-8 w-8 rounded-full"
                  />
                  <BaseProgressCircle
                    :size="68"
                    :thickness="1.5"
                    :value="item.level"
                    class="absolute -top-2.5 -left-2.5 text-primary-500"
                  />
                </div>
                <div>
                  <BaseHeading tag="h3" size="sm" weight="medium">
                    {{ item.name }}
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    <span>{{ item.mastery }}</span>
                  </BaseParagraph>
                </div>
                <div class="ml-auto">
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
                          class="w-5 h-5 block mr-2"
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
                          class="w-5 h-5 block mr-2"
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
                <Icon name="ph:book-open-duotone" class="w-5 h-5" />
              </div>
              <div>
                <BaseHeading tag="h3" size="sm" weight="medium">
                  New Language
                </BaseHeading>
                <BaseParagraph size="xs" class="text-muted-400">
                  <span>Add a new language you speak</span>
                </BaseParagraph>
              </div>
              <div class="ml-auto">
                <BaseButtonIcon shape="full" condensed>
                  <Icon name="lucide:plus" class="w-4 h-4" />
                </BaseButtonIcon>
              </div>
            </div>
          </TairoFormGroup>
          <TairoFormGroup label="Skills" sublabel="Add your best skills">
            <div v-if="data.personalInfo.skills.length === 0">
              <BasePlaceholderPage
                title="No skills"
                subtitle="Looks like you didn't add any skill yet. Share your skills to improve your profile."
                class="scale-90"
              >
                <template #image>
                  <img
                    class="block dark:hidden"
                    src="/img/illustrations/placeholders/flat/placeholder-search-4.svg"
                    alt="Placeholder image"
                  />
                  <img
                    class="hidden dark:block"
                    src="/img/illustrations/placeholders/flat/placeholder-search-4-dark.svg"
                    alt="Placeholder image"
                  />
                </template>
                <BaseButton class="w-40 mt-4">Add Skill</BaseButton>
              </BasePlaceholderPage>
            </div>
            <div v-else class="space-y-8">
              <div
                v-for="item in data.personalInfo.skills"
                :key="item.name"
                class="w-full flex items-center gap-2"
              >
                <div
                  class="relative flex items-center justify-center h-[50px] w-[50px] shrink-0 rounded-full border border-muted-200 dark:border-muted-600 bg-white dark:bg-muted-700"
                >
                  <img
                    v-if="'logo' in item"
                    :src="item.logo"
                    :alt="item.name"
                    class="h-8 w-8 rounded-full"
                  />
                  <Icon
                    v-else
                    :name="item.icon"
                    class="w-6 h-6 text-muted-400"
                  />
                  <BaseProgressCircle
                    :size="68"
                    :thickness="1.5"
                    :value="item.level"
                    class="absolute -top-2.5 -left-2.5 text-primary-500"
                  />
                </div>
                <div>
                  <BaseHeading tag="h3" size="sm" weight="medium">
                    {{ item.name }}
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    <span>{{ item.experience }} years of experience</span>
                  </BaseParagraph>
                </div>
                <div class="ml-auto">
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
                      text="Edit this skill"
                    >
                      <template #start>
                        <Icon
                          name="ph:pencil-duotone"
                          class="w-5 h-5 block mr-2"
                        />
                      </template>
                    </BaseDropdownItem>
                    <BaseDropdownItem
                      to="#"
                      title="Delete"
                      text="Delete this skill"
                    >
                      <template #start>
                        <Icon
                          name="ph:trash-duotone"
                          class="w-5 h-5 block mr-2"
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
                <Icon name="ph:sparkle-duotone" class="w-5 h-5" />
              </div>
              <div>
                <BaseHeading tag="h3" size="sm" weight="medium">
                  New Skill
                </BaseHeading>
                <BaseParagraph size="xs" class="text-muted-400">
                  <span>Add a new skill you master</span>
                </BaseParagraph>
              </div>
              <div class="ml-auto">
                <BaseButtonIcon shape="full" condensed>
                  <Icon name="lucide:plus" class="w-4 h-4" />
                </BaseButtonIcon>
              </div>
            </div>
          </TairoFormGroup>
          <TairoFormGroup label="Tools" sublabel="Add the tools you work with">
            <div v-if="data.personalInfo.tools.length === 0">
              <BasePlaceholderPage
                title="No tools"
                subtitle="Looks like you didn't add any tools yet. Share your skills to improve your profile."
                class="scale-90"
              >
                <template #image>
                  <img
                    class="block dark:hidden"
                    src="/img/illustrations/placeholders/flat/placeholder-search-5.svg"
                    alt="Placeholder image"
                  />
                  <img
                    class="hidden dark:block"
                    src="/img/illustrations/placeholders/flat/placeholder-search-5-dark.svg"
                    alt="Placeholder image"
                  />
                </template>
                <BaseButton class="w-40 mt-4">Add Tool</BaseButton>
              </BasePlaceholderPage>
            </div>
            <div v-else class="space-y-8">
              <div
                v-for="item in data.personalInfo.tools"
                :key="item.name"
                class="w-full flex items-center gap-2"
              >
                <div
                  class="relative flex items-center justify-center h-[50px] w-[50px] shrink-0 rounded-full border border-muted-200 dark:border-muted-600 bg-white dark:bg-muted-700"
                >
                  <img
                    :src="item.logo"
                    :alt="item.name"
                    class="h-8 w-8 rounded-full"
                  />
                  <BaseProgressCircle
                    :size="68"
                    :thickness="1.5"
                    :value="item.level"
                    class="absolute -top-2.5 -left-2.5 text-primary-500"
                  />
                </div>
                <div>
                  <BaseHeading tag="h3" size="sm" weight="medium">
                    {{ item.name }}
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    <span>{{ item.mastery }}</span>
                  </BaseParagraph>
                </div>
                <div class="ml-auto">
                  <BaseDropdown
                    flavor="context"
                    label="Dropdown"
                    orientation="end"
                    condensed
                    class="z-20"
                    shape="curved"
                  >
                    <BaseDropdownDivide />
                    <BaseDropdownItem to="#" title="Edit" text="Edit this tool">
                      <template #start>
                        <Icon
                          name="ph:pencil-duotone"
                          class="w-5 h-5 block mr-2"
                        />
                      </template>
                    </BaseDropdownItem>
                    <BaseDropdownItem
                      to="#"
                      title="Delete"
                      text="Delete this tool"
                    >
                      <template #start>
                        <Icon
                          name="ph:trash-duotone"
                          class="w-5 h-5 block mr-2"
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
                <Icon name="ph:wrench-duotone" class="w-5 h-5" />
              </div>
              <div>
                <BaseHeading tag="h3" size="sm" weight="medium">
                  New Tool
                </BaseHeading>
                <BaseParagraph size="xs" class="text-muted-400">
                  <span>Add a new tool you work with</span>
                </BaseParagraph>
              </div>
              <div class="ml-auto">
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
