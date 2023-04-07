<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    shape?: 'straight' | 'rounded' | 'curved' | 'full'
  }>(),
  {
    shape: 'rounded',
  },
)

const users = [
  {
    id: 0,
    picture: '/img/avatars/16.svg',
    name: 'Hermann Mayer',
    position: 'Business Analyst',
    progress: 18,
  },
  {
    id: 1,
    picture: '/img/avatars/10.svg',
    name: 'Kendra Wilson',
    position: 'Project Manager',
    progress: 22,
  },
  {
    id: 2,
    picture: '/img/avatars/6.svg',
    name: 'John Baxter',
    position: 'Product Manager',
    progress: -12,
  },
  {
    id: 3,
    picture: '/img/avatars/12.svg',
    name: 'Amelia Shepherd',
    position: 'Product Manager',
    progress: 32,
  },
  {
    id: 4,
    picture: '/img/avatars/11.svg',
    name: 'Daryl Zanuk',
    position: 'Mobile Developer',
    progress: -4,
  },
  {
    id: 5,
    picture: '/img/avatars/5.svg',
    name: 'Clarissa Miller',
    position: 'UI/UX Designer',
    progress: 32,
  },
]
</script>

<template>
  <div class="space-y-6">
    <div v-for="user in users" :key="user.id" class="flex items-center gap-2">
      <BaseAvatar :src="user.picture" size="sm" :shape="props.shape" />
      <div>
        <BaseHeading
          as="h3"
          size="sm"
          weight="medium"
          lead="tight"
          class="text-muted-800 dark:text-muted-100"
        >
          <span>{{ user.name }}</span>
        </BaseHeading>
        <BaseText size="xs" class="text-muted-400">
          <span>{{ user.position }}</span>
        </BaseText>
      </div>
      <div class="ms-auto flex items-center justify-end gap-4">
        <BaseParagraph
          size="sm"
          weight="semibold"
          :class="user.progress > 0 ? 'text-success-500' : 'text-danger-500'"
        >
          <span>{{ user.progress }}%</span>
        </BaseParagraph>
        <BaseButtonIcon to="#" muted small :shape="props.shape">
          <Icon name="lucide:chevron-right" class="h-4 w-4" />
        </BaseButtonIcon>
      </div>
    </div>
  </div>
</template>
