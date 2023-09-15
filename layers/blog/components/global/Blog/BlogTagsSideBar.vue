<script setup lang="ts">


const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const posts = navigation.value?.find((item) => item?._path === '/blog')?.children?.[0].children || []


const tags = computed(() => {
    const tags: any[] = []
    const allTags = posts.map((obj: any) => obj.tags)
    allTags.forEach((element) => {
        element.forEach((tag: any) => {
            if (!tags.includes(tag)) {
                tags.push(tag)
            }
        })
    })

    return tags
})

const categories = computed(() => {
    const categories: any[] = []
    const allCategories = posts.map((obj: any) => obj.categories)
    allCategories.forEach((element) => {
        element.forEach((category: any) => {
            if (!categories.includes(category)) {
                categories.push(category)
            }
        })
    })

    return categories
})

</script>

<template>
	<div>
		<div>
			<div class="col-span-1 mt-2 h-screen sticky top-[110px] ms-2 overflow-auto flex flex-col items-start justify-start space-y-4">
				<div>
					<div class="flex justify-start sticky">
						<NuxtLink class="me-1" to="/blog">All Categories</NuxtLink>
					</div>
					<span class="flex py-4 gap-2 flex-wrap">
            <div v-for="(category, index) in categories" :key="index">
              <NuxtLink :to="`/blog/categories/${category}`">
                <BaseTag
                  shape="curved"
                  class="flex space-x-1 group hover:border-primary-500 hover:dark:border-primary-500 hover:text-primary-500 hover:dark:text-primary-500 transition-all duration-300">
                    <span>{{ category }}</span>
                </BaseTag>
              </NuxtLink>
            </div>
          </span>
				</div>
				<div>
					<div class="flex justify-start sticky ">
						<NuxtLink class="me-1" to="/blog">All Tags</NuxtLink>
					</div>
					<span class="flex py-4 gap-2 flex-wrap">
						<div v-for="(tag, index) in tags" :key="index">
							<NuxtLink :to="`/blog/tags/${tag}`">
								<BaseTag
									shape="curved"
									class="flex space-x-1 group hover:border-primary-500 hover:dark:border-primary-500 hover:text-primary-500 hover:dark:text-primary-500 transition-all duration-300">
									<Icon name="heroicons:tag" class="w-4 h-4" />
									<span>{{ tag }}</span>
								</BaseTag>
							</NuxtLink>
						</div>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
