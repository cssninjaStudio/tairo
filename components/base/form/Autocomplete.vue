<script setup lang="ts">
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  TransitionRoot,
} from '@headlessui/vue'

const people = [
  {
    id: 1,
    name: 'Clarissa Perez',
    role: 'Sales Manager',
    avatar: '/img/avatars/19.svg',
  },
  {
    id: 2,
    name: 'Aaaron Splatter',
    role: 'Project Manager',
    avatar: '/img/avatars/16.svg',
  },
  {
    id: 3,
    name: 'Mike Miller',
    role: 'UI/UX Designer',
    avatar: '/img/avatars/3.svg',
  },
  {
    id: 4,
    name: 'Benedict Kessler',
    role: 'Mobile Developer',
    avatar: '/img/avatars/22.svg',
  },
  {
    id: 5,
    name: 'Maya Rosselini',
    role: 'Product Manager',
    avatar: '/img/avatars/2.svg',
  },
]
const selectedPerson = ref('')
const query = ref('')

const filteredPeople = computed(() =>
  query.value === ''
    ? people
    : people.filter((person) => {
        return person.name.toLowerCase().includes(query.value.toLowerCase())
      })
)
</script>

<template>
  <Combobox v-model="selectedPerson" class="relative w-full" as="div">
    <ComboboxLabel class="font-text text-sm text-gray-400">
      Assignee:
    </ComboboxLabel>
    <div class="group relative">
      <ComboboxInput
        class="peer pl-9 pr-4 h-10 text-sm leading-5 font-text w-full bg-white text-gray-600 border border-slate-300 focus:border-slate-300 focus:shadow-lg focus:shadow-gray-300/50 dark:focus:shadow-gray-800/50 placeholder:text-gray-300 dark:placeholder:text-gray-500 dark:bg-slate-900/75 dark:text-gray-200 dark:border-slate-700 dark:focus:border-slate-700 focus:ring-0 outline-transparent focus:outline-dashed focus:outline-gray-300 dark:focus:outline-gray-600 focus:outline-offset-2 disabled:opacity-75 disabled:cursor-not-allowed transition-all duration-300"
        :display-value="(person:any) => person.name"
        placeholder="Search..."
        @change="query = $event.target.value"
      />
      <div
        class="absolute top-0 left-0 h-10 w-10 flex justify-center items-center text-gray-400 group-focus-within:text-primary-500 transition-colors duration-300"
      >
        <i class="i-lucide-search w-5 h-5"></i>
      </div>
    </div>

    <TransitionRoot
      leave="transition ease-in duration-100"
      leave-from="opacity-100"
      leave-to="opacity-0"
      @after-leave="query = ''"
    >
      <ComboboxOptions
        as="div"
        class="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700 py-1 text-base shadow-lg outline-none sm:text-sm slimscroll"
      >
        <!-- Placeholder -->
        <div
          v-if="filteredPeople.length === 0 && query !== ''"
          class="relative cursor-default select-none py-2 px-4 text-gray-700"
        >
          Nothing found.
        </div>
        <ComboboxOption
          v-for="person in filteredPeople"
          :key="person.id"
          class="p-2"
          as="div"
          :value="person"
        >
          <div
            class="flex items-center p-2 cursor-pointer rounded-lg hover:bg-slate-100 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            <div
              class="inline-flex justify-center items-center relative w-9 h-9 rounded-full"
            >
              <img
                :src="person.avatar"
                class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                alt="Avatar image"
              />
            </div>
            <div class="ml-3">
              <h6
                class="font-main font-semibold text-sm text-slate-800 dark:text-white"
              >
                {{ person.name }}
              </h6>
              <p class="font-text text-xs text-slate-400">
                {{ person.role }}
              </p>
            </div>
          </div>
        </ComboboxOption>
      </ComboboxOptions>
    </TransitionRoot>
  </Combobox>
</template>
