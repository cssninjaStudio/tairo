<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-6 md:flex-row md:items-start">
    <FocusScope class="flex w-3/5 flex-wrap items-end gap-4">
      <TairoCheckboxAnimated
        value="Option 1"
        color="primary"
      />

      <TairoCheckboxAnimated
        value="Option 2"
        color="info"
      />

      <TairoCheckboxAnimated
        value="Option 3"
        color="success"
      />

      <TairoCheckboxAnimated
        value="Option 4"
        color="warning"
      />

      <TairoCheckboxAnimated
        value="Option 5"
        color="danger"
      />
    </FocusScope>
  </div>
</template>
