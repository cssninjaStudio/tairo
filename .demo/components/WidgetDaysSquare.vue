<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    shape?: 'straight' | 'rounded' | 'curved'
  }>(),
  {
    shape: 'rounded',
  },
)

const days = [
  {
    name: 'Monday',
    date: 22,
    url: '/',
  },
  {
    name: 'Tuesday',
    date: 23,
    url: '/',
  },
  {
    name: 'Wednesday',
    date: 24,
    url: '/',
  },
  {
    name: 'Friday',
    date: 25,
    url: '/',
  },
]
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <NuxtLink
      v-for="day in days"
      :key="day.name"
      :to="day.url"
      class="group flex flex-col py-6 border bg-white dark:bg-muted-800 border-muted-200 hover:border-primary-500 dark:hover:border-primary-500 dark:border-muted-700 hover:shadow-xl hover:shadow-muted-300/30 dark:hover:shadow-muted-900/30 transition-all duration-300"
      :class="[
        props.shape === 'rounded' ? 'rounded-md' : '',
        props.shape === 'curved' ? 'rounded-xl' : '',
      ]"
    >
      <div class="text-center">
        <span
          class="inline-block font-sans font-bold text-muted-800 dark:text-muted-100 group-hover:text-primary-500 dark:group-hover:text-primary-500 text-xl mb-1 transition-colors duration-300"
        >
          {{ day.date }}
        </span>
        <p class="font-sans uppercase text-xs font-medium text-muted-400">
          {{ day.name }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>
