<script setup lang="ts">
import { onKeyStroke } from '@vueuse/core'
import type { Directive } from 'vue'

const sidebar = reactive(useSidebar())
const { displayMode, isSearching, filter, reset } = useDocumentationMenu()

// this is a dynamic directive only available in this component with v-focus
const vFocus: Directive = {
  mounted(el: HTMLElement) {
    if (el.tagName.toLowerCase() === 'input') {
      el.focus()
      return
    }
    const input = el.getElementsByTagName('input')[0]
    if (input) {
      input.focus()
    }
  },
}

function onBlur() {
  setTimeout(() => {
    if (!filter.value) {
      isSearching.value = false
    }
  }, 61)
}

onKeyStroke(['Escape'], () => {
  if (isSearching.value) {
    reset()
  }
})
</script>

<template>
  <div>
    <form v-if="isSearching" class="px-6 py-4" @submit.prevent="onBlur">
      <BaseInput
        v-model="filter"
        v-focus
        shape="full"
        icon="lucide:search"
        :placeholder="
          displayMode === 'component'
            ? 'Ex: BaseInput, BaseCard, ...'
            : 'Ex: Icons, Typography...'
        "
        condensed
        @blur="onBlur"
      >
        <template #label>
          <div class="flex justify-between">
            <span>Search components</span>
            <button
              v-if="filter"
              type="reset"
              class="font-medium hover:text-primary-400"
              @click="reset"
            >
              cancel
            </button>
          </div>
        </template>
      </BaseInput>
    </form>
    <template v-else>
      <div class="flex w-full items-center px-6">
        <div
          class="w-full h-16 flex items-center font-heading text-lg font-light capitalize text-muted-700 dark:text-white"
        >
          <span>Components</span>
          <BaseButtonIcon
            class="ml-auto h-6 w-6 shrink-0 border-0 !p-0 !bg-transparent focus:z-10"
            @click="isSearching = true"
          >
            <Icon name="lucide:search" class="h-4 w-4 text-muted-400" />
          </BaseButtonIcon>
        </div>
        <button
          type="button"
          class="ml-auto flex h-10 w-10 items-center justify-center rounded-full text-muted-400 transition-colors duration-300 hover:bg-muted-100 hover:text-muted-600 xl:hidden"
          @click="sidebar.toggle"
        >
          <Icon name="feather:chevron-left" class="h-6 w-6" />
        </button>
      </div>
      <div class="pb-5">
        <BaseFocusLoop
          class="ml-6 max-w-[160px] flex items-end p-1 rounded-lg bg-muted-200 dark:bg-muted-700"
        >
          <BaseButtonAction
            shape="rounded"
            class="flex-1 focus:z-10"
            :class="displayMode === 'category' && 'dark:!bg-muted-800'"
            :muted="displayMode !== 'category'"
            @click="displayMode = 'category'"
          >
            <span class="text-xs">Topics</span>
          </BaseButtonAction>
          <BaseButtonAction
            shape="rounded"
            class="flex-1 focus:z-10"
            :class="displayMode === 'component' && 'dark:!bg-muted-800'"
            :muted="displayMode !== 'component'"
            @click="displayMode = 'component'"
          >
            <span class="text-xs">Names</span>
          </BaseButtonAction>
        </BaseFocusLoop>
      </div>
    </template>
  </div>
</template>
