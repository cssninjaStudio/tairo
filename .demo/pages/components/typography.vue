<script setup lang="ts">
import {
  heading,
  paragraph,
  text,
} from '@@/documentation/typography'

definePageMeta({
  title: 'Typography',
  documentation: {
    category: 'Content',
    components: ['BaseHeading', 'BaseParagraph', 'BaseText'],
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
        <!-- Content heading -->
        <DocSection title="Heading" tag="1.0.0">
          <DocComponent label="Heading component examples">
            <template #demo>
              <div class="flex flex-col space-y-3">
                <BaseHeading
                  as="h2"
                  size="3xl"
                  weight="extrabold"
                  class="text-muted-800 dark:text-white"
                >
                  A huge heading
                </BaseHeading>
                <BaseHeading
                  as="h2"
                  size="2xl"
                  weight="bold"
                  class="text-muted-800 dark:text-white"
                >
                  A bold and very large heading
                </BaseHeading>
                <BaseHeading
                  as="h2"
                  size="lg"
                  weight="semibold"
                  class="text-muted-800 dark:text-white"
                >
                  A smaller and less thicker heading
                </BaseHeading>
                <BaseHeading
                  as="h2"
                  size="md"
                  weight="medium"
                  class="text-muted-400"
                >
                  Smaller and using another color
                </BaseHeading>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="heading" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Heading properties -->
        <DocComponentMeta name="BaseHeading" />

        <!-- Content paragraph -->
        <DocSection title="Paragraph" tag="1.0.0">
          <DocComponent label="Paragraph component examples">
            <template #demo>
              <div class="grid gap-6 md:grid-cols-2">
                <div class="flex flex-col">
                  <BaseParagraph class="text-muted-400 dark:text-muted-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Erat enim Polemonis. Duo Reges: constructio interrete.
                    Philosophi autem in suis lectulis plerumque moriuntur.
                  </BaseParagraph>
                </div>
                <div class="flex flex-col space-y-2">
                  <BaseParagraph
                    size="sm"
                    class="text-muted-400 dark:text-muted-400"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Erat enim Polemonis. Duo Reges: constructio interrete.
                    Philosophi autem in suis lectulis plerumque moriuntur.
                  </BaseParagraph>
                  <BaseParagraph
                    size="xs"
                    weight="semibold"
                    class="text-success-500"
                  >
                    Any text can have a different color
                  </BaseParagraph>
                </div>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="paragraph" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Paragraph properties -->
        <DocComponentMeta name="BaseParagraph" />

        <!-- Content text -->
        <DocSection title="Text" tag="1.0.0">
          <DocComponent label="Text component examples">
            <template #demo>
              <div class="grid gap-6 md:grid-cols-2">
                <div class="flex flex-col">
                  <BaseText class="text-muted-500 dark:text-muted-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Erat enim Polemonis. Duo Reges: constructio interrete.
                    Philosophi autem in suis lectulis plerumque moriuntur.
                  </BaseText>
                </div>
                <div class="flex flex-col space-y-2">
                  <BaseText
                    size="sm"
                    class="text-muted-400 dark:text-muted-400"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Erat enim Polemonis. Duo Reges: constructio interrete.
                    Philosophi autem in suis lectulis plerumque moriuntur.
                  </BaseText>
                  <BaseText size="xs" weight="medium" class="text-success-500">
                    Any text can have a different color
                  </BaseText>
                </div>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="text" />
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
