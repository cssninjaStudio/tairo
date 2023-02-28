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
  <BaseTable shape="straight">
    <template #header>
      <BaseTableHeading uppercase class="p-4">
        <div class="flex items-center">
          <BaseCheckbox
            name="table-3-main"
            shape="straight"
            class="text-primary-500"
          />
        </div>
      </BaseTableHeading>
      <BaseTableHeading uppercase>
        Collaborator
      </BaseTableHeading>
      <BaseTableHeading uppercase>
        Expertise
      </BaseTableHeading>
      <BaseTableHeading uppercase>
        Rate
      </BaseTableHeading>
      <BaseTableHeading uppercase>
        Status
      </BaseTableHeading>
      <BaseTableHeading uppercase class="p-4">
        <span class="sr-only">View</span>
      </BaseTableHeading>
    </template>

    <BaseTableRow
      v-for="member in team"
      :key="member.id"
    >
      <BaseTableCell class="p-4">
        <div class="flex items-center">
          <BaseCheckbox
            :name="`table-3-${member.id}`"
            shape="straight"
            class="text-primary-500"
          />
        </div>
      </BaseTableCell>
      <BaseTableCell>
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
      </BaseTableCell>
      <BaseTableCell light>
        {{ member.expertise }}
      </BaseTableCell>
      <BaseTableCell>
        \${{ member.rate }}/hour
      </BaseTableCell>
      <BaseTableCell>
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
      </BaseTableCell>
      <BaseTableCell>
        <a
          href="#"
          class="text-violet-500 dark:text-violet-400 hover:opacity-75 transition-opacity duration-300"
        >
          View
        </a>
      </BaseTableCell>
    </BaseTableRow>
  </BaseTable>
</template>
