<script setup lang="ts">
const uniqueTags: any[] = []
const uniqueCategories: any[] = []
const routeParam = useRoute().params.category

const contentQueryResults = await queryContent().find()
const posts = await queryContent('blog').where({ 'categories': { $contains: `${routeParam}` } }).find()

const getAllTagsAvailable = () => {
  const allTags = contentQueryResults.map((obj) => obj.tags)
  allTags.forEach((element) => {
    element.forEach((tag: any) => {
      if (!uniqueTags.includes(tag)) {
        uniqueTags.push(tag)
      }
    })
  })
}
const getAllCategoriesAvailable = () => {
  const allCategories = contentQueryResults.map((obj) => obj.tags)
  allCategories.forEach((element) => {
    element.forEach((tag: any) => {
      if (!uniqueCategories.includes(tag)) {
        uniqueCategories.push(tag)
      }
    })
  })
}

onMounted(() => {
  getAllTagsAvailable()
  getAllCategoriesAvailable()
})
</script>

<template>
  <div class="my-10">
    <TairoContentWrapper>
      <div class="grid grid-cols-4 space-y-10">
        <div class="col-span-3">
          <div class="">
            <div class="flex justify-between">
              <span>
                <h4
                  class="text-muted-400 mb-4 font-sans text-xs font-semibold uppercase"
                >
                  Category Selected: {{ routeParam }}
                </h4>
              </span>
              <span class="sticky top-[85px] flex justify-end">
                <NuxtLink class="me-1" to="/blog">See all Post →</NuxtLink>
              </span>
            </div>
            <div
              class="ltablet:grid-cols-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              <TransitionGroup
                enter-active-class="transform-gpu"
                enter-from-class="opacity-0 -translate-x-full"
                enter-to-class="opacity-100 translate-x-0"
                leave-active-class="absolute transform-gpu"
                leave-from-class="opacity-100 translate-x-0"
                leave-to-class="opacity-0 -translate-x-full"
              >
                <BaseCard
                  v-for="(item, index) in posts"
                  :key="index"
                  shape="curved"
                  elevated-hover
                  class="hover:!border-primary-500"
                >
                  <NuxtLink class="group" :to="item._path">
                    <div class="p-5">
                      <div class="relative mb-4">
                        <img
                          :src="item.cover"
                          :alt="item.title"
                          class="rounded-lg"
                        />
                      </div>
                      <div class="mb-6 flex gap-2">
                        <div>
                          <BaseHeading
                            tag="h3"
                            size="xl"
                            weight="medium"
                            class="text-primary-600"
                          >
                            {{ item.title }}
                          </BaseHeading>
                          <BaseParagraph
                            size="xs"
                            class="min-h-[110px] text-white"
                          >
                            {{ item.description }}
                          </BaseParagraph>
                        </div>
                      </div>
                    </div>
                    <div
                      class="border-muted-200 dark:border-muted-700 bg-muted-50 dark:bg-muted-700/50 flex items-center justify-between rounded-b-xl border-t px-5 py-3"
                    >
                      <div>
                        <p class="text-muted-400 font-sans text-sm">Comments</p>
                      </div>
                      <div>Share</div>
                    </div>
                  </NuxtLink>
                </BaseCard>
              </TransitionGroup>
            </div>
          </div>
        </div>
        <BlogTagsSideBar
          class="col-span-1"
          :tags="uniqueTags"
          :categories="uniqueCategories"
        />
      </div>
    </TairoContentWrapper>
  </div>
</template>
