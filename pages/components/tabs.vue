<script setup lang="ts">
// import { toc } from '@@/documentation/components/tabs/toc'
// import { } from '@@/documentation/components/tabs'

definePageMeta({
  title: 'Nav Tabs',
})

const breadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'i-lucide-home',
    to: '/',
  },
  {
    label: 'Components',
    hideLabel: false,
    to: '/components',
  },
  {
    label: 'Tabs',
    hideLabel: false,
    to: '/components/tabs',
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
        <DocSection id="tabs-start" title="Tabs" tag="1.0.0">
          <DocComponent label="Left aligned example">
            <template #demo>
              <div class="w-full max-w-sm">
                <BaseTabs
                  selected="team"
                  :tabs="[
                    { label: 'Team', value: 'team' },
                    { label: 'Projects', value: 'projects' },
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
                  </template>
                </BaseTabs>
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Tabs -->
        <DocSection id="tabs-center" title="Tabs" tag="1.0.0">
          <DocComponent label="Center aligned example">
            <template #demo>
              <div class="w-full max-w-sm">
                <BaseTabs
                  justify="center"
                  selected="team"
                  :tabs="[
                    { label: 'Team', value: 'team' },
                    { label: 'Projects', value: 'projects' },
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
                  </template>
                </BaseTabs>
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Tabs -->
        <DocSection id="tabs-end" title="Tabs" tag="1.0.0">
          <DocComponent label="Right aligned example">
            <template #demo>
              <div class="w-full max-w-sm">
                <BaseTabs
                  justify="end"
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
                </BaseTabs>
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Tabs -->
        <DocSection id="tabs-icons" title="Tabs" tag="1.0.0">
          <DocComponent label="Tabs with icons example">
            <template #demo>
              <div class="w-full max-w-sm">
                <BaseTabs
                  selected="team"
                  :tabs="[
                    {
                      label: 'Team',
                      value: 'team',
                      icon: 'i-ph-users-three-duotone',
                    },
                    {
                      label: 'Projects',
                      value: 'projects',
                      icon: 'i-ph-briefcase-duotone',
                    },
                    {
                      label: 'Tasks',
                      value: 'tasks',
                      icon: 'i-ph-check-circle-duotone',
                    },
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
                </BaseTabs>
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Tabs -->
        <DocSection id="tabs-boxed" title="Tabs" tag="1.0.0">
          <DocComponent label="Tabs boxed example">
            <template #demo>
              <div class="w-full max-w-sm">
                <BaseTabs
                  type="box"
                  selected="team"
                  :tabs="[
                    {
                      label: 'Team',
                      value: 'team',
                    },
                    {
                      label: 'Projects',
                      value: 'projects',
                    },
                    {
                      label: 'Tasks',
                      value: 'tasks',
                    },
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
                </BaseTabs>
              </div>
            </template>
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Tabs -->
        <DocSection id="tabs-icons-boxed" title="Tabs" tag="1.0.0">
          <DocComponent label="Tabs with icons example">
            <template #demo>
              <div class="w-full max-w-sm">
                <BaseTabs
                  type="box"
                  selected="team"
                  :tabs="[
                    {
                      label: 'Team',
                      value: 'team',
                      icon: 'i-ph-users-three-duotone',
                    },
                    {
                      label: 'Projects',
                      value: 'projects',
                      icon: 'i-ph-briefcase-duotone',
                    },
                    {
                      label: 'Tasks',
                      value: 'tasks',
                      icon: 'i-ph-check-circle-duotone',
                    },
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
                </BaseTabs>
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
