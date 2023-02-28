<script setup lang="ts">
const team = [
  {
    id: 0,
    src: '/img/avatars/22.svg',
    name: 'Anna Vrinkof',
    role: 'UI/UX designer',
    expertise: 'UX Design',
    rate: 49,
    status: 'Available',
  },
  {
    id: 1,
    src: '/img/avatars/3.svg',
    name: 'John Cambell',
    role: 'Sales manager',
    expertise: 'Management',
    rate: 74,
    status: 'Hired',
  },
  {
    id: 2,
    src: '/img/avatars/9.svg',
    name: 'Beth Delanoe',
    role: 'Product designer',
    expertise: 'Product',
    rate: 43,
    status: 'Available',
  },
  {
    id: 3,
    src: '/img/avatars/14.svg',
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
          <BaseCheckbox
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
      <BaseFlexTableCell
        type="shrink"
        data-content="Selection"
      >
        <div class="flex items-center">
          <BaseCheckbox
            :name="`checkbox-${member.id}`"
            shape="rounded"
            class="text-primary-500"
          />
        </div>
      </BaseFlexTableCell>
      <BaseFlexTableCell
        type="grow"
        data-content="Member"
      >
        <div class="flex items-center">
          <BaseAvatar
            :src="member.src"
            size="sm"
          />
          <div class="ml-3 leading-none">
            <h4
              class="font-heading text-sm font-semibold"
            >
              {{ member.name }}
            </h4>
            <p
              class="font-alt text-xs text-muted-400"
            >
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
      <BaseFlexTableCell
        type="stable"
        data-content="Rate"
      >
        ${{ member.rate }}/hour
      </BaseFlexTableCell>
      <BaseFlexTableCell
        type="stable"
        data-content="Status"
      >
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
      <BaseFlexTableCell
        type="stable"
        data-content="Actions"
      >
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
</template>
