<template>
  <div class="flex flex-wrap items-end gap-2">
    <BaseButtonIcon shape="curved" data-nui-tooltip="Time for a nap!">
      <Icon name="ph:timer-duotone" class="h-5 w-5 text-sky-500" />
    </BaseButtonIcon>

    <BaseButtonIcon
      shape="curved"
      data-nui-tooltip-position="left"
      data-nui-tooltip="Unlock this now!"
    >
      <Icon name="ph:lock-duotone" class="h-5 w-5 text-emerald-500" />
    </BaseButtonIcon>

    <BaseButtonIcon
      shape="curved"
      data-nui-tooltip-position="right"
      data-nui-tooltip="Give some love!"
    >
      <Icon name="ph:heartbeat-duotone" class="h-5 w-5 text-rose-500" />
    </BaseButtonIcon>

    <BaseButtonIcon
      shape="curved"
      data-nui-tooltip-position="down"
      data-nui-tooltip="The King in the North!"
    >
      <Icon name="ph:crown-duotone" class="h-5 w-5 text-yellow-500" />
    </BaseButtonIcon>

    <BaseButtonAction shape="curved" data-nui-tooltip="Here we go!">
      <Icon name="ph:bell-ringing-duotone" class="text-primary-500 -ms-1 h-4 w-4" />

      <span class="py-2">Subscribe</span>
    </BaseButtonAction>
  </div>
</template>
