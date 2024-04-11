<script setup lang="ts">
import { useCollapse } from '../composables/collapse'

const { isOpen, isMobileOpen, menuItems } = useCollapse()
const app = useAppConfig()

const startMenuItems = computed(
  () =>
    menuItems.value?.filter(
      sidebar => !sidebar.position || sidebar.position === 'start',
    ),
)
const endMenuItems = computed(
  () => menuItems.value?.filter(sidebar => sidebar.position === 'end'),
)
</script>

<template>
  <div
    class="dark:bg-muted-800 border-muted-200 dark:border-muted-700 fixed start-0 top-0 z-[60] flex h-full flex-col border-r bg-white transition-all duration-300"
    :class="[
      !isOpen ? 'w-[80px]' : 'w-[280px]',
      isMobileOpen
        ? 'translate-x-0 lg:translate-x-0'
        : '-translate-x-full lg:translate-x-0',
    ]"
  >
    <!--Header-->
    <slot name="header">
      <component
        :is="
          resolveComponentOrNative(
            app.tairo?.collapse?.navigation?.header?.component,
          )
        "
        v-if="app.tairo?.collapse?.navigation?.header?.component"
      />
    </slot>
    <!--Body-->
    <div
      class=" relative flex w-full grow flex-col py-6"
      :class="!isOpen ? 'px-4' : 'px-6 nui-slimscroll overflow-y-auto'"
    >
      <!--Menu-->
      <ul v-if="startMenuItems?.length" class="space-y-2">
        <!--Menu item-->
        <li v-for="(item, index) in startMenuItems" :key="index">
          <component
            :is="resolveComponentOrNative(item?.component?.name)"
            v-if="item?.component?.name"
            v-bind="item?.component?.props"
          />
          <TairoCollapseNavigationCollapseLinks
            v-else-if="item.children"
            :item="item"
            :expanded="isOpen"
            @clicked="isOpen = true"
          />
          <NuxtLink
            v-else-if="item.to"
            :to="item.to"
            :data-nui-tooltip="isOpen ? undefined : item.name"
            data-nui-tooltip-position="end"
            exact-active-class="!bg-primary-500/10 dark:!bg-primary-500/20 !text-primary-500 dark:!text-primary-500"
            class="nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300"
            :class="!isOpen ? 'px-1 justify-center' : 'px-4'"
          >
            <Icon :name="item.icon.name" :class="item.icon.class" />
            <span
              class="whitespace-nowrap font-sans text-sm"
              :class="!isOpen ? 'hidden' : 'block'"
            >
              {{ item.name }}
            </span>
          </NuxtLink>
          <div
            v-else-if="item.divider"
            class="border-muted-200 dark:border-muted-700 my-3 h-px w-full border-t"
          />
          <button
            v-else
            class="nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex w-full cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300"
            :class="!isOpen ? 'px-1 justify-center' : 'px-4'"
            @click="item.click"
          >
            <Icon :name="item.icon.name" :class="item.icon.class" />
            <span
              class="whitespace-nowrap font-sans text-sm"
              :class="!isOpen ? 'hidden' : 'block'"
            >
              {{ item.name }}
            </span>
          </button>
        </li>
      </ul>
      <div class="mb-2 grow" />
      <!--Menu-->
      <ul v-if="endMenuItems?.length" class="space-y-2">
        <!--Menu item-->
        <li v-for="(item, index) in endMenuItems" :key="index">
          <component
            :is="resolveComponentOrNative(item?.component?.name)"
            v-if="item?.component?.name"
            v-bind="item?.component?.props"
          />
          <TairoCollapseNavigationCollapseLinks
            v-else-if="item.children"
            :item="item"
            :expanded="isOpen"
            @clicked="isOpen = true"
          />
          <NuxtLink
            v-else-if="item.to"
            :to="item.to"
            exact-active-class="!bg-primary-500/10 dark:!bg-primary-500/20 !text-primary-500 dark:!text-primary-500"
            class="nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300"
            :class="!isOpen ? 'px-1 justify-center' : 'px-4'"
          >
            <Icon :name="item.icon.name" :class="item.icon.class" />
            <span
              class="whitespace-nowrap font-sans text-sm"
              :class="!isOpen ? 'hidden' : 'block'"
            >
              {{ item.name }}
            </span>
          </NuxtLink>
          <div
            v-else-if="item.divider"
            class="border-muted-200 dark:border-muted-700 my-3 h-px w-full border-t"
          />
          <button
            v-else
            class="nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex w-full cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300"
            :class="!isOpen ? 'px-1 justify-center' : 'px-4'"
            @click="item.click"
          >
            <Icon :name="item.icon.name" :class="item.icon.class" />
            <span
              class="whitespace-nowrap font-sans text-sm"
              :class="!isOpen ? 'hidden' : 'block'"
            >
              {{ item.name }}
            </span>
          </button>
        </li>
      </ul>
    </div>
    <!--Footer-->
    <slot name="footer">
      <component
        :is="
          resolveComponentOrNative(
            app.tairo?.collapse?.navigation?.footer?.component,
          )
        "
        v-if="app.tairo?.collapse?.navigation?.footer?.component"
      />
    </slot>
  </div>
</template>
