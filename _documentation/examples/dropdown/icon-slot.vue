<template>
  <div class="flex items-end">
    <BaseDropdown flavor="button" label="Dropdown" orientation="start">
      <BaseDropdownItem to="#" title="Profile" text="View your profile">
        <template #start>
          <Icon name="ph:user-duotone" class="w-5 h-5 block mr-2" />
        </template>
      </BaseDropdownItem>
      <BaseDropdownItem to="#" title="Projects" text="View your projects">
        <template #start>
          <Icon name="ph:briefcase-duotone" class="w-5 h-5 block mr-2" />
        </template>
      </BaseDropdownItem>
      <BaseDropdownItem to="#" title="Team" text="Manage your team">
        <template #start>
          <Icon name="ph:users-four-duotone" class="w-5 h-5 block mr-2" />
        </template>
      </BaseDropdownItem>
      <BaseDropdownDivide />
      <BaseDropdownItem to="#" title="Settings" text="Set your preferences">
        <template #start>
          <Icon name="ph:gear-six-duotone" class="w-5 h-5 block mr-2" />
        </template>
      </BaseDropdownItem>
    </BaseDropdown>
  </div>
</template>
