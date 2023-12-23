<template>
  <div class="grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">
    <BaseMessage icon>
      A successful message.
    </BaseMessage>

    <BaseMessage type="info" icon>
      An information message.
    </BaseMessage>

    <BaseMessage type="warning" icon>
      A warning message.
    </BaseMessage>

    <BaseMessage type="danger" icon>
      A destructive message.
    </BaseMessage>
  </div>
</template>
