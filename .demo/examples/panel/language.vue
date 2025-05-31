<script setup lang="ts">
import { DemoPanelLanguage } from '#components'

const { open } = usePanels()
</script>

<template>
  <div>
    <BaseButton @click="open(DemoPanelLanguage)">
      Open Panel
    </BaseButton>
  </div>
</template>
