<script setup lang="ts">
type THeader = {
  title: string
  titleColored: string
  paragraph?: string
  image?: string
}

const { header } = useAppConfig()
</script>

<template>
  <div class="mx-auto w-full max-w-7xl px-4">
    <div class="absolute z-30 text-center">
      <BaseHeading
        as="h1"
        size="5xl"
        weight="light"
        lead="tight"
        class="text-muted-800 xs:!text-4xl mx-auto mb-4 max-w-2xl dark:text-white"
      >
        {{ header.title }}
        <span
          class="text-primary-500 font-hairline underline decoration-dotted underline-offset-4"
        >
          {{ header.titleColored }}
        </span>
      </BaseHeading>
      <BaseParagraph
        size="lg"
        class="text-muted-500 dark:text-muted-100 mx-auto max-w-2xl"
      >
        {{ header.paragraph }}
      </BaseParagraph>
      <BaseParagraph
        size="lg"
        class="text-muted-500 dark:text-muted-100 mx-auto mb-4 max-w-2xl"
      >
      </BaseParagraph>
      <div class="flex items-center justify-center"></div>
    </div>

    <div class="relative h-[280px] md:h-full">
      <img 
      v-if="header.image"
        class="relative top-8 w-full"
        :src="header.image"
        alt="wrinkled paper"
      />
    </div>
  </div>
</template>

<style scoped></style>
