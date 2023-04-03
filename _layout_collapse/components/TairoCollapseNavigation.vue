<script setup lang="ts">
import { useCollapse } from '../composables/collapse'

const collapse = reactive(useCollapse())
</script>

<template>
  <div
    class="dark:bg-muted-800 border-muted-200 dark:border-muted-700 fixed left-0 top-0 z-[60] h-full border-r bg-white transition-all duration-300"
    :class="[
      !collapse.isOpen ? 'w-[80px]' : 'w-[250px]',
      collapse.isMobileOpen
        ? 'translate-x-0 lg:translate-x-0'
        : '-translate-x-full lg:translate-x-0',
    ]"
  >
    <!--Header-->
    <div class="flex h-16 w-full items-center justify-between px-6">
      <slot></slot>

      <!--Fold button-->
      <button
        type="button"
        class="nui-mask nui-mask-blob hover:bg-muted-200 dark:hover:bg-muted-700/60 text-muted-500 dark:text-muted-400 hidden h-10 w-10 cursor-pointer items-center justify-center transition-colors duration-300"
        :class="!collapse.isOpen ? 'hidden' : 'lg:flex'"
      >
        <Icon :name="collapse.header.icon.name" class="h-4 w-4" />
      </button>

      <!--Mobile button-->
      <button
        type="button"
        class="nui-mask nui-mask-blob hover:bg-muted-200 dark:hover:bg-muted-800 text-muted-700 dark:text-muted-400 flex h-10 w-10 cursor-pointer items-center justify-center transition-colors duration-300 lg:hidden"
        @click="collapse.isMobileOpen = false"
      >
        <Icon name="lucide:arrow-left" class="h-5 w-5" />
      </button>
    </div>
    <!--Body-->
    <div
      class="slimscroll relative h-[calc(100%_-_8rem)] w-full overflow-y-auto py-6"
      :class="!collapse.isOpen ? 'px-4' : 'px-6'"
    >
      <!--Menu-->
      <ul id="sidebar-menu" class="space-y-2">
        <!--Menu item-->
        <li v-for="(item, index) in collapse.menuItems" :key="index">
          <TairoCollapseNavigationCollapseLinks
            v-if="item.children"
            :item="item"
            :expanded="collapse.isOpen"
            @clicked="collapse.isOpen = true"
          />
          <NuxtLink
            v-else-if="item.to"
            :to="item.to"
            exact-active-class="!bg-primary-500/10 dark:!bg-primary-500/20 !text-primary-500 dark:!text-primary-500"
            class="nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300"
            :class="!collapse.isOpen ? 'px-1 justify-center' : 'px-4'"
          >
            <Icon :name="item.icon.name" :class="item.icon.class" />
            <span
              class="whitespace-nowrap font-sans text-sm"
              :class="!collapse.isOpen ? 'hidden' : 'block'"
            >
              {{ item.name }}
            </span>
          </NuxtLink>
          <div
            v-else-if="item.divider"
            class="border-muted-200 dark:border-muted-700 my-3 h-px w-full border-t"
          ></div>
          <button
            v-else
            class="nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex w-full cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300"
            :class="!collapse.isOpen ? 'px-1 justify-center' : 'px-4'"
          >
            <Icon :name="item.icon.name" :class="item.icon.class" />
            <span
              class="whitespace-nowrap font-sans text-sm"
              :class="!collapse.isOpen ? 'hidden' : 'block'"
            >
              {{ item.name }}
            </span>
          </button>
        </li>
      </ul>
    </div>
    <!--Footer-->
    <div
      class="flex h-16 w-full items-center gap-4 transition-all duration-150"
      :class="!collapse.isOpen ? 'px-2 justify-center' : 'px-6'"
    >
      <!--Account menu-->
      <component
        :is="resolveComponent(collapse.footer?.account.component)"
        v-if="collapse.footer?.account?.component"
      ></component>
      <span
        class="text-muted-500 dark:text-muted-400/80 whitespace-nowrap font-sans text-sm"
        :class="!collapse.isOpen ? 'hidden' : 'block'"
      >
        {{ collapse.footer?.account?.label }}
      </span>
    </div>
  </div>
</template>
