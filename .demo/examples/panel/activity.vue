<script setup lang="ts">
import { DemoPanelActivity } from '#components'

const { open } = usePanels()
</script>

<template>
  <div>
    <BaseButton @click="open(DemoPanelActivity, {}, { position: 'left', size: 'sm' })">
      Open Panel
    </BaseButton>
  </div>
</template>
