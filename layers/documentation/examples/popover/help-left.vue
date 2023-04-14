<template>
  <div class="flex flex-wrap items-end gap-6">
    <TairoPopover size="sm">
      <span class="text-muted-500 flex items-center">
        <Icon name="lucide:help-circle" class="me-1 h-4 w-4" />

        <span class="font-sans text-sm">Help text</span>
      </span>

      <template #content>
        <TairoPopoverContentHelp
          title="Cookies"
          subtitle="Managing cookies"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit solor
                      moranitur lobis em."
          icon="lucide:cookie"
        />
      </template>
    </TairoPopover>

    <TairoPopover size="sm">
      <span class="text-muted-500 flex items-center">
        <Icon name="lucide:help-circle" class="me-1 h-4 w-4" />

        <span class="font-sans text-sm">Help text</span>
      </span>

      <template #content>
        <TairoPopoverContentHelp
          title="Dashboard"
          subtitle="Adding new widgets"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit solor
                      moranitur lobis em."
          icon="lucide:layout-dashboard"
          icon-color="success"
        />
      </template>
    </TairoPopover>
  </div>
</template>
