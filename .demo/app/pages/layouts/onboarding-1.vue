<script setup lang="ts">
definePageMeta({
  title: 'Onboarding',
  layout: 'empty',
  preview: {
    title: 'Onboarding 1',
    description: 'For onboarding new users',
    categories: ['layouts', 'onboarding'],
    src: '/img/screens/layouts-onboarding-1.png',
    srcDark: '/img/screens/layouts-onboarding-1-dark.png',
    order: 93,
  },
})

const loading = ref(false)
const twoFaMode = ref('email_address')
const currentStep = ref(1)
const codeLength = ref(4)
const input = ref<string[]>([])
const inputElements = useTemplateRef<HTMLInputElement[]>('inputElements')
const correctPin = '1234'
const onlyCheckOnLastFieldInput = ref(true)

const email = ref('')
const tel = ref('')
const code = ref('')

const validatePin = computed(() => {
  return input.value?.join('') === correctPin
})

function goToStep(n: number) {
  loading.value = true
  const timer = setTimeout(() => {
    loading.value = false
    if (n < 1) {
      currentStep.value = 1
    }
    else if (n > 3) {
      currentStep.value = 3
    }
    else {
      currentStep.value = n
    }
    clearTimeout(timer)
  }, 1000)
}
</script>

<template>
  <div class="bg-muted-100 dark:bg-muted-900 min-h-screen dark:[--color-input-default-bg:var(--color-muted-950)]">
    <div
      class="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4"
    >
      <NuxtLink
        to="/"
        class="text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"
      >
        <TairoLogo class="size-10" />
      </NuxtLink>
      <div class="flex items-center gap-4">
        <BaseThemeToggle />
      </div>
    </div>
    <form
      action=""
      method="POST"
      class="mx-auto max-w-7xl px-4"
      @submit.prevent
    >
      <div v-if="currentStep === 1">
        <div class="pt-8 text-center">
          <BaseHeading
            tag="h2"
            size="2xl"
            weight="medium"
            class="mb-2 text-muted-900 dark:text-white"
          >
            Welcome to Tairo 👋
          </BaseHeading>
          <BaseParagraph class="text-muted-500 dark:text-muted-400 mb-8">
            Select an option to enable 2 factor authentication
          </BaseParagraph>
        </div>

        <div>
          <div class="w-full">
            <div class="mx-auto w-full">
              <div class="w-full">
                <BaseRadioGroup v-model="twoFaMode" class="mx-auto mb-8 grid max-w-4xl gap-6 sm:grid-cols-3">
                  <TairoRadioCard rounded="md" value="email_address">
                    <div class="p-2">
                      <img
                        src="/img/illustrations/onboarding/2fa-web.svg"
                        alt="2 factor authentication with email"
                        class="mx-auto max-w-[160px] grayscale-100 group-hover:grayscale-0 group-data-[state=checked]:grayscale-0 transition-all duration-200"
                      >
                      <BaseHeading
                        size="md"
                        weight="medium"
                        class="text-muted-900 dark:text-muted-100"
                      >
                        With Email
                      </BaseHeading>
                      <BaseParagraph
                        size="xs"
                        lead="snug"
                        class="text-muted-500 dark:text-muted-400"
                      >
                        We will send you a confirmation code to your email
                        address
                      </BaseParagraph>
                    </div>
                  </TairoRadioCard>
                  <TairoRadioCard rounded="md" value="phone_number">
                    <div class="p-2">
                      <img
                        src="/img/illustrations/onboarding/2fa-sms.svg"
                        alt="2 factor authentication with SMS"
                        class="mx-auto max-w-[160px] grayscale-100 group-hover:grayscale-0 group-data-[state=checked]:grayscale-0 transition-all duration-200"
                      >
                      <BaseHeading
                        size="md"
                        weight="medium"
                        class="text-muted-900 dark:text-muted-100"
                      >
                        With SMS
                      </BaseHeading>
                      <BaseParagraph
                        size="xs"
                        lead="snug"
                        class="text-muted-500 dark:text-muted-400"
                      >
                        We will send you an SMS with the code on your mobile
                        phone
                      </BaseParagraph>
                    </div>
                  </TairoRadioCard>
                  <TairoRadioCard rounded="md" value="app_id">
                    <div class="p-2">
                      <img
                        src="/img/illustrations/onboarding/2fa-app.svg"
                        alt="2 factor authentication with app"
                        class="mx-auto max-w-[160px] grayscale-100 group-hover:grayscale-0 group-data-[state=checked]:grayscale-0 transition-all duration-200"
                      >
                      <BaseHeading
                        size="md"
                        weight="medium"
                        class="text-muted-900 dark:text-muted-100"
                      >
                        With an App
                      </BaseHeading>
                      <BaseParagraph
                        size="xs"
                        lead="snug"
                        class="text-muted-500 dark:text-muted-400"
                      >
                        We will send you the code on your
                        <NuxtLink
                          to="https://authy.com/"
                          class="text-primary-500 underline-offset-4 hover:underline"
                        >
                          Authy
                        </NuxtLink>
                        authenticator app
                      </BaseParagraph>
                    </div>
                  </TairoRadioCard>
                </BaseRadioGroup>
                <div class="mx-auto flex flex-col items-center">
                  <BaseButton
                    type="button"
                    rounded="lg"
                    class="h-12! w-48"
                    variant="primary"
                    :loading="loading"
                    @click="goToStep(2)"
                  >
                    Continue
                  </BaseButton>
                  <NuxtLink
                    to="/dashboards"
                    class="text-muted-400 hover:text-primary-500 mt-4 text-xs font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                  >
                    No thanks, I want to skip
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="currentStep === 2" class="w-full">
        <div class="flex size-full flex-col">
          <div
            class="pointer-events-none flex w-full items-center justify-center pt-8"
          >
            <BaseIconBox
              variant="none"
              size="md"
              rounded="full"
              class="mx-auto bg-primary-500/20 dark:bg-primary-500/20"
            >
              <Icon
                v-if="twoFaMode === 'email_address'"
                name="solar:letter-linear"
                class="text-primary-500 mx-auto size-6"
              />
              <Icon
                v-else-if="twoFaMode === 'phone_number'"
                name="solar:phone-rounded-linear"
                class="text-primary-500 mx-auto size-6"
              />
              <Icon
                v-else-if="twoFaMode === 'app_id'"
                name="solar:sidebar-minimalistic-linear"
                class="text-primary-500 mx-auto size-6"
              />
            </BaseIconBox>
          </div>
          <div class="pt-4 text-center">
            <BaseHeading
              tag="h2"
              size="3xl"
              weight="medium"
              class="mb-1 text-muted-900 dark:text-muted-100"
            >
              Enter your {{ twoFaMode.split('_').join(' ') }}
            </BaseHeading>
            <BaseParagraph class="text-muted-500 dark:text-muted-400">
              Enter the required information to continue
            </BaseParagraph>
          </div>

          <div class="mx-auto w-full max-w-sm py-6">
            <TairoInput
              v-if="twoFaMode === 'email_address'"
              v-model="email"
              icon="solar:letter-linear"
              rounded="lg"
              type="email"
              placeholder="Ex: johndoe@gmail.com"
            />
            <TairoInput
              v-else-if="twoFaMode === 'phone_number'"
              v-model="tel"
              icon="solar:phone-rounded-linear"
              rounded="lg"
              type="tel"
              placeholder="Ex: +15554815659"
            />
            <div v-else-if="twoFaMode === 'app_id'" class="space-y-4">
              <div class="flex items-center gap-2">
                <Icon name="logos:authy" class="size-6" />
                <div>
                  <BaseText
                    size="sm"
                    class="text-muted-500 dark:text-muted-400"
                  >
                    Only
                    <NuxtLink
                      to="https://authy.com/"
                      class="text-primary-500 underline-offset-4 hover:underline"
                    >
                      Authy
                    </NuxtLink>
                    is supported so far
                  </BaseText>
                </div>
              </div>
              <TairoInput
                v-model="code"
                icon="solar:sidebar-minimalistic-linear"
                rounded="lg"
                placeholder="Ex: efcdwdeg16jei85"
              />
            </div>
          </div>
          <div class="mx-auto flex flex-col items-center">
            <BaseButton
              type="button"
              rounded="lg"
              class="h-12! w-48"
              variant="primary"
              :loading="loading"
              @click="goToStep(3)"
            >
              Continue
            </BaseButton>
            <button
              type="button"
              class="text-muted-400 hover:text-primary-500 mt-4 text-xs font-medium underline-offset-4 transition-colors duration-300 hover:underline"
              @click="goToStep(1)"
            >
              I want to change, take me back
            </button>
          </div>
        </div>
      </div>
      <div v-else-if="currentStep === 3">
        <div class="mx-auto max-w-4xl">
          <div class="flex size-full flex-col">
            <div
              class="pointer-events-none flex w-full items-center justify-center pt-8"
            >
              <div class="flex h-16 items-center justify-center">
                <TairoCheckAnimated v-if="validatePin" size="sm" />
                <BaseIconBox
                  v-else
                  variant="none"
                  size="md"
                  rounded="full"
                  class="mx-auto bg-primary-500/20 dark:bg-primary-500/20"
                >
                  <Icon
                    name="solar:lock-password-linear"
                    class="text-primary-500 mx-auto size-6"
                  />
                </BaseIconBox>
              </div>
            </div>
            <div class="pt-4 mb-6 text-center">
              <BaseHeading
                tag="h2"
                size="3xl"
                weight="medium"
                class="mb-1"
              >
                Enter your code
              </BaseHeading>
              <BaseParagraph class="text-muted-500 dark:text-muted-400 mb-2">
                Enter the pin code we've just sent you
              </BaseParagraph>
              <BaseText
                size="xs"
                lead="snug"
                class="text-muted-500 dark:text-muted-400 mb-8"
              >
                <span class="block">
                  <span class="font-bold">1234</span> is the demo PIN.
                </span>
              </BaseText>
            </div>
            <div
              class="text-muted-800 dark:text-muted-100 mx-auto flex h-60 w-72 flex-col rounded-sm text-center"
            >
              <PinInputRoot
                v-model="input"
                type="number"
                otp
                class="flex w-full justify-center gap-3"
                :disabled="validatePin"
                placeholder="0"
              >
                <PinInputInput
                  v-for="(i, idx) in codeLength"
                  :key="i"
                  :index="idx"
                  class="dark:bg-muted-950 focus-visible:nui-focus inline w-16 select-none border border-muted-200 dark:border-muted-800 rounded-lg bg-white py-5 text-center text-4xl font-bold transition-all placeholder:text-muted-300 dark:placeholder:text-muted-700"
                />
              </PinInputRoot>
              <div class="mt-10">
                <BaseButton
                  to="/dashboards"
                  rounded="lg"
                  class="h-12!"
                  :variant="validatePin ? 'primary' : 'default'"
                  :disabled="!validatePin"
                >
                  Take me to Dashboard
                </BaseButton>

                <div class="mt-8 flex items-center justify-between">
                  <BaseText
                    size="sm"
                    class="text-muted-400"
                  >
                    Didn't receive the code?
                  </BaseText>
                  <button
                    type="button"
                    class="text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                  >
                    Send it again
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
