<script setup lang="ts">
import type { Invite, StepData } from '../../types'

definePageMeta({
  title: 'Invite',
  layout: 'empty',
  preview: {
    title: 'Invite',
    description: 'For generic things',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-list-view-1.png',
    srcDark: '/img/screens/layouts-list-view-1-dark.png',
    order: 37,
  },
})

const initialState = ref<Invite>({
  firstName: '',
  lastName: '',
  email: '',
  role: 'admin',
})

const wizardSteps = [
  {
    to: '/layouts/invite',
    meta: {
      name: 'Email invite',
      title: 'Who do you want to invite?',
      subtitle:
        'Enter the name of the person that you want to invite to your organization',
    } satisfies StepData,
  },
  {
    to: '/layouts/invite/permissions',
    meta: {
      name: 'Permissions',
      title: 'Assign them a role',
      subtitle:
        'A team member\'s role determines what they can see and do on your Tairo organization account',
    } satisfies StepData,
  },
  {
    to: '/layouts/invite/review',
    meta: {
      name: 'Review',
      title: 'One last look',
      subtitle:
        'Make sure everything in the process is correct before sending the invite',
    } satisfies StepData,
  },
]

const toaster = useToaster()

const { handleSubmit, currentStep, progress, complete } = createStepperForm<
  Invite,
  StepData
>({
  initialState: initialState,
  steps: wizardSteps,
  onSubmit: async (state, ctx) => {
    console.log('multi-step-submit', state)

    if (state.firstName === '') {
      ctx.goToStep(ctx.getStep(0))
      throw new Error('Please enter a first name')
    }
    if (state.lastName === '') {
      ctx.goToStep(ctx.getStep(0))
      throw new Error('Please enter a first name')
    }
    if (state.email === '') {
      ctx.goToStep(ctx.getStep(0))
      throw new Error('Please enter an email address')
    }
    if (state.role === '') {
      ctx.goToStep(ctx.getStep(1))
      throw new Error('Please select a role')
    }

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
    console.log('multi-step-error', error)

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

useHead({
  titleTemplate: title => `Invite - Step ${currentStep.value + 1}`,
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
                  v-for="(step, index) in wizardSteps"
                  :key="index"
                  class="bg-muted-200 dark:bg-muted-700 relative z-20 flex size-4 items-center justify-center rounded-full"
                >
                  <span
                    class="bg-primary-500 block size-2 rounded-full transition-transform duration-300"
                    :class="currentStep >= index ? 'scale-1' : 'scale-0'"
                  />
                </div>
              </div>
              <div
                class="relative flex justify-center gap-7 md:flex-col md:justify-between"
              >
                <div
                  v-for="(step, index) in wizardSteps"
                  :key="index"
                  class="h-4 leading-none"
                  :class="currentStep === index ? '' : 'xs:hidden'"
                >
                  <span
                    class="font-heading block text-xs"
                    :class="
                      currentStep === index
                        ? 'text-muted-800 dark:text-muted-100'
                        : 'text-muted-400 dark:text-muted-500'
                    "
                  >
                    {{ step.meta.name }}
                  </span>
                </div>
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
              <RouterView />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
