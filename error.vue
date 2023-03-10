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

  return 'Internal server error'
})

const description = computed(() => {
  if (props.error?.statusCode === 401) {
    return 'You are not authorized to access this page.'
  }

  if (props.error?.statusCode === 404) {
    return "We couldn't find the page you were looking for."
  }

  return 'Something went wrong.'
})

const app = useAppConfig()
const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <TairoLayout :sidebar="false">
    <template #toolbar-title>{{ app.tairo.title }}</template>

    <BasePlaceholderPage
      :title="title"
      :subtitle="description"
      class="min-h-[250px] !items-end"
    >
      <BaseButton class="mt-6 items-center gap-2" @click="handleError">
        <Icon name="feather:arrow-left" />
        Back to home
      </BaseButton>
    </BasePlaceholderPage>

    <DevOnly>
      <BaseCard class="nui-text-700 mx-auto mt-6 max-w-3xl p-6">
        <div class="flex justify-between">
          <BaseHeading>Development info</BaseHeading>

          <div class="mb-6 flex gap-1">
            <BaseTag color="danger" condensed>
              {{ props.error.statusCode }}
            </BaseTag>
            <BaseTag color="danger" flavor="outline" condensed>
              {{ props.error.url }}
            </BaseTag>
          </div>
        </div>
        <div>
          <div class="text-danger-500 flex items-center gap-2">
            <Icon name="bi:exclamation-octagon" class="text-base" />
            <span class="font-mono text-lg font-bold">
              {{ props.error.message }}
            </span>
          </div>
          <!-- eslint-disable vue/no-v-html -->
          <div class="overflow-auto font-mono" v-html="props.error.stack"></div>
          <!-- eslint-enable vue/no-v-html -->
        </div>
      </BaseCard>
    </DevOnly>
  </TairoLayout>
</template>

<style>
.stack {
  @apply text-sm;
}
.stack.internal {
  @apply opacity-75 pl-4 text-xs;
}
</style>
