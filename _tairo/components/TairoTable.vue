<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    shape?: 'straight' | 'rounded' | 'curved'
  }>(),
  {
    shape: 'rounded',
  },
)
</script>

<template>
  <div class="flex flex-col">
    <div
      class="border-muted-200 dark:border-muted-700 overflow-x-auto border"
      :class="[
        props.shape === 'rounded' && 'rounded-md',
        props.shape === 'curved' && 'rounded-xl',
      ]"
    >
      <div class="inline-block min-w-full align-middle">
        <div class="overflow-hidden">
          <table
            class="divide-muted-200 dark:divide-muted-700 min-w-full table-fixed divide-y"
          >
            <thead>
              <tr>
                <slot name="header"></slot>
              </tr>
            </thead>
            <tbody
              class="divide-muted-200 dark:divide-muted-700 dark:bg-muted-800 divide-y bg-white"
            >
              <slot></slot>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
