<script setup lang="ts">
import type { Project, ProjectStepData } from '../../types'

definePageMeta({
  title: 'Wizard — Step 7',
  preview: {
    title: 'Wizard — Step 7',
    description: 'For onboarding and step forms',
    categories: ['dashboards', 'wizard', 'forms'],
    src: '/img/screens/wizard-7.png',
    srcDark: '/img/screens/wizard-7-dark.png',
    order: 36,
  },
})

const {
  data: project,
  complete,
  getStep,
} = useMultiStepForm<Project, ProjectStepData>()

useHead({
  title: 'Submit project',
})

const avatarPreview = useNinjaFilePreview(() => project.value.avatar)
</script>

<template>
  <div>
    <div v-if="!complete">
      <DemoWizardStepTitle />

      <div class="flex flex-col px-4">
        <div
          class="group relative mx-auto mb-2 flex w-16 items-center justify-center"
        >
          <BaseAvatar
            v-if="avatarPreview"
            size="lg"
            :src="avatarPreview"
            class="dark:bg-muted-700/60 bg-white"
          />
          <BaseAvatar
            v-else
            size="lg"
            text="P"
            class="bg-pink-500/10 text-pink-600"
          />
          <!-- Edit -->
          <div class="absolute bottom-0 end-0 z-10">
            <BaseButtonIcon
              small
              shape="full"
              class="hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100"
              :to="getStep(1).to"
            >
              <Icon name="lucide:edit-2" class="pointer-events-none h-3 w-3" />
            </BaseButtonIcon>
          </div>
        </div>
        <div class="mx-auto flex w-full max-w-xl flex-col gap-4">
          <!-- Title -->
          <h3
            class="text-muted-800 dark:text-muted-100 text-center font-sans text-xl font-medium"
          >
            {{ project.name === '' ? 'Project title goes here' : project.name }}
          </h3>

          <div class="grid grid-cols-12 gap-4">
            <!-- Description -->
            <div class="col-span-12">
              <BaseCard shape="curved" class="group relative p-6">
                <!-- Edit -->
                <div class="absolute end-3 top-3 z-10">
                  <BaseButtonIcon
                    small
                    shape="full"
                    class="hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100"
                    :to="getStep(1).to"
                  >
                    <Icon
                      name="lucide:edit-2"
                      class="pointer-events-none h-3 w-3"
                    />
                  </BaseButtonIcon>
                </div>
                <BaseHeading size="xs" class="mb-4 uppercase">
                  <span class="text-muted-500 dark:text-muted-400">
                    Project description
                  </span>
                </BaseHeading>
                <div>
                  <BaseParagraph
                    v-if="project.description !== ''"
                    size="sm"
                    class="text-muted-500 dark:text-muted-400"
                  >
                    {{ project.description }}
                  </BaseParagraph>
                  <div v-else>
                    <BaseParagraph size="sm" class="text-muted-400">
                      No description was provided for this project
                    </BaseParagraph>
                  </div>
                </div>
              </BaseCard>
            </div>
            <!-- Type -->
            <div class="col-span-12 sm:col-span-6">
              <BaseCard shape="curved" class="group relative p-6">
                <!-- Edit -->
                <div class="absolute end-3 top-3 z-10">
                  <BaseButtonIcon
                    small
                    shape="full"
                    class="hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100"
                    :to="getStep(0).to"
                  >
                    <Icon
                      name="lucide:edit-2"
                      class="pointer-events-none h-3 w-3"
                    />
                  </BaseButtonIcon>
                </div>
                <div class="flex w-full items-center gap-2">
                  <BaseIconBox
                    v-if="project.type === undefined"
                    size="sm"
                    class="bg-primary-500/10 text-primary-600"
                  >
                    <Icon name="ph:briefcase-duotone" class="h-5 w-5" />
                  </BaseIconBox>
                  <BaseIconBox
                    v-else-if="project.type === 'design'"
                    size="sm"
                    class="bg-orange-500/10 text-orange-600"
                  >
                    <Icon name="ph:bounding-box-duotone" class="h-5 w-5" />
                  </BaseIconBox>
                  <BaseIconBox
                    v-else-if="project.type === 'development'"
                    size="sm"
                    class="bg-emerald-500/10 text-emerald-600"
                  >
                    <Icon name="ph:bounding-box-duotone" class="h-5 w-5" />
                  </BaseIconBox>
                  <BaseIconBox
                    v-else-if="project.type === 'marketing'"
                    size="sm"
                    class="bg-yellow-500/10 text-yellow-500"
                  >
                    <Icon name="ph:bounding-box-duotone" class="h-5 w-5" />
                  </BaseIconBox>
                  <div>
                    <div class="text-muted-400 text-xs">
                      <span>Project type</span>
                    </div>
                    <div
                      class="text-muted-800 dark:text-muted-100 text-sm font-medium capitalize"
                    >
                      <span>
                        {{
                          project.type === undefined
                            ? 'No type selected'
                            : project.type
                        }}
                      </span>
                    </div>
                  </div>
                </div>
              </BaseCard>
            </div>
            <!-- Customer -->
            <div class="col-span-12 sm:col-span-6">
              <BaseCard shape="curved" class="group relative p-6">
                <!-- Edit -->
                <div class="absolute end-3 top-3 z-10">
                  <BaseButtonIcon
                    small
                    shape="full"
                    class="hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100"
                    :to="getStep(2).to"
                  >
                    <Icon
                      name="lucide:edit-2"
                      class="pointer-events-none h-3 w-3"
                    />
                  </BaseButtonIcon>
                </div>
                <div class="flex w-full items-center gap-2">
                  <BaseAvatar
                    v-if="project.customer?.logo === undefined"
                    src="/img/avatars/placeholder-file.png"
                    size="sm"
                  />
                  <BaseAvatar
                    v-else
                    :src="project.customer?.logo"
                    size="sm"
                    class="bg-muted-100 dark:bg-muted-700"
                  />
                  <div>
                    <div class="text-muted-400 text-xs">
                      <span>Customer</span>
                    </div>
                    <div
                      class="text-muted-800 dark:text-muted-100 text-sm font-medium"
                    >
                      <span>
                        {{
                          project.customer?.name === undefined
                            ? 'No customer selected'
                            : project.customer?.name
                        }}
                      </span>
                    </div>
                  </div>
                </div>
              </BaseCard>
            </div>
            <!-- Budget -->
            <div class="col-span-12 sm:col-span-4">
              <BaseCard shape="curved" class="group relative p-6">
                <!-- Edit -->
                <div class="absolute end-3 top-3 z-10">
                  <BaseButtonIcon
                    small
                    shape="full"
                    class="hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100"
                    :to="getStep(2).to"
                  >
                    <Icon
                      name="lucide:edit-2"
                      class="pointer-events-none h-3 w-3"
                    />
                  </BaseButtonIcon>
                </div>
                <div
                  class="flex flex-col items-center justify-center text-center"
                >
                  <div>
                    <span
                      class="text-muted-800 dark:text-muted-100 mb-2 block font-sans text-2xl font-semibold"
                    >
                      {{ project.budget }}
                    </span>
                    <BaseHeading size="xs" class="mb-4 scale-90 uppercase">
                      <span class="text-muted-500 dark:text-muted-400">
                        Estimate budget
                      </span>
                    </BaseHeading>
                  </div>
                </div>
              </BaseCard>
            </div>
            <!-- Due Date -->
            <div class="col-span-12 sm:col-span-4">
              <BaseCard shape="curved" class="group relative h-full p-6">
                <!-- Edit -->
                <div class="absolute end-3 top-3 z-10">
                  <BaseButtonIcon
                    small
                    shape="full"
                    class="hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100"
                    :to="getStep(2).to"
                  >
                    <Icon
                      name="lucide:edit-2"
                      class="pointer-events-none h-3 w-3"
                    />
                  </BaseButtonIcon>
                </div>
                <div
                  class="flex h-full flex-col items-center justify-center text-center"
                >
                  <div>
                    <span
                      class="text-muted-800 dark:text-muted-100 mb-3 block font-sans text-sm font-medium"
                    >
                      {{
                        project.endDate === undefined
                          ? '--'
                          : formatDate(project.endDate)
                      }}
                    </span>
                    <BaseHeading size="xs" class="mb-4 scale-90 uppercase">
                      <span class="text-muted-500 dark:text-muted-400">
                        Due date
                      </span>
                    </BaseHeading>
                  </div>
                </div>
              </BaseCard>
            </div>
            <!-- Files -->
            <div class="col-span-12 sm:col-span-4">
              <BaseCard shape="curved" class="group relative p-6">
                <!-- Edit -->
                <div class="absolute end-3 top-3 z-10">
                  <BaseButtonIcon
                    small
                    shape="full"
                    class="hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100"
                    :to="getStep(3).to"
                  >
                    <Icon
                      name="lucide:edit-2"
                      class="pointer-events-none h-3 w-3"
                    />
                  </BaseButtonIcon>
                </div>
                <div
                  class="flex flex-col items-center justify-center text-center"
                >
                  <div>
                    <span
                      class="text-muted-800 dark:text-muted-100 mb-2 block font-sans text-2xl font-semibold"
                    >
                      {{ project.files?.length || 0 }}
                    </span>
                    <BaseHeading size="xs" class="mb-4 scale-90 uppercase">
                      <span class="text-muted-500 dark:text-muted-400">
                        Attached files
                      </span>
                    </BaseHeading>
                  </div>
                </div>
              </BaseCard>
            </div>
            <!-- Team -->
            <div class="col-span-12 sm:col-span-6">
              <BaseCard shape="curved" class="group relative p-6">
                <!-- Edit -->
                <div class="absolute end-3 top-3 z-10">
                  <BaseButtonIcon
                    small
                    shape="full"
                    class="hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100"
                    :to="getStep(4).to"
                  >
                    <Icon
                      name="lucide:edit-2"
                      class="pointer-events-none h-3 w-3"
                    />
                  </BaseButtonIcon>
                </div>
                <BaseHeading size="xs" class="mb-4 uppercase">
                  <span class="text-muted-500 dark:text-muted-400">
                    Project team
                  </span>
                </BaseHeading>
                <div>
                  <div
                    v-if="project.team && project.team.length > 0"
                    class="space-y-4"
                  >
                    <div
                      v-for="member in project.team"
                      :key="member.name"
                      class="flex items-center gap-2"
                    >
                      <BaseAvatar size="xs" :src="member.picture" />
                      <div class="flex flex-col">
                        <h3
                          class="text-muted-800 dark:text-muted-100 font-sans text-sm font-medium"
                        >
                          {{ member.name }}
                        </h3>
                        <p
                          class="text-muted-500 dark:text-muted-400 font-sans text-xs"
                        >
                          {{ member.role }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div v-else>
                    <BaseParagraph size="sm" class="text-muted-400">
                      No team members invited
                    </BaseParagraph>
                  </div>
                </div>
              </BaseCard>
            </div>
            <!-- Tools -->
            <div class="col-span-12 sm:col-span-6">
              <BaseCard shape="curved" class="group relative p-6">
                <!-- Edit -->
                <div class="absolute end-3 top-3 z-10">
                  <BaseButtonIcon
                    small
                    shape="full"
                    class="hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100"
                    :to="getStep(5).to"
                  >
                    <Icon
                      name="lucide:edit-2"
                      class="pointer-events-none h-3 w-3"
                    />
                  </BaseButtonIcon>
                </div>
                <BaseHeading size="xs" class="mb-4 uppercase">
                  <span class="text-muted-500 dark:text-muted-400">
                    Project tools
                  </span>
                </BaseHeading>
                <div>
                  <div
                    v-if="project.tools && project.tools.length > 0"
                    class="space-y-4"
                  >
                    <div
                      v-for="tool in project.tools"
                      :key="tool.name"
                      class="flex items-center gap-2"
                    >
                      <img :src="tool.logo" class="h-8 w-8" />
                      <div>
                        <div
                          class="text-muted-800 dark:text-muted-100 text-sm font-medium"
                        >
                          {{ tool.name }}
                        </div>
                        <div class="text-muted-400 text-xs">
                          {{ tool.description }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-else>
                    <BaseParagraph size="sm" class="text-muted-400">
                      No tools selected
                    </BaseParagraph>
                  </div>
                </div>
              </BaseCard>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="mx-auto max-w-2xl px-4">
        <div class="mb-10 text-center">
          <BaseHeading
            tag="h1"
            size="2xl"
            class="text-muted-800 dark:text-white"
          >
            <span>Congrats! You're all set</span>
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
            <span>Awesome, you just finished creating this project.</span>
          </BaseParagraph>
        </div>

        <BasePlaceholderPage
          title="Get ready for next steps"
          subtitle="You, and the team members you've added can already start working and creating tasks."
        >
          <template #image>
            <img
              src="/img/illustrations/wizard/finish.svg"
              class="mx-auto max-w-[210px] rounded-full"
              alt="Upload files"
            />
          </template>
          <div class="mt-2 text-center">
            <BaseButton
              to="/dashboards"
              shape="curved"
              color="primary"
              class="w-48"
            >
              <span>View Project</span>
            </BaseButton>
          </div>
        </BasePlaceholderPage>
      </div>
    </div>
  </div>
</template>
