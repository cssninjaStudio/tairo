<script setup lang="ts">
import boxed from '~/documentation/tabs/boxed.md?raw'
import boxedIcons from '~/documentation/tabs/boxed-icons.md?raw'
import center from '~/documentation/tabs/center.md?raw'
import end from '~/documentation/tabs/end.md?raw'
import icons from '~/documentation/tabs/icons.md?raw'
import start from '~/documentation/tabs/start.md?raw'

definePageMeta({
  title: 'Nav Tabs',
  documentation: {
    category: 'Interaction',
    components: ['BaseTabs'],
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
                  </template>
                </BaseTabs>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="start" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tabs -->
        <DocSection title="Tabs" tag="1.0.0">
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
                  </template>
                </BaseTabs>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="center" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tabs -->
        <DocSection title="Tabs" tag="1.0.0">
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
                </BaseTabs>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="end" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tabs -->
        <DocSection title="Tabs" tag="1.0.0">
          <DocComponent label="Tabs with icons example">
            <template #demo>
              <div class="w-full max-w-sm">
                <BaseTabs
                  selected="team"
                  :tabs="[
                    {
                      label: 'Team',
                      value: 'team',
                      icon: 'ph:users-three-duotone',
                    },
                    {
                      label: 'Projects',
                      value: 'projects',
                      icon: 'ph:briefcase-duotone',
                    },
                    {
                      label: 'Tasks',
                      value: 'tasks',
                      icon: 'ph:check-circle-duotone',
                    },
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
                </BaseTabs>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="icons" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tabs -->
        <DocSection title="Tabs" tag="1.0.0">
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
                </BaseTabs>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="boxed" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tabs -->
        <DocSection title="Tabs" tag="1.0.0">
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
                      icon: 'ph:users-three-duotone',
                    },
                    {
                      label: 'Projects',
                      value: 'projects',
                      icon: 'ph:briefcase-duotone',
                    },
                    {
                      label: 'Tasks',
                      value: 'tasks',
                      icon: 'ph:check-circle-duotone',
                    },
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
                </BaseTabs>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="boxedIcons" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Tabs props -->
        <DocComponentMeta name="BaseTabs" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
