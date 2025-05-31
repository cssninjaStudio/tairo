<script setup lang="ts">
import { generatePassphrase as _generatePassphrase } from '~/utils/bundles/diceware'

definePageMeta({
  title: 'Password',
  preview: {
    title: 'Form layout 5',
    description: 'For forms and input fields',
    categories: ['layouts', 'forms'],
    src: '/img/screens/layouts-form-5.png',
    srcDark: '/img/screens/layouts-form-5-dark.png',
    order: 51,
  },
})

const toaster = useNuiToasts()

const password = ref('')

// passphrase

const phraseStrength = ref([4])

function generatePassphrase() {
  const words = _generatePassphrase(phraseStrength.value[0])
  password.value = words.join(' ')
}

watch(phraseStrength, () => {
  generatePassphrase()
})

// password

const chars = ref({
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numeric: '0123456789',
  symbols: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
})

const charsLength = ref([24])

const charsLower = ref(true)
const charsUpper = ref(true)
const charsNumeric = ref(true)
const charsSymbols = ref(false)
const hasChars = computed(() => {
  return (
    charsLower.value
    || charsUpper.value
    || charsNumeric.value
    || charsSymbols.value
  )
})

watch([charsLength, charsLower, charsUpper, charsNumeric, charsSymbols], () => {
  if (!hasChars.value)
    return

  generatePassword()
})

function generatePassword() {
  const dict: string[] = []

  if (charsLower.value)
    dict.push(chars.value.lower)
  if (charsUpper.value)
    dict.push(chars.value.upper)
  if (charsNumeric.value)
    dict.push(chars.value.numeric)
  if (charsSymbols.value)
    dict.push(chars.value.symbols)

  password.value = shuffleArray(dict.join('').split(''))
    .join('')
    .substring(0, charsLength.value[0])
}

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

onMounted(() => {
  generatePassphrase()
})

const { text, copy, copied, isSupported } = useClipboard({ source: password })
function handleClipboard() {
  copy(password.value)
  if (copied) {
    toaster.add({
      title: 'Success',
      description: `Password was copied to clipboard!`,
      icon: 'ph:check',
      progress: true,
    })
  }
}
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20">
    <div class="relative py-3 sm:mx-auto sm:max-w-xl">
      <BaseCard rounded="md" class="relative p-4 md:p-6">
        <div>
          <div class="flex items-center gap-4">
            <div class="flex items-center justify-center size-12 bg-white dark:bg-muted-950 rounded-full shadow-lg ring-1 ring-muted-900/5 dark:ring-primary-500/20">
              <div
                class="bg-primary-500/20 text-primary-500 flex size-10 shrink-0 items-center justify-center rounded-full font-sans text-2xl"
              >
                <Icon name="solar:lock-keyhole-minimalistic-bold-duotone" class="size-5" />
              </div>
            </div>
            <div class="">
              <BaseHeading
                as="h3"
                size="md"
                weight="medium"
                lead="tight"
                class="text-muted-900 dark:text-white"
              >
                New password
              </BaseHeading>
              <BaseParagraph
                size="sm"
                class="text-muted-600 dark:text-muted-400"
              >
                Generate a strong and secure password.
              </BaseParagraph>
            </div>
          </div>
          <div class="divide-muted-200 dark:divide-muted-800/80 divide-y">
            <div class="grid grid-cols-12 gap-4 py-5">
              <div class="col-span-12">
                <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400">
                  Change the length value to generate a new random password. You
                  can also change the character types.
                </BaseParagraph>
              </div>
            </div>
            <div class="text-muted-800 mx-auto w-full pt-5">
              <div class="relative mb-2">
                <label
                  class="text-muted-500 dark:text-muted-400 mb-2 block text-xs font-semibold"
                >Password strength</label>
                <LazyAddonInputPassword
                  v-model="password"
                  placeholder="Password"
                  rounded="lg"
                  show
                  touched
                />
              </div>
              <hr
                class="border-muted-200 dark:border-muted-800/80 my-5 h-px border bg-transparent"
              >
              <BaseAccordion type="single" collapsible>
                <BaseAccordionItem
                  value="passphrase"
                  title="Memorable niceware passwords"
                >
                  <div>
                    <div class="mb-2">
                      <label
                        class="text-muted-500 dark:text-muted-400 mb-2 block text-xs font-semibold"
                      >Passphrase strength</label>
                      <BaseInputNumber
                        v-model="phraseStrength[0]"
                        placeholder="Bits"
                        rounded="lg"
                        :min="1"
                        :max="8"
                        :step="1"
                      />
                      <div class="w-full py-5">
                        <BaseSlider
                          v-model="phraseStrength"
                          :min="1"
                          :max="8"
                          :step="1"
                          variant="primary"
                        />
                      </div>
                    </div>
                    <div
                      class="mt-6 flex flex-col gap-3 sm:flex-row"
                    >
                      <ClientOnly>
                        <BaseButton
                          v-if="isSupported"
                          rounded="md"
                          class="w-full"
                          @click="handleClipboard"
                        >
                          <Icon name="solar:copy-linear" class="size-4" />
                          <span>Copy to Clipboard</span>
                        </BaseButton>
                        <div v-else class="h-12">
                          <BaseText
                            class="text-muted-400"
                            size="sm"
                          >
                            Your browser does not support Clipboard API.
                          </BaseText>
                        </div>
                      </ClientOnly>
                      <BaseButton
                        variant="primary"
                        rounded="md"
                        class="w-full"
                        @click="generatePassphrase()"
                      >
                        <Icon name="solar:restart-circle-linear" class="size-4" />
                        <span>Generate New</span>
                      </BaseButton>
                    </div>
                  </div>
                </BaseAccordionItem>
                <BaseAccordionItem
                  value="password"
                  title="Memorable niceware passwords"
                >
                  <div>
                    <div class="mb-2">
                      <label
                        class="text-muted-500 dark:text-muted-400 mb-2 block text-xs font-semibold"
                      >Password length</label>
                      <BaseInputNumber
                        v-model="charsLength[0]"
                        placeholder="Length"
                        rounded="lg"
                        :min="1"
                        :max="42"
                        :step="1"
                      />
                      <div class="w-full py-5">
                        <BaseSlider
                          v-model="charsLength"
                          :min="1"
                          :max="42"
                          :step="1"
                          variant="primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        class="text-muted-500 dark:text-muted-400 mb-4 block text-xs font-semibold"
                      >Character types</label>
                      <div class="grid gap-6 pb-4 sm:grid-cols-2">
                        <div class="flex items-center gap-3">
                          <TairoCheckboxAnimated
                            v-model="charsLower"
                            variant="success"
                          />
                          <BaseText
                            class="text-muted-500 dark:text"
                            size="sm"
                          >
                            Lowercase
                          </BaseText>
                        </div>
                        <div class="flex items-center gap-3">
                          <TairoCheckboxAnimated
                            v-model="charsUpper"
                            variant="success"
                          />
                          <BaseText
                            class="text-muted-500 dark:text"
                            size="sm"
                          >
                            Uppercase
                          </BaseText>
                        </div>
                        <div class="flex items-center gap-3">
                          <TairoCheckboxAnimated
                            v-model="charsNumeric"
                            variant="success"
                          />
                          <BaseText
                            class="text-muted-500 dark:text"
                            size="sm"
                          >
                            Numbers
                          </BaseText>
                        </div>
                        <div class="flex items-center gap-3">
                          <TairoCheckboxAnimated
                            v-model="charsSymbols"
                            variant="success"
                          />
                          <BaseText
                            class="text-muted-500 dark:text"
                            size="sm"
                          >
                            Symbols
                          </BaseText>
                        </div>
                      </div>
                    </div>
                    <div
                      class="mt-6 flex flex-col gap-2 sm:flex-row"
                    >
                      <ClientOnly>
                        <BaseButton
                          v-if="isSupported"
                          rounded="md"
                          class="w-full"
                          @click="handleClipboard"
                        >
                          <Icon name="solar:copy-linear" class="size-4" />
                          <span>Copy to Clipboard</span>
                        </BaseButton>
                        <div v-else class="h-12">
                          <BaseText
                            class="text-muted-400"
                            size="sm"
                          >
                            Your browser does not support Clipboard API.
                          </BaseText>
                        </div>
                      </ClientOnly>
                      <BaseButton
                        variant="primary"
                        rounded="md"
                        class="w-full"
                        :disabled="!hasChars"
                        @click="generatePassword()"
                      >
                        <Icon name="solar:restart-circle-linear" class="size-4" />
                        <span>Generate New</span>
                      </BaseButton>
                    </div>
                  </div>
                </BaseAccordionItem>
              </BaseAccordion>
            </div>
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>
