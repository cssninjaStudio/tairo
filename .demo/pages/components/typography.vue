<script setup lang="ts">
import HeadingDemo from '~/documentation/typography/heading.vue'
import heading from '~/documentation/typography/heading.vue?raw'
import ParagraphDemo from '~/documentation/typography/paragraph.vue'
import paragraph from '~/documentation/typography/paragraph.vue?raw'
import TextDemo from '~/documentation/typography/text.vue'
import text from '~/documentation/typography/text.vue?raw'

definePageMeta({
  title: 'Typography',
  documentation: {
    category: 'NUI Elements',
    components: ['BaseHeading', 'BaseParagraph', 'BaseText'],
  },
})

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}

const demoBreadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'lucide:home',
    to: '/',
  },
  {
    label: 'Components Hub',
    hideLabel: false,
    to: '/components',
  },
  {
    label: 'Typography',
    hideLabel: false,
    to: '#',
  },
]
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="demoBreadcrumb" />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Content heading -->
        <DocSection title="Heading" tag="1.0.0">
          <DocComponent label="Heading component examples">
            <template #demo>
              <div class="flex flex-col space-y-3">
                <HeadingDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(heading)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Heading properties -->
        <DocComponentMeta name="BaseHeading" />

        <!-- Content paragraph -->
        <DocSection title="Paragraph" tag="1.0.0">
          <DocComponent label="Paragraph component examples">
            <template #demo>
              <ParagraphDemo />
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(paragraph)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Paragraph properties -->
        <DocComponentMeta name="BaseParagraph" />

        <!-- Content text -->
        <DocSection title="Text" tag="1.0.0">
          <DocComponent label="Text component examples">
            <template #demo>
              <TextDemo />
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(text)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Text properties -->
        <DocComponentMeta name="BaseText" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
