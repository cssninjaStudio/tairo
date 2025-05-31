<script setup lang="ts">
import type { Project, ProjectStepData } from '~/types'

definePageMeta({
  title: 'Wizard — Step 2',
  preview: {
    title: 'Wizard — Step 2',
    description: 'For onboarding and step forms',
    categories: ['dashboards', 'wizards', 'forms'],
    src: '/img/screens/wizard-2.png',
    srcDark: '/img/screens/wizard-2-dark.png',
    order: 31,
  },
})
useHead({
  title: 'Project info',
})

const { data: project, errors, checkPreviousSteps } = useMultiStepForm<Project, ProjectStepData>()

onBeforeMount(checkPreviousSteps)

const avatarPreview = useNuiFilePreview(() => project.value.avatar)

// TairoInputFileHeadless gives us a listfile input, but we need to
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
        <TairoFullscreenDropfile
          icon="solar:gallery-linear"
          :filter-file-dropped="(file) => file.type.startsWith('image')"
          @drop="
            (value) => {
              inputFile = value
            }
          "
        />
        <TairoInputFileHeadless
          v-slot="{ open, remove, files }"
          v-model="inputFile"
          accept="image/*"
        >
          <div class="relative size-20">
            <img
              v-if="avatarPreview"
              :src="avatarPreview"
              alt="Upload preview"
              class="bg-muted-200 dark:bg-muted-700/60 size-20 rounded-full object-cover object-center"
            >
            <img
              v-else
              src="/img/avatars/placeholder-file.png"
              alt="Upload preview"
              class="bg-muted-200 dark:bg-muted-700/60 size-20 rounded-full object-cover object-center"
            >
            <div
              v-if="files?.length && files.item(0)"
              class="absolute bottom-0 end-0 z-20"
            >
              <BaseTooltip content="Remove image">
                <BaseButton
                  size="icon-sm"
                  rounded="full"
                  @click="remove(files.item(0)!)"
                >
                  <Icon name="lucide:x" class="size-4" />
                </BaseButton>
              </BaseTooltip>
            </div>
            <div v-else class="absolute bottom-0 end-0 z-20">
              <div class="relative" tooltip="Upload image">
                <BaseButton
                  size="icon-sm"
                  rounded="full"
                  @click="open"
                >
                  <Icon name="lucide:plus" class="size-4" />
                </BaseButton>
              </div>
            </div>
          </div>
        </TairoInputFileHeadless>
        <div v-if="errors.fields.avatar" class="mt-2 text-sm text-destructive-500">
          {{ errors.fields.avatar }}
        </div>
      </div>

      <div class="my-4 text-center font-sans">
        <BaseParagraph size="sm" weight="medium" class="text-muted-900 dark:text-white">
          Upload a project logo
        </BaseParagraph>
        <BaseParagraph size="xs" class="text-muted-600 dark:text-muted-400">
          File size cannot exceed 2MB
        </BaseParagraph>
      </div>
      <div class="mx-auto flex w-full max-w-sm flex-col gap-3">
        <BaseField :error="errors.fields.name">
          <BaseInput
            v-model="project.name"
            rounded="lg"
            placeholder="Project name"
          />
        </BaseField>
        <BaseField :error="errors.fields.description">
          <BaseTextarea
            v-model="project.description"
            rounded="lg"
            placeholder="Describe your project..."
            autogrow
            class="max-h-52"
          />
        </BaseField>
      </div>
    </div>
  </div>
</template>
