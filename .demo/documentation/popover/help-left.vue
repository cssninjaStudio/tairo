<template>
  <BasePopover size="sm">
    <span
      class="flex items-center text-muted-500"
    >
      <Icon
        name="lucide:help-circle"
        class="mr-1 h-4 w-4"
      />
      <span class="font-sans text-sm">
        Help text
      </span>
    </span>

    <template #content>
      <BasePopoverContentHelp
        title="Cookies"
        subtitle="Managing cookies"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit solor
                      moranitur lobis em."
        icon="lucide:cookie"
      />
    </template>
  </BasePopover>

  <BasePopover size="sm">
    <span
      class="flex items-center text-muted-500"
    >
      <Icon
        name="lucide:help-circle"
        class="mr-1 h-4 w-4"
      />
      <span class="font-sans text-sm">
        Help text
      </span>
    </span>

    <template #content>
      <BasePopoverContentHelp
        title="Dashboard"
        subtitle="Adding new widgets"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit solor
                      moranitur lobis em."
        icon="lucide:layout-dashboard"
        icon-color="success"
      />
    </template>
  </BasePopover>
</template>
