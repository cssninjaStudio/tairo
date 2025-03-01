<script setup lang="ts">
const props = defineProps<{
  head?: string[]
}>()
</script>

<template>
  <div class="relative w-full">
    <div v-if="props.head" class="mb-2 flex items-center">
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
          class="text-muted-600 dark:text-muted-400 text-[0.6rem] uppercase"
        >
          <span>
            {{ item }}
          </span>
        </BaseHeading>
      </div>
    </div>
    <div class="space-y-2">
      <slot />
    </div>
  </div>
</template>
