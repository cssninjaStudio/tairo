<script setup lang="ts">
definePageMeta({
  title: 'Onboarding',
  layout: 'empty',
})

const pricingMode = ref('free')
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
      <div>
        <div class="text-center pt-8">
          <BaseHeading tag="h2" size="3xl" weight="medium" class="mb-2">
            Start your Free Trial
          </BaseHeading>
          <BaseParagraph class="mb-8 text-muted-500 dark:text-muted-400">
            We won't bill you before your 14-day free trial period ends.
          </BaseParagraph>
        </div>

        <div>
          <div class="w-full">
            <div class="w-full mx-auto">
              <div class="w-full">
                <div class="grid sm:grid-cols-3 max-w-4xl mx-auto gap-6 mb-8">
                  <BaseRadioHeadless
                    v-model="pricingMode"
                    name="radio_custom"
                    value="free"
                  >
                    <BaseCard
                      shape="curved"
                      class="relative p-8 border-2 grayscale peer-checked:grayscale-0 opacity-60 peer-checked:opacity-100 peer-checked:!border-primary-500 peer-checked:[&_.child]:!opacity-100"
                    >
                      <div class="flex flex-col text-center">
                        <img
                          src="/img/illustrations/onboarding/pricing-1.svg"
                          alt="2 factor authentication with email"
                          class="max-w-[160px] mx-auto mb-3"
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
                          class="pt-4 flex items-center justify-center gap-2"
                        >
                          <BaseText>
                            <span>$0</span>
                            <span class="text-xs text-muted-400">
                              /per month</span
                            >
                          </BaseText>
                        </div>
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
                    v-model="pricingMode"
                    name="radio_custom"
                    value="starter"
                  >
                    <BaseCard
                      shape="curved"
                      class="relative p-8 border-2 grayscale peer-checked:grayscale-0 opacity-60 peer-checked:opacity-100 peer-checked:!border-primary-500 peer-checked:[&_.child]:!opacity-100"
                    >
                      <div class="flex flex-col text-center">
                        <img
                          src="/img/illustrations/onboarding/pricing-2.svg"
                          alt="2 factor authentication with SMS"
                          class="max-w-[160px] mx-auto mb-3"
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
                          class="pt-4 flex items-center justify-center gap-2"
                        >
                          <BaseText>
                            <span>$29</span>
                            <span class="text-xs text-muted-400">
                              /per month</span
                            >
                          </BaseText>
                        </div>
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
                    v-model="pricingMode"
                    name="radio_custom"
                    value="business"
                  >
                    <BaseCard
                      shape="curved"
                      class="relative p-8 border-2 grayscale peer-checked:grayscale-0 opacity-60 peer-checked:opacity-100 peer-checked:!border-primary-500 peer-checked:[&_.child]:!opacity-100"
                    >
                      <div class="flex flex-col text-center">
                        <img
                          src="/img/illustrations/onboarding/pricing-3.svg"
                          alt="2 factor authentication with app"
                          class="max-w-[160px] mx-auto mb-3"
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
                          class="pt-4 flex items-center justify-center gap-2"
                        >
                          <BaseText>
                            <span>$49</span>
                            <span class="text-xs text-muted-400">
                              /per month</span
                            >
                          </BaseText>
                        </div>
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
                    to="/dashbaords"
                    type="button"
                    shape="curved"
                    class="w-48 !h-12"
                    color="primary"
                    >Confirm</BaseButton
                  >
                  <NuxtLink
                    to="#"
                    class="text-muted-400 hover:text-primary-500 font-medium text-xs underline-offset-4 hover:underline transition-colors duration-300 mt-4"
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
