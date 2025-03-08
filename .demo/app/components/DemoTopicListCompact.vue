<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  }>(),
  {
    rounded: 'sm',
  },
)

const topics = [
  {
    id: 0,
    title: 'Ecology',
    icon: 'solar:earth-bold-duotone',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet. Quae duo sunt, unum facit.',
  },
  {
    id: 1,
    title: 'Logistics',
    icon: 'solar:box-bold-duotone',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet.',
  },
  {
    id: 2,
    title: 'Business',
    icon: 'solar:suitcase-bold-duotone',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet. Quae duo sunt, unum facit.',
  },
  {
    id: 3,
    title: 'Movies',
    icon: 'solar:video-frame-play-horizontal-bold-duotone',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet. Quae duo sunt, unum facit.',
  },
]
</script>

<template>
  <div class="mb-2 space-y-5">
    <div
      v-for="topic in topics"
      :key="topic.id"
      class="flex gap-3"
    >
      <BaseIconBox
        :rounded="props.rounded"
        size="sm"
        variant="none"
        :class="getRandomColor()"
      >
        <Icon :name="topic.icon" class="size-5" />
      </BaseIconBox>
      <div>
        <BaseHeading
          as="h4"
          size="sm"
          weight="medium"
          lead="tight"
          class="text-muted-900 dark:text-white"
        >
          <span>
            {{ topic.title }}
          </span>
        </BaseHeading>
        <BaseParagraph size="xs">
          <span class="text-muted-600 dark:text-muted-400">
            {{ topic.content }}
          </span>
        </BaseParagraph>
      </div>
    </div>
  </div>
</template>
