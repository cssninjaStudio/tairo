<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export interface CarouselSlideSkill {
  logo: string
  name: string
}

export interface CarouselSlideItem {
  avatar?: string
  badge?: string
  name?: string
  role?: string
  text?: string
  to?: RouteLocationRaw
  skills?: CarouselSlideSkill[]
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
    slidesToShow: 3,
    snapAlign: 'start',
    breakpoints: {
      300: {
        itemsToShow: 1,
        snapAlign: 'start',
      },
      768: {
        itemsToShow: 2,
        snapAlign: 'start',
      },
      1024: {
        itemsToShow: 3,
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
        <NuxtLink :to="slide.to">
          <BaseCard
            rounded="lg"
            class="hover:border-primary-500 dark:hover:border-primary-500 px-4 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <BaseAvatar
              :src="slide.avatar"
              :badge="slide.badge"
              size="xl"
              class="mx-auto"
            />
            <BaseHeading
              size="md"
              weight="semibold"
              class="text-muted-800 dark:text-white"
            >
              {{ slide.name }}
            </BaseHeading>
            <BaseText size="xs" class="text-muted-400 mb-2">
              {{ slide.role }}
            </BaseText>
            <BaseParagraph size="sm" class="text-muted-500">
              {{ slide.text }}
            </BaseParagraph>
            <div class="flex justify-center gap-4 pt-4">
              <BaseAvatar
                v-for="(skill, s) in slide.skills"
                :key="s"
                :src="skill.logo"
                size="xs"
                :data-nui-tooltip="skill.name"
                class="bg-muted-200 dark:bg-muted-700"
              />
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
  @apply p-2;
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
