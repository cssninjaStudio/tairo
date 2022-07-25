<script setup lang="ts">
import {
  curved,
  rounded,
  straight,
} from '@@/documentation/components/flex-table'
import { team } from '@@/documentation/components/flex-table/data'

import {
  BaseFlexTableCellMeta,
  BaseFlexTableHeadingMeta,
  BaseFlexTableMeta,
  BaseFlexTableRowMeta,
} from 'virtual:vue-component-meta'

definePageMeta({
  title: 'Flex Tables',
  documentation: {
    category: 'Display',
    components: [
      'BaseFlexTable',
      'BaseFlexTableHeading',
      'BaseFlexTableRow',
      'BaseFlexTableCell',
    ],
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
        <!-- Flex table straight -->
        <DocSection title="Straight shape" tag="1.0.0">
          <DocComponent label="Straight table shape example">
            <template #demo>
              <div class="w-full">
                <BaseFlexTable>
                  <template #header>
                    <BaseFlexTableHeading type="shrink">
                      <div class="flex items-center">
                        <BaseFormCheckbox
                          name="table-1-main"
                          shape="straight"
                          class="text-primary-500"
                        />
                      </div>
                    </BaseFlexTableHeading>
                    <BaseFlexTableHeading type="grow">
                      Member
                    </BaseFlexTableHeading>
                    <BaseFlexTableHeading type="stable">
                      Expertise
                    </BaseFlexTableHeading>
                    <BaseFlexTableHeading type="stable">
                      Rate
                    </BaseFlexTableHeading>
                    <BaseFlexTableHeading type="stable">
                      Status
                    </BaseFlexTableHeading>
                    <BaseFlexTableHeading type="stable">
                      Actions
                    </BaseFlexTableHeading>
                  </template>

                  <BaseFlexTableRow
                    v-for="member in team"
                    :key="member.id"
                    shape="straight"
                  >
                    <BaseFlexTableCell type="shrink" data-content="Selection">
                      <div class="flex items-center">
                        <BaseFormCheckbox
                          :name="`member-checkbox-${member.id}`"
                          shape="straight"
                          class="text-primary-500"
                        />
                      </div>
                    </BaseFlexTableCell>
                    <BaseFlexTableCell type="grow" data-content="Member">
                      <div class="flex items-center">
                        <BaseAvatar :src="member.src" />
                        <div class="ml-3 leading-none">
                          <h4 class="font-heading text-sm font-semibold">
                            {{ member.name }}
                          </h4>
                          <p class="font-alt text-xs text-muted-400">
                            {{ member.role }}
                          </p>
                        </div>
                      </div>
                    </BaseFlexTableCell>
                    <BaseFlexTableCell
                      type="stable"
                      data-content="Expertise"
                      light
                    >
                      {{ member.expertise }}
                    </BaseFlexTableCell>
                    <BaseFlexTableCell type="stable" data-content="Rate">
                      ${{ member.rate }}/hour
                    </BaseFlexTableCell>
                    <BaseFlexTableCell type="stable" data-content="Status">
                      <BaseTag
                        v-if="member.status === 'Available'"
                        color="success"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                      <BaseTag
                        v-else-if="member.status === 'New'"
                        color="info"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                      <BaseTag
                        v-else-if="member.status === 'Hired'"
                        color="warning"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                    </BaseFlexTableCell>
                    <BaseFlexTableCell type="stable" data-content="Actions">
                      <BaseButton
                        color="primary"
                        flavor="outline"
                        shape="straight"
                        class="scale-90"
                      >
                        View
                      </BaseButton>
                    </BaseFlexTableCell>
                  </BaseFlexTableRow>
                </BaseFlexTable>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="straight" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Flex table rounded -->
        <DocSection title="Rounded shape" tag="1.0.0">
          <DocComponent label="Rounded table shape example">
            <template #demo>
              <div class="w-full">
                <BaseFlexTable>
                  <template #header>
                    <BaseFlexTableHeading type="shrink">
                      <div class="flex items-center">
                        <BaseFormCheckbox
                          name="table-1-main"
                          shape="rounded"
                          class="text-primary-500"
                        />
                      </div>
                    </BaseFlexTableHeading>
                    <BaseFlexTableHeading type="grow">
                      Member
                    </BaseFlexTableHeading>
                    <BaseFlexTableHeading type="stable">
                      Expertise
                    </BaseFlexTableHeading>
                    <BaseFlexTableHeading type="stable">
                      Rate
                    </BaseFlexTableHeading>
                    <BaseFlexTableHeading type="stable">
                      Status
                    </BaseFlexTableHeading>
                    <BaseFlexTableHeading type="stable">
                      Actions
                    </BaseFlexTableHeading>
                  </template>

                  <BaseFlexTableRow
                    v-for="member in team"
                    :key="member.id"
                    shape="rounded"
                  >
                    <BaseFlexTableCell type="shrink" data-content="Selection">
                      <div class="flex items-center">
                        <BaseFormCheckbox
                          :name="`member-checkbox-${member.id}`"
                          shape="rounded"
                          class="text-primary-500"
                        />
                      </div>
                    </BaseFlexTableCell>
                    <BaseFlexTableCell type="grow" data-content="Member">
                      <div class="flex items-center">
                        <BaseAvatar :src="member.src" />
                        <div class="ml-3 leading-none">
                          <h4 class="font-heading text-sm font-semibold">
                            {{ member.name }}
                          </h4>
                          <p class="font-alt text-xs text-muted-400">
                            {{ member.role }}
                          </p>
                        </div>
                      </div>
                    </BaseFlexTableCell>
                    <BaseFlexTableCell
                      type="stable"
                      data-content="Expertise"
                      light
                    >
                      {{ member.expertise }}
                    </BaseFlexTableCell>
                    <BaseFlexTableCell type="stable" data-content="Rate">
                      ${{ member.rate }}/hour
                    </BaseFlexTableCell>
                    <BaseFlexTableCell type="stable" data-content="Status">
                      <BaseTag
                        v-if="member.status === 'Available'"
                        color="success"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                      <BaseTag
                        v-else-if="member.status === 'New'"
                        color="info"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                      <BaseTag
                        v-else-if="member.status === 'Hired'"
                        color="warning"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                    </BaseFlexTableCell>
                    <BaseFlexTableCell type="stable" data-content="Actions">
                      <BaseButton
                        color="primary"
                        flavor="outline"
                        shape="rounded"
                        class="scale-90"
                      >
                        View
                      </BaseButton>
                    </BaseFlexTableCell>
                  </BaseFlexTableRow>
                </BaseFlexTable>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="rounded" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Flex table curved -->
        <DocSection title="Curved shape" tag="1.0.0">
          <DocComponent label="Curved table shape example">
            <template #demo>
              <div class="w-full">
                <BaseFlexTable>
                  <template #header>
                    <BaseFlexTableHeading type="shrink">
                      <div class="flex items-center">
                        <BaseFormCheckbox
                          name="table-1-main"
                          shape="curved"
                          class="text-primary-500"
                        />
                      </div>
                    </BaseFlexTableHeading>
                    <BaseFlexTableHeading type="grow">
                      Member
                    </BaseFlexTableHeading>
                    <BaseFlexTableHeading type="stable">
                      Expertise
                    </BaseFlexTableHeading>
                    <BaseFlexTableHeading type="stable">
                      Rate
                    </BaseFlexTableHeading>
                    <BaseFlexTableHeading type="stable">
                      Status
                    </BaseFlexTableHeading>
                    <BaseFlexTableHeading type="stable">
                      Actions
                    </BaseFlexTableHeading>
                  </template>

                  <BaseFlexTableRow
                    v-for="member in team"
                    :key="member.id"
                    shape="curved"
                  >
                    <BaseFlexTableCell type="shrink" data-content="Selection">
                      <div class="flex items-center">
                        <BaseFormCheckbox
                          :name="`member-checkbox-${member.id}`"
                          shape="curved"
                          class="text-primary-500"
                        />
                      </div>
                    </BaseFlexTableCell>
                    <BaseFlexTableCell type="grow" data-content="Member">
                      <div class="flex items-center">
                        <BaseAvatar :src="member.src" />
                        <div class="ml-3 leading-none">
                          <h4 class="font-heading text-sm font-semibold">
                            {{ member.name }}
                          </h4>
                          <p class="font-alt text-xs text-muted-400">
                            {{ member.role }}
                          </p>
                        </div>
                      </div>
                    </BaseFlexTableCell>
                    <BaseFlexTableCell
                      type="stable"
                      data-content="Expertise"
                      light
                    >
                      {{ member.expertise }}
                    </BaseFlexTableCell>
                    <BaseFlexTableCell type="stable" data-content="Rate">
                      ${{ member.rate }}/hour
                    </BaseFlexTableCell>
                    <BaseFlexTableCell type="stable" data-content="Status">
                      <BaseTag
                        v-if="member.status === 'Available'"
                        color="success"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                      <BaseTag
                        v-else-if="member.status === 'New'"
                        color="info"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                      <BaseTag
                        v-else-if="member.status === 'Hired'"
                        color="warning"
                        flavor="pastel"
                        shape="full"
                        class="font-medium"
                      >
                        {{ member.status }}
                      </BaseTag>
                    </BaseFlexTableCell>
                    <BaseFlexTableCell type="stable" data-content="Actions">
                      <BaseButton
                        color="primary"
                        flavor="outline"
                        shape="curved"
                        class="scale-90"
                      >
                        View
                      </BaseButton>
                    </BaseFlexTableCell>
                  </BaseFlexTableRow>
                </BaseFlexTable>
              </div>
            </template>
            <template #code>
              <DocCode language="html" :code="curved" />
            </template>
          </DocComponent>
        </DocSection>

        <!-- Flex table props -->
        <DocComponentMeta :meta="BaseFlexTableMeta" />
        <DocComponentMeta :meta="BaseFlexTableHeadingMeta" />
        <DocComponentMeta :meta="BaseFlexTableRowMeta" />
        <DocComponentMeta :meta="BaseFlexTableCellMeta" />
      </template>
      <!-- Toc -->
      <template #toc>
        <DocToc />
      </template>
    </DocLayout>
  </div>
</template>
