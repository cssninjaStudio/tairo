<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    error?: any
  }>(),
  {
    /* This is a fake error */
    error: () => ({
      statusCode: 500,
      message: 'An internal test Server Error has occured',
      url: '/layouts/error-1',
      stack: [
        `Error`,
        `    at default (/home/cssninja/tairo/.demo/pages/layouts/error-1.vue:33:14)`,
        `    at resolvePropValue (/home/cssninja/tairo/node_modules/.pnpm/@vue+runtime-core@3.2.47/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:3944:63)`,
        `    at setFullProps (/home/cssninja/tairo/node_modules/.pnpm/@vue+runtime-core@3.2.47/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:3925:26)`,
        `    at initProps (/home/cssninja/tairo/node_modules/.pnpm/@vue+runtime-core@3.2.47/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:3759:5)`,
        `    at setupComponent (/home/cssninja/tairo/node_modules/.pnpm/@vue+runtime-core@3.2.47/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:7146:5)`,
        `    at renderComponentVNode (/home/cssninja/tairo/node_modules/.pnpm/@vue+server-renderer@3.2.47_vue@3.2.47/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:628:17)`,
        `    at renderVNode (/home/cssninja/tairo/node_modules/.pnpm/@vue+server-renderer@3.2.47_vue@3.2.47/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:755:22)`,
        `    at renderComponentSubTree (/home/cssninja/tairo/node_modules/.pnpm/@vue+server-renderer@3.2.47_vue@3.2.47/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:719:13)`,
        `    at renderComponentVNode (/home/cssninja/tairo/node_modules/.pnpm/@vue+server-renderer@3.2.47_vue@3.2.47/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:644:16)`,
        `    at renderVNode (/home/cssninja/tairo/node_modules/.pnpm/@vue+server-renderer@3.2.47_vue@3.2.47/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:755:22)`,
      ].join('\n'),
      statusMessage: 'Internal Server Error',
    }),
  },
)

definePageMeta({
  title: 'Error',
  layout: 'empty',
  preview: {
    title: 'Error',
    description: 'For system errors',
    categories: ['layouts'],
    src: '/img/screens/layouts-utility-error.png',
    srcDark: '/img/screens/layouts-utility-error-dark.png',
    order: 92,
  },
})

const title = computed(() => {
  if (props.error?.statusCode === 401) {
    return 'Not authorized'
  }

  if (props.error?.statusCode === 404) {
    return 'Page not found'
  }

  return 'Oops... Something went wrong'
})

const description = computed(() => {
  if (props.error?.statusCode === 401) {
    return 'You are not authorized to access this page.'
  }

  if (props.error?.statusCode === 404) {
    return 'We couldn\'t find the page you were looking for.'
  }

  return 'An error has occured. If the problem persists, please contact a system administrator or try again later.'
})

const handleError = () => clearError({ redirect: '/' })

// Show/hide demo stack trace
const showStackTrace = ref(false)
</script>

<template>
  <div class="bg-muted-50 dark:bg-muted-900 min-h-screen overflow-hidden px-4 md:px-6 lg:px-8 pb-20">
    <div class="mx-auto max-w-7xl">
      <div
        class="mx-auto mb-20 flex h-16 w-full max-w-4xl items-center justify-between"
      >
        <NuxtLink
          to="/"
          class="text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"
        >
          <TairoLogoText class="h-7" />
        </NuxtLink>
        <div class="flex items-center gap-4">
          <BaseThemeToggle />
        </div>
      </div>
      <BasePlaceholderPage
        :title="title"
        :subtitle="description"
        image-size="md"
        class="relative items-end!"
      >
        <template #image>
          <TairoLogo class="text-primary-500 mx-auto h-40 p-6" />
        </template>
        <div class="mt-4">
          <div
            class="text-muted-400/20 dark:text-muted-400/10 absolute inset-x-0 top-1/3 -translate-x-1/4 -translate-y-1/2 text-[13rem] font-bold sm:text-[20rem]"
          >
            <span>{{ props.error?.statusCode }}</span>
          </div>
          <BaseButton
            variant="primary"
            class="h-12! w-48 items-center gap-2"
            rounded="lg"
            @click="handleError"
          >
            <Icon name="feather:arrow-left" />
            Take me Back
          </BaseButton>
          <div class="mt-6 flex items-center justify-center">
            <BaseSwitchBall
              v-model="showStackTrace"
              :label="`${showStackTrace ? 'Hide' : 'Show'} Stacktrace (dev)`"
            />
          </div>
        </div>
      </BasePlaceholderPage>
      <div v-if="showStackTrace">
        <BaseCard
          v-focus
          rounded="lg"
          class="focus-visible:nui-focus nui-text-700 group relative mx-auto mt-6 max-w-3xl border-2 border-dashed p-8 hover:border-solid"
          tabindex="0"
        >
          <div
            class="mb-3 flex items-center justify-start gap-1 opacity-30 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100"
          >
            <BaseTag
              v-if="props.error.statusCode"
              size="sm"
            >
              {{ props.error.statusCode }}
            </BaseTag>
            <BaseTag
              v-if="props.error.url"
              size="sm"
            >
              {{ props.error.url }}
            </BaseTag>
            <BaseButton
              variant="muted"
              size="icon-md"
              class="ms-auto"
              @click="showStackTrace = false"
            >
              <Icon name="lucide:x" class="size-4" />
            </BaseButton>
          </div>
          <div class="mb-4 flex items-center gap-2">
            <BaseIconBox
              rounded="full"
              size="md"
            >
              <Icon name="ph:skull-duotone" class="size-6" />
            </BaseIconBox>
            <div>
              <h4
                class="text-destructive-500 font-mono text-lg font-medium [overflow-wrap:anywhere]"
              >
                {{ props.error.message }}
              </h4>
              <p class="nui-text-500 font-sans text-xs font-medium">
                This is a demo stacktrace, you won't see it in production.
              </p>
            </div>
          </div>
          <!-- eslint-disable vue/no-v-html -->
          <div
            v-if="props.error.stack"
            class="mt-6 overflow-auto whitespace-pre p-2 font-mono text-sm opacity-60 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100"
            v-html="props.error.stack"
          />
          <!-- eslint-enable vue/no-v-html -->
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<style>
@reference '~/assets/main.css';

.stack {
  @apply text-sm;
}
.stack.internal {
  @apply opacity-100 ps-4 text-xs;
}
</style>
