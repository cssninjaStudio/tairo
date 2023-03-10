<script setup lang="ts">
useHead({
  title: 'Project files',
})

const toggled = ref(false)
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
          <NuxtImg
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
      <div v-else class="relative max-w-5xl mx-auto">
        <UploadFiles />
      </div>
    </div>
  </div>
</template>
