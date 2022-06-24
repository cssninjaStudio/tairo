<script setup lang="ts">
import { toc } from '@@/documentation/elements/autocomplete/toc'
import {
  clearable,
  curved,
  disabled,
  full,
  icon,
  iconResult,
  loading,
  mediaResult,
  multiple,
  rounded,
  straight,
} from '@@/documentation/elements/autocomplete'
import { properties } from '@@/documentation/elements/autocomplete/properties'

definePageMeta({
  title: 'Autocomplete',
})

const breadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'i-lucide-home',
    to: '/',
  },
  {
    label: 'Elements',
    hideLabel: false,
    to: '/elements',
  },
  {
    label: 'Autocomplete',
    hideLabel: false,
    to: '/elements/autocomplete',
  },
]

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

const selectedFramework = ref('')
const selectedHobby = ref('')
const selectedPerson = ref('')
const selectedPeople = ref([people[0], people[1]])
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="breadcrumb" separator="dot" />

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
              <div class="flex flex-col md:flex-row md:items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormAutocomplete
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
              <DocCode language="html" :code="straight" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete rounded -->
        <DocSection id="autocomplete-rounded" title="Rounded shape" tag="1.0.0">
          <DocComponent label="Rounded autocomplete example">
            <template #demo>
              <div class="flex flex-col md:flex-row md:items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormAutocomplete
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
              <DocCode language="html" :code="rounded" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete curved -->
        <DocSection id="autocomplete-curved" title="Curved shape" tag="1.0.0">
          <DocComponent label="Curved autocomplete example">
            <template #demo>
              <div class="flex flex-col md:flex-row md:items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormAutocomplete
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
              <DocCode language="html" :code="curved" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete full -->
        <DocSection id="autocomplete-full" title="Full shape" tag="1.0.0">
          <DocComponent label="Full autocomplete example">
            <template #demo>
              <div class="flex flex-col md:flex-row md:items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormAutocomplete
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
              <DocCode language="html" :code="full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete icon -->
        <DocSection id="autocomplete-icon" title="With icon" tag="1.0.0">
          <DocComponent label="Icon autocomplete example">
            <template #demo>
              <div class="flex flex-col md:flex-row md:items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormAutocomplete
                    v-model="selectedFramework"
                    :items="frameworks"
                    icon="i-lucide-search"
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
              <DocCode language="html" :code="icon" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete clear -->
        <DocSection id="autocomplete-clear" title="Clearable" tag="1.0.0">
          <DocComponent label="Clear button example">
            <template #demo>
              <div class="flex flex-col md:flex-row md:items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormAutocomplete
                    v-model="selectedFramework"
                    :items="frameworks"
                    icon="i-lucide-search"
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
              <DocCode language="html" :code="clearable" />
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
              <div class="flex flex-col md:flex-row md:items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormAutocomplete
                    v-model="selectedFramework"
                    :items="frameworks"
                    icon="i-lucide-search"
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
              <DocCode language="html" :code="disabled" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete loading -->
        <DocSection id="autocomplete-loading" title="Loading state" tag="1.0.0">
          <DocComponent label="Loading state example">
            <template #demo>
              <div class="flex flex-col md:flex-row md:items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormAutocomplete
                    v-model="selectedFramework"
                    :items="frameworks"
                    icon="i-lucide-search"
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
              <DocCode language="html" :code="loading" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete icons -->
        <DocSection id="autocomplete-icons" title="Icon results" tag="1.0.0">
          <DocComponent label="Results with icons example">
            <template #demo>
              <div class="flex flex-col md:flex-row md:items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormAutocomplete
                    v-model="selectedHobby"
                    :items="hobbies"
                    icon="i-ph-heartbeat-duotone"
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
              <DocCode language="html" :code="iconResult" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete media -->
        <DocSection id="autocomplete-media" title="Media results" tag="1.0.0">
          <DocComponent label="Results with media example">
            <template #demo>
              <div class="flex flex-col md:flex-row md:items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormAutocomplete
                    v-model="selectedPerson"
                    :items="people"
                    icon="i-ph-users-three"
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
              <DocCode language="html" :code="mediaResult" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete multiple -->
        <DocSection id="autocomplete-multiple" title="Multiple" tag="1.0.0">
          <DocComponent label="Multiple selection example">
            <template #demo>
              <div class="flex flex-col max-w-lg gap-6">
                <div class="w-full space-y-4">
                  <BaseFormAutocomplete
                    v-model="selectedPeople"
                    :items="people"
                    shape="rounded"
                    icon="i-ph-users-three"
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
              <DocCode language="html" :code="multiple" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete properties -->
        <DocProps
          id="autocomplete-props"
          component="Autocomplete"
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
