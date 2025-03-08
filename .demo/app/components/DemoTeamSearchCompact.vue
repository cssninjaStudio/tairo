<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  }>(),
  {
    rounded: 'sm',
  },
)

const members = shallowRef([
  {
    id: 0,
    firstName: 'Hermann',
    lastName: 'Mayer',
    image: '/img/avatars/16.svg',
    text: 'HM',
    role: 'Project manager',
  },
  {
    id: 1,
    firstName: 'Sara',
    lastName: 'Connor',
    image: undefined,
    text: 'SC',
    role: 'Frontend developer',
  },
  {
    id: 2,
    firstName: 'Kendra',
    lastName: 'Wilson',
    image: '/img/avatars/10.svg',
    text: 'KW',
    role: 'Sales manager',
  },
  {
    id: 3,
    firstName: 'John',
    lastName: 'Baxter',
    image: '/img/avatars/11.svg',
    text: 'JB',
    role: 'Team supervisor',
  },
  {
    id: 10,
    firstName: 'Amelia',
    lastName: 'Smith',
    image: '/img/avatars/12.svg',
    text: 'AS',
    role: 'HR manager',
  },
])

const filter = ref('')

const filteredMembers = computed(() => {
  if (!filter.value) {
    return members.value
  }
  const filterRe = new RegExp(filter.value, 'i')
  return members.value.filter((item) => {
    return [item.firstName, item.lastName, item.role].some(item =>
      item.match(filterRe),
    )
  })
})
</script>

<template>
  <div class="mb-2 space-y-1">
    <BaseField class="mb-4">
      <TairoInput
        v-model="filter"
        placeholder="Search team members..."
        :rounded="props.rounded"
        icon="lucide:search"
      />
    </BaseField>
    <div v-if="filteredMembers.length === 0">
      <div class="flex flex-col items-center py-10 text-center">
        <Icon name="solar:user-rounded-linear" class="text-primary-500 size-10" />
        <BaseHeading
          as="h4"
          size="md"
          weight="medium"
          lead="tight"
        >
          <span>No matching results</span>
        </BaseHeading>
        <BaseParagraph size="xs" class="text-muted-600 dark:text-muted-400 mx-auto max-w-[240px]">
          <span>
            Looks like we couldn't find any matchig results. Try different
            search terms.
          </span>
        </BaseParagraph>
      </div>
    </div>
    <div v-else>
      <div
        v-for="member in filteredMembers"
        :key="member.id"
        class="hover:bg-muted-100 focus-within:bg-muted-100 dark:hover:bg-muted-700/70 dark:focus-within:bg-muted-700/70 group flex items-center gap-3 p-2"
        :class="[
          props.rounded === 'sm' ? 'rounded-md' : '',
          props.rounded === 'md' ? 'rounded-lg' : '',
          props.rounded === 'lg' ? 'rounded-xl' : '',
          props.rounded === 'full' ? 'rounded-full' : '',
        ]"
      >
        <BaseAvatar
          :src="member.image"
          :text="member.text"
          size="xs"
          class="bg-primary-100 dark:bg-primary-500/20 text-primary-500 ms-1 shrink-0"
        />
        <div>
          <BaseHeading
            as="h4"
            size="xs"
            weight="medium"
            lead="tight"
            class="text-muted-900 dark:text-white"
          >
            <span>
              {{ member.firstName }} {{ member.lastName.slice(0, 1) }}.
            </span>
          </BaseHeading>
          <BaseParagraph size="xs">
            <span class="text-muted-600 dark:text-muted-400">
              {{ member.role }}
            </span>
          </BaseParagraph>
        </div>
        <div
          class="ms-auto flex -translate-x-1 items-center opacity-0 transition-all duration-300 group-focus-within:translate-x-0 group-focus-within:opacity-100 group-hover:translate-x-0 group-hover:opacity-100"
        >
          <BaseButton
            to="#"
            :rounded="props.rounded"
            variant="default"
            size="icon-md"
            class="scale-75"
          >
            <Icon name="lucide:arrow-right" class="size-4" />
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
