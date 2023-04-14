<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    shape?: 'rounded' | 'full'
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
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet. Quae duo sunt, unum facit.',
  },
  {
    id: 1,
    title: 'Logistics',
    icon: 'ph:boat-duotone',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet.',
  },
  {
    id: 2,
    title: 'Business',
    icon: 'ph:suitcase-duotone',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet. Quae duo sunt, unum facit.',
  },
  {
    id: 3,
    title: 'Movies',
    icon: 'ph:popcorn-duotone',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter autem vobis placet. Quae duo sunt, unum facit.',
  },
]
</script>

<template>
  <div class="mb-2 space-y-5">
    <div v-for="topic in topics" :key="topic.id" class="flex gap-3">
      <BaseIconBox :shape="props.shape" size="sm" :class="getRandomColor()">
        <Icon :name="topic.icon" class="h-5 w-5" />
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
