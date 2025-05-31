<script setup lang="ts">
const route = useRoute()
const isMobileOpen = useMobileNavOpen()

watch(() => route.fullPath, () => {
  isMobileOpen.value = false
})

const { data: navigation } = await useAsyncData('docs-navigation', () => queryCollectionNavigation('docs'), {
  transform: data => data.find(item => item.path === '/documentation')?.children || [],
})
</script>

<template>
  <TairoMobileDrawer v-model="isMobileOpen">
    <div class="space-y-3 mb-10">
      <BaseHeading size="xl" weight="semibold">
        Menu
      </BaseHeading>
      <div>
        <ul class="font-sans text-lg space-y-2">
          <li>
            <NuxtLink
              to="/demos"
              class="text-muted-600 dark:text-muted-400 underline-offset-8"
              exact-active-class="underline font-medium text-muted-900! dark:text-white!"
            >
              Prebuilt pages
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/documentation"
              class="text-muted-600 dark:text-muted-400 underline-offset-8"
              exact-active-class="underline font-medium text-muted-900! dark:text-white!"
            >
              Documentation
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="space-y-3">
      <BaseHeading size="xl" weight="semibold">
        Documentation
      </BaseHeading>
      <div>
        <ul class="font-sans text-lg space-y-2">
          <li
            v-for="item in navigation"
            :key="item.path"
          >
            <div v-if="item.children">
              <BaseHeading
                size="sm"
                weight="semibold"
                class="uppercase tracking-wide mt-10 mb-4 text-muted-600 dark:text-muted-400"
              >
                <span>{{ item.title }}</span>
              </BaseHeading>
              <div>
                <ul class="font-sans text-lg space-y-2">
                  <li
                    v-for="link in item.children"
                    :key="link.path"
                    class="relative mt-1"
                  >
                    <NuxtLink
                      :to="link.path"
                      class="text-muted-600 dark:text-muted-400 underline-offset-8"
                      exact-active-class="underline font-medium text-muted-900! dark:text-white!"
                    >
                      {{ link.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
            <div
              v-else
              class="mt-1"
            >
              <NuxtLink
                :to="item.path"
                class="text-muted-600 dark:text-muted-400 underline-offset-8"
                exact-active-class="underline font-medium text-muted-900! dark:text-white!"
              >
                {{ item.title }}
              </NuxtLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </TairoMobileDrawer>
</template>
