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
<BaseButton to="/elements/button" shape="straight">
    Button
</BaseButton>
<BaseButton to="/elements/button" shape="rounded">
    Button
</BaseButton>
<BaseButton to="https://cssninja.io" shape="curved">
    Button
</BaseButton>
<BaseButton to="https://google.com" shape="full">
    Button
</BaseButton>
</template>
`

export const solid = `
<template>
  <BaseButton shape="rounded" color="primary">Button</BaseButton>
  <BaseButton shape="rounded" color="success">Button</BaseButton>
  <BaseButton shape="rounded" color="info">Button</BaseButton>
  <BaseButton shape="rounded" color="warning">Button</BaseButton>
  <BaseButton shape="rounded" color="danger">Button</BaseButton>
  <BaseButton shape="rounded" color="muted">Button</BaseButton>
</template>
`

export const pastel = `
<template>
  <BaseButton shape="rounded" color="primary" flavor="pastel">
    Button
  </BaseButton>
  <BaseButton shape="rounded" color="success" flavor="pastel">
    Button
  </BaseButton>
  <BaseButton shape="rounded" color="info" flavor="pastel">
    Button
  </BaseButton>
  <BaseButton shape="rounded" color="warning" flavor="pastel">
    Button
  </BaseButton>
  <BaseButton shape="rounded" color="danger" flavor="pastel">
    Button
  </BaseButton>
</template>
`

export const outline = `
<template>
  <BaseButton shape="rounded" color="primary" flavor="outline">
    Button
  </BaseButton>
  <BaseButton shape="rounded" color="success" flavor="outline">
    Button
  </BaseButton>
  <BaseButton shape="rounded" color="info" flavor="outline">
    Button
  </BaseButton>
  <BaseButton shape="rounded" color="warning" flavor="outline">
    Button
  </BaseButton>
  <BaseButton shape="rounded" color="danger" flavor="outline">
    Button
  </BaseButton>
</template>
`

export const loading = `
<template>
  <BaseButton shape="rounded" color="default" loading>
    Button
  </BaseButton>
  <BaseButton shape="rounded" color="primary" loading>
    Button
  </BaseButton>
  <BaseButton shape="rounded" color="success" loading>
    Button
  </BaseButton>
  <BaseButton shape="rounded" color="info" loading>
    Button
  </BaseButton>
  <BaseButton shape="rounded" color="warning" loading>
    Button
  </BaseButton>
  <BaseButton shape="rounded" color="danger" loading>
    Button
  </BaseButton>
</template>
`

export const icons = `
<template>
  <BaseButton shape="rounded" color="default">
    <BaseIcon name="lucide:moon" class="w-4 h-4 -ml-1" />
    <span>Button</span>
  </BaseButton>
  <BaseButton shape="rounded" color="primary">
    <span>Button</span>
    <BaseIcon name="lucide:arrow-right" class="w-4 h-4 mr-1" />
  </BaseButton>
  <BaseButton shape="rounded" color="success">
    <BaseIcon name="cib:envato" class="w-4 h-4 -ml-1" />
    <span>Button</span>
  </BaseButton>
  <BaseButton shape="rounded" color="info">
    <BaseIcon name="fa:twitter" class="w-4 h-4 -ml-1" />
    <span>Button</span>
  </BaseButton>
  <BaseButton shape="rounded" color="warning">
    <BaseIcon name="ion:shapes" class="w-4 h-4 -ml-1" />
    <span>Button</span>
  </BaseButton>
  <BaseButton shape="rounded" color="danger">
    <BaseIcon name="ph:heart-duotone" class="w-4 h-4 -ml-1" />
    <span>Button</span>
  </BaseButton>
</template>
`

export const disabled = `
<template>
  <BaseButton shape="rounded" color="default" disabled>
    Button
  </BaseButton>
  <BaseButton shape="rounded" color="primary" disabled>
    Button
  </BaseButton>
  <BaseButton shape="rounded" color="success" disabled>
    Button
  </BaseButton>
  <BaseButton shape="rounded" color="info" disabled>
    Button
  </BaseButton>
  <BaseButton shape="rounded" color="warning" disabled>
    Button
  </BaseButton>
  <BaseButton shape="rounded" color="danger" disabled>
    Button
  </BaseButton>
</template>
`

export const group = `
<template>
  <BaseButton shape="rounded" color="default">
    <BaseIcon name="lucide:edit-3" class="w-3 h-3 -ml-1" />
    <span>Edit</span>
  </BaseButton>
  <BaseButton shape="rounded" color="default">
    <BaseIcon name="lucide:eye" class="w-3 h-3 -ml-1" />
    <span>View</span>
  </BaseButton>
  <BaseButton shape="rounded" color="primary" flavor="outline">
    <BaseIcon name="lucide:share-2" class="w-3 h-3 -ml-1" />
    <span>Share</span>
  </BaseButton>
</template>
`
