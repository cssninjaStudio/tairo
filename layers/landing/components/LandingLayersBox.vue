<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    icon: string
    to?: string
    color?: string
  }>(),
  {
    to: '/',
    color: 'primary',
  },
)
</script>

<template>
  <NuxtLink :to="props.to" class="relative rounded-xl">
    <BaseCard
      shape="curved"
      elevated-hover
      class="dark:!bg-muted-900 relative z-10 p-5 motion-reduce:hover:shadow-none"
      :class="[
        props.color === 'primary'
          ? 'motion-safe:hover:!border-primary-500'
          : '',
        props.color === 'purple' ? 'motion-safe:hover:!border-purple-500' : '',
        props.color === 'indigo' ? 'motion-safe:hover:!border-indigo-500' : '',
      ]"
    >
      <div
        class="gridlines relative mb-4 flex h-40 w-full items-center justify-center overflow-hidden"
      >
        <div
          class="nui-mask nui-mask-hexed relative mb-2 flex h-[84px] w-[84px] shrink-0 items-center justify-center"
        >
          <div
            class="motion-safe:animate-spin-slow absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-tr blur-sm motion-safe:transition-all motion-safe:duration-200"
            :class="[
              props.color === 'primary'
                ? 'from-primary-100 to-primary-500 dark:from-primary-800'
                : '',
              props.color === 'purple'
                ? 'from-purple-100 to-purple-500 dark:from-purple-800'
                : '',
              props.color === 'indigo'
                ? 'from-indigo-100 to-indigo-500 dark:from-indigo-800'
                : '',
            ]"
          ></div>
          <div
            class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-[80px] w-[80px] items-center justify-center bg-white"
          >
            <Icon
              :name="props.icon"
              class="h-7 w-7"
              :class="[
                props.color === 'primary' ? 'text-primary-500' : '',
                props.color === 'purple' ? 'text-purple-500' : '',
                props.color === 'indigo' ? 'text-indigo-500' : '',
              ]"
            />
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
