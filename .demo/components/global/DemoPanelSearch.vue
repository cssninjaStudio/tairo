<script setup lang="ts">
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  TransitionRoot,
} from '@headlessui/vue'

const { close } = usePanels()

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
      }),
)
</script>

<template>
  <div
    class="border border-muted-200 bg-white dark:border-muted-700 dark:bg-muted-800"
  >
    <div class="flex h-16 w-full items-center justify-between px-10">
      <h2
        class="font-heading text-lg font-semibold text-muted-700 dark:text-white"
      >
        Search
      </h2>
      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-full text-muted-400 transition-colors duration-300 hover:bg-muted-100 hover:text-muted-600 dark:hover:bg-muted-700 dark:hover:text-white"
        @click="close"
      >
        <Icon name="feather:chevron-left" class="h-6 w-6" />
      </button>
    </div>

    <div class="relative h-[calc(100%_-_64px)] w-full px-10">
      <Combobox v-model="selectedPerson" class="relative z-10 mt-5" as="div">
        <div class="group relative">
          <ComboboxInput
            class="h-12 w-full rounded-lg border border-muted-300 bg-white py-3 pl-10 pr-4 font-sans text-sm leading-5 text-muted-600 !outline-none transition duration-300 focus:border-primary-500 focus:shadow-lg focus:shadow-muted-300/50 dark:border-muted-700 dark:bg-muted-800 dark:text-muted-200 dark:placeholder:text-muted-600 dark:focus:border-muted-600 dark:focus:shadow-muted-800/50"
            :display-value="(person:any) => person.name"
            placeholder="Search..."
            @change="query = $event.target.value"
          />
          <div
            class="absolute top-0 left-0 flex h-12 w-12 items-center justify-center text-muted-400 transition-colors duration-300 group-focus-within:text-primary-500"
          >
            <Icon name="feather:search" class="h-5 w-5" />
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
            class="slimscroll absolute mt-1 max-h-60 w-full divide-y divide-muted-100 overflow-auto rounded-lg border border-muted-200 bg-white py-1 text-base shadow-lg outline-none dark:divide-muted-700 dark:border-muted-700 dark:bg-muted-800 sm:text-sm"
          >
            <!-- Placeholder -->
            <div
              v-if="filteredPeople.length === 0 && query !== ''"
              class="relative cursor-default select-none py-2 px-4 text-muted-700"
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
                class="flex cursor-pointer items-center rounded-lg p-2 transition-colors duration-300 hover:bg-muted-100 dark:hover:bg-muted-700"
              >
                <div
                  class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"
                >
                  <img
                    :src="person.avatar"
                    class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <h6
                    class="font-heading text-sm font-semibold text-muted-800 dark:text-white"
                  >
                    {{ person.name }}
                  </h6>
                  <p class="font-sans text-xs text-muted-400">
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
          class="mb-4 font-alt text-sm font-semibold uppercase text-muted-400"
        >
          People
        </h4>
        <ul class="space-y-4">
          <!-- Item -->
          <li>
            <NuxtLink to="#" class="flex items-center">
              <div
                class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"
              >
                <img
                  src="/img/avatars/3.svg"
                  class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <h6
                  class="font-heading text-sm font-semibold text-muted-800 dark:text-white"
                >
                  Mike Miller
                </h6>
                <p class="font-sans text-xs text-muted-400">
                  Frontend Developer
                </p>
              </div>
            </NuxtLink>
          </li>
          <!-- Item -->
          <li>
            <NuxtLink to="#" class="flex items-center">
              <div
                class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"
              >
                <img
                  src="/img/avatars/18.svg"
                  class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <h6
                  class="font-heading text-sm font-semibold text-muted-800 dark:text-white"
                >
                  John Sabierski
                </h6>
                <p class="font-sans text-xs text-muted-400">
                  Backend Developer
                </p>
              </div>
            </NuxtLink>
          </li>
          <!-- Item -->
          <li>
            <NuxtLink to="#" class="flex items-center">
              <div
                class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"
              >
                <img
                  src="/img/avatars/11.svg"
                  class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <h6
                  class="font-heading text-sm font-semibold text-muted-800 dark:text-white"
                >
                  Ronald Cardine
                </h6>
                <p class="font-sans text-xs text-muted-400">
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
          class="mb-4 font-alt text-sm font-semibold uppercase text-muted-400"
        >
          Recent
        </h4>
        <ul class="space-y-4">
          <!-- Item -->
          <li>
            <NuxtLink to="#" class="flex items-center">
              <div
                class="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500 dark:text-muted-50"
              >
                <Icon name="feather:chrome" class="" />
              </div>
              <div class="ml-3">
                <h6
                  class="font-heading text-sm font-semibold text-muted-800 dark:text-white"
                >
                  Browser Support
                </h6>
                <p class="font-sans text-xs text-muted-400">Blog article</p>
              </div>
            </NuxtLink>
          </li>
          <!-- Item -->
          <li>
            <NuxtLink to="#" class="flex items-center">
              <div
                class="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-warning-100 text-warning-600 dark:bg-warning-500 dark:text-muted-50"
              >
                <Icon name="feather:tv" class="" />
              </div>
              <div class="ml-3">
                <h6
                  class="font-heading text-sm font-semibold text-muted-800 dark:text-white"
                >
                  Twitch new API
                </h6>
                <p class="font-sans text-xs text-muted-400">Blog article</p>
              </div>
            </NuxtLink>
          </li>
          <!-- Item -->
          <li>
            <NuxtLink to="#" class="flex items-center">
              <div
                class="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-500 dark:text-muted-50"
              >
                <Icon name="feather:twitter" class="" />
              </div>
              <div class="ml-3">
                <h6
                  class="font-heading text-sm font-semibold text-muted-800 dark:text-white"
                >
                  Social integrations
                </h6>
                <p class="font-sans text-xs text-muted-400">Blog article</p>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
