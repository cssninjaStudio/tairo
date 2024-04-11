<template>
  <div class="flex w-full justify-start">
    <BaseDropdown
      variant="button"
      label="Dropdown"
      placement="bottom-start"
    >
      <BaseDropdownItem
        to="#"
        title="Profile"
        text="View your profile"
        rounded="sm"
      >
        <template #start>
          <Icon name="ph:user-duotone" class="me-2 block size-5" />
        </template>
      </BaseDropdownItem>

      <BaseDropdownItem
        to="#"
        title="Projects"
        text="View your projects"
        rounded="sm"
      >
        <template #start>
          <Icon name="ph:briefcase-duotone" class="me-2 block size-5" />
        </template>
      </BaseDropdownItem>

      <BaseDropdownItem
        to="#"
        title="Team"
        text="Manage your team"
        rounded="sm"
      >
        <template #start>
          <Icon name="ph:users-four-duotone" class="me-2 block size-5" />
        </template>
      </BaseDropdownItem>

      <BaseDropdownDivider />

      <BaseDropdownItem
        to="#"
        title="Settings"
        text="Set your preferences"
        rounded="sm"
      >
        <template #start>
          <Icon name="ph:gear-six-duotone" class="me-2 block size-5" />
        </template>
      </BaseDropdownItem>
    </BaseDropdown>
  </div>
</template>
