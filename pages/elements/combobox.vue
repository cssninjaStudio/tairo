<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/elements/combobox/toc'
import {
  disabled,
  icon,
  loading,
  media,
  shapes,
  sublabels,
} from '@@/documentation/elements/combobox'
import { properties } from '@@/documentation/elements/combobox/properties'

definePageMeta({
  title: 'Combobox',
})

const frameworks = [
  {
    id: 1,
    name: 'Javascript',
  },
  {
    id: 2,
    name: 'Vue.js',
  },
  {
    id: 3,
    name: 'React.js',
  },
  {
    id: 4,
    name: 'Angular',
  },
  {
    id: 5,
    name: 'Alpine.js',
  },
]

const peopleNames = [
  {
    id: 1,
    name: 'Clarissa Perez',
    text: 'Sales Manager',
  },
  {
    id: 2,
    name: 'Aaron Splatter',
    text: 'Project Manager',
  },
  {
    id: 3,
    name: 'Mike Miller',
    text: 'UI/UX Designer',
  },
  {
    id: 4,
    name: 'Benedict Kessler',
    text: 'Mobile Developer',
  },
  {
    id: 5,
    name: 'Maya Rosselini',
    text: 'Product Manager',
  },
]

const hobbies = [
  {
    id: 1,
    name: 'Movies',
    text: 'Cinema & shows',
    icon: 'i-ph-sword-duotone',
  },
  {
    id: 2,
    name: 'Travel',
    text: 'Tourism & travel',
    icon: 'i-ph-airplane-duotone',
  },
  {
    id: 3,
    name: 'Drinks',
    text: 'Wines & fine drinks',
    icon: 'i-ph-brandy-duotone',
  },
  {
    id: 4,
    name: 'Arts',
    text: 'Paintings & scultpure',
    icon: 'i-ph-paint-brush-duotone',
  },
  {
    id: 5,
    name: 'Karaoke',
    text: 'singing with friends',
    icon: 'i-ph-microphone-stage-duotone',
  },
]

const people = [
  {
    id: 1,
    name: 'Clarissa Perez',
    text: 'Sales Manager',
    media: '/img/avatars/19.svg',
  },
  {
    id: 2,
    name: 'Aaron Splatter',
    text: 'Project Manager',
    media: '/img/avatars/16.svg',
  },
  {
    id: 3,
    name: 'Mike Miller',
    text: 'UI/UX Designer',
    media: '/img/avatars/3.svg',
  },
  {
    id: 4,
    name: 'Benedict Kessler',
    text: 'Mobile Developer',
    media: '/img/avatars/22.svg',
  },
  {
    id: 5,
    name: 'Maya Rosselini',
    text: 'Product Manager',
    media: '/img/avatars/2.svg',
  },
]

const selectedFramework = ref(frameworks[0])
const selectedPersonName = ref(peopleNames[0])
const selectedHobby = ref(hobbies[1])
const selectedPerson = ref(people[2])
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="breadcrumb" separator="dot" />

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
