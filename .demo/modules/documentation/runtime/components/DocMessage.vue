<template>
  <BaseMessage>
    <div class="text-xs">
      <ContentSlot unwrap="p" :use="$slots.default"></ContentSlot>
    </div>
  </BaseMessage>
</template>
