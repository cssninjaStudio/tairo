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

  return 'Please try again later.'
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
</script>

<template>
  <TairoLayout>
    <template #toolbar-title>{{ app.tairo.title }}</template>

    <BasePlaceholderPage
      :title="title"
      :subtitle="description"
      class="!min-h-0 !items-end"
    >
      <template #image>
        <component
          :is="resolveComponent(app.tairo.error.logo.component)"
          v-if="app.tairo.error?.logo?.component"
          v-bind="app.tairo.error.logo.props"
        ></component>
      </template>

      <BaseButton class="mt-6 items-center gap-2" @click="handleError">
        <Icon name="feather:arrow-left" />
        Back to home
      </BaseButton>

      <DevOnly>
        <BaseButton
          flavor="pastel"
          color="primary"
          class="group mt-6 ml-4 items-center gap-2"
          @click="retry"
        >
          <Icon name="feather:loader" class="group-hover:animate-spin" />
          Retry
        </BaseButton>
      </DevOnly>
    </BasePlaceholderPage>

    <BaseCard
      v-focus
      class="nui-focus nui-text-700 group mx-auto mt-8 max-w-3xl p-6"
      tabindex="0"
    >
      <div class="text-danger-500 mb-1 flex items-start gap-2">
        <div
          class="mt-1 shrink-0 opacity-30 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100"
        >
          <Icon
            name="ph:circle-wavy-warning-duotone"
            class="text-danger-600 text-2xl group-hover:animate-pulse group-focus:animate-pulse"
          />
        </div>
        <div>
          <span class="font-mono text-lg font-bold [overflow-wrap:anywhere]">
            {{ props.error.message }}
          </span>
          <div
            class="mt-2 flex gap-1 opacity-30 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100"
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
          </div>
        </div>
      </div>
      <!-- eslint-disable vue/no-v-html -->
      <div
        v-if="props.error.stack"
        class="mt-6 overflow-auto whitespace-pre p-2 font-mono opacity-60 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100"
        v-html="props.error.stack"
      ></div>
      <!-- eslint-enable vue/no-v-html -->
    </BaseCard>
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
