<script setup lang="ts">
import IconCarouselDemo from '~/documentation/carousel/icon.vue'
import iconCarousel from '~/documentation/carousel/icon.vue?raw'
import UserCarouselDemo from '~/documentation/carousel/user.vue'
import userCarousel from '~/documentation/carousel/user.vue?raw'

definePageMeta({
  title: 'Markdown',
  documentation: {
    category: 'Addons',
    components: ['AddonMarkdownRemark'],
  },
})

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
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
                <UserCarouselDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(userCarousel)"
                class="prose max-w-full"
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
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Icon carousel properties -->
        <DocComponentMeta name="AddonCarouselIcons" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
