<script setup lang="ts">
import elevation from '~/documentation/card/elevation.md?raw'
import elevationHover from '~/documentation/card/elevation-hover.md?raw'
import shapes from '~/documentation/card/shapes.md?raw'

definePageMeta({
  title: 'Cards',
  documentation: {
    category: 'Display',
    components: ['BaseCard'],
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
        <!-- Card shapes -->
        <DocSection title="Card shapes" tag="1.0.0">
          <DocComponent label="Card shapes example">
            <template #demo>
              <div class="grid gap-4 md:grid-cols-3">
                <BaseCard shape="straight" class="p-6">
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="semibold"
                    lead="tight"
                    class="text-muted-800 mb-2 dark:text-white"
                  >
                    Iam a card
                  </BaseHeading>
                  <BaseParagraph size="sm" lead="tight" class="text-muted-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </BaseParagraph>
                </BaseCard>
                <BaseCard shape="rounded" class="p-6">
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="semibold"
                    lead="tight"
                    class="text-muted-800 mb-2 dark:text-white"
                  >
                    Iam a card
                  </BaseHeading>
                  <BaseParagraph size="sm" lead="tight" class="text-muted-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </BaseParagraph>
                </BaseCard>
                <BaseCard shape="curved" class="p-6">
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="semibold"
                    lead="tight"
                    class="text-muted-800 mb-2 dark:text-white"
                  >
                    Iam a card
                  </BaseHeading>
                  <BaseParagraph size="sm" lead="tight" class="text-muted-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </BaseParagraph>
                </BaseCard>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="shapes" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Card elevation -->
        <DocSection title="Card elevation" tag="1.0.0">
          <DocComponent label="Card elevations example">
            <template #demo>
              <div class="grid gap-4 md:grid-cols-3">
                <BaseCard shape="straight" elevated class="p-6">
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="semibold"
                    lead="tight"
                    class="text-muted-800 mb-2 dark:text-white"
                  >
                    Iam a card
                  </BaseHeading>
                  <BaseParagraph size="sm" lead="tight" class="text-muted-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </BaseParagraph>
                </BaseCard>
                <BaseCard shape="rounded" elevated class="p-6">
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="semibold"
                    lead="tight"
                    class="text-muted-800 mb-2 dark:text-white"
                  >
                    Iam a card
                  </BaseHeading>
                  <BaseParagraph size="sm" lead="tight" class="text-muted-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </BaseParagraph>
                </BaseCard>
                <BaseCard shape="curved" elevated class="p-6">
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="semibold"
                    lead="tight"
                    class="text-muted-800 mb-2 dark:text-white"
                  >
                    Iam a card
                  </BaseHeading>
                  <BaseParagraph size="sm" lead="tight" class="text-muted-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </BaseParagraph>
                </BaseCard>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="elevation" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Card elevation hover -->
        <DocSection
          id="card-elevation-hover"
          title="Hover elevation"
          tag="1.0.0"
        >
          <DocComponent label="Hover elevations example">
            <template #demo>
              <div class="grid gap-4 md:grid-cols-3">
                <BaseCard shape="straight" elevated-hover class="p-6">
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="semibold"
                    lead="tight"
                    class="text-muted-800 mb-2 dark:text-white"
                  >
                    Iam a card
                  </BaseHeading>
                  <BaseParagraph size="sm" lead="tight" class="text-muted-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </BaseParagraph>
                </BaseCard>
                <BaseCard shape="rounded" elevated-hover class="p-6">
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="semibold"
                    lead="tight"
                    class="text-muted-800 mb-2 dark:text-white"
                  >
                    Iam a card
                  </BaseHeading>
                  <BaseParagraph size="sm" lead="tight" class="text-muted-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </BaseParagraph>
                </BaseCard>
                <BaseCard shape="curved" elevated-hover class="p-6">
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="semibold"
                    lead="tight"
                    class="text-muted-800 mb-2 dark:text-white"
                  >
                    Iam a card
                  </BaseHeading>
                  <BaseParagraph size="sm" lead="tight" class="text-muted-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </BaseParagraph>
                </BaseCard>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="elevationHover" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="BaseCard" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
