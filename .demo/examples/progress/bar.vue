<script setup lang="ts">
const progress = ref(25)
</script>

<template>
  <div class="max-w-xs space-y-4">
    <BaseProgress
      title="Default progress bar"
      size="sm"
      :value="progress"
      color="primary"
    />

    <div class="flex justify-between gap-2">
      <BaseButton
        :class="progress === 25 && 'border-primary-500! text-primary-500!'"
        @click="progress = 25"
      >
        25%
      </BaseButton>

      <BaseButton
        :class="progress === 50 && 'border-primary-500! text-primary-500!'"
        @click="progress = 50"
      >
        50%
      </BaseButton>

      <BaseButton
        :class="progress === 75 && 'border-primary-500! text-primary-500!'"
        @click="progress = 75"
      >
        75%
      </BaseButton>

      <BaseButton
        :class="progress === 100 && 'border-primary-500! text-primary-500!'"
        @click="progress = 100"
      >
        100%
      </BaseButton>
    </div>
  </div>
</template>
