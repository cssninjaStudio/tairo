<script setup lang="ts">
import type { Project, ProjectStepData } from '../../types'

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
            class="rounded-full max-w-[210px] mx-auto"
            alt="Upload files"
          />
        </template>
        <div class="text-center mt-2">
          <button
            type="button"
            class="font-sans underline underline-offset-4 text-primary-500"
            @click="toggled = true"
          >
            Upload files
          </button>
        </div>
      </BasePlaceholderPage>
      <div v-else class="relative max-w-3xl mx-auto">
        <BaseInputFileHeadless
          multiple
          v-model="project.files"
          v-slot="{ open, remove, preview, drop, files }"
        >
          <!-- Controls -->
          <div class="flex items-center gap-2 mb-4">
            <button
              type="button"
              class="nui-focus relative h-10 w-10 flex items-center justify-center border border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 bg-white dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 rounded-full cursor-pointer transition-colors duration-300"
              tooltip="Select files"
              @click="open"
            >
              <Icon
                name="lucide:plus"
                class="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4"
              />
              <span class="sr-only">Select files</span>
            </button>
            <button
              type="button"
              class="nui-focus relative h-10 w-10 flex items-center justify-center border border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 bg-white dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 rounded-full cursor-pointer transition-colors duration-300"
              tooltip="Start Upload"
            >
              <Icon name="lucide:arrow-up" class="w-4 h-4" />

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
              class="nui-focus group cursor-pointer p-8 border-[3px] rounded-lg border-dashed border-muted-300 dark:border-muted-800 hover:border-muted-400 focus:border-muted-400 dark:hover:border-muted-700 dark:focus:border-muted-700 transition-colors duration-300"
              tabindex="0"
              role="button"
              @click="open"
              @keydown.enter.prevent="open"
            >
              <div class="text-center p-5">
                <Icon
                  name="mdi-light:cloud-upload"
                  class="h-12 w-12 mb-2 text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 transition-colors duration-300"
                />
                <h4 class="font-sans text-base text-muted-400">
                  Drop files to upload
                </h4>
                <div>
                  <span
                    class="font-sans font-semibold text-xs uppercase text-muted-400"
                  >
                    Or
                  </span>
                </div>
                <label
                  for="file"
                  class="font-sans text-base underline underline-offset-4 text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 transition-colors duration-300 cursor-pointer"
                >
                  Select files
                </label>
              </div>
            </div>
            <ul v-else class="mt-6 space-y-2">
              <li v-for="file in files" :key="file.name">
                <div
                  class="relative flex justify-end items-center gap-2 p-3 rounded-xl border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800"
                >
                  <div class="flex items-center gap-2">
                    <div class="shrink-0">
                      <img
                        class="w-14 h-14 object-cover object-center rounded-xl"
                        v-if="file.type.startsWith('image')"
                        :src="preview(file).value"
                        alt="Image preview"
                      />
                      <img
                        v-else
                        class="w-14 h-14 object-cover object-center rounded-xl"
                        src="/img/avatars/placeholder-file.png"
                        alt="Image preview"
                      />
                    </div>
                    <div class="font-sans">
                      <span
                        class="block text-sm line-clamp-1 text-muted-800 dark:text-muted-100"
                      >
                        {{ file.name }}
                      </span>
                      <span class="block text-xs text-muted-400">
                        {{ formatFileSize(file.size) }}
                      </span>
                    </div>
                  </div>

                  <div
                    class="ms-auto px-4 w-32 transition-opacity duration-300"
                    :class="'opacity-100'"
                  >
                    <BaseProgress :value="0" size="xs" :color="'success'" />
                  </div>
                  <div class="flex gap-2">
                    <button
                      class="relative h-8 w-8 flex items-center justify-center border border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 bg-white dark:bg-muted-900 disabled:opacity-60 disabled:cursor-not-allowed dark:hover:border-primary-500 dark:hover:text-primary-600 rounded-full cursor-pointer transition-colors duration-300"
                      disabled
                      type="button"
                      tooltip="Cancel"
                    >
                      <Icon name="lucide:slash" class="w-4 h-4" />
                      <span class="sr-only">Cancel</span>
                    </button>

                    <button
                      class="relative h-8 w-8 flex items-center justify-center border border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 bg-white dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 rounded-full cursor-pointer transition-colors duration-300"
                      type="button"
                      tooltip="Upload"
                    >
                      <Icon name="lucide:arrow-up" class="w-4 h-4" />
                      <span class="sr-only">Upload</span>
                    </button>
                    <button
                      class="relative h-8 w-8 flex items-center justify-center border border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 bg-white dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 rounded-full cursor-pointer transition-colors duration-300"
                      type="button"
                      tooltip="Remove"
                      @click.prevent="remove(file)"
                    >
                      <Icon name="lucide:x" class="w-4 h-4" />
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
