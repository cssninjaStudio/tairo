<script setup lang="ts">
useSeoMeta({
	title: 'HorizonHub.io • Blog Tags',
	description: 'This is our blog',
	ogTitle: 'HorizonHub.io • Blog Tags',
	ogDescription: 'This is our blog',
	/* ogImage: '/images/meta/ideas.png', */
	ogUrl: 'https://horizonhub.io',
	twitterTitle: 'HorizonHub.io • Blog Tags',
	twitterDescription: 'This is our blog'
})
definePageMeta({
	title: 'HorizonHub.io • Blog Tags',
	description: 'This is our blog',
	layout: 'empty',
	color: 'dark',
	colorMode: 'dark',
	auth: false
})
const { y } = useNinjaWindowScroll()

</script>
<template>
	<div class="group/landing overflow-hidden dark:bg-muted-900 bg-white" :class="y > 70 ? 'scrolled' : ''">
		<div class=" pt-16  max-w-7xl mx-auto">
			<LandingNavbar />
			<BlogTagsView />
			<LandingFooter />
		</div>
	</div>
</template>
