<script setup lang="ts">
import HeadingDemo from '#examples/typography/heading.vue'
import heading from '#examples/typography/heading.vue?raw'
import ParagraphDemo from '#examples/typography/paragraph.vue'
import paragraph from '#examples/typography/paragraph.vue?raw'
import TextDemo from '#examples/typography/text.vue'
import text from '#examples/typography/text.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Content heading -->
        <DocSection title="BaseHeading" tag="1.0.0">
          <DocComponent label="BaseHeading component examples">
            <template #demo>
              <div class="flex flex-col space-y-3">
                <HeadingDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(heading)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Heading properties -->
        <DocComponentMeta name="BaseHeading" />

        <!-- Content paragraph -->
        <DocSection title="BaseParagraph" tag="1.0.0">
          <DocComponent label="BaseParagraph component examples">
            <template #demo>
              <ParagraphDemo />
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(paragraph)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Paragraph properties -->
        <DocComponentMeta name="BaseParagraph" />

        <!-- Content text -->
        <DocSection title="BaseText" tag="1.0.0">
          <DocComponent label="BaseText component examples">
            <template #demo>
              <TextDemo />
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(text)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Text properties -->
        <DocComponentMeta name="BaseText" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
