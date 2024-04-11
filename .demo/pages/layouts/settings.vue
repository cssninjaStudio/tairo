<script setup lang="ts">
definePageMeta({
  layout: 'empty',
})

const route = useRoute()

const isPersonal = computed(() => {
  return route.path.match('^/layouts/settings$')
})

const isSecurity = computed(() => {
  return route.path.startsWith('/layouts/settings/security')
})

const isNotifications = computed(() => {
  return route.path.startsWith('/layouts/settings/notifications')
})

const isTokens = computed(() => {
  return route.path.startsWith('/layouts/settings/tokens')
})
</script>

<template>
  <div class="dark:bg-muted-900 min-h-screen bg-white">
    <DemoNavigationTop title="Settings" close-to="/dashboards" />

    <div class="w-full pb-20 pt-32">
      <div class="mx-auto w-full max-w-6xl px-4">
        <div class="grid w-full gap-8 md:grid-cols-12 md:gap-16">
          <!--Stepper column-->
          <div class="md:col-span-3 lg:col-span-3">
            <!--Tabs-->
            <div class="border-muted-200 dark:border-muted-800 h-full border-r">
              <ul class="xs:flex xs:gap-4 -me-0.5 font-sans">
                <li>
                  <NuxtLink
                    to="/layouts/settings"
                    class="font-heading xs:border-b-[3px] flex w-full cursor-pointer py-2 text-sm md:border-r-[3px]"
                    :class="
                      isPersonal
                        ? 'text-muted-800 dark:text-muted-100 border-primary-500'
                        : 'text-muted-500 dark:text-muted-400 border-transparent'
                    "
                    data-tab="tab-1"
                  >
                    Personal
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/layouts/settings/security"
                    class="font-heading xs:border-b-[3px] flex w-full cursor-pointer py-2 text-sm md:border-r-[3px]"
                    :class="
                      isSecurity
                        ? 'text-muted-800 dark:text-muted-100 border-primary-500'
                        : 'text-muted-500 dark:text-muted-400 border-transparent'
                    "
                    data-tab="tab-2"
                  >
                    Security
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/layouts/settings/notifications"
                    class="font-heading xs:border-b-[3px] flex w-full cursor-pointer py-2 text-sm md:border-r-[3px]"
                    data-tab="tab-3"
                    :class="
                      isNotifications
                        ? 'text-muted-800 dark:text-muted-100 border-primary-500'
                        : 'text-muted-500 dark:text-muted-400 border-transparent'
                    "
                  >
                    Notifications
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/layouts/settings/tokens"
                    class="font-heading xs:border-b-[3px] flex w-full cursor-pointer py-2 text-sm md:border-r-[3px]"
                    data-tab="tab-4"
                    :class="
                      isTokens
                        ? 'text-muted-800 dark:text-muted-100 border-primary-500'
                        : 'text-muted-500 dark:text-muted-400 border-transparent'
                    "
                  >
                    API Tokens
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <!--Steps column-->
          <div class="md:col-span-9 lg:col-span-9">
            <NuxtPage />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
