<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/components/combobox/toc'
import {
  disabled,
  icon,
  loading,
  media,
  shapes,
  sublabels,
} from '@@/documentation/components/combobox'
import { properties } from '@@/documentation/components/combobox/properties'
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
        <DocSection id="combobox-shapes" title="Combobox shapes" tag="1.0.0">
          <DocComponent label="Combobox shapes example">
            <template #demo>
              <div class="grid md:grid-cols-2 gap-4">
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
        <DocSection id="combobox-disabled" title="Disabled state" tag="1.0.0">
          <DocComponent label="Disabled state example">
            <template #demo>
              <div class="flex items-end max-w-xs">
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
        <DocSection id="combobox-loading" title="Loading state" tag="1.0.0">
          <DocComponent label="Loading state example">
            <template #demo>
              <div class="flex items-end max-w-xs">
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
        <DocSection id="combobox-sublabels" title="Combobox" tag="1.0.0">
          <DocComponent label="Text with sublabels example">
            <template #demo>
              <div class="flex items-end max-w-xs">
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
        <DocSection id="combobox-icon" title="Combobox icon" tag="1.0.0">
          <DocComponent label="Combobox icon example">
            <template #demo>
              <div class="flex items-end max-w-xs">
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
        <DocSection id="combobox-media" title="Combobox" tag="1.0.0">
          <DocComponent label="Combo media example">
            <template #demo>
              <div class="flex items-end max-w-xs">
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
        <DocProps
          id="combobox-props"
          component="Combobox"
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
