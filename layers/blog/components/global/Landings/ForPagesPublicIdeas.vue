<script setup lang="ts">
import { useTimeAgo } from '@vueuse/core'

const { fetch: fetchIdeas, state: ideasState } = usePublicIdeas()
const ideas = computed(() => ideasState.ideas.map((idea) => ({
	...idea,
	createdAt: useTimeAgo(idea.created_at).value,
})))

onMounted(() => {
	fetchIdeas({ page: 1, perPage: 6, orderBy: { 'created_at': 'desc' } })
})
</script>

<template>
	<div>
		<div>
			<TairoContentWrapper>
				<div>
					<div>
						<div class="ltablet:grid-cols-3 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
							<TransitionGroup
								enter-active-class="transform-gpu"
								enter-from-class="opacity-0 -translate-x-full"
								enter-to-class="opacity-100 translate-x-0"
								leave-active-class="absolute transform-gpu"
								leave-from-class="opacity-100 translate-x-0"
								leave-to-class="opacity-0 -translate-x-full">
								<BaseCard v-for="idea in ideas" :key="idea.id" shape="curved" class="p-4">
									<nuxt-link :to="`/ideas/${idea.uuid}`">
										<div class="flex items-center gap-3">
											<div class="leading-none">
												<h4 class="text-muted-800 dark:text-muted-100 font-sans text-md font-medium">
													{{ idea?.industry?.name || 'No name' }}
												</h4>
												<p class="text-muted-400 font-sans text-xs">{{ idea?.industry?.type.toUpperCase() || 'N/A' }}</p>
											</div>
										</div>
										<div>
											<img :src="idea.image" :alt="idea?.name" class="rounded-lg" />
										</div>
										<div class="flex items-center justify-between mb-4">
											<div>
												<h4 class="text-muted-800 dark:text-pink-500 font-sans text-base font-medium">
													{{ idea?.name }}
												</h4>
												<BaseParagraph size="sm">
													{{ idea.description }}
												</BaseParagraph>
											</div>
										</div>
										<div class="text-muted-400 flex items-center justify-end absolute bottom-0 right-0 gap-1 mr-5 ">
											<Icon name="ph:calendar-blank-duotone" class="h-4 w-4" />
											<p class="font-sans text-sm">
												{{ idea.createdAt }}
											</p>
										</div>
									</nuxt-link>
								</BaseCard>
							</TransitionGroup>
						</div>
					</div>
				</div>
			</TairoContentWrapper>
		</div>
	</div>
</template>
