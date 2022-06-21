<script setup>
import { ref } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
]
const selectedPerson = ref(people[0])
</script>

<template>
  <div class="relative w-full">
    <Listbox v-slot="{ open }" v-model="selectedPerson">
      <ListboxLabel class="font-text text-sm text-gray-400">
        Assignee:
      </ListboxLabel>
      <div class="relative">
        <ListboxButton
          class="peer px-4 h-10 text-sm leading-5 font-text w-full bg-white text-gray-600 border border-slate-300 focus:border-slate-300 focus:shadow-lg focus:shadow-gray-300/50 dark:focus:shadow-gray-800/50 placeholder:text-gray-300 dark:placeholder:text-gray-500 dark:bg-slate-900/75 dark:text-gray-200 dark:border-slate-700 dark:focus:border-slate-700 focus:ring-0 outline-transparent focus:outline-dashed focus:outline-gray-300 dark:focus:outline-gray-600 focus:outline-offset-2 disabled:opacity-75 disabled:cursor-not-allowed transition-all duration-300"
        >
          <span class="block text-left truncate">
            {{ selectedPerson.name }}
          </span>
          <span
            class="w-10 pointer-events-none absolute inset-y-0 right-0 border-l border-slate-300 dark:border-slate-700 flex items-center justify-center"
          >
            <i
              class="i-lucide-chevron-down h-5 w-5 text-gray-400 transition-transform duration-300"
              :class="open && 'rotate-180'"
            ></i>
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto border border-gray-200 rounded-md bg-white p-2 text-base shadow-lg focus:ring-1 focus:ring-primary-500/50 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-for="person in people"
              v-slot="{ active, selected }"
              :key="person.name"
              :value="person"
              as="template"
            >
              <li
                class="relative cursor-default select-none py-2 pl-10 pr-4 rounded-md"
                :class="
                  active ? 'bg-primary-100 text-primary-900' : 'text-gray-900'
                "
              >
                <span
                  class="block truncate"
                  :class="selected ? 'font-medium' : 'font-normal'"
                >
                  {{ person.name }}
                </span>
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600"
                >
                  <i class="i-lucide-check h-5 w-5"></i>
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>
