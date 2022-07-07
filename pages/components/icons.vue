<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/components/icons/toc'
import {
  carbon,
  cil,
  fa,
  fab,
  iconoir,
  ion,
  logos,
  lucide,
  material,
  phosphor,
} from '@@/documentation/components/icons'

definePageMeta({
  title: 'Icons',
  documentation: {
    category: 'Content',
    components: ['BaseIcon'],
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
                <BaseIcon
                  name="ph:crown-duotone"
                  class="block h-6 w-6 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="ph:crown-duotone"
                  class="block h-7 w-7 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="ph:crown-duotone"
                  class="block h-8 w-8 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="ph:crown-duotone"
                  class="block h-9 w-9 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="ph:crown-duotone"
                  class="block h-10 w-10 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="ph:crown-duotone"
                  class="block h-12 w-12 text-yellow-500"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="phosphor" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Lucide -->
        <DocSection title="Lucide icons" tag="1.0.0">
          <DocComponent label="Lucide icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <BaseIcon
                  name="lucide:sofa"
                  class="block h-6 w-6 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="lucide:sofa"
                  class="block h-7 w-7 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="lucide:sofa"
                  class="block h-8 w-8 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="lucide:sofa"
                  class="block h-9 w-9 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="lucide:sofa"
                  class="block h-10 w-10 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="lucide:sofa"
                  class="block h-12 w-12 text-rose-500"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="lucide" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Carbon -->
        <DocSection title="Carbon icons" tag="1.0.0">
          <DocComponent label="Carbon icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <BaseIcon
                  name="carbon:tropical-storm-tracks"
                  class="block h-6 w-6 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="carbon:tropical-storm-tracks"
                  class="block h-7 w-7 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="carbon:tropical-storm-tracks"
                  class="block h-8 w-8 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="carbon:tropical-storm-tracks"
                  class="block h-9 w-9 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="carbon:tropical-storm-tracks"
                  class="block h-10 w-10 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="carbon:tropical-storm-tracks"
                  class="block h-12 w-12 text-primary-500"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="carbon" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Ion -->
        <DocSection title="Ion icons" tag="1.0.0">
          <DocComponent label="Ion icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <BaseIcon
                  name="ion:gift-outline"
                  class="block h-6 w-6 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="ion:gift-outline"
                  class="block h-7 w-7 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="ion:gift-outline"
                  class="block h-8 w-8 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="ion:gift-outline"
                  class="block h-9 w-9 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="ion:gift-outline"
                  class="block h-10 w-10 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="ion:gift-outline"
                  class="block h-12 w-12 text-pink-500"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="ion" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Iconoir -->
        <DocSection title="Iconoir icons" tag="1.0.0">
          <DocComponent label="Iconoir icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <BaseIcon
                  name="iconoir:arcade"
                  class="block h-6 w-6 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="iconoir:arcade"
                  class="block h-7 w-7 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="iconoir:arcade"
                  class="block h-8 w-8 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="iconoir:arcade"
                  class="block h-9 w-9 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="iconoir:arcade"
                  class="block h-10 w-10 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="iconoir:arcade"
                  class="block h-12 w-12 text-lime-500"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="iconoir" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Core UI -->
        <DocSection title="Core UI icons" tag="1.0.0">
          <DocComponent label="Core UI icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <BaseIcon
                  name="cil:boat-alt"
                  class="block h-6 w-6 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="cil:boat-alt"
                  class="block h-7 w-7 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="cil:boat-alt"
                  class="block h-8 w-8 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="cil:boat-alt"
                  class="block h-9 w-9 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="cil:boat-alt"
                  class="block h-10 w-10 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="cil:boat-alt"
                  class="block h-12 w-12 text-indigo-500"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="cil" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Font Awesome solid -->
        <DocSection title="Font Awesome" tag="1.0.0">
          <DocComponent label="Font Awesome icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <BaseIcon
                  name="fa6-solid:computer-mouse"
                  class="block h-6 w-6 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="fa6-solid:computer-mouse"
                  class="block h-7 w-7 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="fa6-solid:computer-mouse"
                  class="block h-8 w-8 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="fa6-solid:computer-mouse"
                  class="block h-9 w-9 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="fa6-solid:computer-mouse"
                  class="block h-10 w-10 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="fa6-solid:computer-mouse"
                  class="block h-12 w-12 text-fuchsia-500"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="fa" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Font Awesome brands -->
        <DocSection title="Awesome brands" tag="1.0.0">
          <DocComponent label="Font Awesome brands example">
            <template #demo>
              <div class="flex items-end gap-4">
                <BaseIcon
                  name="fa6-brands:behance"
                  class="block h-6 w-6 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="fa6-brands:behance"
                  class="block h-7 w-7 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="fa6-brands:behance"
                  class="block h-8 w-8 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="fa6-brands:behance"
                  class="block h-9 w-9 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="fa6-brands:behance"
                  class="block h-10 w-10 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="fa6-brands:behance"
                  class="block h-12 w-12 text-indigo-500"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="fab" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Google Material -->
        <DocSection title="Material icons" tag="1.0.0">
          <DocComponent label="Material icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <BaseIcon
                  name="ic:baseline-forest"
                  class="block h-6 w-6 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="ic:baseline-forest"
                  class="block h-7 w-7 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="ic:baseline-forest"
                  class="block h-8 w-8 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="ic:baseline-forest"
                  class="block h-9 w-9 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="ic:baseline-forest"
                  class="block h-10 w-10 text-muted-400 dark:text-muted-500"
                />
                <BaseIcon
                  name="ic:baseline-forest"
                  class="block h-12 w-12 text-teal-500"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="material" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Logos -->
        <DocSection title="Logo icons" tag="1.0.0">
          <DocComponent label="Logo icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <BaseIcon name="logos:vue" class="block h-6 w-6" />
                <BaseIcon name="logos:vue" class="block h-7 w-7" />
                <BaseIcon name="logos:vue" class="block h-8 w-8" />
                <BaseIcon name="logos:vue" class="block h-9 w-9" />
                <BaseIcon name="logos:vue" class="block h-10 w-10" />
                <BaseIcon name="logos:vue" class="block h-12 w-12" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="logos" />
            </template>
          </DocComponent>
        </DocSection>
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
