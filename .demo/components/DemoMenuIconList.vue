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
        class="text-muted-500 dark:text-muted-100 bg-muted-100 dark:bg-muted-700 group-hover:bg-primary-500 group-hover:shadow-primary-500/30 flex h-11 w-11 items-center justify-center transition-all duration-300 group-hover:text-white group-hover:shadow-xl dark:group-hover:text-white"
        :class="[
          props.shape === 'rounded' ? 'rounded-lg' : '',
          props.shape === 'curved' ? 'rounded-xl' : '',
        ]"
      >
        <Icon :name="item.icon" class="h-4 w-4" />
      </div>
      <span
        class="text-muted-400 group-hover:text-muted-800 dark:group-hover:text-muted-100 font-sans text-sm transition-colors duration-300"
      >
        {{ item.name }}
      </span>
    </NuxtLink>
  </div>
</template>
