<script setup lang="ts">
definePageMeta({
  title: 'Onboarding',
  layout: 'empty',
  preview: {
    title: 'Onboarding 2',
    description: 'For onboarding new users',
    categories: ['layouts', 'onboarding'],
    src: '/img/screens/layouts-onboarding-2.png',
    srcDark: '/img/screens/layouts-onboarding-2-dark.png',
    order: 94,
  },
})

const pricingMode = ref('free')
</script>

<template>
  <div class="bg-muted-100 dark:bg-muted-900 min-h-screen">
    <div
      class="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4"
    >
      <NuxtLink
        to="/"
        class="text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"
      >
        <TairoLogo class="h-10 w-10" />
      </NuxtLink>
      <div class="flex items-center gap-4">
        <BaseThemeToggle />
      </div>
    </div>
    <form
      action=""
      method="POST"
      @submit.prevent
      class="mx-auto max-w-7xl px-4"
    >
      <div>
        <div class="pt-8 text-center">
          <BaseHeading tag="h2" size="3xl" weight="medium" class="mb-2">
            Start your Free Trial
          </BaseHeading>
          <BaseParagraph class="text-muted-500 dark:text-muted-400 mb-8">
            We won't bill you before your 14-day free trial period ends.
          </BaseParagraph>
        </div>

        <div>
          <div class="w-full">
            <div class="mx-auto w-full">
              <div class="w-full">
                <div class="mx-auto mb-8 grid max-w-4xl gap-6 sm:grid-cols-3">
                  <BaseRadioHeadless
                    v-model="pricingMode"
                    name="radio_custom"
                    value="free"
                  >
                    <BaseCard
                      shape="curved"
                      class="peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"
                    >
                      <div class="flex flex-col text-center">
                        <img
                          src="/img/illustrations/onboarding/pricing-1.svg"
                          alt="2 factor authentication with email"
                          class="mx-auto mb-3 max-w-[160px]"
                        />
                        <BaseHeading size="md" weight="medium"
                          >Free</BaseHeading
                        >
                        <BaseParagraph
                          size="xs"
                          lead="snug"
                          class="text-muted-500 dark:text-muted-400"
                        >
                          Start for free with most of our features. Get familiar
                          with it and upgrade when you are ready.
                        </BaseParagraph>
                        <div
                          class="flex items-center justify-center gap-2 pt-4"
                        >
                          <BaseText>
                            <span>$0</span>
                            <span class="text-muted-400 text-xs">
                              /per month</span
                            >
                          </BaseText>
                        </div>
                      </div>
                      <div class="child absolute end-2 top-3 opacity-0">
                        <Icon
                          name="ph:check-circle-duotone"
                          class="text-primary-500 h-7 w-7"
                        />
                      </div>
                    </BaseCard>
                  </BaseRadioHeadless>
                  <BaseRadioHeadless
                    v-model="pricingMode"
                    name="radio_custom"
                    value="starter"
                  >
                    <BaseCard
                      shape="curved"
                      class="peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"
                    >
                      <div class="flex flex-col text-center">
                        <img
                          src="/img/illustrations/onboarding/pricing-2.svg"
                          alt="2 factor authentication with SMS"
                          class="mx-auto mb-3 max-w-[160px]"
                        />
                        <BaseHeading size="md" weight="medium"
                          >Starter</BaseHeading
                        >
                        <BaseParagraph
                          size="xs"
                          lead="snug"
                          class="text-muted-500 dark:text-muted-400"
                        >
                          A more advanced plan with more features and additional
                          storage. Perfect to scale your business.
                        </BaseParagraph>
                        <div
                          class="flex items-center justify-center gap-2 pt-4"
                        >
                          <BaseText>
                            <span>$29</span>
                            <span class="text-muted-400 text-xs">
                              /per month</span
                            >
                          </BaseText>
                        </div>
                      </div>
                      <div class="child absolute end-2 top-3 opacity-0">
                        <Icon
                          name="ph:check-circle-duotone"
                          class="text-primary-500 h-7 w-7"
                        />
                      </div>
                    </BaseCard>
                  </BaseRadioHeadless>
                  <BaseRadioHeadless
                    v-model="pricingMode"
                    name="radio_custom"
                    value="business"
                  >
                    <BaseCard
                      shape="curved"
                      class="peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"
                    >
                      <div class="flex flex-col text-center">
                        <img
                          src="/img/illustrations/onboarding/pricing-3.svg"
                          alt="2 factor authentication with app"
                          class="mx-auto mb-3 max-w-[160px]"
                        />
                        <BaseHeading size="md" weight="medium"
                          >Business</BaseHeading
                        >
                        <BaseParagraph
                          size="xs"
                          lead="snug"
                          class="text-muted-500 dark:text-muted-400"
                        >
                          An all-in-one plan for your business, with everything
                          you need. Perfect for growing at large scale.
                        </BaseParagraph>
                        <div
                          class="flex items-center justify-center gap-2 pt-4"
                        >
                          <BaseText>
                            <span>$49</span>
                            <span class="text-muted-400 text-xs">
                              /per month</span
                            >
                          </BaseText>
                        </div>
                      </div>
                      <div class="child absolute end-2 top-3 opacity-0">
                        <Icon
                          name="ph:check-circle-duotone"
                          class="text-primary-500 h-7 w-7"
                        />
                      </div>
                    </BaseCard>
                  </BaseRadioHeadless>
                </div>
                <div class="mx-auto flex flex-col items-center">
                  <BaseButton
                    to="/dashboards"
                    type="button"
                    shape="curved"
                    class="!h-12 w-48"
                    color="primary"
                    >Confirm</BaseButton
                  >
                  <NuxtLink
                    to="#"
                    class="text-muted-400 hover:text-primary-500 mt-4 text-xs font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                    >Learn More</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
