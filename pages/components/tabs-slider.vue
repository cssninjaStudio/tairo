<script setup lang="ts">
import {
  x2Full,
  x2Rounded,
  x3Full,
  x3Rounded,
} from '@@/documentation/components/tabs-slider'

import { BaseTabSliderMeta } from 'virtual:vue-component-meta'

definePageMeta({
  title: 'Slider Tabs',
  documentation: {
    category: 'Interaction',
    components: ['BaseTabSlider'],
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
        <!-- Tabs -->
        <DocSection title="Tabs" tag="1.0.0">
          <DocComponent label="Rounded with two slots example">
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
                      class="font-sans text-sm text-gray-500 dark:text-gray-400"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                      beatissimum? Ne discipulum abducam, times.
                    </p>
                    <p
                      v-else-if="activeValue === 'projects'"
                      class="font-sans text-sm text-gray-500 dark:text-gray-400"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                      beatissimum? Ne discipulum abducam, times. Quae
                      diligentissime contra Aristonem dicuntur a Chryippo. Duo
                      Reges: constructio interrete.
                    </p>
                    <p
                      v-else-if="activeValue === 'tasks'"
                      class="font-sans text-sm text-gray-500 dark:text-gray-400"
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
            <template #code>
              <DocCode language="html" :code="x2Rounded" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tabs -->
        <DocSection title="Tabs" tag="1.0.0">
          <DocComponent label="Full with two slots example">
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
                      class="font-sans text-sm text-gray-500 dark:text-gray-400"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                      beatissimum? Ne discipulum abducam, times.
                    </p>
                    <p
                      v-else-if="activeValue === 'projects'"
                      class="font-sans text-sm text-gray-500 dark:text-gray-400"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                      beatissimum? Ne discipulum abducam, times. Quae
                      diligentissime contra Aristonem dicuntur a Chryippo. Duo
                      Reges: constructio interrete.
                    </p>
                    <p
                      v-else-if="activeValue === 'tasks'"
                      class="font-sans text-sm text-gray-500 dark:text-gray-400"
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
            <template #code>
              <DocCode language="html" :code="x2Full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tabs -->
        <DocSection title="Tabs" tag="1.0.0">
          <DocComponent label="Rounded with three slots example">
            <template #demo>
              <div class="w-full max-w-sm">
                <BaseTabSlider
                  :size="3"
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
                      class="font-sans text-sm text-gray-500 dark:text-gray-400"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                      beatissimum? Ne discipulum abducam, times.
                    </p>
                    <p
                      v-else-if="activeValue === 'projects'"
                      class="font-sans text-sm text-gray-500 dark:text-gray-400"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                      beatissimum? Ne discipulum abducam, times. Quae
                      diligentissime contra Aristonem dicuntur a Chryippo. Duo
                      Reges: constructio interrete.
                    </p>
                    <p
                      v-else-if="activeValue === 'tasks'"
                      class="font-sans text-sm text-gray-500 dark:text-gray-400"
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
            <template #code>
              <DocCode language="html" :code="x3Rounded" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tabs -->
        <DocSection title="Tabs" tag="1.0.0">
          <DocComponent label="Full with three slots example">
            <template #demo>
              <div class="w-full max-w-sm">
                <BaseTabSlider
                  shape="full"
                  :size="3"
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
                      class="font-sans text-sm text-gray-500 dark:text-gray-400"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                      beatissimum? Ne discipulum abducam, times.
                    </p>
                    <p
                      v-else-if="activeValue === 'projects'"
                      class="font-sans text-sm text-gray-500 dark:text-gray-400"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quid iudicant sensus? Primum quid tu dicis breve? Etiam
                      beatissimum? Ne discipulum abducam, times. Quae
                      diligentissime contra Aristonem dicuntur a Chryippo. Duo
                      Reges: constructio interrete.
                    </p>
                    <p
                      v-else-if="activeValue === 'tasks'"
                      class="font-sans text-sm text-gray-500 dark:text-gray-400"
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
            <template #code>
              <DocCode language="html" :code="x3Full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tabs slider props -->
        <DocComponentMeta :meta="BaseTabSliderMeta" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
