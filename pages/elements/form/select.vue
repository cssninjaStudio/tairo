<script setup lang="ts">
// import { toc } from '@@/documentation/elements/select/toc'
// import { } from '@@/documentation/elements/select'

definePageMeta({
  title: 'Selects',
})

const breadcrumb = [
  {
    label: 'Home',
    hideLabel: true,
    icon: 'i-lucide-home',
    hideIcon: false,
    to: '/',
  },
  {
    label: 'Elements',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/elements',
  },
  {
    label: 'Select',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/form/select',
  },
]

const selectStraight = ref('')
const selectRounded = ref('')
const selectCurved = ref('')
const selectFull = ref('')
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="breadcrumb" separator="dot" />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Select straight -->
        <DocSection id="select-straight" title="Select straight" tag="1.0.0">
          <DocComponent label="Default select straight">
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
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Select rounded -->
        <DocSection id="select-rounded" title="Select rounded" tag="1.0.0">
          <DocComponent label="Default select rounded">
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
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Select curved -->
        <DocSection id="select-curved" title="Select curved" tag="1.0.0">
          <DocComponent label="Default select curved">
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
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Select full -->
        <DocSection id="select-full" title="Select full" tag="1.0.0">
          <DocComponent label="Default select full">
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
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Select icon -->
        <DocSection id="select-icon" title="Select icon" tag="1.0.0">
          <DocComponent label="Default select icon">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormSelect
                    shape="rounded"
                    label="Select a hero"
                    icon="i-icon-park-outline-muscle"
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
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Select group -->
        <DocSection id="select-group" title="Option group" tag="1.0.0">
          <DocComponent label="Default select group">
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
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Select loading -->
        <DocSection id="select-loading" title="Select loading" tag="1.0.0">
          <DocComponent label="Default select loading">
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
            <template #code></template>
          </DocComponent>
        </DocSection>

        <!-- Select invalid -->
        <DocSection id="select-invalid" title="Select invalid" tag="1.0.0">
          <DocComponent label="Default select invalid">
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
            <template #code></template>
          </DocComponent>
        </DocSection>
      </template>
      <!-- Toc -->
      <template #toc></template>
    </DocLayout>
  </div>
</template>
