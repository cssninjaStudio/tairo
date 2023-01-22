<script setup lang="ts">
interface popoverHeadProps {
  title: string
  icon?: string
  avatar?: string
}

const props = defineProps<popoverHeadProps>()
</script>

<template>
  <div class="w-40 flex items-center gap-2 bg-transparent mb-3">
    <BaseAvatar
      v-if="props.avatar && !props.icon"
      :src="props.avatar"
      size="sm"
      alt="avatar"
    />
    <BaseIconBox
      v-if="props.icon && !props.avatar"
      size="sm"
      class="overflow-hidden"
    >
      <div class="absolute inset-0 w-full h-full bg-current opacity-20"></div>
      <Icon :name="props.icon" class="w-5 h-5 text-current" />
    </BaseIconBox>
    <BaseHeading as="h3" size="sm" weight="semibold">
      <span class="text-muted-800 dark:text-white">{{ props.title }}</span>
    </BaseHeading>
  </div>
</template>
