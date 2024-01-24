<template>
  <div class="flex w-full justify-end">
    <BaseDropdown
      variant="text"
      label="Dropdown"
      orientation="end"
    >
      <BaseDropdownItem
        to="#"
        title="Profile"
        text="View your profile"
        color="default"
        rounded="sm"
      />

      <BaseDropdownItem
        to="#"
        title="Projects"
        text="View your projects"
        color="default"
        rounded="sm"
      />

      <BaseDropdownItem
        to="#"
        title="Team"
        text="Manage your team"
        color="default"
        rounded="sm"
      />

      <BaseDropdownItem
        to="#"
        title="Settings"
        text="Set your preferences"
        color="default"
        rounded="sm"
      />
    </BaseDropdown>
  </div>
</template>
