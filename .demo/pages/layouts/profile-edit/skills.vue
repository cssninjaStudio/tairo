<script setup lang="ts">
definePageMeta({
  title: 'Skills',
  preview: {
    title: 'Edit profile 3',
    description: 'For editing a user profile',
    categories: ['layouts', 'profile', 'forms'],
    src: '/img/screens/layouts-subpages-profile-edit-3.png',
    srcDark: '/img/screens/layouts-subpages-profile-edit-3-dark.png',
    order: 78,
  },
  pageTransition: {
    enterActiveClass: 'transition-all duration-500 ease-out',
    enterFromClass: 'translate-y-20 opacity-0',
    enterToClass: 'translate-y-0 opacity-100',
    leaveActiveClass: 'transition-all duration-200 ease-in',
    leaveFromClass: 'translate-y-0 opacity-100',
    leaveToClass: 'translate-y-20 opacity-0',
  },
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
            Skills & Tools
          </BaseHeading>
          <BaseText size="xs" class="text-muted-400">
            Edit your skills and related tools
          </BaseText>
        </div>
        <div class="flex items-center gap-2">
          <BaseButton class="w-24" to="/layouts/profile">
            Cancel
          </BaseButton>
          <BaseButton color="primary" class="w-24">
            Save
          </BaseButton>
        </div>
      </div>
      <div class="space-y-8 p-4">
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
              >
              <img
                class="hidden dark:block"
                src="/img/illustrations/placeholders/flat/placeholder-search-6-dark.svg"
                alt="Placeholder image"
              >
            </template>
          </BasePlaceholderPage>
        </div>
        <div v-else class="mx-auto max-w-lg space-y-20 py-8">
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
                  >
                  <img
                    class="hidden dark:block"
                    src="/img/illustrations/placeholders/flat/placeholder-search-3-dark.svg"
                    alt="Placeholder image"
                  >
                </template>
                <BaseButton class="mt-4 w-40">
                  Add Language
                </BaseButton>
              </BasePlaceholderPage>
            </div>
            <div v-else class="space-y-8">
              <div
                v-for="item in data.personalInfo.languages"
                :key="item.name"
                class="flex w-full items-center gap-2"
              >
                <div
                  class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 relative flex size-[50px] shrink-0 items-center justify-center rounded-full border bg-white"
                >
                  <img
                    :src="item.icon"
                    :alt="item.name"
                    class="size-8 rounded-full"
                  >
                  <BaseProgressCircle
                    :size="68"
                    :thickness="1.5"
                    :value="item.level"
                    class="text-primary-500 absolute -start-2.5 -top-2.5"
                  />
                </div>
                <div>
                  <BaseHeading
                    tag="h3"
                    size="sm"
                    weight="medium"
                  >
                    {{ item.name }}
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    <span>{{ item.mastery }}</span>
                  </BaseParagraph>
                </div>
                <div class="ms-auto">
                  <BaseDropdown
                    variant="context"
                    label="Dropdown"
                    placement="bottom-end"
                    size="md"
                    class="z-20"
                    rounded="lg"
                  >
                    <BaseDropdownDivider />
                    <BaseDropdownItem
                      to="#"
                      title="Edit"
                      text="Edit this experience"
                    >
                      <template #start>
                        <Icon
                          name="ph:pencil-duotone"
                          class="me-2 block size-5"
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
                          class="me-2 block size-5"
                        />
                      </template>
                    </BaseDropdownItem>
                  </BaseDropdown>
                </div>
              </div>
            </div>
            <div
              class="border-muted-200 dark:border-muted-700 mt-8 flex w-full items-center gap-2 border-t pt-8"
            >
              <div
                class="bg-muted-100 dark:bg-muted-700/60 text-muted-400 flex size-[50px] items-center justify-center rounded-full"
              >
                <Icon name="ph:book-open-duotone" class="size-5" />
              </div>
              <div>
                <BaseHeading
                  tag="h3"
                  size="sm"
                  weight="medium"
                >
                  New Language
                </BaseHeading>
                <BaseParagraph size="xs" class="text-muted-400">
                  <span>Add a new language you speak</span>
                </BaseParagraph>
              </div>
              <div class="ms-auto">
                <BaseButtonIcon rounded="full" size="sm">
                  <Icon name="lucide:plus" class="size-4" />
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
                  >
                  <img
                    class="hidden dark:block"
                    src="/img/illustrations/placeholders/flat/placeholder-search-4-dark.svg"
                    alt="Placeholder image"
                  >
                </template>
                <BaseButton class="mt-4 w-40">
                  Add Skill
                </BaseButton>
              </BasePlaceholderPage>
            </div>
            <div v-else class="space-y-8">
              <div
                v-for="item in data.personalInfo.skills"
                :key="item.name"
                class="flex w-full items-center gap-2"
              >
                <div
                  class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 relative flex size-[50px] shrink-0 items-center justify-center rounded-full border bg-white"
                >
                  <img
                    v-if="'logo' in item"
                    :src="item.logo"
                    :alt="item.name"
                    class="size-8 rounded-full"
                  >
                  <Icon
                    v-else
                    :name="item.icon"
                    class="text-muted-400 size-6"
                  />
                  <BaseProgressCircle
                    :size="68"
                    :thickness="1.5"
                    :value="item.level"
                    class="text-primary-500 absolute -start-2.5 -top-2.5"
                  />
                </div>
                <div>
                  <BaseHeading
                    tag="h3"
                    size="sm"
                    weight="medium"
                  >
                    {{ item.name }}
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    <span>{{ item.experience }} years of experience</span>
                  </BaseParagraph>
                </div>
                <div class="ms-auto">
                  <BaseDropdown
                    variant="context"
                    label="Dropdown"
                    placement="bottom-end"
                    size="md"
                    class="z-20"
                    rounded="lg"
                  >
                    <BaseDropdownDivider />
                    <BaseDropdownItem
                      to="#"
                      title="Edit"
                      text="Edit this skill"
                    >
                      <template #start>
                        <Icon
                          name="ph:pencil-duotone"
                          class="me-2 block size-5"
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
                          class="me-2 block size-5"
                        />
                      </template>
                    </BaseDropdownItem>
                  </BaseDropdown>
                </div>
              </div>
            </div>
            <div
              class="border-muted-200 dark:border-muted-700 mt-8 flex w-full items-center gap-2 border-t pt-8"
            >
              <div
                class="bg-muted-100 dark:bg-muted-700/60 text-muted-400 flex size-[50px] items-center justify-center rounded-full"
              >
                <Icon name="ph:sparkle-duotone" class="size-5" />
              </div>
              <div>
                <BaseHeading
                  tag="h3"
                  size="sm"
                  weight="medium"
                >
                  New Skill
                </BaseHeading>
                <BaseParagraph size="xs" class="text-muted-400">
                  <span>Add a new skill you master</span>
                </BaseParagraph>
              </div>
              <div class="ms-auto">
                <BaseButtonIcon rounded="full" size="sm">
                  <Icon name="lucide:plus" class="size-4" />
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
                  >
                  <img
                    class="hidden dark:block"
                    src="/img/illustrations/placeholders/flat/placeholder-search-5-dark.svg"
                    alt="Placeholder image"
                  >
                </template>
                <BaseButton class="mt-4 w-40">
                  Add Tool
                </BaseButton>
              </BasePlaceholderPage>
            </div>
            <div v-else class="space-y-8">
              <div
                v-for="item in data.personalInfo.tools"
                :key="item.name"
                class="flex w-full items-center gap-2"
              >
                <div
                  class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 relative flex size-[50px] shrink-0 items-center justify-center rounded-full border bg-white"
                >
                  <img
                    :src="item.logo"
                    :alt="item.name"
                    class="size-8 rounded-full"
                  >
                  <BaseProgressCircle
                    :size="68"
                    :thickness="1.5"
                    :value="item.level"
                    class="text-primary-500 absolute -start-2.5 -top-2.5"
                  />
                </div>
                <div>
                  <BaseHeading
                    tag="h3"
                    size="sm"
                    weight="medium"
                  >
                    {{ item.name }}
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    <span>{{ item.mastery }}</span>
                  </BaseParagraph>
                </div>
                <div class="ms-auto">
                  <BaseDropdown
                    variant="context"
                    label="Dropdown"
                    placement="bottom-end"
                    size="md"
                    class="z-20"
                    rounded="lg"
                  >
                    <BaseDropdownDivider />
                    <BaseDropdownItem
                      to="#"
                      title="Edit"
                      text="Edit this tool"
                    >
                      <template #start>
                        <Icon
                          name="ph:pencil-duotone"
                          class="me-2 block size-5"
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
                          class="me-2 block size-5"
                        />
                      </template>
                    </BaseDropdownItem>
                  </BaseDropdown>
                </div>
              </div>
            </div>
            <div
              class="border-muted-200 dark:border-muted-700 mt-8 flex w-full items-center gap-2 border-t pt-8"
            >
              <div
                class="bg-muted-100 dark:bg-muted-700/60 text-muted-400 flex size-[50px] items-center justify-center rounded-full"
              >
                <Icon name="ph:wrench-duotone" class="size-5" />
              </div>
              <div>
                <BaseHeading
                  tag="h3"
                  size="sm"
                  weight="medium"
                >
                  New Tool
                </BaseHeading>
                <BaseParagraph size="xs" class="text-muted-400">
                  <span>Add a new tool you work with</span>
                </BaseParagraph>
              </div>
              <div class="ms-auto">
                <BaseButtonIcon rounded="full" size="sm">
                  <Icon name="lucide:plus" class="size-4" />
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
