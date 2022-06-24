export const smallTier = `
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
  <BaseModal :open="isModalOpen" size="sm" footer @close="closeModal">
    <template #header>
    <!-- Modal header content -->
    </template>
    <template #body>
      <!-- Modal body content -->
    </template>
    <template #footer>
    <!-- Modal footer content -->
    </template>
  </BaseModal>
</template>
`

export const mediumTier = `
<template>
  <!-- Modal component -->
  <BaseModal :open="isModalLgOpen" size="lg" footer @close="closeModal">
    <template #header>
    <!-- Modal header content -->
    </template>
    <template #body>
      <!-- Modal body content -->
    </template>
    <template #footer>
    <!-- Modal footer content -->
    </template>
  </BaseModal>

  <!-- Modal component -->
  <BaseModal :open="isModalXlOpen" size="xl" footer @close="closeModal">
    <template #header>
    <!-- Modal header content -->
    </template>
    <template #body>
      <!-- Modal body content -->
    </template>
    <template #footer>
    <!-- Modal footer content -->
    </template>
  </BaseModal>
</template>
`

export const largeTier = `
<template>
  <!-- Modal component -->
  <BaseModal :open="isModal2xlOpen" size="2xl" footer @close="closeModal">
    <template #header>
    <!-- Modal header content -->
    </template>
    <template #body>
      <!-- Modal body content -->
    </template>
    <template #footer>
    <!-- Modal footer content -->
    </template>
  </BaseModal>

  <!-- Modal component -->
  <BaseModal :open="isModal3xlOpen" size="3xl" footer @close="closeModal">
    <template #header>
    <!-- Modal header content -->
    </template>
    <template #body>
      <!-- Modal body content -->
    </template>
    <template #footer>
    <!-- Modal footer content -->
    </template>
  </BaseModal>
</template>
`

export const footerAlign = `
<template>
<!-- Modal component -->
<BaseModal
  :open="isModalStartOpen"
  size="md"
  footer
  footer-align="start"
  @close="isModalStartOpen = false"
>
<!-- Modal content -->
</BaseModal>

<!-- footer-align="start | center | end | between" -->
</template>
`
