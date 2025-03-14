<script setup lang="ts">
import { DemoPanelSearch } from '#components'

const { open } = usePanels()
</script>

<template>
  <div>
    <BaseButton @click="() => open(DemoPanelSearch)">
      Open Panel
    </BaseButton>
  </div>
</template>
