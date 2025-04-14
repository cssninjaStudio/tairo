<script setup lang="ts">
const emits = defineEmits<{
  close: []
}>()

const { t, locale, locales, setLocale } = useI18n()
onKeyStroke('Escape', () => emits('close'))

const localeValue = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value)
  },
})
</script>

<template>
  <FocusScope class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 border bg-white" trapped loop>
    <div
      class="border-muted-200 dark:border-muted-800 flex h-20 w-full items-center justify-between border-b px-6"
    >
      <BaseHeading
        as="h3"
        size="xs"
        weight="semibold"
        class="text-muted-500 dark:text-muted-100 uppercase"
      >
        {{ t('panels.language.title') }}
      </BaseHeading>

      <!-- Close button -->
      <button
        type="button"
        class="nui-mask nui-mask-blob hover:bg-muted-100 focus:bg-muted-100 dark:hover:bg-muted-800 dark:focus:bg-muted-800 text-muted-700 dark:text-muted-400 flex size-10 cursor-pointer items-center justify-center outline-transparent transition-colors duration-300"
        @click="() => emits('close')"
      >
        <Icon name="lucide:arrow-right" class="size-4" />
      </button>
    </div>

    <div class="relative h-[calc(100dvh_-_80px)] w-full px-10">
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
</template>
