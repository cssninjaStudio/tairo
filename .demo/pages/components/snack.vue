<script setup lang="ts">
import base from '~/documentation/snack/base.md?raw'
import baseLight from '~/documentation/snack/base-light.md?raw'
import icon from '~/documentation/snack/icon.md?raw'
import iconLight from '~/documentation/snack/icon-light.md?raw'
import iconSmall from '~/documentation/snack/icon-small.md?raw'
import image from '~/documentation/snack/image.md?raw'
import imageLight from '~/documentation/snack/image-light.md?raw'
import imageSmall from '~/documentation/snack/image-small.md?raw'
import small from '~/documentation/snack/small.md?raw'

definePageMeta({
  title: 'Snacks',
  documentation: {
    category: 'Interaction',
    components: ['BaseSnack'],
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
        <!-- Snack -->
        <DocSection title="Snack" tag="1.0.0">
          <DocComponent label="Snack base example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseSnack label="React" />
                <BaseSnack label="Angular" />
                <BaseSnack label="Vue" />
                <BaseSnack label="Html" />
                <BaseSnack label="Python" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="base" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection title="Snack" tag="1.0.0">
          <DocComponent label="Snack base example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseSnack label="React" light />
                <BaseSnack label="Angular" light />
                <BaseSnack label="Vue" light />
                <BaseSnack label="Html" light />
                <BaseSnack label="Python" light />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="baseLight" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack small -->
        <DocSection title="Snack" tag="1.0.0">
          <DocComponent label="Snack base small example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseSnack label="React" small />
                <BaseSnack label="Angular" small />
                <BaseSnack label="Vue" small />
                <BaseSnack label="Html" small />
                <BaseSnack label="Python" small />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="small" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection title="Snack" tag="1.0.0">
          <DocComponent label="Snack icons example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseSnack label="React" icon="logos:react" />
                <BaseSnack label="Angular" icon="logos:angular-icon" />
                <BaseSnack label="Vue" icon="logos:vue" />
                <BaseSnack label="Html" icon="logos:html-5" />
                <BaseSnack label="Python" icon="logos:python" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="icon" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection title="Snack" tag="1.0.0">
          <DocComponent label="Snack icons example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseSnack label="React" icon="logos:react" light />
                <BaseSnack label="Angular" icon="logos:angular-icon" light />
                <BaseSnack label="Vue" icon="logos:vue" light />
                <BaseSnack label="Html" icon="logos:html-5" light />
                <BaseSnack label="Python" icon="logos:python" light />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="iconLight" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection title="Snack" tag="1.0.0">
          <DocComponent label="Snack icons small example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseSnack label="React" icon="logos:react" small />
                <BaseSnack label="Angular" icon="logos:angular-icon" small />
                <BaseSnack label="Vue" icon="logos:vue" small />
                <BaseSnack label="Html" icon="logos:html-5" small />
                <BaseSnack label="Python" icon="logos:python" small />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="iconSmall" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection title="Snack" tag="1.0.0">
          <DocComponent label="Snack images example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseSnack label="Lana" image="/img/avatars/4.svg" />
                <BaseSnack label="Harry" image="/img/avatars/7.svg" />
                <BaseSnack label="Mike" image="/img/avatars/3.svg" />
                <BaseSnack label="Maya" image="/img/avatars/2.svg" />
                <BaseSnack label="John" image="/img/avatars/11.svg" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="image" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection title="Snack" tag="1.0.0">
          <DocComponent label="Snack images example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseSnack label="Lana" image="/img/avatars/4.svg" light />
                <BaseSnack label="Harry" image="/img/avatars/7.svg" light />
                <BaseSnack label="Mike" image="/img/avatars/3.svg" light />
                <BaseSnack label="Maya" image="/img/avatars/2.svg" light />
                <BaseSnack label="John" image="/img/avatars/11.svg" light />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="imageLight" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection title="Snack" tag="1.0.0">
          <DocComponent label="Snack images small example">
            <template #demo>
              <div class="flex flex-wrap items-end gap-4">
                <BaseSnack label="Lana" image="/img/avatars/4.svg" small />
                <BaseSnack label="Harry" image="/img/avatars/7.svg" small />
                <BaseSnack label="Mike" image="/img/avatars/3.svg" small />
                <BaseSnack label="Maya" image="/img/avatars/2.svg" small />
                <BaseSnack label="John" image="/img/avatars/11.svg" small />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="imageSmall" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack props -->
        <DocComponentMeta name="BaseSnack" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
