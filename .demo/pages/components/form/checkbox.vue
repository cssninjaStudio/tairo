<script setup lang="ts">
import circle from '~/documentation/form/checkbox/circle.md?raw'
import colors from '~/documentation/form/checkbox/colors.md?raw'
import curved from '~/documentation/form/checkbox/curved.md?raw'
import rounded from '~/documentation/form/checkbox/rounded.md?raw'
import straight from '~/documentation/form/checkbox/straight.md?raw'

const demoOne = ref(true)
const demoTwo = ref(true)
const demoThree = ref([])
const demoFour = ref('')
const demoStraight = ref(true)

definePageMeta({
  title: 'Checkbox',
  documentation: {
    category: 'Forms',
    components: ['BaseCheckbox'],
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
        <!-- Checkbox straight -->
        <DocSection
          id="checkbox-straight"
          title="Checkbox straight"
          tag="1.0.0"
        >
          <DocComponent label="Straight checkbox example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseCheckbox
                    v-model="demoOne"
                    name="demo-1"
                    label="Straight checkbox"
                    shape="straight"
                    :classes="{ 'wrapper': 'text-gray-500' }"
                  />
                </div>
                <!-- State box -->
                <DocState :state="demoOne" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="straight" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Checkbox rounded -->
        <DocSection title="Checkbox rounded" tag="1.0.0">
          <DocComponent label="Rounded checkbox example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseCheckbox
                    v-model="demoTwo"
                    name="demo-2"
                    label="Rounded checkbox"
                    shape="rounded"
                    :classes="{ 'wrapper': 'text-gray-500' }"
                  />
                </div>
                <!-- State box -->
                <DocState :state="demoTwo" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="rounded" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Checkbox curved -->
        <DocSection title="Checkbox curved" tag="1.0.0">
          <DocComponent label="Curved checkbox example">
            <template #demo>
              <div class="flex items-start gap-6">
                <div class="w-full max-w-sm space-x-2">
                  <BaseCheckbox
                    v-model="demoThree"
                    value="Option 1"
                    name="demo-3-1"
                    label="Curved checkbox"
                    shape="curved"
                    :classes="{ 'wrapper': 'text-gray-500' }"
                  />
                  <BaseCheckbox
                    v-model="demoThree"
                    value="Option 2"
                    name="demo-3-2"
                    label="Curved checkbox"
                    shape="curved"
                    :classes="{ 'wrapper': 'text-gray-500' }"
                  />
                </div>
                <!-- State box -->
                <DocState :state="demoThree" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="curved" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Checkbox circle -->
        <DocSection title="Checkbox circle" tag="1.0.0">
          <DocComponent label="Circle checkbox example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseCheckbox
                    v-model="demoFour"
                    name="demo-4"
                    label="Circle checkbox"
                    shape="circle"
                    :true-value="'checked'"
                    :false-value="'not-checked'"
                    :classes="{ 'wrapper': 'text-gray-500' }"
                  />
                </div>
                <!-- State box -->
                <DocState :state="demoFour" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="circle" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Checkbox straight -->
        <DocSection
          id="Checkbox-straight-colors"
          title="Straight colors"
          tag="1.0.0"
        >
          <DocComponent label="Straight checkbox example">
            <template #demo>
              <BaseFocusLoop class="flex flex-wrap items-end gap-4">
                <BaseCheckbox
                  checked
                  name="demo-5"
                  label="Straight"
                  shape="straight"
                  :classes="{ 'wrapper': 'text-gray-500' }"
                />

                <BaseCheckbox
                  checked
                  name="demo-6"
                  label="Straight"
                  shape="straight"
                  :classes="{ 'wrapper': 'text-emerald-500' }"
                />

                <BaseCheckbox
                  checked
                  name="demo-7"
                  label="Rounded"
                  shape="rounded"
                  :classes="{ 'wrapper': 'text-yellow-500' }"
                />

                <BaseCheckbox
                  checked
                  name="demo-8"
                  label="Rounded"
                  shape="rounded"
                  :classes="{ 'wrapper': 'text-pink-500' }"
                />

                <BaseCheckbox
                  checked
                  name="demo-9"
                  label="Curved"
                  shape="curved"
                  :classes="{ 'wrapper': 'text-indigo-500' }"
                />

                <BaseCheckbox
                  checked
                  name="demo-10"
                  label="Curved"
                  shape="curved"
                  :classes="{ 'wrapper': 'text-primary-500' }"
                />

                <BaseCheckbox
                  checked
                  name="demo-11"
                  label="Circle"
                  shape="circle"
                  :classes="{ 'wrapper': 'text-amber-500' }"
                />

                <BaseCheckbox
                  checked
                  name="demo-12"
                  label="Circle"
                  shape="circle"
                  :classes="{ 'wrapper': 'text-rose-500' }"
                />
              </BaseFocusLoop>
            </template>
            <template #code>
              <DocMarkdown :source="colors" class="prose max-w-full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Checkbox properties -->
        <DocComponentMeta name="BaseCheckbox" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
