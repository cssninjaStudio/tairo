<template>
  <div class="flex w-full justify-start">
    <BaseDropdown
      variant="button"
      label="Dropdown"
      orientation="start"
      header-label="My Team"
    >
      <BaseDropdownItem
        to="#"
        title="Lana Jensen"
        text="Software Engineer"
        color="default"
        rounded="sm"
      >
        <template #start>
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/4.svg"
            size="xs"
          />
        </template>
      </BaseDropdownItem>

      <BaseDropdownItem
        to="#"
        title="Shawn Miller"
        text="Product Manager"
        color="default"
        rounded="sm"
      >
        <template #start>
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/3.svg"
            size="xs"
          />
        </template>
      </BaseDropdownItem>

      <BaseDropdownItem
        to="#"
        title="John Marynski"
        text="Sales Manager"
        color="default"
        rounded="sm"
      >
        <template #start>
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/18.svg"
            size="xs"
          />
        </template>
      </BaseDropdownItem>

      <BaseDropdownDivider />

      <BaseDropdownItem
        to="#"
        title="Garry Porter"
        text="CEO - Founder"
        color="default"
        rounded="sm"
      >
        <template #start>
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/6.svg"
            size="xs"
          />
        </template>
      </BaseDropdownItem>
    </BaseDropdown>
  </div>
</template>
