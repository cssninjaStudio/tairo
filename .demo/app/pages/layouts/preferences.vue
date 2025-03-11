<script setup lang="ts">
definePageMeta({
  title: 'Preferences',
  preview: {
    title: 'Preferences',
    description: 'For editing user preferences',
    categories: ['layouts', 'forms'],
    src: '/img/screens/layouts-user-edit.png',
    srcDark: '/img/screens/layouts-user-edit-dark.png',
    order: 31,
    new: true,
  },
})
</script>

<template>
  <div class="w-full px-4 md:px-6 lg:px-8 pb-20">
    <div class="max-w-md">
      <BaseHeading
        as="h3"
        size="md"
        weight="medium"
        class="text-muted-900 dark:text-white"
      >
        Manage your account
      </BaseHeading>
      <BaseParagraph
        size="sm"
        lead="tight"
        class="text-muted-500 dark:text-muted-400 mt-2"
      >
        Make sure to check your preferences and update your account settings, accordingly to your needs.
      </BaseParagraph>
    </div>

    <div class="mt-8">
      <div class="w-full overflow-x-auto pb-1">
        <div class="border-muted-300 dark:border-muted-800 border-b">
          <nav class="-mb-px flex space-x-10">
            <NuxtLink
              to="/layouts/preferences"
              class="text-muted-400 hover:text-muted-800 dark:text-muted-500 dark:hover:text-muted-100 hover:border-muted-300 dark:hover:border-muted-700 whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium transition-all duration-200"
              exact-active-class="border-primary-500! text-primary-500!"
            >
              Profile
            </NuxtLink>
            <NuxtLink
              to="/layouts/preferences/workspaces"
              class="text-muted-400 hover:text-muted-800 dark:text-muted-500 dark:hover:text-muted-100 hover:border-muted-300 dark:hover:border-muted-700 whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium transition-all duration-200"
              exact-active-class="border-primary-500! text-primary-500!"
            >
              Workspaces
            </NuxtLink>
            <NuxtLink
              to="/layouts/preferences/wallet"
              class="text-muted-400 hover:text-muted-800 dark:text-muted-500 dark:hover:text-muted-100 hover:border-muted-300 dark:hover:border-muted-700 whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium transition-all duration-200"
              exact-active-class="border-primary-500! text-primary-500!"
            >
              Wallet
            </NuxtLink>
            <NuxtLink
              to="/layouts/preferences/integrations"
              class="text-muted-400 hover:text-muted-800 dark:text-muted-500 dark:hover:text-muted-100 hover:border-muted-300 dark:hover:border-muted-700 whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium transition-all duration-200"
              exact-active-class="border-primary-500! text-primary-500!"
            >
              Integrations
            </NuxtLink>
            <NuxtLink
              to="/layouts/preferences/billing"
              class="text-muted-400 hover:text-muted-800 dark:text-muted-500 dark:hover:text-muted-100 hover:border-muted-300 dark:hover:border-muted-700 whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium transition-all duration-200"
              exact-active-class="border-primary-500! text-primary-500!"
            >
              Billing
            </NuxtLink>
          </nav>
        </div>
      </div>

      <div>
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
