<script setup lang="ts">
defineEmits<{
  (event: 'close'): void
}>()

const route = useRoute()

const { toggle } = useSidebar()
const { xl } = useTailwindBreakpoints()

function onLinkClick() {
  if (xl.value) {
    return
  }

  toggle()
}

const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation(queryContent('/documentation')),
)

const docNav = computed(
  () => navigation.value?.find((n) => n._path === '/documentation')?.children,
)
</script>

<template>
  <TairoSubsidebar>
    <template #header>
      <TairoSubsidebarHeader />
    </template>

    <div class="pt-2">
      <template v-for="link in docNav" :key="link?._path">
        <div
          v-if="!link.children"
          class="mb-1 flex min-h-[1.5rem] w-full items-center"
        >
          <NuxtLink
            :to="link._path"
            :class="[route.path === link._path && 'text-primary-500']"
            exact-active-class="text-primary-500"
            class="nui-focus text-muted-400 hover:text-primary-500 focus-visible:text-primary-500 group flex w-full flex-row items-center transition-colors duration-300 focus-within:outline-0 focus-visible:outline-1"
            @click.passive="onLinkClick"
          >
            <span class="font-sans text-[0.85rem]">{{ link?.title }}</span>
          </NuxtLink>
        </div>
        <div v-else>
          <DocSubsidebarCollapseLink :link="link" />
        </div>
      </template>
    </div>
  </TairoSubsidebar>
</template>
