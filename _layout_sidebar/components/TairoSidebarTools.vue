<script setup lang="ts">
const app = useAppConfig()
</script>

<template>
  <div class="flex items-center gap-2">
    <template v-for="tool of (app.tairo.toolbar as any).tools">
      <component
        :is="resolveComponent(tool.component)"
        v-if="tool.component"
        :key="tool.component"
        v-bind="tool.props"
      />
    </template>
  </div>
</template>
