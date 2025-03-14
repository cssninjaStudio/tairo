<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    shape?: 'straight' | 'rounded' | 'curved'
  }>(),
  {
    shape: 'rounded',
  },
)

const links = [
  {
    title: 'Profile',
    icon: 'solar:user-rounded-bold-duotone',
    url: '#',
  },
  {
    title: 'Settings',
    icon: 'solar:stopwatch-bold-duotone',
    url: '#',
  },
  {
    title: 'Messages',
    icon: 'solar:chat-line-bold-duotone',
    url: '#',
  },
  {
    title: 'Tasks',
    icon: 'solar:add-square-bold-duotone',
    url: '#',
  },
]
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <NuxtLink
      v-for="link in links"
      :key="link.title"
      :to="link.url"
      class="dark:bg-muted-950 border-muted-200 hover:border-primary-500 dark:hover:border-primary-500 dark:border-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-900/30 group flex flex-col border bg-white py-5 transition-all duration-300 hover:shadow-xl"
      :class="[
        props.shape === 'rounded' ? 'rounded-md' : '',
        props.shape === 'curved' ? 'rounded-xl' : '',
      ]"
    >
      <div class="text-center">
        <div class="mb-2">
          <BaseIconBox
            variant="none"
            class="bg-primary-500/20 text-primary-500 group-hover:bg-primary-500 transition-colors duration-300 group-hover:text-white"
            rounded="none"
            mask="blob"
          >
            <Icon :name="link.icon" />
          </BaseIconBox>
        </div>
        <p
          class="text-muted-600 dark:text-muted-200 font-sans text-sm font-medium"
        >
          {{ link.title }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>
