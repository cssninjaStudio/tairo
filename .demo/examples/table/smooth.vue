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
  <TairoTable rounded="md">
    <template #header>
      <TairoTableHeading uppercase class="p-4">
        <div class="flex items-center">
          <BaseCheckbox
            rounded="md"
            color="primary"
          />
        </div>
      </TairoTableHeading>

      <TairoTableHeading uppercase>
        Collaborator
      </TairoTableHeading>

      <TairoTableHeading uppercase>
        Expertise
      </TairoTableHeading>

      <TairoTableHeading uppercase>
        Rate
      </TairoTableHeading>

      <TairoTableHeading uppercase>
        Status
      </TairoTableHeading>
    </template>

    <TairoTableRow v-for="member in team" :key="member.id">
      <TairoTableCell class="p-4">
        <div class="flex items-center">
          <BaseCheckbox
            :value="`table-2-${member.id}`"
            rounded="md"
            color="primary"
          />
        </div>
      </TairoTableCell>

      <TairoTableCell>
        {{ member.name }}
      </TairoTableCell>

      <TairoTableCell light>
        {{ member.expertise }}
      </TairoTableCell>

      <TairoTableCell>${{ member.rate }}/hour</TairoTableCell>

      <TairoTableCell>
        <BaseTag
          rounded="full"
          class="font-medium"
        >
          {{ member.status }}
        </BaseTag>
      </TairoTableCell>
    </TairoTableRow>
  </TairoTable>
</template>
