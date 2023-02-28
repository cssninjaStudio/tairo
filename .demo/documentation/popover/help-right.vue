<template>
  <BasePopover size="sm" orientation="end">
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
        title="New design"
        subtitle="Adding new designs"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit solor
                      moranitur lobis em."
        icon="lucide:gem"
        icon-color="info"
      />
    </template>
  </BasePopover>

  <BasePopover size="sm" orientation="end">
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
        title="Error"
        subtitle="Handling errors"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit solor
                      moranitur lobis em."
        icon="lucide:x-octagon"
        icon-color="danger"
      />
    </template>
  </BasePopover>
</template>
