<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation(),
)

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
</script>

<template>
  <div class="mt-80">
    <span class="sticky top-[85px] flex justify-end">
      <NuxtLink class="me-1" to="/blog">See all Post →</NuxtLink>
    </span>
    <div
      class="sticky top-[110px] col-span-1 ms-2 mt-2 flex h-screen flex-col items-start justify-start space-y-4 overflow-auto"
    >
      <BaseCard
        v-for="(post, index) in posts"
        :key="index"
        @click="$router.push(`${post._path}`)"
        shape="curved"
        class="hover:border-primary-500 hover:dark:border-primary-500 group relative mb-1 cursor-pointer overflow-hidden border border-transparent"
      >
        <div class="h-44 w-full">
          <img
            class="object-fill transition-all duration-300 group-hover:scale-125"
            :src="post.cover"
            alt=""
          />
        </div>
        <div
          class="absolute inset-x-0 bottom-0 bg-white/90 p-4 backdrop-blur dark:bg-slate-900/50"
        >
          <BaseHeading
            as="h4"
            size="sm"
            weight="semibold"
            lead="tight"
            class="text-muted-800 mb-2 mt-1 dark:text-white"
          >
            {{ post.title }}
          </BaseHeading>
          <BaseParagraph
            size="sm"
            lead="tight"
            class="text-muted-400 dark:text-muted-300 line-clamp-1"
          >
            {{ post.description }}
          </BaseParagraph>
        </div>
      </BaseCard>
    </div>
  </div>
</template>
