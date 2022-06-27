<script setup lang="ts">
export type TableShapes = 'straight' | 'rounded' | 'curved'

export interface TableProps {
  shape?: TableShapes
}

const props = withDefaults(defineProps<TableProps>(), {
  shape: 'rounded',
})
</script>

<template>
  <div class="flex flex-col">
    <div
      class="overflow-x-auto border border-gray-200 dark:border-gray-700"
      :class="[
        props.shape === 'rounded' && 'rounded-md',
        props.shape === 'curved' && 'rounded-xl',
      ]"
    >
      <div class="inline-block min-w-full align-middle">
        <div class="overflow-hidden">
          <table
            class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-slate-700"
          >
            <thead class="bg-gray-50 dark:bg-slate-800">
              <tr>
                <slot name="header"></slot>
              </tr>
            </thead>
            <tbody
              class="bg-white divide-y divide-gray-200 dark:bg-slate-800 dark:divide-gray-700"
            >
              <slot></slot>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
