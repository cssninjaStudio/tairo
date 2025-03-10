<script setup lang="ts">
const route = useRoute()

const isAccounts = computed(() => {
  return route.path.match('^/layouts/accounts$')
})

const isLinked = computed(() => {
  return route.path.startsWith('/layouts/accounts/linked')
})

const isRules = computed(() => {
  return route.path.startsWith('/layouts/accounts/rules')
})
</script>

<template>
  <div class="w-full px-4 md:px-6 lg:px-8 pb-20">
    <!-- Header -->
    <div class="flex items-center justify-end pb-6">
      <!-- Buttons -->
      <div class="hidden items-center gap-2 md:flex">
        <BaseButton
          rounded="md"
          size="sm"
        >
          <Icon name="lucide:plus" class="size-4" />
          <span>New Account</span>
        </BaseButton>
        <BaseButton
          rounded="md"
          size="sm"
        >
          <Icon name="solar:link-circle-linear" class="size-4" />
          <span>Link Account</span>
        </BaseButton>
      </div>
    </div>

    <!-- Tabs wrapper -->
    <div>
      <!-- Tabs -->
      <div class="flex items-center justify-between overflow-hidden">
        <div
          class="border-muted-200 dark:border-muted-800 xs:overflow-x-auto flex grow gap-x-6 border-b font-sans text-sm"
        >
          <NuxtLink
            to="/layouts/accounts"
            class="cursor-pointer select-none border-b-2 pb-2 transition-colors duration-300"
            :class="
              isAccounts
                ? 'text-muted-700 dark:text-muted-100 border-primary-500'
                : 'text-muted-300 hover:text-muted-400 dark:text-muted-500 dark:hover:text-muted-400 border-transparent'
            "
          >
            Accounts
          </NuxtLink>
          <NuxtLink
            to="/layouts/accounts/linked"
            class="cursor-pointer select-none border-b-2 pb-2 transition-colors duration-300"
            :class="
              isLinked
                ? 'text-muted-700 dark:text-muted-100 border-primary-500'
                : 'text-muted-300 hover:text-muted-400 dark:text-muted-500 dark:hover:text-muted-400 border-transparent'
            "
          >
            Linked accounts
          </NuxtLink>
          <NuxtLink
            to="/layouts/accounts/rules"
            class="cursor-pointer select-none border-b-2 pb-2 transition-colors duration-300"
            :class="
              isRules
                ? 'text-muted-700 dark:text-muted-100 border-primary-500'
                : 'text-muted-300 hover:text-muted-400 dark:text-muted-500 dark:hover:text-muted-400 border-transparent'
            "
          >
            Transfer rules
          </NuxtLink>
        </div>
      </div>

      <!-- Tab content -->
      <div class="w-full py-6">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
