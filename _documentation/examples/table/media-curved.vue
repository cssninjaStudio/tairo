<template>
  <TairoTable shape="curved">
    <template #header>
      <TairoTableHeading uppercase class="p-4">
        <div class="flex items-center">
          <BaseCheckbox v-model="selectAll" shape="curved" class="text-primary-500" />
        </div>
      </TairoTableHeading>

      <TairoTableHeading uppercase>Collaborator</TairoTableHeading>

      <TairoTableHeading uppercase>Expertise</TairoTableHeading>

      <TairoTableHeading uppercase>Rate</TairoTableHeading>

      <TairoTableHeading uppercase>Status</TairoTableHeading>

      <TairoTableHeading uppercase class="p-4">
        <span class="sr-only">View</span>
      </TairoTableHeading>
    </template>

    <TairoTableRow v-for="member in team" :key="member.id">
      <TairoTableCell class="p-4">
        <div class="flex items-center">
          <BaseCheckbox
            v-model="selected"
            :value="`table-5-${member.id}`"
            shape="curved"
            class="text-primary-500"
          />
        </div>
      </TairoTableCell>

      <TairoTableCell>
        <div class="flex items-center">
          <BaseAvatar :src="member.src" size="sm" />

          <div class="ms-3 leading-none">
            <h4 class="font-sans text-sm font-medium">
              {{ member.name }}
            </h4>

            <p class="text-muted-400 font-sans text-xs font-normal">
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
      </TairoTableCell>

      <TairoTableCell>
        <a
          href="#"
          class="text-primary-500 dark:text-primary-400 underline-offset-4 transition-opacity duration-300 hover:underline hover:opacity-75"
        >
          View
        </a>
      </TairoTableCell>
    </TairoTableRow>
  </TairoTable>
</template>

<script setup lang="ts">
const selected = ref([])
const selectAll = ref(false)

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
