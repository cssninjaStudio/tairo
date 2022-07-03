<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/elements/icons/toc'
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
} from '@@/documentation/elements/icons'

definePageMeta({
  title: 'Icons',
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
        <!-- Phosphor -->
        <DocSection id="phosphor-icons" title="Phosphor icons" tag="1.0.0">
          <DocComponent label="Phosphor icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <BaseIcon
                  name="ph:crown-duotone"
                  class="w-6 h-6 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="ph:crown-duotone"
                  class="w-7 h-7 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="ph:crown-duotone"
                  class="w-8 h-8 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="ph:crown-duotone"
                  class="w-9 h-9 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="ph:crown-duotone"
                  class="w-10 h-10 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="ph:crown-duotone"
                  class="w-12 h-12 block text-yellow-500"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="phosphor" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Lucide -->
        <DocSection id="lucide-icons" title="Lucide icons" tag="1.0.0">
          <DocComponent label="Lucide icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <BaseIcon
                  name="lucide:sofa"
                  class="w-6 h-6 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="lucide:sofa"
                  class="w-7 h-7 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="lucide:sofa"
                  class="w-8 h-8 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="lucide:sofa"
                  class="w-9 h-9 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="lucide:sofa"
                  class="w-10 h-10 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="lucide:sofa"
                  class="w-12 h-12 block text-rose-500"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="lucide" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Carbon -->
        <DocSection id="carbon-icons" title="Carbon icons" tag="1.0.0">
          <DocComponent label="Carbon icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <BaseIcon
                  name="carbon:tropical-storm-tracks"
                  class="w-6 h-6 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="carbon:tropical-storm-tracks"
                  class="w-7 h-7 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="carbon:tropical-storm-tracks"
                  class="w-8 h-8 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="carbon:tropical-storm-tracks"
                  class="w-9 h-9 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="carbon:tropical-storm-tracks"
                  class="w-10 h-10 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="carbon:tropical-storm-tracks"
                  class="w-12 h-12 block text-primary-500"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="carbon" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Ion -->
        <DocSection id="ion-icons" title="Ion icons" tag="1.0.0">
          <DocComponent label="Ion icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <BaseIcon
                  name="ion:gift-outline"
                  class="w-6 h-6 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="ion:gift-outline"
                  class="w-7 h-7 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="ion:gift-outline"
                  class="w-8 h-8 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="ion:gift-outline"
                  class="w-9 h-9 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="ion:gift-outline"
                  class="w-10 h-10 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="ion:gift-outline"
                  class="w-12 h-12 block text-pink-500"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="ion" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Iconoir -->
        <DocSection id="iconoir-icons" title="Iconoir icons" tag="1.0.0">
          <DocComponent label="Iconoir icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <BaseIcon
                  name="iconoir:arcade"
                  class="w-6 h-6 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="iconoir:arcade"
                  class="w-7 h-7 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="iconoir:arcade"
                  class="w-8 h-8 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="iconoir:arcade"
                  class="w-9 h-9 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="iconoir:arcade"
                  class="w-10 h-10 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="iconoir:arcade"
                  class="w-12 h-12 block text-lime-500"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="iconoir" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Core UI -->
        <DocSection id="cil-icons" title="Core UI icons" tag="1.0.0">
          <DocComponent label="Core UI icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <BaseIcon
                  name="cil:boat-alt"
                  class="w-6 h-6 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="cil:boat-alt"
                  class="w-7 h-7 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="cil:boat-alt"
                  class="w-8 h-8 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="cil:boat-alt"
                  class="w-9 h-9 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="cil:boat-alt"
                  class="w-10 h-10 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="cil:boat-alt"
                  class="w-12 h-12 block text-indigo-500"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="cil" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Font Awesome solid -->
        <DocSection id="fasolid-icons" title="Font Awesome" tag="1.0.0">
          <DocComponent label="Font Awesome icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <BaseIcon
                  name="fa6-solid:computer-mouse"
                  class="w-6 h-6 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="fa6-solid:computer-mouse"
                  class="w-7 h-7 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="fa6-solid:computer-mouse"
                  class="w-8 h-8 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="fa6-solid:computer-mouse"
                  class="w-9 h-9 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="fa6-solid:computer-mouse"
                  class="w-10 h-10 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="fa6-solid:computer-mouse"
                  class="w-12 h-12 block text-fuchsia-500"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="fa" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Font Awesome brands -->
        <DocSection id="fabrands-icons" title="Awesome brands" tag="1.0.0">
          <DocComponent label="Font Awesome brands example">
            <template #demo>
              <div class="flex items-end gap-4">
                <BaseIcon
                  name="fa6-brands:behance"
                  class="w-6 h-6 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="fa6-brands:behance"
                  class="w-7 h-7 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="fa6-brands:behance"
                  class="w-8 h-8 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="fa6-brands:behance"
                  class="w-9 h-9 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="fa6-brands:behance"
                  class="w-10 h-10 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="fa6-brands:behance"
                  class="w-12 h-12 block text-indigo-500"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="fab" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Google Material -->
        <DocSection id="material-icons" title="Material icons" tag="1.0.0">
          <DocComponent label="Material icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <BaseIcon
                  name="ic:baseline-forest"
                  class="w-6 h-6 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="ic:baseline-forest"
                  class="w-7 h-7 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="ic:baseline-forest"
                  class="w-8 h-8 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="ic:baseline-forest"
                  class="w-9 h-9 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="ic:baseline-forest"
                  class="w-10 h-10 block text-slate-400 dark:text-slate-500"
                />
                <BaseIcon
                  name="ic:baseline-forest"
                  class="w-12 h-12 block text-teal-500"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="material" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Logos -->
        <DocSection id="logos-icons" title="Logo icons" tag="1.0.0">
          <DocComponent label="Logo icons example">
            <template #demo>
              <div class="flex items-end gap-4">
                <BaseIcon name="logos:vue" class="w-6 h-6 block" />
                <BaseIcon name="logos:vue" class="w-7 h-7 block" />
                <BaseIcon name="logos:vue" class="w-8 h-8 block" />
                <BaseIcon name="logos:vue" class="w-9 h-9 block" />
                <BaseIcon name="logos:vue" class="w-10 h-10 block" />
                <BaseIcon name="logos:vue" class="w-12 h-12 block" />
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
        <DocToc :anchors="toc" />
      </template>
    </DocLayout>
  </div>
</template>
