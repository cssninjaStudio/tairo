<script setup lang="ts">
type TProps = {
	data: {
		title: {
			type: String
			default: 'Default title'
		}
		text: {
			type: String
			default: 'Default text'
		}
		link: {
			name: {
				type: String
				default: 'Default name'
			},
			url: {
				type: String
				default: ""
			}
		}
	}
}
const props = defineProps<TProps>()
</script>
<template>
	<div class="dark:bg-muted-900 bg-white pt-24">
		<div class="mx-auto w-full max-w-7xl px-4">
			<div class="text-center">
				<div>
					<BaseHeading 
					as="h3"
					size="xl"
					weight="semibold"
					lead="tight"
					class="text-muted-800 mb-2 dark:text-white"
					>
						{{ data.title }}
					</BaseHeading>
				</div>
				<div>
					<BaseParagraph>
						{{ data.text }}
					</BaseParagraph>
				</div>
				<div>
					<BaseParagraph >
						<span>
							<nuxt-link class="text-pink-600" :to="data.link.url">
								Join us 		 
							</nuxt-link> 
								today and elevate your {{ data.link.name }} career.
						</span>
					</BaseParagraph>
				</div>

			</div>
		</div>
	</div>
</template>
