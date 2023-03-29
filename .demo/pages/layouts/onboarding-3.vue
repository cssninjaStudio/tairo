<script setup lang="ts">
definePageMeta({
  title: 'Onboarding',
  layout: 'empty',
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
  <div class="min-h-screen bg-muted-100 dark:bg-muted-900">
    <div
      class="h-16 w-full max-w-7xl mx-auto px-4 flex items-center justify-between"
    >
      <NuxtLink
        to="/"
        class="text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"
      >
        <TairoLogo class="w-10 h-10" />
      </NuxtLink>
      <div class="flex items-center gap-4">
        <BaseThemeToggle />
      </div>
    </div>
    <form
      action=""
      method="POST"
      @submit.prevent
      class="max-w-7xl mx-auto px-4"
    >
      <div>
        <div class="text-center pt-8">
          <BaseHeading tag="h2" size="3xl" weight="medium" class="mb-2">
            Choose a profile
          </BaseHeading>
          <BaseParagraph class="mb-8 text-muted-500 dark:text-muted-400">
            Pick one of the following roles based on your skills
          </BaseParagraph>
        </div>

        <div>
          <div class="w-full">
            <div class="w-full max-w-3xl mx-auto">
              <div class="w-full">
                <div class="grid grid-cols-3 sm:grid-cols-4 mb-8">
                  <div
                    v-for="role in roles"
                    :key="role.id"
                    class="relative p-4 flex items-center justify-center"
                  >
                    <BaseRadioHeadless
                      v-model="roleType"
                      :name="`role-${role.id}`"
                      :value="role.id"
                      class="w-full h-full"
                    >
                      <div
                        class="relative h-20 w-20 flex items-center justify-center mx-auto peer-checked:[&_.child]:opacity-100 grayscale peer-checked:grayscale-0 transition-all duration-200"
                      >
                        <div
                          class="child absolute top-0 right-0 w-6 h-6 rounded-full flex items-center justify-center bg-white dark:bg-muted-900 opacity-0 z-20"
                        >
                          <Icon
                            name="ph:check-circle-duotone"
                            class="w-6 h-6 text-primary-500"
                          />
                        </div>
                        <BaseAvatar
                          size="xl"
                          :src="role.avatar"
                          :badge-src="role.logo"
                          shape="full"
                          class="mx-auto group-focus-within:outline-dashed group-focus-within:outline-muted-300 dark:group-focus-within:outline-muted-600 group-focus-within:outline-offset-2"
                        />
                      </div>
                      <div class="text-center mt-3">
                        <BaseText
                          size="sm"
                          class="text-muted-500 dark:text-muted-400"
                          >{{ role.name }}</BaseText
                        >
                      </div>
                    </BaseRadioHeadless>
                  </div>
                </div>
                <div class="flex flex-col items-center mx-auto">
                  <BaseButton
                    to="/dashbaords"
                    type="button"
                    shape="curved"
                    class="w-48 !h-12"
                    color="primary"
                    >Choose Profile</BaseButton
                  >
                  <NuxtLink
                    to="#"
                    class="text-muted-400 hover:text-primary-500 font-medium text-xs underline-offset-4 hover:underline transition-colors duration-300 mt-4"
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
