<script setup lang="ts">
import type { Invite, StepData } from '../../../types'

definePageMeta({
  title: 'Invite - Step 3',
  layout: 'empty',
  preview: {
    title: 'Invite - Step 3',
    description: 'For iviting people',
    categories: ['layouts', 'wizards', 'forms'],
    src: '/img/screens/wizards-invite-3.png',
    srcDark: '/img/screens/wizards-invite-3-dark.png',
    order: 37,
  },
})

const {
  data: request,
  currentStep,
  loading,
  complete,
  getNextStep,
  getPrevStep,
  steps,
} = useStepperForm<Invite, StepData>()
useHead({
  title: 'Review',
})
</script>

<template>
  <div class="w-full">
    <div v-if="!complete">
      <div class="mb-8 space-y-2">
        <BaseHeading
          as="h2"
          size="2xl"
          weight="medium"
          class="md:!3xl text-muted-800 dark:text-white"
        >
          {{ steps[currentStep].meta.title }}
        </BaseHeading>
        <BaseParagraph
          size="sm"
          class="text-muted-500 dark:text-muted-400 max-w-sm"
        >
          {{ steps[currentStep].meta.subtitle }}
        </BaseParagraph>
      </div>

      <div class="w-full max-w-md">
        <div class="mb-6 w-full">
          <BaseCard
            rounded="md"
            class="p-8"
          >
            <div class="mb-6 flex items-center gap-3">
              <BaseAvatar
                :alt="request?.firstName"
                size="sm"
                rounded="none"
                mask="blob"
                :text="request?.firstName[0]"
                color="primary"
              />
              <div>
                <BaseHeading
                  v-if="request?.firstName && request?.lastName"
                  weight="medium"
                  size="md"
                  lead="none"
                  class="line-clamp-1"
                >
                  {{ request?.firstName }} {{ request?.lastName }}
                  <BaseTag
                    v-if="request.role"
                    rounded="lg"
                    class="capitalize"
                    size="sm"
                  >
                    {{ request?.role }}
                  </BaseTag>
                </BaseHeading>
                <BaseHeading
                  v-else
                  weight="medium"
                  size="md"
                  lead="none"
                  class="line-clamp-1"
                >
                  No name provided
                </BaseHeading>
                <BaseParagraph
                  v-if="request?.email"
                  size="xs"
                  class="text-muted-400 line-clamp-1"
                >
                  {{ request.email }}
                </BaseParagraph>
                <BaseParagraph
                  v-else
                  size="xs"
                  class="text-muted-400 line-clamp-1"
                >
                  No email provided yet
                </BaseParagraph>
              </div>
            </div>
            <div>
              <BaseParagraph size="sm" class="text-muted-500">
                {{ request?.firstName ? request?.firstName : 'This user' }}
                will be able to:
              </BaseParagraph>
              <div class="mt-6">
                <ul class="space-y-2">
                  <li class="flex gap-2">
                    <Icon
                      v-if="request?.role === 'admin'"
                      name="lucide:check"
                      class="text-success-500 relative top-1 size-4 shrink-0"
                    />
                    <Icon
                      v-else
                      name="lucide:x"
                      class="text-danger-500 relative top-1 size-4 shrink-0"
                    />
                    <BaseParagraph
                      size="sm"
                      class="text-muted-800 dark:text-muted-400"
                    >
                      Manage All bank accounts
                    </BaseParagraph>
                  </li>
                  <li class="flex gap-2">
                    <Icon
                      v-if="
                        request?.role === 'admin' || request?.role === 'custom'
                      "
                      name="lucide:check"
                      class="text-success-500 relative top-1 size-4 shrink-0"
                    />
                    <Icon
                      v-else
                      name="lucide:x"
                      class="text-danger-500 relative top-1 size-4 shrink-0"
                    />
                    <BaseParagraph
                      size="sm"
                      class="text-muted-800 dark:text-muted-400"
                    >
                      Send money
                    </BaseParagraph>
                  </li>
                  <li class="flex gap-2">
                    <Icon
                      v-if="
                        request?.role === 'admin' ||
                          request?.role === 'bookkeeper' ||
                          request?.role === 'custom'
                      "
                      name="lucide:check"
                      class="text-success-500 relative top-1 size-4 shrink-0"
                    />
                    <Icon
                      v-else
                      name="lucide:x"
                      class="text-danger-500 relative top-1 size-4 shrink-0"
                    />
                    <BaseParagraph
                      size="sm"
                      class="text-muted-800 dark:text-muted-400"
                    >
                      Add notes and attachments to transactions
                    </BaseParagraph>
                  </li>
                  <li class="flex gap-2">
                    <Icon
                      v-if="request?.role === 'admin'"
                      name="lucide:check"
                      class="text-success-500 relative top-1 size-4 shrink-0"
                    />
                    <Icon
                      v-else
                      name="lucide:x"
                      class="text-danger-500 relative top-1 size-4 shrink-0"
                    />
                    <BaseParagraph
                      size="sm"
                      class="text-muted-800 dark:text-muted-400"
                    >
                      Manage team invites and permissions
                    </BaseParagraph>
                  </li>
                  <li class="flex gap-2">
                    <Icon
                      v-if="request?.role === 'admin'"
                      name="lucide:check"
                      class="text-success-500 relative top-1 size-4 shrink-0"
                    />
                    <Icon
                      v-else
                      name="lucide:x"
                      class="text-danger-500 relative top-1 size-4 shrink-0"
                    />
                    <BaseParagraph
                      size="sm"
                      class="text-muted-800 dark:text-muted-400"
                    >
                      Manage company security settings
                    </BaseParagraph>
                  </li>
                  <li class="flex gap-2">
                    <Icon
                      v-if="
                        request?.role === 'admin' || request?.role === 'custom'
                      "
                      name="lucide:check"
                      class="text-success-500 relative top-1 size-4 shrink-0"
                    />
                    <Icon
                      v-else
                      name="lucide:x"
                      class="text-danger-500 relative top-1 size-4 shrink-0"
                    />
                    <BaseParagraph
                      size="sm"
                      class="text-muted-800 dark:text-muted-400"
                    >
                      Issue cards and manage limits
                    </BaseParagraph>
                  </li>
                  <li class="flex gap-2">
                    <Icon
                      v-if="
                        request?.role === 'admin' ||
                          request?.role === 'bookkeeper'
                      "
                      name="lucide:check"
                      class="text-success-500 relative top-1 size-4 shrink-0"
                    />
                    <Icon
                      v-else
                      name="lucide:x"
                      class="text-danger-500 relative top-1 size-4 shrink-0"
                    />
                    <BaseParagraph
                      size="sm"
                      class="text-muted-800 dark:text-muted-400"
                    >
                      Download statements
                    </BaseParagraph>
                  </li>
                  <li class="flex gap-2">
                    <Icon
                      v-if="
                        request?.role === 'admin' ||
                          request?.role === 'cardonly' ||
                          request?.role === 'custom'
                      "
                      name="lucide:check"
                      class="text-success-500 relative top-1 size-4 shrink-0"
                    />
                    <Icon
                      v-else
                      name="lucide:x"
                      class="text-danger-500 relative top-1 size-4 shrink-0"
                    />
                    <BaseParagraph
                      size="sm"
                      class="text-muted-800 dark:text-muted-400"
                    >
                      Get a card
                    </BaseParagraph>
                  </li>
                </ul>
              </div>
            </div>
          </BaseCard>
        </div>

        <!--Buttons-->
        <div class="flex gap-4">
          <BaseButton
            v-if="currentStep > 0"
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
            :loading="loading"
            :disabled="loading"
          >
            <span>Send Invite</span>
          </BaseButton>
        </div>
      </div>
    </div>

    <!--Success section-->
    <div v-else>
      <div class="mx-auto w-full max-w-md py-6 text-center">
        <div class="text-primary-500 mx-auto mb-4 size-14">
          <TairoCheckAnimated color="primary" size="lg" />
        </div>
        <BaseHeading
          as="h2"
          weight="medium"
          size="2xl"
          lead="tight"
          class="text-muted-800 mb-2 dark:text-white"
        >
          Invitation sent!
        </BaseHeading>
        <BaseParagraph class="text-muted-500 dark:text-muted-400 mb-5">
          Amazing! You've properly filled in your invitation. We'll let you know
          as soon as the person accepts it.
        </BaseParagraph>
        <div class="flex justify-center">
          <BaseButton
            to="/layouts/members"
            color="primary"
            rounded="md"
            class="w-48"
          >
            Back to Members
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
