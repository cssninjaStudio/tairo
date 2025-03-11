<template>
  <div class="flex flex-wrap items-end gap-2">
    <BaseButton size="icon-md" rounded="lg">
      <Icon name="ph:timer-duotone" class="size-5 text-sky-500" />
    </BaseButton>

    <BaseButton
      rounded="lg"
      size="icon-md"
    >
      <Icon name="ph:lock-duotone" class="size-5 text-emerald-500" />
    </BaseButton>

    <BaseButton
      rounded="lg"
      size="icon-md"
    >
      <Icon name="ph:heartbeat-duotone" class="size-5 text-rose-500" />
    </BaseButton>

    <BaseButton
      rounded="lg"
      size="icon-md"
    >
      <Icon name="ph:crown-duotone" class="size-5 text-yellow-500" />
    </BaseButton>

    <BaseButton rounded="lg">
      <Icon name="ph:bell-ringing-duotone" class="text-primary-500 -ms-1 size-4" />

      <span class="py-2">Subscribe</span>
    </BaseButton>
  </div>
</template>
