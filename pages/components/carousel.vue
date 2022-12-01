<script setup lang="ts">
import {
  iconCarousel,
  userCarousel,
} from '@@/documentation/components/carousel'
import { team, topics } from '@@/documentation/components/carousel/data'

definePageMeta({
  title: 'Carousel',
  documentation: {
    category: 'Interaction',
    components: ['BaseCarouselTeam', 'BaseCarouselIcons'],
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
                <BaseCarouselTeam :slides-to-show="3" :slides="team" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="userCarousel" />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="BaseCarouselTeam" />

        <!-- Icon carousel -->
        <DocSection title="Icon Carousel" tag="1.0.0">
          <DocComponent label="Icon carousel example">
            <template #demo>
              <div class="pt-5">
                <BaseCarouselIcons :slides-to-show="6" :slides="topics" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="iconCarousel" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon carousel properties -->
        <DocComponentMeta name="BaseCarouselIcons" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
