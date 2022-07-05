<script setup lang="ts">
import { breadcrumb, toc } from '@@/documentation/components/form/select/toc'
import {
  curved,
  full,
  group,
  icon,
  invalid,
  loading,
  rounded,
  straight,
} from '@@/documentation/components/form/select'
import { properties } from '@@/documentation/components/form/select/properties'
import {
  selectCurved,
  selectFull,
  selectRounded,
  selectStraight,
} from '@@/documentation/components/form/select/data'

definePageMeta({
  title: 'Selects',
  documentation: {
    category: 'Forms',
    components: ['BaseFormSelect'],
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
        <!-- Select straight -->
        <DocSection id="select-straight" title="Select straight" tag="1.0.0">
          <DocComponent label="Straight select example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormSelect
                    v-model="selectStraight"
                    shape="straight"
                    label="Select a hero"
                  >
                    <option value="">Select a hero</option>
                    <option value="Superman">Superman</option>
                    <option value="Batman">Batman</option>
                    <option value="Iron man">Iron man</option>
                    <option value="Magneto">Magneto</option>
                    <option value="Cyclops">Cyclops</option>
                  </BaseFormSelect>
                </div>
                <!-- State box -->
                <DocState :state="selectStraight" height="80px" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="straight" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select rounded -->
        <DocSection id="select-rounded" title="Select rounded" tag="1.0.0">
          <DocComponent label="Rounded select example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormSelect
                    v-model="selectRounded"
                    shape="rounded"
                    label="Select a hero"
                  >
                    <option value="">Select a hero</option>
                    <option value="Superman">Superman</option>
                    <option value="Batman">Batman</option>
                    <option value="Iron man">Iron man</option>
                    <option value="Magneto">Magneto</option>
                    <option value="Cyclops">Cyclops</option>
                  </BaseFormSelect>
                </div>
                <!-- State box -->
                <DocState :state="selectRounded" height="80px" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="rounded" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select curved -->
        <DocSection id="select-curved" title="Select curved" tag="1.0.0">
          <DocComponent label="Curved select example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormSelect
                    v-model="selectCurved"
                    shape="curved"
                    label="Select a hero"
                  >
                    <option value="">Select a hero</option>
                    <option value="Superman">Superman</option>
                    <option value="Batman">Batman</option>
                    <option value="Iron man">Iron man</option>
                    <option value="Magneto">Magneto</option>
                    <option value="Cyclops">Cyclops</option>
                  </BaseFormSelect>
                </div>
                <!-- State box -->
                <DocState :state="selectCurved" height="80px" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="curved" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select full -->
        <DocSection id="select-full" title="Select full" tag="1.0.0">
          <DocComponent label="Full select example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormSelect
                    v-model="selectFull"
                    shape="full"
                    label="Select a hero"
                  >
                    <option value="">Select a hero</option>
                    <option value="Superman">Superman</option>
                    <option value="Batman">Batman</option>
                    <option value="Iron man">Iron man</option>
                    <option value="Magneto">Magneto</option>
                    <option value="Cyclops">Cyclops</option>
                  </BaseFormSelect>
                </div>
                <!-- State box -->
                <DocState :state="selectFull" height="80px" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select icon -->
        <DocSection id="select-icon" title="Select icon" tag="1.0.0">
          <DocComponent label="Icon select example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormSelect
                    shape="rounded"
                    label="Select a hero"
                    icon="icon-park-outline:muscle"
                  >
                    <option value="">Select a hero</option>
                    <option value="Superman">Superman</option>
                    <option value="Batman">Batman</option>
                    <option value="Iron man">Iron man</option>
                    <option value="Magneto">Magneto</option>
                    <option value="Cyclops">Cyclops</option>
                  </BaseFormSelect>
                </div>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="icon" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select group -->
        <DocSection id="select-group" title="Option group" tag="1.0.0">
          <DocComponent label="Option group example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormSelect shape="rounded" label="Select a hero">
                    <option value="">Select a hero</option>
                    <optgroup label="Marvel">
                      <option value="Iron man">Iron man</option>
                      <option value="Magneto">Magneto</option>
                      <option value="Cyclops">Cyclops</option>
                    </optgroup>
                    <optgroup label="DC Comics">
                      <option value="Superman">Superman</option>
                      <option value="Batman">Batman</option>
                    </optgroup>
                  </BaseFormSelect>
                </div>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="group" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select loading -->
        <DocSection id="select-loading" title="Select loading" tag="1.0.0">
          <DocComponent label="Loading state example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormSelect shape="rounded" label="Select a hero" loading>
                    <option value="">Select a hero</option>
                    <option value="Superman">Superman</option>
                    <option value="Batman">Batman</option>
                    <option value="Iron man">Iron man</option>
                    <option value="Magneto">Magneto</option>
                    <option value="Cyclops">Cyclops</option>
                  </BaseFormSelect>
                </div>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="loading" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select invalid -->
        <DocSection id="select-invalid" title="Select invalid" tag="1.0.0">
          <DocComponent label="Invalid state example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormSelect shape="curved" label="Select a hero" invalid>
                    <option value="">Select a hero</option>
                    <option value="Superman">Superman</option>
                    <option value="Batman">Batman</option>
                    <option value="Iron man">Iron man</option>
                    <option value="Magneto">Magneto</option>
                    <option value="Cyclops">Cyclops</option>
                  </BaseFormSelect>
                </div>
                <!-- State box -->
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="invalid" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select properties -->
        <DocProps
          id="select-props"
          component="Select"
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
