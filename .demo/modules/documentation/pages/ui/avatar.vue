<script setup lang="ts">
import CircleBadgeDemo from '#examples/avatar/circle-badge.vue'
import circleBadge from '#examples/avatar/circle-badge.vue?raw'
import CircleDotDemo from '#examples/avatar/circle-dot.vue'
import circleDot from '#examples/avatar/circle-dot.vue?raw'
import CircleFakeBadgeDemo from '#examples/avatar/circle-fake-badge.vue'
import circleFakeBadge from '#examples/avatar/circle-fake-badge.vue?raw'
import CircleFakeColorsDemo from '#examples/avatar/circle-fake-colors.vue'
import circleFakeColors from '#examples/avatar/circle-fake-colors.vue?raw'
import CircleFakeDemo from '#examples/avatar/circle-fake.vue'
import circleFake from '#examples/avatar/circle-fake.vue?raw'
import CircleSizeDemo from '#examples/avatar/circle-size.vue'
import circleSize from '#examples/avatar/circle-size.vue?raw'
import MasksDemo from '#examples/avatar/masks.vue'
import masks from '#examples/avatar/masks.vue?raw'
import SquareBadgeDemo from '#examples/avatar/square-badge.vue'
import squareBadge from '#examples/avatar/square-badge.vue?raw'
import SquareDotDemo from '#examples/avatar/square-dot.vue'
import squareDot from '#examples/avatar/square-dot.vue?raw'
import SquareFakeBadgeDemo from '#examples/avatar/square-fake-badge.vue'
import squareFakeBadge from '#examples/avatar/square-fake-badge.vue?raw'
import SquareFakeColorsDemo from '#examples/avatar/square-fake-colors.vue'
import squareFakeColors from '#examples/avatar/square-fake-colors.vue?raw'
import SquareFakeDemo from '#examples/avatar/square-fake.vue'
import squareFake from '#examples/avatar/square-fake.vue?raw'
import SquareSizeDemo from '#examples/avatar/square-size.vue'
import squareSize from '#examples/avatar/square-size.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
      <template #content>
        <!-- Avatar size -->
        <DocSection title="Avatar sizes" tag="1.0.0">
          <DocComponent label="Circle avatar sizes">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <CircleSizeDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(circleSize)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Avatar square size -->
        <DocSection title="Avatar sizes" tag="1.0.0">
          <DocComponent label="Square avatar sizes">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <SquareSizeDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(squareSize)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Fallback -->
        <!-- DocSection title="Avatar sizes" tag="1.0.0">
          <DocComponent label="Square avatar sizes">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseAvatar src="no-file.jpg" size="xs" shape="straight" />
                <BaseAvatar src="no-file.jpg" shape="straight" />
                <BaseAvatar src="no-file.jpg" size="md" shape="straight" />
                <BaseAvatar src="no-file.jpg" size="lg" shape="straight" />
                <BaseAvatar src="no-file.jpg" size="xl" shape="straight" />
                <BaseAvatar src="no-file.jpg" size="2xl" shape="straight" />
                <BaseAvatar src="no-file.jpg" size="3xl" shape="straight" />
                <BaseAvatar src="no-file.jpg" size="4xl" shape="straight" />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="squareSize" fullwidth />
            </template>
          </DocComponent>
        </DocSection -->

        <!-- Circle dot -->
        <DocSection title="Avatar dot" tag="1.0.0">
          <DocComponent label="Circle avatar dot">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <CircleDotDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(circleDot)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Square dot -->
        <DocSection title="Avatar dot" tag="1.0.0">
          <DocComponent label="Square avatar dot">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <SquareDotDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(squareDot)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Avatar badge -->
        <DocSection title="Avatar badges" tag="1.0.0">
          <DocComponent label="Circle avatar badges">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <CircleBadgeDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(circleBadge)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Avatar badge -->
        <DocSection title="Avatar badges" tag="1.0.0">
          <DocComponent label="Square avatar badges">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <SquareBadgeDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(squareBadge)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Fake size -->
        <DocSection title="Fake avatar" tag="1.0.0">
          <DocComponent label="Circle fake sizes">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <CircleFakeDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(circleFake)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Fake square size -->
        <DocSection title="Fake avatar" tag="1.0.0">
          <DocComponent label="Square fake sizes">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <SquareFakeDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(squareFake)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Fake badge -->
        <DocSection title="Fake badge" tag="1.0.0">
          <DocComponent label="Circle fake badges">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <CircleFakeBadgeDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(circleFakeBadge)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Fake square badge -->
        <DocSection title="Fake badge" tag="1.0.0">
          <DocComponent label="Square fake badges">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <SquareFakeBadgeDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(squareFakeBadge)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Fake colors -->
        <DocSection title="Fake colors" tag="1.0.0">
          <DocComponent label="Circle fake colors">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <CircleFakeColorsDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(circleFakeColors)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Fake square colors -->
        <DocSection title="Fake colors" tag="1.0.0">
          <DocComponent label="Square fake colors">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <SquareFakeColorsDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(squareFakeColors)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- SVG Masks -->
        <DocSection title="SVG Masks" tag="1.0.0">
          <DocComponent label="Avatar svg masks">
            <template #demo>
              <div class="flex flex-wrap items-end gap-2">
                <MasksDemo />
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(masks)" fullwidth />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="BaseAvatar" />
      </template>

      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
