<script setup lang="ts">
import {
  disabled,
  icon,
  loading,
  media,
  shapes,
  sublabels,
} from '@@/documentation/components/combobox'
import {
  frameworks,
  hobbies,
  people,
  peopleNames,
  selectedFramework,
  selectedHobby,
  selectedPerson,
  selectedPersonName,
} from '@@/documentation/components/combobox/data'

import { BaseFormComboBoxMeta } from '#vue-component-meta'

definePageMeta({
  title: 'Combobox',
  documentation: {
    category: 'Forms',
    components: ['BaseFormComboBox'],
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
        <!-- Combobox shapes -->
        <DocSection title="Combobox shapes" tag="1.0.0">
          <DocComponent label="Combobox shapes example">
            <template #demo>
              <div class="grid gap-4 md:grid-cols-2">
                <BaseFormComboBox
                  v-model="selectedFramework"
                  label="Framework"
                  :items="frameworks"
                  shape="straight"
                />

                <BaseFormComboBox
                  v-model="selectedFramework"
                  label="Framework"
                  :items="frameworks"
                  shape="rounded"
                />

                <BaseFormComboBox
                  v-model="selectedFramework"
                  label="Framework"
                  :items="frameworks"
                  shape="curved"
                />

                <BaseFormComboBox
                  v-model="selectedFramework"
                  label="Framework"
                  :items="frameworks"
                  shape="full"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="shapes" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Combobox disabled -->
        <DocSection title="Disabled state" tag="1.0.0">
          <DocComponent label="Disabled state example">
            <template #demo>
              <div class="flex max-w-xs items-end">
                <BaseFormComboBox
                  v-model="selectedPersonName"
                  label="Assignee"
                  :items="peopleNames"
                  disabled
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="disabled" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Combobox loading -->
        <DocSection title="Loading state" tag="1.0.0">
          <DocComponent label="Loading state example">
            <template #demo>
              <div class="flex max-w-xs items-end">
                <BaseFormComboBox
                  v-model="selectedPersonName"
                  label="Assignee"
                  :items="peopleNames"
                  loading
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="loading" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Combobox sublabels -->
        <DocSection title="Combobox" tag="1.0.0">
          <DocComponent label="Text with sublabels example">
            <template #demo>
              <div class="flex max-w-xs items-end">
                <BaseFormComboBox
                  v-model="selectedPersonName"
                  label="Assignee"
                  :items="peopleNames"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="sublabels" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Combobox icon -->
        <DocSection title="Combobox icon" tag="1.0.0">
          <DocComponent label="Combobox icon example">
            <template #demo>
              <div class="flex max-w-xs items-end">
                <BaseFormComboBox
                  v-model="selectedHobby"
                  label="Hobbies"
                  :items="hobbies"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="icon" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Combobox media -->
        <DocSection title="Combobox" tag="1.0.0">
          <DocComponent label="Combo media example">
            <template #demo>
              <div class="flex max-w-xs items-end">
                <BaseFormComboBox
                  v-model="selectedPerson"
                  label="Assignee"
                  :items="people"
                />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="media" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Combobox properties -->
        <DocComponentMeta :meta="BaseFormComboBoxMeta" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
