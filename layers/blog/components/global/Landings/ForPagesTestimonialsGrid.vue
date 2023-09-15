<script setup lang="ts">
type TProps = {
	testimonials: {
		type: object[]
		default: () => []
	},
}
const props = defineProps<TProps>()
</script>

<template>
	<div class="ptablet:grid-cols-2 grid sm:grid-cols-3">
        <LandingsForPagesTestimonials
                v-for="testimonial in testimonials"
                :key="testimonial.name"
                :name="testimonial.name"
                :jobTitle="testimonial.jobTitle"
                :image="testimonial.image"
                :text="testimonial.text"
        />
	</div>
</template>
