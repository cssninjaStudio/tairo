<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    shape?: 'straight' | 'rounded' | 'curved'
  }>(),
  {
    shape: 'rounded',
  },
)

const menu = [
  {
    name: 'Global',
    url: '/',
    icon: 'lucide:circle',
  },
  {
    name: 'Business',
    url: '/',
    icon: 'lucide:briefcase',
  },
  {
    name: 'Entertainment',
    url: '/',
    icon: 'lucide:play',
  },
  {
    name: 'Design',
    url: '/',
    icon: 'lucide:feather',
  },
  {
    name: 'Files',
    url: '/',
    icon: 'lucide:file',
  },
]
</script>

<template>
  <div class="flex flex-col gap-4">
    <NuxtLink
      v-for="item in menu"
      :key="item.name"
      :to="item.url"
      class="group flex items-center gap-3"
    >
      <div
        class="w-11 h-11 flex items-center justify-center text-muted-500 dark:text-muted-100 group-hover:text-white dark:group-hover:text-white bg-muted-100 dark:bg-muted-700 group-hover:bg-primary-500 group-hover:shadow-xl group-hover:shadow-primary-500/30 transition-all duration-300"
        :class="[
          props.shape === 'rounded' ? 'rounded-lg' : '',
          props.shape === 'curved' ? 'rounded-xl' : '',
        ]"
      >
        <Icon :name="item.icon" class="w-4 h-4" />
      </div>
      <span
        class="font-sans text-sm text-muted-400 group-hover:text-muted-800 dark:group-hover:text-muted-100 transition-colors duration-300"
      >
        {{ item.name }}
      </span>
    </NuxtLink>
  </div>
</template>
