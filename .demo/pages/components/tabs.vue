<script setup lang="ts">
import BoxedDemo from '~/documentation/tabs/boxed.vue'
import boxed from '~/documentation/tabs/boxed.vue?raw'
import BoxedIconsDemo from '~/documentation/tabs/boxed-icons.vue'
import boxedIcons from '~/documentation/tabs/boxed-icons.vue?raw'
import CenterDemo from '~/documentation/tabs/center.vue'
import center from '~/documentation/tabs/center.vue?raw'
import EndDemo from '~/documentation/tabs/end.vue'
import end from '~/documentation/tabs/end.vue?raw'
import IconsDemo from '~/documentation/tabs/icons.vue'
import icons from '~/documentation/tabs/icons.vue?raw'
import StartDemo from '~/documentation/tabs/start.vue'
import start from '~/documentation/tabs/start.vue?raw'

definePageMeta({
  title: 'Nav Tabs',
  documentation: {
    category: 'NUI Elements',
    components: ['BaseTabs'],
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
    label: 'Tabs',
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
        <!-- Tabs -->
        <DocSection title="Tabs" tag="1.0.0">
          <DocComponent label="Left aligned example">
            <template #demo>
              <div class="w-full max-w-sm">
                <StartDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(start)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tabs -->
        <DocSection title="Tabs" tag="1.0.0">
          <DocComponent label="Center aligned example">
            <template #demo>
              <div class="w-full max-w-sm">
                <CenterDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(center)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tabs -->
        <DocSection title="Tabs" tag="1.0.0">
          <DocComponent label="Right aligned example">
            <template #demo>
              <div class="w-full max-w-sm">
                <EndDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(end)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tabs -->
        <DocSection title="Tabs" tag="1.0.0">
          <DocComponent label="Tabs with icons example">
            <template #demo>
              <div class="w-full max-w-sm">
                <IconsDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(icons)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tabs -->
        <DocSection title="Tabs" tag="1.0.0">
          <DocComponent label="Tabs boxed example">
            <template #demo>
              <div class="w-full max-w-sm">
                <BoxedDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(boxed)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tabs -->
        <DocSection title="Tabs" tag="1.0.0">
          <DocComponent label="Tabs with icons example">
            <template #demo>
              <div class="w-full max-w-sm">
                <BoxedIconsDemo />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(boxedIcons)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tabs props -->
        <DocComponentMeta name="BaseTabs" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
