<script setup lang="ts">
const { isDark } = useDarkmode()
const isSidebarOpened = ref(false)
const isLanguagePanelOpened = ref(false)
const isActivityPanelOpened = ref(false)
const isSearchPanelOpened = ref(false)
const isCircularMenuOpened = ref(false)
</script>

<template>
  <Head>
    <Title>Tairo</Title>
    <Meta name="description" content="title" />
    <Link rel="icon" type="image/x-icon" href="/img/favicon.png" />
  </Head>
  <div class="bg-slate-100 dark:bg-slate-900" :class="isDark ? 'dark' : ''">
    <NavigationSidebar
      :active="isSidebarOpened"
      @open="isSidebarOpened = true"
      @close="isSidebarOpened = false"
      @search="isSearchPanelOpened = true"
    />
    <div
      class="relative px-4 xl:px-16 min-h-screen w-full bg-slate-100 dark:bg-slate-900 transition-all duration-300"
      :class="
        isSidebarOpened
          ? 'xl:max-w-[calc(100%_-_320px)] xl:ml-[320px]'
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
