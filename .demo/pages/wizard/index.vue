<script setup lang="ts">
import type { Project, ProjectStepData, ProjectType } from '../../types'

const { getNextStep, project, goToStep } = useMultiStepForm<
  Project,
  ProjectStepData
>()
useHead({
  title: 'Project type',
})

function onSelectType(type: ProjectType) {
  const next = getNextStep()
  if (next) {
    project.type = type
    goToStep(next)
  }
}
</script>

<template>
  <div>
    <DemoWizardStepTitle />
    <div class="w-full max-w-6xl mx-auto text-center px-4">
      <div class="grid sm:grid-cols-2 ltablet:grid-cols-3 lg:grid-cols-3 gap-6">
        <!-- Choice -->
        <div
          class="group rounded-2xl p-5 hover:bg-white dark:hover:bg-muted-800 hover:shadow-xl hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 transition-all duration-300"
        >
          <img
            class="rounded-2xl"
            src="/img/illustrations/wizard/design.svg"
            alt="UI/UX design"
          />
          <div class="my-4">
            <BaseHeading
              tag="h3"
              weight="medium"
              size="xl"
              class="mb-2 text-muted-800 dark:text-muted-100"
            >
              <span>UI/UX design</span>
            </BaseHeading>
            <BaseParagraph class="text-muted-400">
              <span>
                UI/UX is done to improve interaction between the user and the
                product.
              </span>
            </BaseParagraph>
          </div>
          <div class="flex flex-col items-center mb-5">
            <BaseButton
              :to="getNextStep()?.path"
              color="primary"
              shape="curved"
              class="w-36"
              @click.prevent="() => onSelectType('design')"
            >
              <span>Continue</span>
            </BaseButton>
            <div class="mt-4 text-center">
              <NuxtLink
                to="/wizard"
                class="font-sans font-semibold uppercase text-[0.65rem] text-muted-400 hover:text-primary-500 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <span>Learn More</span>
              </NuxtLink>
            </div>
          </div>
        </div>
        <!-- Choice -->
        <div
          class="group rounded-2xl p-5 hover:bg-white dark:hover:bg-muted-800 hover:shadow-xl hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 transition-all duration-300"
        >
          <img
            class="rounded-2xl"
            src="/img/illustrations/wizard/development.svg"
            alt="Web Development"
          />
          <div class="my-4">
            <BaseHeading
              tag="h3"
              weight="medium"
              size="xl"
              class="mb-2 text-muted-800 dark:text-muted-100"
            >
              <span>Web Development</span>
            </BaseHeading>
            <BaseParagraph class="text-muted-400">
              <span>
                A discipline that involves the creation of websites and web
                applications
              </span>
            </BaseParagraph>
          </div>
          <div class="flex flex-col items-center mb-5">
            <BaseButton
              :to="getNextStep()?.path"
              color="primary"
              shape="curved"
              class="w-36"
              @click.prevent="() => onSelectType('development')"
            >
              <span>Continue</span>
            </BaseButton>
            <div class="mt-4 text-center">
              <NuxtLink
                to="/wizard"
                class="font-sans font-semibold uppercase text-[0.65rem] text-muted-400 hover:text-primary-500 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <span>Learn More</span>
              </NuxtLink>
            </div>
          </div>
        </div>
        <!-- Choice -->
        <div
          class="group rounded-2xl p-5 hover:bg-white dark:hover:bg-muted-800 hover:shadow-xl hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 transition-all duration-300"
        >
          <img
            class="rounded-2xl"
            src="/img/illustrations/wizard/marketing.svg"
            alt="Web Development"
          />
          <div class="my-4">
            <BaseHeading
              tag="h3"
              weight="medium"
              size="xl"
              class="mb-2 text-muted-800 dark:text-muted-100"
            >
              <span>Marketing</span>
            </BaseHeading>
            <BaseParagraph class="text-muted-400">
              <span>
                A discipline that involves the creation of promotional content
              </span>
            </BaseParagraph>
          </div>
          <div class="flex flex-col items-center mb-5">
            <BaseButton
              :to="getNextStep()?.path"
              color="primary"
              shape="curved"
              class="w-36"
              @click.prevent="() => onSelectType('marketing')"
            >
              <span>Continue</span>
            </BaseButton>
            <div class="mt-4 text-center">
              <NuxtLink
                to="/wizard"
                class="font-sans font-semibold uppercase text-[0.65rem] text-muted-400 hover:text-primary-500 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <span>Learn More</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
