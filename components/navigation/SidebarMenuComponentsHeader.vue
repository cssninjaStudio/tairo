<script setup lang="ts">
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

onKeyStroke(['Escape'], () => {
  if (isSearching.value) {
    reset()
  }
})
</script>

<template>
  <div>
    <form
      v-if="isSearching"
      class="px-6 py-4"
      @submit.prevent="
        () => {
          if (!filter) {
            isSearching = false
          }
        }
      "
    >
      <BaseFormInput
        v-model="filter"
        v-focus
        icon="lucide:search"
        placeholder="ex: BaseInput, BaseCard, ..."
        condensed
        @blur="
          () => {
            if (!filter) {
              isSearching = false
            }
          }
        "
      >
        <template #label>
          <div class="flex justify-between">
            <span>Search components</span>
            <button
              v-if="filter"
              type="reset"
              class="hover:text-primary-400 font-medium"
              @click="reset"
            >
              cancel
            </button>
          </div>
        </template>
      </BaseFormInput>
    </form>
    <template v-else>
      <div class="flex items-center w-full h-16 px-6">
        <h2
          class="flex items-center font-main text-lg font-semibold text-slate-700 dark:text-white capitalize"
        >
          <BaseButtonIcon
            class="focus:z-10 p-0 w-6 h-6 border-0 mr-2"
            @click="isSearching = true"
          >
            <BaseIcon name="lucide:search" class="w-4 h-4" />
          </BaseButtonIcon>

          <span>Components</span>
        </h2>
        <button
          type="button"
          class="flex xl:hidden items-center justify-center h-10 w-10 rounded-full ml-auto text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors duration-300"
          @click="toggleSidebar"
        >
          <BaseIcon name="feather:chevron-left" class="w-6 h-6" />
        </button>
      </div>
      <FocusLoop class="flex items-end px-6 pb-4">
        <BaseButtonAction
          shape="rounded"
          class="focus:z-10 rounded-r-none border-r-0"
          :muted="displayMode !== 'category'"
          @click="displayMode = 'category'"
        >
          <span class="text-xs">By theme</span>
        </BaseButtonAction>
        <BaseButtonAction
          shape="rounded"
          class="focus:z-10 rounded-l-none border-l-0"
          :muted="displayMode !== 'component'"
          @click="displayMode = 'component'"
        >
          <span class="text-xs">By names</span>
        </BaseButtonAction>
      </FocusLoop>
    </template>
  </div>
</template>
