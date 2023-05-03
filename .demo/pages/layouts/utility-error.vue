<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    error: any
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
    return "We couldn't find the page you were looking for."
  }

  return 'An error has occured. If the problem persists, please contact a system administrator or try again later.'
})

const app = useAppConfig()
const handleError = () => clearError({ redirect: '/' })
const retry = () => clearError()

// Show/hide demo stack trace
const showStackTrace = ref(false)
</script>

<template>
  <TairoSidebarLayout>
    <template #toolbar-title>{{ app.tairo.title }}</template>

    <BasePlaceholderPage
      :title="title"
      :subtitle="description"
      image-size="md"
      class="relative !items-end"
    >
      <template #image>
        <component
          :is="resolveComponentOrNative(app.tairo.error.logo.component)"
          v-if="app.tairo.error?.logo?.component"
          v-bind="app.tairo.error.logo.props"
        ></component>
      </template>

      <div class="mt-4">
        <div
          class="text-muted-400/20 dark:text-muted-400/10 absolute inset-x-0 top-1/3 -translate-y-1/2 text-[13rem] font-bold sm:text-[20rem]"
        >
          <span>{{ props.error?.statusCode }}</span>
        </div>
        <BaseButton
          color="primary"
          class="!h-12 w-48 items-center gap-2"
          shape="curved"
          @click="handleError"
        >
          <Icon name="feather:arrow-left" />
          Take me Back
        </BaseButton>
        <div class="mt-6 flex items-center justify-center">
          <BaseSwitchBall
            v-model="showStackTrace"
            color="danger"
            :label="`${showStackTrace ? 'Hide' : 'Show'} Stacktrace (dev)`"
          />
        </div>
      </div>
    </BasePlaceholderPage>

    <div v-if="showStackTrace">
      <BaseCard
        v-focus
        shape="curved"
        class="nui-focus nui-text-700 group relative mx-auto mt-6 max-w-3xl border-2 border-dashed p-8 hover:border-solid"
        tabindex="0"
      >
        <div
          class="mb-3 flex items-center justify-start gap-1 opacity-30 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100"
        >
          <BaseTag v-if="props.error.statusCode" color="danger" condensed>
            {{ props.error.statusCode }}
          </BaseTag>
          <BaseTag
            v-if="props.error.url"
            color="danger"
            flavor="outline"
            condensed
          >
            {{ props.error.url }}
          </BaseTag>
          <BaseButtonClose
            color="muted"
            class="ms-auto"
            @click="showStackTrace = false"
          />
        </div>
        <div class="mb-4 flex items-center gap-2">
          <BaseIconBox color="danger" shape="full" size="md">
            <Icon name="ph:skull-duotone" class="h-6 w-6" />
          </BaseIconBox>
          <div>
            <h4
              class="text-danger-500 font-mono text-lg font-medium [overflow-wrap:anywhere]"
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
        ></div>
        <!-- eslint-enable vue/no-v-html -->
      </BaseCard>
    </div>
  </TairoSidebarLayout>
</template>

<style>
.stack {
  @apply text-sm;
}
.stack.internal {
  @apply opacity-100 ps-4 text-xs;
}
</style>
