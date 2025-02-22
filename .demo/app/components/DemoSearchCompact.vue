<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    rounded?: 'none' | 'sm' | 'md' | 'lg'
  }>(),
  {
    rounded: 'sm',
  },
)

const search = ref('')
</script>

<template>
  <div class="w-full">
    <BaseField>
      <div
        class="focus-within:nui-focus flex *:rounded-none *:border-e-0  *:last:border-e"
        :class="[
          props.rounded === 'sm' ? 'rounded-sm *:first:rounded-s-sm  *:last:rounded-e-sm' : '',
          props.rounded === 'md' ? 'rounded-md *:first:rounded-s-md  *:last:rounded-e-md' : '',
          props.rounded === 'lg' ? 'rounded-lg *:first:rounded-s-lg  *:last:rounded-e-lg' : '',
        ]"
      >
        <div class="ps-3 border text-input-default-text/60 bg-input-default-bg border-input-default-border flex items-center justify-center">
          <Icon name="lucide:search" class="size-4" />
        </div>
        <BaseInput
          v-model="search"
          placeholder="Search"
          rounded="none"
          class="ring-0! border-s-0"
        />
        <div class="pe-1 border border-s-0 text-input-default-text/60 bg-input-default-bg border-input-default-border flex items-center justify-center">
          <button
            type="button"
            class="bg-primary-500 inline-flex h-8 items-center justify-center px-4 font-sans text-sm text-white"
            :class="[
              props.rounded === 'sm' ? 'rounded-sm' : '',
              props.rounded === 'md' ? 'rounded-md' : '',
              props.rounded === 'lg' ? 'rounded-lg' : '',
            ]"
          >
            <span>Go</span>
          </button>
        </div>
      </div>
    </BaseField>
    <div class="mt-2 flex flex-wrap gap-2">
      <span
        class="text-muted-500 dark:text-muted-400 bg-muted-200 dark:bg-muted-700/40 inline-flex h-6 items-center justify-center rounded-full px-3 font-sans text-xs font-medium"
      >
        #Europe
      </span>
      <span
        class="text-muted-500 dark:text-muted-400 bg-muted-200 dark:bg-muted-700/40 inline-flex h-6 items-center justify-center rounded-full px-3 font-sans text-xs font-medium"
      >
        #Asia
      </span>
      <span
        class="text-muted-500 dark:text-muted-400 bg-muted-200 dark:bg-muted-700/40 inline-flex h-6 items-center justify-center rounded-full px-3 font-sans text-xs font-medium"
      >
        #America
      </span>
    </div>
  </div>
</template>
