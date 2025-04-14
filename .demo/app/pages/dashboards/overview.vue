<script setup lang="ts">
definePageMeta({
  title: 'Overview',
  preview: {
    title: 'Overview',
    description: 'For tracking and quick actions',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-overview.png',
    srcDark: '/img/screens/dashboards-overview-dark.png',
    order: 5,
    new: true,
  },
})
</script>

<template>
  <div class="px-4 md:px-6 lg:px-8 pb-20">
    <div class="grid grid-cols-12 gap-4">
      <!-- Cards -->
      <div
        class="col-span-12 lg:col-span-4"
      >
        <BaseCard rounded="none" class="lg:landscape:p-6 rounded-2xl! border p-4 md:p-6 2xl:landscape:p-12">
          <!-- Header -->
          <div class="mb-6 flex items-center justify-between">
            <BaseHeading
              weight="medium"
              class="text-muted-900 dark:text-muted-100"
            >
              Your cards
            </BaseHeading>
            <BaseButton
              to="/layouts/card/new"
              rounded="lg"
              size="icon-sm"
            >
              <Icon name="lucide:plus" class="size-4" />
            </BaseButton>
          </div>
          <!-- Cards and accounts -->
          <div
            class="border-muted-300 dark:border-muted-800 flex flex-col gap-6 border-b pb-10"
          >
            <!-- Card -->
            <div class="bg-muted-200 dark:bg-muted-800 mx-auto w-full max-w-[315px] rounded-2xl p-2">
              <DemoCreditCardReal
                status="active"
                name="Kendra Wilson"
                number="•••• •••• •••• 4479"
                brand="mastercard"
              />
            </div>
            <!-- Account -->
            <NuxtLink
              to="/layouts/accounts"
              class="bg-muted-100 hover:bg-muted-200 dark:bg-muted-950 dark:hover:bg-muted-900 flex items-center rounded-xl p-6 transition-colors duration-300"
            >
              <BaseText
                size="sm"
                weight="semibold"
                lead="none"
                class="text-muted-800 dark:text-muted-100"
              >
                {{ formatPrice(9543.13) }}
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
            <!-- Account -->
            <NuxtLink
              to="/layouts/accounts"
              class="bg-muted-100 hover:bg-muted-200 dark:bg-muted-950 dark:hover:bg-muted-900 flex items-center rounded-xl p-6 transition-colors duration-300"
            >
              <BaseText
                size="sm"
                weight="semibold"
                lead="none"
                class="text-muted-800 dark:text-muted-100"
              >
                {{ formatPrice(2816.27) }}
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
          </div>
          <!-- Limits -->
          <div class="flex flex-col gap-6 pt-6">
            <!-- Withdrawal -->
            <NuxtLink
              to="/layouts/cards"
              class="hover:bg-muted-100 dark:hover:bg-muted-900 flex items-center gap-3 rounded-2xl p-3 transition-colors duration-200"
            >
              <div
                class="dark:bg-muted-900 border-muted-200 dark:border-muted-800 flex size-12 items-center justify-center rounded-xl border bg-white"
              >
                <Icon
                  name="solar:card-recive-linear"
                  class="text-muted-800 dark:text-muted-100 size-6"
                />
              </div>
              <div>
                <BaseHeading
                  weight="medium"
                  size="sm"
                  class="text-mute-800 dark:text-muted-100"
                >
                  {{ formatPrice(950) }} /
                  <span class="font-semibold">{{
                    formatPrice(2500)
                  }}</span>
                </BaseHeading>
                <BaseParagraph
                  size="xs"
                  class="text-muted-600 dark:text-muted-400"
                >
                  Withdrawal limit
                </BaseParagraph>
              </div>
              <div class="ms-auto">
                <BaseButton rounded="lg" size="icon-sm">
                  <Icon name="lucide:chevron-right" class="size-4" />
                </BaseButton>
              </div>
            </NuxtLink>
            <!-- Payment -->
            <NuxtLink
              to="/layouts/cards"
              class="hover:bg-muted-100 dark:hover:bg-muted-900 flex items-center gap-3 rounded-2xl p-3 transition-colors duration-200"
            >
              <div
                class="dark:bg-muted-900 border-muted-200 dark:border-muted-800 flex size-12 items-center justify-center rounded-xl border bg-white"
              >
                <Icon
                  name="solar:card-transfer-linear"
                  class="text-muted-800 dark:text-muted-100 size-6"
                />
              </div>
              <div>
                <BaseHeading
                  weight="medium"
                  size="sm"
                  class="text-mute-800 dark:text-muted-100"
                >
                  {{ formatPrice(231.12) }} /
                  <span class="font-semibold">{{
                    formatPrice(5000)
                  }}</span>
                </BaseHeading>
                <BaseParagraph
                  size="xs"
                  class="text-muted-600 dark:text-muted-400"
                >
                  Payment limit
                </BaseParagraph>
              </div>
              <div class="ms-auto">
                <BaseButton rounded="lg" size="icon-sm">
                  <Icon name="lucide:chevron-right" class="size-4" />
                </BaseButton>
              </div>
            </NuxtLink>
          </div>
        </BaseCard>
      </div>
      <!-- Quick transactions -->
      <div
        class="col-span-12 lg:col-span-8"
      >
        <BaseCard
          variant="none"
          rounded="none"
          class="lg:landscape:p-6 rounded-2xl! bg-muted-200/60 dark:bg-muted-950/80 py-4 md:py-6 2xl:landscape:py-12"
        >
          <!-- Header ---->
          <div class="mb-6 px-4 md:px-6 flex items-center justify-between">
            <BaseHeading
              weight="medium"
              class="text-muted-800 dark:text-muted-100"
            >
              Quick transaction
            </BaseHeading>
            <BaseButton
              to="/layouts/send"
              rounded="lg"
              size="icon-sm"
            >
              <Icon name="lucide:plus" class="size-4" />
            </BaseButton>
          </div>
          <div
            class="nui-slimscroll px-4 md:px-6 flex gap-4 overflow-x-auto lg:overflow-x-hidden"
          >
            <NuxtLink
              to="/layouts/send"
              class="bg-muted-200 dark:bg-muted-950 hover:bg-muted-300 dark:hover:bg-muted-900 flex-1 rounded-2xl p-4 text-center transition-colors duration-200"
            >
              <BaseIconBox
                size="md"
                rounded="none"
                mask="blob"
                class="dark:bg-muted-950 mx-auto mb-2 bg-white"
              >
                <Icon name="solar:calculator-linear" class="size-6" />
              </BaseIconBox>
              <BaseText size="sm" class="line-clamp-1">
                Manual
              </BaseText>
            </NuxtLink>
            <div
              role="button"
              class="bg-muted-200 dark:bg-muted-950 hover:bg-muted-300 dark:hover:bg-muted-900 flex-1 rounded-2xl p-4 text-center transition-colors duration-200"
            >
              <BaseAvatar
                src="/img/avatars/3.svg"
                size="md"
                rounded="none"
                mask="blob"
                class="mx-auto mb-2"
              />
              <BaseText size="sm" class="line-clamp-1">
                Kaleb W.
              </BaseText>
            </div>
            <div
              role="button"
              class="bg-muted-200 dark:bg-muted-950 hover:bg-muted-300 dark:hover:bg-muted-900 flex-1 rounded-2xl p-4 text-center transition-colors duration-200"
            >
              <BaseAvatar
                src="/img/avatars/8.svg"
                size="md"
                rounded="none"
                mask="blob"
                class="mx-auto mb-2"
              />
              <BaseText size="sm" class="line-clamp-1">
                John B.
              </BaseText>
            </div>
            <div
              role="button"
              class="bg-muted-200 dark:bg-muted-950 hover:bg-muted-300 dark:hover:bg-muted-900 flex-1 rounded-2xl p-4 text-center transition-colors duration-200"
            >
              <BaseAvatar
                src="/img/avatars/24.svg"
                size="md"
                rounded="none"
                mask="blob"
                class="mx-auto mb-2"
              />
              <BaseText size="sm" class="line-clamp-1">
                Amber W.
              </BaseText>
            </div>
            <div
              role="button"
              class="bg-muted-200 dark:bg-muted-950 hover:bg-muted-300 dark:hover:bg-muted-900 flex-1 rounded-2xl p-4 text-center transition-colors duration-200"
            >
              <BaseAvatar
                src="/img/avatars/12.svg"
                size="md"
                rounded="none"
                mask="blob"
                class="mx-auto mb-2"
              />
              <BaseText size="sm" class="line-clamp-1">
                Jennifer W.
              </BaseText>
            </div>
            <div
              role="button"
              class="bg-muted-200 dark:bg-muted-950 hover:bg-muted-300 dark:hover:bg-muted-900 flex-1 rounded-2xl p-4 text-center transition-colors duration-200"
            >
              <BaseAvatar
                src="/img/avatars/13.svg"
                size="md"
                rounded="none"
                mask="blob"
                class="mx-auto mb-2"
              />
              <BaseText size="sm" class="line-clamp-1">
                Josh D.
              </BaseText>
            </div>
          </div>
          <div class="px-4 md:px-6 py-10">
            <DemoChartAreaBalance class="[--color-chart-gradient:var(--color-muted-100)] dark:[--color-chart-gradient:var(--color-muted-950)]" />
          </div>

          <DemoActivityTable />
        </BaseCard>
      </div>
    </div>
  </div>
</template>
