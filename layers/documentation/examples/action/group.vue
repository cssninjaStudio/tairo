<template>
  <BaseButtonGroup>
    <BaseButtonAction shape="rounded"> View </BaseButtonAction>

    <BaseButtonAction shape="straight">
      <Icon name="ph:pen" class="h-4 w-4" />
    </BaseButtonAction>

    <BaseButtonAction muted shape="straight">Muted</BaseButtonAction>

    <BaseDropdown label="plus">
      <template #button>
        <BaseButtonAction shape="rounded"> plus </BaseButtonAction>
      </template>

      <BaseDropdownItem> Edit </BaseDropdownItem>

      <BaseDropdownItem> Cancel </BaseDropdownItem>
    </BaseDropdown>

    <BaseButtonAction disabled shape="straight"> Disabled </BaseButtonAction>

    <BaseButtonAction shape="rounded"> Share </BaseButtonAction>
  </BaseButtonGroup>
</template>
