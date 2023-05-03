<script setup lang="ts">
definePageMeta({
  title: 'Edit Profile',
  preview: {
    title: 'Edit profile 1',
    description: 'For editing a user profile',
    categories: ['layouts', 'profile', 'forms'],
    src: '/img/screens/layouts-subpages-profile-edit-1.png',
    srcDark: '/img/screens/layouts-subpages-profile-edit-1-dark.png',
    order: 76,
  },
})

const { data, pending, error, refresh } = await useFetch('/api/profile')
</script>

<template>
  <div class="min-h-screen overflow-hidden">
    <div class="grid gap-8 sm:grid-cols-12">
      <div class="col-span-12 sm:col-span-4">
        <div class="flex w-full items-center gap-2">
          <BaseAvatar
            :src="data?.personalInfo.picture"
            :badge-src="data?.personalInfo.badge"
            size="md"
          />
          <div class="">
            <BaseHeading tag="h2" size="md" weight="medium" lead="none">
              {{ data?.personalInfo.firstName }}
              {{ data?.personalInfo.lastName }}
            </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-400">
              {{ data?.personalInfo.role }}
            </BaseParagraph>
          </div>
        </div>
        <div class="mt-8 max-w-[240px]">
          <ul class="space-y-1 font-sans text-sm">
            <li>
              <NuxtLink
                to="/layouts/profile-edit"
                exact-active-class="!text-primary-500 !bg-primary-500/10"
                class="text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hover:bg-muted-50 dark:hover:bg-muted-700/50 flex items-center gap-2 rounded-lg p-3 transition-colors duration-300"
              >
                <Icon name="ph:user-duotone" class="h-4 w-4" />
                <span>General</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/layouts/profile-edit/experience"
                exact-active-class="!text-primary-500 !bg-primary-500/10"
                class="text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hover:bg-muted-50 dark:hover:bg-muted-700/50 flex items-center gap-2 rounded-lg p-3 transition-colors duration-300"
              >
                <Icon name="ph:buildings-duotone" class="h-4 w-4" />
                <span>Experience</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/layouts/profile-edit/skills"
                exact-active-class="!text-primary-500 !bg-primary-500/10"
                class="text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hover:bg-muted-50 dark:hover:bg-muted-700/50 flex items-center gap-2 rounded-lg p-3 transition-colors duration-300"
              >
                <Icon name="ph:sketch-logo-duotone" class="h-4 w-4" />
                <span>Skills & Tools</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/layouts/profile-edit/settings"
                exact-active-class="!text-primary-500 !bg-primary-500/10"
                class="text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hover:bg-muted-50 dark:hover:bg-muted-700/50 flex items-center gap-2 rounded-lg p-3 transition-colors duration-300"
              >
                <Icon name="ph:gear-six-duotone" class="h-4 w-4" />
                <span>Settings</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-8">
        <RouterView v-slot="{ Component }">
          <Transition
            enter-active-class="transition-all duration-500 ease-out"
            enter-from-class="translate-y-20 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-20 opacity-0"
          >
            <component :is="Component" />
          </Transition>
        </RouterView>
      </div>
    </div>
  </div>
</template>
