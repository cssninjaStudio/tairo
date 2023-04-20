<script setup lang="ts">
const app = useAppConfig()

const command = 'pnpm dev'

const codePage = [
  `<script setup lang="ts">`,
  `definePageMeta({`,
  `  title: 'My page',`,
  `})`,
  `<` + `/script>`,
  ``,
  `<template>`,
  `  Hello Tairo!`,
  `</template>`,
].join('\n')

const codeTailwind = [
  `import { withShurikenUI } from '@shuriken-ui/tailwind'`,
  `import colors from 'tailwindcss/colors'`,
  ``,
  `export default withShurikenUI({`,
  `  content: [],`,
  `  theme: {`,
  `    extend: {`,
  `      colors: {`,
  `        primary: colors.red,`,
  `        muted: colors.stone,`,
  `      }`,
  `    }`,
  `  }`,
  `})`,
].join('\n')
</script>

<template>
  <div class="mx-auto max-w-4xl">
    <div class="absolute right-6 top-3">
      <BaseThemeToggle />
    </div>
    <div class="-mt-8 mb-16 flex flex-col gap-3 text-center">
      <BaseHeading size="md" weight="medium" class="uppercase">
        <span>Welcome to</span>
      </BaseHeading>
      <TairoLogoText class="text-primary-500 mx-auto h-8" />
    </div>
    <BaseCard shape="curved" class="dark:!bg-muted-900 mb-4 p-8 sm:mb-6">
      <div
        class="nui-mask nui-mask-hexed absolute inset-x-0 -top-10 mx-auto mb-2 flex h-[84px] w-[84px] shrink-0 items-center justify-center"
      >
        <div
          class="animate-spin-slow from-primary-100 to-primary-500 dark:from-primary-800 absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-tr blur-sm transition-all duration-200"
        ></div>
        <div
          class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-[80px] w-[80px] items-center justify-center bg-white"
        >
          <Icon name="ph:sparkle-duotone" class="text-primary-500 h-8 w-8" />
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
            class="bg-muted-100 dark:bg-muted-700/70 text-primary-500 rounded p-1 font-mono"
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
        <NuxtLink to="https://tairo.cssninja.io" taget="_blank" rel="noopener noreferrer" class="relative">
          <BaseCard
            shape="curved"
            elevated-hover
            class="dark:!bg-muted-900 hover:!border-primary-500 relative z-10 h-full p-4"
          >
            <div class="flex h-full flex-col items-center justify-center gap-2">
              <div
                class="nui-mask nui-mask-hexed relative flex h-16 w-16 shrink-0 items-center justify-center"
              >
                <div
                  class="animate-spin-slow from-primary-100 to-primary-500 dark:from-primary-800 absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-tr blur-sm transition-all duration-200"
                ></div>
                <div
                  class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-[60px] w-[60px] items-center justify-center bg-white"
                >
                  <Icon
                    name="ph:sidebar-duotone"
                    class="text-primary-500 h-6 w-6"
                  />
                </div>
              </div>
              <BaseText size="sm" class="text-muted-500 dark:text-muted-300"
                >Online demo</BaseText
              >
            </div>
          </BaseCard>
        </NuxtLink>
        <NuxtLink to="https://nuxt.com/docs" taget="_blank" rel="noopener noreferrer" class="relative">
          <BaseCard
            shape="curved"
            elevated-hover
            class="dark:!bg-muted-900 hover:!border-success-500 relative z-10 h-full p-4"
          >
            <div class="flex h-full flex-col items-center justify-center gap-2">
              <div
                class="nui-mask nui-mask-hexed relative flex h-16 w-16 shrink-0 items-center justify-center"
              >
                <div
                  class="animate-spin-slow from-success-100 to-success-500 dark:from-success-800 absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-tr blur-sm transition-all duration-200"
                ></div>
                <div
                  class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-[60px] w-[60px] items-center justify-center bg-white"
                >
                  <Icon
                    name="simple-icons:nuxtdotjs"
                    class="text-success-500 relative -top-0.5 h-5 w-5"
                  />
                </div>
              </div>
              <BaseText size="sm" class="text-muted-500 dark:text-muted-300"
                >Nuxt documentation</BaseText
              >
            </div>
          </BaseCard>
        </NuxtLink>
        <NuxtLink to="https://cssninja.io/faq/github-access" class="relative">
          <BaseCard
            shape="curved"
            elevated-hover
            class="dark:!bg-muted-900 relative z-10 h-full p-4 hover:!border-purple-500"
          >
            <div class="flex h-full flex-col items-center justify-center gap-2">
              <div
                class="nui-mask nui-mask-hexed relative flex h-16 w-16 shrink-0 items-center justify-center"
              >
                <div
                  class="animate-spin-slow absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-tr from-purple-100 to-purple-500 blur-sm transition-all duration-200 dark:from-purple-800"
                ></div>
                <div
                  class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-[60px] w-[60px] items-center justify-center bg-white"
                >
                  <Icon
                    name="fa6-brands:github"
                    class="relative -top-0.5 h-5 w-5 text-purple-500"
                  />
                </div>
              </div>
              <BaseText size="sm" class="text-muted-500 dark:text-muted-300"
                >Github Access</BaseText
              >
            </div>
          </BaseCard>
        </NuxtLink>
        <NuxtLink to="https://go.cssninja.io/discord" class="relative">
          <BaseCard
            shape="curved"
            elevated-hover
            class="dark:!bg-muted-900 relative z-10 h-full p-4 hover:!border-blue-500"
          >
            <div class="flex h-full flex-col items-center justify-center gap-2">
              <div
                class="nui-mask nui-mask-hexed relative flex h-16 w-16 shrink-0 items-center justify-center"
              >
                <div
                  class="animate-spin-slow absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-tr from-blue-100 to-blue-500 blur-sm transition-all duration-200 dark:from-blue-800"
                ></div>
                <div
                  class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-[60px] w-[60px] items-center justify-center bg-white"
                >
                  <Icon
                    name="fa6-brands:discord"
                    class="relative -top-0.5 h-5 w-5 text-blue-500"
                  />
                </div>
              </div>
              <BaseText size="sm" class="text-muted-500 dark:text-muted-300"
                >Discord Server</BaseText
              >
            </div>
          </BaseCard>
        </NuxtLink>
      </div>
      <NuxtLink to="https://tairo.cssninja.io/documentation" class="relative">
        <BaseCard
          shape="curved"
          elevated-hover
          class="dark:!bg-muted-900 hover:!border-primary-500 relative z-10 p-5"
        >
          <div
            class="gridlines relative mb-4 flex h-40 w-full items-center justify-center overflow-hidden"
          >
            <div
              class="nui-mask nui-mask-hexed relative mb-2 flex h-[84px] w-[84px] shrink-0 items-center justify-center"
            >
              <div
                class="animate-spin-slow from-primary-100 to-primary-500 dark:from-primary-800 absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-tr blur-sm transition-all duration-200"
              ></div>
              <div
                class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-[80px] w-[80px] items-center justify-center bg-white"
              >
                <Icon
                  name="ph:book-open-duotone"
                  class="text-primary-500 h-7 w-7"
                />
              </div>
            </div>
            <div
              class="dark:bg-muted-900 absolute -right-4 bottom-0 h-full w-24 scale-105 bg-white blur-lg"
            ></div>
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
      <div class="bg-muted-200 dark:bg-muted-800 h-px grow"></div>
      <span
        class="text-semibold text-muted-800d dark:text-muted-100 shrink px-4 font-sans text-lg font-semibold"
        >Getting started</span
      >
      <div class="bg-muted-200 dark:bg-muted-800 h-px grow"></div>
    </div>

    <div class="flex flex-col gap-6">
      <BaseCard class="dark:!bg-muted-900 p-6" shape="rounded">
        <BaseProse class="prose-p:my-0 max-w-full">
          <div>
            <div class="flex gap-2 sm:items-center">
              <Icon
                name="ph:number-circle-one-duotone"
                class="text-primary-500 h-8 w-8 shrink-0"
              />
              <p>
                Set default layout in
                <code>layouts/default.vue</code>
              </p>
            </div>
            <pre><code>...</code></pre>
          </div>
        </BaseProse>
      </BaseCard>
      <BaseCard class="dark:!bg-muted-900 p-6" shape="rounded">
        <BaseProse class="prose-p:my-0 max-w-full">
          <div>
            <div class="flex gap-2 sm:items-center">
              <Icon
                name="ph:number-circle-two-duotone"
                class="text-primary-500 h-8 w-8 shrink-0"
              />
              <p>
                Define your app settings in
                <code>app.config.ts</code>
                <small>(logo, name, sidebars, panels, ...)</small>
              </p>
            </div>
            <pre><code>export default defineAppConfig({{app.tairo}})</code></pre>
          </div>
        </BaseProse>
      </BaseCard>
      <BaseCard class="dark:!bg-muted-900 p-6" shape="rounded">
        <BaseProse class="prose-p:my-0 max-w-full">
          <div>
            <div class="flex gap-2 sm:items-center">
              <Icon
                name="ph:number-circle-three-duotone"
                class="text-primary-500 h-8 w-8 shrink-0"
              />
              <p>
                Create your first page
                <code>pages/index.vue</code>
              </p>
            </div>
            <pre><code>{{codePage}}</code></pre>
          </div>
        </BaseProse>
      </BaseCard>
      <BaseCard class="dark:!bg-muted-900 p-6" shape="rounded">
        <BaseProse class="prose-p:my-0 max-w-full">
          <div>
            <div class="flex gap-2 sm:items-center">
              <Icon
                name="ph:number-circle-four-duotone"
                class="text-primary-500 h-8 w-8 shrink-0"
              />
              <p>
                Customize tailwind settings in
                <code>tailwind.config.cjs</code>
                <small>(colors, fonts, ...)</small>
              </p>
            </div>
            <pre><code>{{codeTailwind}}</code></pre>
          </div>
        </BaseProse>
      </BaseCard>
      <BaseCard class="dark:!bg-muted-900 p-6" shape="rounded">
        <BaseProse class="prose-p:my-0 max-w-full">
          <div>
            <div class="flex gap-2 sm:items-center">
              <Icon
                name="ph:number-circle-five-duotone"
                class="text-primary-500 h-8 w-8 shrink-0"
              />
              <p>
                Customize nuxt settings in
                <code>nuxt.config.ts</code>
                <small>(seo meta, route rules, modules, ...)</small>
              </p>
            </div>
          </div>
        </BaseProse>
      </BaseCard>
    </div>
  </div>
</template>

<style scoped>
.gridlines {
  background-image: url('https://_zydimzpki.cssninja.io/img/illustrations/gridlines.svg');
}

.dark .gridlines {
  background-image: url('https://_zydimzpki.cssninja.io/img/illustrations/gridlines-predark.svg');
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
