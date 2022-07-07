export const straight = `
<script setup lang="ts">
const selectStraight = ref('')
</script>

<template>
  <BaseFormTextarea
    v-model="textareaStraight"
    label="Message"
    shape="straight"
    placeholder="Write a message..."
  />
</template>
`

export const rounded = `
<script setup lang="ts">
const selectStraight = ref('')
</script>

<template>
  <BaseFormTextarea
    v-model="textareaRounded"
    label="Message"
    shape="rounded"
    placeholder="Write a message..."
  />
</template>
`

export const curved = `
<script setup lang="ts">
const selectStraight = ref('')
</script>

<template>
  <BaseFormTextarea
    v-model="textareaCurved"
    label="Message"
    shape="curved"
    placeholder="Write a message..."
  />
</template>
`

export const focus = `
<template>
  <BaseFormTextarea
    label="Message"
    shape="rounded"
    placeholder="Write a message..."
    color-focus
  />
</template>
`

export const invalid = `
<template>
  <BaseFormTextarea
    label="Message"
    shape="rounded"
    placeholder="Write a message..."
    invalid
  />
</template>
`

export const loading = `
<template>
  <BaseFormTextarea
    label="Description"
    shape="rounded"
    placeholder="Write a message..."
    loading
  />
</template>
`

export const disabled = `
<template>
  <BaseFormTextarea
    label="Description"
    shape="rounded"
    placeholder="Write a message..."
    disabled
  />
</template>
`

export const addon = `
<template>
  <BaseFormTextarea
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
        <BaseButton flavor="pastel" color="primary">
          Post Comment
        </BaseButton>
      </div>
    </template>
  </BaseFormTextarea>
</template>
`
