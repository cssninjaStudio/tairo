export const shapes = `
<template>
  <BaseAction shape="straight">Action</BaseAction>
  <BaseAction shape="rounded">Action</BaseAction>
  <BaseAction shape="curved">Action</BaseAction>
  <BaseAction shape="full">Action</BaseAction>
</template>
`

export const muted = `
<template>
  <BaseAction shape="straight" muted>Action</BaseAction>
  <BaseAction shape="rounded" muted>Action</BaseAction>
  <BaseAction shape="curved" muted>Action</BaseAction>
  <BaseAction shape="full" muted>Action</BaseAction>
</template>
`

export const loading = `
<template>
  <BaseAction shape="straight" loading>Action</BaseAction>
  <BaseAction shape="rounded" loading>Action</BaseAction>
  <BaseAction shape="curved" loading>Action</BaseAction>
  <BaseAction shape="full" loading>Action</BaseAction>
</template>
`
export const group = `
<template>
  <div class="flex items-end">
    <BaseAction shape="rounded" class="focus:z-10 rounded-r-none border-r-0">
      View
    </BaseAction>
    <BaseAction shape="straight" class="focus:z-10">
      Edit
    </BaseAction>
    <BaseAction shape="rounded" class="focus:z-10 rounded-l-none border-l-0">
      Share
    </BaseAction>
  </div>
</template>
`
