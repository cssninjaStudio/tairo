<script setup lang="ts">
import { useLayoutSidebarContext } from '../composables/sidebar'

const { item } = defineProps<{
  item: any
}>()

const { currentMenu } = useLayoutSidebarContext()
const open = ref(false)
</script>

<template>
  <CollapsibleRoot
    v-if="item.children"
    v-model:open="open"
    class="group w-full"
  >
    <CollapsibleTrigger
      class="group/button cursor-pointer flex w-full items-center justify-between rounded-lg group-data-[state=open]:bg-muted-100 dark:group-data-[state=open]:bg-muted-900 group-data-[state=open]:text-muted-900 dark:group-data-[state=open]:text-white group-data-[state=closed]:text-muted-500 dark:group-data-[state=closed]:text-muted-400 group-data-[state=closed]:hover:bg-muted-100 dark:group-data-[state=closed]:hover:bg-muted-900 group-data-[state=closed]:hover:text-muted-900 dark:group-data-[state=closed]:hover:text-muted-100"
    >
      <div
        class="z-10 flex h-10 w-full items-center pe-4 ps-2"
      >
        <Icon
          v-if="item.icon"
          :name="item.icon"
          class="size-4 text-muted-500 dark:text-muted-400"
        />
        <span class="ms-2 text-sm">{{ item.name }}</span>
      </div>
      <div
        class="me-2 flex size-6 shrink-0 items-center justify-center rounded-lg text-muted-500 transition group-data-[state=open]:-rotate-90"
      >
        <Icon
          name="lucide:chevron-left"
          class="size-4 text-muted-500 dark:text-muted-400"
        />
      </div>
    </CollapsibleTrigger>
    <CollapsibleContent class="flex w-full flex-col overflow-hidden ps-1.5 transition-all">
      <div
        v-for="child in item.children"
        :key="child.name"
        class="relative mt-1"
      >
        <NuxtLink
          :to="child.to"
          class="relative flex gap-x-3 h-8 w-full items-center rounded-lg px-3 text-muted-500 hover:bg-muted-100 hover:text-muted-900 dark:hover:text-white dark:hover:bg-muted-900"
          exact-active-class="!bg-muted-800 dark:!bg-muted-900 !text-muted-100"
        >
          <span class="block size-1 rounded-full bg-muted-300 dark:bg-muted-800" />
          <span class="text-[0.8rem]">{{ child.name }}</span>
        </NuxtLink>
      </div>
    </CollapsibleContent>
  </CollapsibleRoot>
  <NuxtLink
    v-else
    :to="item.to"
    class="z-10 flex h-10 w-full items-center rounded-lg pe-4 ps-2 text-muted-500 hover:bg-muted-100 hover:text-muted-900 dark:hover:text-white dark:hover:bg-muted-900/50"
  >
    <Icon
      v-if="item.icon"
      :name="item.icon"
      class="size-4 text-muted-500 dark:text-muted-400"
    />
    <span class="ms-2 text-sm">{{ item.name }}</span>
  </NuxtLink>
</template>
