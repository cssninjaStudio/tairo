<script setup lang="ts">
import { DemoPanelActivity } from '#components'

const { open } = usePanels()
</script>

<template>
  <div>
    <BaseButton @click="open(DemoPanelActivity)">
      Open Panel
    </BaseButton>
  </div>
</template>
