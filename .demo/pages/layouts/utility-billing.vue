<script setup lang="ts">
definePageMeta({
  title: 'SaaS Billing',
})

const customRadio = ref('enterprise')

const plans = [
  {
    name: 'starter',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utilitatis causa amicitia est quaesita.',
    price: {
      monthly: 9,
      yearly: 99,
    },
    features: ['3 seats', '20 projects', '20GB storage'],
    benefits: [
      'Free 1 year support',
      'Free 1 year updates',
      'Free 1 year hosting',
    ],
  },
  {
    name: 'freelancer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utilitatis causa amicitia est quaesita.',
    price: {
      monthly: 19,
      yearly: 199,
    },
    features: ['8 seats', '150 projects', '100GB storage'],
    benefits: ['1 year support', '1 year updates', '1 year hosting'],
  },
  {
    name: 'business',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utilitatis causa amicitia est quaesita.',
    price: {
      monthly: 29,
      yearly: 299,
    },
    features: ['20 seats', 'Unlimited projects', '500GB storage'],
    benefits: ['1 year support', '1 year updates', '1 year hosting'],
  },
  {
    name: 'enterprise',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utilitatis causa amicitia est quaesita.',
    price: {
      monthly: 49,
      yearly: 399,
    },
    features: ['40 seats', 'Unlimited projects', 'Unlimited storage'],
    benefits: ['1 year support', '1 year updates', '1 year hosting'],
  },
]

const selectedPlan = computed(() => {
  return plans.find((plan) => plan.name === customRadio.value)
})

const planColor = computed(() => {
  switch (customRadio.value) {
    case 'starter':
      return 'text-success-500'
    case 'freelancer':
      return 'text-yellow-400'
    case 'business':
      return 'text-indigo-500'
    case 'enterprise':
      return 'text-primary-500'
  }
})

const cardInfo = ref({
  name: undefined,
  number: undefined,
  expiryYear: undefined,
  expiryMonth: undefined,
  cvc: undefined,
})

const billingCycles = ref('monthly')
</script>

<template>
  <div class="w-full max-w-4xl mx-auto">
    <!-- plans -->
    <div
      class="dark:border-muted-800 mb-10 grid gap-4 border-b border-gray-200 pb-10 md:grid-cols-2 xl:gap-8"
    >
      <div class="grid grid-cols-2 gap-2 xl:gap-6">
        <BaseRadioHeadless
          v-model="customRadio"
          name="radio_custom"
          value="starter"
        >
          <BaseCard
            shape="rounded"
            class="group relative p-6 text-center text-muted-400/50 peer-checked:!border-success-500 peer-checked:text-success-500 peer-checked:[&_.child]:!opacity-100"
          >
            <div
              class="child opacity-0 absolute top-3 right-3 h-7 w-7 flex items-center justify-center rounded-full border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800"
            >
              <Icon name="lucide:check" class="h-3 w-3 text-current" />
            </div>
            <TairoLogo class="h-9 w-9 mx-auto" />
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-white"
            >
              Starter
            </BaseHeading>
            <BaseText size="xs" lead="tight" class="text-muted-400"
              >A basic plan made for quickstarts</BaseText
            >
          </BaseCard>
        </BaseRadioHeadless>
        <BaseRadioHeadless
          v-model="customRadio"
          name="radio_custom"
          value="freelancer"
        >
          <BaseCard
            shape="rounded"
            class="group relative p-6 text-center text-muted-400/50 peer-checked:!border-yellow-400 peer-checked:text-yellow-400 peer-checked:[&_.child]:!opacity-100"
          >
            <div
              class="child opacity-0 absolute top-3 right-3 h-7 w-7 flex items-center justify-center rounded-full border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800"
            >
              <Icon name="lucide:check" class="h-3 w-3 text-current" />
            </div>
            <TairoLogo class="h-9 w-9 mx-auto" />
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-white"
            >
              Freelancer
            </BaseHeading>
            <BaseText size="xs" lead="tight" class="text-muted-400"
              >A plan for heavy working freelancers</BaseText
            >
          </BaseCard>
        </BaseRadioHeadless>
        <BaseRadioHeadless
          v-model="customRadio"
          name="radio_custom"
          value="business"
        >
          <BaseCard
            shape="rounded"
            class="group relative p-6 text-center text-muted-400/50 peer-checked:!border-indigo-500 peer-checked:text-indigo-500 peer-checked:[&_.child]:!opacity-100"
          >
            <div
              class="child opacity-0 absolute top-3 right-3 h-7 w-7 flex items-center justify-center rounded-full border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800"
            >
              <Icon name="lucide:check" class="h-3 w-3 text-current" />
            </div>
            <TairoLogo class="h-9 w-9 mx-auto" />
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-white"
            >
              Business
            </BaseHeading>
            <BaseText size="xs" lead="tight" class="text-muted-400"
              >An affordable medium business plan</BaseText
            >
          </BaseCard>
        </BaseRadioHeadless>
        <BaseRadioHeadless
          v-model="customRadio"
          name="radio_custom"
          value="enterprise"
        >
          <BaseCard
            shape="rounded"
            class="group relative p-6 text-center text-muted-400/50 peer-checked:!border-primary-500 peer-checked:text-primary-500 peer-checked:[&_.child]:!opacity-100"
          >
            <div
              class="child opacity-0 absolute top-3 right-3 h-7 w-7 flex items-center justify-center rounded-full border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800"
            >
              <Icon name="lucide:check" class="h-3 w-3 text-current" />
            </div>
            <TairoLogo class="h-9 w-9 mx-auto" />
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-white"
            >
              Enterprise
            </BaseHeading>
            <BaseText size="xs" lead="tight" class="text-muted-400"
              >A corporate and full fledged company plan</BaseText
            >
          </BaseCard>
        </BaseRadioHeadless>
      </div>
      <div>
        <BaseCard shape="rounded" class="p-8">
          <div class="flex gap-12">
            <TairoLogo class="h-12 w-12 shrink-0" :class="planColor" />
            <div>
              <BaseText size="md" lead="tight" weight="semibold"
                >${{ selectedPlan?.price.monthly }}
                <span class="font-normal text-muted-400"
                  >/per month</span
                ></BaseText
              >
              <BaseText size="xs" lead="tight" class="mb-2" :class="planColor"
                >Billed ${{ selectedPlan?.price.yearly }} yearly</BaseText
              >
              <BaseParagraph
                size="xs"
                class="text-muted-500 dark:text-muted-400"
              >
                {{ selectedPlan?.description }}
              </BaseParagraph>
            </div>
          </div>
          <div class="my-4">
            <BaseParagraph
              size="sm"
              lead="tight"
              class="text-muted-500 dark:text-muted-400"
            >
              Tairo has incredible features and each plan perfectly adapts to
              your company, wether it is a small business or a bigger one. Tairo
              can also scale smoothly with you, as your business grows.
            </BaseParagraph>
          </div>
          <div class="grid grid-cols-2 gap-6 font-sans text-xs">
            <div>
              <ul>
                <li
                  v-for="item in selectedPlan?.features"
                  :key="item"
                  class="flex items-center gap-2"
                  :class="planColor"
                >
                  <Icon name="lucide:check" class="h-3 w-3 text-current" />
                  <span class="text-muted-400">{{ item }}</span>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li
                  v-for="item in selectedPlan?.benefits"
                  :key="item"
                  class="flex items-center gap-2"
                  :class="planColor"
                >
                  <Icon name="lucide:check" class="h-3 w-3 text-current" />
                  <span class="text-muted-400">{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
    <!-- Controls -->
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 sm:col-span-6 ltablet:col-span-7 lg:col-span-7">
        <div class="flex flex-col gap-6">
          <BaseCard class="p-6">
            <div class="flex items-center justify-between mb-4">
              <BaseHeading as="h4" size="sm" weight="semibold">
                Used seats
              </BaseHeading>
              <div>
                <BaseText size="xs" lead="tight" class="text-muted-400"
                  >6/8 remaining</BaseText
                >
              </div>
            </div>
            <div
              class="flex items-center xs:flex-wrap ptablet:flex-wrap ltablet:justify-between lg:justify-between gap-2"
            >
              <div
                class="flex items-center xs:flex-wrap ptablet:flex-wrap gap-2"
              >
                <BaseAvatar
                  src="/img/avatars/2.svg"
                  size="sm"
                  tooltip="Maya R."
                />
                <BaseAvatar
                  src="/img/avatars/10.svg"
                  size="sm"
                  tooltip="Kendra W."
                />
                <BaseAvatar
                  size="sm"
                  text="OD"
                  tooltip="Oliver D."
                  :class="getRandomColor()"
                />
                <BaseAvatar
                  src="/img/avatars/16.svg"
                  size="sm"
                  tooltip="Hermann M."
                />
                <BaseAvatar
                  size="sm"
                  text="MC"
                  tooltip="Matteus C."
                  :class="getRandomColor()"
                />
                <BaseAvatar
                  size="sm"
                  text="GM"
                  tooltip="Gorav M."
                  :class="getRandomColor()"
                />
              </div>
              <div>
                <button
                  type="button"
                  class="h-10 w-10 rounded-full border-2 border-dashed border-muted-200 dark:border-muted-700 hover:border-solid hover:border-primary-500 dark:hover:border-primary-500 text-muted-400 dark:text-muted-600 hover:text-primary-500 dark:hover:text-primary-500 transition-all duration-300"
                  tooltip="Manage plan seats"
                >
                  <Icon name="lucide:edit-3" class="h-4 w-4" />
                </button>
              </div>
            </div>
          </BaseCard>
          <BaseCard class="p-6">
            <div class="flex items-center justify-between mb-8">
              <BaseHeading as="h4" size="sm" weight="semibold">
                Billing options
              </BaseHeading>
              <div>
                <BaseText
                  size="xs"
                  lead="tight"
                  class="text-muted-400"
                ></BaseText>
              </div>
            </div>
            <div class="space-y-6">
              <BaseSwitchBall
                id="billing-ball-1"
                :checked="false"
                label="Invoicing"
                sublabel="Send new invoices to my inbox"
                color="primary"
              />
              <BaseSwitchBall
                id="billing-ball-2"
                :checked="true"
                label="Warnings"
                sublabel="Warn me before the end of the billing period"
                color="primary"
              />
              <BaseSwitchBall
                id="billing-ball-3"
                :checked="true"
                label="Reports"
                sublabel="Send monthly reports to my inbox"
                color="primary"
              />
            </div>
          </BaseCard>
          <BaseCard class="p-6">
            <div class="flex items-center justify-between mb-8">
              <BaseHeading as="h4" size="sm" weight="semibold">
                Billing cycle
              </BaseHeading>
              <div>
                <NuxtLink
                  class="font-sans text-xs text-primary-500 underline-offset-4 underline"
                  >My invoices</NuxtLink
                >
              </div>
            </div>
            <div class="flex items-center gap-6">
              <BaseRadio
                id="demo-cycle-1"
                v-model="billingCycles"
                name="monthly_billing"
                label="Monthly"
                value="monthly"
                color="primary"
              />

              <BaseRadio
                id="demo-cycle-2"
                v-model="billingCycles"
                name="semestral_billing"
                label="Semestral"
                value="semestral"
                color="primary"
              />

              <BaseRadio
                id="demo-cycle-3"
                v-model="billingCycles"
                name="yearly_billing"
                label="Yearly"
                value="yearly"
                color="primary"
              />
            </div>
          </BaseCard>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 ltablet:col-span-5 lg:col-span-5">
        <BaseCard class="p-6">
          <div class="mb-4">
            <BaseHeading as="h4" size="sm" weight="semibold">
              Payment information
            </BaseHeading>
          </div>
          <DemoCreditCardReal
            :name="cardInfo.name"
            :number="cardInfo.number"
            :expiry-month="cardInfo.expiryMonth"
            :expiry-year="cardInfo.expiryMonth"
            :cvc="cardInfo.cvc"
          />
          <div class="mt-5">
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
                  <div class="grid sm:grid-cols-3 gap-4">
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
                        label="Exp. month"
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
                <div class="col-span-12">
                  <BaseButton type="submit" class="w-full" color="primary"
                    >Save Card Info</BaseButton
                  >
                </div>
              </div>
            </form>
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>
