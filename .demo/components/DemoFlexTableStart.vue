<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    icon?: string
    picture?: string
    avatar?: string
    badge?: string
    initials?: string
    label?: string
    hideLabel?: boolean
  }>(),
  {
    subtitle: undefined,
    icon: undefined,
    picture: undefined,
    avatar: undefined,
    badge: undefined,
    initials: undefined,
    label: undefined,
  },
)
</script>

<template>
  <div
    class="relative mb-4 flex grow items-center gap-2 px-6 sm:mb-0 sm:px-2"
    :class="props.picture && !props.avatar && !props.icon ? '' : 'h-10'"
  >
    <span
      v-if="props.label"
      class="text-muted-400 absolute hidden font-sans text-xs font-medium uppercase sm:-top-10 sm:start-2 sm:block"
      :class="props.hideLabel ? 'sm:hidden' : ''"
    >
      {{ props.label }}
    </span>
    <BaseAvatar
      v-if="
        (props.avatar && !props.icon && !props.picture) ||
        (props.initials && !props.icon && !props.picture)
      "
      :src="props.avatar"
      :badge-src="props.badge"
      :text="props.initials"
      class="bg-primary-500/20 text-primary-500"
      size="md"
    />
    <BaseIconBox
      v-else-if="props.icon && !props.avatar && !props.picture"
      :icon="props.icon"
      size="sm"
      class="bg-primary-500/20 text-primary-500"
    >
      <Icon :name="props.icon" class="h-5 w-5" />
    </BaseIconBox>
    <div
      v-else-if="props.picture && !props.avatar && !props.icon"
      class="relative shrink-0"
    >
      <img
        :src="props.picture"
        :alt="props.title"
        class="h-12 w-16 rounded-lg object-cover"
      />
    </div>

    <div>
      <BaseHeading
        as="h4"
        size="sm"
        weight="medium"
        lead="tight"
        class="text-muted-700 dark:text-muted-100"
      >
        <span>{{ props.title }}</span>
      </BaseHeading>
      <BaseParagraph
        size="xs"
        lead="tight"
        class="text-muted-500 dark:text-muted-400"
      >
        <span>{{ props.subtitle }}</span>
      </BaseParagraph>
    </div>
  </div>
</template>
