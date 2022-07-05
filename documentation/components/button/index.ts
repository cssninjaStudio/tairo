export const shapes = `
<template>
  <BaseButton shape="straight">Button</BaseButton>
  <BaseButton shape="rounded">Button</BaseButton>
  <BaseButton shape="curved">Button</BaseButton>
  <BaseButton shape="full">Button</BaseButton>
</template>
`

export const links = `
<template>
  <BaseButton to="/components/button" shape="straight">
    Button
  </BaseButton>
  <BaseButton to="/components/button">
    Button
  </BaseButton>
  <BaseButton to="https://cssninja.io" shape="curved">
    Button
  </BaseButton>
  <BaseButton to="https://google.com" target="" rel="" shape="full">
    Button
  </BaseButton>
</template>
`

export const solid = `
<template>
  <BaseButton>Button</BaseButton>
  <BaseButton color="primary">Button</BaseButton>
  <BaseButton color="success">Button</BaseButton>
  <BaseButton color="info">Button</BaseButton>
  <BaseButton color="warning">Button</BaseButton>
  <BaseButton color="danger">Button</BaseButton>
  <BaseButton muted>Button</BaseButton>
</template>
`

export const pastel = `
<template>
  <BaseButton color="primary" flavor="pastel">
    Button
  </BaseButton>
  <BaseButton color="success" flavor="pastel">
    Button
  </BaseButton>
  <BaseButton color="info" flavor="pastel">
    Button
  </BaseButton>
  <BaseButton color="warning" flavor="pastel">
    Button
  </BaseButton>
  <BaseButton color="danger" flavor="pastel">
    Button
  </BaseButton>
</template>
`

export const outline = `
<template>
  <BaseButton color="primary" flavor="outline">
    Button
  </BaseButton>
  <BaseButton color="success" flavor="outline">
    Button
  </BaseButton>
  <BaseButton color="info" flavor="outline">
    Button
  </BaseButton>
  <BaseButton color="warning" flavor="outline">
    Button
  </BaseButton>
  <BaseButton color="danger" flavor="outline">
    Button
  </BaseButton>
</template>
`

export const loading = `
<template>
  <BaseButton color="default" loading>
    Button
  </BaseButton>
  <BaseButton color="primary" loading>
    Button
  </BaseButton>
  <BaseButton color="success" loading>
    Button
  </BaseButton>
  <BaseButton color="info" loading>
    Button
  </BaseButton>
  <BaseButton color="warning" loading>
    Button
  </BaseButton>
  <BaseButton color="danger" loading>
    Button
  </BaseButton>
</template>
`

export const icons = `
<template>
  <BaseButton color="default">
    <BaseIcon name="lucide:moon" class="w-4 h-4 -ml-1" />
    <span>Button</span>
  </BaseButton>
  <BaseButton color="primary">
    <span>Button</span>
    <BaseIcon name="lucide:arrow-right" class="w-4 h-4 mr-1" />
  </BaseButton>
  <BaseButton color="success">
    <BaseIcon name="cib:envato" class="w-4 h-4 -ml-1" />
    <span>Button</span>
  </BaseButton>
  <BaseButton color="info">
    <BaseIcon name="fa:twitter" class="w-4 h-4 -ml-1" />
    <span>Button</span>
  </BaseButton>
  <BaseButton color="warning">
    <BaseIcon name="ion:shapes" class="w-4 h-4 -ml-1" />
    <span>Button</span>
  </BaseButton>
  <BaseButton color="danger">
    <BaseIcon name="ph:heart-duotone" class="w-4 h-4 -ml-1" />
    <span>Button</span>
  </BaseButton>
</template>
`

export const disabled = `
<template>
  <BaseButton color="default" disabled>
    Button
  </BaseButton>
  <BaseButton color="primary" disabled>
    Button
  </BaseButton>
  <BaseButton color="success" disabled>
    Button
  </BaseButton>
  <BaseButton color="info" disabled>
    Button
  </BaseButton>
  <BaseButton color="warning" disabled>
    Button
  </BaseButton>
  <BaseButton color="danger" disabled>
    Button
  </BaseButton>
</template>
`

export const group = `
<template>
  <BaseButton color="default">
    <BaseIcon name="lucide:edit-3" class="w-3 h-3 -ml-1" />
    <span>Edit</span>
  </BaseButton>
  <BaseButton color="default">
    <BaseIcon name="lucide:eye" class="w-3 h-3 -ml-1" />
    <span>View</span>
  </BaseButton>
  <BaseButton color="primary" flavor="outline">
    <BaseIcon name="lucide:share-2" class="w-3 h-3 -ml-1" />
    <span>Share</span>
  </BaseButton>
</template>
`
