<script setup lang="ts">
import ClearableDemo from '~/documentation/autocomplete/clearable.vue'
import clearable from '~/documentation/autocomplete/clearable.vue?raw'
import CurvedDemo from '~/documentation/autocomplete/curved.vue'
import curved from '~/documentation/autocomplete/curved.vue?raw'
import DisabledDemo from '~/documentation/autocomplete/disabled.vue'
import disabled from '~/documentation/autocomplete/disabled.vue?raw'
import FullDemo from '~/documentation/autocomplete/full.vue'
import full from '~/documentation/autocomplete/full.vue?raw'
import IconDemo from '~/documentation/autocomplete/icon.vue'
import icon from '~/documentation/autocomplete/icon.vue?raw'
import IconResultDemo from '~/documentation/autocomplete/icon-result.vue'
import iconResult from '~/documentation/autocomplete/icon-result.vue?raw'
import LoadingDemo from '~/documentation/autocomplete/loading.vue'
import loading from '~/documentation/autocomplete/loading.vue?raw'
import MediaResultDemo from '~/documentation/autocomplete/media-result.vue'
import mediaResult from '~/documentation/autocomplete/media-result.vue?raw'
import MultipleDemo from '~/documentation/autocomplete/multiple.vue'
import multiple from '~/documentation/autocomplete/multiple.vue?raw'
import RoundedDemo from '~/documentation/autocomplete/rounded.vue'
import rounded from '~/documentation/autocomplete/rounded.vue?raw'
import StraightDemo from '~/documentation/autocomplete/straight.vue'
import straight from '~/documentation/autocomplete/straight.vue?raw'

definePageMeta({
  title: 'Autocomplete',
  documentation: {
    category: 'Forms',
    components: ['BaseAutocomplete'],
  },
})

const demoBreadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'lucide:home',
    to: '/',
  },
  {
    label: 'Components Hub',
    hideLabel: false,
    to: '/components',
  },
  {
    label: 'Autocomplete',
    hideLabel: false,
    to: '#/',
  },
]

function wrapVueMarkdown(source: string) {
  return '```vue\n' + source + '\n```'
}

const selectedFramework = `
const selectedFramework = ref('')
`
const selectedHobby = `
const selectedHobby = ref('')
`
const selectedPerson = `
const selectedPerson = ref('')
`
const selectedPeople = `
const selectedPerson = ref([people[0], people[1]])
`
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="demoBreadcrumb" />

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
                  <StraightDemo />
                </div>
                <!-- State box -->
                <DocState
                  label="v-model"
                  :state="selectedFramework"
                  height="80px"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(straight)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete rounded -->
        <DocSection title="Rounded shape" tag="1.0.0">
          <DocComponent label="Rounded autocomplete example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <RoundedDemo />
                </div>
                <!-- State box -->
                <DocState
                  label="v-model"
                  :state="selectedFramework"
                  height="80px"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(rounded)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete curved -->
        <DocSection title="Curved shape" tag="1.0.0">
          <DocComponent label="Curved autocomplete example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <CurvedDemo />
                </div>
                <!-- State box -->
                <DocState
                  label="v-model"
                  :state="selectedFramework"
                  height="80px"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(curved)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete full -->
        <DocSection title="Full shape" tag="1.0.0">
          <DocComponent label="Full autocomplete example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <FullDemo />
                </div>
                <!-- State box -->
                <DocState
                  label="v-model"
                  :state="selectedFramework"
                  height="80px"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(full)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete icon -->
        <DocSection title="With icon" tag="1.0.0">
          <DocComponent label="Icon autocomplete example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <IconDemo />
                </div>
                <!-- State box -->
                <DocState
                  label="v-model"
                  :state="selectedFramework"
                  height="80px"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(icon)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete clear -->
        <DocSection title="Clearable" tag="1.0.0">
          <DocComponent label="Clear button example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <ClearableDemo />
                </div>
                <!-- State box -->
                <DocState
                  label="v-model"
                  :state="selectedFramework"
                  height="80px"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(clearable)"
                class="prose max-w-full"
              />
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
                  <DisabledDemo />
                </div>
                <!-- State box -->
                <DocState
                  label="v-model"
                  :state="selectedFramework"
                  height="80px"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(disabled)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete loading -->
        <DocSection title="Loading state" tag="1.0.0">
          <DocComponent label="Loading state example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <LoadingDemo />
                </div>
                <!-- State box -->
                <DocState
                  label="v-model"
                  :state="selectedFramework"
                  height="80px"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(loading)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete icons -->
        <DocSection title="Icon results" tag="1.0.0">
          <DocComponent label="Results with icons example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <IconResultDemo />
                </div>
                <!-- State box -->
                <DocState
                  label="v-model"
                  :state="selectedHobby"
                  height="80px"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(iconResult)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete media -->
        <DocSection title="Media results" tag="1.0.0">
          <DocComponent label="Results with media example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <MediaResultDemo />
                </div>
                <!-- State box -->
                <DocState
                  label="v-model"
                  :state="selectedPerson"
                  height="80px"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(mediaResult)"
                class="prose max-w-full"
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete multiple -->
        <DocSection title="Multiple" tag="1.0.0">
          <DocComponent label="Multiple selection example">
            <template #demo>
              <div class="flex max-w-lg flex-col gap-6">
                <div class="w-full space-y-4">
                  <MultipleDemo />
                </div>
                <!-- State box -->
                <DocState
                  label="v-model"
                  :state="selectedPeople"
                  height="80px"
                />
              </div>
            </template>
            <template #code>
              <DocMarkdown
                :source="wrapVueMarkdown(multiple)"
                class="prose max-w-full"
              />
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
