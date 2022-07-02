<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/components/snack/toc'
import {
  base,
  baseLight,
  icon,
  iconLight,
  iconSmall,
  image,
  imageLight,
  imageSmall,
  small,
} from '@@/documentation/components/snack'
import { properties } from '@@/documentation/components/snack/properties'

definePageMeta({
  title: 'Snacks',
})
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="breadcrumb" separator="dot" />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Snack -->
        <DocSection id="snack-base" title="Snack" tag="1.0.0">
          <DocComponent label="Snack base example">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseSnack label="React" />
                <BaseSnack label="Angular" />
                <BaseSnack label="Vue" />
                <BaseSnack label="Html" />
                <BaseSnack label="Python" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="base" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection id="snack-base-light" title="Snack" tag="1.0.0">
          <DocComponent label="Snack base example">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseSnack label="React" light />
                <BaseSnack label="Angular" light />
                <BaseSnack label="Vue" light />
                <BaseSnack label="Html" light />
                <BaseSnack label="Python" light />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="baseLight" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack small -->
        <DocSection id="snack-small" title="Snack" tag="1.0.0">
          <DocComponent label="Snack base small example">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseSnack label="React" small />
                <BaseSnack label="Angular" small />
                <BaseSnack label="Vue" small />
                <BaseSnack label="Html" small />
                <BaseSnack label="Python" small />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="small" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection id="snack-icon" title="Snack" tag="1.0.0">
          <DocComponent label="Snack icons example">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseSnack label="React" icon="logos:react" />
                <BaseSnack label="Angular" icon="logos:angular-icon" />
                <BaseSnack label="Vue" icon="logos:vue" />
                <BaseSnack label="Html" icon="logos:html5" />
                <BaseSnack label="Python" icon="logos:python" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="icon" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection id="snack-icon-light" title="Snack" tag="1.0.0">
          <DocComponent label="Snack icons example">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseSnack label="React" icon="logos:react" light />
                <BaseSnack label="Angular" icon="logos:angular-icon" light />
                <BaseSnack label="Vue" icon="logos:vue" light />
                <BaseSnack label="Html" icon="logos:html5" light />
                <BaseSnack label="Python" icon="logos:python" light />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="iconLight" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection id="snack-icon-small" title="Snack" tag="1.0.0">
          <DocComponent label="Snack icons small example">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseSnack label="React" icon="logos:react" small />
                <BaseSnack label="Angular" icon="logos:angular-icon" small />
                <BaseSnack label="Vue" icon="logos:vue" small />
                <BaseSnack label="Html" icon="logos:html5" small />
                <BaseSnack label="Python" icon="logos:python" small />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="iconSmall" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection id="snack-image" title="Snack" tag="1.0.0">
          <DocComponent label="Snack images example">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseSnack label="Lana" image="/img/avatars/4.svg" />
                <BaseSnack label="Harry" image="/img/avatars/7.svg" />
                <BaseSnack label="Mike" image="/img/avatars/3.svg" />
                <BaseSnack label="Maya" image="/img/avatars/2.svg" />
                <BaseSnack label="John" image="/img/avatars/11.svg" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="image" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection id="snack-image-light" title="Snack" tag="1.0.0">
          <DocComponent label="Snack images example">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseSnack label="Lana" image="/img/avatars/4.svg" light />
                <BaseSnack label="Harry" image="/img/avatars/7.svg" light />
                <BaseSnack label="Mike" image="/img/avatars/3.svg" light />
                <BaseSnack label="Maya" image="/img/avatars/2.svg" light />
                <BaseSnack label="John" image="/img/avatars/11.svg" light />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="imageLight" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack -->
        <DocSection id="snack-image-small" title="Snack" tag="1.0.0">
          <DocComponent label="Snack images small example">
            <template #demo>
              <div class="flex items-end flex-wrap gap-4">
                <BaseSnack label="Lana" image="/img/avatars/4.svg" small />
                <BaseSnack label="Harry" image="/img/avatars/7.svg" small />
                <BaseSnack label="Mike" image="/img/avatars/3.svg" small />
                <BaseSnack label="Maya" image="/img/avatars/2.svg" small />
                <BaseSnack label="John" image="/img/avatars/11.svg" small />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="imageSmall" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Snack props -->
        <DocProps
          id="snack-props"
          component="Snack"
          :properties="properties.props"
          :slots="properties.slots"
        />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc :anchors="toc" />
      </template>
    </DocLayout>
  </div>
</template>
