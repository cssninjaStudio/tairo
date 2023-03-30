<script setup lang="ts">
const props = defineProps<{
  error: any
}>()

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
    return "We couldn't find the page you were looking for, please contact a system administrator or try again later."
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
  <TairoLayout :sidebar="false">
    <template #toolbar-title>{{ app.tairo.title }}</template>

    <div class="pb-16">
      <BasePlaceholderPage
        :title="title"
        :subtitle="description"
        image-size="md"
        class="relative !items-end"
      >
        <template #image>
          <component
            :is="
              app.tairo.error.logo.resolve === false
                ? app.tairo.error.logo.component
                : resolveComponent(app.tairo.error.logo.component)
            "
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
            shape="curved"
            class="!h-12 w-48 items-center gap-2"
            @click="handleError"
          >
            <Icon name="feather:arrow-left" />
            Back to home
          </BaseButton>
          <DevOnly>
            <div class="mt-6 flex items-center justify-center">
              <BaseSwitchBall
                v-model="showStackTrace"
                color="danger"
                :label="`${showStackTrace ? 'Hide' : 'Show'} Stacktrace (dev)`"
              />
            </div>
          </DevOnly>
        </div>
      </BasePlaceholderPage>

      <DevOnly>
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
                class="ml-auto"
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
      </DevOnly>
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
