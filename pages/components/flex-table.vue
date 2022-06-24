<script setup lang="ts">
import FlexTableHeading from '~~/components/base/FlexTableHeading.vue'
// import { toc } from '@@/documentation/components/flex-table/toc'
// import { } from '@@/documentation/components/flex-table'

definePageMeta({
  title: 'Flex Tables',
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
    label: 'Components',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/components',
  },
  {
    label: 'Flext table',
    hideLabel: false,
    icon: '',
    hideIcon: true,
    to: '/components/flex-table',
  },
]

const team = [
  {
    id: 0,
    picture: '/img/avatars/22.svg',
    name: 'Anna Vrinkof',
    role: 'UI/UX designer',
    expertise: 'UX Design',
    rate: 49,
    status: 'Available',
  },
  {
    id: 1,
    picture: '/img/avatars/3.svg',
    name: 'John Cambell',
    role: 'Sales manager',
    expertise: 'Management',
    rate: 74,
    status: 'Hired',
  },
  {
    id: 2,
    picture: '/img/avatars/9.svg',
    name: 'Beth Delanoe',
    role: 'Product designer',
    expertise: 'Product',
    rate: 43,
    status: 'Available',
  },
  {
    id: 3,
    picture: '/img/avatars/14.svg',
    name: 'Andrew Higgs',
    role: 'Project manager',
    expertise: 'Project',
    rate: 69,
    status: 'New',
  },
]
</script>

<template>
  <div>
    <!-- BreadCrumb -->
    <BaseBreadcrumb :items="breadcrumb" separator="dot" />

    <!-- Documentation Layout -->
    <DocLayout>
      <!-- content -->
      <template #content>
        <!-- Table -->
        <DocSection id="table-base" title="Table" tag="1.0.0">
          <DocComponent label="Left aligned example">
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

                  <BaseFlexTableRow v-for="member in team" :key="member.id">
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
                        <BaseAvatar :picture="member.picture" size="sm" />
                        <div class="ml-3 leading-none">
                          <h4 class="font-main text-sm font-semibold">
                            {{ member.name }}
                          </h4>
                          <p class="font-sub text-xs text-slate-400">
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
            <template #code></template>
          </DocComponent>
        </DocSection>
      </template>
      <!-- Toc -->
      <template #toc></template>
    </DocLayout>
  </div>
</template>
