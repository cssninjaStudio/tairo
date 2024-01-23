<template>
  <BaseButtonGroup>
    <BaseButtonAction rounded="md">
      View
    </BaseButtonAction>

    <BaseButtonAction rounded="md">
      <Icon name="ph:pen" class="size-4" />
    </BaseButtonAction>

    <BaseButtonAction muted rounded="md">
      Muted
    </BaseButtonAction>

    <BaseDropdown label="plus">
      <template #button>
        <BaseButtonAction rounded="none">
          plus
        </BaseButtonAction>
      </template>

      <BaseDropdownItem> Edit </BaseDropdownItem>

      <BaseDropdownItem> Cancel </BaseDropdownItem>
    </BaseDropdown>

    <BaseButtonAction disabled rounded="md">
      Disabled
    </BaseButtonAction>

    <BaseButtonAction rounded="md">
      Share
    </BaseButtonAction>
  </BaseButtonGroup>
</template>
