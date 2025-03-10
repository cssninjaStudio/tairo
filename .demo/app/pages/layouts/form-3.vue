<script setup lang="ts">
definePageMeta({
  title: 'Checkout',
  preview: {
    title: 'Form layout 3',
    description: 'For forms and input fields',
    categories: ['layouts', 'forms'],
    src: '/img/screens/layouts-form-3.png',
    srcDark: '/img/screens/layouts-form-3-dark.png',
    order: 49,
  },
})

const cardInfo = ref({
  name: undefined,
  number: undefined,
  expiryYear: undefined,
  expiryMonth: undefined,
  cvc: undefined,
})

const selectedMethod = ref('cc')
const billingCycles = ref('monthly')
const termsApproval = ref(false)
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20">
    <div class="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div class="lg:col-span-2">
        <BaseCard rounded="md">
          <div
            class="border-muted-200 dark:border-muted-800 flex items-center justify-between gap-4 border-b px-8 py-5"
          >
            <div>
              <BaseHeading
                as="h3"
                size="sm"
                weight="medium"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                Payment method
              </BaseHeading>
              <BaseText
                size="xs"
                class="text-muted-600 dark:text-muted-400"
              >
                Select a payment method
              </BaseText>
            </div>
            <div class="ms-auto">
              <BaseButton @click.prevent="$router.back()">
                <Icon name="lucide:arrow-left" class="size-3" />
                <span>Cancel</span>
              </BaseButton>
            </div>
          </div>
          <div>
            <div
              role="button"
              tabindex="0"
              class="flex cursor-pointer items-center px-8 py-5"
              :class="
                selectedMethod === 'paypal'
                  ? 'bg-muted-50 dark:bg-muted-900/60'
                  : ''
              "
              @click="selectedMethod = 'paypal'"
            >
              <div
                class="dark:border-muted-900 size-4 rounded-full border-2 border-white ring-2 transition-colors"
                :class="
                  selectedMethod === 'paypal'
                    ? 'bg-primary-600 ring-primary-600'
                    : 'ring-muted-400'
                "
              />
              <label class="ms-4 text-sm font-medium">PayPal</label>
            </div>
            <div
              v-if="selectedMethod === 'paypal'"
              class="flex items-center justify-between gap-4 p-8 pt-4"
            >
              <div class="max-w-xs">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="medium"
                  class="mb-2 text-muted-900 dark:text-white"
                >
                  Pay with PayPal
                </BaseHeading>
                <BaseParagraph size="sm" class="text-muted-600 dark:text-muted-400">
                  After clicking on "start subscription", you will be redirected
                  to PayPal website to complete your purchase securely.
                </BaseParagraph>
              </div>
              <div class="grow">
                <BaseCard
                  rounded="lg"
                  elevated
                  class="mx-auto flex max-w-[280px] items-center justify-center px-8 py-16"
                >
                  <Icon name="logos:paypal" class="size-12" />
                </BaseCard>
              </div>
            </div>
          </div>
          <div class="border-muted-200 dark:border-muted-800 border-t">
            <div
              role="button"
              tabindex="0"
              class="flex cursor-pointer items-center px-8 py-5"
              :class="
                selectedMethod === 'cc' ? 'bg-muted-50 dark:bg-muted-900/60' : ''
              "
              @click="selectedMethod = 'cc'"
            >
              <div
                class="dark:border-muted-800 size-4 rounded-full border-2 border-white ring-2"
                :class="
                  selectedMethod === 'cc'
                    ? 'bg-primary-600 ring-primary-600'
                    : 'ring-muted-400'
                "
              />
              <label class="ms-4 text-sm font-medium">Credit Card</label>
            </div>
            <div
              v-if="selectedMethod === 'cc'"
              class="grid grid-cols-2 gap-4 p-8 pt-4"
            >
              <div>
                <form>
                  <div class="grid grid-cols-12 gap-4">
                    <BaseField v-slot="{ inputAttrs, inputRef }" label="Name on card" class="col-span-12">
                      <BaseInput
                        :ref="inputRef"
                        v-bind="inputAttrs"
                        v-model="cardInfo.name"
                        placeholder="ex: John Doe"
                      />
                    </BaseField>
                    <BaseField v-slot="{ inputAttrs, inputRef }" label="Card number" class="col-span-12">
                      <BaseInput
                        :ref="inputRef"
                        v-bind="inputAttrs"
                        v-model="cardInfo.number"
                        placeholder="ex: 4242 4242 4242 4242"
                      />
                    </BaseField>
                    <div class="col-span-12">
                      <div class="grid gap-4 sm:grid-cols-3">
                        <BaseField v-slot="{ inputAttrs, inputRef }" label="Exp. month">
                          <BaseSelect
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            v-model="cardInfo.expiryMonth"
                            placeholder="Month"
                          >
                            <BaseSelectItem value="01">
                              01
                            </BaseSelectItem>
                            <BaseSelectItem value="02">
                              02
                            </BaseSelectItem>
                            <BaseSelectItem value="03">
                              03
                            </BaseSelectItem>
                            <BaseSelectItem value="04">
                              04
                            </BaseSelectItem>
                            <BaseSelectItem value="05">
                              05
                            </BaseSelectItem>
                            <BaseSelectItem value="06">
                              06
                            </BaseSelectItem>
                            <BaseSelectItem value="07">
                              07
                            </BaseSelectItem>
                            <BaseSelectItem value="08">
                              08
                            </BaseSelectItem>
                            <BaseSelectItem value="09">
                              09
                            </BaseSelectItem>
                            <BaseSelectItem value="10">
                              10
                            </BaseSelectItem>
                            <BaseSelectItem value="11">
                              11
                            </BaseSelectItem>
                            <BaseSelectItem value="12">
                              12
                            </BaseSelectItem>
                          </BaseSelect>
                        </BaseField>
                        <BaseField v-slot="{ inputAttrs, inputRef }" label="Exp. year">
                          <BaseSelect
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            v-model="cardInfo.expiryYear"
                            placeholder="Year"
                          >
                            <BaseSelectItem value="23">
                              23
                            </BaseSelectItem>
                            <BaseSelectItem value="24">
                              24
                            </BaseSelectItem>
                            <BaseSelectItem value="25">
                              25
                            </BaseSelectItem>
                            <BaseSelectItem value="26">
                              26
                            </BaseSelectItem>
                            <BaseSelectItem value="27">
                              27
                            </BaseSelectItem>
                            <BaseSelectItem value="28">
                              28
                            </BaseSelectItem>
                            <BaseSelectItem value="29">
                              29
                            </BaseSelectItem>
                            <BaseSelectItem value="30">
                              30
                            </BaseSelectItem>
                          </BaseSelect>
                        </BaseField>
                        <BaseField v-slot="{ inputAttrs, inputRef }" label="CVC">
                          <BaseInput
                            :ref="inputRef"
                            v-bind="inputAttrs"
                            v-model="cardInfo.cvc"
                            placeholder="ex: 239"
                          />
                        </BaseField>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <DemoCreditCardReal
                :name="cardInfo.name"
                :number="cardInfo.number"
                :expiry-month="cardInfo.expiryMonth"
                :expiry-year="cardInfo.expiryYear"
                :cvc="cardInfo.cvc"
                class="mt-6"
              />
            </div>
          </div>
        </BaseCard>
      </div>
      <div>
        <BaseCard rounded="md" class="pb-6">
          <div class="border-muted-200 dark:border-muted-800 border-b px-8 py-5">
            <BaseHeading
              as="h3"
              size="sm"
              weight="medium"
              class="text-muted-900 dark:text-white"
              lead="tight"
            >
              Order Summary
            </BaseHeading>
            <BaseText
              size="xs"
              class="text-muted-600 dark:text-muted-400"
            >
              Check your order details
            </BaseText>
          </div>
          <div class="px-8 pt-5">
            <div class="mb-6">
              <label class="nui-label block pb-3 font-medium text-[0.825rem]">Billing cycle</label>
              <BaseRadioGroup v-model="billingCycles" class="flex items-center gap-6">
                <BaseRadio
                  label="Monthly"
                  value="monthly"
                  variant="default"
                />
                <BaseRadio
                  label="Yearly"
                  value="yearly"
                  variant="default"
                />
              </BaseRadioGroup>
            </div>
            <div class="flex items-center">
              <BaseHeading
                as="h3"
                size="sm"
                weight="medium"
                lead="none"
                class="text-muted-900 dark:text-white"
              >
                Fasterio pro plan
              </BaseHeading>
              <div class="ms-auto">
                <BaseText size="sm" class="text-muted-900 dark:text-muted-100 space-x-1">
                  <span class="font-semibold">$29.99</span>
                  <span class="text-muted-600 dark:text-muted-400 text-xs">/mo</span>
                </BaseText>
              </div>
            </div>
            <BaseText class="text-muted-600 dark:text-muted-400 mt-2 text-xs">
              Save 20% with annual billing
            </BaseText>
          </div>
          <div class="mt-4 px-8 pb-5">
            <div class="flex items-end justify-between">
              <BaseHeading
                as="h3"
                size="sm"
                weight="medium"
                lead="none"
                class="text-muted-900 dark:text-white"
              >
                Taxes
              </BaseHeading>
              <BaseText size="sm" class="text-muted-900 dark:text-muted-100">
                <span class="font-semibold">$2.99</span>
              </BaseText>
            </div>
          </div>
          <div
            class="border-muted-200 dark:border-muted-800 mt-4 border-t px-8 pt-5"
          >
            <div class="flex items-end justify-between">
              <BaseHeading
                as="h3"
                size="sm"
                weight="medium"
                lead="none"
                class="text-muted-900 dark:text-white"
              >
                To pay today (USD)
              </BaseHeading>
              <BaseText size="md" class="text-muted-900 dark:text-muted-100">
                <span class="font-semibold">$0.00</span>
              </BaseText>
            </div>
            <BaseText class="text-muted-600 dark:text-muted-400 mt-2 text-xs">
              Starting from next month: $29.99/mo.
            </BaseText>
          </div>
          <div class="my-4 flex items-center px-8">
            <BaseCheckbox
              v-model="termsApproval"
              variant="default"
              label="I agree to the Terms Of Service"
            />
          </div>
          <div class="flex flex-col px-8 pt-4">
            <BaseButton
              variant="primary"
              rounded="md"
              class="w-full"
            >
              Start Subscription
            </BaseButton>
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>
