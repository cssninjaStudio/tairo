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
    <div v-if="props.label || props.sublabel" class="mb-6">
      <BaseHeading
        v-if="props.label"
        tag="h3"
        size="md"
        weight="medium"
        lead="none"
      >
        {{ props.label }}
      </BaseHeading>
      <BaseText v-if="props.sublabel" size="xs" class="text-muted-400">
        {{ props.sublabel }}
      </BaseText>
    </div>
    <slot></slot>
  </fieldset>
</template>
