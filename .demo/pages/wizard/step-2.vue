<script setup lang="ts">
import type { Project, ProjectStepData } from '../../types'

const { project } = useMultiStepForm<Project, ProjectStepData>()

useHead({
  title: 'Project info',
})
</script>

<template>
  <div>
    <WizardStepTitle />

    <div class="flex flex-col w-full max-w-5xl mx-auto px-4">
      <UploadAvatar />
      <div class="font-sans text-center my-4">
        <p class="text-sm text-muted-500">Upload a project logo</p>
        <p class="text-xs text-muted-400">File size cannot exceed 2MB</p>
      </div>
      <div class="flex flex-col gap-3 w-full max-w-sm mx-auto">
        <BaseInput
          v-model="project.name"
          shape="curved"
          placeholder="Project name"
          :classes="{
            input: 'h-12 text-base text-center',
          }"
        />
        <BaseTextarea
          v-model="project.description"
          shape="curved"
          placeholder="Describe your project..."
        />
      </div>
    </div>
  </div>
</template>
