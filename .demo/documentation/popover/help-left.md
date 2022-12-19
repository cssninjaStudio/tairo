```vue
<template>
  <BasePopover size="sm">
    <span
      class="flex items-center text-muted-500"
    >
      <Icon
        name="lucide:help-circle"
        class="w-4 h-4 mr-1"
      />
      <span class="font-sans text-sm"
        >Help text</span
      >
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
</template>
```
