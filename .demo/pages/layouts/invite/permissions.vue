<script setup lang="ts">
import type { Invite, StepData } from '../../../types'

definePageMeta({
  preview: {
    title: 'Invite - Step 2',
    description: 'For inviting people',
    categories: ['layouts', 'wizards', 'forms'],
    src: '/img/screens/layouts-invite-permissions.png',
    srcDark: '/img/screens/layouts-invite-permissions-dark.png',
    order: 37,
    new: true,
  },
})
useHead({
  title: 'Payment method',
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
      <div class="w-full space-y-4">
        <!--Radio groups-->
        <BaseRadioHeadless
          v-model="request.role"
          v-focus="request.role === null || request.role === 'admin'"
          value="admin"
          name="role_permissions"
          class="nui-focus !appearance-none rounded-lg !opacity-100"
        >
          <div
            class="peer-checked:child:scale-1 peer-not-checked:child:scale-0 bg-muted-100 text-muted-100 dark:bg-muted-900 dark:text-muted-900 peer-checked:text-primary-500 absolute start-[1.35rem] top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full"
          >
            <div
              class="size-3 rounded-full bg-current transition-colors duration-300"
            />
          </div>
          <div
            class="dark:bg-muted-800 border-muted-200 dark:border-muted-700 peer-checked:shadow-muted-400/10 dark:peer-checked:shadow-muted-800/10 group-focus-visible:tw-accessibility-static group flex cursor-pointer items-center rounded-lg border bg-white px-6 py-4 transition-shadow duration-300 peer-checked:shadow-xl"
          >
            <div
              class="border-muted-200 flex size-5 items-center justify-center rounded-full border"
            />
            <div class="ms-6 flex flex-col">
              <BaseText
                weight="medium"
                class="text-muted-800 dark:text-muted-100 block"
              >
                Admin
              </BaseText>
              <BaseParagraph
                size="xs"
                class="text-muted-500 dark:text-muted-400"
              >
                Has full account access to move money, view balances, add and
                remove team members, and manage security settings.
              </BaseParagraph>
            </div>
          </div>
        </BaseRadioHeadless>
        <BaseRadioHeadless
          v-model="request.role"
          v-focus="request.role === 'bookkeeper'"
          value="bookkeeper"
          name="role_permissions"
          class="nui-focus !appearance-none rounded-lg !opacity-100"
        >
          <div
            class="peer-checked:child:scale-1 peer-not-checked:child:scale-0 bg-muted-100 text-muted-100 dark:bg-muted-900 dark:text-muted-900 peer-checked:text-primary-500 absolute start-[1.35rem] top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full"
          >
            <div
              class="size-3 rounded-full bg-current transition-colors duration-300"
            />
          </div>
          <div
            class="dark:bg-muted-800 border-muted-200 dark:border-muted-700 peer-checked:shadow-muted-400/10 dark:peer-checked:shadow-muted-800/10 group-focus-visible:tw-accessibility-static group flex cursor-pointer items-center rounded-lg border bg-white px-6 py-4 transition-shadow duration-300 peer-checked:shadow-xl"
          >
            <div
              class="border-muted-200 flex size-5 items-center justify-center rounded-full border"
            />
            <div class="ms-6 flex flex-col">
              <BaseText
                weight="medium"
                class="text-muted-800 dark:text-muted-100 block"
              >
                Bookkeeper
              </BaseText>
              <BaseParagraph
                size="xs"
                class="text-muted-500 dark:text-muted-400"
              >
                Can view accounts, download statements, and add transaction
                notes. Cannot move money or use cards.
              </BaseParagraph>
            </div>
          </div>
        </BaseRadioHeadless>
        <BaseRadioHeadless
          v-model="request.role"
          v-focus="request.role === 'cardonly'"
          value="cardonly"
          name="role_permissions"
          class="nui-focus !appearance-none rounded-lg !opacity-100"
        >
          <div
            class="peer-checked:child:scale-1 peer-not-checked:child:scale-0 bg-muted-100 text-muted-100 dark:bg-muted-900 dark:text-muted-900 peer-checked:text-primary-500 absolute start-[1.35rem] top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full"
          >
            <div
              class="size-3 rounded-full bg-current transition-colors duration-300"
            />
          </div>
          <div
            class="dark:bg-muted-800 border-muted-200 dark:border-muted-700 peer-checked:shadow-muted-400/10 dark:peer-checked:shadow-muted-800/10 group-focus-visible:tw-accessibility-static group flex cursor-pointer items-center rounded-lg border bg-white px-6 py-4 transition-shadow duration-300 peer-checked:shadow-xl"
          >
            <div
              class="border-muted-200 flex size-5 items-center justify-center rounded-full border"
            />
            <div class="ms-6 flex flex-col">
              <BaseText
                weight="medium"
                class="text-muted-800 dark:text-muted-100 block"
              >
                Card Only
              </BaseText>
              <BaseParagraph
                size="xs"
                class="text-muted-500 dark:text-muted-400"
              >
                Receives a card with custom spending limits, and can only see
                their own transactions when logged in.
              </BaseParagraph>
            </div>
          </div>
        </BaseRadioHeadless>
        <BaseRadioHeadless
          v-model="request.role"
          v-focus="request.role === 'custom'"
          value="custom"
          name="role_permissions"
          class="nui-focus !appearance-none rounded-lg !opacity-100"
        >
          <div
            class="peer-checked:child:scale-1 peer-not-checked:child:scale-0 bg-muted-100 text-muted-100 dark:bg-muted-900 dark:text-muted-900 peer-checked:text-primary-500 absolute start-[1.35rem] top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full"
          >
            <div
              class="size-3 rounded-full bg-current transition-colors duration-300"
            />
          </div>
          <div
            class="dark:bg-muted-800 border-muted-200 dark:border-muted-700 peer-checked:shadow-muted-400/10 dark:peer-checked:shadow-muted-800/10 group-focus-visible:tw-accessibility-static group flex cursor-pointer items-center rounded-lg border bg-white px-6 py-4 transition-shadow duration-300 peer-checked:shadow-xl"
          >
            <div
              class="border-muted-200 flex size-5 items-center justify-center rounded-full border"
            />
            <div class="ms-6 flex flex-col">
              <BaseText
                weight="medium"
                class="text-muted-800 dark:text-muted-100 block"
              >
                Custom
              </BaseText>
              <BaseParagraph
                size="xs"
                class="text-muted-500 dark:text-muted-400"
              >
                Can view accounts and move money (with or without approval up to
                a limit that you set as an admin).
              </BaseParagraph>
            </div>
          </div>
        </BaseRadioHeadless>
        <BaseInputHelpText v-if="errors.fields.role" color="danger">
          {{ errors.fields.role }}
        </BaseInputHelpText>
      </div>

      <div class="mt-4 flex gap-4">
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
