<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    collapse?: boolean
    horizontalScroll?: boolean
  }>(),
  {
    collapse: true,
  },
)

const app = useAppConfig()

const route = useRoute()

const showNavBurger = computed(() => {
  return props.collapse && app.tairo.toolbar?.showNavBurger
})
</script>

<template>
  <div
    class="relative z-50 mb-5 flex h-16 items-center gap-2"
    :class="props.horizontalScroll && 'pr-4 xl:pr-10'"
  >
    <TairoCollapseBurger v-if="showNavBurger" class="-ml-3" />

    <BaseHeading
      v-if="(app.tairo.toolbar as any).showTitle"
      as="h1"
      size="2xl"
      weight="light"
      class="text-muted-800 hidden dark:text-white md:block"
    >
      <slot name="title">{{ route.meta.title }}</slot>
    </BaseHeading>

    <div class="ml-auto"></div>
    <template v-for="tool of (app.tairo.toolbar as any).tools">
      <component
        :is="resolveComponent(tool.component)"
        v-if="tool.component"
        :key="tool.component"
        v-bind="tool.props"
      />
    </template>
  </div>
</template>
