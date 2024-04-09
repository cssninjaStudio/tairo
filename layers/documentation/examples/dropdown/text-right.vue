<template>
  <div class="flex w-full justify-end">
    <BaseDropdown
      variant="text"
      label="Dropdown"
      placement="bottom-end"
    >
      <BaseDropdownItem
        to="#"
        title="Profile"
        text="View your profile"
        rounded="sm"
      />

      <BaseDropdownItem
        to="#"
        title="Projects"
        text="View your projects"
        rounded="sm"
      />

      <BaseDropdownItem
        to="#"
        title="Team"
        text="Manage your team"
        rounded="sm"
      />

      <BaseDropdownItem
        to="#"
        title="Settings"
        text="Set your preferences"
        rounded="sm"
      />
    </BaseDropdown>
  </div>
</template>
