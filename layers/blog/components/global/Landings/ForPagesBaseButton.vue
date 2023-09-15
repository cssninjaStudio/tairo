<script setup lang="ts">
type TProps = {
	data: {
		text: {
			type: String
		}
        url:{
            type: String
        }
	}
}
const props = defineProps<TProps>()
</script>
<template>
    <div>
        <ButtonStartNow :to="data.url" class="!h-11 !text-lg">
            {{ data.text }}
        </ButtonStartNow>
    </div>
</template>