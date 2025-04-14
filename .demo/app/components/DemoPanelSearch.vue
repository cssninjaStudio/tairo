<script setup lang="ts">
const emits = defineEmits<{
  close: []
}>()

onKeyStroke('Escape', () => emits('close'))

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
</script>

<template>
  <FocusScope class="border-muted-200 dark:border-muted-800 dark:bg-muted-950 border bg-white" trapped loop>
    <div
      class="border-muted-200 dark:border-muted-800/80 flex h-20 w-full items-center justify-between border-b px-6"
    >
      <div>
        <BaseHeading weight="medium">
          Search
        </BaseHeading>
      </div>

      <!-- Close button -->
      <button
        type="button"
        class="nui-mask nui-mask-blob hover:bg-muted-100 focus:bg-muted-100 dark:hover:bg-muted-700 dark:focus:bg-muted-700 text-muted-700 dark:text-muted-400 flex size-8 cursor-pointer items-center justify-center outline-transparent transition-colors duration-300"
        @click="() => emits('close')"
      >
        <Icon name="lucide:arrow-right" class="size-4" />
      </button>
    </div>

    <div class="h-[calc(100dvh_-_80px)] w-full px-6 py-6 z-10">
      <BaseAutocomplete
        v-model="selectedPerson"
        size="lg"
        placeholder="Search people..."
        by="name"
        :bindings="{ portal: { disabled: true } }"
      >
        <BaseAutocompleteItem v-for="person in people" :key="person.id" :value="person.name" class="border-0 rounded-lg hover:bg-muted-100 dark:hover:bg-muted-800 transition-colors duration-300">
          <div
            class="flex gap-2 cursor-pointer items-center p-2"
          >
            <div
              class="inline-flex size-8 items-center justify-center rounded-full"
            >
              <img
                :src="person.avatar"
                class="max-w-full rounded-full object-cover shadow-xs dark:border-transparent"
                alt=""
              >
            </div>
            <div>
              <h6
                class="font-heading text-muted-900 leading-tight text-sm font-medium dark:text-white"
              >
                {{ person.name }}
              </h6>
              <p class="text-muted-600 dark:text-muted-400 font-sans text-xs">
                {{ person.role }}
              </p>
            </div>
          </div>
        </BaseAutocompleteItem>
      </BaseAutocomplete>

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
                class="inline-flex size-9 items-center justify-center rounded-full"
              >
                <img
                  src="/img/avatars/3.svg"
                  class="max-w-full rounded-full object-cover shadow-xs dark:border-transparent"
                  alt=""
                >
              </div>
              <div class="ms-3">
                <h6
                  class="font-heading text-muted-900 text-sm font-medium dark:text-white"
                >
                  Mike Miller
                </h6>
                <p class="text-muted-600 dark:text-muted-400 font-sans text-xs">
                  Frontend Developer
                </p>
              </div>
            </NuxtLink>
          </li>
          <!-- Item -->
          <li>
            <NuxtLink to="#" class="flex items-center">
              <div
                class="inline-flex size-9 items-center justify-center rounded-full"
              >
                <img
                  src="/img/avatars/18.svg"
                  class="max-w-full rounded-full object-cover shadow-xs dark:border-transparent"
                  alt=""
                >
              </div>
              <div class="ms-3">
                <h6
                  class="font-heading text-muted-900 text-sm font-medium dark:text-white"
                >
                  John Sabierski
                </h6>
                <p class="text-muted-600 dark:text-muted-400 font-sans text-xs">
                  Backend Developer
                </p>
              </div>
            </NuxtLink>
          </li>
          <!-- Item -->
          <li>
            <NuxtLink to="#" class="flex items-center">
              <div
                class="inline-flex size-9 items-center justify-center rounded-full"
              >
                <img
                  src="/img/avatars/11.svg"
                  class="max-w-full rounded-full object-cover shadow-xs dark:border-transparent"
                  alt=""
                >
              </div>
              <div class="ms-3">
                <h6
                  class="font-heading text-muted-900 text-sm font-medium dark:text-white"
                >
                  Ronald Cardine
                </h6>
                <p class="text-muted-600 dark:text-muted-400 font-sans text-xs">
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
                class="dark:text-muted-50 inline-flex size-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500"
              >
                <Icon name="feather:chrome" class="" />
              </div>
              <div class="ms-3">
                <h6
                  class="font-heading text-muted-900 text-sm font-medium dark:text-white"
                >
                  Browser Support
                </h6>
                <p class="text-muted-600 dark:text-muted-400 font-sans text-xs">
                  Blog article
                </p>
              </div>
            </NuxtLink>
          </li>
          <!-- Item -->
          <li>
            <NuxtLink to="#" class="flex items-center">
              <div
                class="bg-warning-100 text-warning-600 dark:bg-warning-500 dark:text-muted-50 inline-flex size-10 items-center justify-center rounded-full"
              >
                <Icon name="feather:tv" class="" />
              </div>
              <div class="ms-3">
                <h6
                  class="font-heading text-muted-900 text-sm font-medium dark:text-white"
                >
                  Twitch new API
                </h6>
                <p class="text-muted-600 dark:text-muted-400 font-sans text-xs">
                  Blog article
                </p>
              </div>
            </NuxtLink>
          </li>
          <!-- Item -->
          <li>
            <NuxtLink to="#" class="flex items-center">
              <div
                class="bg-primary-100 text-primary-600 dark:bg-primary-500 dark:text-muted-50 inline-flex size-10 items-center justify-center rounded-full"
              >
                <Icon name="feather:twitter" class="" />
              </div>
              <div class="ms-3">
                <h6
                  class="font-heading text-muted-900 text-sm font-medium dark:text-white"
                >
                  Social integrations
                </h6>
                <p class="text-muted-600 dark:text-muted-400 font-sans text-xs">
                  Blog article
                </p>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </FocusScope>
</template>
