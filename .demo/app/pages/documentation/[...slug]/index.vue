<script setup lang="ts">
definePageMeta({
  pageTransition: false,
  layoutTransition: false,
  layout: 'content-docs',
})

const route = useRoute()

const { data } = await useAsyncData(
  `page-data:${route.path}`,
  () => queryCollection('docs').path(route.path).first(),
  {
    watch: [() => route.path],
  },
)

// Page not found, set correct status code on SSR
if (!data.value && import.meta.server) {
  const event = useRequestEvent()
  if (event) {
    event.node.res.statusCode = 404
  }
}

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description,
})
</script>

<template>
  <div>
    <ContentRenderer v-if="data" :value="data">
      <template #empty>
        <DocComponentDemo>
          <div>
            <p>The page you are looking for does not exist.</p>
            <div class="flex flex-row gap-6">
              <BaseButton to="/documentation">
                Back to Hub
              </BaseButton>
              <BaseButton variant="ghost" to="/">
                Back to Home
              </BaseButton>
            </div>
          </div>
        </DocComponentDemo>
      </template>
    </ContentRenderer>
  </div>
</template>
