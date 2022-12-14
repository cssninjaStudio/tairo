<script setup lang="ts">
import { onKeyStroke } from '@vueuse/core'
import type { Directive } from 'vue'

const { toggleSidebar } = useSidebar()
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

const onBlur = () => {
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
        icon="lucide:search"
        :placeholder="
          displayMode === 'component'
            ? 'ex: BaseInput, BaseCard, ...'
            : 'ex: Icons, Typography...'
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
      <div class="flex w-full items-center px-6 pt-[8px] pb-[4px]">
        <div
          class="w-full flex items-center font-heading text-lg font-semibold capitalize text-muted-700 dark:text-white"
        >
          <span>Components</span>
          <BaseButtonIcon
            class="ml-auto h-6 w-6 border-0 p-0 focus:z-10"
            @click="isSearching = true"
          >
            <Icon name="lucide:search" class="h-4 w-4" />
          </BaseButtonIcon>
        </div>
        <button
          type="button"
          class="ml-auto flex h-10 w-10 items-center justify-center rounded-full text-muted-400 transition-colors duration-300 hover:bg-muted-100 hover:text-muted-600 xl:hidden"
          @click="toggleSidebar"
        >
          <Icon name="feather:chevron-left" class="h-6 w-6" />
        </button>
      </div>
      <BaseFocusLoop class="flex items-end px-6 pb-4 pt-2">
        <BaseButtonAction
          shape="rounded"
          class="rounded-r-none border-r-0 focus:z-10"
          :muted="displayMode !== 'category'"
          @click="displayMode = 'category'"
        >
          <span class="text-xs">By topic</span>
        </BaseButtonAction>
        <BaseButtonAction
          shape="rounded"
          class="rounded-l-none border-l-0 focus:z-10"
          :muted="displayMode !== 'component'"
          @click="displayMode = 'component'"
        >
          <span class="text-xs">By names</span>
        </BaseButtonAction>
      </BaseFocusLoop>
    </template>
  </div>
</template>
