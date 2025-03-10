<script setup lang="ts">
const isMobileOpen = useState('doc-navbar-mobile-open', () => false)

const { data: navigation } = await useAsyncData('docs-navigation', () => queryCollectionNavigation('docs'), {
  transform: data => data.find(item => item.path === '/documentation')?.children || [],
})
</script>

<template>
  <div class="bg-white dark:bg-black">
    <DocNavbarMobile />
    <div :class="isMobileOpen ? 'bg-black lg:bg-white dark:lg:bg-black' : 'bg-white dark:bg-black'">
      <div
        class="flex flex-col min-h-screen transition-all duration-300"
        :class="isMobileOpen ? 'content-transform' : ''"
      >
        <DocNavbar />
        <div class="bg-white dark:bg-black relative w-full grow flex flex-col">
          <div class="relative z-10 mx-auto w-full max-w-[1536px] grow flex">
            <!-- Start -->
            <div class="relative hidden lg:flex flex-col w-60 shrink-0 bg-white dark:bg-black border-e border-muted-200 dark:border-muted-800">
              <ul class="fixed top-14 w-60 max-h-[calc(100dvh_-_3.5rem)] pt-10 pb-16 pe-4 overflow-y-auto nui-slimscroll">
                <li
                  v-for="item in navigation"
                  :key="item.path"
                >
                  <div v-if="item.children">
                    <BaseHeading
                      size="xs"
                      weight="semibold"
                      class="uppercase tracking-wide mt-10 ms-2.5 mb-2 text-muted-600 dark:text-muted-400"
                    >
                      <span>{{ item.title }}</span>
                    </BaseHeading>
                    <div>
                      <ul>
                        <li
                          v-for="link in item.children"
                          :key="link.path"
                          class="relative mt-1"
                        >
                          <div v-if="link.children" class="mt-6">
                            <BaseHeading
                              size="xs"
                              weight="semibold"
                              class="uppercase tracking-wide mt-2.5 ms-2.5 mb-2 text-muted-600 dark:text-muted-400"
                            >
                              <span>{{ link.title }}</span>
                            </BaseHeading>
                            <ul>
                              <li
                                v-for="sublink in link.children"
                                :key="sublink.path"
                                class="relative mt-1"
                              >
                                <NuxtLink
                                  :to="sublink.path"
                                  class="flex h-8 items-center gap-4 rounded-full px-3 font-sans text-sm text-muted-700 transition-colors duration-300 hover:bg-muted-200/70 hover:text-muted-800 dark:text-muted-400 dark:hover:bg-muted-800 dark:hover:text-muted-100"
                                  exact-active-class="font-medium bg-muted-200/70! text-muted-800! dark:bg-muted-800! dark:text-muted-100!"
                                >
                                  {{ sublink.title }}
                                </NuxtLink>
                              </li>
                            </ul>
                          </div>
                          <NuxtLink
                            v-else
                            :to="link.path"
                            class="flex h-8 items-center gap-4 rounded-full px-3 font-sans text-sm text-muted-700 transition-colors duration-300 hover:bg-muted-200/70 hover:text-muted-800 dark:text-muted-400 dark:hover:bg-muted-800 dark:hover:text-muted-100"
                            exact-active-class="font-medium bg-muted-200/70! text-muted-800! dark:bg-muted-800! dark:text-muted-100!"
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
                      class="flex h-8 items-center gap-4 rounded-full px-3 font-sans text-sm text-muted-700 transition-colors duration-300 hover:bg-muted-200/70 hover:text-muted-800 dark:text-muted-400 dark:hover:bg-muted-800 dark:hover:text-muted-100"
                      exact-active-class="font-medium bg-muted-200/70! text-muted-800! dark:bg-muted-800! dark:text-muted-100!"
                    >
                      {{ item.title }}
                    </NuxtLink>
                  </div>
                </li>
              </ul>
            </div>
            <!-- Content -->
            <div class="grow px-4 md:px-6 xl:px-8 overflow-hidden">
              <div class="w-full max-w-5xl mx-auto pt-6 xl:px-6">
                <slot />
              </div>
              <div class="pt-10 pb-20">
                <DocSurround />
              </div>
            </div>
            <!-- End -->
            <div class="relative hidden xl:flex flex-col w-72 bg-white dark:bg-black pe-6 py-6">
              <div class="fixed top-20">
                <DocToc />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
