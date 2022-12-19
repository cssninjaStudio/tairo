```vue
<template>
  <!-- Modal component -->
  <BaseModal
    :open="isModalLgOpen"
    size="lg"
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
    :open="isModalXlOpen"
    size="xl"
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
