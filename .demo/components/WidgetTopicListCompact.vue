<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    shape?: 'rounded' | 'circle'
  }>(),
  {
    shape: 'rounded',
  },
)

const topics = [
  {
    id: 0,
    title: 'Ecology',
    icon: 'ph:leaf-duotone',
    color: 'success',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet. Quae duo sunt, unum facit.',
  },
  {
    id: 1,
    title: 'Logistics',
    icon: 'ph:boat-duotone',
    color: 'info',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet.',
  },
  {
    id: 2,
    title: 'Business',
    icon: 'ph:suitcase-duotone',
    color: 'primary',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet. Quae duo sunt, unum facit.',
  },
  {
    id: 3,
    title: 'Movies',
    icon: 'ph:popcorn-duotone',
    color: 'pink',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet. Quae duo sunt, unum facit.',
  },
]
</script>

<template>
  <div class="space-y-5 mb-2">
    <div v-for="topic in topics" :key="topic.id" class="flex gap-3">
      <BaseIconBox
        :shape="props.shape"
        size="sm"
        :class="[
          topic.color === 'success' &&
            'text-success-500 bg-success-100 dark:bg-success-500/20',
          topic.color === 'info' &&
            'text-info-500 bg-info-100 dark:bg-info-500/20',
          topic.color === 'primary' &&
            'text-primary-500 bg-primary-100 dark:bg-primary-500/20',
          topic.color === 'pink' &&
            'text-pink-500 bg-pink-100 dark:bg-pink-500/20',
        ]"
      >
        <Icon :name="topic.icon" class="w-5 h-5" />
      </BaseIconBox>
      <div>
        <BaseHeading
          as="h4"
          size="sm"
          weight="light"
          lead="tight"
          class="text-muted-800 dark:text-white"
        >
          <span>
            {{ topic.title }}
          </span>
        </BaseHeading>
        <BaseParagraph size="xs">
          <span class="text-muted-400">
            {{ topic.content }}
          </span>
        </BaseParagraph>
      </div>
    </div>
  </div>
</template>
