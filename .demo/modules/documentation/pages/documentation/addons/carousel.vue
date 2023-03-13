<script setup lang="ts">
import IconCarouselDemo from '../../../examples/carousel/icon.vue'
import iconCarousel from '../../../examples/carousel/icon.vue?raw'
import UserCarouselDemo from '../../../examples/carousel/user.vue'
import userCarousel from '../../../examples/carousel/user.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- User carousel -->
        <DocSection title="User Carousel" tag="1.0.0">
          <DocComponent label="User carousel example">
            <template #demo>
              <div class="pt-5">
                <UserCarouselDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(userCarousel)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="AddonCarouselTeam" />

        <!-- Icon carousel -->
        <DocSection title="Icon Carousel" tag="1.0.0">
          <DocComponent label="Icon carousel example">
            <template #demo>
              <div class="pt-5">
                <IconCarouselDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(iconCarousel)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon carousel properties -->
        <DocComponentMeta name="AddonCarouselIcons" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
