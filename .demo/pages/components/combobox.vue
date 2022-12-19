<script setup lang="ts">
import disabled from '~/documentation/combobox/disabled.md?raw'
import icon from '~/documentation/combobox/icon.md?raw'
import loading from '~/documentation/combobox/loading.md?raw'
import media from '~/documentation/combobox/media.md?raw'
import shapes from '~/documentation/combobox/shapes.md?raw'
import sublabels from '~/documentation/combobox/sublabels.md?raw'

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
    icon: 'ph:sword-duotone',
  },
  {
    id: 2,
    name: 'Travel',
    text: 'Tourism & travel',
    icon: 'ph:airplane-duotone',
  },
  {
    id: 3,
    name: 'Drinks',
    text: 'Wines & fine drinks',
    icon: 'ph:brandy-duotone',
  },
  {
    id: 4,
    name: 'Arts',
    text: 'Paintings & scultpure',
    icon: 'ph:paint-brush-duotone',
  },
  {
    id: 5,
    name: 'Karaoke',
    text: 'singing with friends',
    icon: 'ph:microphone-stage-duotone',
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

definePageMeta({
  title: 'Combobox',
  documentation: {
    category: 'Forms',
    components: ['BaseListbox'],
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
                <BaseListbox
                  v-model="selectedFramework"
                  label="Framework"
                  :items="frameworks"
                  shape="straight"
                />

                <BaseListbox
                  v-model="selectedFramework"
                  label="Framework"
                  :items="frameworks"
                  shape="rounded"
                />

                <BaseListbox
                  v-model="selectedFramework"
                  label="Framework"
                  :items="frameworks"
                  shape="curved"
                />

                <BaseListbox
                  v-model="selectedFramework"
                  label="Framework"
                  :items="frameworks"
                  shape="full"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="shapes" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Combobox disabled -->
        <DocSection title="Disabled state" tag="1.0.0">
          <DocComponent label="Disabled state example">
            <template #demo>
              <div class="flex max-w-xs items-end">
                <BaseListbox
                  v-model="selectedPersonName"
                  label="Assignee"
                  :items="peopleNames"
                  disabled
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="disabled" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Combobox loading -->
        <DocSection title="Loading state" tag="1.0.0">
          <DocComponent label="Loading state example">
            <template #demo>
              <div class="flex max-w-xs items-end">
                <BaseListbox
                  v-model="selectedPersonName"
                  label="Assignee"
                  :items="peopleNames"
                  loading
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="loading" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Combobox sublabels -->
        <DocSection title="Combobox" tag="1.0.0">
          <DocComponent label="Text with sublabels example">
            <template #demo>
              <div class="flex max-w-xs items-end">
                <BaseListbox
                  v-model="selectedPersonName"
                  label="Assignee"
                  :items="peopleNames"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="sublabels" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Combobox icon -->
        <DocSection title="Combobox icon" tag="1.0.0">
          <DocComponent label="Combobox icon example">
            <template #demo>
              <div class="flex max-w-xs items-end">
                <BaseListbox
                  v-model="selectedHobby"
                  label="Hobbies"
                  :items="hobbies"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="icon" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Combobox media -->
        <DocSection title="Combobox" tag="1.0.0">
          <DocComponent label="Combo media example">
            <template #demo>
              <div class="flex max-w-xs items-end">
                <BaseListbox
                  v-model="selectedPerson"
                  label="Assignee"
                  :items="people"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="media" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Combobox properties -->
        <DocComponentMeta name="BaseListbox" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
