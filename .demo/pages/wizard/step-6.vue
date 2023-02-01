<script setup lang="ts">
import type { Tool } from '@/types/index'
const { currentStep, project } = useWizardContext()
useHead({
  title: 'Project tools',
})

currentStep.value = 6

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
    <WizardStepTitle />

    <div class="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto px-4 pb-32">
      <!-- Tools -->
      <div v-for="tool in tools" :key="tool.name" class="relative">
        <BaseCheckboxCustom
          v-model="project.tools"
          :value="tool"
          :name="tool.name"
        >
          <BaseCard
            shape="curved"
            class="p-4 peer-checked:border-primary-500 peer-checked:shadow-xl peer-checked:shadow-muted-300/30 dark:peer-checked:shadow-muted-900/30"
          >
            <div class="flex items-center gap-3">
              <img :src="tool.logo" class="w-8 h-8" />
              <div>
                <div
                  class="text-sm font-medium text-muted-800 dark:text-muted-100"
                >
                  {{ tool.name }}
                </div>
                <div class="text-xs text-muted-400">{{ tool.description }}</div>
              </div>
            </div>
          </BaseCard>
        </BaseCheckboxCustom>
      </div>
    </div>
  </div>
</template>
