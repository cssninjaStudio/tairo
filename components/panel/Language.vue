<script setup lang="ts">
const { closePanel } = usePanels()
</script>

<template>
  <div
    class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
  >
    <div class="flex items-center justify-between h-16 w-full px-10">
      <h2
        class="font-main text-lg font-semibold text-slate-700 dark:text-white"
      >
        Select language
      </h2>
      <button
        type="button"
        class="flex items-center justify-center h-10 w-10 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300"
        @click="closePanel"
      >
        <i class="i-feather-chevron-right w-6 h-6"></i>
      </button>
    </div>

    <div class="relative h-[calc(100%_-_64px)] w-full px-10">
      <div class="grid grid-cols-3 py-6">
        <!-- Radio box -->
        <div class="relative flex items-center justify-center my-4">
          <div class="relative">
            <input
              type="radio"
              name="language_selection"
              class="peer absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer z-20"
              checked
            />
            <div
              class="w-14 h-14 flex items-center justify-center border-2 border-slate-200 dark:border-slate-600 peer-checked:border-primary-500 shadow-lg rounded-full transition-all duration-300"
            >
              <img
                class="h-10 w-10 rounded-full"
                src="/img/icons/flags/united-states-of-america.svg"
                alt="flag icon"
              />
            </div>
            <div
              class="absolute -top-1 -right-1 h-7 w-7 rounded-full hidden peer-checked:flex items-center justify-center bg-primary-500 text-white border-4 border-white dark:border-slate-800"
            >
              <i class="i-feather-check w-3 h-3"></i>
            </div>
          </div>
        </div>
        <!-- Radio box -->
        <div class="relative flex items-center justify-center my-4">
          <div class="relative">
            <input
              type="radio"
              name="language_selection"
              class="peer absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer z-20"
            />
            <div
              class="w-14 h-14 flex items-center justify-center border-2 border-slate-200 dark:border-slate-600 peer-checked:border-primary-500 shadow-lg rounded-full transition-all duration-300"
            >
              <img
                class="h-10 w-10 rounded-full"
                src="/img/icons/flags/france.svg"
                alt="flag icon"
              />
            </div>
            <div
              class="absolute -top-1 -right-1 h-7 w-7 rounded-full hidden peer-checked:flex items-center justify-center bg-primary-500 text-white border-4 border-white dark:border-slate-800"
            >
              <i class="i-feather-check w-3 h-3"></i>
            </div>
          </div>
        </div>
        <!-- Radio box -->
        <div class="relative flex items-center justify-center my-4">
          <div class="relative">
            <input
              type="radio"
              name="language_selection"
              class="peer absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer z-20"
            />
            <div
              class="w-14 h-14 flex items-center justify-center border-2 border-slate-200 dark:border-slate-600 peer-checked:border-primary-500 shadow-lg rounded-full transition-all duration-300"
            >
              <img
                class="h-10 w-10 rounded-full"
                src="/img/icons/flags/spain.svg"
                alt="flag icon"
              />
            </div>
            <div
              class="absolute -top-1 -right-1 h-7 w-7 rounded-full hidden peer-checked:flex items-center justify-center bg-primary-500 text-white border-4 border-white dark:border-slate-800"
            >
              <i class="i-feather-check w-3 h-3"></i>
            </div>
          </div>
        </div>
        <!-- Radio box -->
        <div class="relative flex items-center justify-center my-4">
          <div class="relative">
            <input
              type="radio"
              name="language_selection"
              class="peer absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer z-20"
            />
            <div
              class="w-14 h-14 flex items-center justify-center border-2 border-slate-200 dark:border-slate-600 peer-checked:border-primary-500 shadow-lg rounded-full transition-all duration-300"
            >
              <img
                class="h-10 w-10 rounded-full"
                src="/img/icons/flags/germany.svg"
                alt="flag icon"
              />
            </div>
            <div
              class="absolute -top-1 -right-1 h-7 w-7 rounded-full hidden peer-checked:flex items-center justify-center bg-primary-500 text-white border-4 border-white dark:border-slate-800"
            >
              <i class="i-feather-check w-3 h-3"></i>
            </div>
          </div>
        </div>
        <!-- Radio box -->
        <div class="relative flex items-center justify-center my-4">
          <div class="relative">
            <input
              type="radio"
              name="language_selection"
              class="peer absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer z-20"
            />
            <div
              class="w-14 h-14 flex items-center justify-center border-2 border-slate-200 dark:border-slate-600 peer-checked:border-primary-500 shadow-lg rounded-full transition-all duration-300"
            >
              <img
                class="h-10 w-10 rounded-full"
                src="/img/icons/flags/mexico.svg"
                alt="flag icon"
              />
            </div>
            <div
              class="absolute -top-1 -right-1 h-7 w-7 rounded-full hidden peer-checked:flex items-center justify-center bg-primary-500 text-white border-4 border-white dark:border-slate-800"
            >
              <i class="i-feather-check w-3 h-3"></i>
            </div>
          </div>
        </div>
        <!-- Radio box -->
        <div class="relative flex items-center justify-center my-4">
          <div class="relative">
            <input
              type="radio"
              name="language_selection"
              class="peer absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer z-20"
            />
            <div
              class="w-14 h-14 flex items-center justify-center border-2 border-slate-200 dark:border-slate-600 peer-checked:border-primary-500 shadow-lg rounded-full transition-all duration-300"
            >
              <img
                class="h-10 w-10 rounded-full"
                src="/img/icons/flags/china.svg"
                alt="flag icon"
              />
            </div>
            <div
              class="absolute -top-1 -right-1 h-7 w-7 rounded-full hidden peer-checked:flex items-center justify-center bg-primary-500 text-white border-4 border-white dark:border-slate-800"
            >
              <i class="i-feather-check w-3 h-3"></i>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img
          src="/img/illustrations/translation.svg"
          class="w-full max-w-[280px] mx-auto dark:hidden"
          alt="illustration"
        />
        <img
          src="/img/illustrations/translation-dark.svg"
          class="w-full max-w-[280px] mx-auto hidden dark:block"
          alt="illustration"
        />
      </div>
    </div>
  </div>
</template>
