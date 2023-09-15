<script setup lang="ts">
type TProps = {
	data: {
		titleSection1?: String
		titleColored?: String
		titleSection2?: String
		paragraphSection1?: String
		paragraphColored?: String
		paragraphSection2?: String
		subParagraph?: String
		image?: String
		imageSide?: String
        buttonTxt?: String
        buttonUrl?: String
	}
}

const props = defineProps<TProps>()

</script>

<template>
	<div class="ltablet:grid-cols-2 grid w-full gap-4 lg:grid-cols-2">
        <div v-show="data.imageSide === 'left'" class="mr-4">
            <img :src="data.image" class="rounded-2xl w-3/4 mx-auto">
        </div>
        <div>
            <BaseHeading as="h1" size="4xl" class="text-muted-800 mx-auto dark:text-white"> 
                {{ data.titleSection1 }} 
                <span class="text-pink-500">
                    {{ data.titleColored }}
                </span>
                {{ data.titleSection2 }}
            </BaseHeading>
            <BaseParagraph size="md" lead="normal" class="text-muted-500 dark:text-white">
                {{ data.paragraphSection1 }}
                <span class="text-pink-500">
                    {{ data.paragraphColored }}
                </span>
                {{ data.paragraphSection2 }}
            </BaseParagraph>
            <BaseParagraph size="md" lead="normal" class="text-muted-500 dark:text-white">
                {{ data.subParagraph }}
            </BaseParagraph>
            <BaseButton :to="data.buttonUrl" color="primary" shape="curved" class="!h-11 !text-lg">
                {{ data.buttonTxt }}
            </BaseButton>
        </div>
		<div v-show="data.imageSide === 'right'" class="">
            <img :src="data.image" class="rounded-2xl w-3/4 mx-auto">
        </div>
	</div>
</template>
