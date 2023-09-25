<script setup lang="ts">
const { y } = useNinjaWindowScroll()
const uniqueTags: any[] = []
const route = useRoute()

const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation(),
)

console.log("navigation", navigation.value);

type TFolder = {
  _path: string
  title: string
  children?: TFolder[]
}

const getChildren = (route: TFolder): TFolder[] | TFolder => {
  const children = route?.children || null
  if (children) {
    return children
      .map((child: TFolder) => {
        if (!child?.children) {
          return child
        } else {
          return getChildren(child)?.flatMap((item: TFolder) => item)
        }
      })
      .flatMap((item: TFolder) => item)
  } else {
    return route
  }
}

const baseFolder = navigation.value?.find(
  (item: TFolder) => item?._path === '/blog',
)
const posts = computed(() => getChildren(baseFolder))
console.log("posts", posts.value);

const getAllTagsAvailable = () => {
  const allTags = posts.map((obj) => obj.tags)
  console.log('allTags available', allTags)

  /* allTags.forEach((element) => {
    element.forEach((tag: any) => {
      if (!uniqueTags.includes(tag)) {
        uniqueTags.push(tag)
      }
    })
  }) */
}

onMounted(() => {
  //getAllTagsAvailable()
})
</script>

<template>
  <div class="my-10">
    <TairoContentWrapper>
      <div class="grid grid-cols-4 space-y-10">
        <div class="col-span-3">
          <div class="">
            <!-- <div>
							<h4 class="text-muted-400 mb-4 font-sans text-xs font-semibold uppercase">All Posts</h4>
						</div> -->
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
                        <!-- <BaseAvatar :src="item.customer.logo" size="sm" shape="straight" mask="blob" :data-tooltip="item.name" class="bg-muted-100 dark:bg-muted-700" /> -->
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
        <BlogTagsSideBar class="col-span-1" :data-tags="uniqueTags" />
      </div>
    </TairoContentWrapper>
  </div>
</template>
