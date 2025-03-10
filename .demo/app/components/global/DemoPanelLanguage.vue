<script setup lang="ts">
const { t, locale, locales, setLocale, onLanguageSwitched } = useI18n()
const { close } = usePanels()
onKeyStroke('Escape', close)

const localeValue = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value)
  },
})
</script>

<template>
  <div class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 border bg-white">
    <FocusScope trapped loop>
      <div class="flex h-16 w-full items-center justify-between px-10">
        <h2
          class="font-heading text-muted-700 text-lg font-semibold dark:text-white"
        >
          {{ t('panels.language.title') }}
        </h2>
        <button
          type="button"
          class="text-muted-400 focus-visible:nui-focus hover:bg-muted-100 focus:bg-muted-100 hover:text-muted-600 focus:text-muted-600 dark:hover:bg-muted-700 dark:focus:bg-muted-700 flex size-10 items-center justify-center rounded-full transition-colors duration-300 dark:hover:text-white dark:focus:text-white"
          @click="close"
        >
          <Icon name="feather:chevron-right" class="size-6 rtl:rotate-180" />
        </button>
      </div>

      <div class="relative h-[calc(100dvh_-_64px)] w-full px-10">
        <RadioGroupRoot v-model="localeValue" class="grid grid-cols-3 py-6">
          <RadioGroupItem
            v-for="other in locales"
            :key="other.code"
            :value="other.code"
            class="relative my-4 flex items-center justify-center outline-none"
          >
            <BaseTooltip :content="other.name" :bindings="{ portal: { disabled: true } }">
              <div class="in-focus-visible:nui-focus relative rounded-full">
                <div
                  class="border-muted-200 in-data-[state=checked]:border-primary-500 dark:border-muted-600 flex size-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"
                >
                  <img
                    class="size-10 rounded-full"
                    :src="getLocaleFlag(other.code)"
                    alt="flag icon"
                  >
                </div>
                <RadioGroupIndicator
                  class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 size-7 flex items-center justify-center rounded-full border-4 border-white text-white"
                >
                  <Icon name="feather:check" class="size-3" />
                </RadioGroupIndicator>
              </div>
            </BaseTooltip>
          </RadioGroupItem>

          <!-- <div class="relative my-4 flex items-center justify-center">
            <div class="focus-visible:nui-focus relative rounded-full">
              <input
                type="radio"
                name="language_selection"
                class="peer absolute start-0 top-0 z-20 size-full cursor-pointer opacity-0"
              >
              <div
                class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex size-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"
              >
                <img
                  class="size-10 rounded-full"
                  src="/img/icons/flags/france.svg"
                  alt="flag icon"
                >
              </div>
              <div
                class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden size-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex"
              >
                <Icon name="feather:check" class="size-3" />
              </div>
            </div>
          </div>

          <div class="relative my-4 flex items-center justify-center">
            <div class="focus-visible:nui-focus relative rounded-full">
              <input
                type="radio"
                name="language_selection"
                class="peer absolute start-0 top-0 z-20 size-full cursor-pointer opacity-0"
              >
              <div
                class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex size-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"
              >
                <img
                  class="size-10 rounded-full"
                  src="/img/icons/flags/spain.svg"
                  alt="flag icon"
                >
              </div>
              <div
                class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden size-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex"
              >
                <Icon name="feather:check" class="size-3" />
              </div>
            </div>
          </div>

          <div class="relative my-4 flex items-center justify-center">
            <div class="focus-visible:nui-focus relative rounded-full">
              <input
                type="radio"
                name="language_selection"
                class="peer absolute start-0 top-0 z-20 size-full cursor-pointer opacity-0"
              >
              <div
                class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex size-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"
              >
                <img
                  class="size-10 rounded-full"
                  src="/img/icons/flags/germany.svg"
                  alt="flag icon"
                >
              </div>
              <div
                class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden size-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex"
              >
                <Icon name="feather:check" class="size-3" />
              </div>
            </div>
          </div>

          <div class="relative my-4 flex items-center justify-center">
            <div class="focus-visible:nui-focus relative rounded-full">
              <input
                type="radio"
                name="language_selection"
                class="peer absolute start-0 top-0 z-20 size-full cursor-pointer opacity-0"
              >
              <div
                class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex size-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"
              >
                <img
                  class="size-10 rounded-full"
                  src="/img/icons/flags/mexico.svg"
                  alt="flag icon"
                >
              </div>
              <div
                class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden size-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex"
              >
                <Icon name="feather:check" class="size-3" />
              </div>
            </div>
          </div>

          <div class="relative my-4 flex items-center justify-center">
            <div class="focus-visible:nui-focus relative rounded-full">
              <input
                type="radio"
                name="language_selection"
                class="peer absolute start-0 top-0 z-20 size-full cursor-pointer opacity-0"
              >
              <div
                class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex size-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"
              >
                <img
                  class="size-10 rounded-full"
                  src="/img/icons/flags/china.svg"
                  alt="flag icon"
                >
              </div>
              <div
                class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden size-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex"
              >
                <Icon name="feather:check" class="size-3" />
              </div>
            </div>
          </div> -->
        </RadioGroupRoot>

        <div>
          <img
            src="/img/illustrations/translation.svg"
            class="mx-auto w-full max-w-[280px] dark:hidden"
            alt="illustration"
          >
          <img
            src="/img/illustrations/translation-dark.svg"
            class="mx-auto hidden w-full max-w-[280px] dark:block"
            alt="illustration"
          >
        </div>
      </div>
    </FocusScope>
  </div>
</template>
