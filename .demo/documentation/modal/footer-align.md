```vue
<template>
  <!-- Modal component -->
  <!--   footer-align="start | center | end | between" -->
  <BaseModal
    :open="isModalStartOpen"
    size="md"
    footer
    footer-align="start"
    @close="isModalStartOpen = false"
  >
    <!-- Modal content -->
  </BaseModal>
</template>
```
