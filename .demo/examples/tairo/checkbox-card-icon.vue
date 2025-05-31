<script setup lang="ts">
const selectedEventFeatures = ref(['drive'])
</script>

<template>
  <BaseCheckboxGroup v-model="selectedEventFeatures" as="div" class="flex gap-3">
    <BaseTooltip disable-closing-trigger content="Record">
      <TairoCheckboxCardIcon value="record" icon="solar:playback-speed-linear" />
    </BaseTooltip>
    <BaseTooltip disable-closing-trigger content="Document included">
      <TairoCheckboxCardIcon value="drive" icon="solar:document-text-linear" />
    </BaseTooltip>
    <BaseTooltip disable-closing-trigger content="External Users">
      <TairoCheckboxCardIcon value="external" icon="solar:folder-security-linear" />
    </BaseTooltip>
    <BaseTooltip disable-closing-trigger content="Comment allowed">
      <TairoCheckboxCardIcon value="conversation" icon="solar:chat-round-line-linear" />
    </BaseTooltip>
  </BaseCheckboxGroup>
</template>
