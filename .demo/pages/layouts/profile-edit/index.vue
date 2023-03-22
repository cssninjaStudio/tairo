<script setup lang="ts">
definePageMeta({
  title: 'Edit Profile',
})

const { data, pending, error, refresh } = await useFetch('/api/profile/')

const previewImage = ref()
const currentPhoto = ref('/img/avatars/2.svg')
const fileInput = ref<HTMLInputElement>()

const pickFile = () => {
  let file = fileInput.value?.files
  if (file && file[0]) {
    let reader = new FileReader()
    reader.onload = (e) => {
      previewImage.value = e.target?.result
    }
    reader.readAsDataURL(file[0])
  }
}

const removeFile = () => {
  previewImage.value = null
}

const experience = ['0-2 years', '2-5 years', '5-10 years', '10+ years']
const answers = ['Yes', 'No']

const selectedExperience = ref()
const firstJobQuestion = ref()
const flexibleQuestion = ref()
const remoteQuestion = ref()
</script>

<template>
  <form class="w-full pb-16">
    <BaseCard>
      <div class="flex items-center justify-between p-4">
        <div>
          <BaseHeading
            tag="h2"
            size="sm"
            weight="medium"
            lead="normal"
            class="uppercase tracking-wider"
          >
            General info
          </BaseHeading>
          <BaseText size="xs" class="text-muted-400">
            Edit your account's general information
          </BaseText>
        </div>
        <div class="flex items-center gap-2">
          <BaseButton class="w-24" to="/layouts/profile">Cancel</BaseButton>
          <BaseButton color="primary" class="w-24">Save</BaseButton>
        </div>
      </div>
      <div class="p-4">
        <div class="max-w-lg mx-auto py-8 space-y-12">
          <TairoFormGroup
            label="Profile picture"
            sublabel="This is how others will recognize you"
          >
            <div class="relative">
              <div class="relative h-24 w-24 mx-auto">
                <img
                  v-if="previewImage"
                  :src="previewImage"
                  alt="Upload preview"
                  class="h-24 w-24 rounded-full object-cover object-center bg-muted-200 dark:bg-muted-700/60"
                />
                <img
                  v-else
                  :src="currentPhoto"
                  alt="Upload preview"
                  class="h-24 w-24 rounded-full object-cover object-center bg-muted-200 dark:bg-muted-700/60"
                />
                <div v-if="previewImage" class="absolute bottom-0 right-0 z-20">
                  <BaseButtonIcon
                    condensed
                    shape="full"
                    @click="removeFile"
                    tooltip="Remove image"
                  >
                    <Icon name="lucide:x" class="w-4 h-4" />
                  </BaseButtonIcon>
                </div>
                <div v-else class="absolute bottom-0 right-0 z-20">
                  <div class="relative" tooltip="Upload image">
                    <BaseButtonIcon condensed shape="full">
                      <Icon name="lucide:plus" class="w-4 h-4" />
                    </BaseButtonIcon>
                    <input
                      ref="fileInput"
                      type="file"
                      @input="pickFile"
                      accept="image/*"
                      class="absolute top-0 left-0 w-full h-full opacity-0 z-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TairoFormGroup>

          <TairoFormGroup
            label="Profile Info"
            sublabel="Others diserve to know you more"
          >
            <div class="grid grid-cols-12 gap-4">
              <div class="col-span-12 sm:col-span-6">
                <BaseInput
                  type="text"
                  icon="ph:user-duotone"
                  placeholder="First name"
                />
              </div>
              <div class="col-span-12 sm:col-span-6">
                <BaseInput
                  type="text"
                  icon="ph:user-duotone"
                  placeholder="Last name"
                />
              </div>
              <div class="col-span-12">
                <BaseInput
                  type="text"
                  icon="ph:suitcase-duotone"
                  placeholder="Job title"
                />
              </div>
              <div class="col-span-12">
                <BaseInput
                  type="text"
                  icon="ph:map-pin-duotone"
                  placeholder="Location"
                />
              </div>
              <div class="col-span-12">
                <BaseTextarea rows="4" placeholder="About you / Short bio..." />
              </div>
            </div>
          </TairoFormGroup>

          <TairoFormGroup
            label="Professional Info"
            sublabel="This can help you to win some opportunities"
          >
            <div class="grid grid-cols-12 gap-4">
              <div class="col-span-12 sm:col-span-6">
                <BaseListbox
                  v-model="selectedExperience"
                  :items="experience"
                  placeholder="Experience"
                  shape="rounded"
                />
              </div>
              <div class="col-span-12 sm:col-span-6">
                <BaseListbox
                  v-model="firstJobQuestion"
                  :items="answers"
                  placeholder="Is this your first job?"
                  shape="rounded"
                />
              </div>
              <div class="col-span-12 sm:col-span-6">
                <BaseListbox
                  v-model="flexibleQuestion"
                  :items="answers"
                  placeholder="Are you flexible?"
                  shape="rounded"
                />
              </div>
              <div class="col-span-12 sm:col-span-6">
                <BaseListbox
                  v-model="remoteQuestion"
                  :items="answers"
                  placeholder="Do you work remotely?"
                  shape="rounded"
                />
              </div>
            </div>
          </TairoFormGroup>

          <TairoFormGroup
            label="Social Profiles"
            sublabel="This can help others finding you on social media"
          >
            <div class="grid grid-cols-12 gap-4">
              <div class="col-span-12 sm:col-span-6">
                <BaseInput
                  type="text"
                  icon="fa6-brands:facebook-f"
                  placeholder="Facebook URL"
                />
              </div>
              <div class="col-span-12 sm:col-span-6">
                <BaseInput
                  type="text"
                  icon="fa6-brands:twitter"
                  placeholder="Twitter URL"
                />
              </div>
              <div class="col-span-12 sm:col-span-6">
                <BaseInput
                  type="text"
                  icon="fa6-brands:dribbble"
                  placeholder="Dribbble URL"
                />
              </div>
              <div class="col-span-12 sm:col-span-6">
                <BaseInput
                  type="text"
                  icon="fa6-brands:instagram"
                  placeholder="Instagram URL"
                />
              </div>
              <div class="col-span-12 sm:col-span-6">
                <BaseInput
                  type="text"
                  icon="fa6-brands:github"
                  placeholder="Github URL"
                />
              </div>
              <div class="col-span-12 sm:col-span-6">
                <BaseInput
                  type="text"
                  icon="fa6-brands:gitlab"
                  placeholder="Gitlab URL"
                />
              </div>
            </div>
          </TairoFormGroup>
        </div>
      </div>
    </BaseCard>
    <TairoFormSave />
  </form>
</template>
