export const types = `
<template>
  <BaseMessage type="success" message="A successful message." />
  <BaseMessage type="info" message="An information message." />
  <BaseMessage type="warning" message="A warning message." />
  <BaseMessage type="danger" message="A destructive message." />
</template>
`

export const icons = `
<template>
  <BaseMessage
    type="success"
    message="A successful message."
    icon
  />
  <BaseMessage
    type="info"
    message="An information message."
    icon
  />
  <BaseMessage type="warning" message="A warning message." icon />
  <BaseMessage
    type="danger"
    message="A destructive message."
    icon
  />
</template>
`

export const shapes = `
<template>
  <BaseMessage
    type="success"
    message="A successful message."
    shape="straight"
    icon
  />
  <BaseMessage
    type="info"
    message="An information message."
    shape="rounded"
    icon
  />
  <BaseMessage
    type="warning"
    message="A warning message."
    shape="curved"
    icon
  />
  <BaseMessage
    type="danger"
    message="A destructive message."
    shape="full"
    icon
  />
</template>
`
