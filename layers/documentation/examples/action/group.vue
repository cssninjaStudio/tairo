<template>
  <div class="flex items-end">
    <BaseButtonAction shape="rounded" class="rounded-e-none border-e-0 focus:z-10">
      View
    </BaseButtonAction>

    <BaseButtonAction shape="straight" class="focus:z-10">
      <Icon name="ph:pen" class="h-4 w-4" />
    </BaseButtonAction>

    <BaseButtonAction muted shape="straight" class="border-s-0 focus:z-10">Muted</BaseButtonAction>

    <BaseButtonAction disabled shape="straight" class="border-s-0 focus:z-10">
      Disabled
    </BaseButtonAction>

    <BaseButtonAction shape="rounded" class="rounded-s-none border-s-0 focus:z-10">
      Share
    </BaseButtonAction>
  </div>
</template>
