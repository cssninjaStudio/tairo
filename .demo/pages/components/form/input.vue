<script setup lang="ts">
import curved from '~/documentation/form/input/curved.md?raw'
import disabled from '~/documentation/form/input/disabled.md?raw'
import focus from '~/documentation/form/input/focus.md?raw'
import full from '~/documentation/form/input/full.md?raw'
import icon from '~/documentation/form/input/icon.md?raw'
import invalid from '~/documentation/form/input/invalid.md?raw'
import loading from '~/documentation/form/input/loading.md?raw'
import rounded from '~/documentation/form/input/rounded.md?raw'
import straight from '~/documentation/form/input/straight.md?raw'

const inputStraight = ref('')
const inputRounded = ref('')
const inputCurved = ref('')
const inputFull = ref('')

definePageMeta({
  title: 'Inputs',
  documentation: {
    category: 'Forms',
    components: ['BaseInput'],
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
        <!-- Input straight -->
        <DocSection title="Input straight" tag="1.0.0">
          <DocComponent label="Straight input example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <BaseInput
                    v-model="inputStraight"
                    shape="straight"
                    label="Short description"
                    placeholder="Enter a few words..."
                  />
                </div>
                <!-- State box -->
                <DocState :state="inputStraight" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="straight" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input rounded -->
        <DocSection title="Input rounded" tag="1.0.0">
          <DocComponent label="Rounded input example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <BaseInput
                    v-model="inputRounded"
                    shape="rounded"
                    label="Short description"
                    placeholder="Enter a few words..."
                  />
                </div>
                <!-- State box -->
                <DocState :state="inputRounded" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="rounded" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input curved -->
        <DocSection title="Input curved" tag="1.0.0">
          <DocComponent label="Curved input example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <BaseInput
                    v-model="inputCurved"
                    shape="curved"
                    label="Short description"
                    placeholder="Enter a few words..."
                  />
                </div>
                <!-- State box -->
                <DocState :state="inputCurved" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="curved" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input full -->
        <DocSection title="Input full" tag="1.0.0">
          <DocComponent label="Full input example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <BaseInput
                    v-model="inputFull"
                    shape="full"
                    label="Short description"
                    placeholder="Enter a few words..."
                  />
                </div>
                <!-- State box -->
                <DocState :state="inputFull" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="full" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input icon -->
        <DocSection title="Input icon" tag="1.0.0">
          <DocComponent label="Icon input example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <BaseInput
                    shape="straight"
                    label="Search"
                    placeholder="Enter search terms..."
                    icon="lucide:search"
                  />
                  <BaseInput
                    shape="rounded"
                    label="Email Address"
                    placeholder="Your email..."
                    icon="lucide:mail"
                  />
                </div>
                <div class="w-full max-w-sm space-y-4">
                  <BaseInput
                    shape="curved"
                    label="Username"
                    placeholder="Your username..."
                    icon="lucide:user"
                  />
                  <BaseInput
                    type="password"
                    shape="full"
                    label="Password"
                    placeholder="Enter password..."
                    icon="lucide:lock"
                  />
                </div>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="icon" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input focus -->
        <DocSection title="Colored focus" tag="1.0.0">
          <DocComponent label="Input primary focus example">
            <template #demo>
              <div class="flex flex-col gap-6 md:flex-row md:items-end">
                <div class="w-full max-w-sm space-y-4">
                  <BaseInput
                    v-model="inputRounded"
                    shape="rounded"
                    label="Email Address"
                    placeholder="Enter your email..."
                    icon="lucide:mail"
                    color-focus
                  />
                </div>
                <!-- State box -->
                <DocState :state="inputRounded" height="80px" />
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="focus" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input loading -->
        <DocSection title="Loading state" tag="1.0.0">
          <DocComponent label="Input loading state example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseInput
                    shape="rounded"
                    label="Email Address"
                    placeholder="Enter your email..."
                    icon="lucide:mail"
                    loading
                  />
                </div>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="loading" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input disabled -->
        <DocSection title="Disabled state" tag="1.0.0">
          <DocComponent label="Input disabled state example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseInput
                    shape="rounded"
                    label="Email Address"
                    placeholder="Enter your email..."
                    icon="lucide:mail"
                    disabled
                  />
                </div>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="disabled" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input invalid -->
        <DocSection title="Colored invalid" tag="1.0.0">
          <DocComponent label="Input invalid state example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseInput
                    shape="rounded"
                    label="Email Address"
                    placeholder="Enter your email..."
                    icon="lucide:mail"
                    invalid
                  />
                </div>
              </div>
            </template>
            <template #code>
              <DocMarkdown :source="invalid" class="prose max-w-2xl" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input properties -->
        <DocComponentMeta name="BaseInput" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
