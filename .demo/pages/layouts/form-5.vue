<script setup lang="ts">
import Slider from '@vueform/slider'
import '~/assets/css/slider.css'

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

const toaster = useToaster()

const showPasswordField = ref(false)
const passwordScore = ref(0)
const password = ref('')

const chars = ref({
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numeric: '0123456789',
  symbols: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
})

const charsLength = ref(12)

const charsLower = ref(true)
const charsUpper = ref(true)
const charsNumeric = ref(true)
const charsSymbols = ref(true)

const charsArray = ref<string[]>([])

function checkStrength() {
  if (!password.value) return (passwordScore.value = 0)
  passwordScore.value = 1
}

function generatePassword() {
  if (charsLower) charsArray.value.push(chars.value.lower)
  if (charsUpper) charsArray.value.push(chars.value.upper)
  if (charsNumeric) charsArray.value.push(chars.value.numeric)
  if (charsSymbols) charsArray.value.push(chars.value.symbols)

  password.value = shuffleArray(charsArray.value.join('').split(''))
    .join('')
    .substring(0, charsLength.value)
  checkStrength()
}

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

onMounted(() => {
  generatePassword()
})

const { text, copy, copied, isSupported } = useClipboard({ source: password })
const handleClipboard = () => {
  copy(password.value)
  if (copied) {
    console.log('Text was copied to clipboard!')
    toaster.clearAll()
    toaster.show({
      title: 'Success',
      message: `Password was copied to clipboard!`,
      color: 'success',
      icon: 'ph:check',
      closable: true,
    })
  }
}
</script>

<template>
  <div class="relative py-3 sm:mx-auto sm:max-w-xl">
    <BaseCard shape="curved" class="relative px-4 py-10 sm:p-10 md:mx-0">
      <div class="mx-auto max-w-md">
        <div class="flex items-center gap-4">
          <div
            class="bg-primary-500/20 text-primary-500 flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-sans text-2xl"
          >
            <Icon name="ph:lock-duotone" class="h-5 w-5" />
          </div>
          <div class="text-muted-700 block text-xl font-semibold">
            <BaseHeading
              as="h3"
              size="lg"
              weight="medium"
              class="text-muted-800 dark:text-muted-100"
            >
              New Password
            </BaseHeading>
            <BaseText size="sm" class="text-muted-400"
              >Generate a random password.</BaseText
            >
          </div>
        </div>
        <div class="divide-muted-200 dark:divide-muted-700 divide-y">
          <div class="grid grid-cols-12 gap-4 py-5">
            <div class="col-span-12">
              <BaseParagraph size="sm" class="text-muted-400">
                Change the length value to generate a new random password. You
                can also change the character types.
              </BaseParagraph>
            </div>
          </div>
          <div class="text-muted-800 mx-auto w-full pt-5">
            <div class="relative mb-2">
              <label
                class="text-muted-500 dark:text-muted-400 mb-2 block text-xs font-semibold"
                >Password strength</label
              >
              <BaseInput
                v-model="password"
                :type="showPasswordField ? 'password' : 'text'"
                shape="curved"
                placeholder="Password"
                @input="checkStrength()"
              >
                <template #action>
                  <button
                    class="leading-0 text-muted-400 peer-focus-within:text-primary-500 absolute right-0 top-0 flex h-10 w-10 items-center justify-center text-center text-xl"
                    @click.prevent="showPasswordField = !showPasswordField"
                  >
                    <div
                      class="relative flex h-full w-full items-center justify-center"
                      :data-tooltip="`${
                        showPasswordField ? 'Show' : 'Hide'
                      } password`"
                    >
                      <Icon
                        :name="
                          showPasswordField
                            ? 'mdi:eye-outline'
                            : 'mdi:eye-off-outline'
                        "
                        class="h-5 w-5"
                      />
                    </div>
                  </button>
                </template>
              </BaseInput>
            </div>
            <TairoPasswordStrength :value="password" />
            <hr
              class="border-muted-200 dark:border-muted-700 my-5 h-px border bg-transparent"
            />
            <div class="mb-2">
              <label
                class="text-muted-500 dark:text-muted-400 mb-2 block text-xs font-semibold"
                >Password length</label
              >
              <BaseInput
                type="number"
                v-model="charsLength"
                placeholder="Length"
                shape="curved"
                min="1"
                max="30"
                step="1"
                @input="generatePassword()"
              />
              <div class="w-full py-5">
                <Slider
                  v-model="charsLength"
                  class="rounded-tooltip"
                  :min="1"
                  @change="generatePassword()"
                  :max="30"
                  :step="1"
                />
              </div>
            </div>
            <div>
              <label
                class="text-muted-500 dark:text-muted-400 mb-4 block text-xs font-semibold"
                >Character types</label
              >
              <div class="grid gap-6 pb-4 sm:grid-cols-2">
                <div class="flex items-center gap-3">
                  <BaseCheckboxAnimated
                    v-model="charsLower"
                    color="success"
                    @input="generatePassword()"
                  />
                  <BaseText class="text-muted-500 dark:text" size="sm"
                    >Lowercase</BaseText
                  >
                </div>
                <div class="flex items-center gap-3">
                  <BaseCheckboxAnimated
                    v-model="charsUpper"
                    color="success"
                    @input="generatePassword()"
                  />
                  <BaseText class="text-muted-500 dark:text" size="sm"
                    >Uppercase</BaseText
                  >
                </div>
                <div class="flex items-center gap-3">
                  <BaseCheckboxAnimated
                    v-model="charsNumeric"
                    color="success"
                    @input="generatePassword()"
                  />
                  <BaseText class="text-muted-500 dark:text" size="sm"
                    >Numbers</BaseText
                  >
                </div>
                <div class="flex items-center gap-3">
                  <BaseCheckboxAnimated
                    v-model="charsSymbols"
                    color="success"
                    @input="generatePassword()"
                  />
                  <BaseText class="text-muted-500 dark:text" size="sm"
                    >Symbols</BaseText
                  >
                </div>
              </div>
            </div>
            <div
              v-if="isSupported"
              class="mt-6 flex flex-col gap-2 sm:flex-row"
            >
              <BaseButton
                shape="curved"
                class="!h-12 w-full"
                @click="handleClipboard"
              >
                <Icon name="ph:cards-duotone" class="h-5 w-5" />
                <span>Copy to Clipboard</span>
              </BaseButton>
              <BaseButton
                color="primary"
                shape="curved"
                class="!h-12 w-full"
                @click="generatePassword()"
              >
                <Icon name="ph:arrows-clockwise" class="h-5 w-5" />
                <span>Generate New</span>
              </BaseButton>
            </div>
            <div v-else class="mt-6 flex gap-2">
              <BaseText class="text-muted-400" size="sm"
                >Your browser does not support Clipboard API.</BaseText
              >
            </div>
          </div>
        </div>
      </div>
    </BaseCard>
  </div>
</template>
