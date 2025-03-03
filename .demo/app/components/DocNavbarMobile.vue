<script setup lang="ts">
const isMobileOpen = useState('doc-navbar-mobile-open', () => false)
const { data: navigation } = await useAsyncData('docs-navigation', () => queryCollectionNavigation('docs'), {
  transform: data => data.find(item => item.path === '/documentation')?.children || [],
})
</script>

<template>
  <div :class="isMobileOpen ? 'pointer-events-auto' : 'pointer-events-none'">
    <div
      role="button"
      class="fixed lg:hidden inset-0 h-full w-full bg-muted-900 z-[98] transition-opacity duration-300"
      :class="[
        isMobileOpen ? 'opacity-80' : 'opacity-0',
      ]"
      @click="isMobileOpen = false"
    />
    <div
      class="fixed lg:hidden bottom-0 inset-x-0 h-[calc(100dvh_-_40%)] w-full z-[99] bg-white dark:bg-black rounded-t-2xl transition-transform duration-300"
      :class="[
        isMobileOpen ? 'translate-y-0' : 'translate-y-full',
      ]"
    >
      <div class="relative h-full px-8 py-12 space-y-10 overflow-y-auto nui-slimscroll">
        <div class="space-y-3">
          <BaseHeading size="xl" weight="semibold">
            Menu
          </BaseHeading>
          <div>
            <ul class="font-sans text-lg space-y-2">
              <li @click="isMobileOpen = false">
                <NuxtLink
                  to="/demos"
                  class="text-muted-600 dark:text-muted-400"
                  exact-active-class="text-muted-900! dark:text-white!"
                >
                  Prebuilt pages
                </NuxtLink>
              </li>
              <li @click="isMobileOpen = false">
                <NuxtLink
                  to="/documentation"
                  class="text-muted-600 dark:text-muted-400"
                  exact-active-class="text-muted-900! dark:text-white!"
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
                @click="isMobileOpen = false"
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
      </div>
    </div>
  </div>
</template>
