<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first()
}, {
  watch: [() => route.path],
})

const links = computed(() => page.value?.body?.toc?.links || [])
</script>

<template>
  <div class="hidden md:landscape:block lg:block">
    <div class="h-full max-h-[calc(100vh-calc(var(--spacing)*26))] overflow-y-auto nui-slimscroll-opaque">
      <div class="py-3 pe-4 rounded-md min-w-[200px]">
        <BaseHeading
          size="xs"
          weight="medium"
          leading="tight"
          class="pb-4 uppercase"
        >
          On This Page
        </BaseHeading>
        <ul class="space-y-3">
          <li
            v-for="link in links"
            :key="link.id"
          >
            <NuxtLink
              :to="`#${link.id}`"
              class="block text-sm leading-snug hover:underline underline-offset-4 hover:text-muted-900 dark:hover:text-white font-sans text-muted-600 dark:text-muted-400"
            >
              {{ link.text }}
            </NuxtLink>

            <ul v-if="link.children" class="space-y-2 ms-3 mt-2">
              <li
                v-for="child in link.children"
                :key="child.id"
              >
                <NuxtLink
                  :to="`#${child.id}`"
                  class="block text-sm leading-snug hover:underline underline-offset-4 hover:text-muted-700 dark:hover:text-muted-300 font-sans text-muted-400 dark:text-muted-500"
                >
                  {{ child.text }}
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
