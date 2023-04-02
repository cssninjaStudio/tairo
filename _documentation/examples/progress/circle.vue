<template>
  <div class="max-w-xs space-y-4">
    <div class="flex items-end gap-2">
      <BaseProgressCircle
        title="Primary circle progress bar"
        :size="45"
        :value="progressCircle"
        class="text-primary-500"
      />

      <BaseProgressCircle
        title="Yellow circle progress bar"
        :size="55"
        :value="progressCircle"
        class="text-yellow-500"
      />

      <BaseProgressCircle
        title="Pink circle progress bar"
        :size="75"
        :value="progressCircle"
        class="text-pink-500"
      />

      <BaseProgressCircle
        title="Indigo circle progress bar"
        :size="85"
        :value="progressCircle"
        class="text-indigo-400"
      />
    </div>

    <div class="flex justify-between gap-2">
      <BaseButtonAction
        :class="progressCircle === 25 && '!border-primary-500 !text-primary-500'"
        @click="progressCircle = 25"
      >
        25%
      </BaseButtonAction>

      <BaseButtonAction
        :class="progressCircle === 50 && '!border-primary-500 !text-primary-500'"
        @click="progressCircle = 50"
      >
        50%
      </BaseButtonAction>

      <BaseButtonAction
        :class="progressCircle === 75 && '!border-primary-500 !text-primary-500'"
        @click="progressCircle = 75"
      >
        75%
      </BaseButtonAction>

      <BaseButtonAction
        :class="progressCircle === 100 && '!border-primary-500 !text-primary-500'"
        @click="progressCircle = 100"
      >
        100%
      </BaseButtonAction>
    </div>
  </div>
</template>

<script setup lang="ts">
const progressCircle = ref(25)
</script>
