<script setup lang="ts">
const props = defineProps<{
  title: string
  subtitle?: string
  icon?: string
  image?: string
  label?: string
  hideLabel?: boolean
}>()
</script>

<template>
  <div
    class="relative h-10 flex items-center grow gap-2 px-6 sm:px-2 mb-4 sm:mb-0"
  >
    <span
      v-if="props.label"
      class="absolute hidden sm:block sm:-top-8 sm:left-2 font-sans text-[0.6rem] uppercase"
      :class="
        props.hideLabel ? 'sm:hidden' : 'text-muted-500 dark:text-muted-400'
      "
    >
      {{ props.label }}
    </span>
    <BaseAvatar
      v-if="props.image && !props.icon"
      :src="props.image"
      size="md"
    />
    <BaseIconBox
      v-if="props.icon && !props.image"
      :icon="props.icon"
      size="sm"
      class="bg-primary-500/20 text-primary-500"
    >
      <Icon :name="props.icon" class="w-5 h-5" />
    </BaseIconBox>
    <div>
      <BaseHeading
        as="h4"
        size="sm"
        weight="medium"
        lead="tight"
        class="text-muted-700"
      >
        <span>{{ props.title }}</span>
      </BaseHeading>
      <BaseParagraph size="xs" lead="tight" class="text-muted-500">
        <span>{{ props.subtitle }}</span>
      </BaseParagraph>
    </div>
  </div>
</template>
