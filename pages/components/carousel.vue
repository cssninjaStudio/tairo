<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/components/carousel/toc'
import {
  iconCarousel,
  userCarousel,
} from '@@/documentation/components/carousel'
import {
  iconItemProps,
  iconProps,
  userItemProps,
  userProps,
} from '@@/documentation/components/carousel/properties'
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
        <DocSection id="carousel-user" title="User Carousel" tag="1.0.0">
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

        <!-- User carousel properties -->
        <DocProps
          id="carousel-user-props"
          component="User Carousel"
          :properties="userProps.props"
          :slots="userProps.slots"
        />

        <!-- User carousel item properties -->
        <DocProps
          id="carousel-user-item-props"
          component="User slide"
          :properties="userItemProps.props"
          :slots="userItemProps.slots"
        />

        <!-- Icon carousel -->
        <DocSection id="carousel-icons" title="Icon Carousel" tag="1.0.0">
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
        <DocProps
          id="carousel-icons-props"
          component="Icon Carousel"
          :properties="iconProps.props"
          :slots="iconProps.slots"
        />

        <!-- Icon carousel item properties -->
        <DocProps
          id="carousel-icons-item-props"
          component="Icon slide"
          :properties="iconItemProps.props"
          :slots="iconItemProps.slots"
        />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc :anchors="toc" />
      </template>
    </DocLayout>
  </div>
</template>
