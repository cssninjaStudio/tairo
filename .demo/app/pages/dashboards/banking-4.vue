<script setup lang="ts">
definePageMeta({
  title: 'Tracking',
  preview: {
    title: 'Banking dashboard v4',
    description: 'For personal account tracking',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-banking-4.png',
    srcDark: '/img/screens/dashboards-banking-4-dark.png',
    order: 10,
    new: true,
  },
})

const accounts = ref([
  {
    id: 1,
    type: 'checking',
    label: '**** 4897',
    number: '1487 3256 54122 4897',
    balance: 9543.12,
  },
  {
    id: 2,
    type: 'checking',
    label: '**** 4869',
    number: '3524 65456 3245 4869',
    balance: 1211.67,
  },
  {
    id: 3,
    type: 'savings',
    label: '**** 6279',
    number: '3524 65456 3245 6279',
    balance: 4653.97,
  },
])

const selectedPerson = ref('Amber Wilson')
const selectedAccount = ref(accounts.value[0])
const amount = ref()

const target = ref(null)
const open = ref(false)

function openDropdown() {
  open.value = true
}

onClickOutside(target, () => (open.value = false))

function setAccount(account: any) {
  selectedAccount.value = account
  open.value = false
}
</script>

<template>
  <div class="space-y-4 px-4 md:px-6 lg:px-8 pb-20">
    <div class="grid grid-cols-12 gap-4">
      <!-- Tile -->
      <div class="col-span-12 sm:col-span-6 2xl:landscape:col-span-3">
        <BaseCard
          rounded="md"
          class="p-2"
        >
          <div class="flex items-center">
            <div class="text-orange-500 relative">
              <BaseProgressCircle
                :max="100"
                :model-value="75"
                :size="75"
                :thickness="1"
                variant="none"
                class="text-orange-500 *:first:text-muted-200 *:dark:first:text-muted-900"
              />
              <Icon
                name="solar:fire-minimalistic-bold-duotone"
                class="absolute start-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div>
              <BaseParagraph
                size="xs"
                weight="medium"
                class="uppercase text-muted-600 dark:text-muted-400"
              >
                Weekly Profit
              </BaseParagraph>
              <BaseHeading size="xl" weight="medium" class="text-muted-900 dark:text-white">
                $926.31
              </BaseHeading>
            </div>
            <div class="ms-auto me-2">
              <BaseParagraph size="sm" weight="medium" class="text-orange-500">
                +2.3%
              </BaseParagraph>
            </div>
          </div>
        </BaseCard>
      </div>
      <!-- Tile -->
      <div class="col-span-12 sm:col-span-6 2xl:landscape:col-span-3">
        <BaseCard
          rounded="md"
          class="p-2"
        >
          <div class="flex items-center">
            <div class="text-green-500 relative">
              <BaseProgressCircle
                :max="100"
                :model-value="48"
                :size="75"
                :thickness="1"
                variant="none"
                class="text-green-500 *:first:text-muted-200 *:dark:first:text-muted-900"
              />
              <Icon
                name="solar:crown-line-bold-duotone"
                class="absolute start-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div>
              <BaseParagraph
                size="xs"
                weight="medium"
                class="uppercase text-muted-600 dark:text-muted-400"
              >
                Total Income
              </BaseParagraph>
              <BaseHeading size="xl" weight="medium" class="text-muted-900 dark:text-white">
                $2,629.43
              </BaseHeading>
            </div>
            <div class="ms-auto me-2">
              <BaseParagraph size="sm" weight="medium" class="text-green-500">
                +1.7%
              </BaseParagraph>
            </div>
          </div>
        </BaseCard>
      </div>
      <!-- Tile -->
      <div class="col-span-12 sm:col-span-6 2xl:landscape:col-span-3">
        <BaseCard
          rounded="md"

          class="p-2"
        >
          <div class="flex items-center">
            <div class="text-destructive-500 relative">
              <BaseProgressCircle
                :max="100"
                :model-value="34"
                :size="75"
                :thickness="1"
                variant="none"
                class="text-destructive-500 *:first:text-muted-200 *:dark:first:text-muted-900"
              />
              <Icon
                name="solar:card-recive-bold-duotone"
                class="absolute start-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div>
              <BaseParagraph
                size="xs"
                weight="medium"
                class="uppercase text-muted-600 dark:text-muted-400"
              >
                Total Expenses
              </BaseParagraph>
              <BaseHeading size="xl" weight="medium" class="text-muted-900 dark:text-white">
                $1,821.56
              </BaseHeading>
            </div>
            <div class="ms-auto me-2">
              <BaseParagraph size="sm" weight="medium" class="text-destructive-500">
                -2.1%
              </BaseParagraph>
            </div>
          </div>
        </BaseCard>
      </div>
      <!-- Tile -->
      <div class="col-span-12 sm:col-span-6 2xl:landscape:col-span-3">
        <BaseCard
          rounded="md"
          class="p-2"
        >
          <div class="flex items-center">
            <div class="text-primary-500 relative">
              <BaseProgressCircle
                :max="100"
                :model-value="82"
                :size="75"
                :thickness="1"
                variant="primary"
              />
              <Icon
                name="solar:calculator-minimalistic-bold-duotone"
                class="absolute start-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div>
              <BaseParagraph
                size="xs"
                weight="medium"
                class="uppercase text-muted-600 dark:text-muted-400"
              >
                Total Taxes
              </BaseParagraph>
              <BaseHeading size="xl" weight="medium" class="text-muted-900 dark:text-white">
                $712.19
              </BaseHeading>
            </div>
            <div class="ms-auto me-2">
              <BaseParagraph size="sm" weight="medium" class="text-primary-500">
                +1.1%
              </BaseParagraph>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12 space-y-4 lg:col-span-8">
        <!-- Account balance widget -->
        <DemoWidgetAccountBalance />
        <!-- Transactions widget -->
        <DemoWidgetTransactionCompact />
      </div>
      <form action="" class="col-span-12 space-y-4 lg:col-span-4">
        <BaseCard
          rounded="md"
          class="p-4 md:p-6"
        >
          <div class="my-6">
            <DemoCreditCardReal
              status="active"
              name="Maya Rosselini"
              number="•••• •••• •••• 4479"
              brand="mastercard"
            />
          </div>
          <div>
            <BaseHeading
              size="md"
              weight="medium"
              class="text-muted-800 dark:text-muted-100"
            >
              Quick Transfer
            </BaseHeading>
            <RadioGroupRoot v-model="selectedPerson" class="mt-6 flex justify-between gap-3">
              <div
                class="border-muted-200 hover:border-primary-500 dark:border-muted-700 flex size-12 items-center justify-center rounded-full border-2 transition-color duration-100"
              >
                <BaseButton size="icon-md" rounded="full">
                  <Icon name="lucide:plus" class="size-4" />
                </BaseButton>
              </div>
              <BaseTooltip
                v-for="person in [
                  { name: 'John Baxter', avatar: '/img/avatars/8.svg' },
                  { name: 'Amber Wilson', avatar: '/img/avatars/24.svg' },
                  { name: 'Kaleb Wilson', avatar: '/img/avatars/3.svg' },
                  { name: 'Jennifer Wilson', avatar: '/img/avatars/12.svg' },
                ]"
                :key="person.name"
                :content="person.name"
              >
                <RadioGroupItem
                  :value="person.name"
                  class="rounded-full outline-none focus-visible:nui-focus"
                >
                  <RadioGroupIndicator
                    force-mount
                    class="border-muted-200 data-[state=checked]:border-primary-500 dark:border-muted-700 flex size-12 items-center justify-center rounded-full border-2"
                  >
                    <BaseAvatar :src="person.avatar" :alt="person.name" size="sm" />
                  </RadioGroupIndicator>
                </RadioGroupItem>
              </BaseTooltip>
            </RadioGroupRoot>
          </div>
          <div class="mt-6 space-y-4">
            <!-- Dropdown -->
            <div ref="target" class="relative z-20 w-full">
              <button
                type="button"
                class="click-blur dark:bg-muted-950 border-muted-200 dark:border-muted-800 w-full rounded-xl border bg-white p-4"
                @click="openDropdown()"
              >
                <span class="flex w-full items-center gap-3 text-start">
                  <TairoLogo class="text-primary-500 size-8" />
                  <div>
                    <BaseText
                      size="sm"
                      class="text-muted-800 dark:text-muted-200 block capitalize"
                    >
                      {{ selectedAccount?.type }} {{ selectedAccount?.label }}
                    </BaseText>
                    <BaseText
                      size="xs"
                      class="text-muted-500 dark:text-muted-400 block"
                    >
                      ${{ selectedAccount?.balance.toFixed(2) }}
                    </BaseText>
                  </div>
                  <Icon
                    name="lucide:chevron-down"
                    class="text-muted-400 ms-auto size-4 transition-transform duration-300"
                    :class="open && 'rotate-180'"
                  />
                </span>
              </button>
              <Transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <div
                  v-if="open"
                  class="border-muted-200 dark:border-muted-800 dark:bg-muted-950 shadow-muted-400/10 dark:shadow-muted-800/10 absolute start-0 top-20 w-full rounded-xl border bg-white p-2 shadow-xl"
                >
                  <!-- Accounts -->
                  <ul>
                    <li v-for="account in accounts" :key="account.id">
                      <button
                        type="button"
                        class="hover:bg-muted-100 dark:hover:bg-muted-900 flex w-full items-center gap-3 rounded-lg px-4 py-2 text-start transition-colors duration-300"
                        @click="setAccount(account)"
                      >
                        <TairoLogo
                          class="text-muted-400 dark:text-muted-100 size-8"
                        />
                        <span class="block">
                          <span
                            class="font-heading text-muted-800 dark:text-muted-200 block text-sm capitalize"
                          >
                            {{ account.type }} {{ account.label }}
                          </span>
                          <span
                            class="font-heading text-muted-500 dark:text-muted-400 block text-xs"
                          >
                            ${{ account.balance.toFixed(2) }}
                          </span>
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
              </Transition>
            </div>
            <!-- Input -->
            <div class="relative">
              <BaseInputNumber
                v-model="amount"
                placeholder="Transfer amount"
              />
            </div>
            <div>
              <BaseButton
                type="submit"
                rounded="md"
                variant="primary"
                class="w-full"
              >
                Send Money
              </BaseButton>
            </div>
          </div>
        </BaseCard>
        <!-- Learn more -->
        <BaseCard
          rounded="md"
          class="relative flex flex-col gap-4 sm:flex-row"
        >
          <div class="flex flex-col p-6">
            <div
              class="dark:bg-muted-900 border-muted-200 dark:border-muted-800 mb-4 flex size-14 items-center justify-center rounded-full border bg-white"
            >
              <div
                class="dark:bg-muted-900 border-muted-200 dark:border-muted-800 flex size-10 items-center justify-center rounded-full border bg-white"
              >
                <Icon name="solar:bag-smile-bold-duotone" class="text-primary-500 size-6" />
              </div>
            </div>
            <BaseHeading
              as="h3"
              weight="medium"
              size="lg"
              class="text-muted-900 dark:text-muted-100 mb-2"
            >
              Try Quick Cash
            </BaseHeading>
            <BaseParagraph
              size="sm"
              class="text-muted-500 dark:text-muted-400 mb-4"
            >
              Quick Cash is a new feature that allows you to send money to your friends and family in a matter of seconds.
            </BaseParagraph>
            <div class="mb-1 mt-auto">
              <DemoLinkArrow to="#" label="Learn more about it" />
            </div>
          </div>
        </BaseCard>
      </form>
    </div>
  </div>
</template>
