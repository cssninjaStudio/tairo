<script setup lang="ts">
import type { Invite, StepData } from '../../../types'

definePageMeta({
  preview: {
    title: 'Invite - Step 1',
    description: 'For inviting people',
    categories: ['layouts', 'wizards', 'forms'],
    src: '/img/screens/layouts-invite.png',
    srcDark: '/img/screens/layouts-invite-dark.png',
    order: 37,
    new: true,
  },
})
useHead({
  title: 'Email invite',
})

const {
  data: request,
  currentStepId,
  loading,
  errors,
  getPrevStep,
  steps,
  checkPreviousSteps,
} = useMultiStepForm<Invite, StepData>()

onBeforeMount(checkPreviousSteps)
</script>

<template>
  <div class="w-full">
    <div class="mb-8 space-y-2">
      <BaseHeading
        as="h2"
        size="2xl"
        weight="medium"
        class="md:!3xl text-muted-800 dark:text-white"
      >
        {{ steps[currentStepId].meta.title }}
      </BaseHeading>
      <BaseParagraph
        size="sm"
        class="text-muted-500 dark:text-muted-400 max-w-sm"
      >
        {{ steps[currentStepId].meta.subtitle }}
      </BaseParagraph>
    </div>

    <div class="w-full max-w-md">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 sm:col-span-6">
          <BaseInput
            v-model="request.firstName"
            v-focus
            :error="errors.fields.firstName"
            label="First name"
            placeholder="Ex: John"
          />
        </div>
        <div class="col-span-12 sm:col-span-6">
          <BaseInput
            v-model="request.lastName"
            :error="errors.fields.lastName"
            label="Last name"
            placeholder="Ex: Doe"
          />
        </div>
        <div class="col-span-12">
          <BaseInput
            v-model="request.email"
            :error="errors.fields.email"
            label="Email address"
            placeholder="Ex: johndoe@gmail.com"
          />
        </div>
      </div>

      <div class="mt-6 flex gap-4">
        <BaseButton
          v-if="currentStepId > 0"
          :to="loading ? undefined : getPrevStep()?.to"
          :disabled="!getPrevStep()"
          size="lg"
          class="w-full"
        >
          <span>Previous</span>
        </BaseButton>
        <BaseButton
          type="submit"
          color="primary"
          size="lg"
          class="w-full"
        >
          <span>Continue</span>
        </BaseButton>
      </div>
    </div>
  </div>
</template>
