<script setup lang="ts">
/**
 * Here we use the useLayoutSwitcher() composable to dynamically insert the selected layout component.
 * In this template, the collpase layout is the default layout.
 * We use the vue :is="" feature to render the layout component dynamically.
 */

const { activeLayoutComponent } = useLayoutSwitcher()
</script>

<template>
  <component :is="activeLayoutComponent">
    <slot />
  </component>
</template>
