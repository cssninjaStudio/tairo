<script setup lang="ts">
import { useSidebar } from '../composables/sidebar'

const props = withDefaults(
  defineProps<{
    sidebar?: boolean
    horizontalScroll?: boolean
  }>(),
  {
    sidebar: true,
  },
)

const app = useAppConfig()
const { hasSubsidebar } = useSidebar()

const route = useRoute()

const showNavBurger = computed(() => {
  return (
    props.sidebar && app.tairo.toolbar?.showNavBurger && hasSubsidebar.value
  )
})
</script>

<template>
  <div
    class="relative z-50 mb-5 flex h-16 items-center gap-2"
    :class="props.horizontalScroll && 'pr-4 xl:pr-10'"
  >
    <TairoSidebarBurger v-if="showNavBurger" class="-ml-3" />

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
