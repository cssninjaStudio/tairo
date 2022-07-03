export const buttonLeft = `
<template>
  <BaseDropdown
  flavor="button"
  label="Dropdown"
  orientation="start"
  >
    <BaseDropdownItem
      to="/"
      title="Profile"
      text="View your profile"
    />
    <BaseDropdownItem
      to="/"
      title="Projects"
      text="View your projects"
    />
    <BaseDropdownItem
      to="/"
      title="Team"
      text="Manage your team"
    />
    <BaseDropdownItem
      to="/"
      title="Settings"
      text="Set your preferences"
    />
  </BaseDropdown>
</template>
`

export const buttonRight = `
<template>
  <BaseDropdown
  flavor="button"
  label="Dropdown"
  orientation="end"
  >
    <BaseDropdownItem
      to="/"
      title="Profile"
      text="View your profile"
    />
    <BaseDropdownItem
      to="/"
      title="Projects"
      text="View your projects"
    />
    <BaseDropdownItem
      to="/"
      title="Team"
      text="Manage your team"
    />
    <BaseDropdownItem
      to="/"
      title="Settings"
      text="Set your preferences"
    />
  </BaseDropdown>
</template>
`

export const contextLeft = `
<template>
  <BaseDropdown
  flavor="context"
  label="Dropdown"
  orientation="start"
  >
    <BaseDropdownItem
      to="/"
      title="Profile"
      text="View your profile"
    />
    <BaseDropdownItem
      to="/"
      title="Projects"
      text="View your projects"
    />
    <BaseDropdownItem
      to="/"
      title="Team"
      text="Manage your team"
    />
    <BaseDropdownItem
      to="/"
      title="Settings"
      text="Set your preferences"
    />
  </BaseDropdown>
</template>
`

export const contextRight = `
<template>
  <BaseDropdown
  flavor="context"
  label="Dropdown"
  orientation="end"
  >
    <BaseDropdownItem
      to="/"
      title="Profile"
      text="View your profile"
    />
    <BaseDropdownItem
      to="/"
      title="Projects"
      text="View your projects"
    />
    <BaseDropdownItem
      to="/"
      title="Team"
      text="Manage your team"
    />
    <BaseDropdownItem
      to="/"
      title="Settings"
      text="Set your preferences"
    />
  </BaseDropdown>
</template>
`

export const textLeft = `
<template>
  <BaseDropdown
  flavor="text"
  label="Dropdown"
  orientation="start"
  >
    <BaseDropdownItem
      to="/"
      title="Profile"
      text="View your profile"
    />
    <BaseDropdownItem
      to="/"
      title="Projects"
      text="View your projects"
    />
    <BaseDropdownItem
      to="/"
      title="Team"
      text="Manage your team"
    />
    <BaseDropdownItem
      to="/"
      title="Settings"
      text="Set your preferences"
    />
  </BaseDropdown>
</template>
`

export const textRight = `
<template>
  <BaseDropdown
  flavor="text"
  label="Dropdown"
  orientation="end"
  >
    <BaseDropdownItem
      to="/"
      title="Profile"
      text="View your profile"
    />
    <BaseDropdownItem
      to="/"
      title="Projects"
      text="View your projects"
    />
    <BaseDropdownItem
      to="/"
      title="Team"
      text="Manage your team"
    />
    <BaseDropdownItem
      to="/"
      title="Settings"
      text="Set your preferences"
    />
  </BaseDropdown>
</template>
`

export const iconSlot = `
<template>
  <BaseDropdown
  flavor="button"
  label="Dropdown"
  orientation="start"
  >
    <BaseDropdownItem
      to="/"
      title="Profile"
      text="View your profile"
    >
      <template #start>
        <BaseIcon name="ph:user-duotone" class="w-5 h-5 block mr-2" />
      </template>
    </BaseDropdownItem>
    <BaseDropdownItem
      to="/"
      title="Projects"
      text="View your projects"
    >
      <template #start>
        <BaseIcon name="ph:briefcase-duotone" class="w-5 h-5 block mr-2" />
      </template>
    </BaseDropdownItem>
    <BaseDropdownItem to="/" title="Team" text="Manage your team">
      <template #start>
        <BaseIcon name="ph:users-four-duotone" class="w-5 h-5 block mr-2" />
      </template>
    </BaseDropdownItem>
    <BaseDropdownDivide />
    <BaseDropdownItem
      to="/"
      title="Settings"
      text="Set your preferences"
    >
      <template #start>
        <BaseIcon name="ph:gear-six-duotone" class="w-5 h-5 block mr-2" />
      </template>
    </BaseDropdownItem>
  </BaseDropdown> 
</template>
`

export const avatarSlot = `
<template>
  <BaseDropdown
  flavor="button"
  label="Dropdown"
  orientation="start"
  >
    <BaseDropdownItem
      to="/"
      title="Lana Jensen"
      text="Software Engineer"
    >
      <template #start>
        <BaseAvatar
          picture="/img/avatars/4.svg"
          size="xs"
          class="mr-3"
        />
      </template>
    </BaseDropdownItem>
    <BaseDropdownItem
      to="/"
      title="Shawn Miller"
      text="Product Manager"
    >
      <template #start>
        <BaseAvatar
          picture="/img/avatars/3.svg"
          size="xs"
          class="mr-3"
        />
      </template>
    </BaseDropdownItem>
    <BaseDropdownItem
      to="/"
      title="John Marynski"
      text="Sales Manager"
    >
      <template #start>
        <BaseAvatar
          picture="/img/avatars/18.svg"
          size="xs"
          class="mr-3"
        />
      </template>
    </BaseDropdownItem>
    <BaseDropdownDivide />
    <BaseDropdownItem
      to="/"
      title="Garry Porter"
      text="CEO - Founder"
    >
      <template #start>
        <BaseAvatar
          picture="/img/avatars/6.svg"
          size="xs"
          class="mr-3"
        />
      </template>
    </BaseDropdownItem>
  </BaseDropdown>
</template>
`

export const header = `
<template>
  <BaseDropdown
  flavor="button"
  label="Dropdown"
  orientation="start"
  header-label="My Team"
  >
    <BaseDropdownItem
      to="/"
      title="Lana Jensen"
      text="Software Engineer"
    >
      <template #start>
        <BaseAvatar
          picture="/img/avatars/4.svg"
          size="xs"
          class="mr-3"
        />
      </template>
    </BaseDropdownItem>
    <BaseDropdownItem
      to="/"
      title="Shawn Miller"
      text="Product Manager"
    >
      <template #start>
        <BaseAvatar
          picture="/img/avatars/3.svg"
          size="xs"
          class="mr-3"
        />
      </template>
    </BaseDropdownItem>
    <BaseDropdownItem
      to="/"
      title="John Marynski"
      text="Sales Manager"
    >
      <template #start>
        <BaseAvatar
          picture="/img/avatars/18.svg"
          size="xs"
          class="mr-3"
        />
      </template>
    </BaseDropdownItem>
    <BaseDropdownDivide />
    <BaseDropdownItem
      to="/"
      title="Garry Porter"
      text="CEO - Founder"
    >
      <template #start>
        <BaseAvatar
          picture="/img/avatars/6.svg"
          size="xs"
          class="mr-3"
        />
      </template>
    </BaseDropdownItem>
  </BaseDropdown>
</template>
`
