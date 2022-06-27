export const straight = `
<script setup lang="ts">
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
  ...
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
            :name="member.id"
            shape="straight"
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
        \${{ member.rate }}/hour
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
</template>
`

export const rounded = `
<script setup lang="ts">
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
  ...
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
            :name="member.id"
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
        \${{ member.rate }}/hour
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
</template>
`

export const curved = `
<script setup lang="ts">
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
  ...
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
            :name="member.id"
            shape="curved"
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
        \${{ member.rate }}/hour
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
</template>
`
