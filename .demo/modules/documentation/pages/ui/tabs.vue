<script setup lang="ts">
import BoxedIconsDemo from '#examples/tabs/boxed-icons.vue'
import boxedIcons from '#examples/tabs/boxed-icons.vue?raw'
import BoxedDemo from '#examples/tabs/boxed.vue'
import boxed from '#examples/tabs/boxed.vue?raw'
import CenterDemo from '#examples/tabs/center.vue'
import center from '#examples/tabs/center.vue?raw'
import EndDemo from '#examples/tabs/end.vue'
import end from '#examples/tabs/end.vue?raw'
import IconsDemo from '#examples/tabs/icons.vue'
import icons from '#examples/tabs/icons.vue?raw'
import StartDemo from '#examples/tabs/start.vue'
import start from '#examples/tabs/start.vue?raw'

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}
</script>

<template>
  <div>
    <BaseBreadcrumb />

    <DocLayout>
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
              <AddonMarkdownRemark :source="wrapVueMarkdown(start)" fullwidth />
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(center)"
                fullwidth
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
              <AddonMarkdownRemark :source="wrapVueMarkdown(end)" fullwidth />
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
              <AddonMarkdownRemark :source="wrapVueMarkdown(icons)" fullwidth />
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
              <AddonMarkdownRemark :source="wrapVueMarkdown(boxed)" fullwidth />
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
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(boxedIcons)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tabs props -->
        <DocComponentMeta name="BaseTabs" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
