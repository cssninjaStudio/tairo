<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    icon: string
    to?: string
  }>(),
  {
    to: '/',
  },
)
</script>

<template>
  <NuxtLink :to="props.to" class="relative rounded-xl">
    <BaseCard
      shape="curved"
      elevated-hover
      class="dark:!bg-muted-900 hover:!border-primary-500 relative z-10 p-5"
    >
      <div
        class="gridlines relative mb-4 flex h-40 w-full items-center justify-center overflow-hidden"
      >
        <div
          class="nui-mask nui-mask-hexed relative mb-2 flex h-[84px] w-[84px] shrink-0 items-center justify-center"
        >
          <div
            class="animate-spin-slow from-primary-100 to-primary-500 dark:from-primary-800 absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-tr blur-sm transition-all duration-200"
          ></div>
          <div
            class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-[80px] w-[80px] items-center justify-center bg-white"
          >
            <Icon :name="props.icon" class="text-primary-500 h-7 w-7" />
          </div>
        </div>
        <div
          class="dark:bg-muted-900 absolute -right-4 bottom-0 h-full w-24 scale-105 bg-white blur-lg"
        ></div>
      </div>
      <div>
        <BaseHeading
          as="h3"
          size="xl"
          weight="light"
          lead="tight"
          class="text-muted-800 mx-auto dark:text-white"
        >
          {{ props.title }}
        </BaseHeading>
        <BaseParagraph
          size="sm"
          class="text-muted-500 dark:text-muted-100 mx-auto my-2"
        >
          <slot></slot>
        </BaseParagraph>
      </div>
    </BaseCard>
  </NuxtLink>
</template>

<style scoped>
.gridlines {
  background-image: url(/img/illustrations/gridlines.svg);
}

.dark .gridlines {
  background-image: url(/img/illustrations/gridlines-predark.svg);
}
</style>
