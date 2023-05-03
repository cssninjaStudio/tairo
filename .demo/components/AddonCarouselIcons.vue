<script lang="ts">
import 'vue3-carousel/dist/carousel.css'
</script>

<script setup lang="ts">
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import type { RouteLocationRaw } from 'vue-router'

export interface CarouselSlideItem {
  icon?: string
  title?: string
  to?: RouteLocationRaw
}

export interface CarouselProps {
  slidesToShow?: number
  slides: CarouselSlideItem[]
}

const props = withDefaults(defineProps<CarouselProps>(), {
  slidesToShow: 7,
  slides: () => [],
})
</script>

<template>
  <div class="relative">
    <Carousel
      :items-to-show="slidesToShow"
      :slides="props.slides"
      :breakpoints="{
        300: {
          itemsToShow: 2.5,
          snapAlign: 'start',
        },
        768: {
          itemsToShow: 6,
          snapAlign: 'start',
        },
        900: {
          itemsToShow: 8,
          snapAlign: 'start',
        },
        1024: {
          itemsToShow: 7,
          snapAlign: 'start',
        },
      }"
    >
      <Slide v-for="(slide, index) in props.slides" :key="index">
        <NuxtLink :to="slide.to" class="cursor-pointer">
          <BaseCard
            shape="curved"
            class="text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 flex min-w-[100px] items-center justify-center px-2 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div class="text-center">
              <Icon
                v-if="slide.icon"
                :name="slide.icon"
                class="mx-auto mb-2 !block h-7 w-7"
              />
              <BaseHeading
                size="sm"
                weight="medium"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                {{ slide.title }}
              </BaseHeading>
            </div>
          </BaseCard>
        </NuxtLink>
      </Slide>

      <template #addons>
        <navigation />
      </template>
    </Carousel>
  </div>
</template>

<style lang="pcss" scoped>
.carousel__slide {
  @apply p-1;
}

:deep(.carousel__next--in-active),
:deep(.carousel__prev--in-active) {
  @apply opacity-70;
}

:deep(.carousel__next) {
  @apply end-0;
}

:deep(.carousel__next) svg {
  @apply -end-px;
}

:deep(.carousel__prev) {
  @apply end-8;
}

:deep(.carousel__prev) svg {
  @apply -start-px;
}

:deep(.carousel__next),
:deep(.carousel__prev) {
  @apply absolute -top-5 text-muted-400 transition-colors duration-300;
  left: initial;
}

:deep(.carousel__next) svg,
:deep(.carousel__prev) svg {
  @appy relative w-3 h-3;
}

:deep(.carousel__next:hover),
:deep(.carousel__prev:hover) {
  @apply text-primary-500;
}
</style>
