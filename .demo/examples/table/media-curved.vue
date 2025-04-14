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
  <TairoTable rounded="lg">
    <template #header>
      <TairoTableHeading uppercase class="p-4">
        <div class="flex items-center">
          <BaseCheckbox
            rounded="lg"
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
            :value="`table-5-${member.id}`"
            rounded="lg"
            color="primary"
          />
        </div>
      </TairoTableCell>

      <TairoTableCell>
        <div class="flex gap-2 items-center">
          <BaseAvatar :src="member.src" size="xs" />

          <div class="leading-none">
            <p class="font-sans text-sm font-medium leading-tight">
              {{ member.name }}
            </p>

            <p class="text-muted-600 dark:text-muted-400 font-sans text-xs font-normal">
              {{ member.role }}
            </p>
          </div>
        </div>
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
