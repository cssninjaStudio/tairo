export const types = `
<template>
  <BaseMessage>A successful message.</BaseMessage>
  <BaseMessage type="info">An information message.</BaseMessage>
  <BaseMessage type="warning">A warning message.</BaseMessage>
  <BaseMessage type="danger">A destructive message.</BaseMessage>
</template>
`

export const icons = `
<template>
  <BaseMessage icon>A successful message.</BaseMessage>
  <BaseMessage type="info" icon>
    An information message.
  </BaseMessage>
  <BaseMessage type="warning" icon>
    A warning message.
  </BaseMessage>
  <BaseMessage type="danger" icon>
    A destructive message.
  </BaseMessage>
</template>
`

export const shapes = `
<template>
  <BaseMessage shape="straight" icon>
    A successful message.
  </BaseMessage>
  <BaseMessage type="info" shape="rounded" icon>
    An information message.
  </BaseMessage>
  <BaseMessage
    type="warning"
    message="A warning message."
    shape="curved"
    icon
  />
  <BaseMessage type="danger" shape="full" icon>
    A destructive message.
  </BaseMessage>
</template>
`
