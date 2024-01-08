<template>
  <div class="flex w-full justify-start">
    <BaseDropdown
      variant="text"
      label="Dropdown"
      orientation="start"
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
