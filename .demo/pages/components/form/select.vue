<script setup lang="ts">
import curved from '~/documentation/form/select/curved.md?raw'
import full from '~/documentation/form/select/full.md?raw'
import group from '~/documentation/form/select/group.md?raw'
import icon from '~/documentation/form/select/icon.md?raw'
import invalid from '~/documentation/form/select/invalid.md?raw'
import rounded from '~/documentation/form/select/rounded.md?raw'
import loading from '~/documentation/form/select/loading.md?raw'
import straight from '~/documentation/form/select/straight.md?raw'

const selectStraight = ref('')
const selectRounded = ref('')
const selectCurved = ref('')
const selectFull = ref('')

definePageMeta({
  title: 'Selects',
  documentation: {
    category: 'Forms',
    components: ['BaseSelect'],
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
        <DocSection title="Select straight" tag="1.0.0">
          <DocComponent label="Straight select example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseSelect
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
                  </BaseSelect>
                </div>
                <!-- State box -->
                <DocState :state="selectStraight" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="straight" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select rounded -->
        <DocSection title="Select rounded" tag="1.0.0">
          <DocComponent label="Rounded select example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseSelect
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
                  </BaseSelect>
                </div>
                <!-- State box -->
                <DocState :state="selectRounded" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="rounded" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select curved -->
        <DocSection title="Select curved" tag="1.0.0">
          <DocComponent label="Curved select example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseSelect
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
                  </BaseSelect>
                </div>
                <!-- State box -->
                <DocState :state="selectCurved" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="curved" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select full -->
        <DocSection title="Select full" tag="1.0.0">
          <DocComponent label="Full select example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseSelect
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
                  </BaseSelect>
                </div>
                <!-- State box -->
                <DocState :state="selectFull" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="full" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select icon -->
        <DocSection title="Select icon" tag="1.0.0">
          <DocComponent label="Icon select example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseSelect
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
                  </BaseSelect>
                </div>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="icon" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select group -->
        <DocSection title="Option group" tag="1.0.0">
          <DocComponent label="Option group example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseSelect shape="rounded" label="Select a hero">
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
                  </BaseSelect>
                </div>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="group" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select loading -->
        <DocSection title="Select loading" tag="1.0.0">
          <DocComponent label="Loading state example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseSelect shape="rounded" label="Select a hero" loading>
                    <option value="">Select a hero</option>
                    <option value="Superman">Superman</option>
                    <option value="Batman">Batman</option>
                    <option value="Iron man">Iron man</option>
                    <option value="Magneto">Magneto</option>
                    <option value="Cyclops">Cyclops</option>
                  </BaseSelect>
                </div>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="loading" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select invalid -->
        <DocSection title="Select invalid" tag="1.0.0">
          <DocComponent label="Invalid state example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseSelect shape="curved" label="Select a hero" invalid>
                    <option value="">Select a hero</option>
                    <option value="Superman">Superman</option>
                    <option value="Batman">Batman</option>
                    <option value="Iron man">Iron man</option>
                    <option value="Magneto">Magneto</option>
                    <option value="Cyclops">Cyclops</option>
                  </BaseSelect>
                </div>
                <!-- State box -->
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="invalid" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Select properties -->
        <DocComponentMeta name="BaseSelect" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
