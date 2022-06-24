<script setup lang="ts">
const isSidebarOpened = useSidebarOpened()
const isLanguagePanelOpened = useLanguagePanelOpened()
const isActivityPanelOpened = useActivityPanelOpened()
const isSearchPanelOpened = useSearchPanelOpened()
const isCircularMenuOpened = useCircularMenuOpened()
</script>

<template>
  <div class="bg-slate-100 dark:bg-slate-900">
    <NavigationSidebar />
    <div
      class="relative px-4 xl:px-16 min-h-screen w-full bg-slate-100 dark:bg-slate-900 transition-all duration-300"
      :class="
        isSidebarOpened
          ? 'xl:max-w-[calc(100%_-_300px)] xl:ml-[300px]'
          : 'xl:max-w-[calc(100%_-_80px)] xl:ml-[80px]'
      "
    >
      <div class="w-full max-w-6xl mx-auto">
        <NavigationToolbar
          :toggled="isSidebarOpened"
          @toggled="isSidebarOpened = !isSidebarOpened"
          @language="isLanguagePanelOpened = true"
          @activity="isActivityPanelOpened = true"
        />
        <slot></slot>
      </div>
    </div>

    <PanelLanguage
      :active="isLanguagePanelOpened"
      @close="isLanguagePanelOpened = false"
    />

    <PanelActivity
      :active="isActivityPanelOpened"
      @close="isActivityPanelOpened = false"
    />

    <PanelSearch
      :active="isSearchPanelOpened"
      @close="isSearchPanelOpened = false"
    />

    <NavigationCircularMenu
      :active="isCircularMenuOpened"
      @triggered="isCircularMenuOpened = !isCircularMenuOpened"
      @closed="isCircularMenuOpened = false"
      @language="isLanguagePanelOpened = true"
      @activity="isActivityPanelOpened = true"
    />
  </div>
</template>
