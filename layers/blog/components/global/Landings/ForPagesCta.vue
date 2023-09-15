<script setup lang="ts">
type TProps = {
	data: {
		title: {
			type: String
			default: 'Default title'
		}
		subTitle: {
			type: String
			default: 'Default title'
		}
		button: {
			type: String
			default: 'Default title'
		}
	}
}
const props = defineProps<TProps>()
</script>
<template>
	<div class="dark:bg-muted-900 bg-white pt-24">
		<div class="mx-auto w-full max-w-7xl px-4">
			<div class="mx-auto w-full relative group">
				<div
					class="absolute inset-0 from-primary-600/90 ltablet:grid ltablet:grid-cols-2 ltablet:gap-4 overflow-hidden rounded-3xl bg-gradient-to-br group-hover:from-info-600/90 group-hover:to-primary-600/90 to-indigo-600/90 shadow-xl backdrop-blur lg:grid lg:grid-cols-2 lg:gap-4 transition-all duration-300"></div>
				<div class="absolute w-full bottom-0 right-0 -mt-6 overflow-hidden rounded-3xl">
					<img class="" src="/images/landing/smoke-cloud.png" alt="" />
				</div>
				<div class="absolute top-0 bottom-0 right-0 overflow-hidden rounded-3xl">
					<img src="/images/landing/light-bulb.png" alt="" class="h-full group-hover:grayscale-0 grayscale transition-all duration-300" />
				</div>
				<div
					class=" relative h-96 z-10 ltablet:grid ltablet:grid-cols-2 ltablet:gap-4 overflow-hidden rounded-3xl shadow-xl lg:grid lg:grid-cols-2 lg:gap-4 backdrop-blur group-hover:backdrop-blur-0 transition-all duration-300">
					<div class="ltablet:py-28 ltablet:pr-0 flex items-center px-6 pb-12 pt-10 sm:px-16 sm:pt-16 lg:py-28 lg:pr-0 xl:px-20">
						<div class="ltablet:self-center font-sans lg:self-center">
							<h2 class="text-3xl font-medium text-white sm:text-4xl mt-0">
								<span class="block">{{ data.title }}</span>
							</h2>
							<p class="mt-4 text-lg leading-6 text-white">{{ data.subTitle }}</p>
							<div class="mt-8 flex items-center gap-2">
								<ButtonStartNow to="/auth/signup" class="!h-11 !text-lg"> {{ data.button }}</ButtonStartNow>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
