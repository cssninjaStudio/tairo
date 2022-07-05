export const shapes = `
<template>
  <BaseButtonAction shape="straight">Action</BaseButtonAction>
  <BaseButtonAction shape="rounded">Action</BaseButtonAction>
  <BaseButtonAction shape="curved">Action</BaseButtonAction>
  <BaseButtonAction shape="full">Action</BaseButtonAction>
</template>
`

export const muted = `
<template>
  <BaseButtonAction shape="straight" muted>Action</BaseButtonAction>
  <BaseButtonAction shape="rounded" muted>Action</BaseButtonAction>
  <BaseButtonAction shape="curved" muted>Action</BaseButtonAction>
  <BaseButtonAction shape="full" muted>Action</BaseButtonAction>
</template>
`

export const loading = `
<template>
  <BaseButtonAction shape="straight" loading>Action</BaseButtonAction>
  <BaseButtonAction shape="rounded" loading>Action</BaseButtonAction>
  <BaseButtonAction shape="curved" loading>Action</BaseButtonAction>
  <BaseButtonAction shape="full" loading>Action</BaseButtonAction>
</template>
`
export const group = `
<template>
  <div class="flex items-end">
    <BaseButtonAction
      shape="rounded"
      class="focus:z-10 rounded-r-none border-r-0"
    >
      View
    </BaseButtonAction>
    <BaseButtonAction shape="straight" class="focus:z-10">
      <BaseIcon name="ph:pen" class="h-4 w-4" />
    </BaseButtonAction>
    <BaseButtonAction muted shape="straight" class="focus:z-10">
      Muted
    </BaseButtonAction>
    <BaseButtonAction disabled shape="straight" class="focus:z-10">
      Disabled
    </BaseButtonAction>
    <BaseButtonAction
      shape="rounded"
      class="focus:z-10 rounded-l-none border-l-0"
    >
      Share
    </BaseButtonAction>
  </div>
</template>
`
