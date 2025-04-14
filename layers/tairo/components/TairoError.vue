<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  title?: string
  description?: string
  error: NuxtError
}>()

const title = computed(() => {
  if (props.title !== undefined) {
    return props.title
  }

  if (props.error?.statusCode === 401) {
    return 'Not authorized'
  }

  if (props.error?.statusCode === 404) {
    return 'Page not found'
  }

  return 'Oops... Something went wrong'
})

const description = computed(() => {
  if (props.description !== undefined) {
    return props.description
  }

  if (props.error?.statusCode === 401) {
    return 'You are not authorized to access this page.'
  }

  if (props.error?.statusCode === 404) {
    return 'We couldn\'t find the page you were looking for, please contact a system administrator or try again later.'
  }

  return 'An error has occured. If the problem persists, please contact a system administrator or try again later.'
})

const handleError = () => clearError({ redirect: '/' })
const retry = () => clearError()

// Show/hide demo stack trace
const showStackTrace = ref(true)
</script>

<template>
  <div class="pb-16">
    <BasePlaceholderPage
      :title="title"
      :subtitle="description"
      image-size="md"
      class="relative items-end!"
    >
      <template #image>
        <slot />
      </template>

      <div class="mt-4">
        <div
          class="flex items-center justify-center text-muted-400/20 dark:text-muted-400/10 absolute inset-x-0 top-1/3 -translate-y-1/2 text-[13rem] font-bold sm:text-[20rem]"
        >
          <span>{{ props.error?.statusCode }}</span>
        </div>
        <div
          class="mx-auto flex w-full max-w-xs items-center justify-center gap-2"
        >
          <BaseButton
            rounded="lg"
            class="mx-auto h-12! w-full max-w-[160px] items-center gap-2"
            @click="handleError"
          >
            <Icon name="feather:arrow-left" />
            Back to home
          </BaseButton>
          <DevOnly>
            <BaseButton
              variant="muted"
              rounded="lg"
              class="mx-auto h-12! w-full max-w-[160px]"
              @click="retry"
            >
              <Icon name="feather:refresh-cw" class="size-3" />
              <span>Clear Error</span>
            </BaseButton>
          </DevOnly>
        </div>
        <DevOnly>
          <div class="mt-6 flex items-center justify-center">
            <BaseSwitchBall
              v-model="showStackTrace"
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
                This is a dev only stacktrace, you won't see it in production.
              </p>
            </div>
          </div>

          <!-- eslint-disable vue/no-v-html -->
          <div
            v-if="props.error.stack"
            class="mt-6 overflow-auto whitespace-pre p-2 font-mono text-sm opacity-60 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100 **:[.stack]:text-sm **:[.stack.internal]:opacity-100 **:[.stack.internal]:ps-4 **:[.stack.internal]:text-xs"
            v-html="props.error.stack"
          />
          <!-- eslint-enable vue/no-v-html -->
        </BaseCard>
      </div>
    </DevOnly>
  </div>
</template>
