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
  <form class="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
    <div class="lg:col-span-2">
      <BaseCard>
        <div
          class="border-muted-200 dark:border-muted-700 flex items-center justify-between gap-4 border-b px-8 py-5"
        >
          <div>
            <BaseHeading as="h3" size="sm" weight="medium">
              Payment method
            </BaseHeading>
            <BaseText size="xs" class="text-muted-400"
              >Select a payment method</BaseText
            >
          </div>
          <div class="ms-auto">
            <BaseButtonAction @click.prevent="$router.back()">
              <Icon name="lucide:arrow-left" class="h-3 w-3" />
              <span>Cancel</span>
            </BaseButtonAction>
          </div>
        </div>
        <div>
          <div
            role="button"
            class="flex cursor-pointer items-center px-8 py-5"
            :class="
              selectedMethod === 'paypal'
                ? 'bg-muted-50 dark:bg-muted-900/60'
                : ''
            "
            @click="selectedMethod = 'paypal'"
          >
            <div
              class="dark:border-muted-800 h-4 w-4 rounded-full border-2 border-white ring-2 transition-colors"
              :class="
                selectedMethod === 'paypal'
                  ? 'bg-primary-600 ring-primary-600'
                  : 'ring-muted-400'
              "
            ></div>
            <label class="ms-4 text-sm font-medium">PayPal</label>
          </div>
          <div
            v-if="selectedMethod === 'paypal'"
            class="flex items-center justify-between gap-4 p-8 pt-4"
          >
            <div class="max-w-xs">
              <BaseHeading as="h3" size="md" weight="medium" class="mb-2">
                Pay with PayPal
              </BaseHeading>
              <BaseParagraph size="sm" class="text-muted-400">
                After clicking on "start subscription", you will be redirected
                to PayPal website to complete your purchase securely.
              </BaseParagraph>
            </div>
            <div class="grow">
              <BaseCard
                shape="curved"
                elevated
                class="mx-auto flex max-w-[280px] items-center justify-center px-8 py-16"
              >
                <Icon name="logos:paypal" class="h-12 w-12" />
              </BaseCard>
            </div>
          </div>
        </div>
        <div class="border-muted-200 dark:border-muted-700 border-t">
          <div
            role="button"
            class="flex cursor-pointer items-center px-8 py-5"
            :class="
              selectedMethod === 'cc' ? 'bg-muted-50 dark:bg-muted-900/60' : ''
            "
            @click="selectedMethod = 'cc'"
          >
            <div
              class="dark:border-muted-800 h-4 w-4 rounded-full border-2 border-white ring-2"
              :class="
                selectedMethod === 'cc'
                  ? 'bg-primary-600 ring-primary-600'
                  : 'ring-muted-400'
              "
            ></div>
            <label class="ms-4 text-sm font-medium">Credit Card</label>
          </div>
          <div
            v-if="selectedMethod === 'cc'"
            class="grid grid-cols-2 gap-4 p-8 pt-4"
          >
            <div>
              <form>
                <div class="grid grid-cols-12 gap-4">
                  <div class="col-span-12">
                    <BaseInput
                      v-model="cardInfo.name"
                      label="Name on card"
                      placeholder="ex: John Doe"
                    />
                  </div>
                  <div class="col-span-12">
                    <BaseInput
                      v-model="cardInfo.number"
                      label="Card number"
                      placeholder="ex: 4242 4242 4242 4242"
                    />
                  </div>
                  <div class="col-span-12">
                    <div class="grid gap-4 sm:grid-cols-3">
                      <div>
                        <BaseSelect
                          v-model="cardInfo.expiryMonth"
                          label="Exp. month"
                        >
                          <option value="">Month</option>
                          <option value="01">01</option>
                          <option value="02">02</option>
                          <option value="03">03</option>
                          <option value="04">04</option>
                          <option value="05">05</option>
                          <option value="06">06</option>
                          <option value="07">07</option>
                          <option value="08">08</option>
                          <option value="09">09</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </BaseSelect>
                      </div>
                      <div>
                        <BaseSelect
                          v-model="cardInfo.expiryYear"
                          label="Exp. year"
                        >
                          <option value="">Year</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                          <option value="27">27</option>
                          <option value="28">28</option>
                          <option value="29">29</option>
                          <option value="30">30</option>
                        </BaseSelect>
                      </div>
                      <div>
                        <BaseInput
                          v-model="cardInfo.cvc"
                          label="CVC"
                          placeholder="ex: 239"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="mt-6">
              <DemoCreditCardReal
                :name="cardInfo.name"
                :number="cardInfo.number"
                :expiry-month="cardInfo.expiryMonth"
                :expiry-year="cardInfo.expiryYear"
                :cvc="cardInfo.cvc"
              />
            </div>
          </div>
        </div>
      </BaseCard>
    </div>
    <div>
      <BaseCard class="pb-6">
        <div class="border-muted-200 dark:border-muted-700 border-b px-8 py-5">
          <BaseHeading as="h3" size="sm" weight="medium">
            Order Summary
          </BaseHeading>
          <BaseText size="xs" class="text-muted-400"
            >Check your order details</BaseText
          >
        </div>
        <div class="px-8 pt-5">
          <div class="mb-6">
            <label class="nui-label pb-3 text-[0.825rem]">Billing cycle</label>
            <div class="flex items-center gap-6">
              <BaseRadio
                id="demo-cycle-1"
                v-model="billingCycles"
                name="monthly_billing"
                label="Monthly"
                value="monthly"
                color="primary"
                :classes="{
                  label: 'relative top-0.5 text-xs',
                }"
              />

              <BaseRadio
                id="demo-cycle-2"
                v-model="billingCycles"
                name="yearly_billing"
                label="Yearly"
                value="yearly"
                color="primary"
                :classes="{
                  label: 'relative top-0.5 text-xs',
                }"
              />
            </div>
          </div>
          <div class="flex items-center">
            <BaseHeading as="h3" size="sm" weight="medium" lead="none">
              Fasterio pro plan
            </BaseHeading>
            <div class="ms-auto">
              <BaseText size="sm" class="text-muted-800 dark:text-muted-100">
                <span class="font-semibold">$29.99</span>
                <span class="text-muted-500 dark:text-muted-400 text-xs"
                  >/mo</span
                >
              </BaseText>
            </div>
          </div>
          <BaseText class="text-muted-500 dark:text-muted-400 mt-2 text-xs"
            >Save 20% with annual billing</BaseText
          >
        </div>
        <div class="mt-4 px-8 pb-5">
          <div class="flex items-end justify-between">
            <BaseHeading as="h3" size="sm" weight="medium" lead="none">
              Taxes
            </BaseHeading>
            <BaseText size="sm" class="text-muted-800 dark:text-muted-100">
              <span class="font-semibold">$2.99</span>
            </BaseText>
          </div>
        </div>
        <div
          class="border-muted-200 dark:border-muted-700 mt-4 border-t px-8 pt-5"
        >
          <div class="flex items-end justify-between">
            <BaseHeading as="h3" size="sm" weight="medium" lead="none">
              To pay today (USD)
            </BaseHeading>
            <BaseText size="md" class="text-muted-800 dark:text-muted-100">
              <span class="font-semibold">$0.00</span>
            </BaseText>
          </div>
          <BaseText class="text-muted-500 dark:text-muted-400 mt-2 text-xs"
            >Starting from next month: $29.99/mo.</BaseText
          >
        </div>
        <div class="my-4 flex items-center px-8">
          <BaseCheckbox
            v-model="termsApproval"
            color="primary"
            shape="full"
            label="I agree to the Terms Of Service"
            :classes="{
              label: 'relative top-0.5 text-xs',
            }"
          />
        </div>
        <div class="flex flex-col px-8 pt-4">
          <BaseButton color="primary" class="!h-12 w-full"
            >Start Subscription</BaseButton
          >
        </div>
      </BaseCard>
    </div>
  </form>
</template>
