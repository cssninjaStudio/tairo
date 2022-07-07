<script setup lang="ts">
const { closePanel } = usePanels()
const activeTab = ref('tab-1')
</script>

<template>
  <div
    class="bg-white dark:bg-muted-800 border border-muted-200 dark:border-muted-700"
  >
    <div class="flex items-center justify-between h-16 w-full px-10">
      <h2
        class="font-heading text-lg font-semibold text-muted-700 dark:text-white"
      >
        Activity
      </h2>
      <button
        type="button"
        class="flex items-center justify-center h-10 w-10 rounded-full text-muted-400 hover:text-muted-600 dark:hover:text-white hover:bg-muted-100 dark:hover:bg-muted-700 transition-colors duration-300"
        @click="closePanel"
      >
        <BaseIcon name="feather:chevron-right" class="w-6 h-6" />
      </button>
    </div>

    <div class="flex items-center h-16 px-10">
      <!-- Tabs -->
      <div
        class="relative flex items-center w-full h-10 bg-muted-100 dark:bg-muted-700 rounded-lg font-sans text-sm"
      >
        <button
          type="button"
          class="relative flex items-center justify-center flex-1 h-full z-20"
          :class="activeTab === 'tab-1' ? 'text-white' : 'text-muted-400'"
          @click="activeTab = 'tab-1'"
        >
          <span>Team</span>
        </button>
        <button
          type="button"
          class="relative flex items-center justify-center flex-1 h-full z-20"
          :class="activeTab === 'tab-2' ? 'text-white' : 'text-muted-400'"
          @click="activeTab = 'tab-2'"
        >
          <span>Projects</span>
        </button>
        <button
          type="button"
          class="relative flex items-center justify-center flex-1 h-full z-20"
          :class="activeTab === 'tab-3' ? 'text-white' : 'text-muted-400'"
          @click="activeTab = 'tab-3'"
        >
          <span>Schedule</span>
        </button>
        <div
          class="absolute top-0 left-0 h-full w-1/3 bg-primary-600 z-10 transition-all duration-300 rounded-lg"
          :class="[
            activeTab === 'tab-1' && 'ml-0',
            activeTab === 'tab-2' && 'ml-[33.3%]',
            activeTab === 'tab-3' && 'ml-[66.6%]',
          ]"
        ></div>
      </div>
    </div>

    <div
      class="relative h-[calc(100%_-_128px)] w-full px-10 overflow-y-auto slimscroll"
    >
      <div class="py-6">
        <!-- Team tab content -->
        <div v-if="activeTab === 'tab-1'" class="space-y-4">
          <!-- Team member -->
          <div
            class="flex items-center bg-white dark:bg-muted-700 border border-muted-200 dark:border-muted-600 rounded-lg p-4"
          >
            <div
              class="inline-flex justify-center items-center relative w-9 h-9 rounded-full"
            >
              <img
                src="/img/avatars/2.svg"
                class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                alt=""
              />
            </div>
            <div class="ml-3">
              <h6
                class="font-heading font-semibold text-sm text-muted-800 dark:text-white"
              >
                You
              </h6>
              <p class="font-sans text-xs text-muted-400">Product Manager</p>
            </div>
            <NuxtLink
              to="/"
              class="flex items-center justify-center h-9 w-9 text-muted-400 hover:text-primary-500 border border-muted-200 dark:border-muted-500 hover:border-primary-500 dark:hover:border-primary-500 rounded-full ml-auto transition-colors duration-300"
            >
              <BaseIcon name="feather:arrow-right" class="w-4 h-4" />
            </NuxtLink>
          </div>
          <!-- Team member -->
          <div
            class="flex items-center bg-white dark:bg-muted-700 border border-muted-200 dark:border-muted-600 rounded-lg p-4"
          >
            <div
              class="inline-flex justify-center items-center relative w-9 h-9 rounded-full"
            >
              <img
                src="/img/avatars/16.svg"
                class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                alt=""
              />
            </div>
            <div class="ml-3">
              <h6
                class="font-heading font-semibold text-sm text-muted-800 dark:text-white"
              >
                Aaaron Splatter
              </h6>
              <p class="font-sans text-xs text-muted-400">Mobile Developer</p>
            </div>
            <NuxtLink
              to="/"
              class="flex items-center justify-center h-9 w-9 text-muted-400 hover:text-primary-500 border border-muted-200 dark:border-muted-500 hover:border-primary-500 dark:hover:border-primary-500 rounded-full ml-auto transition-colors duration-300"
            >
              <BaseIcon name="feather:arrow-right" class="w-4 h-4" />
            </NuxtLink>
          </div>
          <!-- Team member -->
          <div
            class="flex items-center bg-white dark:bg-muted-700 border border-muted-200 dark:border-muted-600 rounded-lg p-4"
          >
            <div
              class="inline-flex justify-center items-center relative w-9 h-9 rounded-full"
            >
              <img
                src="/img/avatars/3.svg"
                class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                alt=""
              />
            </div>
            <div class="ml-3">
              <h6
                class="font-heading font-semibold text-sm text-muted-800 dark:text-white"
              >
                Mike Miller
              </h6>
              <p class="font-sans text-xs text-muted-400">Frontend Developer</p>
            </div>
            <NuxtLink
              to="/"
              class="flex items-center justify-center h-9 w-9 text-muted-400 hover:text-primary-500 border border-muted-200 dark:border-muted-500 hover:border-primary-500 dark:hover:border-primary-500 rounded-full ml-auto transition-colors duration-300"
            >
              <BaseIcon name="feather:arrow-right" class="w-4 h-4" />
            </NuxtLink>
          </div>
          <!-- Team member -->
          <div
            class="flex items-center bg-white dark:bg-muted-700 border border-muted-200 dark:border-muted-600 rounded-lg p-4"
          >
            <div
              class="inline-flex justify-center items-center relative w-9 h-9 rounded-full"
            >
              <img
                src="/img/avatars/19.svg"
                class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                alt=""
              />
            </div>
            <div class="ml-3">
              <h6
                class="font-heading font-semibold text-sm text-muted-800 dark:text-white"
              >
                Clarissa Perez
              </h6>
              <p class="font-sans text-xs text-muted-400">Sales Manager</p>
            </div>
            <NuxtLink
              to="/"
              class="flex items-center justify-center h-9 w-9 text-muted-400 hover:text-primary-500 border border-muted-200 dark:border-muted-500 hover:border-primary-500 dark:hover:border-primary-500 rounded-full ml-auto transition-colors duration-300"
            >
              <BaseIcon name="feather:arrow-right" class="w-4 h-4" />
            </NuxtLink>
          </div>
        </div>

        <!-- Project tab content -->
        <div v-else-if="activeTab === 'tab-2'" class="space-y-4">
          <!-- Project -->
          <div
            class="bg-white dark:bg-muted-700 border border-muted-200 dark:border-muted-600 rounded-lg p-4"
          >
            <div class="flex items-center mb-4">
              <div
                class="inline-flex justify-center items-center relative w-9 h-9 rounded-xl"
              >
                <img
                  src="/img/icons/logos/slicer.svg"
                  class="object-cover max-w-full rounded-xl dark:border-transparent shadow-sm"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <h6
                  class="font-heading font-semibold text-sm text-muted-800 dark:text-white"
                >
                  The slicer project
                </h6>
                <p class="font-sans text-xs text-muted-400">getslicer.io</p>
              </div>
              <NuxtLink
                to="/"
                class="flex items-center justify-center h-9 w-9 text-muted-400 hover:text-primary-500 border border-muted-200 dark:border-muted-500 hover:border-primary-500 dark:hover:border-primary-500 rounded-full ml-auto transition-colors duration-300"
              >
                <BaseIcon name="feather:arrow-right" class="w-4 h-4" />
              </NuxtLink>
            </div>
            <div
              class="relative h-1 w-full bg-muted-200 dark:bg-muted-800 overflow-hidden rounded-lg mb-4"
            >
              <div
                class="absolute top-0 left-0 h-full transition duration-300 bg-primary-500 rounded-lg w-[34%]"
              ></div>
            </div>
            <div class="flex items-center justify-between">
              <span class="font-sans text-muted-400">5/24</span>
              <div class="flex items-end">
                <div
                  class="inline-flex justify-center items-center relative w-8 h-8 rounded-full border-2 border-white dark:border-muted-700 -ml-2"
                >
                  <img
                    src="/img/avatars/2.svg"
                    class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                    alt=""
                  />
                </div>
                <div
                  class="inline-flex justify-center items-center relative w-8 h-8 rounded-full border-2 border-white dark:border-muted-700 -ml-2"
                >
                  <img
                    src="/img/avatars/3.svg"
                    class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                    alt=""
                  />
                </div>
                <div
                  class="inline-flex justify-center items-center relative w-8 h-8 rounded-full border-2 border-white dark:border-muted-700 -ml-2"
                >
                  <img
                    src="/img/avatars/4.svg"
                    class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                    alt=""
                  />
                </div>
                <div
                  class="inline-flex justify-center items-center relative w-8 h-8 rounded-full bg-muted-200 dark:bg-muted-800 border-2 border-white dark:border-muted-700 -ml-2"
                >
                  <span
                    class="text-sm font-alt uppercase text-muted-500 dark:text-muted-300 font-normal -ml-1"
                  >
                    +3
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- Project -->
          <div
            class="bg-white dark:bg-muted-700 border border-muted-200 dark:border-muted-600 rounded-lg p-4"
          >
            <div class="flex items-center mb-4">
              <div
                class="inline-flex justify-center items-center relative w-9 h-9 rounded-xl"
              >
                <img
                  src="/img/icons/logos/metamovies.svg"
                  class="object-cover max-w-full rounded-xl dark:border-transparent shadow-sm"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <h6
                  class="font-heading font-semibold text-sm text-muted-800 dark:text-white"
                >
                  Metamovies reworked
                </h6>
                <p class="font-sans text-xs text-muted-400">metamovies.co</p>
              </div>
              <NuxtLink
                to="/"
                class="flex items-center justify-center h-9 w-9 text-muted-400 hover:text-primary-500 border border-muted-200 dark:border-muted-500 hover:border-primary-500 dark:hover:border-primary-500 rounded-full ml-auto transition-colors duration-300"
              >
                <BaseIcon name="feather:arrow-right" class="w-4 h-4" />
              </NuxtLink>
            </div>
            <div
              class="relative h-1 w-full bg-muted-200 dark:bg-muted-800 overflow-hidden rounded-lg mb-4"
            >
              <div
                class="absolute top-0 left-0 h-full transition duration-300 bg-primary-500 rounded-lg w-[88%]"
              ></div>
            </div>
            <div class="flex items-center justify-between">
              <span class="font-sans text-muted-400">28/31</span>
              <div class="flex items-end">
                <div
                  class="inline-flex justify-center items-center relative w-8 h-8 rounded-full border-2 border-white dark:border-muted-700 -ml-2"
                >
                  <img
                    src="/img/avatars/13.svg"
                    class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                    alt=""
                  />
                </div>
                <div
                  class="inline-flex justify-center items-center relative w-8 h-8 rounded-full border-2 border-white dark:border-muted-700 -ml-2"
                >
                  <img
                    src="/img/avatars/24.svg"
                    class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- Project -->
          <div
            class="bg-white dark:bg-muted-700 border border-muted-200 dark:border-muted-600 rounded-lg p-4"
          >
            <div class="flex items-center mb-4">
              <div
                class="inline-flex justify-center items-center relative w-9 h-9 rounded-xl"
              >
                <img
                  src="/img/icons/logos/fastpizza.svg"
                  class="object-cover max-w-full rounded-xl dark:border-transparent shadow-sm"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <h6
                  class="font-heading font-semibold text-sm text-muted-800 dark:text-white"
                >
                  Fast Pizza redesign
                </h6>
                <p class="font-sans text-xs text-muted-400">fastpizza.com</p>
              </div>
              <NuxtLink
                to="/"
                class="flex items-center justify-center h-9 w-9 text-muted-400 hover:text-primary-500 border border-muted-200 dark:border-muted-500 hover:border-primary-500 dark:hover:border-primary-500 rounded-full ml-auto transition-colors duration-300"
              >
                <BaseIcon name="feather:arrow-right" class="w-4 h-4" />
              </NuxtLink>
            </div>
            <div
              class="relative h-1 w-full bg-muted-200 dark:bg-muted-800 overflow-hidden rounded-lg mb-4"
            >
              <div
                class="absolute top-0 left-0 h-full transition duration-300 bg-primary-500 rounded-lg w-[62%]"
              ></div>
            </div>
            <div class="flex items-center justify-between">
              <span class="font-sans text-muted-400">25/39</span>
              <div class="flex items-end">
                <div
                  class="inline-flex justify-center items-center relative w-8 h-8 rounded-full border-2 border-white dark:border-muted-700 -ml-2"
                >
                  <img
                    src="/img/avatars/11.svg"
                    class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                    alt=""
                  />
                </div>
                <div
                  class="inline-flex justify-center items-center relative w-8 h-8 rounded-full border-2 border-white dark:border-muted-700 -ml-2"
                >
                  <img
                    src="/img/avatars/3.svg"
                    class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Timeline tab content -->
        <div v-else-if="activeTab === 'tab-3'" class="space-y-4">
          <!-- Timeline -->
          <div>
            <!-- Item -->
            <div
              class="relative flex pb-8 after:content-[''] after:absolute after:top-10 after:left-4 after:w-px after:h-[calc(100%_-_36px)] after:border-l after:border-muted-300 dark:after:border-muted-600"
            >
              <div
                class="relative flex items-center justify-center h-9 w-9 rounded-full text-muted-400 bg-white dark:bg-muted-700 border border-muted-200 dark:border-muted-600 after:content-[''] after:absolute after:top-4 after:-right-8 after:w-5 after:h-px after:border-t after:border-muted-300 dark:after:border-muted-600 shadow-lg"
              >
                <BaseIcon name="ph:phone-duotone" class="" />
              </div>
              <div class="ml-10">
                <h6
                  class="font-heading font-semibold text-sm text-muted-800 dark:text-white"
                >
                  Call Danny at Colby's
                </h6>
                <p class="font-sans text-xs text-muted-400">Today - 11:30am</p>
              </div>
            </div>
            <!-- Item -->
            <div
              class="relative flex pb-8 after:content-[''] after:absolute after:top-10 after:left-4 after:w-px after:h-[calc(100%_-_36px)] after:border-l after:border-muted-300 dark:after:border-muted-600"
            >
              <div
                class="relative flex items-center justify-center h-9 w-9 rounded-full text-muted-400 bg-white dark:bg-muted-700 border border-muted-200 dark:border-muted-600 after:content-[''] after:absolute after:top-4 after:-right-8 after:w-5 after:h-px after:border-t after:border-muted-300 dark:after:border-muted-600 shadow-lg"
              >
                <div
                  class="inline-flex justify-center items-center relative w-7 h-7 rounded-full"
                >
                  <img
                    src="/img/avatars/3.svg"
                    class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                    alt=""
                  />
                </div>
              </div>
              <div class="ml-10">
                <h6
                  class="font-heading font-semibold text-sm text-muted-800 dark:text-white"
                >
                  Meeting with Mike
                </h6>
                <p class="font-sans text-xs text-muted-400">Today - 01:00pm</p>
              </div>
            </div>
            <!-- Item -->
            <div
              class="relative flex pb-8 after:content-[''] after:absolute after:top-10 after:left-4 after:w-px after:h-[calc(100%_-_36px)] after:border-l after:border-muted-300 dark:after:border-muted-600"
            >
              <div
                class="relative flex items-center justify-center h-9 w-9 rounded-full text-muted-400 bg-white dark:bg-muted-700 border border-muted-200 dark:border-muted-600 after:content-[''] after:absolute after:top-4 after:-right-8 after:w-5 after:h-px after:border-t after:border-muted-300 dark:after:border-muted-600 shadow-lg"
              >
                <BaseIcon name="ph:chat-circle-duotone" class="" />
              </div>
              <div class="ml-10">
                <h6
                  class="font-heading font-semibold text-sm text-muted-800 dark:text-white"
                >
                  Answer Annie's message
                </h6>
                <p class="font-sans text-xs text-muted-400">Today - 01:45pm</p>
              </div>
            </div>
            <!-- Item -->
            <div
              class="relative flex pb-8 after:content-[''] after:absolute after:top-10 after:left-4 after:w-px after:h-[calc(100%_-_36px)] after:border-l after:border-muted-300 dark:after:border-muted-600"
            >
              <div
                class="relative flex items-center justify-center h-9 w-9 rounded-full text-muted-400 bg-white dark:bg-muted-700 border border-muted-200 dark:border-muted-600 after:content-[''] after:absolute after:top-4 after:-right-8 after:w-5 after:h-px after:border-t after:border-muted-300 dark:after:border-muted-600 shadow-lg"
              >
                <div
                  class="inline-flex justify-center items-center relative w-7 h-7 rounded-full"
                >
                  <img
                    src="/img/avatars/18.svg"
                    class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
                    alt=""
                  />
                </div>
              </div>
              <div class="ml-10">
                <h6
                  class="font-heading font-semibold text-sm text-muted-800 dark:text-white"
                >
                  Meeting with John
                </h6>
                <p class="font-sans text-xs text-muted-400">Today - 03:00pm</p>
              </div>
            </div>
            <!-- Item -->
            <div
              class="relative flex pb-8 after:content-[''] after:absolute after:top-10 after:left-4 after:w-px after:h-[calc(100%_-_36px)] after:border-l after:border-muted-300 dark:after:border-muted-600"
            >
              <div
                class="relative flex items-center justify-center h-9 w-9 rounded-full text-muted-400 bg-white dark:bg-muted-700 border border-muted-200 dark:border-muted-600 after:content-[''] after:absolute after:top-4 after:-right-8 after:w-5 after:h-px after:border-t after:border-muted-300 dark:after:border-muted-600 shadow-lg"
              >
                <BaseIcon name="ph:envelope-duotone" class="" />
              </div>
              <div class="ml-10">
                <h6
                  class="font-heading font-semibold text-sm text-muted-800 dark:text-white"
                >
                  Send marketing campaign
                </h6>
                <p class="font-sans text-xs text-muted-400">Today - 03:30pm</p>
              </div>
            </div>
            <!-- Item -->
            <div
              class="relative flex pb-8 after:content-[''] after:absolute after:top-10 after:left-4 after:w-px after:h-[calc(100%_-_36px)] after:border-l after:border-muted-300 dark:after:border-muted-600"
            >
              <div
                class="relative flex items-center justify-center h-9 w-9 rounded-full text-muted-400 bg-white dark:bg-muted-700 border border-muted-200 dark:border-muted-600 after:content-[''] after:absolute after:top-4 after:-right-8 after:w-5 after:h-px after:border-t after:border-muted-300 dark:after:border-muted-600 shadow-lg"
              >
                <BaseIcon name="ph:selection-all-duotone" class="" />
              </div>
              <div class="ml-10">
                <h6
                  class="font-heading font-semibold text-sm text-muted-800 dark:text-white"
                >
                  Project review
                </h6>
                <p class="font-sans text-xs text-muted-400">Today - 04:30pm</p>
              </div>
            </div>
            <!-- Item -->
            <div
              class="relative flex pb-8 after:content-[''] after:absolute after:top-10 after:left-4 after:w-px after:h-[calc(100%_-_36px)] after:border-l after:border-muted-300 dark:after:border-muted-600"
            >
              <div
                class="relative flex items-center justify-center h-9 w-9 rounded-full text-muted-400 bg-white dark:bg-muted-700 border border-muted-200 dark:border-muted-600 after:content-[''] after:absolute after:top-4 after:-right-8 after:w-5 after:h-px after:border-t after:border-muted-300 dark:after:border-muted-600 shadow-lg"
              >
                <BaseIcon name="ph:note-duotone" class="" />
              </div>
              <div class="ml-10">
                <h6
                  class="font-heading font-semibold text-sm text-muted-800 dark:text-white"
                >
                  Write proposal for Andy
                </h6>
                <p class="font-sans text-xs text-muted-400">Today - 06:30pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
