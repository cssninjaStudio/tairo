<script setup lang="ts">
import type { Project, ProjectStepData } from '../../types'

definePageMeta({
  title: 'Wizard — Step 4',
  preview: {
    title: 'Wizard — Step 4',
    description: 'For onboarding and step forms',
    categories: ['dashboards', 'wizard', 'forms'],
    src: '/img/screens/wizard-4.png',
    srcDark: '/img/screens/wizard-4-dark.png',
    order: 33,
  },
})

const { data: project } = useMultiStepForm<Project, ProjectStepData>()

useHead({
  title: 'Project files',
})

const toggled = ref(Boolean(project.value.files?.length))
</script>

<template>
  <div>
    <DemoWizardStepTitle />

    <div class="px-4">
      <BasePlaceholderPage
        v-if="!toggled"
        title="Upload project files"
        subtitle="Add files to your project if you have them handy. Don't worry, you can also manage files later."
      >
        <template #image>
          <img
            src="/img/illustrations/wizard/upload.svg"
            class="mx-auto max-w-[210px] rounded-full"
            alt="Upload files"
          />
        </template>
        <div class="mt-2 text-center">
          <button
            type="button"
            class="text-primary-500 font-sans underline underline-offset-4"
            @click="toggled = true"
          >
            Upload files
          </button>
        </div>
      </BasePlaceholderPage>
      <div v-else class="relative mx-auto max-w-3xl">
        <BaseInputFileHeadless
          multiple
          v-model="project.files"
          v-slot="{ open, remove, preview, drop, files }"
        >
          <!-- Controls -->
          <div class="mb-4 flex items-center gap-2">
            <button
              type="button"
              class="nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
              tooltip="Select files"
              @click="open"
            >
              <Icon
                name="lucide:plus"
                class="absolute start-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2"
              />
              <span class="sr-only">Select files</span>
            </button>
            <button
              type="button"
              class="nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
              tooltip="Start Upload"
            >
              <Icon name="lucide:arrow-up" class="h-4 w-4" />

              <span class="sr-only">Start Upload</span>
            </button>
          </div>

          <div
            class=""
            @dragenter.stop.prevent
            @dragover.stop.prevent
            @drop="drop"
          >
            <div
              v-if="!files?.length"
              class="nui-focus border-muted-300 dark:border-muted-800 hover:border-muted-400 focus:border-muted-400 dark:hover:border-muted-700 dark:focus:border-muted-700 group cursor-pointer rounded-lg border-[3px] border-dashed p-8 transition-colors duration-300"
              tabindex="0"
              role="button"
              @click="open"
              @keydown.enter.prevent="open"
            >
              <div class="p-5 text-center">
                <Icon
                  name="mdi-light:cloud-upload"
                  class="text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 mb-2 h-12 w-12 transition-colors duration-300"
                />
                <h4 class="text-muted-400 font-sans text-base">
                  Drop files to upload
                </h4>
                <div>
                  <span
                    class="text-muted-400 font-sans text-xs font-semibold uppercase"
                  >
                    Or
                  </span>
                </div>
                <label
                  for="file"
                  class="text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 cursor-pointer font-sans text-base underline underline-offset-4 transition-colors duration-300"
                >
                  Select files
                </label>
              </div>
            </div>
            <ul v-else class="mt-6 space-y-2">
              <li v-for="file in files" :key="file.name">
                <div
                  class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative flex items-center justify-end gap-2 rounded-xl border bg-white p-3"
                >
                  <div class="flex items-center gap-2">
                    <div class="shrink-0">
                      <img
                        class="h-14 w-14 rounded-xl object-cover object-center"
                        v-if="file.type.startsWith('image')"
                        :src="preview(file).value"
                        alt="Image preview"
                      />
                      <img
                        v-else
                        class="h-14 w-14 rounded-xl object-cover object-center"
                        src="/img/avatars/placeholder-file.png"
                        alt="Image preview"
                      />
                    </div>
                    <div class="font-sans">
                      <span
                        class="text-muted-800 dark:text-muted-100 line-clamp-1 block text-sm"
                      >
                        {{ file.name }}
                      </span>
                      <span class="text-muted-400 block text-xs">
                        {{ formatFileSize(file.size) }}
                      </span>
                    </div>
                  </div>

                  <div
                    class="ms-auto w-32 px-4 transition-opacity duration-300"
                    :class="'opacity-100'"
                  >
                    <BaseProgress :value="0" size="xs" :color="'success'" />
                  </div>
                  <div class="flex gap-2">
                    <button
                      class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60"
                      disabled
                      type="button"
                      tooltip="Cancel"
                    >
                      <Icon name="lucide:slash" class="h-4 w-4" />
                      <span class="sr-only">Cancel</span>
                    </button>

                    <button
                      class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
                      type="button"
                      tooltip="Upload"
                    >
                      <Icon name="lucide:arrow-up" class="h-4 w-4" />
                      <span class="sr-only">Upload</span>
                    </button>
                    <button
                      class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
                      type="button"
                      tooltip="Remove"
                      @click.prevent="remove(file)"
                    >
                      <Icon name="lucide:x" class="h-4 w-4" />
                      <span class="sr-only">Remove</span>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </BaseInputFileHeadless>
      </div>
    </div>
  </div>
</template>
