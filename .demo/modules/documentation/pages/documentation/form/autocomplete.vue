<script setup lang="ts">
import ClearableDemo from '../../../examples/autocomplete/clearable.vue'
import clearable from '../../../examples/autocomplete/clearable.vue?raw'
import CurvedDemo from '../../../examples/autocomplete/curved.vue'
import curved from '../../../examples/autocomplete/curved.vue?raw'
import DisabledDemo from '../../../examples/autocomplete/disabled.vue'
import disabled from '../../../examples/autocomplete/disabled.vue?raw'
import FullDemo from '../../../examples/autocomplete/full.vue'
import full from '../../../examples/autocomplete/full.vue?raw'
import IconDemo from '../../../examples/autocomplete/icon.vue'
import icon from '../../../examples/autocomplete/icon.vue?raw'
import LabelFloatDemo from '../../../examples/autocomplete/label-float.vue'
import labelFloat from '../../../examples/autocomplete/label-float.vue?raw'
import CondensedDemo from '../../../examples/autocomplete/condensed.vue'
import condensed from '../../../examples/autocomplete/condensed.vue?raw'
import IconResultDemo from '../../../examples/autocomplete/icon-result.vue'
import iconResult from '../../../examples/autocomplete/icon-result.vue?raw'
import LoadingDemo from '../../../examples/autocomplete/loading.vue'
import loading from '../../../examples/autocomplete/loading.vue?raw'
import MediaResultDemo from '../../../examples/autocomplete/media-result.vue'
import mediaResult from '../../../examples/autocomplete/media-result.vue?raw'
import MultipleDemo from '../../../examples/autocomplete/multiple.vue'
import multiple from '../../../examples/autocomplete/multiple.vue?raw'
import RoundedDemo from '../../../examples/autocomplete/rounded.vue'
import rounded from '../../../examples/autocomplete/rounded.vue?raw'
import StraightDemo from '../../../examples/autocomplete/straight.vue'
import straight from '../../../examples/autocomplete/straight.vue?raw'

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
    <BaseBreadcrumb />

    <DocLayout>
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
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(straight)"
                fullwidth
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
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(rounded)"
                fullwidth
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
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(curved)"
                fullwidth
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
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(full)" fullwidth />
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
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark :source="wrapVueMarkdown(icon)" fullwidth />
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
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(clearable)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete floating label -->
        <DocSection title="Floating label" tag="1.0.0">
          <DocComponent label="Material style labels example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-lg space-y-4">
                  <LabelFloatDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(labelFloat)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Autocomplete condensed -->
        <DocSection title="Condensed" tag="1.0.0">
          <DocComponent label="Condensed autocompletes example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-lg space-y-4">
                  <CondensedDemo />
                </div>
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(condensed)"
                fullwidth
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
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(disabled)"
                fullwidth
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
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(loading)"
                fullwidth
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
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(iconResult)"
                fullwidth
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
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(mediaResult)"
                fullwidth
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
              </div>
            </template>
            <template #code>
              <AddonMarkdownRemark
                :source="wrapVueMarkdown(multiple)"
                fullwidth
              />
            </template>
          </DocComponent>
        </DocSection>

        <DocComponentMeta name="BaseAutocomplete" />
        <DocComponentMeta name="BaseAutocompleteItem" />
      </template>
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
