```vue
<template>
  <BaseTextarea
    v-model="textareaRounded"
    label="Message"
    shape="curved"
    placeholder="Write a message..."
    :rows="6"
    addon
  >
    <template #addon>
      <div class="flex items-center gap-2">
        <BaseAvatar
          src="/img/avatars/2.svg"
          size="sm"
          class="mr-1"
        />
        <BaseHeading
          as="h4"
          size="sm"
          weight="semibold"
          class="text-muted-800 dark:text-white"
        >
          Maya
        </BaseHeading>
      </div>
      <div class="flex items-center gap-2">
        <BaseButton
          flavor="pastel"
          color="primary"
        >
          Post Comment
        </BaseButton>
      </div>
    </template>
  </BaseTextarea>
</template>
```
