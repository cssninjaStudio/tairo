<template>
  <div class="flex flex-col gap-6 md:flex-row md:items-start">
    <FocusScope class="flex w-3/5 flex-wrap items-end gap-4">
      <TairoCheckboxAnimated :classes="{ label: 'text-primary-500' }" />

      <TairoCheckboxAnimated :model-value="true" :classes="{ label: 'text-primary-500' }" />

      <TairoCheckboxAnimated
        :model-value="true"
        disabled
        :classes="{ label: 'text-primary-500' }"
      />
    </FocusScope>
  </div>
</template>
