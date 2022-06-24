<script setup lang="ts">
import { toc } from '@@/documentation/elements/form/input/toc'
import {
  curved,
  disabled,
  focus,
  full,
  icon,
  invalid,
  loading,
  rounded,
  straight,
} from '@@/documentation/elements/form/input'
import { properties } from '@@/documentation/elements/form/input/properties'

definePageMeta({
  title: 'Inputs',
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
    label: 'Input',
    hideLabel: false,
    to: '/form/input',
  },
]

const inputStraight = ref('')
const inputRounded = ref('')
const inputCurved = ref('')
const inputFull = ref('')
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="breadcrumb" separator="dot" />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Input straight -->
        <DocSection id="input-straight" title="Input straight" tag="1.0.0">
          <DocComponent label="Straight input example">
            <template #demo>
              <div class="flex flex-col md:flex-row md:items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormInput
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
              <DocCode language="html" :code="straight" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input rounded -->
        <DocSection id="input-rounded" title="Input rounded" tag="1.0.0">
          <DocComponent label="Rounded input example">
            <template #demo>
              <div class="flex flex-col md:flex-row md:items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormInput
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
              <DocCode language="html" :code="rounded" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input curved -->
        <DocSection id="input-curved" title="Input curved" tag="1.0.0">
          <DocComponent label="Curved input example">
            <template #demo>
              <div class="flex flex-col md:flex-row md:items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormInput
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
              <DocCode language="html" :code="curved" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input full -->
        <DocSection id="input-full" title="Input full" tag="1.0.0">
          <DocComponent label="Full input example">
            <template #demo>
              <div class="flex flex-col md:flex-row md:items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormInput
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
              <DocCode language="html" :code="full" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input icon -->
        <DocSection id="input-icon" title="Input icon" tag="1.0.0">
          <DocComponent label="Icon input example">
            <template #demo>
              <div class="flex flex-col md:flex-row md:items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormInput
                    shape="straight"
                    label="Search"
                    placeholder="Enter search terms..."
                    icon="i-lucide-search"
                  />
                  <BaseFormInput
                    shape="rounded"
                    label="Email Address"
                    placeholder="Your email..."
                    icon="i-lucide-mail"
                  />
                </div>
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormInput
                    shape="curved"
                    label="Username"
                    placeholder="Your username..."
                    icon="i-lucide-user"
                  />
                  <BaseFormInput
                    type="password"
                    shape="full"
                    label="Password"
                    placeholder="Enter password..."
                    icon="i-lucide-lock"
                  />
                </div>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="icon" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input focus -->
        <DocSection id="input-focus" title="Colored focus" tag="1.0.0">
          <DocComponent label="Input primary focus example">
            <template #demo>
              <div class="flex flex-col md:flex-row md:items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormInput
                    v-model="inputRounded"
                    shape="rounded"
                    label="Email Address"
                    placeholder="Enter your email..."
                    icon="i-lucide-mail"
                    color-focus
                  />
                </div>
                <!-- State box -->
                <DocState :state="inputRounded" height="80px" />
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="focus" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input loading -->
        <DocSection id="input-loading" title="Loading state" tag="1.0.0">
          <DocComponent label="Input loading state example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormInput
                    shape="rounded"
                    label="Email Address"
                    placeholder="Enter your email..."
                    icon="i-lucide-mail"
                    loading
                  />
                </div>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="loading" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input disabled -->
        <DocSection id="input-disabled" title="Disabled state" tag="1.0.0">
          <DocComponent label="Input disabled state example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormInput
                    shape="rounded"
                    label="Email Address"
                    placeholder="Enter your email..."
                    icon="i-lucide-mail"
                    disabled
                  />
                </div>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="disabled" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input invalid -->
        <DocSection id="input-invalid" title="Colored invalid" tag="1.0.0">
          <DocComponent label="Input invalid state example">
            <template #demo>
              <div class="flex items-end gap-6">
                <div class="w-full max-w-sm space-y-4">
                  <BaseFormInput
                    shape="rounded"
                    label="Email Address"
                    placeholder="Enter your email..."
                    icon="i-lucide-mail"
                    invalid
                  />
                </div>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="invalid" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Input properties -->
        <DocProps
          id="input-props"
          component="Input"
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
