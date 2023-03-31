<script setup lang="ts">
definePageMeta({
  title: 'Error',
  layout: 'empty',
})

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

// this is a local directive (it begins with V..., usable with v-focus)
// that is used to force the focus on input when mounted
const VFocus = {
  mounted(el: HTMLInputElement) {
    el.focus()
  },
}

// Show/hide demo stack trace
const showStackTrace = ref(false)
</script>

<template>
  <TairoLayout>
    <template #toolbar-title>{{ app.tairo.title }}</template>

    <BasePlaceholderPage
      :title="title"
      :subtitle="description"
      image-size="md"
      class="!items-end relative"
    >
      <template #image>
        <component
          :is="resolveComponent(app.tairo.error.logo.component)"
          v-if="app.tairo.error?.logo?.component"
          v-bind="app.tairo.error.logo.props"
        ></component>
      </template>

      <div class="mt-4">
        <div
          class="absolute top-1/3 -translate-y-1/2 inset-x-0 sm:text-[20rem] text-[13rem] font-bold text-muted-400/20 dark:text-muted-400/10"
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
        <div class="flex items-center justify-center mt-6">
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
        class="relative nui-focus nui-text-700 border-2 border-dashed hover:border-solid group mx-auto mt-6 max-w-3xl p-8"
        tabindex="0"
      >
        <div
          class="flex items-center justify-start gap-1 mb-3 opacity-30 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100"
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
            class="ml-auto"
            @click="showStackTrace = false"
          />
        </div>
        <div class="flex items-center gap-2 mb-4">
          <BaseIconBox color="danger" shape="full" size="md">
            <Icon name="ph:skull-duotone" class="w-6 h-6" />
          </BaseIconBox>
          <div>
            <h4
              class="font-mono text-lg font-medium text-danger-500 [overflow-wrap:anywhere]"
            >
              {{ props.error.message }}
            </h4>
            <p class="font-sans font-medium text-xs nui-text-500">
              This is a demo stacktrace, you won't see it in production.
            </p>
          </div>
        </div>

        <!-- eslint-disable vue/no-v-html -->
        <div
          v-if="props.error.stack"
          class="text-sm mt-6 overflow-auto whitespace-pre p-2 font-mono opacity-60 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100"
          v-html="props.error.stack"
        ></div>
        <!-- eslint-enable vue/no-v-html -->
      </BaseCard>
    </div>
  </TairoLayout>
</template>

<style>
.stack {
  @apply text-sm;
}
.stack.internal {
  @apply opacity-100 pl-4 text-xs;
}
</style>
