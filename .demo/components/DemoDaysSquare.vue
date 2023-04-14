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
      class="dark:bg-muted-800 border-muted-200 hover:border-primary-500 dark:hover:border-primary-500 dark:border-muted-700 hover:shadow-muted-300/30 dark:hover:shadow-muted-900/30 group flex flex-col border bg-white py-6 transition-all duration-300 hover:shadow-xl"
      :class="[
        props.shape === 'rounded' ? 'rounded-md' : '',
        props.shape === 'curved' ? 'rounded-xl' : '',
      ]"
    >
      <div class="text-center">
        <span
          class="text-muted-800 dark:text-muted-100 group-hover:text-primary-500 dark:group-hover:text-primary-500 mb-1 inline-block font-sans text-xl font-bold transition-colors duration-300"
        >
          {{ day.date }}
        </span>
        <p class="text-muted-400 font-sans text-xs font-medium uppercase">
          {{ day.name }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>
