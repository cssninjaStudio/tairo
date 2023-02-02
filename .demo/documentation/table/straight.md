```vue
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
  //...
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
            name="table-1-main"
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
            :name="member.id"
            shape="straight"
            class="text-primary-500"
          />
        </div>
      </BaseTableCell>
      <BaseTableCell>
        {{ member.name }}
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
```
