<script setup lang="ts">
type TProps = {
	name: string
	jobTitle: string
	text: string
	image?: string
}
withDefaults(defineProps<TProps>(), {
	image: '/male-cartoon.svg'
})

</script>

<template>
	<div class="dark:bg-muted-900 bg-white max-w-7xl">
		<div class="mx-auto w-full px-4">
			<LandingLayersBoxImages :title="`${name} (${jobTitle})`" :img="image">
				<div class="flex items-center justify-center gap-2 relative bottom-16">
					<Icon name="uiw:star-on" class="h-3 w-3" :class="'text-yellow-400'" />
					<Icon name="uiw:star-on" class="h-3 w-3" :class="'text-yellow-400'" />
					<Icon name="uiw:star-on" class="h-3 w-3" :class="'text-yellow-400'" />
					<Icon name="uiw:star-on" class="h-3 w-3" :class="'text-yellow-400'" />
					<Icon name="uiw:star-on" class="h-3 w-3" :class="'text-yellow-400'" />
				</div>
				{{ text }}
			</LandingLayersBoxImages>
		</div>
	</div>
</template>
