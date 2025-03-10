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
  <div class="min-h-screen overflow-hidden px-4 md:px-6 lg:px-8 pb-20">
    <div class="grid sm:grid-cols-12">
      <div class="col-span-12 sm:col-span-3">
        <div class="relative pe-20">
          <ul class="space-y-1 font-sans text-sm">
            <li>
              <NuxtLink
                to="/layouts/profile-edit"
                exact-active-class="text-primary-500! bg-primary-500/10!"
                class="text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hover:bg-muted-50 dark:hover:bg-muted-700/50 flex items-center gap-2 rounded-lg p-3 transition-colors duration-300"
              >
                <Icon name="solar:user-rounded-linear" class="size-5" />
                <span>General</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/layouts/profile-edit/experience"
                exact-active-class="text-primary-500! bg-primary-500/10!"
                class="text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hover:bg-muted-50 dark:hover:bg-muted-700/50 flex items-center gap-2 rounded-lg p-3 transition-colors duration-300"
              >
                <Icon name="solar:buildings-2-linear" class="size-5" />
                <span>Experience</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/layouts/profile-edit/skills"
                exact-active-class="text-primary-500! bg-primary-500/10!"
                class="text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hover:bg-muted-50 dark:hover:bg-muted-700/50 flex items-center gap-2 rounded-lg p-3 transition-colors duration-300"
              >
                <Icon name="solar:add-folder-outline" class="size-5" />
                <span>Skills & Tools</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/layouts/profile-edit/settings"
                exact-active-class="text-primary-500! bg-primary-500/10!"
                class="text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hover:bg-muted-50 dark:hover:bg-muted-700/50 flex items-center gap-2 rounded-lg p-3 transition-colors duration-300"
              >
                <Icon name="solar:settings-linear" class="size-5" />
                <span>Settings</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-9">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
