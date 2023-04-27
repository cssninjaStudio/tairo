<script setup lang="ts">
import type { Project, ProjectStepData } from '../../types'

definePageMeta({
  title: 'Wizard — Step 2',
  preview: {
    title: 'Wizard — Step 2',
    description: 'For onboarding and step forms',
    categories: ['dashboards', 'wizard', 'forms'],
    src: '/img/screens/wizard-2.png',
    srcDark: '/img/screens/wizard-2-dark.png',
    order: 31,
  },
})

const { data: project } = useMultiStepForm<Project, ProjectStepData>()

useHead({
  title: 'Project info',
})

const avatarPreview = useNinjaFilePreview(() => project.value.avatar)

// BaseInputFileHeadless gives us a listfile input, but we need to
// extract the file from the list and set it to the form
const inputFile = ref<FileList | null>(null)
watch(inputFile, (value) => {
  const file = value?.item(0) || null
  project.value.avatar = file
})
</script>

<template>
  <div>
    <DemoWizardStepTitle />

    <div class="mx-auto flex w-full max-w-5xl flex-col px-4">
      <div class="flex items-center justify-center">
        <BaseFullscreenDropfile
          icon="ph:image-duotone"
          :filter-file-dropped="(file) => file.type.startsWith('image')"
          @drop="
            (value) => {
              inputFile = value
            }
          "
        />
        <BaseInputFileHeadless
          accept="image/*"
          v-model="inputFile"
          v-slot="{ open, remove, files }"
        >
          <div class="relative h-20 w-20">
            <img
              v-if="avatarPreview"
              :src="avatarPreview"
              alt="Upload preview"
              class="bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center"
            />
            <img
              v-else
              src="/img/avatars/placeholder-file.png"
              alt="Upload preview"
              class="bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center"
            />
            <div
              v-if="files?.length && files.item(0)"
              class="absolute bottom-0 end-0 z-20"
            >
              <BaseButtonIcon
                condensed
                shape="full"
                @click="remove(files.item(0)!)"
                tooltip="Remove image"
              >
                <Icon name="lucide:x" class="h-4 w-4" />
              </BaseButtonIcon>
            </div>
            <div v-else class="absolute bottom-0 end-0 z-20">
              <div class="relative" tooltip="Upload image">
                <BaseButtonIcon condensed shape="full" @click="open">
                  <Icon name="lucide:plus" class="h-4 w-4" />
                </BaseButtonIcon>
              </div>
            </div>
          </div>
        </BaseInputFileHeadless>
      </div>

      <div class="my-4 text-center font-sans">
        <p class="text-muted-500 text-sm">Upload a project logo</p>
        <p class="text-muted-400 text-xs">File size cannot exceed 2MB</p>
      </div>
      <div class="mx-auto flex w-full max-w-sm flex-col gap-3">
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
          autogrow
          class="max-h-52"
        />
      </div>
    </div>
  </div>
</template>
