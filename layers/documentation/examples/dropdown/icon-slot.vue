<template>
  <div class="flex items-end">
    <BaseDropdown flavor="button" label="Dropdown" orientation="start">
      <BaseDropdownItem to="#" title="Profile" text="View your profile">
        <template #start>
          <Icon name="ph:user-duotone" class="me-2 block h-5 w-5" />
        </template>
      </BaseDropdownItem>

      <BaseDropdownItem to="#" title="Projects" text="View your projects">
        <template #start>
          <Icon name="ph:briefcase-duotone" class="me-2 block h-5 w-5" />
        </template>
      </BaseDropdownItem>

      <BaseDropdownItem to="#" title="Team" text="Manage your team">
        <template #start>
          <Icon name="ph:users-four-duotone" class="me-2 block h-5 w-5" />
        </template>
      </BaseDropdownItem>

      <BaseDropdownDivide />

      <BaseDropdownItem to="#" title="Settings" text="Set your preferences">
        <template #start>
          <Icon name="ph:gear-six-duotone" class="me-2 block h-5 w-5" />
        </template>
      </BaseDropdownItem>
    </BaseDropdown>
  </div>
</template>
