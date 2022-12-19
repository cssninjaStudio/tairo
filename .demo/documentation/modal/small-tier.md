```vue
<script setup lang="ts">
const isModalOpen = ref(false)

function closeModal() {
  isModalOpen.value = false
}
function openModal() {
  isModalOpen.value = true
}
</script>

<template>
  <!-- Modal component -->
  <BaseModal
    :open="isModalOpen"
    size="sm"
    footer
    @close="closeModal"
  >
    <template #header>
      <!-- Modal header content -->
    </template>
    <template #footer>
      <!-- Modal footer content -->
    </template>

    <!-- Modal body content -->
  </BaseModal>
</template>
```
