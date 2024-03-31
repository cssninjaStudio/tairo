<script setup lang="ts">
definePageMeta({
  title: 'Quickview',
  preview: {
    title: 'Quickview',
    description: 'For personal use and tracking',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-quickviews.png',
    srcDark: '/img/screens/dashboards-quickviews-dark.png',
    order: 5,
    new: true,
  },
})
</script>

<template>
  <div class="pb-20 pt-6">
    <div class="grid grid-cols-12 gap-6">
      <div class="ltablet:col-span-8 col-span-12 lg:col-span-8">
        <div class="grid grid-cols-12 gap-6">
          <!--Card column-->
          <div class="col-span-12 sm:col-span-6">
            <div class="mb-6 flex items-center justify-between">
              <BaseHeading
                weight="medium"
                class="text-muted-800 dark:text-muted-100"
              >
                Your card
              </BaseHeading>
            </div>
            <!--Card-->
            <div class="rounded-2xl py-2">
              <DemoCreditCardReal
                status="active"
                name="Maya Rosselini"
                number="•••• •••• •••• 4479"
                brand="mastercard"
                :centered="false"
                contrast="high"
              />
            </div>
          </div>
          <!--Upcoming column-->
          <div class="col-span-12 sm:col-span-6">
            <div class="flex h-full flex-col">
              <div class="mb-6 flex items-center justify-between">
                <BaseHeading
                  weight="medium"
                  class="text-muted-800 dark:text-muted-100"
                >
                  Incoming payments
                </BaseHeading>
              </div>
              <div class="flex grow gap-6">
                <!--Item-->
                <NuxtLink
                  to="/layouts/payments"
                  class="bg-muted-200 hover:bg-muted-50 dark:bg-muted-800 dark:hover:bg-muted-800/40 flex h-full flex-1 flex-col rounded-2xl p-6 transition-colors duration-200"
                >
                  <BaseIconBox
                    size="md"
                    class="dark:bg-muted-800 mb-4 bg-white"
                    rounded="md"
                  >
                    <Icon name="logos:campaignmonitor-icon" class="size-6" />
                  </BaseIconBox>
                  <div class="mb-8">
                    <BaseHeading
                      weight="medium"
                      size="sm"
                      class="text-mute-800 dark:text-muted-100 line-clamp-1"
                    >
                      Campaign Monitor
                    </BaseHeading>
                    <BaseParagraph
                      size="xs"
                      class="text-muted-400"
                    >
                      Incoming
                    </BaseParagraph>
                  </div>
                  <div class="mt-auto">
                    <BaseText
                      size="lg"
                      weight="semibold"
                      lead="none"
                      class="text-muted-800 dark:text-muted-100"
                    >
                      {{ asDollar(1234.15) }}
                    </BaseText>
                  </div>
                </NuxtLink>
                <!--Item-->
                <NuxtLink
                  to="/layouts/payments"
                  class="bg-muted-200 hover:bg-muted-50 dark:bg-muted-800 dark:hover:bg-muted-800/40 flex h-full flex-1 flex-col rounded-2xl p-6 transition-colors duration-200"
                >
                  <BaseIconBox
                    size="md"
                    class="dark:bg-muted-800 mb-4 bg-white"
                    rounded="md"
                  >
                    <Icon name="logos:asana-icon" class="size-6" />
                  </BaseIconBox>
                  <div class="mb-8">
                    <BaseHeading
                      weight="medium"
                      size="sm"
                      class="text-mute-800 dark:text-muted-100 line-clamp-1"
                    >
                      Asana
                    </BaseHeading>
                    <BaseParagraph
                      size="xs"
                      class="text-muted-400"
                    >
                      Outgoing
                    </BaseParagraph>
                  </div>
                  <div class="mt-auto">
                    <BaseText
                      size="lg"
                      weight="semibold"
                      lead="none"
                      class="text-muted-800 dark:text-muted-100"
                    >
                      {{ asDollar(249.99) }}
                    </BaseText>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <!--Transactions column-->
          <div class="col-span-12">
            <BaseCard rounded="md" class="p-6">
              <div class="mb-6 flex items-center justify-between">
                <BaseHeading
                  weight="medium"
                  class="text-muted-800 dark:text-muted-100"
                >
                  Recent Activity
                </BaseHeading>
                <DemoLinkArrow to="/layouts" label="View all" />
              </div>
              <div class="space-y-6">
                <!--Item-->
                <div class="flex items-center gap-3">
                  <div
                    class="dark:bg-muted-900 border-muted-200 dark:border-muted-800 flex size-12 shrink-0 items-center justify-center rounded-xl border bg-white"
                  >
                    <Icon
                      name="ph:credit-card-duotone"
                      class="text-muted-800 dark:text-muted-100 size-5"
                    />
                  </div>
                  <div class="w-2/5">
                    <BaseHeading
                      weight="medium"
                      size="sm"
                      class="text-mute-800 dark:text-muted-100"
                    >
                      Victoria's Corner
                    </BaseHeading>
                    <BaseParagraph
                      size="xs"
                      class="text-muted-400"
                    >
                      Outgoing payment
                    </BaseParagraph>
                  </div>
                  <div class="hidden px-8 sm:block">
                    <BaseText
                      size="sm"
                      weight="medium"
                      lead="none"
                      class="text-muted-400"
                    >
                      Jun 12, 2024
                    </BaseText>
                  </div>
                  <div class="ms-auto">
                    <BaseText
                      size="sm"
                      weight="semibold"
                      lead="none"
                      class="text-muted-800 dark:text-muted-100"
                    >
                      - {{ asDollar(938.39) }}
                    </BaseText>
                  </div>
                </div>
                <!--Item-->
                <div class="flex items-center gap-3">
                  <div
                    class="dark:bg-muted-900 border-muted-200 dark:border-muted-800 flex size-12 shrink-0 items-center justify-center rounded-xl border bg-white"
                  >
                    <Icon
                      name="ph:bank-duotone"
                      class="text-muted-800 dark:text-muted-100 size-5"
                    />
                  </div>
                  <div class="w-2/5">
                    <BaseHeading
                      weight="medium"
                      size="sm"
                      class="text-mute-800 dark:text-muted-100"
                    >
                      John Rowland
                    </BaseHeading>
                    <BaseParagraph
                      size="xs"
                      class="text-muted-400"
                    >
                      Outgoing payment
                    </BaseParagraph>
                  </div>
                  <div class="hidden px-8 sm:block">
                    <BaseText
                      size="sm"
                      weight="medium"
                      lead="none"
                      class="text-muted-400"
                    >
                      Jun 11, 2024
                    </BaseText>
                  </div>
                  <div class="ms-auto">
                    <BaseText
                      size="sm"
                      weight="semibold"
                      lead="none"
                      class="text-muted-800 dark:text-muted-100"
                    >
                      - {{ asDollar(1234.15) }}
                    </BaseText>
                  </div>
                </div>
                <!--Item-->
                <div class="flex items-center gap-3">
                  <div
                    class="dark:bg-muted-900 border-muted-200 dark:border-muted-800 flex size-12 shrink-0 items-center justify-center rounded-xl border bg-white"
                  >
                    <Icon
                      name="ph:credit-card-duotone"
                      class="text-muted-800 dark:text-muted-100 size-5"
                    />
                  </div>
                  <div class="w-2/5">
                    <BaseHeading
                      weight="medium"
                      size="sm"
                      class="text-mute-800 dark:text-muted-100"
                    >
                      Kali Burger
                    </BaseHeading>
                    <BaseParagraph
                      size="xs"
                      class="text-muted-400"
                    >
                      Outgoing payment
                    </BaseParagraph>
                  </div>
                  <div class="hidden px-8 sm:block">
                    <BaseText
                      size="sm"
                      weight="medium"
                      lead="none"
                      class="text-muted-400"
                    >
                      Jun 9, 2024
                    </BaseText>
                  </div>
                  <div class="ms-auto">
                    <BaseText
                      size="sm"
                      weight="semibold"
                      lead="none"
                      class="text-muted-800 dark:text-muted-100"
                    >
                      - {{ asDollar(23.69) }}
                    </BaseText>
                  </div>
                </div>
                <!--Item-->
                <div class="flex items-center gap-3">
                  <div
                    class="dark:bg-muted-900 border-muted-200 dark:border-muted-800 flex size-12 shrink-0 items-center justify-center rounded-xl border bg-white"
                  >
                    <Icon
                      name="ph:bank-duotone"
                      class="text-muted-800 dark:text-muted-100 size-5"
                    />
                  </div>
                  <div class="w-2/5">
                    <BaseHeading
                      weight="medium"
                      size="sm"
                      class="text-mute-800 dark:text-muted-100"
                    >
                      Railway Inc
                    </BaseHeading>
                    <BaseParagraph
                      size="xs"
                      class="text-muted-400"
                    >
                      Ingoing payment
                    </BaseParagraph>
                  </div>
                  <div class="hidden px-8 sm:block">
                    <BaseText
                      size="sm"
                      weight="medium"
                      lead="none"
                      class="text-muted-400"
                    >
                      Jun 8, 2024
                    </BaseText>
                  </div>
                  <div class="ms-auto">
                    <BaseText
                      size="sm"
                      weight="semibold"
                      lead="none"
                      class="text-muted-800 dark:text-muted-100"
                    >
                      + {{ asDollar(2399.99) }}
                    </BaseText>
                  </div>
                </div>
                <!--Item-->
                <div class="flex items-center gap-3">
                  <div
                    class="dark:bg-muted-900 border-muted-200 dark:border-muted-800 flex size-12 shrink-0 items-center justify-center rounded-xl border bg-white"
                  >
                    <Icon
                      name="ph:credit-card-duotone"
                      class="text-muted-800 dark:text-muted-100 size-5"
                    />
                  </div>
                  <div class="w-2/5">
                    <BaseHeading
                      weight="medium"
                      size="sm"
                      class="text-mute-800 dark:text-muted-100"
                    >
                      Mobihouse
                    </BaseHeading>
                    <BaseParagraph
                      size="xs"
                      class="text-muted-400"
                    >
                      Outgoing payment
                    </BaseParagraph>
                  </div>
                  <div class="hidden px-8 sm:block">
                    <BaseText
                      size="sm"
                      weight="medium"
                      lead="none"
                      class="text-muted-400"
                    >
                      Jun 6, 2024
                    </BaseText>
                  </div>
                  <div class="ms-auto">
                    <BaseText
                      size="sm"
                      weight="semibold"
                      lead="none"
                      class="text-muted-800 dark:text-muted-100"
                    >
                      - {{ asDollar(49.99) }}
                    </BaseText>
                  </div>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
      <div class="ltablet:col-span-4 col-span-12 lg:col-span-4">
        <div class="bg-muted-200 dark:bg-muted-800 rounded-xl p-6">
          <div>
            <BaseParagraph
              size="xs"
              class="text-muted-400"
            >
              Spent today
            </BaseParagraph>
            <BaseHeading
              weight="semibold"
              size="3xl"
              class="text-muted-800 dark:text-muted-100"
            >
              {{ asDollar(687.22) }}
            </BaseHeading>
          </div>
          <div class="pb-6">
            <div>
              <DemoChartAreaBalance />
            </div>
          </div>
          <div class="flex flex-col gap-6">
            <!--Account-->
            <NuxtLink
              to="/layouts/accounts"
              class="bg-muted-100 dark:bg-muted-900 dark:hover:bg-muted-900/50 flex items-center rounded-xl p-6 transition-colors duration-300 hover:bg-white"
            >
              <BaseText
                size="sm"
                weight="semibold"
                lead="none"
                class="text-muted-800 dark:text-muted-100"
              >
                {{ asDollar(9543.13) }}
              </BaseText>
              <div
                class="divide-muted-300 dark:divide-muted-800 ms-auto flex items-center divide-x"
              >
                <BaseText
                  size="sm"
                  weight="medium"
                  lead="none"
                  class="text-muted-800 dark:text-muted-100 px-3"
                >
                  **** 4869
                </BaseText>
                <div class="px-3">
                  <Icon name="logos:mastercard" class="size-6" />
                </div>
              </div>
            </NuxtLink>
            <!--Account-->
            <NuxtLink
              to="/layouts/accounts"
              class="bg-muted-100 dark:bg-muted-900 dark:hover:bg-muted-900/50 flex items-center rounded-xl p-6 transition-colors duration-300 hover:bg-white"
            >
              <BaseText
                size="sm"
                weight="semibold"
                lead="none"
                class="text-muted-800 dark:text-muted-100"
              >
                {{ asDollar(2816.27) }}
              </BaseText>
              <div
                class="divide-muted-300 dark:divide-muted-800 ms-auto flex items-center divide-x"
              >
                <BaseText
                  size="sm"
                  weight="medium"
                  lead="none"
                  class="text-muted-800 dark:text-muted-100 px-3"
                >
                  **** 1521
                </BaseText>
                <div class="px-3">
                  <Icon name="logos:visa" class="size-6" />
                </div>
              </div>
            </NuxtLink>
            <!--Withdrawal-->
            <NuxtLink
              to="/layouts/cards"
              class="bg-muted-100 dark:bg-muted-900 dark:hover:bg-muted-900/50 flex items-center gap-3 rounded-2xl p-3 transition-colors duration-200 hover:bg-white"
            >
              <div
                class="dark:bg-muted-900 border-muted-200 dark:border-muted-800 flex size-12 items-center justify-center rounded-xl border bg-white"
              >
                <Icon
                  name="guidance:atm"
                  class="text-muted-800 dark:text-muted-100 size-5"
                />
              </div>
              <div>
                <BaseHeading
                  weight="medium"
                  size="sm"
                  class="text-mute-800 dark:text-muted-100"
                >
                  {{ asDollar(950) }} /
                  <span class="font-semibold">{{
                    asDollar(2500)
                  }}</span>
                </BaseHeading>
                <BaseParagraph
                  size="xs"
                  class="text-muted-400"
                >
                  Withdrawal limit
                </BaseParagraph>
              </div>
              <div class="ms-auto">
                <BaseButtonIcon rounded="lg" size="sm">
                  <Icon name="lucide:chevron-right" class="size-4" />
                </BaseButtonIcon>
              </div>
            </NuxtLink>
            <!--Payment-->
            <NuxtLink
              to="/layouts/cards"
              class="bg-muted-100 dark:bg-muted-900 dark:hover:bg-muted-900/50 flex items-center gap-3 rounded-2xl p-3 transition-colors duration-200 hover:bg-white"
            >
              <div
                class="dark:bg-muted-900 border-muted-200 dark:border-muted-800 flex size-12 items-center justify-center rounded-xl border bg-white"
              >
                <Icon
                  name="guidance:money"
                  class="text-muted-800 dark:text-muted-100 size-5"
                />
              </div>
              <div>
                <BaseHeading
                  weight="medium"
                  size="sm"
                  class="text-mute-800 dark:text-muted-100"
                >
                  {{ asDollar(231.12) }} /
                  <span class="font-semibold">{{
                    asDollar(5000)
                  }}</span>
                </BaseHeading>
                <BaseParagraph
                  size="xs"
                  class="text-muted-400"
                >
                  Payment limit
                </BaseParagraph>
              </div>
              <div class="ms-auto">
                <BaseButtonIcon rounded="lg" size="sm">
                  <Icon name="lucide:chevron-right" class="size-4" />
                </BaseButtonIcon>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
