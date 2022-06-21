<script setup lang="ts">
// import { toc } from '@@/documentation/components/tabs-slider/toc'
// import { } from '@@/documentation/components/tabs-slider'

definePageMeta({
  title: 'Slider Tabs',
})

const breadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'i-lucide-home',
    hideIcon: false,
    to: '/',
  },
  {
    label: 'Components',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/components',
  },
  {
    label: 'Slider tabs',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/components/tabs-slider',
  },
]
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="breadcrumb" separator="dot" />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Tabs -->
        <DocSection id="tabs-slider-2x-rounded" title="Tabs" tag="1.0.0">
          <DocComponent label="Left aligned example">
            <template #demo>
              <div class="w-full max-w-sm">
                <BaseTabSlider
                  selected="team"
                  :tabs="[
                    { label: 'Team', value: 'team' },
                    { label: 'Projects', value: 'projects' },
                    { label: 'Tasks', value: 'tasks' },
                  ]"
                >
                  <template #tab="{ activeValue }">
                    <p
                      v-if="activeValue === 'team'"
                      class="font-text text-sm text-gray-500 dark:text-gray-400"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                      beatissimum? Ne discipulum abducam, times.
                    </p>
                    <p
                      v-else-if="activeValue === 'projects'"
                      class="font-text text-sm text-gray-500 dark:text-gray-400"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                      beatissimum? Ne discipulum abducam, times. Quae
                      diligentissime contra Aristonem dicuntur a Chryippo. Duo
                      Reges: constructio interrete.
                    </p>
                    <p
                      v-else-if="activeValue === 'tasks'"
                      class="font-text text-sm text-gray-500 dark:text-gray-400"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                      beatissimum? Ne discipulum abducam, times. Quae
                      diligentissime contra.
                    </p>
                  </template>
                </BaseTabSlider>
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Tabs -->
        <DocSection id="tabs-slider-2x-full" title="Tabs" tag="1.0.0">
          <DocComponent label="Left aligned example">
            <template #demo>
              <div class="w-full max-w-sm">
                <BaseTabSlider
                  shape="full"
                  selected="team"
                  :tabs="[
                    { label: 'Team', value: 'team' },
                    { label: 'Projects', value: 'projects' },
                    { label: 'Tasks', value: 'tasks' },
                  ]"
                >
                  <template #tab="{ activeValue }">
                    <p
                      v-if="activeValue === 'team'"
                      class="font-text text-sm text-gray-500 dark:text-gray-400"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                      beatissimum? Ne discipulum abducam, times.
                    </p>
                    <p
                      v-else-if="activeValue === 'projects'"
                      class="font-text text-sm text-gray-500 dark:text-gray-400"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                      beatissimum? Ne discipulum abducam, times. Quae
                      diligentissime contra Aristonem dicuntur a Chryippo. Duo
                      Reges: constructio interrete.
                    </p>
                    <p
                      v-else-if="activeValue === 'tasks'"
                      class="font-text text-sm text-gray-500 dark:text-gray-400"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                      beatissimum? Ne discipulum abducam, times. Quae
                      diligentissime contra.
                    </p>
                  </template>
                </BaseTabSlider>
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Tabs -->
        <DocSection id="tabs-slider-3x-rounded" title="Tabs" tag="1.0.0">
          <DocComponent label="Left aligned example">
            <template #demo>
              <div class="w-full max-w-sm">
                <BaseTabSlider
                  :slots="3"
                  selected="team"
                  :tabs="[
                    { label: 'Team', value: 'team' },
                    { label: 'Projects', value: 'projects' },
                    { label: 'Tasks', value: 'tasks' },
                  ]"
                >
                  <template #tab="{ activeValue }">
                    <p
                      v-if="activeValue === 'team'"
                      class="font-text text-sm text-gray-500 dark:text-gray-400"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                      beatissimum? Ne discipulum abducam, times.
                    </p>
                    <p
                      v-else-if="activeValue === 'projects'"
                      class="font-text text-sm text-gray-500 dark:text-gray-400"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                      beatissimum? Ne discipulum abducam, times. Quae
                      diligentissime contra Aristonem dicuntur a Chryippo. Duo
                      Reges: constructio interrete.
                    </p>
                    <p
                      v-else-if="activeValue === 'tasks'"
                      class="font-text text-sm text-gray-500 dark:text-gray-400"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                      beatissimum? Ne discipulum abducam, times. Quae
                      diligentissime contra.
                    </p>
                  </template>
                </BaseTabSlider>
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Tabs -->
        <DocSection id="tabs-slider-3x-full" title="Tabs" tag="1.0.0">
          <DocComponent label="Left aligned example">
            <template #demo>
              <div class="w-full max-w-sm">
                <BaseTabSlider
                  shape="full"
                  :slots="3"
                  selected="team"
                  :tabs="[
                    { label: 'Team', value: 'team' },
                    { label: 'Projects', value: 'projects' },
                    { label: 'Tasks', value: 'tasks' },
                  ]"
                >
                  <template #tab="{ activeValue }">
                    <p
                      v-if="activeValue === 'team'"
                      class="font-text text-sm text-gray-500 dark:text-gray-400"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                      beatissimum? Ne discipulum abducam, times.
                    </p>
                    <p
                      v-else-if="activeValue === 'projects'"
                      class="font-text text-sm text-gray-500 dark:text-gray-400"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                      beatissimum? Ne discipulum abducam, times. Quae
                      diligentissime contra Aristonem dicuntur a Chryippo. Duo
                      Reges: constructio interrete.
                    </p>
                    <p
                      v-else-if="activeValue === 'tasks'"
                      class="font-text text-sm text-gray-500 dark:text-gray-400"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                      beatissimum? Ne discipulum abducam, times. Quae
                      diligentissime contra.
                    </p>
                  </template>
                </BaseTabSlider>
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>
      </template>
      <!-- Toc -->
      <template #toc></template>
    </DocLayout>
  </div>
</template>
