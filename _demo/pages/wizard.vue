<script setup lang="ts">
import type { Project, ProjectStepData } from '../types'

definePageMeta({
  layout: 'empty',
})

const initialState = ref<Project>({
  type: undefined,
  name: '',
  description: '',
  startDate: undefined,
  endDate: undefined,
  customer: {
    name: undefined,
    logo: undefined,
    location: undefined,
  },
  files: undefined,
  avatar: null,
  team: [],
  tools: [],
  budget: '< 5K',
})

const wizardSteps = [
  {
    to: '/wizard',
    meta: <ProjectStepData>{
      name: 'Project type',
      title: 'Select project type',
      subtitle: 'Select the type of project you want to create',
    },
  },
  {
    to: '/wizard/step-2',
    meta: <ProjectStepData>{
      name: 'Project info',
      title: 'What is this project about?',
      subtitle: 'Manage better by adding all relevant project information',
    },
  },
  {
    to: '/wizard/step-3',
    meta: <ProjectStepData>{
      name: 'Project details',
      title: 'Add more details',
      subtitle: 'Add useful details to your project. You can edit this later',
    },
  },
  {
    to: '/wizard/step-4',
    meta: <ProjectStepData>{
      name: 'Project files',
      title: 'Add files to this project',
      subtitle:
        'Or you can skip this step. You can always add more files later',
    },
  },
  {
    to: '/wizard/step-5',
    meta: <ProjectStepData>{
      name: 'Team members',
      title: 'Who will be working on this project?',
      subtitle: 'Start by adding members to your team',
    },
  },
  {
    to: '/wizard/step-6',
    meta: <ProjectStepData>{
      name: 'Project tools',
      title: 'What tools will you be using?',
      subtitle: "Choose a set of tools that you'll be using in this project",
    },
  },
  {
    to: '/wizard/step-7',
    meta: <ProjectStepData>{
      preview: true,
      name: 'Finish',
      title: 'Make sure it looks good',
      subtitle:
        'You can go back to previous steps if you need to edit anything',
    },
  },
]

const toaster = useToaster()

const { handleSubmit, currentStep } = createMultiStepForm<
  Project,
  ProjectStepData
>({
  initialState: initialState,
  steps: wizardSteps,
  onSubmit: async (state, ctx) => {
    console.log('multi-step-submit', state)

    if (!state.type) {
      ctx.goToStep(ctx.getStep(0))
      throw new Error('Please select a project type')
    }
    if (!state.name) {
      ctx.goToStep(ctx.getStep(1))
      throw new Error('Enter a project name')
    }

    // Simulate async request
    await new Promise((resolve) => setTimeout(resolve, 4000))

    toaster.clearAll()
    toaster.show({
      title: 'Success',
      message: `Project ${state.name} created!`,
      color: 'success',
      icon: 'ph:check',
      closable: true,
    })
  },
  onError: (error) => {
    console.log('multi-step-error', error)

    toaster.clearAll()
    toaster.show({
      title: 'Oops!',
      message: error.message,
      color: 'danger',
      icon: 'lucide:alert-triangle',
      closable: true,
    })
  },
})

useHead({
  titleTemplate: (title) => `${title} | Wizard - Step ${currentStep.value + 1}`,
})
</script>

<template>
  <TairoSidebarLayout
    :toolbar="false"
    :sidebar="false"
    class="bg-muted-100 dark:bg-muted-900 min-h-screen w-full"
  >
    <template #logo>
      <NuxtLink
        to="/"
        class="text-muted-400 hover:text-primary-500 flex h-12 w-12 items-center justify-center rounded-2xl hover:bg-primary-500/20 transition-colors duration-300"
        @click.prevent="$router.back()"
      >
        <Icon name="lucide:arrow-left" class="h-5 w-5" />
      </NuxtLink>
    </template>

    <DemoWizardNavigation />

    <form action="" method="POST" @submit.prevent="handleSubmit" novalidate>
      <div class="pt-24 pb-32">
        <RouterView />
      </div>
      <DemoWizardButtons />
    </form>
  </TairoSidebarLayout>
</template>
