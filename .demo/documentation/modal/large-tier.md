```vue
<template>
  <!-- Modal component -->
  <BaseModal
    :open="isModal2xlOpen"
    size="2xl"
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

  <!-- Modal component -->
  <BaseModal
    :open="isModal3xlOpen"
    size="3xl"
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
