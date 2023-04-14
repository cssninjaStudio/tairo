<script setup lang="ts">
const categories = [
  'dashboards',
  'lists',
  'apps',
  'authentication',
  'system',
  'utility',
  'forms',
]

const demos = [
  {
    title: 'Personal dashboard v1',
    subtitle: 'A dashboard for personal use',
    categories: ['Dashboards'],
    url: '/dashboards',
    screenshots: {
      light: '/img/screens/dashboards-personal-1.png',
      dark: '/img/screens/dashboards-personal-1-dark.png',
    },
  },
  {
    title: 'Personal dashboard v2',
    subtitle: 'A dashboard for personal use',
    categories: ['Dashboards'],
    url: '/dashboards/personal-2',
    screenshots: {
      light: '/img/screens/dashboards-personal-2.png',
      dark: '/img/screens/dashboards-personal-2-dark.png',
    },
  },
  {
    title: 'Personal dashboard v3',
    subtitle: 'A dashboard for personal use',
    categories: ['Dashboards'],
    url: '/dashboards/personal-3',
    screenshots: {
      light: '/img/screens/dashboards-sales.png',
      dark: '/img/screens/dashboards-sales-dark.png',
    },
  },
]

const selectedCategories = ref(['all'])
</script>

<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-16 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
          >Prebuilt pages</BaseText
        >
        <BaseHeading
          as="h2"
          size="4xl"
          weight="light"
          lead="tight"
          class="text-muted-800 mx-auto mb-4 dark:text-white"
        >
          100+ Amazing demos
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
        >
          Tairo is the ultimate solution for developers and businesses looking
          to build beautiful and responsive dashboards in no time.
        </BaseParagraph>
      </div>

      <div class="grid grid-cols-12 gap-6">
        <!-- Col -->
        <div
          class="ltablet:col-span-2 ltablet:block col-span-12 hidden lg:col-span-2 lg:block"
        >
          <ul class="space-y-3">
            <li v-for="(category, index) in categories" :key="index">
              <BaseCheckbox
                v-model="selectedCategories"
                :value="category"
                color="primary"
                :label="category"
              />
            </li>
          </ul>
        </div>
        <!-- Col -->
        <div class="ltablet:col-span-10 col-span-12 lg:col-span-10">
          <div class="grid gap-8 sm:grid-cols-2">
            <NuxtLink
              to="#"
              v-for="demo in demos"
              :key="demo.title"
              class="group relative block"
            >
              <div>
                <img
                  class="border-muted-200 block rounded-lg border transition-opacity duration-200 group-hover:opacity-75"
                  :class="demo.screenshots.dark ? 'dark:hidden' : ''"
                  :src="demo.screenshots.light"
                  :alt="`Tairo - ${demo.title}`"
                />
                <img
                  v-if="demo.screenshots.dark"
                  class="border-muted-800 hidden rounded-lg border transition-opacity duration-200 group-hover:opacity-75 dark:block"
                  :src="demo.screenshots.dark"
                  :alt="`Tairo - ${demo.title}`"
                />
                <div
                  class="absolute inset-x-0 -bottom-2 mx-auto max-w-[85%] translate-y-2 opacity-0 transition-transform duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <BaseCard
                    shape="curved"
                    class="flex items-center p-4"
                    elevated
                  >
                    <div>
                      <BaseHeading
                        as="h3"
                        size="sm"
                        weight="medium"
                        lead="none"
                        class="text-muted-800 mx-auto dark:text-white"
                        >{{ demo.title }}</BaseHeading
                      >
                      <BaseText
                        size="xs"
                        class="text-muted-500 dark:text-muted-400"
                        >{{ demo.subtitle }}</BaseText
                      >
                    </div>
                    <div
                      class="bg-primary-500/10 text-primary-500 me-2 ms-auto flex h-8 w-8 items-center justify-center rounded-full"
                    >
                      <Icon
                        name="lucide:arrow-right"
                        class="h-4 w-4 -translate-x-2 transition-transform duration-300 group-hover:translate-x-0"
                      />
                    </div>
                  </BaseCard>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="mt-24 flex items-center justify-center">
        <BaseButton shape="curved" color="primary" flavor="outline"
          >View All Demos</BaseButton
        >
      </div>
    </div>
  </div>
</template>
