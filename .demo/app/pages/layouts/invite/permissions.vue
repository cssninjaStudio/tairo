<script setup lang="ts">
import type { Invite, StepData } from '~/types'

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
  <div class="w-full dark:[--color-input-default-bg:var(--color-muted-950)]">
    <div class="mb-8 space-y-2">
      <BaseHeading
        as="h2"
        size="2xl"
        weight="medium"
        class="md:3xl! text-muted-900 dark:text-white"
      >
        {{ steps[currentStepId]?.meta.title }}
      </BaseHeading>
      <BaseParagraph
        size="sm"
        class="text-muted-500 dark:text-muted-400 max-w-sm"
      >
        {{ steps[currentStepId]?.meta.subtitle }}
      </BaseParagraph>
    </div>

    <div class="w-full max-w-md">
      <RadioGroupRoot v-model="request.role" class="w-full space-y-4">
        <!-- Radio groups -->
        <RadioGroupItem
          value="admin"
          class="focus-visible:nui-focus rounded-lg relative group"
        >
          <div
            class="bg-muted-100 text-muted-100 dark:bg-muted-900 dark:text-muted-900 absolute start-[1.35rem] top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full"
          >
            <RadioGroupIndicator
              class="size-3 starting:scale-0 transition-discrete rounded-full bg-primary-500 transition-all duration-300"
            />
          </div>
          <div
            class="dark:bg-muted-950 border-muted-200 dark:border-muted-800 group-data-[state=checked]:shadow-muted-400/10 dark:group-data-[state=checked]:shadow-muted-800/10 flex cursor-pointer items-center rounded-lg border bg-white px-6 py-4 transition-shadow duration-300 group-data-[state=checked]:shadow-xl"
          >
            <div
              class="border-muted-200 flex size-5 items-center justify-center rounded-full border shrink-0"
            />
            <div class="ms-6 flex flex-col text-start">
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
        </RadioGroupItem>
        <RadioGroupItem
          value="bookkeeper"
          class="focus-visible:nui-focus rounded-lg relative group"
        >
          <div
            class="bg-muted-100 text-muted-100 dark:bg-muted-900 dark:text-muted-900 absolute start-[1.35rem] top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full"
          >
            <RadioGroupIndicator
              class="size-3 starting:scale-0 transition-discrete rounded-full bg-primary-500 transition-all duration-300"
            />
          </div>
          <div
            class="dark:bg-muted-950 border-muted-200 dark:border-muted-800 group-data-[state=checked]:shadow-muted-400/10 dark:group-data-[state=checked]:shadow-muted-800/10 flex cursor-pointer items-center rounded-lg border bg-white px-6 py-4 transition-shadow duration-300 group-data-[state=checked]:shadow-xl"
          >
            <div
              class="border-muted-200 flex size-5 items-center justify-center rounded-full border shrink-0"
            />
            <div class="ms-6 flex flex-col text-start">
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
        </RadioGroupItem>
        <RadioGroupItem
          value="cardonly"
          class="focus-visible:nui-focus rounded-lg relative group"
        >
          <div
            class="bg-muted-100 text-muted-100 dark:bg-muted-900 dark:text-muted-900 absolute start-[1.35rem] top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full"
          >
            <RadioGroupIndicator
              class="size-3 starting:scale-0 transition-discrete rounded-full bg-primary-500 transition-all duration-300"
            />
          </div>
          <div
            class="dark:bg-muted-950 border-muted-200 dark:border-muted-800 group-data-[state=checked]:shadow-muted-400/10 dark:group-data-[state=checked]:shadow-muted-800/10 flex cursor-pointer items-center rounded-lg border bg-white px-6 py-4 transition-shadow duration-300 group-data-[state=checked]:shadow-xl"
          >
            <div
              class="border-muted-200 flex size-5 items-center justify-center rounded-full border"
            />
            <div class="ms-6 flex flex-col text-start">
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
        </RadioGroupItem>
        <RadioGroupItem
          value="custom"
          class="focus-visible:nui-focus rounded-lg relative group"
        >
          <div
            class="bg-muted-100 text-muted-100 dark:bg-muted-900 dark:text-muted-900 absolute start-[1.35rem] top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full"
          >
            <RadioGroupIndicator
              class="size-3 starting:scale-0 transition-discrete rounded-full bg-primary-500 transition-all duration-300"
            />
          </div>
          <div
            class="dark:bg-muted-950 border-muted-200 dark:border-muted-800 group-data-[state=checked]:shadow-muted-400/10 dark:group-data-[state=checked]:shadow-muted-800/10 group flex cursor-pointer items-center rounded-lg border bg-white px-6 py-4 transition-shadow duration-300 group-data-[state=checked]:shadow-xl"
          >
            <div
              class="border-muted-200 flex size-5 items-center justify-center rounded-full border"
            />
            <div class="ms-6 flex flex-col text-start">
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
        </RadioGroupItem>
        <div v-if="errors.fields.role" class="font-sans text-xs font-medium leading-none text-destructive-base dark:text-destructive-light">
          {{ errors.fields.role }}
        </div>
      </RadioGroupRoot>

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
          variant="primary"
          size="lg"
          class="w-full"
        >
          <span>Continue</span>
        </BaseButton>
      </div>
    </div>
  </div>
</template>
