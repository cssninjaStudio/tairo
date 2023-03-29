<script setup lang="ts">
definePageMeta({
  title: 'Onboarding',
  layout: 'empty',
})

const loading = ref(false)
const twoFaMode = ref('email_address')
const currentStep = ref(1)
const codeLength = ref(4)
const input = ref<number[]>([])
const inputElements = ref<any[]>([])
const correctPin = ref('1234')
const onlyCheckOnLastFieldInput = ref(true)

function goToStep(n: number) {
  loading.value = true
  const timer = setTimeout(() => {
    loading.value = false
    if (n < 1) {
      currentStep.value = 1
    } else if (n > 3) {
      currentStep.value = 3
    } else {
      currentStep.value = n
    }
    clearTimeout(timer)
  }, 1000)
}

function paste(event: any) {
  // raw pasted input
  let pasted = event.clipboardData.getData('text')
  // only get numbers
  pasted = pasted.replace(/\D/g, '')
  // don't get more than the PIN codeLength
  pasted = pasted.substring(0, codeLength.value)
  // if after all that sanitazation the string is not empty
  if (pasted) {
    // split the pasted string into an array and load it
    input.value = pasted.split('')
    // check if the PIN is correct
    return validatePin.value
  }
}
function type(event: any, index: any) {
  if (event.ctrlKey && event.key == 'v') {
    console.log('ctrl-v')
  } else if (event.keyCode == 8) {
    event.stopPropagation()
    event.preventDefault()
    input.value[index - 1] = 0
  } else {
    // only allow numbers
    let key = event.key.replace(/\D/g, '')
    if (key != '') {
      console.log(key)
      input.value[index - 1] = key
    }
  }
  // check if the PIN is correct
  if (
    (onlyCheckOnLastFieldInput.value && index == codeLength.value) ||
    !onlyCheckOnLastFieldInput.value
  ) {
    return validatePin.value
  }
  // go to the next field
  // must happen on nextTick cause the field can be disabled.
  nextTick(() => {
    goto(index + 1)
  })
}

function goto(n: any) {
  if (!n || n > codeLength.value) {
    n = 1
  }
  inputElements.value[n].focus()
}

const validatePin = computed(() => {
  return input.value.join('') == correctPin.value
})
</script>

<template>
  <div class="min-h-screen bg-muted-100 dark:bg-muted-900">
    <div
      class="h-16 w-full max-w-7xl mx-auto px-4 flex items-center justify-between"
    >
      <NuxtLink
        to="/"
        class="text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"
      >
        <TairoLogo class="w-10 h-10" />
      </NuxtLink>
      <div class="flex items-center gap-4">
        <BaseThemeToggle />
      </div>
    </div>
    <form
      action=""
      method="POST"
      @submit.prevent
      class="max-w-7xl mx-auto px-4"
    >
      <div v-if="currentStep === 1">
        <div class="text-center pt-8">
          <BaseHeading tag="h2" size="3xl" weight="medium" class="mb-2">
            Welcome to Tairo 👋
          </BaseHeading>
          <BaseParagraph class="mb-8 text-muted-500 dark:text-muted-400">
            Select an option to enable 2 factor authentication
          </BaseParagraph>
        </div>

        <div>
          <div class="w-full">
            <div class="w-full mx-auto">
              <div class="w-full">
                <div class="grid sm:grid-cols-3 max-w-4xl mx-auto gap-6 mb-8">
                  <BaseRadioHeadless
                    v-model="twoFaMode"
                    name="radio_custom"
                    value="email_address"
                  >
                    <BaseCard
                      shape="curved"
                      class="relative p-8 border-2 grayscale peer-checked:grayscale-0 opacity-60 peer-checked:opacity-100 peer-checked:!border-primary-500 peer-checked:[&_.child]:!opacity-100"
                    >
                      <div class="flex flex-col text-center">
                        <img
                          src="/img/illustrations/onboarding/2fa-web.svg"
                          alt="2 factor authentication with email"
                          class="max-w-[160px] mx-auto"
                        />
                        <BaseHeading size="md" weight="medium"
                          >With Email</BaseHeading
                        >
                        <BaseParagraph
                          size="xs"
                          lead="snug"
                          class="text-muted-500 dark:text-muted-400"
                        >
                          We will send you a confirmation code to your email
                          address
                        </BaseParagraph>
                      </div>
                      <div class="child absolute top-3 right-2 opacity-0">
                        <Icon
                          name="ph:check-circle-duotone"
                          class="w-7 h-7 text-primary-500"
                        />
                      </div>
                    </BaseCard>
                  </BaseRadioHeadless>
                  <BaseRadioHeadless
                    v-model="twoFaMode"
                    name="radio_custom"
                    value="phone_number"
                  >
                    <BaseCard
                      shape="curved"
                      class="relative p-8 border-2 grayscale peer-checked:grayscale-0 opacity-60 peer-checked:opacity-100 peer-checked:!border-primary-500 peer-checked:[&_.child]:!opacity-100"
                    >
                      <div class="flex flex-col text-center">
                        <img
                          src="/img/illustrations/onboarding/2fa-sms.svg"
                          alt="2 factor authentication with SMS"
                          class="max-w-[160px] mx-auto"
                        />
                        <BaseHeading size="md" weight="medium"
                          >With SMS</BaseHeading
                        >
                        <BaseParagraph
                          size="xs"
                          lead="snug"
                          class="text-muted-500 dark:text-muted-400"
                        >
                          We will send you an SMS with the code on your mobile
                          phone
                        </BaseParagraph>
                      </div>
                      <div class="child absolute top-3 right-2 opacity-0">
                        <Icon
                          name="ph:check-circle-duotone"
                          class="w-7 h-7 text-primary-500"
                        />
                      </div>
                    </BaseCard>
                  </BaseRadioHeadless>
                  <BaseRadioHeadless
                    v-model="twoFaMode"
                    name="radio_custom"
                    value="app_id"
                  >
                    <BaseCard
                      shape="curved"
                      class="relative p-8 border-2 grayscale peer-checked:grayscale-0 opacity-60 peer-checked:opacity-100 peer-checked:!border-primary-500 peer-checked:[&_.child]:!opacity-100"
                    >
                      <div class="flex flex-col text-center">
                        <img
                          src="/img/illustrations/onboarding/2fa-app.svg"
                          alt="2 factor authentication with app"
                          class="max-w-[160px] mx-auto"
                        />
                        <BaseHeading size="md" weight="medium"
                          >With an App</BaseHeading
                        >
                        <BaseParagraph
                          size="xs"
                          lead="snug"
                          class="text-muted-500 dark:text-muted-400"
                        >
                          We will send you the code on your
                          <NuxtLink
                            to="https://authy.com/"
                            class="text-primary-500 underline-offset-4 hover:underline"
                            >Authy</NuxtLink
                          >
                          authenticator app
                        </BaseParagraph>
                      </div>
                      <div class="child absolute top-3 right-2 opacity-0">
                        <Icon
                          name="ph:check-circle-duotone"
                          class="w-7 h-7 text-primary-500"
                        />
                      </div>
                    </BaseCard>
                  </BaseRadioHeadless>
                </div>
                <div class="flex flex-col items-center mx-auto">
                  <BaseButton
                    type="button"
                    shape="curved"
                    class="w-48 !h-12"
                    color="primary"
                    :loading="loading"
                    @click="goToStep(2)"
                    >Continue</BaseButton
                  >
                  <NuxtLink
                    to="/"
                    class="text-muted-400 hover:text-primary-500 font-medium text-xs underline-offset-4 hover:underline transition-colors duration-300 mt-4"
                    >No thanks, I want to skip</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="currentStep === 2" class="w-full">
        <div class="flex flex-col w-full h-full">
          <div
            class="w-full flex items-center justify-center pointer-events-none pt-8"
          >
            <BaseIconBox color="primary" size="lg" shape="full" class="mx-auto">
              <Icon
                v-if="twoFaMode === 'email_address'"
                name="ph:envelope-duotone"
                class="w-8 h-8 mx-auto text-primary-500"
              />
              <Icon
                v-else-if="twoFaMode === 'phone_number'"
                name="ph:device-mobile-speaker-duotone"
                class="w-8 h-8 mx-auto text-primary-500"
              />
              <Icon
                v-else-if="twoFaMode === 'app_id'"
                name="ph:fingerprint-duotone"
                class="w-8 h-8 mx-auto text-primary-500"
              />
            </BaseIconBox>
          </div>
          <div class="text-center pt-4">
            <BaseHeading tag="h2" size="3xl" weight="medium" class="mb-1">
              Enter your {{ twoFaMode.split('_').join(' ') }}
            </BaseHeading>
            <BaseParagraph class="text-muted-500 dark:text-muted-400">
              Enter the required information to continue
            </BaseParagraph>
          </div>

          <div class="py-6 w-full max-w-sm mx-auto">
            <BaseInput
              v-if="twoFaMode === 'email_address'"
              icon="ph:envelope-duotone"
              shape="curved"
              placeholder="Ex: johndoe@gmail.com"
              :classes="{
                wrapper: 'w-full',
                input: '!h-12 !pl-12',
                icon: '!h-12 !w-12',
              }"
            />
            <BaseInput
              v-else-if="twoFaMode === 'phone_number'"
              icon="ph:device-mobile-speaker-duotone"
              shape="curved"
              placeholder="Ex: +15554815659"
              :classes="{
                wrapper: 'w-full',
                input: '!h-12 !pl-12',
                icon: '!h-12 !w-12',
              }"
            />
            <div v-else-if="twoFaMode === 'app_id'" class="space-y-4">
              <div class="flex items-center gap-2">
                <Icon name="logos:authy" class="w-6 h-6" />
                <div>
                  <BaseText size="sm" class="text-muted-500 dark:text-muted-400"
                    >Only
                    <NuxtLink
                      to="https://authy.com/"
                      class="text-primary-500 underline-offset-4 hover:underline"
                      >Authy</NuxtLink
                    >
                    is supported so far</BaseText
                  >
                </div>
              </div>
              <BaseInput
                icon="ph:fingerprint-duotone"
                shape="curved"
                placeholder="Ex: efcdwdeg16jei85"
                :classes="{
                  wrapper: 'w-full',
                  input: '!h-12 !pl-12',
                  icon: '!h-12 !w-12',
                }"
              />
            </div>
          </div>
          <div class="flex flex-col items-center mx-auto">
            <BaseButton
              type="button"
              shape="curved"
              class="w-48 !h-12"
              color="primary"
              :loading="loading"
              @click="goToStep(3)"
              >Continue</BaseButton
            >
            <button
              type="button"
              class="text-muted-400 hover:text-primary-500 font-medium text-xs underline-offset-4 hover:underline transition-colors duration-300 mt-4"
              @click="goToStep(1)"
            >
              I want to change, take me back
            </button>
          </div>
        </div>
      </div>
      <div v-else-if="currentStep === 3">
        <div class="max-w-4xl mx-auto">
          <div class="flex flex-col w-full h-full">
            <div
              class="w-full flex items-center justify-center pointer-events-none pt-8"
            >
              <div class="flex h-16 items-center justify-center">
                <TairoCheckAnimated v-if="validatePin" size="sm" />
                <BaseIconBox
                  v-else
                  color="primary"
                  size="lg"
                  shape="full"
                  class="mx-auto"
                >
                  <Icon
                    name="ph:lock-duotone"
                    class="w-8 h-8 mx-auto text-primary-500"
                  />
                </BaseIconBox>
              </div>
            </div>
            <div class="text-center pt-4">
              <BaseHeading tag="h2" size="3xl" weight="medium" class="mb-1">
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
              class="flex flex-col w-72 h-60 text-muted-800 dark:text-muted-100 text-center mx-auto rounded"
            >
              <div
                class="w-full flex justify-center gap-3"
                :class="validatePin && 'pointer-events-none'"
              >
                <template v-for="i in codeLength">
                  <input
                    type="text"
                    :name="'pin' + i"
                    maxlength="1"
                    class="bg-white dark:bg-muted-800 py-5 text-4xl unselectable font-bold rounded-lg inline w-16 text-center select-none nui-focus transition-all"
                    @paste.prevent="paste($event)"
                    @keydown="type($event, i)"
                    @keydown.ctrl.a.prevent
                    @mousemove.prevent.stop
                    @keydown.arrow-right.prevent="goto(i + 1)"
                    @keydown.arrow-left.prevent="goto(i - 1)"
                    :value="input[i - 1] != null ? input[i - 1] : 0"
                    :ref="
                      (el) => {
                        inputElements[i] = el
                      }
                    "
                    placeholder="0"
                    :disabled="input.length < i - 1 || validatePin"
                    :autofocus="i == 1"
                  />
                </template>
              </div>
              <div class="mt-10">
                <BaseButton
                  to="/dashboards"
                  shape="curved"
                  class="!h-12"
                  :color="validatePin ? 'primary' : 'default'"
                  :disabled="!validatePin"
                  >Take me to Dashboard</BaseButton
                >

                <div class="flex items-center justify-between mt-8">
                  <BaseText size="sm" class="text-muted-400"
                    >Didn't receive the code?</BaseText
                  >
                  <button
                    type="button"
                    class="font-sans text-sm text-primary-500 underline-offset-4 hover:underline"
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
