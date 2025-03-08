<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label?: string
    sublabel?: string
  }>(),
  {
    label: undefined,
    sublabel: undefined,
  },
)
</script>

<template>
  <fieldset class="relative">
    <legend v-if="props.label || props.sublabel" class="mb-6">
      <BaseHeading
        v-if="props.label"
        tag="h3"
        size="md"
        weight="medium"
        lead="none"
        class="text-muted-900 dark:text-white"
      >
        {{ props.label }}
      </BaseHeading>
      <BaseText
        v-if="props.sublabel"
        size="xs"
        class="text-muted-600 dark:text-muted-400"
      >
        {{ props.sublabel }}
      </BaseText>
    </legend>
    <slot />
  </fieldset>
</template>
