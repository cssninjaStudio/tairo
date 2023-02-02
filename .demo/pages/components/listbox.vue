<script setup lang="ts">
import disabled from '~/documentation/listbox/disabled.md?raw'
import icon from '~/documentation/listbox/icon.md?raw'
import loading from '~/documentation/listbox/loading.md?raw'
import media from '~/documentation/listbox/media.md?raw'
import shapes from '~/documentation/listbox/shapes.md?raw'
import sublabels from '~/documentation/listbox/sublabels.md?raw'
import multiple from '~/documentation/listbox/multiple.md?raw'

const frameworks = ['Javascript', 'Vue.js', 'React.js', 'Angular', 'Alpine.js']

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

const selectedFramework = ref()
const selectedPersonName = ref(peopleNames[0])
const selectedHobby = ref(hobbies[1])
const selectedPerson = ref(people[2])
const selectedPersonMutliple = ref([])

definePageMeta({
  title: 'Listbox',
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
        <!-- Listbox shapes -->
        <DocSection title="Listbox shapes" tag="1.0.0">
          <DocComponent label="Listbox shapes example">
            <template #demo>
              <div class="grid gap-4 md:grid-cols-2">
                <BaseListbox
                  v-model="selectedFramework"
                  label="Straight listbox"
                  :items="frameworks"
                  placeholder="Select a framework"
                  shape="straight"
                />

                <BaseListbox
                  v-model="selectedFramework"
                  label="Rounded listbox (default)"
                  :items="frameworks"
                  placeholder="Select a framework"
                  shape="rounded"
                />

                <BaseListbox
                  v-model="selectedFramework"
                  label="Curved listbox"
                  :items="frameworks"
                  placeholder="Select a framework"
                  shape="curved"
                />

                <BaseListbox
                  v-model="selectedFramework"
                  label="Full listbox"
                  :items="frameworks"
                  placeholder="Select a framework"
                  shape="full"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="shapes" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Listbox sublabels -->
        <DocSection title="Listbox with sublabels" tag="1.0.0">
          <DocComponent label="Text with sublabels example">
            <template #demo>
              <div class="flex max-w-xs items-end">
                <BaseListbox
                  v-model="selectedPersonName"
                  label="Assignee"
                  :items="peopleNames"
                  :properties="{
                    value: 'id',
                    label: 'name',
                    sublabel: 'text',
                  }"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="sublabels" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Listbox media -->
        <DocSection title="Listbox with media" tag="1.0.0">
          <DocComponent label="Select media example">
            <template #demo>
              <div class="flex max-w-xs items-end">
                <BaseListbox
                  v-model="selectedPerson"
                  label="Assignee"
                  :items="people"
                  :properties="{
                    value: 'id',
                    label: 'name',
                    sublabel: 'text',
                    media: 'media',
                  }"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="media" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Listbox icon -->
        <DocSection title="Listbox with icon" tag="1.0.0">
          <DocComponent label="Listbox icon example">
            <template #demo>
              <div class="flex max-w-xs items-end">
                <BaseListbox
                  v-model="selectedHobby"
                  label="Hobbies"
                  :items="hobbies"
                  :properties="{
                    value: 'id',
                    label: 'name',
                    sublabel: 'text',
                    icon: 'icon',
                  }"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="icon" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Listbox disabled -->
        <DocSection title="Disabled state" tag="1.0.0">
          <DocComponent label="Disabled state example">
            <template #demo>
              <div class="flex max-w-xs items-end">
                <BaseListbox
                  v-model="selectedPersonName"
                  label="Assignee"
                  :items="peopleNames"
                  :properties="{
                    value: 'id',
                    label: 'name',
                    sublabel: 'text',
                  }"
                  disabled
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="disabled" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Listbox loading -->
        <DocSection title="Loading state" tag="1.0.0">
          <DocComponent label="Loading state example">
            <template #demo>
              <div class="flex max-w-xs items-end">
                <BaseListbox
                  v-model="selectedPersonName"
                  label="Assignee"
                  :items="peopleNames"
                  :properties="{
                    value: 'id',
                    label: 'name',
                    media: 'media',
                  }"
                  loading
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="loading" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Listbox multiple -->
        <DocSection title="Multiple selection" tag="1.0.0">
          <DocComponent label="Select multiple example">
            <template #demo>
              <div class="flex max-w-xs items-end">
                <BaseListbox
                  v-model="selectedPersonMutliple"
                  label="Assignee"
                  :items="people"
                  :properties="{
                    value: 'id',
                    label: 'name',
                    sublabel: 'text',
                    media: 'media',
                  }"
                  multiple
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="multiple" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Listbox properties -->
        <DocComponentMeta name="BaseListbox" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
