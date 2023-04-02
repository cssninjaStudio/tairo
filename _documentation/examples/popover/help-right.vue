<template>
  <div class="flex flex-wrap items-end justify-end gap-6">
    <TairoPopover size="sm" orientation="end">
      <span class="text-muted-500 flex items-center">
        <Icon name="lucide:help-circle" class="me-1 h-4 w-4" />

        <span class="font-sans text-sm">Help text</span>
      </span>

      <template #content>
        <TairoPopoverContentHelp
          title="New design"
          subtitle="Adding new designs"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit solor
                      moranitur lobis em."
          icon="lucide:gem"
          icon-color="info"
        />
      </template>
    </TairoPopover>

    <TairoPopover size="sm" orientation="end">
      <span class="text-muted-500 flex items-center">
        <Icon name="lucide:help-circle" class="me-1 h-4 w-4" />

        <span class="font-sans text-sm">Help text</span>
      </span>

      <template #content>
        <TairoPopoverContentHelp
          title="Error"
          subtitle="Handling errors"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit solor
                      moranitur lobis em."
          icon="lucide:x-octagon"
          icon-color="danger"
        />
      </template>
    </TairoPopover>
  </div>
</template>
