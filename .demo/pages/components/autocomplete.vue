<script setup lang="ts">
import clearable from '~/documentation/autocomplete/clearable.md?raw'
import curved from '~/documentation/autocomplete/curved.md?raw'
import disabled from '~/documentation/autocomplete/disabled.md?raw'
import full from '~/documentation/autocomplete/full.md?raw'
import icon from '~/documentation/autocomplete/icon.md?raw'
import iconResult from '~/documentation/autocomplete/icon-result.md?raw'
import loading from '~/documentation/autocomplete/loading.md?raw'
import mediaResult from '~/documentation/autocomplete/media-result.md?raw'
import multiple from '~/documentation/autocomplete/multiple.md?raw'
import rounded from '~/documentation/autocomplete/rounded.md?raw'
import straight from '~/documentation/autocomplete/straight.md?raw'

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

const selectedFramework = ref('')
const selectedHobby = ref('')
const selectedPerson = ref('')
const selectedPeople = ref([people[0], people[1]])

definePageMeta({
  title: 'Autocomplete',
  documentation: {
    category: 'Forms',
    components: ['BaseAutocomplete'],
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
        <!-- Autocomplete straight -->
        <DocSection
          id="autocomplete-straight"
          title="Straight shape"
          tag="1.0.0"
        >
          <DocComponent label="Straight autocomplete example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <BaseAutocomplete
                    v-model="selectedFramework"
                    :items="frameworks"
                    shape="straight"
                    placeholder="Select a framework"
                    label="Framework"
                  />
                </div>
                <!-- State box -->
                <DocState :state="selectedFramework" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="straight" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete rounded -->
        <DocSection title="Rounded shape" tag="1.0.0">
          <DocComponent label="Rounded autocomplete example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <BaseAutocomplete
                    v-model="selectedFramework"
                    :items="frameworks"
                    shape="rounded"
                    placeholder="Select a framework"
                    label="Framework"
                  />
                </div>
                <!-- State box -->
                <DocState :state="selectedFramework" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="rounded" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete curved -->
        <DocSection title="Curved shape" tag="1.0.0">
          <DocComponent label="Curved autocomplete example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <BaseAutocomplete
                    v-model="selectedFramework"
                    :items="frameworks"
                    shape="curved"
                    placeholder="Select a framework"
                    label="Framework"
                  />
                </div>
                <!-- State box -->
                <DocState :state="selectedFramework" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="curved" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete full -->
        <DocSection title="Full shape" tag="1.0.0">
          <DocComponent label="Full autocomplete example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <BaseAutocomplete
                    v-model="selectedFramework"
                    :items="frameworks"
                    shape="full"
                    placeholder="Select a framework"
                    label="Framework"
                  />
                </div>
                <!-- State box -->
                <DocState :state="selectedFramework" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="full" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete icon -->
        <DocSection title="With icon" tag="1.0.0">
          <DocComponent label="Icon autocomplete example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <BaseAutocomplete
                    v-model="selectedFramework"
                    :items="frameworks"
                    icon="lucide:search"
                    shape="rounded"
                    placeholder="Select a framework"
                    label="Framework"
                  />
                </div>
                <!-- State box -->
                <DocState :state="selectedFramework" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="icon" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete clear -->
        <DocSection title="Clearable" tag="1.0.0">
          <DocComponent label="Clear button example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <BaseAutocomplete
                    v-model="selectedFramework"
                    :items="frameworks"
                    icon="lucide:search"
                    shape="rounded"
                    placeholder="Select a framework"
                    label="Framework"
                    clearable
                  />
                </div>
                <!-- State box -->
                <DocState :state="selectedFramework" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="clearable" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete disabled -->
        <DocSection
          id="autocomplete-disabled"
          title="Disabled state"
          tag="1.0.0"
        >
          <DocComponent label="Disabled state example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <BaseAutocomplete
                    v-model="selectedFramework"
                    :items="frameworks"
                    icon="lucide:search"
                    shape="rounded"
                    placeholder="Select a framework"
                    label="Framework"
                    clearable
                    disabled
                  />
                </div>
                <!-- State box -->
                <DocState :state="selectedFramework" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="disabled" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete loading -->
        <DocSection title="Loading state" tag="1.0.0">
          <DocComponent label="Loading state example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <BaseAutocomplete
                    v-model="selectedFramework"
                    :items="frameworks"
                    icon="lucide:search"
                    shape="rounded"
                    placeholder="Select a framework"
                    label="Framework"
                    clearable
                    loading
                  />
                </div>
                <!-- State box -->
                <DocState :state="selectedFramework" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="loading" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete icons -->
        <DocSection title="Icon results" tag="1.0.0">
          <DocComponent label="Results with icons example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <BaseAutocomplete
                    v-model="selectedHobby"
                    :items="hobbies"
                    icon="ph:heartbeat-duotone"
                    shape="rounded"
                    placeholder="Select a hobby"
                    label="Hobbies"
                    clearable
                  />
                </div>
                <!-- State box -->
                <DocState :state="selectedHobby" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="iconResult" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete media -->
        <DocSection title="Media results" tag="1.0.0">
          <DocComponent label="Results with media example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <BaseAutocomplete
                    v-model="selectedPerson"
                    :items="people"
                    icon="ph:users-three"
                    placeholder="Search..."
                    label="Assignee"
                    clearable
                  />
                </div>
                <!-- State box -->
                <DocState :state="selectedPerson" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="mediaResult" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete multiple -->
        <DocSection title="Multiple" tag="1.0.0">
          <DocComponent label="Multiple selection example">
            <template #demo>
              <div class="flex max-w-lg flex-col gap-6">
                <div class="w-full space-y-4">
                  <BaseAutocomplete
                    v-model="selectedPeople"
                    :items="people"
                    shape="rounded"
                    icon="ph:users-three"
                    placeholder="Search..."
                    label="Assignee"
                    multiple
                  />
                </div>
                <!-- State box -->
                <DocState :state="selectedPeople" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="multiple" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="BaseAutocomplete" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
