<script setup lang="ts">
definePageMeta({
  title: 'Onboarding',
  layout: 'empty',
  preview: {
    title: 'Onboarding 3',
    description: 'For onboarding new users',
    categories: ['layouts', 'onboarding'],
    src: '/img/screens/layouts-onboarding-3.png',
    srcDark: '/img/screens/layouts-onboarding-3-dark.png',
    order: 95,
  },
})

const roleType = ref('free')

const roles = [
  {
    id: 0,
    name: 'Javascript',
    avatar: '/img/avatars/24.svg',
    logo: '/img/stacks/js.svg',
  },
  {
    id: 1,
    name: 'Vue',
    avatar: '/img/avatars/2.svg',
    logo: '/img/stacks/vuejs.svg',
  },
  {
    id: 2,
    name: 'React',
    avatar: '/img/avatars/3.svg',
    logo: '/img/stacks/reactjs.svg',
  },
  {
    id: 3,
    name: 'Angular',
    avatar: '/img/avatars/25.svg',
    logo: '/img/stacks/angular.svg',
  },
  {
    id: 4,
    name: 'Python',
    avatar: '/img/avatars/11.svg',
    logo: '/img/stacks/python.svg',
  },
  {
    id: 5,
    name: 'C#',
    avatar: '/img/avatars/16.svg',
    logo: '/img/stacks/csharp.svg',
  },
  {
    id: 6,
    name: 'Ruby',
    avatar: '/img/avatars/20.svg',
    logo: '/img/stacks/ruby.svg',
  },
  {
    id: 7,
    name: 'Android',
    avatar: '/img/avatars/21.svg',
    logo: '/img/stacks/android.svg',
  },
]
</script>

<template>
  <div class="bg-muted-100 dark:bg-muted-900 min-h-screen">
    <div
      class="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4"
    >
      <NuxtLink
        to="/"
        class="text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"
      >
        <TairoLogo class="h-10 w-10" />
      </NuxtLink>
      <div class="flex items-center gap-4">
        <BaseThemeToggle />
      </div>
    </div>
    <form
      action=""
      method="POST"
      @submit.prevent
      class="mx-auto max-w-7xl px-4"
    >
      <div>
        <div class="pt-8 text-center">
          <BaseHeading tag="h2" size="3xl" weight="medium" class="mb-2">
            Choose a profile
          </BaseHeading>
          <BaseParagraph class="text-muted-500 dark:text-muted-400 mb-8">
            Pick one of the following roles based on your skills
          </BaseParagraph>
        </div>

        <div>
          <div class="w-full">
            <div class="mx-auto w-full max-w-3xl">
              <div class="w-full">
                <div class="mb-8 grid grid-cols-3 sm:grid-cols-4">
                  <div
                    v-for="role in roles"
                    :key="role.id"
                    class="relative flex items-center justify-center p-4"
                  >
                    <BaseRadioHeadless
                      v-model="roleType"
                      :name="`role-${role.id}`"
                      :value="role.id"
                      class="h-full w-full"
                    >
                      <div
                        class="relative mx-auto flex h-20 w-20 items-center justify-center grayscale transition-all duration-200 peer-checked:grayscale-0 peer-checked:[&_.child]:opacity-100"
                      >
                        <div
                          class="child dark:bg-muted-900 absolute end-0 top-0 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-white opacity-0"
                        >
                          <Icon
                            name="ph:check-circle-duotone"
                            class="text-primary-500 h-6 w-6"
                          />
                        </div>
                        <BaseAvatar
                          size="xl"
                          :src="role.avatar"
                          :badge-src="role.logo"
                          shape="full"
                          class="group-focus-within:outline-muted-300 dark:group-focus-within:outline-muted-600 mx-auto group-focus-within:outline-dashed group-focus-within:outline-offset-2"
                        />
                      </div>
                      <div class="mt-3 text-center">
                        <BaseText
                          size="sm"
                          class="text-muted-500 dark:text-muted-400"
                          >{{ role.name }}</BaseText
                        >
                      </div>
                    </BaseRadioHeadless>
                  </div>
                </div>
                <div class="mx-auto flex flex-col items-center">
                  <BaseButton
                    to="/dashboards"
                    type="button"
                    shape="curved"
                    class="!h-12 w-48"
                    color="primary"
                    >Choose Profile</BaseButton
                  >
                  <NuxtLink
                    to="#"
                    class="text-muted-400 hover:text-primary-500 mt-4 text-xs font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                    >Learn More</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
