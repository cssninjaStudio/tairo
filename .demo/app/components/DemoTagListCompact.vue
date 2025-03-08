<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  }>(),
  {
    rounded: 'sm',
  },
)

const tags = [
  {
    id: 1,
    name: 'Politics',
    highlight: false,
  },
  {
    id: 2,
    name: 'Economy',
    highlight: true,
  },
  {
    id: 3,
    name: 'Finance',
    highlight: false,
  },
  {
    id: 4,
    name: 'Environment',
    highlight: false,
  },
  {
    id: 5,
    name: 'Food',
    highlight: false,
  },
  {
    id: 6,
    name: 'Technology',
    highlight: true,
  },
]
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <BaseTag
      v-for="tag in tags"
      :key="tag.id"
      :rounded="props.rounded"
      :variant="tag.highlight ? 'default' : 'primary'"
      size="sm"
    >
      <span>{{ tag.name }}</span>
    </BaseTag>
  </div>
</template>
