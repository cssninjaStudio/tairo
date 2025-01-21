<template>
  <div class="flex w-full justify-start">
    <BaseDropdown
      variant="text"
      label="Dropdown"
      placement="bottom-start"
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
