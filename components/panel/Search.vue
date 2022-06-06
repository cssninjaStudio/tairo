<script setup lang="ts">
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/vue'

const props = defineProps<{
  active: boolean
}>()

const emit = defineEmits(['close'])

const people = [
  {
    id: 1,
    name: 'Clarissa Perez',
    role: 'Sales Manager',
    avatar: 'https://media.cssninja.io/shuriken/avatars/19.svg',
  },
  {
    id: 2,
    name: 'Aaaron Splatter',
    role: 'Project Manager',
    avatar: 'https://media.cssninja.io/shuriken/avatars/16.svg',
  },
  {
    id: 3,
    name: 'Mike Miller',
    role: 'UI/UX Designer',
    avatar: 'https://media.cssninja.io/shuriken/avatars/3.svg',
  },
  {
    id: 4,
    name: 'Benedict Kessler',
    role: 'Mobile Developer',
    avatar: 'https://media.cssninja.io/shuriken/avatars/22.svg',
  },
  {
    id: 5,
    name: 'Maya Rosselini',
    role: 'Product Manager',
    avatar: 'https://media.cssninja.io/shuriken/avatars/2.svg',
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
  <div>
    <!-- Search bar -->
    <div
      class="fixed top-0 left-0 h-full w-96 bg-white border border-gray-200 transition-all duration-300 z-[100]"
      :class="props.active ? '' : '-translate-x-full'"
    >
      <div class="flex items-center justify-between h-16 w-full px-10">
        <h2 class="font-main text-lg font-semibold text-gray-700">Search</h2>
        <button
          class="flex items-center justify-center h-10 w-10 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors duration-300"
          @click="emit('close')"
        >
          <i class="i-feather-chevron-left w-6 h-6"></i>
        </button>
      </div>

      <div class="relative h-[calc(100%_-_64px)] w-full px-10">
        <Combobox v-model="selectedPerson" class="relative mt-5" as="div">
          <div class="group relative">
            <ComboboxInput
              class="pl-10 pr-4 py-3 h-12 text-sm leading-5 font-text w-full bg-white text-gray-600 border border-gray-300 focus:border-primary-500 focus:shadow-lg focus:shadow-gray-300/50 dark:placeholder:text-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:focus:border-gray-600 !outline-none transition duration-300 rounded-lg"
              :display-value="(person) => person.name"
              placeholder="Search..."
              @change="query = $event.target.value"
            />
            <div
              class="absolute top-0 left-0 h-12 w-12 flex justify-center items-center text-gray-400 group-focus-within:text-primary-500 transition-colors duration-300"
            >
              <i class="i-feather-search w-5 h-5"></i>
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
              class="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white border border-gray-200 divide-y divide-gray-100 py-1 text-base shadow-lg outline-none sm:text-sm slimscroll"
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
                class="px-2"
                as="div"
                :value="person"
              >
                <div
                  class="flex items-center p-2 cursor-pointer rounded-lg hover:bg-slate-100"
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
                    <h6 class="font-main font-semibold text-sm text-slate-800">
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

        <!-- Suggestions -->
        <div class="py-6">
          <h4
            class="font-sub font-semibold uppercase text-sm text-slate-400 mb-4"
          >
            People
          </h4>
          <ul class="space-y-4">
            <!-- Item -->
            <li>
              <NuxtLink to="/" class="flex items-center">
                <div
                  class="inline-flex justify-center items-center relative w-9 h-9 rounded-full"
                >
                  <img
                    src="https://media.cssninja.io/shuriken/avatars/3.svg"
                    class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                    alt="Avatar image"
                  />
                </div>
                <div class="ml-3">
                  <h6 class="font-main font-semibold text-sm text-slate-800">
                    Mike Miller
                  </h6>
                  <p class="font-text text-xs text-slate-400">
                    Frontend Developer
                  </p>
                </div>
              </NuxtLink>
            </li>
            <!-- Item -->
            <li>
              <NuxtLink to="/" class="flex items-center">
                <div
                  class="inline-flex justify-center items-center relative w-9 h-9 rounded-full"
                >
                  <img
                    src="https://media.cssninja.io/shuriken/avatars/18.svg"
                    class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                    alt="Avatar image"
                  />
                </div>
                <div class="ml-3">
                  <h6 class="font-main font-semibold text-sm text-slate-800">
                    John Sabierski
                  </h6>
                  <p class="font-text text-xs text-slate-400">
                    Backend Developer
                  </p>
                </div>
              </NuxtLink>
            </li>
            <!-- Item -->
            <li>
              <NuxtLink to="/" class="flex items-center">
                <div
                  class="inline-flex justify-center items-center relative w-9 h-9 rounded-full"
                >
                  <img
                    src="https://media.cssninja.io/shuriken/avatars/11.svg"
                    class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                    alt="Avatar image"
                  />
                </div>
                <div class="ml-3">
                  <h6 class="font-main font-semibold text-sm text-slate-800">
                    Ronald Cardine
                  </h6>
                  <p class="font-text text-xs text-slate-400">
                    Frontend Developer
                  </p>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Suggestions -->
        <div class="py-6">
          <h4
            class="font-sub font-semibold uppercase text-sm text-slate-400 mb-4"
          >
            Recent
          </h4>
          <ul class="space-y-4">
            <!-- Item -->
            <li>
              <NuxtLink to="/" class="flex items-center">
                <div
                  class="relative inline-flex justify-center items-center w-10 h-10 bg-emerald-100 text-emerald-600 dark:bg-emerald-500 dark:text-gray-50 rounded-full"
                >
                  <i class="i-feather-chrome"></i>
                </div>
                <div class="ml-3">
                  <h6 class="font-main font-semibold text-sm text-slate-800">
                    Browser Support
                  </h6>
                  <p class="font-text text-xs text-slate-400">Blog article</p>
                </div>
              </NuxtLink>
            </li>
            <!-- Item -->
            <li>
              <NuxtLink to="/" class="flex items-center">
                <div
                  class="relative inline-flex justify-center items-center w-10 h-10 bg-amber-100 text-amber-600 dark:bg-amber-500 dark:text-gray-50 rounded-full"
                >
                  <i class="i-feather-tv"></i>
                </div>
                <div class="ml-3">
                  <h6 class="font-main font-semibold text-sm text-slate-800">
                    Twitch new API
                  </h6>
                  <p class="font-text text-xs text-slate-400">Blog article</p>
                </div>
              </NuxtLink>
            </li>
            <!-- Item -->
            <li>
              <NuxtLink to="/" class="flex items-center">
                <div
                  class="relative inline-flex justify-center items-center w-10 h-10 bg-primary-100 text-primary-600 dark:bg-primary-500 dark:text-gray-50 rounded-full"
                >
                  <i class="i-feather-twitter"></i>
                </div>
                <div class="ml-3">
                  <h6 class="font-main font-semibold text-sm text-slate-800">
                    Social integrations
                  </h6>
                  <p class="font-text text-xs text-slate-400">Blog article</p>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Search overlay -->
    <div
      class="fixed top-0 left-0 w-full h-full bg-slate-800/60 transition-opacity duration-300 z-[99] cursor-pointer"
      :class="
        props.active
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      "
      @click="emit('close')"
    ></div>
  </div>
</template>
