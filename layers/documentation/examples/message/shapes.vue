<template>
  <div class="grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">
    <BaseMessage icon rounded="sm">
      A successful message.
    </BaseMessage>

    <BaseMessage
      color="info"
      icon
      rounded="md"
    >
      An information message.
    </BaseMessage>

    <BaseMessage
      color="warning"
      icon
      rounded="lg"
    >
      A warning message.
    </BaseMessage>

    <BaseMessage
      color="danger"
      icon
      rounded="full"
    >
      A destructive message.
    </BaseMessage>
  </div>
</template>
