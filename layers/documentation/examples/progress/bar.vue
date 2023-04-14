<template>
  <div class="max-w-xs space-y-4">
    <BaseProgress title="Default progress bar" size="sm" :value="progress" color="primary" />

    <div class="flex justify-between gap-2">
      <BaseButtonAction
        :class="progress === 25 && '!border-primary-500 !text-primary-500'"
        @click="progress = 25"
      >
        25%
      </BaseButtonAction>

      <BaseButtonAction
        :class="progress === 50 && '!border-primary-500 !text-primary-500'"
        @click="progress = 50"
      >
        50%
      </BaseButtonAction>

      <BaseButtonAction
        :class="progress === 75 && '!border-primary-500 !text-primary-500'"
        @click="progress = 75"
      >
        75%
      </BaseButtonAction>

      <BaseButtonAction
        :class="progress === 100 && '!border-primary-500 !text-primary-500'"
        @click="progress = 100"
      >
        100%
      </BaseButtonAction>
    </div>
  </div>
</template>

<script setup lang="ts">
const progress = ref(25)
</script>
