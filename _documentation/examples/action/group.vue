<template>
  <div class="flex items-end">
    <BaseButtonAction shape="rounded" class="rounded-r-none border-r-0 focus:z-10">
      View
    </BaseButtonAction>

    <BaseButtonAction shape="straight" class="focus:z-10">
      <Icon name="ph:pen" class="h-4 w-4" />
    </BaseButtonAction>

    <BaseButtonAction muted shape="straight" class="focus:z-10">Muted</BaseButtonAction>

    <BaseButtonAction disabled shape="straight" class="focus:z-10">Disabled</BaseButtonAction>

    <BaseButtonAction shape="rounded" class="rounded-l-none border-l-0 focus:z-10">
      Share
    </BaseButtonAction>
  </div>
</template>
