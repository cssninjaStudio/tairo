<script setup lang="ts">
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import type { RouteLocationRaw } from 'vue-router'
import 'vue3-carousel/dist/carousel.css'

export interface CarouselSlideItem {
  icon?: string
  title?: string
  to?: RouteLocationRaw
}

export interface CarouselProps {
  slides: CarouselSlideItem[]
  carousel?: {
    // carousel props
    itemsToShow?: number
    itemsToScroll?: number
    wrapAround?: boolean
    throttle?: number
    snapAlign?: 'start' | 'end' | 'center' | 'center-even' | 'center-odd'
    transition?: number
    breakpoints?: Record<string, any>
    autoplay?: number
    pauseAutoplayOnHover?: boolean
    modelValue?: number
    mouseDrag?: boolean
    touchDrag?: boolean
    dir?: 'rtl' | 'ltr'
    i18n?: Record<string, any>
    settings?: Record<string, any>

    // carousel events
    onBeforeInit?: () => void
    onInit?: () => void
    onSlideStart?: (props: {
      slidingToIndex: number
      currentSlideIndex: number
      prevSlideIndex: number
      slidesCount: number
    }) => void
    onLoop?: (props: {
      currentSlideIndex: number
      slidingToIndex: number
    }) => void
    onUpdateModelValue?: (currentSlideIndex: number) => void
    onSlideEnd?: (props: {
      currentSlideIndex: number
      prevSlideIndex: number
      slidesCount: number
    }) => void
  }
}

const props = withDefaults(defineProps<CarouselProps>(), {
  slides: () => [],
  carousel: () => ({
    itemsToShow: 7,
    snapAlign: 'start',
    breakpoints: {
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
    },
  }),
})
</script>

<template>
  <div class="relative">
    <Carousel v-bind="props.carousel">
      <Slide v-for="(slide, index) in props.slides" :key="index">
        <NuxtLink :to="slide.to" class="cursor-pointer">
          <BaseCard
            rounded="lg"
            class="text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 flex min-w-[100px] items-center justify-center px-2 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div class="text-center">
              <Icon
                v-if="slide.icon"
                :name="slide.icon"
                class="mx-auto mb-2 !block size-7"
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
        <Navigation />
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
