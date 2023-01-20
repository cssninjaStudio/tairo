<script setup lang="ts">
const props = defineProps<{
  head?: string[]
}>()
</script>

<template>
  <div class="relative w-full">
    <div v-if="props.head" class="flex items-center mb-4">
      <div
        v-for="(item, index) in props.head"
        :key="index"
        class="flex items-center gap-2 px-4"
        :class="[index === 0 ? 'grow' : 'shrink-0']"
      >
        <BaseHeading
          as="h5"
          size="sm"
          weight="semibold"
          lead="none"
          class="uppercase text-[0.65rem] text-muted-500 dark:text-muted-400"
        >
          <span>
            {{ item }}
          </span>
        </BaseHeading>
      </div>
    </div>
    <div class="space-y-2">
      <slot></slot>
    </div>
  </div>
</template>
