<script setup lang="ts">
definePageMeta({
  title: 'SaaS Billing',
  preview: {
    title: 'SaaS billing',
    description: 'For saas billing plans',
    categories: ['layouts'],
    src: '/img/screens/layouts-subpages-billing.png',
    srcDark: '/img/screens/layouts-subpages-billing-dark.png',
    order: 84,
  },
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
  return plans.find(plan => plan.name === customRadio.value)
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

  return ''
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
  <div class="px-4 md:px-6 lg:px-8 pb-20">
    <form
      action=""
      method="POST"
      class="w-full"
      @submit.prevent
    >
      <!-- Header -->
      <div class="mb-8 flex flex-col justify-between md:flex-row md:items-center">
        <div
          class="flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-start lg:max-w-full"
        >
          <BaseAvatar src="/img/avatars/10.svg" size="lg" />
          <div>
            <BaseHeading
              as="h2"
              size="xl"
              weight="medium"
              lead="tight"
              class="text-muted-900 dark:text-white"
            >
              <span>Manage plan</span>
            </BaseHeading>
            <BaseParagraph size="sm">
              <span class="text-muted-600 dark:text-muted-400">
                Manage your plan and billing information
              </span>
            </BaseParagraph>
          </div>
        </div>
        <div
          class="mt-4 flex items-center justify-center gap-2 md:mt-0 md:justify-start"
        >
          <BaseButton type="submit" variant="primary">
            <span>Save for</span>
            <span class="font-semibold">${{ selectedPlan?.price.monthly }}</span>
            <span>/month</span>
          </BaseButton>
        </div>
      </div>
      <!-- plans -->
      <div
        class="mb-4 grid gap-4 md:grid-cols-2"
      >
        <BaseRadioGroup v-model="customRadio" class="grid grid-cols-2 gap-4">
          <TairoRadioCard
            value="starter"
            class="data-[state=checked]:ring-success-500! data-[state=checked]:border-success-500!"
          >
            <template #indicator>
              <div class="flex size-7 items-center justify-center rounded-full text-success-500 group-data-[state=unchecked]:opacity-0">
                <Icon name="solar:check-circle-bold-duotone" class="size-6" />
              </div>
            </template>
            <TairoLogo class="mx-auto mb-2 size-9 group-data-[state=checked]:text-success-500" />
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-white"
            >
              Starter
            </BaseHeading>
            <BaseText
              size="xs"
              lead="tight"
              class="text-muted-400"
            >
              A basic plan made for quickstarts
            </BaseText>
          </TairoRadioCard>
          <TairoRadioCard
            value="freelancer"
            class="data-[state=checked]:ring-yellow-400! data-[state=checked]:border-yellow-400!"
          >
            <template #indicator>
              <div class="flex size-7 items-center justify-center rounded-full text-yellow-500 group-data-[state=unchecked]:opacity-0">
                <Icon name="solar:check-circle-bold-duotone" class="size-6" />
              </div>
            </template>
            <TairoLogo class="mx-auto mb-2 size-9 group-data-[state=checked]:text-yellow-400" />
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-white"
            >
              Freelancer
            </BaseHeading>
            <BaseText
              size="xs"
              lead="tight"
              class="text-muted-400"
            >
              A plan for heavy working freelancers
            </BaseText>
          </TairoRadioCard>
          <TairoRadioCard
            value="business"
            class="data-[state=checked]:ring-indigo-500! data-[state=checked]:border-indigo-500!"
          >
            <template #indicator>
              <div class="flex size-7 items-center justify-center rounded-full text-indigo-500 group-data-[state=unchecked]:opacity-0">
                <Icon name="solar:check-circle-bold-duotone" class="size-6" />
              </div>
            </template>
            <TairoLogo class="mx-auto mb-2 size-9 group-data-[state=checked]:text-indigo-500" />
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-white"
            >
              Business
            </BaseHeading>
            <BaseText
              size="xs"
              lead="tight"
              class="text-muted-400"
            >
              An affordable medium business plan
            </BaseText>
          </TairoRadioCard>
          <TairoRadioCard
            value="enterprise"
            class="data-[state=checked]:ring-primary-500! data-[state=checked]:border-primary-500!"
          >
            <template #indicator>
              <div class="flex size-7 items-center justify-center rounded-full text-primary-500 group-data-[state=unchecked]:opacity-0">
                <Icon name="solar:check-circle-bold-duotone" class="size-6" />
              </div>
            </template>
            <TairoLogo class="mx-auto mb-2 size-9 group-data-[state=checked]:text-primary-500" />
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-white"
            >
              Enterprise
            </BaseHeading>
            <BaseText
              size="xs"
              lead="tight"
              class="text-muted-400"
            >
              A corporate and full fledged company plan
            </BaseText>
          </TairoRadioCard>
        </BaseRadioGroup>
        <div>
          <BaseCard rounded="md" class="flex h-full flex-col p-4 md:p-6">
            <div class="flex gap-12">
              <TairoLogo class="size-12 shrink-0" :class="planColor" />
              <div>
                <BaseText
                  size="xl"
                  lead="tight"
                  weight="semibold"
                >
                  ${{ selectedPlan?.price.monthly }}
                  <span class="text-sm text-muted-400 font-normal">/per month</span>
                </BaseText>
                <BaseText
                  size="xs"
                  lead="tight"
                  class="mb-2"
                  :class="planColor"
                >
                  Billed ${{ selectedPlan?.price.yearly }} yearly
                </BaseText>
                <BaseParagraph
                  size="xs"
                  class="text-muted-500 dark:text-muted-400"
                >
                  {{ selectedPlan?.description }}
                </BaseParagraph>
              </div>
            </div>
            <div class="my-8">
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
            <div class="grid grid-cols-2 gap-4 font-sans text-xs">
              <div>
                <ul>
                  <li
                    v-for="item in selectedPlan?.features"
                    :key="item"
                    class="flex items-center gap-2"
                    :class="planColor"
                  >
                    <Icon name="lucide:check" class="size-3 text-current" />
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
                    <Icon name="lucide:check" class="size-3 text-current" />
                    <span class="text-muted-400">{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
      <!-- Controls -->
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 sm:col-span-6 lg:col-span-7">
          <div class="flex flex-col gap-4">
            <BaseCard rounded="md" class="p-4 md:p-6">
              <div class="mb-4 flex items-center justify-between">
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="medium"
                >
                  Used seats
                </BaseHeading>
                <div>
                  <BaseText
                    size="xs"
                    lead="tight"
                    class="text-muted-400"
                  >
                    6/8 remaining
                  </BaseText>
                </div>
              </div>
              <div
                class="flex items-center gap-2 lg:justify-between"
              >
                <div
                  class="flex items-center gap-2"
                >
                  <BaseTooltip content="Maya R.">
                    <BaseAvatar
                      src="/img/avatars/2.svg"
                      size="sm"
                    />
                  </BaseTooltip>
                  <BaseTooltip content="Kendra W.">
                    <BaseAvatar
                      src="/img/avatars/10.svg"
                      size="sm"
                    />
                  </BaseTooltip>
                  <BaseTooltip content="Oliver D.">
                    <BaseAvatar
                      size="sm"
                      text="OD"
                      :class="getRandomColor()"
                    />
                  </BaseTooltip>
                  <BaseTooltip content="Hermann M.">
                    <BaseAvatar
                      src="/img/avatars/16.svg"
                      size="sm"
                    />
                  </BaseTooltip>
                  <BaseTooltip content="Matteus C.">
                    <BaseAvatar
                      size="sm"
                      text="MC"
                      :class="getRandomColor()"
                    />
                  </BaseTooltip>
                  <BaseTooltip content="Gorav M.">
                    <BaseAvatar
                      size="sm"
                      text="GM"
                      :class="getRandomColor()"
                    />
                  </BaseTooltip>
                </div>
                <div>
                  <BaseTooltip content="Manage plan seats">
                    <button
                      type="button"
                      class="flex items-center justify-center border-muted-200 dark:border-muted-800 hover:border-primary-500 dark:hover:border-primary-500 text-muted-400 dark:text-muted-600 hover:text-primary-500 dark:hover:text-primary-500 size-10 rounded-full border-2 border-dashed transition-all duration-300 hover:border-solid"
                    >
                      <Icon name="solar:pen-2-linear" class="size-4" />
                    </button>
                  </BaseTooltip>
                </div>
              </div>
            </BaseCard>
            <BaseCard rounded="md" class="p-4 md:p-6">
              <div class="mb-8 flex items-center justify-between">
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="semibold"
                >
                  Billing options
                </BaseHeading>
                <div>
                  <BaseText
                    size="xs"
                    lead="tight"
                    class="text-muted-400"
                  />
                </div>
              </div>
              <div class="space-y-6">
                <BaseSwitchBall
                  id="billing-ball-1"
                  :model-value="false"
                  label="Invoicing"
                  sublabel="Send new invoices to my inbox"
                  variant="primary"
                />
                <BaseSwitchBall
                  id="billing-ball-2"
                  :model-value="true"
                  label="Warnings"
                  sublabel="Warn me before the end of the billing period"
                  variant="primary"
                />
                <BaseSwitchBall
                  id="billing-ball-3"
                  :model-value="true"
                  label="Reports"
                  sublabel="Send monthly reports to my inbox"
                  variant="primary"
                />
              </div>
            </BaseCard>
            <BaseCard rounded="md" class="p-4 md:p-6">
              <div class="mb-8 flex items-center justify-between">
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="semibold"
                >
                  Billing cycle
                </BaseHeading>
                <div>
                  <NuxtLink
                    class="text-primary-500 font-sans text-xs underline underline-offset-4"
                  >
                    My invoices
                  </NuxtLink>
                </div>
              </div>
              <BaseRadioGroup v-model="billingCycles" class="flex items-center gap-6">
                <BaseRadio
                  label="Monthly"
                  value="monthly"
                />
                <BaseRadio
                  label="Semestral"
                  value="semestral"
                />
                <BaseRadio
                  label="Yearly"
                  value="yearly"
                />
              </BaseRadioGroup>
            </BaseCard>
          </div>
        </div>
        <div class="col-span-12 sm:col-span-6 lg:col-span-5">
          <BaseCard rounded="md" class="p-4 md:p-6">
            <div class="mb-4">
              <BaseHeading
                as="h4"
                size="sm"
                weight="semibold"
              >
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
                  <BaseInput
                    v-model="cardInfo.name"
                    label="Name on card"
                    placeholder="ex: John Doe"
                    class="col-span-12"
                  />
                  <BaseInput
                    v-model="cardInfo.number"
                    label="Card number"
                    placeholder="ex: 4242 4242 4242 4242"
                    class="col-span-12"
                  />
                  <div class="col-span-12">
                    <div class="grid gap-4 sm:grid-cols-3">
                      <BaseSelect
                        v-model="cardInfo.expiryMonth"
                        label="Exp. month"
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
                      <BaseSelect
                        v-model="cardInfo.expiryYear"
                        label="Exp. month"
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
                      <BaseInput
                        v-model="cardInfo.cvc"
                        label="CVC"
                        placeholder="ex: 239"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </BaseCard>
        </div>
      </div>
      <TairoFormSave>
        <BaseButton
          type="submit"
          variant="primary"
          class="w-full"
        >
          <span>Save for</span>
          <span class="font-semibold">${{ selectedPlan?.price.monthly }}</span>
          <span>/month</span>
        </BaseButton>
      </TairoFormSave>
    </form>
  </div>
</template>
