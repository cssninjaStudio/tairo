<script setup lang="ts">
import type { Project, ProjectStepData } from '../types'

const initialState: Project = {
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
  team: [],
  tools: [],
  budget: '< 5K',
}

const wizardSteps = [
  {
    path: '/wizard',
    data: <ProjectStepData>{
      name: 'Project type',
      title: 'Select project type',
      subtitle: 'Select the type of project you want to create',
    },
  },
  {
    path: '/wizard/step-2',
    data: <ProjectStepData>{
      name: 'Project info',
      title: 'What is this project about?',
      subtitle: 'Manage better by adding all relevant project information',
    },
  },
  {
    path: '/wizard/step-3',
    data: <ProjectStepData>{
      name: 'Project details',
      title: 'Add more details',
      subtitle: 'Add useful details to your project. You can edit this later',
    },
  },
  {
    path: '/wizard/step-4',
    data: <ProjectStepData>{
      name: 'Project files',
      title: 'Add files to this project',
      subtitle:
        'Or you can skip this step. You can always add more files later',
    },
  },
  {
    path: '/wizard/step-5',
    data: <ProjectStepData>{
      name: 'Team members',
      title: 'Who will be working on this project?',
      subtitle: 'Start by adding members to your team',
    },
  },
  {
    path: '/wizard/step-6',
    data: <ProjectStepData>{
      name: 'Project tools',
      title: 'What tools will you be using?',
      subtitle: "Choose a set of tools that you'll be using in this project",
    },
  },
  {
    path: '/wizard/step-7',
    data: <ProjectStepData>{
      preview: true,
      name: 'Finish',
      title: 'Make sure it looks good',
      subtitle:
        'You can go back to previous steps if you need to edit anything',
    },
  },
]

const { currentStep } = createMultiStepForm<Project, ProjectStepData>({
  state: initialState,
  steps: wizardSteps,
})

useHead({
  titleTemplate: (title) => `${title} | Wizard - Step ${currentStep.value}`,
})
</script>

<template>
  <div class="bg-muted-100 dark:bg-muted-900 min-h-screen w-full">
    <WizardNavigation />
    <div class="pt-24 pb-32">
      <NuxtPage />
    </div>
    <WizardButtons />
  </div>
</template>
