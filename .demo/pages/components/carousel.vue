<script setup lang="ts">
import {
  iconCarousel,
  userCarousel,
} from '@@/documentation/carousel'
import { team, topics } from '@@/documentation/carousel/data'

definePageMeta({
  title: 'Carousel',
  documentation: {
    category: 'Interaction',
    components: ['CarouselTeam', 'CarouselIcons'],
  },
})
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- User carousel -->
        <DocSection title="User Carousel" tag="1.0.0">
          <DocComponent label="User carousel example">
            <template #demo>
              <div class="pt-5">
                <CarouselTeam :slides-to-show="3" :slides="team" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="userCarousel" />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="CarouselTeam" />

        <!-- Icon carousel -->
        <DocSection title="Icon Carousel" tag="1.0.0">
          <DocComponent label="Icon carousel example">
            <template #demo>
              <div class="pt-5">
                <CarouselIcons :slides-to-show="6" :slides="topics" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="iconCarousel" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon carousel properties -->
        <DocComponentMeta name="CarouselIcons" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
