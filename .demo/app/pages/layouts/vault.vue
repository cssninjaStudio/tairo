<script setup lang="ts">
definePageMeta({
  title: 'Vault',
  preview: {
    title: 'Vault',
    description: 'For vault level security',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-vault.png',
    srcDark: '/img/screens/layouts-vault-dark.png',
    order: 37,
    new: true,
  },
})
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20">
    <div class="grid grid-cols-12 gap-6">
      <!-- Content -->
      <div class="col-span-12 lg:col-span-9">
        <div class="w-full">
          <!-- Header -->
          <div class="border-muted-200 dark:border-muted-800 border-b py-6">
            <div
              class="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-start"
            >
              <BaseIconBox
                size="md"
                variant="none"
                rounded="none"
                mask="blob"
                class="bg-primary-500/10 text-primary-500 dark:bg-primary-600/10 dark:text-primary-500"
              >
                <Icon name="solar:shield-check-bold-duotone" class="size-6" />
              </BaseIconBox>
              <div>
                <BaseHeading
                  as="h2"
                  size="2xl"
                  weight="medium"
                  class="text-muted-900 dark:text-white"
                >
                  Certified Vault
                </BaseHeading>
                <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
                  Your vault is properly running and certified.
                </BaseParagraph>
              </div>
              <div
                class="divide-muted-200 dark:divide-muted-800 flex items-center divide-x sm:ms-auto"
              >
                <div class="px-6 text-center sm:text-end">
                  <BaseParagraph
                    size="sm"
                    class="text-muted-400"
                  >
                    FDIC Insurance
                  </BaseParagraph>
                  <BaseParagraph
                    size="md"
                    class="text-muted-900 dark:text-muted-100"
                  >
                    Up to $10M
                  </BaseParagraph>
                </div>
                <div class="px-6 text-center sm:text-end">
                  <BaseParagraph
                    size="sm"
                    class="text-muted-400"
                  >
                    Accounts
                  </BaseParagraph>
                  <BaseParagraph
                    size="md"
                    class="text-muted-900 dark:text-muted-100"
                  >
                    $15,674
                  </BaseParagraph>
                </div>
              </div>
            </div>
          </div>
          <!-- Box -->
          <div class="border-muted-200 dark:border-muted-800 border-b py-6">
            <BaseCard
              rounded="lg"
              class="p-8"
            >
              <div
                class="flex w-full flex-col justify-between sm:flex-row sm:items-center"
              >
                <div class="flex max-w-md flex-col gap-3">
                  <BaseParagraph
                    size="sm"
                    class="text-muted-400"
                  >
                    FDIC Insurance
                  </BaseParagraph>
                  <BaseHeading
                    as="h4"
                    size="lg"
                    weight="medium"
                    class="text-muted-900 dark:text-white"
                  >
                    Your accounts are FDIC insured up to $10M
                  </BaseHeading>
                  <BaseParagraph
                    size="md"
                    class="text-muted-500"
                  >
                    You are protected by the highest level of FDIC insurance
                    currently available
                  </BaseParagraph>
                </div>
                <div
                  class="mt-10 flex flex-col gap-3 sm:mt-0 lg:me-20"
                >
                  <BaseParagraph
                    size="sm"
                    class="text-muted-400"
                  >
                    Checkings/Savings balance
                  </BaseParagraph>
                  <BaseHeading
                    as="h4"
                    size="2xl"
                    weight="medium"
                    class="text-muted-900 dark:text-white"
                  >
                    $15,674
                  </BaseHeading>
                  <BaseTag
                    variant="primary"
                    rounded="lg"
                    class="text-center"
                  >
                    Up to $10M FDIC insured
                  </BaseTag>
                </div>
              </div>
            </BaseCard>
          </div>
          <!-- About -->
          <div class="border-muted-200 dark:border-muted-800 border-b py-6">
            <div class="flex items-center gap-3">
              <div>
                <BaseHeading
                  as="h3"
                  size="xl"
                  weight="medium"
                  class="text-muted-900 mb-2 dark:text-white"
                >
                  About the Vault
                </BaseHeading>
                <BaseParagraph
                  size="md"
                  class="text-muted-500 dark:text-muted-400 mb-2"
                >
                  Your vault helps you manage bank risk and and protect your funds
                  while you scale. Maximize your FDIC insurance coverage and move cash
                  into money market funds composed of short term, US government backed
                  securities when it benefits to you.
                </BaseParagraph>
                <DemoLinkArrow to="#" label="Learn more about it" />
              </div>
            </div>
          </div>
          <!-- About -->
          <div class="border-muted-200 dark:border-muted-800 border-b py-6">
            <DemoWidgetInvest />
          </div>
          <!-- Disclaimer -->
          <div class="py-6">
            <BaseParagraph size="xs" class="text-muted-400">
              Tairo Treasury is offered by Tairo Advisory, LLC, an SEC-registered
              investment adviser. Registration with the SEC does not imply a certain
              level of skill or training. SEC registration does not mean the SEC has
              approved of the services of the investment adviser. This communication
              does not constitute an offer to sell or the solicitation of any offer to
              purchase an interest in any of the Tairo Advisory, LLC investments or
              accounts described herein. All investments are subject to the risk of
              loss, including the loss of principal. No representation is made that
              any investment will or is likely to achieve its objectives or that any
              investor will or is likely to achieve results comparable to those shown.
              Past performance is not indicative, and is no guarantee, of future
              results. Investments made through Tairo Advisory are not covered by
              FDIC but may be covered by SIPC. Some of the data contained in this
              notice was obtained from sources believed to be accurate but has not
              been independently verified. Please see full disclosures at
              Tairo.com/treasury.
            </BaseParagraph>
          </div>
        </div>
      </div>
      <!-- Side widgets -->
      <div class="col-span-12 lg:col-span-3">
        <!-- Column -->
        <div class="relative flex flex-col gap-6">
          <!-- Widget -->
          <DemoActionText
            title="Upgrade to Pro"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid censes in Latino fore? Nam ante Aristippus, et ille melius."
            label="Upgrade Now"
            to="#"
            rounded="md"
          />
          <!-- Widget -->
          <BaseCard rounded="md" class="flex flex-col p-6">
            <div class="mb-6 flex items-center justify-between">
              <BaseHeading
                as="h3"
                size="sm"
                weight="semibold"
                lead="tight"
                class="text-muted-900 dark:text-white"
              >
                <span>Personal Score</span>
              </BaseHeading>
            </div>
            <div class="py-16">
              <DemoChartRadialGaugeAlt class="-mt-14" />
            </div>
            <div class="mt-auto text-center">
              <BaseParagraph size="sm">
                <span class="text-muted-400">
                  Your score has been calculated based on the latest metrics
                </span>
              </BaseParagraph>
            </div>
          </BaseCard>
          <!-- Widget -->
          <BaseCard class="p-6" rounded="md">
            <DemoNotificationsCompact />
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>
