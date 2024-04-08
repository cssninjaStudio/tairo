<script setup lang="ts">
const isOpen = useState('switcher-open', () => false)

function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <BaseButton @click.prevent="toggle">
    <Icon name="ph:drop-half-bottom-duotone" class="me-1 size-4" />
    <ContentSlot :use="$slots.default" unwrap="p">
      Open Theme Configuration
    </ContentSlot>
  </BaseButton>
</template>
