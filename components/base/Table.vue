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
      class="overflow-x-auto border border-muted-200 dark:border-muted-700"
      :class="[
        props.shape === 'rounded' && 'rounded-md',
        props.shape === 'curved' && 'rounded-xl',
      ]"
    >
      <div class="inline-block min-w-full align-middle">
        <div class="overflow-hidden">
          <table
            class="min-w-full divide-y divide-muted-200 table-fixed dark:divide-muted-700"
          >
            <thead class="bg-muted-50 dark:bg-muted-800">
              <tr>
                <slot name="header"></slot>
              </tr>
            </thead>
            <tbody
              class="bg-white divide-y divide-muted-200 dark:bg-muted-800 dark:divide-muted-700"
            >
              <slot></slot>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
