<script setup lang="ts">
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
} from '@@/documentation/components/autocomplete'
import {
  frameworks,
  hobbies,
  people,
  selectedFramework,
  selectedHobby,
  selectedPeople,
  selectedPerson,
} from '@@/documentation/components/autocomplete/data'

import { metaBaseAutocomplete } from '#nuxt-component-meta'

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
              <DocCode language="html" :code="straight" />
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
              <DocCode language="html" :code="rounded" />
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
              <DocCode language="html" :code="curved" />
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
              <DocCode language="html" :code="full" />
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
              <DocCode language="html" :code="icon" />
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
              <DocCode language="html" :code="disabled" />
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
              <DocCode language="html" :code="loading" />
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
              <DocCode language="html" :code="iconResult" />
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
              <DocCode language="html" :code="mediaResult" />
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
              <DocCode language="html" :code="multiple" />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta :meta="metaBaseAutocomplete" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
