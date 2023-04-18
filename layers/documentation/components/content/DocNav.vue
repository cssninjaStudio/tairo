<script setup lang="ts">
const props = defineProps<{
  prev?: string
  next?: string
}>()

const { data } = await useAsyncData('doc-nav', async () => {
  const prev = !props.prev
    ? Promise.resolve(null)
    : queryContent()
        .where({
          _partial: false,
          _draft: false,
          _path: props.prev,
        })
        .only(['_path', 'title'])
        .findOne()

  const next = !props.next
    ? Promise.resolve(null)
    : queryContent()
        .where({
          _partial: false,
          _draft: false,
          _path: props.next,
        })
        .only(['_path', 'title'])
        .findOne()

  return Promise.all([prev, next])
})

const nav = computed(() => {
  if (!data.value) return {}

  const [prev, next] = data.value

  return {
    prev,
    next,
  }
})
</script>

<template>
  <div class="flex">
    <div v-if="nav.prev">
      <NuxtLink
        :to="nav.prev._path"
        class="group inline-flex gap-2 text-sm text-muted-400 dark:text-muted-500 hover:text-muted-500 dark:hover:text-muted-400 transition-colors duration-100"
      >
        <Icon
          name="lucide:arrow-left"
          class="mt-1 w-4 h-4 group-hover:-translate-x-1 transition-transform duration-100"
        />
        <span class="inline-flex flex-col gap-1">
          <span class="font-sans text-sm leading-tight">Back to previous section</span>
          <span
            class="font-heading font-medium text-muted-500 dark:text-muted-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 text-base"
            >{{ nav.prev.title }}</span
          >
        </span>
      </NuxtLink>
    </div>
    <div class="grow"></div>
    <div v-if="nav.next">
      <NuxtLink
        :to="nav.next._path"
        class="group inline-flex gap-2 text-sm text-muted-400 dark:text-muted-500 hover:text-muted-500 dark:hover:text-muted-400 transition-colors duration-100"
      >
        <span class="inline-flex flex-col gap-1">
          <span class="font-sans text-sm leading-tight">Continue reading</span>
          <span
            class="font-heading font-medium text-muted-500 dark:text-muted-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 text-sm"
            >{{ nav.next.title }}</span
          >
        </span>
        <Icon
          name="lucide:arrow-right"
          class="mt-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-100"
        />
      </NuxtLink>
    </div>
  </div>
</template>
