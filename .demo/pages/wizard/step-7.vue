<script setup lang="ts">
import type { Project, ProjectStepData } from '../../types'

const { project, complete, getStep } = useMultiStepForm<
  Project,
  ProjectStepData
>()
useHead({
  title: 'Submit project',
})

onBeforeUnmount(() => {
  complete.value = false
})
</script>

<template>
  <div>
    <div v-if="!complete">
      <WizardStepTitle />

      <div class="flex flex-col px-4">
        <div
          class="group relative w-16 mx-auto flex items-center justify-center mb-2"
        >
          <BaseAvatar
            v-if="project.customer?.logo"
            size="lg"
            :src="project.customer?.logo"
            class="bg-white dark:bg-muted-700/60"
          />
          <BaseAvatar
            v-else
            size="lg"
            text="P"
            class="bg-pink-500/10 text-pink-600"
          />
          <!-- Edit -->
          <div class="absolute z-10 bottom-0 right-0">
            <BaseButtonIcon
              small
              shape="full"
              class="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500"
              :to="getStep(1).path"
            >
              <Icon name="lucide:edit-2" class="w-3 h-3 pointer-events-none" />
            </BaseButtonIcon>
          </div>
        </div>
        <div class="w-full flex flex-col gap-4 max-w-xl mx-auto">
          <!-- Title -->
          <h3
            class="font-sans text-xl font-medium text-center text-muted-800 dark:text-muted-100"
          >
            {{ project.name === '' ? 'Project title goes here' : project.name }}
          </h3>

          <div class="grid grid-cols-12 gap-4">
            <!-- Description -->
            <div class="col-span-12">
              <BaseCard shape="curved" class="group relative p-6">
                <!-- Edit -->
                <div class="absolute z-10 top-3 right-3">
                  <BaseButtonIcon
                    small
                    shape="full"
                    class="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500"
                    :to="getStep(1).path"
                  >
                    <Icon
                      name="lucide:edit-2"
                      class="w-3 h-3 pointer-events-none"
                    />
                  </BaseButtonIcon>
                </div>
                <BaseHeading size="xs" class="uppercase mb-4">
                  <span class="text-muted-500 dark:text-muted-400"
                    >Project description</span
                  >
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
                <div class="absolute z-10 top-3 right-3">
                  <BaseButtonIcon
                    small
                    shape="full"
                    class="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500"
                    :to="getStep(0).path"
                  >
                    <Icon
                      name="lucide:edit-2"
                      class="w-3 h-3 pointer-events-none"
                    />
                  </BaseButtonIcon>
                </div>
                <div class="w-full flex items-center gap-2">
                  <BaseIconBox
                    v-if="project.type === undefined"
                    size="sm"
                    class="bg-primary-500/10 text-primary-600"
                  >
                    <Icon name="ph:briefcase-duotone" class="w-5 h-5" />
                  </BaseIconBox>
                  <BaseIconBox
                    v-else-if="project.type === 'design'"
                    size="sm"
                    class="bg-orange-500/10 text-orange-600"
                  >
                    <Icon name="ph:bounding-box-duotone" class="w-5 h-5" />
                  </BaseIconBox>
                  <BaseIconBox
                    v-else-if="project.type === 'development'"
                    size="sm"
                    class="bg-emerald-500/10 text-emerald-600"
                  >
                    <Icon name="ph:bounding-box-duotone" class="w-5 h-5" />
                  </BaseIconBox>
                  <BaseIconBox
                    v-else-if="project.type === 'marketing'"
                    size="sm"
                    class="bg-yellow-500/10 text-yellow-500"
                  >
                    <Icon name="ph:bounding-box-duotone" class="w-5 h-5" />
                  </BaseIconBox>
                  <div>
                    <div class="text-xs text-muted-400">
                      <span>Project type</span>
                    </div>
                    <div
                      class="text-sm font-medium capitalize text-muted-800 dark:text-muted-100"
                    >
                      <span>{{
                        project.type === undefined
                          ? 'No type selected'
                          : project.type
                      }}</span>
                    </div>
                  </div>
                </div>
              </BaseCard>
            </div>
            <!-- Customer -->
            <div class="col-span-12 sm:col-span-6">
              <BaseCard shape="curved" class="group relative p-6">
                <!-- Edit -->
                <div class="absolute z-10 top-3 right-3">
                  <BaseButtonIcon
                    small
                    shape="full"
                    class="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500"
                    :to="getStep(2).path"
                  >
                    <Icon
                      name="lucide:edit-2"
                      class="w-3 h-3 pointer-events-none"
                    />
                  </BaseButtonIcon>
                </div>
                <div class="w-full flex items-center gap-2">
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
                    <div class="text-xs text-muted-400">
                      <span>Customer</span>
                    </div>
                    <div
                      class="text-sm font-medium text-muted-800 dark:text-muted-100"
                    >
                      <span>{{
                        project.customer?.name === undefined
                          ? 'No customer selected'
                          : project.customer?.name
                      }}</span>
                    </div>
                  </div>
                </div>
              </BaseCard>
            </div>
            <!-- Budget -->
            <div class="col-span-12 sm:col-span-4">
              <BaseCard shape="curved" class="group relative p-6">
                <!-- Edit -->
                <div class="absolute z-10 top-3 right-3">
                  <BaseButtonIcon
                    small
                    shape="full"
                    class="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500"
                    :to="getStep(2).path"
                  >
                    <Icon
                      name="lucide:edit-2"
                      class="w-3 h-3 pointer-events-none"
                    />
                  </BaseButtonIcon>
                </div>
                <div
                  class="flex flex-col items-center justify-center text-center"
                >
                  <div>
                    <span
                      class="block font-sans font-semibold text-2xl mb-2 text-muted-800 dark:text-muted-100"
                      >{{ project.budget }}</span
                    >
                    <BaseHeading size="xs" class="uppercase mb-4 scale-90">
                      <span class="text-muted-500 dark:text-muted-400"
                        >Estimate budget</span
                      >
                    </BaseHeading>
                  </div>
                </div>
              </BaseCard>
            </div>
            <!-- Due Date -->
            <div class="col-span-12 sm:col-span-4">
              <BaseCard shape="curved" class="group relative p-6 h-full">
                <!-- Edit -->
                <div class="absolute z-10 top-3 right-3">
                  <BaseButtonIcon
                    small
                    shape="full"
                    class="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500"
                    :to="getStep(2).path"
                  >
                    <Icon
                      name="lucide:edit-2"
                      class="w-3 h-3 pointer-events-none"
                    />
                  </BaseButtonIcon>
                </div>
                <div
                  class="h-full flex flex-col items-center justify-center text-center"
                >
                  <div>
                    <span
                      class="block font-sans font-medium text-sm mb-3 text-muted-800 dark:text-muted-100"
                      >{{
                        project.endDate === undefined
                          ? '--'
                          : formatDate(project.endDate)
                      }}</span
                    >
                    <BaseHeading size="xs" class="uppercase mb-4 scale-90">
                      <span class="text-muted-500 dark:text-muted-400"
                        >Due date</span
                      >
                    </BaseHeading>
                  </div>
                </div>
              </BaseCard>
            </div>
            <!-- Files -->
            <div class="col-span-12 sm:col-span-4">
              <BaseCard shape="curved" class="group relative p-6">
                <!-- Edit -->
                <div class="absolute z-10 top-3 right-3">
                  <BaseButtonIcon
                    small
                    shape="full"
                    class="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500"
                    :to="getStep(3).path"
                  >
                    <Icon
                      name="lucide:edit-2"
                      class="w-3 h-3 pointer-events-none"
                    />
                  </BaseButtonIcon>
                </div>
                <div
                  class="flex flex-col items-center justify-center text-center"
                >
                  <div>
                    <span
                      class="block font-sans font-semibold text-2xl mb-2 text-muted-800 dark:text-muted-100"
                      >0</span
                    >
                    <BaseHeading size="xs" class="uppercase mb-4 scale-90">
                      <span class="text-muted-500 dark:text-muted-400"
                        >Attached files</span
                      >
                    </BaseHeading>
                  </div>
                </div>
              </BaseCard>
            </div>
            <!-- Team -->
            <div class="col-span-12 sm:col-span-6">
              <BaseCard shape="curved" class="group relative p-6">
                <!-- Edit -->
                <div class="absolute z-10 top-3 right-3">
                  <BaseButtonIcon
                    small
                    shape="full"
                    class="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500"
                    :to="getStep(4).path"
                  >
                    <Icon
                      name="lucide:edit-2"
                      class="w-3 h-3 pointer-events-none"
                    />
                  </BaseButtonIcon>
                </div>
                <BaseHeading size="xs" class="uppercase mb-4">
                  <span class="text-muted-500 dark:text-muted-400"
                    >Project team</span
                  >
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
                          class="font-sans text-sm font-medium text-muted-800 dark:text-muted-100"
                        >
                          {{ member.name }}
                        </h3>
                        <p
                          class="font-sans text-xs text-muted-500 dark:text-muted-400"
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
                <div class="absolute z-10 top-3 right-3">
                  <BaseButtonIcon
                    small
                    shape="full"
                    class="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500"
                    :to="getStep(5).path"
                  >
                    <Icon
                      name="lucide:edit-2"
                      class="w-3 h-3 pointer-events-none"
                    />
                  </BaseButtonIcon>
                </div>
                <BaseHeading size="xs" class="uppercase mb-4">
                  <span class="text-muted-500 dark:text-muted-400"
                    >Project tools</span
                  >
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
                      <img :src="tool.logo" class="w-8 h-8" />
                      <div>
                        <div
                          class="text-sm font-medium text-muted-800 dark:text-muted-100"
                        >
                          {{ tool.name }}
                        </div>
                        <div class="text-xs text-muted-400">
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
      <div class="max-w-2xl mx-auto px-4">
        <div class="text-center mb-10">
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
            <NuxtImg
              src="/img/illustrations/wizard/finish.svg"
              class="rounded-full max-w-[210px] mx-auto"
              alt="Upload files"
            />
          </template>
          <div class="text-center mt-2">
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
