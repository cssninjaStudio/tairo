export const shapes = `
<template>
  <BaseButtonIcon shape="straight">
    <Icon name="ph:moon-duotone" class="w-5 h-5" />
  </BaseButtonIcon>
  <BaseButtonIcon shape="rounded">
    <Icon name="ph:github-logo-duotone" class="w-5 h-5" />
  </BaseButtonIcon>
  <BaseButtonIcon shape="curved">
    <Icon name="ph:game-controller-duotone" class="w-5 h-5" />
  </BaseButtonIcon>
  <BaseButtonIcon shape="full">
    <Icon name="ph:heart-duotone" class="w-5 h-5" />
  </BaseButtonIcon>
</template>
`

export const primary = `
<template>
  <BaseButtonIcon shape="straight" primary>
    <Icon name="ph:moon-duotone" class="w-5 h-5" />
  </BaseButtonIcon>
  <BaseButtonIcon shape="rounded" primary>
    <Icon name="ph:github-logo-duotone" class="w-5 h-5" />
  </BaseButtonIcon>
  <BaseButtonIcon shape="curved" primary>
    <Icon name="ph:game-controller-duotone" class="w-5 h-5" />
  </BaseButtonIcon>
  <BaseButtonIcon shape="full" primary>
    <Icon name="ph:heart-duotone" class="w-5 h-5" />
  </BaseButtonIcon>
</template>
`

export const muted = `
<template>
  <BaseButtonIcon shape="straight" muted>
    <Icon name="ph:moon-duotone" class="w-5 h-5" />
  </BaseButtonIcon>
  <BaseButtonIcon shape="rounded" muted>
    <Icon name="ph:github-logo-duotone" class="w-5 h-5" />
  </BaseButtonIcon>
  <BaseButtonIcon shape="curved" muted>
    <Icon name="ph:game-controller-duotone" class="w-5 h-5" />
  </BaseButtonIcon>
  <BaseButtonIcon shape="full" muted>
    <Icon name="ph:heart-duotone" class="w-5 h-5" />
  </BaseButtonIcon>
</template>
`

export const loading = `
<template>
  <BaseButtonIcon shape="straight" loading>
    <Icon name="ph:moon-duotone" class="w-5 h-5" />
  </BaseButtonIcon>
  <BaseButtonIcon shape="rounded" loading>
    <Icon name="ph:github-logo-duotone" class="w-5 h-5" />
  </BaseButtonIcon>
  <BaseButtonIcon shape="curved" loading>
    <Icon name="ph:game-controller-duotone" class="w-5 h-5" />
  </BaseButtonIcon>
  <BaseButtonIcon shape="full" loading>
    <Icon name="ph:heart-duotone" class="w-5 h-5" />
  </BaseButtonIcon>
</template>
`
export const group = `
<template>
  <div class="flex items-end flex-wrap">
    <BaseButtonIcon
      shape="curved"
      class="focus:z-10 rounded-r-none border-r-0"
    >
      <Icon name="ph:moon-duotone" class="w-5 h-5" />
    </BaseButtonIcon>
    <BaseButtonIcon shape="straight" class="focus:z-10">
      <Icon name="ph:github-logo-duotone" class="w-5 h-5" />
    </BaseButtonIcon>
    <BaseButtonIcon shape="straight" class="focus:z-10 border-l-0">
      <Icon name="ph:game-controller-duotone" class="w-5 h-5" />
    </BaseButtonIcon>
    <BaseButtonIcon
      shape="curved"
      class="focus:z-10 rounded-l-none border-l-0"
    >
      <Icon name="ph:heart-duotone" class="w-5 h-5" />
    </BaseButtonIcon>
  </div>
</template>
`
