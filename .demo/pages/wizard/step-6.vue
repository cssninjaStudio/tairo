<script setup lang="ts">
import type { Project, ProjectStepData, Tool } from '../../types'

definePageMeta({
  title: 'Wizard — Step 6',
  preview: {
    title: 'Wizard — Step 6',
    description: 'For onboarding and step forms',
    categories: ['dashboards', 'wizard', 'forms'],
    src: '/img/screens/wizard-6.png',
    srcDark: '/img/screens/wizard-6-dark.png',
    order: 35,
  },
})

const { data: project } = useMultiStepForm<Project, ProjectStepData>()
useHead({
  title: 'Project tools',
})

const tools: Tool[] = [
  {
    name: 'Illustrator',
    description: 'Design Software',
    logo: '/img/logos/tools/illustrator.svg',
  },
  {
    name: 'Photoshop',
    description: 'Design Software',
    logo: '/img/logos/tools/photoshop.svg',
  },
  {
    name: 'Adobe XD',
    description: 'Design Software',
    logo: '/img/logos/tools/xd.svg',
  },
  {
    name: 'Figma',
    description: 'Design Software',
    logo: '/img/logos/tools/xd.svg',
  },
  {
    name: 'Invision',
    description: 'Design Software',
    logo: '/img/logos/tools/invision.svg',
  },
  {
    name: 'Jira',
    description: 'Issue Tracker',
    logo: '/img/logos/tools/jira.svg',
  },
  {
    name: 'Taiga',
    description: 'Scrumboard',
    logo: '/img/logos/tools/taiga.svg',
  },
  {
    name: 'Slack',
    description: 'Messaging App',
    logo: '/img/logos/tools/slack.svg',
  },
  {
    name: 'Asana',
    description: 'Task Manager',
    logo: '/img/logos/tools/asana.svg',
  },
  {
    name: 'Teamwork',
    description: 'Collaborative App',
    logo: '/img/logos/tools/teamwork.svg',
  },
  {
    name: 'GitHub',
    description: 'Code Repository',
    logo: '/img/logos/tools/github.svg',
  },
  {
    name: 'Gitlab',
    description: 'Code Repository',
    logo: '/img/logos/tools/gitlab.svg',
  },
]
</script>

<template>
  <div>
    <DemoWizardStepTitle />

    <div class="mx-auto grid max-w-4xl gap-4 px-4 sm:grid-cols-3">
      <!-- Tools -->
      <div v-for="tool in tools" :key="tool.name" class="relative">
        <BaseCheckboxHeadless
          v-model="project.tools"
          :value="tool"
          :name="tool.name"
        >
          <BaseCard
            shape="curved"
            class="peer-checked:border-primary-500 peer-checked:shadow-muted-300/30 dark:peer-checked:shadow-muted-900/30 p-4 peer-checked:shadow-xl"
          >
            <div class="flex items-center gap-3">
              <img :src="tool.logo" class="h-8 w-8" />
              <div>
                <div
                  class="text-muted-800 dark:text-muted-100 text-sm font-medium"
                >
                  {{ tool.name }}
                </div>
                <div class="text-muted-400 text-xs">{{ tool.description }}</div>
              </div>
            </div>
          </BaseCard>
        </BaseCheckboxHeadless>
      </div>
    </div>
  </div>
</template>
