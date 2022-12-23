<script setup lang="ts">
import carbon from '~/documentation/icons/carbon.md?raw'
import cil from '~/documentation/icons/cil.md?raw'
import fa from '~/documentation/icons/fa.md?raw'
import fab from '~/documentation/icons/fab.md?raw'
import iconoir from '~/documentation/icons/iconoir.md?raw'
import ion from '~/documentation/icons/ion.md?raw'
import logos from '~/documentation/icons/logos.md?raw'
import lucide from '~/documentation/icons/lucide.md?raw'
import material from '~/documentation/icons/material.md?raw'
import phosphor from '~/documentation/icons/phosphor.md?raw'

definePageMeta({
  title: 'Icons',
  documentation: {
    category: 'Content',
    components: ['Icon'],
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
        <!-- Phosphor -->
        <DocSection title="Phosphor icons" tag="1.0.0">
          <DocComponent label="Phosphor icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <Icon
                  name="ph:crown-duotone"
                  class="block h-6 w-6 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="ph:crown-duotone"
                  class="block h-7 w-7 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="ph:crown-duotone"
                  class="block h-8 w-8 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="ph:crown-duotone"
                  class="block h-9 w-9 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="ph:crown-duotone"
                  class="block h-10 w-10 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="ph:crown-duotone"
                  class="block h-12 w-12 text-yellow-500"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="phosphor" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Lucide -->
        <DocSection title="Lucide icons" tag="1.0.0">
          <DocComponent label="Lucide icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <Icon
                  name="lucide:sofa"
                  class="block h-6 w-6 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="lucide:sofa"
                  class="block h-7 w-7 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="lucide:sofa"
                  class="block h-8 w-8 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="lucide:sofa"
                  class="block h-9 w-9 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="lucide:sofa"
                  class="block h-10 w-10 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="lucide:sofa"
                  class="block h-12 w-12 text-rose-500"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="lucide" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Carbon -->
        <DocSection title="Carbon icons" tag="1.0.0">
          <DocComponent label="Carbon icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <Icon
                  name="carbon:tropical-storm-tracks"
                  class="block h-6 w-6 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="carbon:tropical-storm-tracks"
                  class="block h-7 w-7 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="carbon:tropical-storm-tracks"
                  class="block h-8 w-8 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="carbon:tropical-storm-tracks"
                  class="block h-9 w-9 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="carbon:tropical-storm-tracks"
                  class="block h-10 w-10 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="carbon:tropical-storm-tracks"
                  class="block h-12 w-12 text-primary-500"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="carbon" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Ion -->
        <DocSection title="Ion icons" tag="1.0.0">
          <DocComponent label="Ion icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <Icon
                  name="ion:gift-outline"
                  class="block h-6 w-6 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="ion:gift-outline"
                  class="block h-7 w-7 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="ion:gift-outline"
                  class="block h-8 w-8 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="ion:gift-outline"
                  class="block h-9 w-9 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="ion:gift-outline"
                  class="block h-10 w-10 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="ion:gift-outline"
                  class="block h-12 w-12 text-pink-500"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="ion" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Iconoir -->
        <DocSection title="Iconoir icons" tag="1.0.0">
          <DocComponent label="Iconoir icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <Icon
                  name="iconoir:arcade"
                  class="block h-6 w-6 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="iconoir:arcade"
                  class="block h-7 w-7 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="iconoir:arcade"
                  class="block h-8 w-8 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="iconoir:arcade"
                  class="block h-9 w-9 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="iconoir:arcade"
                  class="block h-10 w-10 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="iconoir:arcade"
                  class="block h-12 w-12 text-lime-500"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="iconoir" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Core UI -->
        <DocSection title="Core UI icons" tag="1.0.0">
          <DocComponent label="Core UI icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <Icon
                  name="cil:boat-alt"
                  class="block h-6 w-6 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="cil:boat-alt"
                  class="block h-7 w-7 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="cil:boat-alt"
                  class="block h-8 w-8 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="cil:boat-alt"
                  class="block h-9 w-9 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="cil:boat-alt"
                  class="block h-10 w-10 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="cil:boat-alt"
                  class="block h-12 w-12 text-indigo-500"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="cil" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Font Awesome solid -->
        <DocSection title="Font Awesome" tag="1.0.0">
          <DocComponent label="Font Awesome icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <Icon
                  name="fa6-solid:computer-mouse"
                  class="block h-6 w-6 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="fa6-solid:computer-mouse"
                  class="block h-7 w-7 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="fa6-solid:computer-mouse"
                  class="block h-8 w-8 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="fa6-solid:computer-mouse"
                  class="block h-9 w-9 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="fa6-solid:computer-mouse"
                  class="block h-10 w-10 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="fa6-solid:computer-mouse"
                  class="block h-12 w-12 text-fuchsia-500"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="fa" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Font Awesome brands -->
        <DocSection title="Awesome brands" tag="1.0.0">
          <DocComponent label="Font Awesome brands example">
            <template #demo>
              <div class="flex items-end gap-4">
                <Icon
                  name="fa6-brands:behance"
                  class="block h-6 w-6 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="fa6-brands:behance"
                  class="block h-7 w-7 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="fa6-brands:behance"
                  class="block h-8 w-8 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="fa6-brands:behance"
                  class="block h-9 w-9 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="fa6-brands:behance"
                  class="block h-10 w-10 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="fa6-brands:behance"
                  class="block h-12 w-12 text-indigo-500"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="fab" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Google Material -->
        <DocSection title="Material icons" tag="1.0.0">
          <DocComponent label="Material icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <Icon
                  name="ic:baseline-forest"
                  class="block h-6 w-6 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="ic:baseline-forest"
                  class="block h-7 w-7 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="ic:baseline-forest"
                  class="block h-8 w-8 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="ic:baseline-forest"
                  class="block h-9 w-9 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="ic:baseline-forest"
                  class="block h-10 w-10 text-muted-400 dark:text-muted-500"
                />
                <Icon
                  name="ic:baseline-forest"
                  class="block h-12 w-12 text-teal-500"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="material" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Logos -->
        <DocSection title="Logo icons" tag="1.0.0">
          <DocComponent label="Logo icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <Icon name="logos:vue" class="block h-6 w-6" />
                <Icon name="logos:vue" class="block h-7 w-7" />
                <Icon name="logos:vue" class="block h-8 w-8" />
                <Icon name="logos:vue" class="block h-9 w-9" />
                <Icon name="logos:vue" class="block h-10 w-10" />
                <Icon name="logos:vue" class="block h-12 w-12" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="logos" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>
        <DocComponentMeta name="Icon" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
