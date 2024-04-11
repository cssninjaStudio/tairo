<script setup lang="ts">
import type { Invite, StepData } from '../../types'

definePageMeta({
  layout: 'empty',
})
useHead({
  titleTemplate: title => `${title} | Invite - Step ${currentStepId.value + 1}`,
})

const initialState = ref<Invite>({
  firstName: '',
  lastName: '',
  email: '',
  role: null,
})

const toaster = useToaster()

const { handleSubmit, currentStepId, goToStep, progress, complete, steps } = provideMultiStepForm({
  initialState,
  steps: [
    {
      to: '/layouts/invite',
      meta: {
        name: 'Email invite',
        title: 'Who do you want to invite?',
        subtitle:
          'Enter the name of the person that you want to invite to your organization',
      },
      async validate({ data, setFieldError, resetFieldError }) {
        resetFieldError(['email', 'firstName', 'lastName'])
        if (!data.value.email) setFieldError('email', 'Enter user email address')
        if (!data.value.firstName) setFieldError('firstName', 'Enter user first name')
        if (!data.value.lastName) setFieldError('lastName', 'Enter user las name')
      },
    },
    {
      to: '/layouts/invite/permissions',
      meta: {
        name: 'Permissions',
        title: 'Assign them a role',
        subtitle:
          'A team member\'s role determines what they can see and do on your Tairo organization account',
      },
      async validate({ data, setFieldError, resetFieldError }) {
        resetFieldError(['role'])
        if (!data.value.role) setFieldError('role', 'You must choose a role')
      },
    },
    {
      to: '/layouts/invite/review',
      meta: {
        name: 'Review',
        title: 'One last look',
        subtitle:
          'Make sure everything in the process is correct before sending the invite',
      },
    },
  ],
  onSubmit: async (data, ctx) => {
    // Simulate async request
    await new Promise(resolve => setTimeout(resolve, 4000))

    toaster.clearAll()
    toaster.show({
      title: 'Success',
      message: `Invitation has been sent!`,
      color: 'success',
      icon: 'ph:check',
      closable: true,
    })
  },
  onError: (error) => {
    toaster.clearAll()
    toaster.show({
      title: 'Error',
      message: error.message,
      color: 'danger',
      icon: 'lucide:alert-triangle',
      closable: true,
    })
  },
})
</script>

<template>
  <div class="dark:bg-muted-900 min-h-screen bg-white">
    <DemoNavigationTop title="Invite" close-to="/layouts/members" />

    <div class="w-full pb-20 pt-32">
      <div class="mx-auto w-full max-w-6xl px-4">
        <div class="grid w-full gap-10 md:grid-cols-12">
          <!--Stepper column-->
          <div :class="complete ? 'hidden' : 'md:col-span-3 lg:col-span-4'">
            <!--Stepper-->
            <div
              class="xs:w-full xs:max-w-xs xs:mx-auto flex flex-col gap-4 md:flex-row"
            >
              <div
                class="xs:max-w-xs xs:mx-auto relative flex justify-between gap-7 md:flex-col"
              >
                <!--Progress-->
                <div
                  class="xs:top-1.5 xs:inset-x-0 bg-muted-200 dark:bg-muted-700 absolute start-2 top-2 z-0 mx-auto h-1 w-[calc(100%_-_1rem)] md:h-[calc(100%_-_1rem)] md:w-1 md:-translate-x-1/2"
                />
                <!--Vertical progress-->
                <div
                  class="bg-primary-500 absolute start-2 top-0 z-10 mx-auto hidden w-0.5 -translate-x-1/2 rounded-full transition-all duration-300 md:block"
                  :style="`height: ${progress}%;`"
                />
                <!--Horizontal progress (mobile)-->
                <div
                  class="bg-primary-500 absolute start-1.5 top-[7px] z-10 h-0.5 rounded-full transition-all duration-300 md:hidden"
                  :style="`width: calc(${progress}% - 0.5rem);`"
                />
                <!--Nodes-->
                <div
                  v-for="(step, index) in steps"
                  :key="index"
                  class="bg-muted-200 dark:bg-muted-700 relative z-20 flex size-4 items-center justify-center rounded-full"
                >
                  <span
                    class="bg-primary-500 block size-2 rounded-full transition-transform duration-300"
                    :class="currentStepId >= index ? 'scale-1' : 'scale-0'"
                  />
                </div>
              </div>
              <div
                class="relative flex justify-center gap-7 md:flex-col md:justify-between"
              >
                <a
                  v-for="(step, index) in steps"
                  :key="index"
                  class="h-4 leading-none"
                  role="button"
                  :tabindex="0"
                  :class="[currentStepId === index ? '' : 'xs:hidden', currentStepId > step.id ? 'nui-link' : 'cursor-default']"
                  @click.prevent="currentStepId > step.id ? goToStep(step) : () => {}"
                >
                  <span
                    class="font-heading block text-xs"
                    :class="
                      currentStepId === index
                        ? 'text-muted-800 dark:text-muted-100'
                        : 'text-muted-400 dark:text-muted-500'
                    "
                  >
                    {{ step.meta.name }}
                  </span>
                </a>
              </div>
            </div>
          </div>

          <!--Steps column-->
          <div
            :class="complete ? 'col-span-12' : 'md:col-span-9 lg:col-span-8'"
          >
            <form
              action=""
              method="POST"
              novalidate
              @submit.prevent="handleSubmit"
            >
              <NuxtPage />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
