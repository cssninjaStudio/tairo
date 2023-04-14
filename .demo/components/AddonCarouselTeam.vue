<script lang="ts">
import 'vue3-carousel/dist/carousel.css'
</script>

<script setup lang="ts">
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import type { RouteLocationRaw } from 'vue-router'

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
  slidesToShow?: number
  slides: CarouselSlideItem[]
}

const props = withDefaults(defineProps<CarouselProps>(), {
  slidesToShow: 3,
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
      }"
    >
      <Slide v-for="(slide, index) in props.slides" :key="index">
        <NuxtLink :to="slide.to">
          <BaseCard
            shape="curved"
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
                :data-tooltip="skill.name"
                class="bg-muted-200 dark:bg-muted-700"
              />
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
