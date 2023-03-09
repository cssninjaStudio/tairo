<script setup lang="ts">
import CircleBadgeDemo from '~/documentation/avatar/circle-badge.vue'
import circleBadge from '~/documentation/avatar/circle-badge.vue?raw'
import CircleDotDemo from '~/documentation/avatar/circle-dot.vue'
import circleDot from '~/documentation/avatar/circle-dot.vue?raw'
import CircleFakeDemo from '~/documentation/avatar/circle-fake.vue'
import circleFake from '~/documentation/avatar/circle-fake.vue?raw'
import CircleFakeBadgeDemo from '~/documentation/avatar/circle-fake-badge.vue'
import circleFakeBadge from '~/documentation/avatar/circle-fake-badge.vue?raw'
import CircleFakeColorsDemo from '~/documentation/avatar/circle-fake-colors.vue'
import circleFakeColors from '~/documentation/avatar/circle-fake-colors.vue?raw'
import CircleSizeDemo from '~/documentation/avatar/circle-size.vue'
import circleSize from '~/documentation/avatar/circle-size.vue?raw'
import SquareBadgeDemo from '~/documentation/avatar/square-badge.vue'
import squareBadge from '~/documentation/avatar/square-badge.vue?raw'
import SquareDotDemo from '~/documentation/avatar/square-dot.vue'
import squareDot from '~/documentation/avatar/square-dot.vue?raw'
import SquareFakeDemo from '~/documentation/avatar/square-fake.vue'
import squareFake from '~/documentation/avatar/square-fake.vue?raw'
import SquareFakeBadgeDemo from '~/documentation/avatar/square-fake-badge.vue'
import squareFakeBadge from '~/documentation/avatar/square-fake-badge.vue?raw'
import SquareFakeColorsDemo from '~/documentation/avatar/square-fake-colors.vue'
import squareFakeColors from '~/documentation/avatar/square-fake-colors.vue?raw'
import SquareSizeDemo from '~/documentation/avatar/square-size.vue'
import squareSize from '~/documentation/avatar/square-size.vue?raw'

definePageMeta({
  title: 'Avatars',
  documentation: {
    category: 'NUI Elements',
    components: ['BaseAvatar'],
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
    label: 'Avatars',
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
        <!-- Avatar size -->
        <DocSection title="Avatar sizes" tag="1.0.0">
          <DocComponent label="Circle avatar sizes">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <CircleSizeDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(circleSize)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(squareSize)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Fallback -->
        <!-- DocSection title="Avatar sizes" tag="1.0.0">
          <DocComponent label="Square avatar sizes">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseAvatar src="no-file.jpg" size="xs" shape="square" />
                <BaseAvatar src="no-file.jpg" shape="square" />
                <BaseAvatar src="no-file.jpg" size="md" shape="square" />
                <BaseAvatar src="no-file.jpg" size="lg" shape="square" />
                <BaseAvatar src="no-file.jpg" size="xl" shape="square" />
                <BaseAvatar src="no-file.jpg" size="2xl" shape="square" />
                <BaseAvatar src="no-file.jpg" size="3xl" shape="square" />
                <BaseAvatar src="no-file.jpg" size="4xl" shape="square" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="squareSize" class="prose max-w-full" />
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
              <DocMarkdown
                :source="wrapVueMarkdown(circleDot)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(squareDot)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(circleBadge)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(squareBadge)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(circleFake)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(squareFake)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(circleFakeBadge)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(squareFakeBadge)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(circleFakeColors)"
                class="prose max-w-full"
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
              <DocMarkdown
                :source="wrapVueMarkdown(squareFakeColors)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="BaseAvatar" />
      </template>

      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
