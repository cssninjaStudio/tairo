<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const posts = navigation.value?.find((item) => item?._path === '/blog')?.children?.[0].children
const data = computed(() => posts || [])
</script>

<template>
    <div>
        <span class="flex justify-end sticky top-[85px]">
            <NuxtLink class="me-1" to="/blog">See all Post →</NuxtLink>
        </span>
        <div class="col-span-1 mt-2 h-screen sticky top-[110px] ms-2 overflow-auto flex flex-col items-start justify-start space-y-4">
	          <BaseCard
                v-for="(post, index) in data"
                :key="index"
                @click="$router.push(`${post._path}`)"
                shape="curved"
                class="group cursor-pointer mb-1 overflow-hidden relative hover:border-primary-500 hover:dark:border-primary-500 border border-transparent"
	          >
	              <div class="h-44 w-full">
                    <img class="group-hover:scale-125 object-fill transition-all duration-300" :src="post.cover" alt="" />
                </div>
                <div class="backdrop-blur bg-white/90 dark:bg-slate-900/50 p-4 absolute bottom-0 inset-x-0">
                    <BaseHeading as="h4" size="sm" weight="semibold" lead="tight" class="text-muted-800 mb-2 dark:text-white mt-1">
                        {{ post.title }}
                    </BaseHeading>
                    <BaseParagraph size="sm" lead="tight" class="text-muted-400 dark:text-muted-300 line-clamp-1">
                        {{ post.description }}
                    </BaseParagraph>
                </div>
            </BaseCard>
        </div>
</div>
</template>

<style scoped>

</style>
