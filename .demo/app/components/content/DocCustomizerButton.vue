<script setup lang="ts">
const isOpen = useColorSwitcherOpen()

function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <BaseButton @click.prevent="toggle">
    <Icon name="ph:drop-half-bottom-duotone" class="me-1 size-4" />
    <slot mdc-unwrap="p">
      Open Theme Configuration
    </slot>
  </BaseButton>
</template>
