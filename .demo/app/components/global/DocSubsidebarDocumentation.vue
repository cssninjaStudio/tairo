<script setup lang="ts">
defineEmits<{
  close: []
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

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('docs'))

const docNav = computed(
  () => navigation.value?.find(n => n.path === '/documentation')?.children,
)
</script>

<template>
  <TairoSubsidebar>
    <template #header>
      <TairoSubsidebarHeader />
    </template>

    <div class="pt-2">
      <template v-for="link in docNav" :key="link?.path">
        <div
          v-if="!link.children"
          class="mb-1 flex min-h-6 w-full items-center"
        >
          <NuxtLink
            :to="link.path"
            :class="[route.path === link.path && 'text-primary-500']"
            exact-active-class="text-primary-500"
            class="focus-visible:nui-focus text-muted-400 hover:text-primary-500 focus-visible:text-primary-500 group flex w-full flex-row items-center transition-colors duration-300 focus-within:outline-0 focus-visible:outline-1"
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
