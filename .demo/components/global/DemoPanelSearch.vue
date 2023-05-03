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
    class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 border bg-white"
  >
    <div class="flex h-16 w-full items-center justify-between px-10">
      <h2
        class="font-heading text-muted-700 text-lg font-semibold dark:text-white"
      >
        Search
      </h2>
      <button
        type="button"
        class="text-muted-400 hover:bg-muted-100 hover:text-muted-600 dark:hover:bg-muted-700 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 dark:hover:text-white"
        @click="close"
      >
        <Icon name="feather:chevron-left" class="h-6 w-6" />
      </button>
    </div>

    <div class="relative h-[calc(100%_-_64px)] w-full px-10">
      <Combobox v-model="selectedPerson" class="relative z-10 mt-5" as="div">
        <div class="group relative">
          <ComboboxInput
            class="border-muted-300 text-muted-600 focus:border-primary-500 focus:shadow-muted-300/50 dark:border-muted-700 dark:bg-muted-800 dark:text-muted-200 dark:placeholder:text-muted-600 dark:focus:border-muted-600 dark:focus:shadow-muted-800/50 h-12 w-full rounded-lg border bg-white py-3 pe-4 ps-10 font-sans text-sm leading-5 !outline-none transition duration-300 focus:shadow-lg"
            :display-value="(person:any) => person.name"
            placeholder="Search..."
            @change="query = $event.target.value"
          />
          <div
            class="text-muted-400 group-focus-within:text-primary-500 absolute start-0 top-0 flex h-12 w-12 items-center justify-center transition-colors duration-300"
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
            class="slimscroll divide-muted-100 border-muted-200 dark:divide-muted-700 dark:border-muted-700 dark:bg-muted-800 absolute mt-1 max-h-60 w-full divide-y overflow-auto rounded-lg border bg-white py-1 text-base shadow-lg outline-none sm:text-sm"
          >
            <!-- Placeholder -->
            <div
              v-if="filteredPeople.length === 0 && query !== ''"
              class="text-muted-700 relative cursor-default select-none px-4 py-2"
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
                class="hover:bg-muted-100 dark:hover:bg-muted-700 flex cursor-pointer items-center rounded-lg p-2 transition-colors duration-300"
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
                <div class="ms-3">
                  <h6
                    class="font-heading text-muted-800 text-sm font-semibold dark:text-white"
                  >
                    {{ person.name }}
                  </h6>
                  <p class="text-muted-400 font-sans text-xs">
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
          class="font-alt text-muted-400 mb-4 text-sm font-semibold uppercase"
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
              <div class="ms-3">
                <h6
                  class="font-heading text-muted-800 text-sm font-semibold dark:text-white"
                >
                  Mike Miller
                </h6>
                <p class="text-muted-400 font-sans text-xs">
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
              <div class="ms-3">
                <h6
                  class="font-heading text-muted-800 text-sm font-semibold dark:text-white"
                >
                  John Sabierski
                </h6>
                <p class="text-muted-400 font-sans text-xs">
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
              <div class="ms-3">
                <h6
                  class="font-heading text-muted-800 text-sm font-semibold dark:text-white"
                >
                  Ronald Cardine
                </h6>
                <p class="text-muted-400 font-sans text-xs">
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
          class="font-alt text-muted-400 mb-4 text-sm font-semibold uppercase"
        >
          Recent
        </h4>
        <ul class="space-y-4">
          <!-- Item -->
          <li>
            <NuxtLink to="#" class="flex items-center">
              <div
                class="dark:text-muted-50 relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500"
              >
                <Icon name="feather:chrome" class="" />
              </div>
              <div class="ms-3">
                <h6
                  class="font-heading text-muted-800 text-sm font-semibold dark:text-white"
                >
                  Browser Support
                </h6>
                <p class="text-muted-400 font-sans text-xs">Blog article</p>
              </div>
            </NuxtLink>
          </li>
          <!-- Item -->
          <li>
            <NuxtLink to="#" class="flex items-center">
              <div
                class="bg-warning-100 text-warning-600 dark:bg-warning-500 dark:text-muted-50 relative inline-flex h-10 w-10 items-center justify-center rounded-full"
              >
                <Icon name="feather:tv" class="" />
              </div>
              <div class="ms-3">
                <h6
                  class="font-heading text-muted-800 text-sm font-semibold dark:text-white"
                >
                  Twitch new API
                </h6>
                <p class="text-muted-400 font-sans text-xs">Blog article</p>
              </div>
            </NuxtLink>
          </li>
          <!-- Item -->
          <li>
            <NuxtLink to="#" class="flex items-center">
              <div
                class="bg-primary-100 text-primary-600 dark:bg-primary-500 dark:text-muted-50 relative inline-flex h-10 w-10 items-center justify-center rounded-full"
              >
                <Icon name="feather:twitter" class="" />
              </div>
              <div class="ms-3">
                <h6
                  class="font-heading text-muted-800 text-sm font-semibold dark:text-white"
                >
                  Social integrations
                </h6>
                <p class="text-muted-400 font-sans text-xs">Blog article</p>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
