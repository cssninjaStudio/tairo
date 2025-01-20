<template>
  <BaseButtonGroup>
    <BaseButton rounded="md">
      View
    </BaseButton>

    <BaseButton rounded="md">
      <Icon name="ph:pen" class="size-4" />
    </BaseButton>

    <BaseButton muted rounded="md">
      Muted
    </BaseButton>

    <BaseDropdown label="plus">
      <template #button>
        <BaseButton rounded="none">
          plus
        </BaseButton>
      </template>

      <BaseDropdownItem> Edit </BaseDropdownItem>

      <BaseDropdownItem> Cancel </BaseDropdownItem>
    </BaseDropdown>

    <BaseButton disabled rounded="md">
      Disabled
    </BaseButton>

    <BaseButton rounded="md">
      Share
    </BaseButton>
  </BaseButtonGroup>
</template>
