<script setup lang="ts">
const route = useRoute()
const activeId = ref(1)
const { data } = useFetch('/api/messaging')

watch(() => route.path, () => {
  if (route.path.startsWith('/dashboards/messaging')) {
    activeId.value = Number(route.params.id) || 1
  }
}, { immediate: true })
</script>

<template>
  <TairoSidebarSubsidebarContent class="px-1!">
    <NuxtLink
      v-for="conversation in data"
      :key="conversation.id"
      :to="`/dashboards/messaging/${conversation.id}`"
      class="flex h-14 w-full items-center justify-center hover:bg-muted-100 dark:hover:bg-muted-900 rounded-lg transitions-colors duration-100"
      :class="conversation.id === activeId ? 'bg-primary-100 dark:bg-primary-950 rounded-s-none border-s border-primary-500' : ''"
    >
      <BaseAvatar
        size="xs"
        :src="conversation.user.photo"
        :alt="conversation.user.name"
      />
    </NuxtLink>
  </TairoSidebarSubsidebarContent>
</template>
