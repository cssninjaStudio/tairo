<template>
  <TairoSidebarLayout>
    <TairoSidebar>
      <template #logo>
        <TairoLogo class="size-8 text-primary-heavy dark:text-primary-light" />
      </template>
    </TairoSidebar>
    <TairoSidebarLayoutContent>
      <slot />
    </TairoSidebarLayoutContent>
    <TairoPanels />
  </TairoSidebarLayout>
</template>
