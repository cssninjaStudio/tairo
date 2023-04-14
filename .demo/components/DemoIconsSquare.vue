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
    icon: 'ph:user-duotone',
    url: '/',
  },
  {
    title: 'Settings',
    icon: 'ph:gear-six-duotone',
    url: '/',
  },
  {
    title: 'Messages',
    icon: 'ph:chat-circle-duotone',
    url: '/',
  },
  {
    title: 'Tasks',
    icon: 'ph:check-circle-duotone',
    url: '/',
  },
]
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <NuxtLink
      v-for="link in links"
      :key="link.title"
      :to="link.url"
      class="dark:bg-muted-800 border-muted-200 hover:border-primary-500 dark:hover:border-primary-500 dark:border-muted-700 hover:shadow-muted-300/30 dark:hover:shadow-muted-900/30 group flex flex-col border bg-white py-5 transition-all duration-300 hover:shadow-xl"
      :class="[
        props.shape === 'rounded' ? 'rounded-md' : '',
        props.shape === 'curved' ? 'rounded-xl' : '',
      ]"
    >
      <div class="text-center">
        <div class="mb-2">
          <BaseIconBox
            class="bg-primary-500/20 text-primary-500 group-hover:bg-primary-500 transition-colors duration-300 group-hover:text-white"
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
