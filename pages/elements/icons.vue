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
                <i
                  class="i-ph-crown-duotone w-6 h-6 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-ph-crown-duotone w-7 h-7 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-ph-crown-duotone w-8 h-8 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-ph-crown-duotone w-9 h-9 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-ph-crown-duotone w-10 h-10 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-ph-crown-duotone w-12 h-12 block text-yellow-500"
                ></i>
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
                <i
                  class="i-lucide-sofa w-6 h-6 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-lucide-sofa w-7 h-7 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-lucide-sofa w-8 h-8 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-lucide-sofa w-9 h-9 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-lucide-sofa w-10 h-10 block text-slate-400 dark:text-slate-500"
                ></i>
                <i class="i-lucide-sofa w-12 h-12 block text-rose-500"></i>
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
                <i
                  class="i-carbon-tropical-storm-tracks w-6 h-6 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-carbon-tropical-storm-tracks w-7 h-7 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-carbon-tropical-storm-tracks w-8 h-8 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-carbon-tropical-storm-tracks w-9 h-9 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-carbon-tropical-storm-tracks w-10 h-10 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-carbon-tropical-storm-tracks w-12 h-12 block text-primary-500"
                ></i>
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
                <i
                  class="i-ion-gift-outline w-6 h-6 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-ion-gift-outline w-7 h-7 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-ion-gift-outline w-8 h-8 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-ion-gift-outline w-9 h-9 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-ion-gift-outline w-10 h-10 block text-slate-400 dark:text-slate-500"
                ></i>
                <i class="i-ion-gift-outline w-12 h-12 block text-pink-500"></i>
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
                <i
                  class="i-iconoir-arcade w-6 h-6 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-iconoir-arcade w-7 h-7 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-iconoir-arcade w-8 h-8 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-iconoir-arcade w-9 h-9 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-iconoir-arcade w-10 h-10 block text-slate-400 dark:text-slate-500"
                ></i>
                <i class="i-iconoir-arcade w-12 h-12 block text-lime-500"></i>
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
                <i
                  class="i-cil-boat-alt w-6 h-6 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-cil-boat-alt w-7 h-7 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-cil-boat-alt w-8 h-8 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-cil-boat-alt w-9 h-9 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-cil-boat-alt w-10 h-10 block text-slate-400 dark:text-slate-500"
                ></i>
                <i class="i-cil-boat-alt w-12 h-12 block text-indigo-500"></i>
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
                <i
                  class="i-fa6-solid-computer-mouse w-6 h-6 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-fa6-solid-computer-mouse w-7 h-7 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-fa6-solid-computer-mouse w-8 h-8 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-fa6-solid-computer-mouse w-9 h-9 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-fa6-solid-computer-mouse w-10 h-10 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-fa6-solid-computer-mouse w-12 h-12 block text-fuchsia-500"
                ></i>
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
                <i
                  class="i-fa6-brands-behance w-6 h-6 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-fa6-brands-behance w-7 h-7 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-fa6-brands-behance w-8 h-8 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-fa6-brands-behance w-9 h-9 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-fa6-brands-behance w-10 h-10 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-fa6-brands-behance w-12 h-12 block text-indigo-500"
                ></i>
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
                <i
                  class="i-ic-baseline-forest w-6 h-6 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-ic-baseline-forest w-7 h-7 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-ic-baseline-forest w-8 h-8 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-ic-baseline-forest w-9 h-9 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-ic-baseline-forest w-10 h-10 block text-slate-400 dark:text-slate-500"
                ></i>
                <i
                  class="i-ic-baseline-forest w-12 h-12 block text-teal-500"
                ></i>
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
                <i class="i-logos-vue w-6 h-6 block"></i>
                <i class="i-logos-vue w-7 h-7 block"></i>
                <i class="i-logos-vue w-8 h-8 block"></i>
                <i class="i-logos-vue w-9 h-9 block"></i>
                <i class="i-logos-vue w-10 h-10 block"></i>
                <i class="i-logos-vue w-12 h-12 block"></i>
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
