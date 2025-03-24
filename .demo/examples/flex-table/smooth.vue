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
  <TairoFlexTable>
    <template #header>
      <TairoFlexTableHeading type="shrink">
        <div class="flex items-center">
          <BaseCheckbox
            rounded="md"
            color="primary"
          />
        </div>
      </TairoFlexTableHeading>

      <TairoFlexTableHeading type="grow">
        Member
      </TairoFlexTableHeading>

      <TairoFlexTableHeading type="stable">
        Expertise
      </TairoFlexTableHeading>

      <TairoFlexTableHeading type="stable">
        Rate
      </TairoFlexTableHeading>

      <TairoFlexTableHeading type="stable">
        Status
      </TairoFlexTableHeading>
    </template>

    <TairoFlexTableRow
      v-for="member in team"
      :key="member.id"
      rounded="md"
    >
      <TairoFlexTableCell type="shrink" data-content="Selection">
        <div class="flex items-center">
          <BaseCheckbox
            :value="`checkbox-${member.id}`"
            rounded="md"
            color="primary"
          />
        </div>
      </TairoFlexTableCell>

      <TairoFlexTableCell type="grow" data-content="Member">
        <div class="flex items-center gap-2">
          <BaseAvatar :src="member.src" size="xs" />

          <div class="leading-none">
            <h4 class="font-sans text-sm font-medium leading-tight">
              {{ member.name }}
            </h4>

            <p class="text-muted-600 dark:text-muted-400 font-sans text-xs font-normal">
              {{ member.role }}
            </p>
          </div>
        </div>
      </TairoFlexTableCell>

      <TairoFlexTableCell
        type="stable"
        data-content="Expertise"
        light
      >
        {{ member.expertise }}
      </TairoFlexTableCell>

      <TairoFlexTableCell type="stable" data-content="Rate">
        <span class="font-medium">${{ member.rate }}/hour</span>
      </TairoFlexTableCell>

      <TairoFlexTableCell type="stable" data-content="Status">
        <BaseTag
          rounded="full"
          class="font-medium"
        >
          {{ member.status }}
        </BaseTag>
      </TairoFlexTableCell>
    </TairoFlexTableRow>
  </TairoFlexTable>
</template>
