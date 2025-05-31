<script setup lang="ts">
const command = 'pnpm dev'

const codeApp = [
  `<template>`,
  `  <BaseProviders>`,
  `    <NuxtLayout>`,
  `      <NuxtPage />`,
  `    </NuxtLayout>`,
  `  </BaseProviders>`,
  `</template>`,
].join('\n')

const codeLayout = [
  `<template>`,
  `  <TairoCollapseLayout>`,
  `    <TairoCollapseSidebar>`,
  `      <TairoCollapseSidebarHeader>My App</TairoCollapseSidebarHeader>`,
  `      <TairoCollapseSidebarLinks class="px-4 space-y-1 grow">`,
  `        <TairoCollapseSidebarLink`,
  `          to="/"`,
  `          label="Home"`,
  `          icon="solar:home-smile-angle-outline"`,
  `        />`,
  `      </TairoCollapseSidebarLinks>`,
  `    </TairoCollapseSidebar>`,
  ``,
  `    <TairoCollapseContent>`,
  `      <slot />`,
  `    </TairoCollapseContent>`,
  `  </TairoCollapseLayout>`,
  `</template>`,
].join('\n')

const codePage = [
  `<script setup lang="ts">`,
  `useHead({`,
  `  title: 'My page',`,
  `})`,
  ``,
  `const count = ref(0)`,
  `<` + `/script>`,
  ``,
  `<template>`,
  `  <div class="flex flex-col items-center justify-center h-screen">`,
  `    <BaseCard class="p-6 w-full max-w-md">`,
  `      <BaseHeading size="2xl">Hello Tairo!</BaseHeading>`,
  `      <BaseParagraph class="mb-4">{{ count }}</BaseParagraph>`,
  `      <BaseButton variant="primary" @click="count++">Click me</BaseButton>`,
  `    </BaseCard>`,
  `  </div>`,
  `</template>`,
].join('\n')

const codeTailwind = [
  `@import 'tailwindcss';`,
  `@import '@shuriken-ui/nuxt';`,
  `@import '#layers/@cssninja/tairo/theme.css';`,
  ``,
  `@theme {`,
  `  --font-sans: 'Inter', sans-serif;`,
  `  --font-alt: 'Karla', sans-serif;`,
  ``,
  `  --color-primary-50: var(--color-yellow-50);`,
  `  --color-primary-100: var(--color-yellow-100);`,
  `  --color-primary-200: var(--color-yellow-200);`,
  `  --color-primary-300: var(--color-yellow-300);`,
  `  --color-primary-400: var(--color-yellow-400);`,
  `  --color-primary-500: var(--color-yellow-500);`,
  `  --color-primary-600: var(--color-yellow-600);`,
  `  --color-primary-700: var(--color-yellow-700);`,
  `  --color-primary-800: var(--color-yellow-800);`,
  `  --color-primary-900: var(--color-yellow-900);`,
  ``,
  `  --color-muted-50: var(--color-stone-50);`,
  `  --color-muted-100: var(--color-stone-100);`,
  `  --color-muted-200: var(--color-stone-200);`,
  `  --color-muted-300: var(--color-stone-300);`,
  `  --color-muted-400: var(--color-stone-400);`,
  `  --color-muted-500: var(--color-stone-500);`,
  `  --color-muted-600: var(--color-stone-600);`,
  `  --color-muted-700: var(--color-stone-700);`,
  `  --color-muted-800: var(--color-stone-800);`,
  `  --color-muted-900: var(--color-stone-900);`,
  ``,
  `  --tairo-collapse-width-open: 16rem;`,
  `  --tairo-collapse-width-collapsed: 4rem;`,
  `}`,
].join('\n')
</script>

<template>
  <div class="mx-auto max-w-4xl pb-16">
    <div class="fixed end-6 top-3">
      <BaseThemeToggle />
    </div>
    <div class="flex flex-col gap-3 pb-16 pt-8 text-center">
      <BaseHeading
        size="md"
        weight="medium"
        class="uppercase"
      >
        <span>Welcome to</span>
      </BaseHeading>

      <svg class="text-primary-500 mx-auto h-8" viewBox="0 0 1524.6 500">
        <defs>
          <path id="logo_a" d="M180.5 391.1c-53-2.4-77.4-18-77.4-74.2V191.3h79.5V88.2h-79.5V1.7H0V321c0 119.2 69.5 168.6 180.5 168.8h2.1v-98.7h-2.1z" />
        </defs>
        <use href="#logo_a" fill="currentColor" fill-rule="evenodd" style="overflow: vi;" clip-rule="evenodd" />
        <clipPath id="logo_b">
          <use href="#logo_a" style="overflow: vi;" />
        </clipPath>
        <path fill="currentColor" d="M0 1.7h182.6v488.1H0z" clip-path="url(#logo_b)" />
        <defs>
          <path id="logo_c" d="M409.2 181.2c59.6 0 107.8 48.3 107.8 107.8 0 59.6-48.3 107.8-107.8 107.8-59.6 0-107.8-48.3-107.8-107.8s48.3-107.8 107.8-107.8m206.7-93h-98.5v43C486.2 98.3 443.2 79.6 394 79.6c-104.7 0-197.2 90.6-197.2 210.2 0 118.8 92.5 209.4 197.2 209.4 49.2 0 92.2-18.8 123.5-51.6v43H616V88.2z" />
        </defs>
        <use href="#logo_c" fill="currentColor" fill-rule="evenodd" style="overflow: vi;" clip-rule="evenodd" />
        <clipPath id="logo_d">
          <use href="#logo_c" style="overflow: vi;" />
        </clipPath>
        <path fill="currentColor" d="M196.8 79.6H616v419.7H196.8z" clip-path="url(#logo_d)" />
        <defs>
          <path id="logo_e" d="M674.2 88.2h103.2v402.5H674.2z" />
        </defs>
        <use href="#logo_e" fill="currentColor" fill-rule="evenodd" style="overflow: vi;" clip-rule="evenodd" />
        <clipPath id="logo_f">
          <use href="#logo_e" style="overflow: vi;" />
        </clipPath>
        <path fill="currentColor" d="M674.2 88.2h103.2v402.5H674.2z" clip-path="url(#logo_f)" />
        <defs>
          <path id="logo_g" d="M1047.4 80.4C913.8 64 834.8 143.7 834.8 257.8v232.9H938V257.8c0-57 43.8-92.2 109.4-80.5V80.4z" />
        </defs>
        <use href="#logo_g" fill="currentColor" fill-rule="evenodd" style="overflow: vi;" clip-rule="evenodd" />
        <clipPath id="logo_h">
          <use href="#logo_g" style="overflow: vi;" />
        </clipPath>
        <path fill="currentColor" d="M834.8 63.9h212.6v426.7H834.8z" clip-path="url(#logo_h)" />
        <defs>
          <path id="logo_i" d="M1270.4 181.2c59.6 0 107.8 48.3 107.8 107.8 0 59.6-48.3 107.8-107.8 107.8-59.6 0-107.8-48.3-107.8-107.8-.1-59.5 48.2-107.8 107.8-107.8m0-103.2c-116.5 0-211 94.5-211 211s94.5 211 211 211 211-94.5 211-211c0-25.2-4.4-49.5-12.6-71.9-5.2-14.4-16.9-24.2-32-26.9-45.1-7.9-82-39.7-97.1-81.9-5.2-14.5-16.8-24.3-31.9-27-12.1-2.1-24.6-3.3-37.4-3.3z" />
        </defs>
        <use href="#logo_i" fill="currentColor" fill-rule="evenodd" style="overflow: vi;" clip-rule="evenodd" />
        <clipPath id="logo_j">
          <use href="#logo_i" style="overflow: vi;" />
        </clipPath>
        <path fill="currentColor" d="M1059.4 78h422v422h-422z" clip-path="url(#logo_j)" />
        <defs>
          <path id="logo_k" d="M1458.8 0c36.3 0 65.8 29.5 65.8 65.8s-29.5 65.8-65.8 65.8-65.8-29.5-65.8-65.8S1422.4 0 1458.8 0" />
        </defs>
        <use href="#logo_k" fill="currentColor" fill-rule="evenodd" style="overflow: vi;" clip-rule="evenodd" />
        <clipPath id="logo_l">
          <use href="#logo_k" style="overflow: vi;" />
        </clipPath>
        <path fill="currentColor" d="M1393 0h131.6v131.6H1393z" clip-path="url(#logo_l)" />
      </svg>
    </div>
    <BaseCard rounded="lg" class="dark:bg-muted-900! mb-4 p-8 sm:mb-6 relative">
      <div
        class="nui-mask nui-mask-hexed absolute inset-x-0 -top-10 mx-auto mb-2 flex size-[84px] shrink-0 items-center justify-center"
      >
        <div
          class="animate-spin-slow from-primary-100 to-primary-500 dark:from-primary-800 absolute inset-0 flex size-full items-center justify-center bg-gradient-to-tr blur-xs transition-all duration-200"
        />
        <div
          class="nui-mask nui-mask-hexed dark:bg-muted-800 flex size-[80px] items-center justify-center bg-white"
        >
          <Icon name="ph:sparkle-duotone" class="text-primary-500 size-8" />
        </div>
      </div>
      <div class="space-y-2 pt-6 text-center">
        <BaseHeading size="lg" weight="semibold">
          <span>Start your first page</span>
        </BaseHeading>
        <BaseParagraph
          size="sm"
          class="text-muted-500 dark:text-muted-400 mx-auto max-w-2xl"
        >
          Welcome to the Tairo app starter. You are here because you ran the
          <code
            class="bg-muted-100 dark:bg-muted-700/70 text-primary-500 rounded-sm p-1 font-mono"
          >
            {{ command }}
          </code>
          command in your terminal. Follow the instructions below to configure
          the project and start building your first page.
        </BaseParagraph>
      </div>
    </BaseCard>

    <div class="mb-4 grid grid-cols-1 gap-4 sm:mb-6 sm:grid-cols-2 sm:gap-6">
      <div class="grid grid-cols-2 gap-4 sm:gap-6">
        <NuxtLink
          to="https://tairo.cssninja.io"
          taget="_blank"
          rel="noopener noreferrer"
          class="relative"
        >
          <BaseCard
            rounded="lg"
            elevated-hover
            class="dark:bg-muted-900! hover:border-primary-500! relative z-10 h-full p-4"
          >
            <div class="flex h-full flex-col items-center justify-center gap-2">
              <div
                class="nui-mask nui-mask-hexed relative flex size-16 shrink-0 items-center justify-center"
              >
                <div
                  class="animate-spin-slow from-primary-100 to-primary-500 dark:from-primary-800 absolute inset-0 flex size-full items-center justify-center bg-gradient-to-tr blur-xs transition-all duration-200"
                />
                <div
                  class="nui-mask nui-mask-hexed dark:bg-muted-800 flex size-[60px] items-center justify-center bg-white"
                >
                  <Icon
                    name="ph:sidebar-duotone"
                    class="text-primary-500 size-6"
                  />
                </div>
              </div>
              <BaseText
                size="sm"
                class="text-muted-500 dark:text-muted-300"
              >
                Online demo
              </BaseText>
            </div>
          </BaseCard>
        </NuxtLink>
        <NuxtLink
          to="https://nuxt.com/docs"
          taget="_blank"
          rel="noopener noreferrer"
          class="relative"
        >
          <BaseCard
            rounded="lg"
            elevated-hover
            class="dark:bg-muted-900! hover:border-success-500! relative z-10 h-full p-4"
          >
            <div class="flex h-full flex-col items-center justify-center gap-2">
              <div
                class="nui-mask nui-mask-hexed relative flex size-16 shrink-0 items-center justify-center"
              >
                <div
                  class="animate-spin-slow from-success-100 to-success-500 dark:from-success-800 absolute inset-0 flex size-full items-center justify-center bg-gradient-to-tr blur-xs transition-all duration-200"
                />
                <div
                  class="nui-mask nui-mask-hexed dark:bg-muted-800 flex size-[60px] items-center justify-center bg-white"
                >
                  <Icon
                    name="simple-icons:nuxtdotjs"
                    class="text-success-500 relative -top-0.5 size-5"
                  />
                </div>
              </div>
              <BaseText
                size="sm"
                class="text-muted-500 dark:text-muted-300"
              >
                Nuxt documentation
              </BaseText>
            </div>
          </BaseCard>
        </NuxtLink>
        <NuxtLink
          to="https://cssninja.io/faq/github-access"
          taget="_blank"
          rel="noopener noreferrer"
          class="relative"
        >
          <BaseCard
            rounded="lg"
            elevated-hover
            class="dark:bg-muted-900! relative z-10 h-full p-4 hover:border-purple-500!"
          >
            <div class="flex h-full flex-col items-center justify-center gap-2">
              <div
                class="nui-mask nui-mask-hexed relative flex size-16 shrink-0 items-center justify-center"
              >
                <div
                  class="animate-spin-slow absolute inset-0 flex size-full items-center justify-center bg-gradient-to-tr from-purple-100 to-purple-500 blur-xs transition-all duration-200 dark:from-purple-800"
                />
                <div
                  class="nui-mask nui-mask-hexed dark:bg-muted-800 flex size-[60px] items-center justify-center bg-white"
                >
                  <Icon
                    name="fa6-brands:github"
                    class="relative -top-0.5 size-5 text-purple-500"
                  />
                </div>
              </div>
              <BaseText
                size="sm"
                class="text-muted-500 dark:text-muted-300"
              >
                Github Access
              </BaseText>
            </div>
          </BaseCard>
        </NuxtLink>
        <NuxtLink
          to="https://go.cssninja.io/discord"
          taget="_blank"
          rel="noopener noreferrer"
          class="relative"
        >
          <BaseCard
            rounded="lg"
            elevated-hover
            class="dark:bg-muted-900! relative z-10 h-full p-4 hover:border-blue-500!"
          >
            <div class="flex h-full flex-col items-center justify-center gap-2">
              <div
                class="nui-mask nui-mask-hexed relative flex size-16 shrink-0 items-center justify-center"
              >
                <div
                  class="animate-spin-slow absolute inset-0 flex size-full items-center justify-center bg-gradient-to-tr from-blue-100 to-blue-500 blur-xs transition-all duration-200 dark:from-blue-800"
                />
                <div
                  class="nui-mask nui-mask-hexed dark:bg-muted-800 flex size-[60px] items-center justify-center bg-white"
                >
                  <Icon
                    name="fa6-brands:discord"
                    class="relative -top-0.5 size-5 text-blue-500"
                  />
                </div>
              </div>
              <BaseText
                size="sm"
                class="text-muted-500 dark:text-muted-300"
              >
                Discord Server
              </BaseText>
            </div>
          </BaseCard>
        </NuxtLink>
      </div>
      <NuxtLink
        to="https://tairo.cssninja.io/documentation"
        taget="_blank"
        rel="noopener noreferrer"
        class="relative"
      >
        <BaseCard
          rounded="lg"
          elevated-hover
          class="dark:bg-muted-900! hover:border-primary-500! relative z-10 p-5"
        >
          <div
            class="gridlines relative mb-4 flex h-40 w-full items-center justify-center overflow-hidden"
          >
            <div
              class="nui-mask nui-mask-hexed relative mb-2 flex size-[84px] shrink-0 items-center justify-center"
            >
              <div
                class="animate-spin-slow from-primary-100 to-primary-500 dark:from-primary-800 absolute inset-0 flex size-full items-center justify-center bg-gradient-to-tr blur-xs transition-all duration-200"
              />
              <div
                class="nui-mask nui-mask-hexed dark:bg-muted-800 flex size-[80px] items-center justify-center bg-white"
              >
                <Icon
                  name="ph:book-open-duotone"
                  class="text-primary-500 size-7"
                />
              </div>
            </div>
            <div
              class="dark:bg-muted-900 absolute -end-4 bottom-0 h-full w-24 scale-105 bg-white blur-lg"
            />
          </div>
          <div>
            <BaseHeading
              as="h3"
              size="md"
              weight="light"
              lead="tight"
              class="text-muted-800 mx-auto dark:text-white"
            >
              Online documentation
            </BaseHeading>
            <BaseParagraph
              size="sm"
              class="text-muted-500 dark:text-muted-100 mx-auto my-2"
            >
              Reviewing Tairo's documentation is essential to get a grasp on all
              basic concepts used in this project and to get some code examples
              that you can immediately paste in.
            </BaseParagraph>
          </div>
        </BaseCard>
      </NuxtLink>
    </div>

    <div class="flex items-center py-4">
      <div class="bg-muted-200 dark:bg-muted-800 h-px grow" />
      <span
        class="text-semibold text-muted-800d dark:text-muted-100 shrink px-4 font-sans text-lg font-semibold"
      >Getting started</span>
      <div class="bg-muted-200 dark:bg-muted-800 h-px grow" />
    </div>

    <div class="flex flex-col gap-6">
      <BaseCard class="dark:bg-muted-900! p-6" rounded="sm">
        <div class="flex gap-2 mb-4 sm:items-center">
          <Icon
            name="ph:number-circle-one-duotone"
            class="text-primary-500 size-8 shrink-0"
          />
          <BaseParagraph>
            Customize tailwind settings in
            <code class="bg-muted-100 dark:bg-muted-950 rounded-md py-1 px-1.5 text-sm">app/assets/main.css</code>
            <small class="ps-1">(colors, fonts, ...)</small>
          </BaseParagraph>
        </div>
        <pre class="bg-muted-100 dark:bg-muted-950 text-muted-800 dark:text-muted-100 rounded-md py-2 px-4"><code>{{ codeTailwind }}</code></pre>
      </BaseCard>
      <BaseCard class="dark:bg-muted-900! p-6" rounded="sm">
        <div class="flex gap-2 mb-4 sm:items-center">
          <Icon
            name="ph:number-circle-two-duotone"
            class="text-primary-500 size-8 shrink-0"
          />
          <BaseParagraph>
            Create your default layout in
            <code class="bg-muted-100 dark:bg-muted-950 rounded-md py-1 px-1.5 text-sm">app/layouts/default.vue</code>
          </BaseParagraph>
        </div>
        <pre class="bg-muted-100 dark:bg-muted-950 text-muted-800 dark:text-muted-100 rounded-md py-2 px-4"><code>{{ codeLayout }}</code></pre>
      </BaseCard>
      <BaseCard class="dark:bg-muted-900! p-6" rounded="sm">
        <div class="flex gap-2 mb-4 sm:items-center">
          <Icon
            name="ph:number-circle-three-duotone"
            class="text-primary-500 size-8 shrink-0"
          />
          <BaseParagraph>
            Create your first page
            <code class="bg-muted-100 dark:bg-muted-950 rounded-md py-1 px-1.5 text-sm">app/pages/index.vue</code>
          </BaseParagraph>
        </div>
        <pre class="bg-muted-100 dark:bg-muted-950 text-muted-800 dark:text-muted-100 rounded-md py-2 px-4"><code>{{ codePage }}</code></pre>
      </BaseCard>
      <BaseCard class="dark:bg-muted-900! p-6" rounded="sm">
        <div class="flex gap-2 mb-4 sm:items-center">
          <Icon
            name="ph:number-circle-four-duotone"
            class="text-primary-500 size-8 shrink-0"
          />
          <BaseParagraph>
            Update your main nuxt app to use layouts and pages in
            <code class="bg-muted-100 dark:bg-muted-950 rounded-md py-1 px-1.5 text-sm">app/app.vue</code>
          </BaseParagraph>
        </div>
        <pre class="bg-muted-100 dark:bg-muted-950 text-muted-800 dark:text-muted-100 rounded-md py-2 px-4"><code>{{ codeApp }}</code></pre>
      </BaseCard>
      <BaseCard class="dark:bg-muted-900! p-6" rounded="sm">
        <div class="flex gap-2 mb-4 sm:items-center">
          <Icon
            name="ph:number-circle-five-duotone"
            class="text-primary-500 size-8 shrink-0"
          />
          <BaseParagraph>
            Continue learning with the
            <BaseLink
              to="https://tairo.cssninja.io/documentation"
              target="_blank"
            >
              Online documentation
            </BaseLink>
          </BaseParagraph>
        </div>
      </BaseCard>
    </div>
  </div>
</template>

<style scoped>
.gridlines {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PGcgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZWJlYmViIj48cGF0aCBvcGFjaXR5PSIuNSIgZD0iTTk2IDk1aDR2MWgtNHY0aC0xdi00aC05djRoLTF2LTRoLTl2NGgtMXYtNGgtOXY0aC0xdi00aC05djRoLTF2LTRoLTl2NGgtMXYtNGgtOXY0aC0xdi00aC05djRoLTF2LTRoLTl2NGgtMXYtNEgwdi0xaDE1di05SDB2LTFoMTV2LTlIMHYtMWgxNXYtOUgwdi0xaDE1di05SDB2LTFoMTV2LTlIMHYtMWgxNXYtOUgwdi0xaDE1di05SDB2LTFoMTV2LTlIMHYtMWgxNVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoNHYxaC00djloNHYxaC00djloNHYxaC00djloNHYxaC00djloNHYxaC00djloNHYxaC00djloNHYxaC00djloNHYxaC00djl6bS0xIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS05LTEwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTktMTB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS05LTEwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTktMTB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS05LTEwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTktMTB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS05LTEwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6IiAvPjxwYXRoIGQ9Ik02IDVWMEg1djVIMHYxaDV2OTRoMVY2aDk0VjVINnoiIC8+PC9nPjwvZz48L3N2Zz4K');
}

.dark .gridlines {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PGcgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjMjcyZTNlIj48cGF0aCBvcGFjaXR5PSIuNSIgZD0iTTk2IDk1aDR2MWgtNHY0aC0xdi00aC05djRoLTF2LTRoLTl2NGgtMXYtNGgtOXY0aC0xdi00aC05djRoLTF2LTRoLTl2NGgtMXYtNGgtOXY0aC0xdi00aC05djRoLTF2LTRoLTl2NGgtMXYtNEgwdi0xaDE1di05SDB2LTFoMTV2LTlIMHYtMWgxNXYtOUgwdi0xaDE1di05SDB2LTFoMTV2LTlIMHYtMWgxNXYtOUgwdi0xaDE1di05SDB2LTFoMTV2LTlIMHYtMWgxNVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoOVYwaDF2MTVoNHYxaC00djloNHYxaC00djloNHYxaC00djloNHYxaC00djloNHYxaC00djloNHYxaC00djloNHYxaC00djloNHYxaC00djl6bS0xIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS05LTEwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTktMTB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS05LTEwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTktMTB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS05LTEwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTktMTB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS0xMCAwdi05aC05djloOXptLTEwIDB2LTloLTl2OWg5em0tMTAgMHYtOWgtOXY5aDl6bS05LTEwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6bTEwIDBoOXYtOWgtOXY5em0xMCAwaDl2LTloLTl2OXptMTAgMGg5di05aC05djl6IiBmaWxsPSIjMjcyZTNlIi8+PHBhdGggZD0iTTYgNVYwSDV2NUgwdjFoNXY5NGgxVjZoOTRWNUg2eiIgZmlsbD0iIzI3MmUzZSIvPjwvZz48L2c+PC9zdmc+');
}

.animate-spin-slow {
  animation: spin 3s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
